import type { Location } from "./types";

/** Real, visitable filming locations. Each points at one Title + one Destination. */
export const LOCATIONS: Location[] = [
  // ---- Game of Thrones · Dubrovnik -------------------------------------
  {
    slug: "dubrovnik-city-walls",
    name: "Dubrovnik City Walls",
    titleSlug: "game-of-thrones",
    destinationSlug: "dubrovnik",
    lat: 42.6418,
    lng: 18.1075,
    kind: "landmark",
    address: "Stari Grad, 20000 Dubrovnik, Croatia",
    sceneContext:
      "The sea-facing ramparts and the old harbour stood in for King's Landing throughout the series — the walk along the walls frames the same rooftops and bays you'll recognise from the capital's exterior shots.",
    howToVisit:
      "Buy a timed ticket for the full circuit of the walls (it's a one-way loop of roughly two kilometres, mostly stairs). Go at opening or late afternoon to dodge cruise crowds and the midday heat; allow 60–90 minutes to walk it slowly.",
    nearbyTips: [
      "Enter at the Pile Gate and descend onto the Stradun, the main marble street.",
      "Take the cable car up Mount Srđ for the overhead view of the whole walled city.",
    ],
  },
  {
    slug: "fort-lovrijenac",
    name: "Fort Lovrijenac",
    titleSlug: "game-of-thrones",
    destinationSlug: "dubrovnik",
    lat: 42.6403,
    lng: 18.1056,
    kind: "landmark",
    address: "Ul. od Tabakarije 29, 20000 Dubrovnik, Croatia",
    sceneContext:
      "The fortress on its own rock just outside the western walls doubled as the Red Keep exterior, including the courtyard used for the Blackwater sequences.",
    howToVisit:
      "The same ticket that covers the city walls also admits you to the fort, so keep your stub. It's a steep climb up exposed steps to a small but dramatic platform over the Adriatic — worth it for the angle back onto the old town.",
    nearbyTips: [
      "The little West Harbour (Kolorina) cove sits directly below.",
      "Combine it with the Pile Gate, which is a two-minute walk away.",
    ],
  },

  // ---- Game of Thrones · South Iceland ---------------------------------
  {
    slug: "thingvellir",
    name: "Þingvellir National Park",
    titleSlug: "game-of-thrones",
    destinationSlug: "south-iceland",
    lat: 64.2559,
    lng: -21.1295,
    kind: "nature",
    address: "Þingvellir National Park, 801 Selfoss, Iceland",
    sceneContext:
      "The rift-valley path between towering walls of rock served as the road climbing toward the Eyrie and the surrounding mountain country of the Vale.",
    howToVisit:
      "It's the first stop on the Golden Circle self-drive loop, about 45 minutes from Reykjavík. Parking is paid; the main Almannagjá gorge walk is flat and well-marked. There's no entry fee for the park itself.",
    nearbyTips: [
      "Continue the loop to the Geysir hot springs and Gullfoss waterfall.",
      "Certified divers can snorkel the Silfra fissure in the same park.",
    ],
  },

  // ---- Game of Thrones · County Down -----------------------------------
  {
    slug: "castle-ward",
    name: "Castle Ward (Winterfell)",
    titleSlug: "game-of-thrones",
    destinationSlug: "county-down",
    lat: 54.3672,
    lng: -5.576,
    kind: "building",
    address: "Strangford, Downpatrick BT30 7LS, United Kingdom",
    sceneContext:
      "The farmyard and tower at this National Trust estate were built out into Winterfell's courtyard — the spot where the Stark household gathers in the very first episode.",
    howToVisit:
      "It's a National Trust property with paid entry (free for members). Independent operators on site run costumed archery and cycle tours of the filming spots; book those ahead in summer. About a 50-minute drive from Belfast.",
    nearbyTips: [
      "The estate sits on the shore of Strangford Lough, good for a walk after.",
      "Audley's Castle, another recognisable backdrop, is a short stroll across the grounds.",
    ],
  },

  // ---- The White Lotus · Taormina --------------------------------------
  {
    slug: "san-domenico-palace",
    name: "San Domenico Palace",
    titleSlug: "the-white-lotus",
    destinationSlug: "taormina",
    lat: 37.8516,
    lng: 15.2887,
    kind: "hotel",
    address: "Piazza San Domenico de Guzman 5, 98039 Taormina, Italy",
    sceneContext:
      "This former convent turned cliff-top hotel was the real 'White Lotus Sicily' — its terraces, pool and sea views are the resort you watch the guests fall apart in.",
    howToVisit:
      "It's a working five-star hotel, so the grounds are for guests; rooms book up far in advance for summer. If you're not staying, you can often reserve a drink or lunch on the terrace to see the setting — call ahead to check.",
    nearbyTips: [
      "The hotel sits steps from Corso Umberto, the town's pedestrian spine.",
      "The public gardens (Villa Comunale) nearby give similar views for free.",
    ],
  },
  {
    slug: "teatro-antico-taormina",
    name: "Teatro Antico di Taormina",
    titleSlug: "the-white-lotus",
    destinationSlug: "taormina",
    lat: 37.8527,
    lng: 15.292,
    kind: "landmark",
    address: "Via Teatro Greco 1, 98039 Taormina, Italy",
    sceneContext:
      "The ancient Greco-Roman theatre, with Mount Etna framed through its ruined back wall, anchors the establishing shots that set the season in Taormina.",
    howToVisit:
      "Paid timed ticket; go early or near closing for softer light and the clearest view of Etna. The climb up through town is gentle but uphill, so leave time. Allow 45 minutes inside.",
    nearbyTips: [
      "It's a five-minute walk from the top of Corso Umberto.",
      "Grab a granita and brioche at a café on the way up — a Sicilian breakfast ritual.",
    ],
  },
  {
    slug: "isola-bella-taormina",
    name: "Isola Bella",
    titleSlug: "the-white-lotus",
    destinationSlug: "taormina",
    lat: 37.8516,
    lng: 15.2986,
    kind: "nature",
    address: "Isola Bella, 98039 Taormina, Italy",
    sceneContext:
      "The tiny island reserve and the pebble beach below town feature in the season's boat and shoreline scenes, just under the cliffs the hotel sits on.",
    howToVisit:
      "Reach the beach by the cable car (funivia) down from town, then walk the short causeway to the island at low tide. The nature reserve charges a small entry fee. Bring water shoes — it's pebbles, not sand.",
    nearbyTips: [
      "Mazzarò beach next door has loungers and beach bars.",
      "The funivia runs every 15 minutes and saves a steep walk back up.",
    ],
  },

  // ---- Emily in Paris · Paris ------------------------------------------
  {
    slug: "place-de-lestrapade",
    name: "Place de l'Estrapade",
    titleSlug: "emily-in-paris",
    destinationSlug: "paris",
    lat: 48.8443,
    lng: 2.347,
    kind: "street",
    address: "Place de l'Estrapade, 75005 Paris, France",
    sceneContext:
      "This quiet Latin Quarter square is home to the building used for Emily's apartment, and the corner restaurant on it stands in for the bistro downstairs.",
    howToVisit:
      "It's a real residential square, so visit considerately and keep noise down — people live here. There's no ticket; the café and bakery on the corner are open to all. Mornings are quietest for photos.",
    nearbyTips: [
      "The Panthéon is a two-minute walk away.",
      "The Jardin du Luxembourg is a short stroll west.",
    ],
  },
  {
    slug: "palais-garnier",
    name: "Palais Garnier",
    titleSlug: "emily-in-paris",
    destinationSlug: "paris",
    lat: 48.872,
    lng: 2.3316,
    kind: "landmark",
    address: "Place de l'Opéra, 75009 Paris, France",
    sceneContext:
      "The 19th-century opera house, all gilt and grand staircase, recurs across the series as the city's most theatrical backdrop.",
    howToVisit:
      "You can tour the interior with a paid daytime ticket, or book a performance to see the auditorium in use. Self-guided visits are easy; the grand staircase and foyers are the highlights. Closed to tours on some matinee days, so check the schedule.",
    nearbyTips: [
      "Galeries Lafayette and its rooftop view are next door.",
      "The historic Café de la Paix sits on the corner of the square.",
    ],
  },
  {
    slug: "pont-alexandre-iii",
    name: "Pont Alexandre III",
    titleSlug: "emily-in-paris",
    destinationSlug: "paris",
    lat: 48.8638,
    lng: 2.3136,
    kind: "landmark",
    address: "Pont Alexandre III, 75008 Paris, France",
    sceneContext:
      "The most ornate bridge in Paris — gilded statues, lamp posts and all — turns up in the series' romantic and establishing beats spanning the Seine.",
    howToVisit:
      "It's a public bridge, free and open at all hours. Sunrise and the blue hour after sunset give the best light and the thinnest crowds. Walk down to the riverbank quays underneath for the postcard angle.",
    nearbyTips: [
      "The Grand Palais and Petit Palais bracket the Right Bank end.",
      "Les Invalides lines up straight ahead on the Left Bank side.",
    ],
  },
];
