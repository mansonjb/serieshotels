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
      "The city that plays itself. From a quiet Latin Quarter square to its grandest bridge and opera house, Paris's most photogenic corners have anchored a streaming-era romance — and they're close enough to string into a single walking route across the Left and Right Banks.",
  },
];
