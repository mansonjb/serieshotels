/**
 * Outbound affiliate URL builders for tours, tickets and cars.
 *
 * IDs come from env (never hardcoded). When an id is unset the link still
 * works — it just isn't commission-tracked — so the whole site is functional
 * before the affiliate accounts are wired. Endpoints are sensible deeplinks;
 * tighten them when each partner account goes live.
 *
 * Every URL produced here MUST be rendered through <AffiliateLink>, which adds
 * rel="sponsored nofollow" + the tracking data-attrs.
 */
const VIATOR_PID = process.env.VIATOR_PARTNER_PID || "";
const GYG_PARTNER = process.env.GETYOURGUIDE_PARTNER_ID || "";
const DISCOVERCARS_AID = process.env.DISCOVERCARS_AFFILIATE_ID || "";
const TIQETS_PARTNER = process.env.TIQETS_PARTNER_ID || "";

/** Viator — tours & activities, searched by free text. */
export function viatorSearchUrl(query: string): string {
  const u = new URL("https://www.viator.com/search");
  u.searchParams.set("text", query);
  if (VIATOR_PID) {
    u.searchParams.set("pid", VIATOR_PID);
    u.searchParams.set("mcid", "42383");
    u.searchParams.set("medium", "link");
  }
  return u.toString();
}

/** GetYourGuide — tours & activities, searched by free text. */
export function getYourGuideSearchUrl(query: string): string {
  const u = new URL("https://www.getyourguide.com/s/");
  u.searchParams.set("q", query);
  if (GYG_PARTNER) u.searchParams.set("partner_id", GYG_PARTNER);
  return u.toString();
}

/** Tiqets — attraction tickets, searched by free text. */
export function tiqetsSearchUrl(query: string): string {
  const u = new URL("https://www.tiqets.com/en/search/");
  u.searchParams.set("q", query);
  if (TIQETS_PARTNER) u.searchParams.set("partner", TIQETS_PARTNER);
  return u.toString();
}

/** DiscoverCars — car rental, keyed on a pickup place name. */
export function discoverCarsUrl(place: string): string {
  const u = new URL("https://www.discovercars.com/");
  u.searchParams.set("pickup", place);
  if (DISCOVERCARS_AID) u.searchParams.set("a_aid", DISCOVERCARS_AID);
  return u.toString();
}
