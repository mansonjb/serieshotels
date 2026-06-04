/**
 * Stay22 helpers, the monetization pivot. A single affiliate id (STAY22_AID)
 * covers every major OTA (Booking, Hotels.com, Airbnb, Expedia, Vrbo).
 *
 * The id is read server-side ONLY and never hardcoded (see CLAUDE.md). It is
 * injected into the lazy <Stay22Map> iframe src at render time. If unset, the
 * widget still renders, just without commission attribution.
 */
const AID = process.env.STAY22_AID || "";

const EMBED_GM_URL = "https://www.stay22.com/embed/gm";
const ALLEZ_URL = "https://www.stay22.com/allez/finder";

/** Iframe src for the Google-Maps-style hotel embed centred on a coordinate. */
export function stay22MapSrc({
  lat,
  lng,
  campaign,
  maincolor = "e11d48",
}: {
  lat: number;
  lng: number;
  campaign?: string;
  /** Brand accent for pins/UI (hex, no #). Defaults to our rose accent. */
  maincolor?: string;
}): string {
  const p = new URLSearchParams();
  if (AID) p.set("aid", AID);
  p.set("lat", String(lat));
  p.set("lng", String(lng));
  p.set("maincolor", maincolor);
  if (campaign) p.set("campaign", campaign);
  return `${EMBED_GM_URL}?${p.toString()}`;
}

/** Outbound "where to stay" deeplink keyed on a free-text address. */
export function stay22Url(address: string): string {
  const p = new URLSearchParams();
  if (AID) p.set("aid", AID);
  p.set("address", address);
  return `${ALLEZ_URL}?${p.toString()}`;
}

export const STAY22_ENABLED = Boolean(AID);
