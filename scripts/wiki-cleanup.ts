#!/usr/bin/env tsx
/**
 * Delete every file under public/{destinations,locations} that the post-merge
 * images.json no longer references — i.e. the old Google Places heroes/galleries.
 * Run AFTER _wiki-merge.ts. Safety guard: aborts if the manifest references
 * suspiciously few images (a sign the merge produced a near-empty manifest).
 */
import { readFileSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const images = JSON.parse(readFileSync(join(ROOT, "data/generated/images.json"), "utf8")) as {
  destinations: Record<string, { hero: string }>;
  locations: Record<string, { hero: string }>;
};
const keep = new Set<string>([
  ...Object.values(images.destinations).map((e) => e.hero),
  ...Object.values(images.locations).map((e) => e.hero),
]);

if (keep.size < 100) {
  console.error(`SAFETY ABORT: only ${keep.size} referenced images — refusing to delete.`);
  process.exit(1);
}

let deleted = 0;
let kept = 0;
for (const kind of ["destinations", "locations"]) {
  const baseDir = join(ROOT, "public", kind);
  for (const slug of readdirSync(baseDir)) {
    const dir = join(baseDir, slug);
    if (!statSync(dir).isDirectory()) continue;
    for (const f of readdirSync(dir)) {
      const rel = `/${kind}/${slug}/${f}`;
      if (keep.has(rel)) {
        kept += 1;
      } else {
        unlinkSync(join(dir, f));
        deleted += 1;
      }
    }
  }
}
console.log(`kept ${kept} Wikimedia files, deleted ${deleted} stale Google files.`);
