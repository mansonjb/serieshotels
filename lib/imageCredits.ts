/**
 * Photo attribution for the Wikimedia Commons hero images, keyed "<kind>/<slug>"
 * (see scripts/fetch-wikimedia.ts). CC licenses require crediting the author,
 * rendered by <PhotoCredit> under each hero.
 */
import credits from "@/data/generated/image-credits.json";

export type Credit = {
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

const MAP = credits as Record<string, Credit>;

export function imageCredit(
  kind: "locations" | "destinations",
  slug: string,
): Credit | null {
  return MAP[`${kind}/${slug}`] ?? null;
}
