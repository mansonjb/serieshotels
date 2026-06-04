import type { Destination } from "./types";

/** Geographic hubs. Each aggregates Locations across one or more Titles. */
export const DESTINATIONS: Destination[] = [
  {
    slug: "dubrovnik",
    name: "Dubrovnik",
    country: "Croatia",
    region: "Dubrovnik-Neretva",
    lat: 42.6407,
    lng: 18.1077,
    accent: "c2410c",
    blurb:
      "The walled old town on the Adriatic became the most filmed face of King's Landing. Its limestone streets, sea-facing ramparts and clifftop forts are walkable in an afternoon, which makes Dubrovnik the easiest set-jetting day in Europe — you can trace half a season between coffee and dinner.",
  },
  {
    slug: "south-iceland",
    name: "South Iceland",
    country: "Iceland",
    region: "Suðurland",
    lat: 64.2559,
    lng: -21.1295,
    accent: "0e7490",
    blurb:
      "The rift valleys, lava fields and waterfalls of the Golden Circle stood in for the wild lands beyond the Wall and the road to the Eyrie. Everything here clusters within a day's loop from Reykjavík, so the scenery doubles as Iceland's single most popular self-drive route.",
  },
  {
    slug: "county-down",
    name: "County Down",
    country: "Northern Ireland",
    region: "Northern Ireland",
    lat: 54.3667,
    lng: -5.575,
    accent: "15803d",
    blurb:
      "Strangford Lough and its surrounding estates were the home base for a decade of Westeros filming, with one National Trust courtyard serving as Winterfell itself. It's drivable from Belfast in under an hour, and the studios that built the interiors sit nearby.",
  },
  {
    slug: "taormina",
    name: "Taormina",
    country: "Italy",
    region: "Sicily",
    lat: 37.8526,
    lng: 15.2876,
    accent: "be123c",
    blurb:
      "A cliff-top town on Sicily's east coast, crowned by a Greek theatre with Etna behind it, Taormina became the backdrop for a season of luxury-resort drama. The hotel at its centre is a real, bookable property, and the town below is compact enough to explore on foot.",
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "Île-de-France",
    lat: 48.8566,
    lng: 2.3522,
    accent: "6d28d9",
    blurb:
      "The city that plays itself. From a quiet Latin Quarter square to its grandest bridge and opera house, Paris's most photogenic corners anchor a streaming-era romance — and they're close enough to string into a single walking route across the Left and Right Banks.",
  },
  {
    slug: "seville",
    name: "Seville",
    country: "Spain",
    region: "Andalusia",
    lat: 37.3891,
    lng: -5.9845,
    accent: "b45309",
    blurb:
      "Andalusia's capital lent its Moorish palaces and orange-scented courtyards to the sun-baked kingdom of Dorne. The Real Alcázar is the headline set, but the whole old town — tiled, shaded and walkable — rewards a slow couple of days.",
  },
  {
    slug: "girona",
    name: "Girona",
    country: "Spain",
    region: "Catalonia",
    lat: 41.9794,
    lng: 2.8214,
    accent: "9333ea",
    blurb:
      "An hour north of Barcelona, Girona's medieval lanes and cathedral steps doubled as both Braavos and King's Landing. The compact old quarter, the colourful houses over the river and the intact city walls make it one of Catalonia's most underrated stops.",
  },
  {
    slug: "basque-country",
    name: "Basque Country",
    country: "Spain",
    region: "Biscay",
    lat: 43.35,
    lng: -2.75,
    accent: "0f766e",
    blurb:
      "Green hills meet a dramatic Atlantic coastline in Spain's Basque north, where a serpentine stone causeway climbs to an islet chapel that played Dragonstone. Bilbao and the pintxo bars of the coast are an easy base for the day trip.",
  },
  {
    slug: "maui",
    name: "Maui",
    country: "United States",
    region: "Hawaii",
    lat: 20.7984,
    lng: -156.3319,
    accent: "0891b2",
    blurb:
      "The Hawaiian island where the resort satire began, on the manicured shore of Wailea. Beyond the hotel, Maui delivers the volcano road to Hāna, sunrise above the clouds at Haleakalā, and some of the easiest snorkelling in the Pacific.",
  },
  {
    slug: "koh-samui",
    name: "Koh Samui",
    country: "Thailand",
    region: "Surat Thani",
    lat: 9.512,
    lng: 100.0136,
    accent: "ca8a04",
    blurb:
      "A jungle-backed island in the Gulf of Thailand that hosted the franchise's third season of bad behaviour. Coconut groves, big Buddha temples and a ring road of beaches make it an easy, warm-water base year-round.",
  },
  {
    slug: "scottish-highlands",
    name: "Scottish Highlands",
    country: "Scotland",
    region: "Highland",
    lat: 56.8198,
    lng: -5.1052,
    accent: "1e40af",
    blurb:
      "Glens, lochs and a famous railway viaduct have made the western Highlands a magnet for screen pilgrims — the opening landscapes of a time-travel epic and the route of a certain steam-hauled school train. Fort William makes a practical base for the lot.",
  },
  {
    slug: "central-scotland",
    name: "Central Scotland",
    country: "Scotland",
    region: "Stirling & Fife",
    lat: 56.15,
    lng: -3.9,
    accent: "1d4ed8",
    blurb:
      "Within an hour of Edinburgh and Glasgow, a cluster of castles and a perfectly preserved 17th-century burgh stood in for the homes and villages of an 18th-century Scotland. Easy to chain together on a single driving day.",
  },
  {
    slug: "northumberland",
    name: "Northumberland",
    country: "England",
    region: "North East England",
    lat: 55.4157,
    lng: -1.706,
    accent: "374151",
    blurb:
      "England's far north-east is castle country, and its grandest — a still-inhabited medieval fortress — taught a generation of wizards to fly. Wide empty beaches and Hadrian's Wall are close enough to fill out the trip.",
  },
  {
    slug: "oxford",
    name: "Oxford",
    country: "England",
    region: "Oxfordshire",
    lat: 51.752,
    lng: -1.2577,
    accent: "1e3a8a",
    blurb:
      "The university city's honey-stone colleges, cloisters and dining halls have stood in for Hogwarts more than once. Most of the filmed spots sit within a ten-minute walk of one another in the centre.",
  },
  {
    slug: "north-york-moors",
    name: "North York Moors",
    country: "England",
    region: "Yorkshire",
    lat: 54.3987,
    lng: -0.7138,
    accent: "7c3aed",
    blurb:
      "Heather moorland crossed by a heritage steam railway, where one tiny village station became the gateway to a wizarding village. The preserved line and the surrounding national park make a slow, scenic day.",
  },
  {
    slug: "matamata",
    name: "Matamata",
    country: "New Zealand",
    region: "Waikato",
    lat: -37.8721,
    lng: 175.6829,
    accent: "047857",
    blurb:
      "A rolling green dairy region in the North Island that became the Shire. The Hobbiton movie set is the permanent, fully landscaped reason to come, two hours south-east of Auckland.",
  },
  {
    slug: "tongariro",
    name: "Tongariro",
    country: "New Zealand",
    region: "Manawatū-Whanganui",
    lat: -39.2968,
    lng: 175.5659,
    accent: "92400e",
    blurb:
      "A volcanic national park of ash plains and a near-perfect cone that doubled as Mordor and Mount Doom. It's also home to one of the world's great day hikes, the Tongariro Alpine Crossing.",
  },
  {
    slug: "skopelos",
    name: "Skopelos",
    country: "Greece",
    region: "Sporades",
    lat: 39.122,
    lng: 23.729,
    accent: "0284c7",
    blurb:
      "A pine-covered Sporades island in the Aegean, ringed by clear coves and topped by a clifftop chapel that hosted a famous film wedding. Quieter than its Cycladic cousins, it's reached by ferry via Skiathos.",
  },
  {
    slug: "bath",
    name: "Bath",
    country: "England",
    region: "Somerset",
    lat: 51.3811,
    lng: -2.359,
    accent: "a21caf",
    blurb:
      "Georgian crescents, honey-coloured terraces and Roman baths make this UNESCO city a ready-made Regency set — and the costume-drama crews know it. Most of the filmed facades are an easy stroll apart.",
  },
  {
    slug: "greenwich",
    name: "Greenwich",
    country: "England",
    region: "London",
    lat: 51.4769,
    lng: -0.0005,
    accent: "be185d",
    blurb:
      "London's maritime quarter, all baroque colonnades and a hilltop park, stands in for grand townhouses and palaces across period television. It's a half-day on its own, river-boat distance from the centre.",
  },
  {
    slug: "madrid",
    name: "Madrid",
    country: "Spain",
    region: "Community of Madrid",
    lat: 40.4168,
    lng: -3.7038,
    accent: "dc2626",
    blurb:
      "The Spanish capital's grand institutional buildings played the targets of TV's most-watched heist. The real exteriors stand on broad boulevards in the museum district, walkable between tapas stops.",
  },
  {
    slug: "extremadura",
    name: "Extremadura",
    country: "Spain",
    region: "Cáceres",
    lat: 39.472,
    lng: -6.372,
    accent: "7f1d1d",
    blurb:
      "A sun-bleached region of walled towns and conquistador palaces in western Spain, whose untouched medieval centres became the capital of a dragon-riding dynasty. Cáceres and Trujillo sit a short drive apart.",
  },
];
