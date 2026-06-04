#!/usr/bin/env tsx
/**
 * TMDB → official YouTube trailer ids for each Title.
 *
 *   pnpm sync-trailers
 *
 * Needs a (free) TMDB_KEY in .env.local. For each Title with a tmdbId, queries
 * the videos endpoint and picks the official YouTube "Trailer" (falling back to
 * a teaser), then writes data/generated/trailers.json ({ slug: youtubeId }).
 * Embedding the rights-holder's official trailer is the legal way to show real
 * footage — we never host stills or clips ourselves.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { TITLES } from "../data/titles";

const KEY = process.env.TMDB_KEY;
if (!KEY) {
  console.error("[trailers] TMDB_KEY missing from .env.local — get a free key at themoviedb.org");
  process.exit(1);
}

const GEN = join(process.cwd(), "data", "generated");

type Video = {
  site: string;
  type: string;
  key: string;
  official?: boolean;
  iso_639_1?: string;
};

async function fetchTrailer(tmdbId: number, kind: "movie" | "tv"): Promise<string | null> {
  const url = `https://api.themoviedb.org/3/${kind}/${tmdbId}/videos?api_key=${KEY}&language=en-US`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`videos ${res.status}`);
  const data = (await res.json()) as { results?: Video[] };
  const yt = (data.results ?? []).filter((v) => v.site === "YouTube");
  const pick =
    yt.find((v) => v.type === "Trailer" && v.official) ??
    yt.find((v) => v.type === "Trailer") ??
    yt.find((v) => v.type === "Teaser") ??
    yt[0];
  return pick?.key ?? null;
}

async function main(): Promise<void> {
  const out: Record<string, string> = {};
  for (const t of TITLES) {
    if (!t.tmdbId) {
      console.log(`  ${t.slug.padEnd(24)} — no tmdbId`);
      continue;
    }
    const kind = t.type === "movie" ? "movie" : "tv";
    try {
      const key = await fetchTrailer(t.tmdbId, kind);
      if (key) {
        out[t.slug] = key;
        console.log(`  ${t.slug.padEnd(24)} ✓ ${key}`);
      } else {
        console.log(`  ${t.slug.padEnd(24)} — no trailer found`);
      }
    } catch (e) {
      console.log(`  ${t.slug.padEnd(24)} ✗ ${(e as Error).message}`);
    }
  }
  if (!existsSync(GEN)) mkdirSync(GEN, { recursive: true });
  writeFileSync(join(GEN, "trailers.json"), `${JSON.stringify(out, null, 2)}\n`);
  console.log(`\n[trailers] wrote ${Object.keys(out).length}/${TITLES.length} trailers`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
