#!/usr/bin/env tsx
/**
 * Hotel selection per destination via the Apify Google-Places crawler
 * (compass/crawler-google-places, ~$0.0015/place). Mirrors hotelswithpets.
 *
 *   pnpm exec tsx --env-file=.env.local scripts/fetch-hotels.ts
 *
 * Crawls ~PER places per destination, keeps the top hotels within range,
 * downloads one photo each into public/hotels/<dest>/<hotel>.jpg, and writes
 * data/generated/hotels.json keyed by destinationSlug. Writes incrementally and
 * hard-stops before the monthly usage cap so a free-plan run can't blow past it.
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { DESTINATIONS } from "../data/destinations";

const TOKEN = process.env.APIFY_TOKEN;
if (!TOKEN) {
  console.error("No APIFY_TOKEN (run with --env-file=.env.local)");
  process.exit(1);
}
const PER = 11; // places crawled per destination (billed)
const STOP_AT_USD = 30; // runaway backstop (paid plan has headroom)
const RADIUS_KM = 250; // generous: regions (Lombardy, Southern Poland) sprawl >30km from their centroid
const ROOT = process.cwd();
const IMG_DIR = join(ROOT, "public", "hotels");
const OUT = join(ROOT, "data", "generated", "hotels.json");

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const toRad = (d: number) => (d * Math.PI) / 180;
const km = (aLat: number, aLng: number, bLat: number, bLng: number) => {
  const R = 6371, dLa = toRad(bLat - aLat), dLo = toRad(bLng - aLng);
  const x = Math.sin(dLa / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLo / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
};
const isHotel = (c = "") =>
  /hotel|resort|inn|hostel|guest house|guesthouse|b&b|bed & breakfast|aparthotel|lodge|riad/i.test(c);

async function usageUsd(): Promise<number> {
  try {
    const r = await fetch(`https://api.apify.com/v2/users/me/limits?token=${TOKEN}`);
    const j = await r.json();
    return j?.data?.current?.monthlyUsageUsd ?? 0;
  } catch {
    return 0;
  }
}
async function crawl(name: string, country: string) {
  const input = {
    searchStringsArray: [`hotels in ${name}, ${country}`],
    maxCrawledPlacesPerSearch: PER,
    language: "en",
    maxImages: 1,
    skipClosedPlaces: true,
  };
  const r = await fetch(
    `https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items?token=${TOKEN}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(input) },
  );
  if (!r.ok) throw new Error(`Apify ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return (await r.json()) as any[];
}
async function dl(url: string, out: string) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`img ${r.status}`);
  writeFileSync(out, Buffer.from(await r.arrayBuffer()));
}

async function main() {
const manifest: Record<string, unknown[]> = existsSync(OUT)
  ? JSON.parse(readFileSync(OUT, "utf8"))
  : {};
const start = await usageUsd();
console.log(`start usage $${start.toFixed(3)} / $5 cap`);
let i = 0;
for (const d of DESTINATIONS) {
  i += 1;
  if ((manifest[d.slug]?.length ?? 0) > 0) {
    console.log(`${i}/${DESTINATIONS.length} ${d.slug}: skip (cached ${manifest[d.slug].length})`);
    continue;
  }
  const u = await usageUsd();
  if (u >= STOP_AT_USD) {
    console.log(`STOP at ${i}/${DESTINATIONS.length}: usage $${u.toFixed(2)} near cap`);
    break;
  }
  try {
    const raw = await crawl(d.name, d.country);
    const seen = new Set<string>();
    const hotels: Record<string, unknown>[] = [];
    for (const p of raw) {
      if (!isHotel(p.categoryName)) continue;
      const loc = p.location;
      if (!p.title || !loc?.lat) continue;
      const hslug = slugify(p.title);
      if (seen.has(hslug)) continue;
      seen.add(hslug);
      if (km(d.lat, d.lng, loc.lat, loc.lng) > RADIUS_KM) continue;
      let photo: string | null = null;
      const img = (p.imageUrls || [])[0] || p.imageUrl;
      if (img) {
        try {
          const dir = join(IMG_DIR, d.slug);
          if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
          const f = join(dir, `${hslug}.jpg`);
          if (!existsSync(f)) await dl(img, f);
          photo = `/hotels/${d.slug}/${hslug}.jpg`;
        } catch {}
      }
      hotels.push({
        name: p.title,
        slug: hslug,
        rating: p.totalScore ?? null,
        reviewCount: p.reviewsCount ?? null,
        stars: p.hotelStars ?? null,
        address: p.address ?? null,
        photo,
      });
    }
    hotels.sort(
      (a: any, b: any) =>
        (b.rating || 0) * Math.log10((b.reviewCount || 0) + 10) -
        (a.rating || 0) * Math.log10((a.reviewCount || 0) + 10),
    );
    manifest[d.slug] = hotels.slice(0, 8);
    const hotelCat = raw.filter((p) => isHotel(p.categoryName)).length;
    console.log(
      `${i}/${DESTINATIONS.length} ${d.slug}: ${manifest[d.slug].length} hotels (raw ${raw.length}, hotel-cat ${hotelCat})`,
    );
  } catch (e) {
    console.log(`${i}/${DESTINATIONS.length} ${d.slug}: ERR ${(e as Error).message}`);
    manifest[d.slug] = manifest[d.slug] || [];
  }
  writeFileSync(OUT, `${JSON.stringify(manifest, null, 2)}\n`);
}
const end = await usageUsd();
console.log(`\ndone. usage $${start.toFixed(3)} -> $${end.toFixed(3)} (spent ~$${(end - start).toFixed(3)})`);
console.log(`destinations with hotels: ${Object.values(manifest).filter((h) => h.length).length}/${DESTINATIONS.length}`);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
