import type { Title } from "./types";

/** The works. `locationSlugs` must match entries in data/locations.ts. */
export const TITLES: Title[] = [
  {
    slug: "game-of-thrones",
    name: "Game of Thrones",
    type: "series",
    year: 2011,
    endYear: 2019,
    tmdbId: 1399,
    accent: "475569",
    genres: ["Fantasy", "Drama", "Adventure"],
    tagline: "Ten years, a whole continent of real-world stand-ins for Westeros.",
    synopsis:
      "Noble houses across an invented world scheme, betray and go to war for a single throne, while an older threat gathers beyond the realm's frozen northern edge. Filmed across Europe for the better part of a decade, the series turned a handful of real towns, estates and rift valleys into landscapes as recognisable as its characters — which is exactly why they reward a visit.",
    locationSlugs: [
      "dubrovnik-city-walls",
      "fort-lovrijenac",
      "thingvellir",
      "castle-ward",
    ],
  },
  {
    slug: "the-white-lotus",
    name: "The White Lotus",
    type: "series",
    year: 2021,
    tmdbId: 111803,
    accent: "be123c",
    genres: ["Drama", "Dark comedy"],
    tagline: "Five-star resorts, one very bad week — and a real hotel you can book.",
    synopsis:
      "An anthology of dark social comedy set at a different luxury resort each season, where wealthy guests and the staff who serve them circle one another over a week that tends to end with a body. The second season swapped Hawaii for the cliffs of Sicily, and the resort at its centre is a genuine hotel — making Taormina the rare set you can actually check into.",
    locationSlugs: [
      "san-domenico-palace",
      "teatro-antico-taormina",
      "isola-bella-taormina",
    ],
  },
  {
    slug: "emily-in-paris",
    name: "Emily in Paris",
    type: "series",
    year: 2020,
    tmdbId: 90228,
    accent: "db2777",
    genres: ["Comedy", "Romance"],
    tagline: "Postcard Paris, mapped to the cafés and bridges you can walk to.",
    synopsis:
      "A young American marketing executive is dropped into a Paris firm and stumbles, charmingly, through the city's codes of work, food and romance. The show treats Paris as a co-star, lingering on a Latin Quarter square, a gilded bridge and a landmark opera house — all real, all close together, and all easy to fold into one day on foot.",
    locationSlugs: [
      "place-de-lestrapade",
      "palais-garnier",
      "pont-alexandre-iii",
    ],
  },
];
