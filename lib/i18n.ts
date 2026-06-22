/**
 * Locale layer. UI strings come from data/i18n/ui.ts (EN) overlaid with the
 * generated fr/de/es/it dictionaries; content fields are overlaid per slug.
 * Everything falls back to English, so a partial translation never breaks the
 * build or leaves a blank string.
 */
import { UI_EN, type UI } from "@/data/i18n/ui";
import type { Destination, Location, Title } from "@/data/types";
import fr from "@/data/generated/i18n/fr.json";
import de from "@/data/generated/i18n/de.json";
import es from "@/data/generated/i18n/es.json";
import it from "@/data/generated/i18n/it.json";

export const LOCALES = ["en", "fr", "de", "es", "it"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
};

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

/** Prefix a root-relative path with the locale segment. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}

type ContentT = {
  titles?: Record<string, Partial<Pick<Title, "tagline" | "synopsis">>>;
  destinations?: Record<string, Partial<Pick<Destination, "blurb" | "name">>>;
  locations?: Record<
    string,
    Partial<Pick<Location, "sceneContext" | "howToVisit" | "nearbyTips">>
  >;
};
type Generated = { ui?: Record<string, unknown>; content?: ContentT };

const GEN: Record<Exclude<Locale, "en">, Generated> = {
  fr: fr as Generated,
  de: de as Generated,
  es: es as Generated,
  it: it as Generated,
};

function isPlainObject(x: unknown): x is Record<string, unknown> {
  return Boolean(x) && typeof x === "object" && !Array.isArray(x);
}

/** Deep-merge translated UI over the English base. Arrays are replaced wholesale. */
function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) return (Array.isArray(over) ? over : base) as T;
  if (isPlainObject(base)) {
    const out: Record<string, unknown> = { ...base };
    for (const key of Object.keys(base)) {
      out[key] = deepMerge(
        (base as Record<string, unknown>)[key],
        isPlainObject(over) ? over[key] : undefined,
      );
    }
    return out as T;
  }
  return (over as T) ?? base;
}

/** UI dictionary for a locale (English fallback baked in). */
export function getDict(locale: Locale): UI {
  if (locale === "en") return UI_EN;
  return deepMerge(UI_EN, GEN[locale]?.ui);
}

export function localizeTitle(t: Title, locale: Locale): Title {
  if (locale === "en") return t;
  const o = GEN[locale]?.content?.titles?.[t.slug];
  return o ? { ...t, ...o } : t;
}
export function localizeDestination(d: Destination, locale: Locale): Destination {
  if (locale === "en") return d;
  const o = GEN[locale]?.content?.destinations?.[d.slug];
  return o ? { ...d, ...o } : d;
}
export function localizeLocation(l: Location, locale: Locale): Location {
  if (locale === "en") return l;
  const o = GEN[locale]?.content?.locations?.[l.slug];
  return o ? { ...l, ...o } : l;
}

/** Fill {placeholders} in a dictionary string. */
export function t(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    k in vars ? String(vars[k]) : `{${k}}`,
  );
}
