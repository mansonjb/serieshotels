/** Single source of truth for site identity. Brand/domain change = edit here. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://screentotrip.com"
).replace(/\/+$/, "");

export const SITE_NAME = "ScreenToTrip";

export const SITE_TAGLINE =
  "Visit the real places where your favourite films and series were shot.";

export const SITE_DESCRIPTION =
  "A set-jetting travel guide: the real, visitable filming locations behind hit films and series, with maps, how-to-visit notes, tours, and where to stay nearby.";
