/**
 * The content graph. Everything programmatic lives in /data and is typed here.
 * To add a work: add a Title, its Locations (each pointing at a titleSlug +
 * destinationSlug), and the Destination if it's new. See CLAUDE.md.
 */

export type TitleType = "movie" | "series";

/** A film or series — the "œuvre". */
export interface Title {
  slug: string;
  name: string;
  type: TitleType;
  /** Release year (films) or first-air year (series). */
  year: number;
  /** Last-air year for an ended series. Omit for films / ongoing shows. */
  endYear?: number;
  /** TMDB id — only for build-time enrichment scripts, never shipped to client. */
  tmdbId?: number;
  /** One-line hook, our own words. */
  tagline: string;
  /** 1–2 paragraphs, our own words. Never copied from an official synopsis. */
  synopsis: string;
  genres: string[];
  /** Slugs of the Locations filmed for this title. */
  locationSlugs: string[];
  /** Accent colour (hex, no leading #) for gradients/cards — no imagery in v1. */
  accent: string;
}

export type LocationKind =
  | "landmark"
  | "hotel"
  | "nature"
  | "street"
  | "building"
  | "venue"
  | "other";

/** A real, visitable filming location. Belongs to one Title + one Destination. */
export interface Location {
  slug: string;
  name: string;
  /** The work shot here. */
  titleSlug: string;
  /** The geographic hub it sits in. */
  destinationSlug: string;
  lat: number;
  lng: number;
  kind: LocationKind;
  /** What was shot here — our own words. */
  sceneContext: string;
  /** Practical "how to actually visit" notes — our own words. */
  howToVisit: string;
  /** Optional street address for maps/schema. */
  address?: string;
  /** Real nearby things to fold into a visit. */
  nearbyTips?: string[];
}

/** A city or region that aggregates Locations across one or more Titles. */
export interface Destination {
  slug: string;
  name: string;
  country: string;
  /** Region label for schema (optional). */
  region?: string;
  lat: number;
  lng: number;
  /** Our own-words intro to the place as a set-jetting hub. */
  blurb: string;
  /** Accent colour (hex, no leading #). */
  accent: string;
}
