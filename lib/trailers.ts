/**
 * Official-trailer lookup. data/generated/trailers.json maps a Title slug to a
 * YouTube id (the official trailer), written by `pnpm sync-trailers` from TMDB.
 * Empty until a TMDB key is set — callers just omit the trailer block.
 */
import trailers from "@/data/generated/trailers.json";

const MAP = trailers as Record<string, string>;

export function titleTrailer(slug: string): string | undefined {
  return MAP[slug];
}
