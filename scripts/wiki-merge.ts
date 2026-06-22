#!/usr/bin/env tsx
/**
 * Merge the Wikimedia fetch (data/generated/_wiki.json) into:
 *   - data/generated/images.json       hero-only (no Google galleries)
 *   - data/generated/image-credits.json  per-image CC attribution
 *
 * A location with no Wikimedia hit falls back to its destination's hero (and
 * inherits that photo's credit), so location pages still show a relevant image.
 * Non-destructive: only rewrites the two JSON manifests.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { LOCATIONS } from "../data/locations";
import { DESTINATIONS } from "../data/destinations";

const ROOT = process.cwd();
const wiki: Record<
  string,
  { hero: string; author: string; license: string; licenseUrl: string; source: string }
> = JSON.parse(readFileSync(join(ROOT, "data/generated/_wiki.json"), "utf8"));

const credit = (v: (typeof wiki)[string]) => ({
  author: v.author,
  license: v.license,
  licenseUrl: v.licenseUrl,
  source: v.source,
});

const images = {
  destinations: {} as Record<string, { hero: string }>,
  locations: {} as Record<string, { hero: string }>,
};
const credits: Record<string, ReturnType<typeof credit>> = {};

for (const [key, v] of Object.entries(wiki)) {
  if (!key.startsWith("destinations/")) continue;
  const slug = key.slice("destinations/".length);
  images.destinations[slug] = { hero: v.hero };
  credits[key] = credit(v);
}

let locFallback = 0;
let locMissing = 0;
for (const l of LOCATIONS) {
  const key = `locations/${l.slug}`;
  const own = wiki[key];
  if (own) {
    images.locations[l.slug] = { hero: own.hero };
    credits[key] = credit(own);
    continue;
  }
  const dest = wiki[`destinations/${l.destinationSlug}`];
  if (dest) {
    images.locations[l.slug] = { hero: dest.hero };
    credits[key] = credit(dest);
    locFallback += 1;
  } else {
    locMissing += 1;
  }
}

// Destinations Wikimedia missed: borrow one of their own locations' photos.
let destFallback = 0;
for (const d of DESTINATIONS) {
  if (images.destinations[d.slug]) continue;
  const loc = LOCATIONS.find((l) => l.destinationSlug === d.slug && images.locations[l.slug]);
  if (loc) {
    images.destinations[d.slug] = { hero: images.locations[loc.slug].hero };
    credits[`destinations/${d.slug}`] = credits[`locations/${loc.slug}`];
    destFallback += 1;
  }
}

writeFileSync(join(ROOT, "data/generated/images.json"), `${JSON.stringify(images, null, 2)}\n`);
writeFileSync(join(ROOT, "data/generated/image-credits.json"), `${JSON.stringify(credits, null, 2)}\n`);
console.log(
  `images: ${Object.keys(images.destinations).length} dest (${destFallback} via location fallback), ` +
    `${Object.keys(images.locations).length} loc (${locFallback} via dest fallback, ${locMissing} with no image)\n` +
    `credits: ${Object.keys(credits).length}`,
);
