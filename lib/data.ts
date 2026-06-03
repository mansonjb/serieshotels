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
