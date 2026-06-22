/**
 * Per-destination editorial set-jetting guides, generated into
 * data/generated/destination-guides.json (slug -> locale -> paragraphs).
 * Falls back to English, and to nothing if a destination has no guide yet.
 */
import guides from "@/data/generated/destination-guides.json";
import type { Locale } from "@/lib/i18n";

type Guides = Record<string, Partial<Record<Locale, string[]>>>;
const MAP = guides as Guides;

export function destinationGuide(slug: string, locale: Locale): string[] {
  const g = MAP[slug];
  if (!g) return [];
  return g[locale] ?? g.en ?? [];
}
