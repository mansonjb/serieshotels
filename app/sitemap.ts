import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { DESTINATIONS, LOCATIONS, TITLES } from "@/lib/data";
import { GUIDES } from "@/content/guides";
import { LOCALES } from "@/lib/i18n";
import { CONTENT_UPDATED } from "@/lib/seo";

/** Root-relative paths (without the locale prefix) and their priority. */
function paths(): [path: string, priority: number][] {
  return [
    ["", 1],
    ["/titles", 0.8],
    ["/destinations", 0.8],
    ["/guides", 0.6],
    ["/about", 0.3],
    ["/affiliate-disclosure", 0.2],
    ["/privacy", 0.2],
    ...TITLES.map((t) => [`/titles/${t.slug}`, 0.9] as [string, number]),
    ...DESTINATIONS.map((d) => [`/destinations/${d.slug}`, 0.9] as [string, number]),
    ...LOCATIONS.map((l) => [`/locations/${l.slug}`, 0.7] as [string, number]),
    ...GUIDES.map((g) => [`/guides/${g.slug}`, 0.6] as [string, number]),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [path, priority] of paths()) {
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${SITE_URL}/${l}${path}`]),
    );
    for (const l of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${l}${path}`,
        lastModified: CONTENT_UPDATED,
        priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
