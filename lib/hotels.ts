/**
 * Hotel selection per destination, scraped offline via the Apify Google-Places
 * crawler into data/generated/hotels.json (see scripts/fetch-hotels.ts).
 * Empty until the scrape runs, so callers just omit the block.
 */
import hotels from "@/data/generated/hotels.json";

/** Raw shape as written by the scraper (stars arrives as e.g. "5-star hotel"). */
interface RawHotel {
  name: string;
  slug: string;
  rating: number | null;
  reviewCount: number | null;
  stars: number | string | null;
  address: string | null;
  photo: string | null;
}

export interface Hotel {
  name: string;
  slug: string;
  rating: number | null;
  reviewCount: number | null;
  stars: number | null;
  address: string | null;
  photo: string | null;
}

const MAP = hotels as unknown as Record<string, RawHotel[]>;

function parseStars(s: number | string | null): number | null {
  if (typeof s === "number") return s;
  if (typeof s === "string") {
    const m = s.match(/\d+/);
    return m ? Number(m[0]) : null;
  }
  return null;
}

export function hotelsForDestination(slug: string, limit = 6): Hotel[] {
  return (MAP[slug] ?? [])
    .slice(0, limit)
    .map((h) => ({ ...h, stars: parseStars(h.stars) }));
}
