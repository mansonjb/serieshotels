import type { Locale } from "./i18n";

/**
 * Cross-site editorial backlinks. Where a ScreenToTrip destination overlaps a
 * sister travel site (same city / region / country), we link to that site's
 * page for the place with a one-line description of the project. Dofollow,
 * opens in a new tab. Locale-matched to each sister site's supported languages
 * (verified against their routers), falling back to English otherwise.
 */
type SiteKey =
  | "hotelswithpets"
  | "myhoneymoonhotel"
  | "bestsnowhotels"
  | "raceweekstays"
  | "perfectcitybreak";

type LStr = Record<Locale, string>;
const L = (en: string, fr: string, de: string, es: string, it: string): LStr => ({ en, fr, de, es, it });
const pick = (loc: Locale, supported: Locale[]): Locale => (supported.includes(loc) ? loc : "en");

type Site = {
  brand: string;
  /** keyword-rich service label used as the link anchor prefix, per locale */
  label: LStr;
  /** one-line description of the sister project, per locale */
  blurb: LStr;
  /** build the destination URL on the sister site for a given slug + ScreenToTrip locale */
  url: (slug: string, loc: Locale) => string;
};

const SITES: Record<SiteKey, Site> = {
  hotelswithpets: {
    brand: "HotelsWithPets",
    label: L(
      "Pet-friendly hotels",
      "Hôtels acceptant les animaux",
      "Haustierfreundliche Hotels",
      "Hoteles que admiten mascotas",
      "Hotel che accettano animali",
    ),
    blurb: L(
      "Hand-picked hotels that welcome dogs and cats, city by city.",
      "Une sélection d'hôtels qui accueillent chiens et chats, ville par ville.",
      "Handverlesene Hotels, die Hunde und Katzen willkommen heißen.",
      "Una selección de hoteles que admiten perros y gatos, ciudad por ciudad.",
      "Una selezione di hotel che accolgono cani e gatti, città per città.",
    ),
    url: (slug, loc) => `https://www.hotelswithpets.com/${pick(loc, ["en", "fr", "es"])}/destinations/${slug}`,
  },
  myhoneymoonhotel: {
    brand: "My Honeymoon Hotel",
    label: L(
      "Honeymoon hotels",
      "Hôtels de lune de miel",
      "Flitterwochen-Hotels",
      "Hoteles para luna de miel",
      "Hotel per la luna di miele",
    ),
    blurb: L(
      "Honeymoon hotels scored on romance, with no paid placement.",
      "Des hôtels de lune de miel notés sur la romance, sans placement payant.",
      "Flitterwochen-Hotels nach Romantik bewertet, ohne bezahlte Platzierung.",
      "Hoteles de luna de miel puntuados por su romanticismo, sin pago por aparecer.",
      "Hotel per la luna di miele valutati sul romanticismo, senza inserzioni a pagamento.",
    ),
    url: (slug) => `https://myhoneymoonhotel.com/destinations/${slug}`,
  },
  bestsnowhotels: {
    brand: "BestSnowHotels",
    label: L("Ski hotels", "Hôtels au ski", "Skihotels", "Hoteles de esquí", "Hotel sulla neve"),
    blurb: L(
      "The best ski-in/ski-out hotels, resort by resort.",
      "Les meilleurs hôtels ski-in/ski-out, station par station.",
      "Die besten Ski-in/Ski-out-Hotels, Ort für Ort.",
      "Los mejores hoteles ski-in/ski-out, estación por estación.",
      "I migliori hotel ski-in/ski-out, località per località.",
    ),
    url: (slug, loc) => `https://www.bestsnowhotels.com/${pick(loc, ["en", "fr", "es", "it"])}/destinations/${slug}`,
  },
  raceweekstays: {
    brand: "RaceWeekStays",
    label: L(
      "Grand Prix stays",
      "Hébergements Grand Prix",
      "Grand-Prix-Unterkünfte",
      "Alojamiento para el Gran Premio",
      "Soggiorni da Gran Premio",
    ),
    blurb: L(
      "Where to stay for a race weekend, circuit by circuit.",
      "Où dormir pour un week-end de Grand Prix, circuit par circuit.",
      "Wo man für ein Rennwochenende übernachtet, Strecke für Strecke.",
      "Dónde alojarse para un fin de semana de carreras, circuito a circuito.",
      "Dove alloggiare per un weekend di gara, circuito per circuito.",
    ),
    url: (slug, loc) => `https://raceweekstays.com/${pick(loc, ["en", "fr", "de", "es", "it"])}/${slug}`,
  },
  perfectcitybreak: {
    brand: "PerfectCityBreak",
    label: L(
      "City break",
      "Week-end citadin",
      "Städtereise",
      "Escapada urbana",
      "Weekend in città",
    ),
    blurb: L(
      "Curated weekend city-break guides: where to stay and what to see, city by city.",
      "Des guides week-end clés en main : où dormir et que voir, ville par ville.",
      "Kuratierte Wochenend-Städtereisen: wo übernachten und was sehen, Stadt für Stadt.",
      "Guías de escapada urbana: dónde dormir y qué ver, ciudad a ciudad.",
      "Guide curate per un weekend in città: dove dormire e cosa vedere, città per città.",
    ),
    // en lives at the root; fr/de/es/it are path-prefixed (all supported).
    url: (slug, loc) =>
      loc === "en"
        ? `https://perfectcitybreak.com/${slug}`
        : `https://perfectcitybreak.com/${loc}/${slug}`,
  },
};

