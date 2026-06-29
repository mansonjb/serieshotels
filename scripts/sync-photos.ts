#!/usr/bin/env tsx
/**
 * Apify (compass~crawler-google-places) → real-place photos for Destinations + Locations.
 *
 *   pnpm sync-photos           # skips slugs already downloaded
 *   FORCE=1 pnpm sync-photos   # refetch everything
 *
 * Writes JPEGs to public/{destinations,locations}/<slug>/ and a manifest to
 * data/generated/images.json (slug -> { hero, gallery[] }). Real places only
 * — never posters/stills (see CLAUDE.md). Key from .env.local, never shipped.
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { DESTINATIONS } from "../data/destinations";
import { LOCATIONS } from "../data/locations";

const APIFY_TOKEN = process.env.APIFY_API_KEY;
if (!APIFY_TOKEN) {
  console.error("[photos] APIFY_API_KEY missing from .env.local");
  process.exit(1);
}
const FORCE = Boolean(process.env.FORCE);

const ACTOR_URL =
  "https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items";
const PUBLIC = join(process.cwd(), "public");
const GEN = join(process.cwd(), "data", "generated");
const DEST_PHOTOS = 4;
const LOC_PHOTOS = 2;

const DEST_QUERY: Record<string, string> = {
  dubrovnik: "Dubrovnik Old Town city walls Croatia",
  "south-iceland": "Þingvellir National Park Iceland",
  "county-down": "Strangford Lough County Down Northern Ireland",
  taormina: "Taormina Sicily ancient theatre Etna",
  paris: "Paris Eiffel Tower Seine skyline",
};
const LOC_QUERY: Record<string, string> = {
  thingvellir: "Þingvellir National Park Almannagjá gorge Iceland",
  "castle-ward": "Castle Ward estate Strangford Northern Ireland",
  "kalami-bay": "Kalami beach Corfu Greece",
  "ahyeon-dong-stairs": "Parasite Stairs Ahyeon Seoul",
};

type Entry = { hero?: string; gallery?: string[] };

async function fetchImageUrls(query: string, count: number): Promise<string[]> {
  const url = `${ACTOR_URL}?token=${encodeURIComponent(APIFY_TOKEN!)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      searchStringsArray: [query],
      maxCrawledPlacesPerSearch: 1,
      language: "en",
      includeImages: true,
      maxImages: count,
      scrapeReviewsPersonalData: false,
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Apify ${res.status}: ${txt.slice(0, 200)}`);
  }
  const data = (await res.json()) as unknown[];
  if (!data.length) return [];
  const item = data[0] as Record<string, unknown>;
  const urls = item.imageUrls;
  if (!Array.isArray(urls)) return [];
  return (urls as unknown[])
    .filter((u): u is string => typeof u === "string")
    .slice(0, count);
}

async function downloadImage(url: string, dest: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

function existingJpgs(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".jpg"))
    .sort();
}

function stripParens(name: string): string {
  return name.replace(/\s*\([^)]*\)/g, "").trim();
}

async function syncEntry(
  kind: "destinations" | "locations",
  slug: string,
  query: string,
  count: number,
): Promise<Entry | null> {
  const dir = join(PUBLIC, kind, slug);
  const prefix = `/${kind}/${slug}`;

  if (!FORCE) {
    const have = existingJpgs(dir);
    if (have.includes("hero.jpg")) {
      const gallery = have
        .filter((f) => f !== "hero.jpg")
        .map((f) => `${prefix}/${f}`);
      console.log(`  ${slug.padEnd(28)} • cached (${have.length})`);
      return { hero: `${prefix}/hero.jpg`, gallery };
    }
  }

  const urls = await fetchImageUrls(query, count);
  if (!urls.length) {
    console.log(`  ${slug.padEnd(28)} ✗ no images  ("${query}")`);
    return null;
  }

  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const saved: string[] = [];
  for (let i = 0; i < urls.length; i++) {
    const filename = i === 0 ? "hero.jpg" : `photo-${i + 1}.jpg`;
    try {
      await downloadImage(urls[i], join(dir, filename));
      saved.push(`${prefix}/${filename}`);
    } catch (err) {
      console.warn(`    ! ${filename}: ${(err as Error).message}`);
    }
  }
  if (saved.length === 0) return null;
  console.log(`  ${slug.padEnd(28)} ✓ ${saved.length}`);
  return { hero: saved[0], gallery: saved.slice(1) };
}

async function main(): Promise<void> {
  const manifest = {
    destinations: {} as Record<string, Entry>,
    locations: {} as Record<string, Entry>,
  };

  console.log("Destinations:");
  for (const d of DESTINATIONS) {
    const query = DEST_QUERY[d.slug] ?? `${d.name} ${d.country}`;
    try {
      const entry = await syncEntry("destinations", d.slug, query, DEST_PHOTOS);
      if (entry) manifest.destinations[d.slug] = entry;
    } catch (err) {
      console.log(`  ${d.slug.padEnd(28)} ✗ ${(err as Error).message}`);
    }
  }

  console.log("Locations:");
  for (const l of LOCATIONS) {
    const dest = DESTINATIONS.find((d) => d.slug === l.destinationSlug);
    const query =
      LOC_QUERY[l.slug] ??
      `${stripParens(l.name)} ${dest?.name ?? ""} ${dest?.country ?? ""}`.trim();
    try {
      const entry = await syncEntry("locations", l.slug, query, LOC_PHOTOS);
      if (entry) manifest.locations[l.slug] = entry;
    } catch (err) {
      console.log(`  ${l.slug.padEnd(28)} ✗ ${(err as Error).message}`);
    }
  }

  if (!existsSync(GEN)) mkdirSync(GEN, { recursive: true });
  writeFileSync(
    join(GEN, "images.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  const dc = Object.keys(manifest.destinations).length;
  const lc = Object.keys(manifest.locations).length;
  console.log(
    `\n[photos] manifest written: ${dc}/${DESTINATIONS.length} destinations, ${lc}/${LOCATIONS.length} locations`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
