#!/usr/bin/env tsx
/**
 * Google Places API v1 → real-place photos for every Destination + Location.
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

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("[photos] GOOGLE_PLACES_API_KEY missing from .env.local");
  process.exit(1);
}
const FORCE = Boolean(process.env.FORCE);

const SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const MEDIA_BASE = "https://places.googleapis.com/v1";
const PUBLIC = join(process.cwd(), "public");
const GEN = join(process.cwd(), "data", "generated");
const DEST_PHOTOS = 4;
const LOC_PHOTOS = 2;

/** Overrides where the default "<name> <country>" query misses the scenic shot. */
const DEST_QUERY: Record<string, string> = {
  dubrovnik: "Dubrovnik Old Town city walls Croatia",
  "south-iceland": "Þingvellir National Park Iceland",
  "county-down": "Strangford Lough County Down Northern Ireland",
  taormina: "Taormina Sicily ancient theatre Etna",
  paris: "Paris Eiffel Tower Seine skyline",
};
/** Overrides for locations whose plain name is ambiguous to Places. */
const LOC_QUERY: Record<string, string> = {
  thingvellir: "Þingvellir National Park Almannagjá gorge Iceland",
  "castle-ward": "Castle Ward estate Strangford Northern Ireland",
};

type Place = {
  id: string;
  displayName?: { text: string };
  photos?: Array<{ name: string }>;
};
type Entry = { hero?: string; gallery?: string[] };

async function search(query: string): Promise<Place | null> {
  const res = await fetch(SEARCH_URL, {
    method: "POST",
    headers: {
      "X-Goog-Api-Key": API_KEY!,
      "X-Goog-FieldMask": "places.id,places.displayName,places.photos",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ textQuery: query, pageSize: 1 }),
  });
  if (!res.ok) {
    throw new Error(`searchText ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  const data = (await res.json()) as { places?: Place[] };
  return data.places?.[0] ?? null;
}

async function download(photoName: string, dest: string): Promise<void> {
  const url = `${MEDIA_BASE}/${photoName}/media?key=${API_KEY}&maxHeightPx=1200&maxWidthPx=1600`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`media ${res.status}`);
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

  const place = await search(query);
  const photos = (place?.photos ?? []).slice(0, count);
  if (!place || photos.length === 0) {
    console.log(`  ${slug.padEnd(28)} ✗ no photos  ("${query}")`);
    return null;
  }

  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const saved: string[] = [];
  for (let i = 0; i < photos.length; i += 1) {
    const filename = i === 0 ? "hero.jpg" : `photo-${i + 1}.jpg`;
    try {
      await download(photos[i].name, join(dir, filename));
      saved.push(`${prefix}/${filename}`);
    } catch (err) {
      console.warn(`    ! ${filename}: ${(err as Error).message}`);
    }
  }
  if (saved.length === 0) return null;
  console.log(`  ${slug.padEnd(28)} ✓ ${saved.length} — ${place.displayName?.text ?? ""}`);
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
