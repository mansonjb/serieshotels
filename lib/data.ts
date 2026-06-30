/**
 * Read-side joins over the typed /data graph. Server Components import from
 * here; the raw arrays stay in /data and are never mutated at runtime.
 */
import type { Destination, Location, Title } from "@/data/types";
import { TITLES } from "@/data/titles";
import { LOCATIONS } from "@/data/locations";
import { DESTINATIONS } from "@/data/destinations";

export { TITLES, LOCATIONS, DESTINATIONS };
export type { Destination, Location, Title };

const titleBySlug = new Map(TITLES.map((t) => [t.slug, t]));
const locationBySlug = new Map(LOCATIONS.map((l) => [l.slug, l]));
const destinationBySlug = new Map(DESTINATIONS.map((d) => [d.slug, d]));

export function getTitle(slug: string): Title | undefined {
  return titleBySlug.get(slug);
}
export function getLocation(slug: string): Location | undefined {
  return locationBySlug.get(slug);
}
export function getDestination(slug: string): Destination | undefined {
  return destinationBySlug.get(slug);
}

export function locationsForTitle(titleSlug: string): Location[] {
  return LOCATIONS.filter((l) => l.titleSlug === titleSlug);
}
export function locationsForDestination(destinationSlug: string): Location[] {
  return LOCATIONS.filter((l) => l.destinationSlug === destinationSlug);
}
export function titlesForDestination(destinationSlug: string): Title[] {
  const slugs = new Set(
    locationsForDestination(destinationSlug).map((l) => l.titleSlug),
  );
  return TITLES.filter((t) => slugs.has(t.slug));
}
export function destinationsForTitle(titleSlug: string): Destination[] {
  const slugs = new Set(
    locationsForTitle(titleSlug).map((l) => l.destinationSlug),
  );
  return DESTINATIONS.filter((d) => slugs.has(d.slug));
}
export function titleForLocation(loc: Location): Title | undefined {
  return getTitle(loc.titleSlug);
}
export function destinationForLocation(loc: Location): Destination | undefined {
  return getDestination(loc.destinationSlug);
}

/** Count helper for hub cards ("3 works · 8 spots"). */
export function destinationStats(destinationSlug: string) {
  const locs = locationsForDestination(destinationSlug);
  const titles = new Set(locs.map((l) => l.titleSlug));
  return { locations: locs.length, titles: titles.size };
}

// Precomputed destinationSlug -> set of titleSlugs, so relatedDestinations()
// doesn't re-scan LOCATIONS for every candidate on every one of the ~530
// destination page renders.
const titleSlugsByDest = new Map<string, Set<string>>();
for (const l of LOCATIONS) {
  let set = titleSlugsByDest.get(l.destinationSlug);
  if (!set) titleSlugsByDest.set(l.destinationSlug, (set = new Set()));
  set.add(l.titleSlug);
}

const toRad = (d: number) => (d * Math.PI) / 180;
function distanceKm(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const dLa = toRad(bLat - aLat);
  const dLo = toRad(bLng - aLng);
  const x =
    Math.sin(dLa / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLo / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

export type RelatedDestination = {
  dest: Destination;
  /** A production shared with the origin destination, if any (strongest link). */
  sharedTitleSlug?: string;
  sameCountry: boolean;
};

/**
 * Destinations to bridge to from a destination page, for internal linking.
 * Scored by shared productions (set-jetting relevance), then same country /
 * region, with geographic proximity as the tiebreaker so the list is always
 * filled with the nearest places even when nothing else matches.
 */
export function relatedDestinations(slug: string, limit = 6): RelatedDestination[] {
  const origin = destinationBySlug.get(slug);
  if (!origin) return [];
  const myTitles = titleSlugsByDest.get(slug) ?? new Set<string>();

  const scored = DESTINATIONS.filter((c) => c.slug !== slug).map((c) => {
    const cTitles = titleSlugsByDest.get(c.slug) ?? new Set<string>();
    let sharedTitleSlug: string | undefined;
    let sharedCount = 0;
    for (const t of cTitles) {
      if (myTitles.has(t)) {
        sharedCount += 1;
        sharedTitleSlug ??= t;
      }
    }
    const sameCountry = c.country === origin.country;
    const sameRegion = !!origin.region && c.region === origin.region;
    const score = sharedCount * 3 + (sameCountry ? 2 : 0) + (sameRegion ? 1 : 0);
    const dist = distanceKm(origin.lat, origin.lng, c.lat, c.lng);
    return { dest: c, sharedTitleSlug, sameCountry, score, dist };
  });

  scored.sort((a, b) => b.score - a.score || a.dist - b.dist);
  return scored
    .slice(0, limit)
    .map(({ dest, sharedTitleSlug, sameCountry }) => ({ dest, sharedTitleSlug, sameCountry }));
}

// Precomputed titleSlug -> set of destinationSlugs, for relatedTitles().
const destSlugsByTitle = new Map<string, Set<string>>();
for (const l of LOCATIONS) {
  let set = destSlugsByTitle.get(l.titleSlug);
  if (!set) destSlugsByTitle.set(l.titleSlug, (set = new Set()));
  set.add(l.destinationSlug);
}

export type RelatedTitle = {
  title: Title;
  /** A destination shared with the origin title, if any. */
  sharedDestSlug?: string;
};

/**
 * Titles to bridge to from a title page: productions filmed in the same places
 * first, then same genre. Only genuine relations (no geographic filler), so the
 * list may be shorter than `limit`.
 */
export function relatedTitles(slug: string, limit = 4): RelatedTitle[] {
  const origin = titleBySlug.get(slug);
  if (!origin) return [];
  const myDests = destSlugsByTitle.get(slug) ?? new Set<string>();
  const myGenres = new Set(origin.genres);

  const scored = TITLES.filter((t) => t.slug !== slug)
    .map((t) => {
      const tDests = destSlugsByTitle.get(t.slug) ?? new Set<string>();
      let sharedDestSlug: string | undefined;
      let sharedDest = 0;
      for (const d of tDests) {
        if (myDests.has(d)) {
          sharedDest += 1;
          sharedDestSlug ??= d;
        }
      }
      const sharedGenre = t.genres.filter((g) => myGenres.has(g)).length;
      return { title: t, sharedDestSlug, score: sharedDest * 3 + sharedGenre };
    })
    .filter((x) => x.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(({ title, sharedDestSlug }) => ({ title, sharedDestSlug }));
}
