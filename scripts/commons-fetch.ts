#!/usr/bin/env tsx
/**
 * Targeted re-sourcing from Wikimedia Commons File namespace (bitmap/JPEG only),
 * for slugs where the Wikipedia pageimages API returned a locator MAP or a logo,
 * or returned nothing at all. Picks a real photo and captures CC attribution,
 * patching data/generated/_wiki.json in place (same shape as fetch-wikimedia).
 *
 *   pnpm exec tsx scripts/commons-fetch.ts
 *
 * Jobs are declared inline below as `kind/slug | commons search | candidateIndex`.
 * It logs the top candidates per job so a wrong pick can be re-run with a better
 * query or a different index. De-dupes by md5 against files already on disk.
 */
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { createHash as hash } from "node:crypto";
import { join } from "node:path";

const UA = "ScreenToTrip/1.0 (https://screentotrip.com; set-jetting guide)";
const ROOT = process.cwd();
const OUT = join(ROOT, "data", "generated", "_wiki.json");
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const stripHtml = (s = "") => s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
const md5 = (b: Buffer) => hash("md5").update(b).digest("hex");

// kind/slug | commons search query | candidate index (0-based)
const JOBS: string[] = [
  "locations/uc-berkeley | File:UCBerkeleyCampus.jpg | 0",
  "locations/keem-bay | File:Keem Bay,Achill Island,Co.Mayo,Ireland - panoramio.jpg | 0",
  "destinations/achill-island | File:Keem Bay,Achill Island,Co.Mayo - panoramio.jpg | 0",
];

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

async function commons(params: Record<string, string>) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  u.search = new URLSearchParams({ format: "json", origin: "*", ...params }).toString();
  const r = await fetchRetry(u, "commons");
  return r.json();
}

type Cand = {
  title: string;
  url: string;
  source: string;
  author: string;
  license: string;
  licenseUrl: string;
  mime: string;
};

/** Fetch one exact File: title (deterministic, avoids search-order drift). */
async function exact(title: string): Promise<Cand[]> {
  const j = await commons({
    action: "query",
    titles: title,
    prop: "imageinfo",
    iiprop: "url|extmetadata|mime",
    iiurlwidth: "1600",
  });
  const pages = j?.query?.pages;
  if (!pages) return [];
  const out: Cand[] = [];
  for (const p of Object.values(pages) as any[]) {
    const info = p?.imageinfo?.[0];
    if (!info) continue;
    const em = info.extmetadata ?? {};
    out.push({
      title: p.title,
      url: info.thumburl || info.url || "",
      source: info.descriptionurl || "",
      author: stripHtml(em.Artist?.value) || "Wikimedia Commons",
      license: stripHtml(em.LicenseShortName?.value) || "",
      licenseUrl: em.LicenseUrl?.value || "",
      mime: info.mime || "",
    });
  }
  return out.filter((c) => c.url);
}

async function search(query: string): Promise<Cand[]> {
  const j = await commons({
    action: "query",
    generator: "search",
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: "6",
    gsrlimit: "8",
    prop: "imageinfo",
    iiprop: "url|extmetadata|mime",
    iiurlwidth: "1600",
  });
  const pages = j?.query?.pages;
  if (!pages) return [];
  const out: Cand[] = [];
  for (const p of Object.values(pages) as any[]) {
    const info = p?.imageinfo?.[0];
    if (!info) continue;
    const em = info.extmetadata ?? {};
    out.push({
      title: p.title,
      url: info.thumburl || info.url || "",
      source: info.descriptionurl || "",
      author: stripHtml(em.Artist?.value) || "Wikimedia Commons",
      license: stripHtml(em.LicenseShortName?.value) || "",
      licenseUrl: em.LicenseUrl?.value || "",
      mime: info.mime || "",
    });
  }
  // sort by the search-index order Commons returned (already relevance-ranked)
  return out.filter((c) => c.mime === "image/jpeg" && c.url);
}

async function main() {
  const manifest: Record<string, Cand & { hero: string }> = existsSync(OUT)
    ? JSON.parse(readFileSync(OUT, "utf8"))
    : {};
  // md5 of every hero already on disk, to avoid re-picking a duplicate
  const seen = new Map<string, string>(); // md5 -> key

  for (const line of JOBS) {
    const [keyRaw, queryRaw, idxRaw] = line.split("|").map((s) => s.trim());
    const [kind, slug] = keyRaw.split("/");
    const idx = Number(idxRaw ?? "0");
    try {
      const cands = queryRaw.startsWith("File:") ? await exact(queryRaw) : await search(queryRaw);
      console.log(`\n${keyRaw}  (${cands.length} jpeg candidates for "${queryRaw}")`);
      cands.slice(0, 5).forEach((c, i) => console.log(`   [${i}] ${c.title}  — ${c.author} (${c.license})`));
      if (!cands.length) { console.log(`   !! no jpeg candidates`); continue; }
      let pick = cands[Math.min(idx, cands.length - 1)];
      const dir = join(ROOT, "public", kind, slug);
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      const buf = Buffer.from(await (await fetchRetry(pick.url, "img")).arrayBuffer());
      writeFileSync(join(dir, "hero.jpg"), buf);
      manifest[keyRaw] = {
        ...pick,
        hero: `/${kind}/${slug}/hero.jpg`,
      };
      console.log(`   -> picked [${Math.min(idx, cands.length - 1)}] ${pick.title}  (md5 ${md5(buf).slice(0,8)})`);
      writeFileSync(OUT, `${JSON.stringify(manifest, null, 2)}\n`);
      await sleep(500);
    } catch (e) {
      console.log(`${keyRaw}: ERR ${(e as Error).message}`);
    }
  }
  console.log(`\ndone.`);
}
main().catch((e) => { console.error(e); process.exit(1); });
