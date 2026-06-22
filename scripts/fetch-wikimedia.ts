#!/usr/bin/env tsx
/**
 * High-res, properly-licensed hero images from Wikimedia Commons via the
 * Wikipedia API (the article's lead image), with attribution captured for the
 * required credit line. Replaces the Google Places photos (resolution-limited
 * + restrictive ToS).
 *
 *   pnpm exec tsx scripts/fetch-wikimedia.ts                 # all
 *   pnpm exec tsx scripts/fetch-wikimedia.ts --only=a,b,c    # a subset (test)
 *
 * Writes the 2000px image to public/<kind>/<slug>/hero.jpg and accumulates
 * data/generated/_wiki.json: { "<kind>/<slug>": { hero, author, license,
 * licenseUrl, source } }. A later step merges this into images.json + credits.
 */
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { DESTINATIONS } from "../data/destinations";
import { LOCATIONS } from "../data/locations";

const UA = "ScreenToTrip/1.0 (https://screentotrip.com; set-jetting guide)";
const ROOT = process.cwd();
const OUT = join(ROOT, "data", "generated", "_wiki.json");
const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const ONLY = onlyArg ? new Set(onlyArg.split("=")[1].split(",")) : null;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const stripParens = (s: string) => s.replace(/\s*\([^)]*\)/g, "").trim();
const stripHtml = (s = "") => s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

/** fetch that backs off on 429 / 5xx (Wikimedia rate-limits the CDN hard). */
async function fetchRetry(url: string | URL, label: string, tries = 6): Promise<Response> {
  const backoff = [1000, 3000, 8000, 15000, 25000, 40000];
  for (let i = 0; i < tries; i += 1) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.ok) return r;
    if (r.status === 429 || r.status >= 500) {
      const ra = Number(r.headers.get("retry-after"));
      await sleep(ra > 0 ? ra * 1000 : backoff[i] ?? 40000);
      continue;
    }
    throw new Error(`${label} ${r.status}`);
  }
  throw new Error(`${label} 429 (gave up)`);
}

async function api(host: string, params: Record<string, string>) {
  const u = new URL(`https://${host}/w/api.php`);
  u.search = new URLSearchParams({ format: "json", origin: "*", ...params }).toString();
  const r = await fetchRetry(u, "api");
  return r.json();
}

/** Find the lead image filename of the best-matching Wikipedia article. */
async function findFile(query: string): Promise<string | null> {
  const j = await api("en.wikipedia.org", {
    action: "query",
    prop: "pageimages",
    piprop: "name",
    generator: "search",
    gsrsearch: query,
    gsrlimit: "1",
    gsrnamespace: "0",
  });
  const pages = j?.query?.pages;
  if (!pages) return null;
  const p = Object.values(pages)[0] as { pageimage?: string };
  return p?.pageimage ?? null;
}

/** Get a 2000px URL + attribution for a File:. */
async function fileInfo(file: string) {
  const j = await api("en.wikipedia.org", {
    action: "query",
    titles: `File:${file}`,
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "2000",
  });
  const pages = j?.query?.pages;
  const p = Object.values(pages ?? {})[0] as {
    imageinfo?: Array<{ thumburl?: string; url?: string; descriptionurl?: string; extmetadata?: Record<string, { value?: string }> }>;
  };
  const info = p?.imageinfo?.[0];
  if (!info) return null;
  const em = info.extmetadata ?? {};
  return {
    url: info.thumburl || info.url || "",
    source: info.descriptionurl || "",
    author: stripHtml(em.Artist?.value) || "Wikimedia Commons",
    license: stripHtml(em.LicenseShortName?.value) || "",
    licenseUrl: em.LicenseUrl?.value || "",
  };
}

async function download(url: string, out: string) {
  const r = await fetchRetry(url, "img");
  writeFileSync(out, Buffer.from(await r.arrayBuffer()));
}

type Entry = { hero: string; author: string; license: string; licenseUrl: string; source: string };

async function main() {
  const manifest: Record<string, Entry> = existsSync(OUT)
    ? JSON.parse(readFileSync(OUT, "utf8"))
    : {};

  const jobs: Array<{ kind: string; slug: string; query: string }> = [];
  for (const l of LOCATIONS) {
    const d = DESTINATIONS.find((x) => x.slug === l.destinationSlug);
    jobs.push({ kind: "locations", slug: l.slug, query: `${stripParens(l.name)} ${d?.name ?? ""} ${d?.country ?? ""}`.trim() });
  }
  for (const d of DESTINATIONS) {
    jobs.push({ kind: "destinations", slug: d.slug, query: `${d.name} ${d.country}`.trim() });
  }

  let i = 0;
  for (const job of jobs) {
    i += 1;
    if (ONLY && !ONLY.has(job.slug)) continue;
    const key = `${job.kind}/${job.slug}`;
    if (manifest[key]?.hero) continue; // resume: skip already-fetched
    try {
      const file = await findFile(job.query);
      if (!file) { console.log(`${key}: no article (${job.query})`); continue; }
      const info = await fileInfo(file);
      if (!info?.url) { console.log(`${key}: no imageinfo`); continue; }
      const dir = join(ROOT, "public", job.kind, job.slug);
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      await download(info.url, join(dir, "hero.jpg"));
      manifest[key] = {
        hero: `/${job.kind}/${job.slug}/hero.jpg`,
        author: info.author,
        license: info.license,
        licenseUrl: info.licenseUrl,
        source: info.source,
      };
      console.log(`${key}: ok — ${info.author} (${info.license})`);
    } catch (e) {
      console.log(`${key}: ERR ${(e as Error).message}`);
    }
    writeFileSync(OUT, `${JSON.stringify(manifest, null, 2)}\n`);
    await sleep(600);
  }
  console.log(`\ndone. entries: ${Object.keys(manifest).length}`);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
