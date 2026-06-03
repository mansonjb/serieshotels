import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { DESTINATIONS, LOCATIONS, TITLES } from "@/lib/data";
import { GUIDES } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const at = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    priority,
  });

  return [
    at("/", 1),
    at("/titles", 0.8),
    at("/destinations", 0.8),
    at("/guides", 0.6),
    at("/about", 0.3),
    at("/affiliate-disclosure", 0.2),
    ...TITLES.map((t) => at(`/titles/${t.slug}`, 0.9)),
    ...DESTINATIONS.map((d) => at(`/destinations/${d.slug}`, 0.9)),
    ...LOCATIONS.map((l) => at(`/locations/${l.slug}`, 0.7)),
    ...GUIDES.map((g) => at(`/guides/${g.slug}`, 0.6)),
  ];
}