/** A backlink target: the sister site, its slug for the place, and an optional
 *  display name to use when the place differs from the ScreenToTrip destination
 *  (e.g. Lombardy -> Milan). When omitted, the localized destination name is used. */
type Entry = { site: SiteKey; slug: string; place?: string };

/** ScreenToTrip destination slug -> backlink targets. */
const BACKLINKS: Record<string, Entry[]> = {
  // --- shared cities (exact) + a few region/near aliases -------------------
  dubrovnik: [{ site: "hotelswithpets", slug: "dubrovnik" }],
  taormina: [{ site: "hotelswithpets", slug: "taormina" }],
  paris: [{ site: "hotelswithpets", slug: "paris" }],
  seville: [{ site: "hotelswithpets", slug: "seville" }],
  oxford: [{ site: "hotelswithpets", slug: "oxford" }],
  bath: [{ site: "hotelswithpets", slug: "bath" }],
  madrid: [
    { site: "hotelswithpets", slug: "madrid" },
    { site: "raceweekstays", slug: "madrid" },
  ],
  london: [{ site: "hotelswithpets", slug: "london" }],
  liverpool: [{ site: "hotelswithpets", slug: "liverpool" }],
  rome: [{ site: "hotelswithpets", slug: "rome" }],
  matera: [{ site: "hotelswithpets", slug: "matera" }],
  venice: [
    { site: "hotelswithpets", slug: "venice" },
    { site: "myhoneymoonhotel", slug: "venice" },
  ],
  florence: [{ site: "hotelswithpets", slug: "florence" }],
  corfu: [{ site: "hotelswithpets", slug: "corfu" }],
  dublin: [
    { site: "hotelswithpets", slug: "dublin" },
    { site: "myhoneymoonhotel", slug: "ireland", place: "Ireland" },
  ],
  salzburg: [{ site: "hotelswithpets", slug: "salzburg" }],
  edinburgh: [{ site: "hotelswithpets", slug: "edinburgh" }],
  istanbul: [
    { site: "hotelswithpets", slug: "istanbul" },
    { site: "myhoneymoonhotel", slug: "turkey", place: "Turkey" },
  ],
  interlaken: [
    { site: "hotelswithpets", slug: "interlaken" },
    { site: "bestsnowhotels", slug: "interlaken" },
  ],
  vienna: [{ site: "hotelswithpets", slug: "vienna" }],
  krakow: [{ site: "hotelswithpets", slug: "krakow" }],
  cefalu: [{ site: "hotelswithpets", slug: "cefalu" }],
  bruges: [{ site: "hotelswithpets", slug: "bruges" }],
  "los-angeles": [{ site: "hotelswithpets", slug: "los-angeles" }],
  "san-francisco": [{ site: "hotelswithpets", slug: "san-francisco" }],
  "new-york": [{ site: "hotelswithpets", slug: "new-york" }],
  verona: [{ site: "hotelswithpets", slug: "verona" }],
  kefalonia: [{ site: "hotelswithpets", slug: "kefalonia" }],
  dubai: [
    { site: "hotelswithpets", slug: "dubai" },
    { site: "myhoneymoonhotel", slug: "uae", place: "the UAE" },
  ],
  "abu-dhabi": [
    { site: "hotelswithpets", slug: "abu-dhabi" },
    { site: "raceweekstays", slug: "abu-dhabi" },
  ],
  "lake-como": [
    { site: "hotelswithpets", slug: "como", place: "Como" },
    { site: "myhoneymoonhotel", slug: "lake-como" },
  ],
  "bay-of-naples": [{ site: "hotelswithpets", slug: "naples", place: "Naples" }],
  dunkirk: [{ site: "hotelswithpets", slug: "dunkerque", place: "Dunkerque" }],
  lombardy: [{ site: "hotelswithpets", slug: "milan", place: "Milan" }],
  "amalfi-coast": [
    { site: "hotelswithpets", slug: "sorrento", place: "Sorrento" },
    { site: "myhoneymoonhotel", slug: "amalfi", place: "the Amalfi Coast" },
  ],
  "basque-country": [{ site: "hotelswithpets", slug: "san-sebastian", place: "San Sebastián" }],
  // --- honeymoon countries / regions (My Honeymoon Hotel) ------------------
  tuscany: [{ site: "myhoneymoonhotel", slug: "tuscany" }],
  provence: [{ site: "myhoneymoonhotel", slug: "provence" }],
  cotswolds: [{ site: "myhoneymoonhotel", slug: "cotswolds" }],
  bali: [{ site: "myhoneymoonhotel", slug: "bali" }],
  kenya: [{ site: "myhoneymoonhotel", slug: "kenya" }],
  fiji: [{ site: "myhoneymoonhotel", slug: "fiji" }],
  namibia: [{ site: "myhoneymoonhotel", slug: "namibia" }],
  singapore: [
    { site: "myhoneymoonhotel", slug: "singapore" },
    { site: "raceweekstays", slug: "singapore" },
  ],
  maui: [{ site: "myhoneymoonhotel", slug: "hawaii", place: "Hawaii" }],
  oahu: [{ site: "myhoneymoonhotel", slug: "hawaii", place: "Hawaii" }],
  "koh-samui": [{ site: "myhoneymoonhotel", slug: "thailand", place: "Thailand" }],
  krabi: [{ site: "myhoneymoonhotel", slug: "thailand", place: "Thailand" }],
  petra: [{ site: "myhoneymoonhotel", slug: "jordan", place: "Jordan" }],
  "wadi-rum": [{ site: "myhoneymoonhotel", slug: "jordan", place: "Jordan" }],
  "south-iceland": [{ site: "myhoneymoonhotel", slug: "iceland", place: "Iceland" }],
  vatnajokull: [{ site: "myhoneymoonhotel", slug: "iceland", place: "Iceland" }],
  tokyo: [{ site: "myhoneymoonhotel", slug: "japan", place: "Japan" }],
  ouarzazate: [{ site: "myhoneymoonhotel", slug: "morocco", place: "Morocco" }],
  matamata: [{ site: "myhoneymoonhotel", slug: "new-zealand", place: "New Zealand" }],
  tongariro: [{ site: "myhoneymoonhotel", slug: "new-zealand", place: "New Zealand" }],
  "central-scotland": [{ site: "myhoneymoonhotel", slug: "scotland", place: "Scotland" }],
  "mexico-city": [
    { site: "myhoneymoonhotel", slug: "mexico", place: "Mexico" },
    { site: "raceweekstays", slug: "mexico" },
  ],
  "canadian-rockies": [
    { site: "myhoneymoonhotel", slug: "banff", place: "Banff" },
    { site: "bestsnowhotels", slug: "lake-louise", place: "Lake Louise" },
  ],
  // --- Grand Prix cities (RaceWeekStays) -----------------------------------
  "las-vegas": [{ site: "raceweekstays", slug: "las-vegas" }],
};

