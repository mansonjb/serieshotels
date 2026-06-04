/**
 * Image lookup over the generated manifest (data/generated/images.json,
 * written by `pnpm sync-photos`). Everything here is optional: when a slug
 * has no photo, callers fall back to the accent gradient, so the build never
 * breaks on a missing image.
 */
import type { Title } from "@/data/types";
import manifest from "@/data/generated/images.json";

type Entry = { hero?: string; gallery?: string[] };
type Manifest = {
  destinations: Record<string, Entry>;
  locations: Record<string, Entry>;
};

const M = manifest as unknown as Manifest;

export function locationImage(slug: string): string | undefined {
  return M.locations[slug]?.hero;
}

export function destinationImage(slug: string): string | undefined {
  return M.destinations[slug]?.hero;
}

export function destinationGallery(slug: string): string[] {
  return M.destinations[slug]?.gallery ?? [];
}

export function locationGallery(slug: string): string[] {
  return M.locations[slug]?.gallery ?? [];
}

/**
 * A Title has no poster (copyright). Its "face" is the first of its locations
 * that actually has a photo.
 */
export function titleImage(title: Title): string | undefined {
  for (const slug of title.locationSlugs) {
    const hero = M.locations[slug]?.hero;
    if (hero) return hero;
  }
  return undefined;
}
