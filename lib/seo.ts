/**
 * Metadata + JSON-LD helpers shared by every page so canonical, hreflang and
 * social images stay consistent. Detail pages MUST spread `alternates(loc, path)`
 * (overriding `alternates` otherwise drops the hreflang map from the layout).
 */
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** Social-share fallback image (a real location photo, never a copyrighted still). */
export const OG_FALLBACK = "/destinations/dubrovnik/hero.jpg";

/** Last editorial review of the dataset (rendered + emitted as dateModified). */
export const CONTENT_UPDATED = "2026-06-18";

/** Absolutise a root-relative path against SITE_URL. */
export function abs(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

/** hreflang map for a locale-agnostic path like "/titles/foo" ("" for home). */
export function altLanguages(path: string): Record<string, string> {
  const langs = Object.fromEntries(LOCALES.map((l) => [l, `/${l}${path}`]));
  return { ...langs, "x-default": `/${DEFAULT_LOCALE}${path}` };
}

/** canonical + hreflang block for a given locale + path. */
export function alternates(locale: Locale, path: string) {
  return { canonical: `/${locale}${path}`, languages: altLanguages(path) };
}

/** Absolute OG/Twitter image list from a public image path (with fallback). */
export function ogImages(img: string | undefined, alt: string) {
  return [{ url: abs(img ?? OG_FALLBACK), alt }];
}

/** Trim a body string to a clean meta description on a word boundary. */
export function clip(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return `${cut.slice(0, i > 40 ? i : max).trimEnd()}…`;
}

/** Canonical Organization node, referenced by @id from WebSite / Article. */
export const ORG_ID = `${SITE_URL}/#org`;
export function orgNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
  };
}

/** Minimal VideoObject for a YouTube trailer (uploadDate isn't in the dataset). */
export function trailerVideo(youtubeId: string, name: string) {
  return {
    "@type": "VideoObject",
    name,
    thumbnailUrl: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
  };
}