/**
 * The "plan a full city break here" angle: ScreenToTrip film-location cities
 * that PerfectCityBreak also covers. Maps our destination slug -> their city
 * slug, with an optional `place` override for aliases (Bay of Naples -> Naples).
 * Kept separate from BACKLINKS so every eligible city gets the link without
 * touching each entry.
 */
const CITY_BREAKS: Record<string, { slug: string; place?: string }> = {
  paris: { slug: "paris" },
  rome: { slug: "rome" },
  venice: { slug: "venice" },
  florence: { slug: "florence" },
  milan: { slug: "milan" },
  seville: { slug: "seville" },
  madrid: { slug: "madrid" },
  vienna: { slug: "vienna" },
  salzburg: { slug: "salzburg" },
  edinburgh: { slug: "edinburgh" },
  dublin: { slug: "dublin" },
  dubrovnik: { slug: "dubrovnik" },
  krakow: { slug: "krakow" },
  bruges: { slug: "bruges" },
  "bay-of-naples": { slug: "naples", place: "Naples" },
  "amalfi-coast": { slug: "naples", place: "Naples" },
  "basque-country": { slug: "bilbao", place: "Bilbao" },
  lombardy: { slug: "milan", place: "Milan" },
};

export type Backlink = { brand: string; url: string; anchor: string; blurb: string };

/**
 * Resolve the backlinks for a ScreenToTrip destination, localized. `destName`
 * is the already-localized destination name, used as the anchor place unless
 * the entry overrides it (alias to a differently-named target).
 */
export function backlinksFor(slug: string, loc: Locale, destName: string): Backlink[] {
  const out: Backlink[] = (BACKLINKS[slug] ?? []).map(({ site, slug: targetSlug, place }) => {
    const s = SITES[site];
    return {
      brand: s.brand,
      url: s.url(targetSlug, loc),
      anchor: `${s.label[loc]} · ${place ?? destName}`,
      blurb: s.blurb[loc],
    };
  });
  const cb = CITY_BREAKS[slug];
  if (cb) {
    const s = SITES.perfectcitybreak;
    out.push({
      brand: s.brand,
      url: s.url(cb.slug, loc),
      anchor: `${s.label[loc]} · ${cb.place ?? destName}`,
      blurb: s.blurb[loc],
    });
  }
  return out;
}

export const BACKLINKS_HEADING: LStr = L(
  "Our other travel guides",
  "Nos autres guides de voyage",
  "Unsere weiteren Reiseführer",
  "Nuestras otras guías de viaje",
  "Le nostre altre guide di viaggio",
);
