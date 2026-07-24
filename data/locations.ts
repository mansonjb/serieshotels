import type { Location } from "./types";

/** Real, visitable filming locations. Each points at one Title + one Destination. */
export const LOCATIONS: Location[] = [
  // ===================== Game of Thrones =====================
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
      "The sea-facing ramparts and the old harbour stood in for King's Landing throughout the series, the walk along the walls frames the same rooftops and bays you'll recognise from the capital's exterior shots.",
    howToVisit:
      "Buy a timed ticket for the full circuit of the walls (a one-way loop of roughly two kilometres, mostly stairs). Go at opening or late afternoon to dodge cruise crowds and the heat; allow 60-90 minutes.",
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
      "The same ticket that covers the city walls also admits you to the fort, so keep your stub. It's a steep climb up exposed steps to a small but dramatic platform over the Adriatic.",
    nearbyTips: [
      "The little West Harbour (Kolorina) cove sits directly below.",
      "Combine it with the Pile Gate, a two-minute walk away.",
    ],
  },
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
      "It's the first stop on the Golden Circle self-drive loop, about 45 minutes from Reykjavík. Parking is paid; the main Almannagjá gorge walk is flat and well-marked, and there's no entry fee for the park itself.",
    nearbyTips: [
      "Continue the loop to the Geysir hot springs and Gullfoss waterfall.",
      "Certified divers can snorkel the Silfra fissure in the same park.",
    ],
  },
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
      "The farmyard and tower at this National Trust estate were built out into Winterfell's courtyard, the spot where the Stark household gathers in the very first episode.",
    howToVisit:
      "A National Trust property with paid entry (free for members). Independent operators on site run costumed archery and cycle tours of the filming spots; book those ahead in summer. About 50 minutes from Belfast.",
    nearbyTips: [
      "The estate sits on the shore of Strangford Lough, good for a walk after.",
      "Audley's Castle, another recognisable backdrop, is a short stroll across the grounds.",
    ],
  },
  {
    slug: "alcazar-seville",
    name: "Real Alcázar of Seville",
    titleSlug: "game-of-thrones",
    destinationSlug: "seville",
    lat: 37.3829,
    lng: -5.9897,
    kind: "landmark",
    address: "Patio de Banderas, 41004 Sevilla, Spain",
    sceneContext:
      "The Moorish palace's tiled courtyards and sunken gardens became the Water Gardens of Dorne, the seat of House Martell.",
    howToVisit:
      "Book a timed ticket online well ahead, it sells out daily, especially in spring. Go first thing to walk the gardens before the heat and crowds; allow at least 90 minutes.",
    nearbyTips: [
      "The Seville Cathedral and Giralda tower are next door.",
      "Wander the tangled lanes of the Santa Cruz quarter just outside the walls.",
    ],
  },
  {
    slug: "girona-cathedral",
    name: "Girona Cathedral steps",
    titleSlug: "game-of-thrones",
    destinationSlug: "girona",
    lat: 41.9874,
    lng: 2.8266,
    kind: "landmark",
    address: "Plaça de la Catedral, 17004 Girona, Spain",
    sceneContext:
      "The cathedral's vast baroque staircase stood in for the approach to the Great Sept of Baelor, while Girona's old lanes elsewhere doubled as the canals and streets of Braavos.",
    howToVisit:
      "The steps and square are free to admire; a ticket gets you inside the cathedral and its cloister. Climb up into the Old Quarter (Barri Vell) and follow the medieval walls for the best views.",
    nearbyTips: [
      "Walk the Passeig de la Muralla, the intact city ramparts.",
      "See the colourful Cases de l'Onyar houses over the river.",
    ],
  },
  {
    slug: "gaztelugatxe",
    name: "San Juan de Gaztelugatxe",
    titleSlug: "game-of-thrones",
    destinationSlug: "basque-country",
    lat: 43.4275,
    lng: -2.7847,
    kind: "nature",
    address: "Gaztelugatxeko Doniene, 48360 Bermeo, Bizkaia, Spain",
    sceneContext:
      "The serpentine stone causeway zig-zagging out to a chapel-topped islet became Dragonstone, the ancestral island seat of House Targaryen.",
    howToVisit:
      "Access is by a free timed ticket booked online; it's a steep walk down and back up roughly 240 steps, so wear proper shoes and bring water. Allow a couple of hours including the trail from the car park.",
    nearbyTips: [
      "The fishing town of Bermeo is the nearest stop for lunch.",
      "Bilbao and its Guggenheim are about 45 minutes away.",
    ],
  },

  // ===================== The White Lotus =====================
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
      "This former convent turned cliff-top hotel was the real 'White Lotus Sicily', its terraces, pool and sea views are the resort you watch the guests fall apart in.",
    howToVisit:
      "It's a working five-star hotel, so the grounds are for guests and rooms book up far ahead for summer. If you're not staying, you can often reserve a drink or lunch on the terrace, call ahead to check.",
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
      "Grab a granita and brioche on the way up, a Sicilian breakfast ritual.",
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
      "Reach the beach by the cable car (funivia) down from town, then walk the short causeway to the island at low tide. The nature reserve charges a small entry fee. Bring water shoes, it's pebbles, not sand.",
    nearbyTips: [
      "Mazzarò beach next door has loungers and beach bars.",
      "The funivia runs every 15 minutes and saves a steep walk back up.",
    ],
  },
  {
    slug: "four-seasons-maui",
    name: "Four Seasons Resort Maui at Wailea",
    titleSlug: "the-white-lotus",
    destinationSlug: "maui",
    lat: 20.687,
    lng: -156.4416,
    kind: "hotel",
    address: "3900 Wailea Alanui Dr, Wailea, HI 96753, United States",
    sceneContext:
      "The resort on Wailea Beach was the original 'White Lotus Hawaii', supplying the lobby, infinity pool and oceanfront suites of the first season.",
    howToVisit:
      "A guest-only luxury resort; book ahead for high season. Hawaii beaches are public by law, so you can reach Wailea Beach itself via the marked shoreline access path even without a room.",
    nearbyTips: [
      "The Wailea Beach Path links several resorts along the sand.",
      "Drive up Haleakalā for the famous above-the-clouds sunrise (reserve a slot).",
    ],
  },
  {
    slug: "four-seasons-koh-samui",
    name: "Four Seasons Resort Koh Samui",
    titleSlug: "the-white-lotus",
    destinationSlug: "koh-samui",
    lat: 9.5717,
    lng: 99.93,
    kind: "hotel",
    address: "219 Moo 5, Angthong, Koh Samui, Surat Thani 84140, Thailand",
    sceneContext:
      "This hillside resort of private pool villas above the Gulf of Thailand served as the principal 'White Lotus Thailand' in the third season.",
    howToVisit:
      "A guest-only resort on the island's quieter north-west coast; villas book up well ahead. Non-guests can sometimes arrange a meal at the restaurants, enquire directly.",
    nearbyTips: [
      "The Big Buddha temple (Wat Phra Yai) is a short drive east.",
      "Fisherman's Village in Bophut has night-market food and bars.",
    ],
  },

  // ===================== Emily in Paris =====================
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
      "It's a real residential square, so visit considerately and keep noise down, people live here. There's no ticket; the café and bakery on the corner are open to all. Mornings are quietest for photos.",
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
      "Tour the interior with a paid daytime ticket, or book a performance to see the auditorium in use. Self-guided visits are easy; the grand staircase and foyers are the highlights. Check the schedule, as tours pause on some matinee days.",
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
      "The most ornate bridge in Paris, gilded statues, lamp posts and all, turns up in the series' romantic and establishing beats over the Seine.",
    howToVisit:
      "A public bridge, free and open at all hours. Sunrise and the blue hour after sunset give the best light and the thinnest crowds. Walk down to the riverbank quays underneath for the postcard angle.",
    nearbyTips: [
      "The Grand Palais and Petit Palais bracket the Right Bank end.",
      "Les Invalides lines up straight ahead on the Left Bank side.",
    ],
  },
  {
    slug: "jardin-du-palais-royal",
    name: "Jardin du Palais-Royal",
    titleSlug: "emily-in-paris",
    destinationSlug: "paris",
    lat: 48.8657,
    lng: 2.3373,
    kind: "landmark",
    address: "8 Rue de Montpensier, 75001 Paris, France",
    sceneContext:
      "The arcaded royal garden, and the striped Buren columns in its forecourt, feature as one of Emily's elegant Right Bank strolls.",
    howToVisit:
      "The garden is free and open daily; the surrounding arcades hide old-world shops and cafés. Early morning gives you the colonnades almost to yourself.",
    nearbyTips: [
      "The Louvre is a two-minute walk south.",
      "Galerie Vivienne, a glass-roofed 19th-century passage, is around the corner.",
    ],
  },

  // ===================== Outlander =====================
  {
    slug: "doune-castle",
    name: "Doune Castle",
    titleSlug: "outlander",
    destinationSlug: "central-scotland",
    lat: 56.1856,
    lng: -4.0506,
    kind: "building",
    address: "Castle Rd, Doune FK16 6EA, United Kingdom",
    sceneContext:
      "This medieval stronghold played Castle Leoch, seat of Clan MacKenzie, the same courtyard that earlier stood in for Winterfell in the Game of Thrones pilot.",
    howToVisit:
      "Run by Historic Environment Scotland with paid entry; the excellent audio guide leans into the screen history. About an hour from both Edinburgh and Glasgow. Allow 60-90 minutes.",
    nearbyTips: [
      "The town of Stirling and its castle are 20 minutes away.",
      "The Trossachs and Loch Lomond start just to the west.",
    ],
  },
  {
    slug: "midhope-castle",
    name: "Midhope Castle (Lallybroch)",
    titleSlug: "outlander",
    destinationSlug: "central-scotland",
    lat: 55.9936,
    lng: -3.4519,
    kind: "building",
    address: "Hopetoun Estate, South Queensferry EH30 9SL, United Kingdom",
    sceneContext:
      "The weathered tower house is the exterior of Lallybroch, the Fraser family home, one of the most recognised facades in the whole series.",
    howToVisit:
      "It sits on the private Hopetoun Estate; pay the small access fee at the estate before driving in. Only the exterior can be visited, the inside isn't open, but the courtyard is the photo everyone comes for.",
    nearbyTips: [
      "Hopetoun House itself is nearby and open to visitors.",
      "South Queensferry and the three Forth bridges are 15 minutes away.",
    ],
  },
  {
    slug: "culross",
    name: "Culross",
    titleSlug: "outlander",
    destinationSlug: "central-scotland",
    lat: 56.056,
    lng: -3.63,
    kind: "street",
    address: "Culross, Fife KY12 8JH, United Kingdom",
    sceneContext:
      "This perfectly preserved 17th-century burgh became the village of Cranesmuir, and the ochre Culross Palace garden played Claire's healing herb garden.",
    howToVisit:
      "Wander the cobbled streets for free; the National Trust palace and garden have paid entry. It's a small place, an hour or two covers it, on the north shore of the Firth of Forth.",
    nearbyTips: [
      "The Kincardine and Clackmannanshire bridges are close for onward driving.",
      "Combine it with Doune Castle for a full Outlander day.",
    ],
  },
  {
    slug: "glencoe",
    name: "Glencoe",
    titleSlug: "outlander",
    destinationSlug: "scottish-highlands",
    lat: 56.6816,
    lng: -5.0991,
    kind: "nature",
    address: "Glencoe, Ballachulish PH49 4HX, United Kingdom",
    sceneContext:
      "The brooding glen and its surrounding peaks supply the sweeping Highland landscapes of the opening titles and several travel sequences.",
    howToVisit:
      "Free and open year-round; it's a drive through on the A82 with marked viewpoints and trailheads. The Glencoe Visitor Centre explains the geology and history. Weather changes fast, pack layers.",
    nearbyTips: [
      "Fort William, the area's hub, is 30 minutes north.",
      "The Glenfinnan Viaduct is within easy reach for a Harry Potter add-on.",
    ],
  },

  // ===================== Harry Potter =====================
  {
    slug: "glenfinnan-viaduct",
    name: "Glenfinnan Viaduct",
    titleSlug: "harry-potter",
    destinationSlug: "scottish-highlands",
    lat: 56.8757,
    lng: -5.4332,
    kind: "landmark",
    address: "Glenfinnan, Fort William PH37 4LT, United Kingdom",
    sceneContext:
      "The graceful curved railway viaduct is the one the Hogwarts Express steams across, most famously with a flying car in pursuit.",
    howToVisit:
      "Park at the Glenfinnan visitor car park and walk up the trail to the viewpoint (15-20 minutes). Time it for the Jacobite steam train crossing, which runs daily in season, check the timetable before you go.",
    nearbyTips: [
      "The Glenfinnan Monument and Loch Shiel are right below.",
      "Continue to Mallaig for the ferry to the Isle of Skye.",
    ],
  },
  {
    slug: "alnwick-castle",
    name: "Alnwick Castle",
    titleSlug: "harry-potter",
    destinationSlug: "northumberland",
    lat: 55.4157,
    lng: -1.706,
    kind: "building",
    address: "Alnwick NE66 1NQ, United Kingdom",
    sceneContext:
      "The castle's outer bailey is where the first films staged Harry's broomstick flying lessons, the lawns Madam Hooch teaches on.",
    howToVisit:
      "Paid entry; the castle runs daily broomstick-flying sessions on the same lawns, which kids love. It's still a family home, so opening is seasonal, check dates. Allow half a day.",
    nearbyTips: [
      "The Alnwick Garden and its giant treehouse are next door.",
      "Northumberland's wide beaches (Bamburgh, Embleton) are a short drive.",
    ],
  },
  {
    slug: "christ-church-oxford",
    name: "Christ Church, Oxford",
    titleSlug: "harry-potter",
    destinationSlug: "oxford",
    lat: 51.7503,
    lng: -1.2557,
    kind: "building",
    address: "St Aldate's, Oxford OX1 1DP, United Kingdom",
    sceneContext:
      "The college's 16th-century staircase appears on screen, and its grand dining hall was the model for Hogwarts' Great Hall.",
    howToVisit:
      "Paid timed ticket via the college; it's a working college and cathedral, so some areas close to visitors at times. Book ahead in summer. Allow about an hour.",
    nearbyTips: [
      "The Bodleian Library, another Hogwarts stand-in, is a ten-minute walk.",
      "Climb the nearby tower of the University Church for rooftop views.",
    ],
  },
  {
    slug: "goathland-station",
    name: "Goathland Station (Hogsmeade)",
    titleSlug: "harry-potter",
    destinationSlug: "north-york-moors",
    lat: 54.3987,
    lng: -0.7138,
    kind: "building",
    address: "Goathland, Whitby YO22 5NF, United Kingdom",
    sceneContext:
      "The little moorland station played Hogsmeade, where students step off the Hogwarts Express in the first film.",
    howToVisit:
      "It's a working stop on the North Yorkshire Moors heritage railway; buy a ticket to arrive by steam train as the wizards do. The village and platform are free to wander otherwise.",
    nearbyTips: [
      "Ride the line on to Whitby on the coast.",
      "The surrounding moors are prime walking country.",
    ],
  },

  // ===================== The Lord of the Rings =====================
  {
    slug: "hobbiton",
    name: "Hobbiton Movie Set",
    titleSlug: "the-lord-of-the-rings",
    destinationSlug: "matamata",
    lat: -37.8721,
    lng: 175.6829,
    kind: "venue",
    address: "501 Buckland Rd, Hinuera, Matamata 3472, New Zealand",
    sceneContext:
      "The Shire, complete with Bag End and its round hobbit-hole doors, was built on a working sheep farm and kept permanently as a visitor attraction.",
    howToVisit:
      "Visits are by guided tour only, booked in advance, you can't drive into the set itself. Tours leave from the nearby ticket centre; the Green Dragon Inn pours a complimentary ale at the end. Allow about half a day.",
    nearbyTips: [
      "The town of Matamata has the photogenic 'Hobbiton i-SITE' info centre.",
      "Rotorua's geothermal parks are about an hour south.",
    ],
  },
  {
    slug: "tongariro-national-park",
    name: "Tongariro National Park",
    titleSlug: "the-lord-of-the-rings",
    destinationSlug: "tongariro",
    lat: -39.2968,
    lng: 175.5659,
    kind: "nature",
    address: "Tongariro National Park, New Zealand",
    sceneContext:
      "The park's ash plains and the near-perfect cone of Mount Ngauruhoe stood in for the slopes of Mount Doom and the wastes of Mordor.",
    howToVisit:
      "Free to enter; the celebrated Tongariro Alpine Crossing is a strenuous full-day, one-way hike needing a shuttle and good weather. For a gentler taste, shorter trails leave from Whakapapa village.",
    nearbyTips: [
      "Book a Crossing shuttle ahead in summer, parking is limited.",
      "Lake Taupō, with its own activities, is to the north.",
    ],
  },

  // ===================== Mamma Mia! =====================
  {
    slug: "agios-ioannis-skopelos",
    name: "Agios Ioannis Kastri chapel",
    titleSlug: "mamma-mia",
    destinationSlug: "skopelos",
    lat: 39.1958,
    lng: 23.743,
    kind: "landmark",
    address: "Agios Ioannis Kastri, Skopelos 370 03, Greece",
    sceneContext:
      "The tiny chapel perched on a sea stack is where the film's clifftop wedding scene was shot, reached up a long flight of rock-cut steps.",
    howToVisit:
      "Free to visit, but it's roughly 100+ steep steps up from the small beach below, so wear good shoes and bring water. Dress modestly to go inside the chapel. It's on Skopelos's north coast, about 40 minutes by car from the main town.",
    nearbyTips: [
      "The beach at the base is a fine spot to cool off after the climb.",
      "Skopelos Town's tiered white houses are worth an evening.",
    ],
  },
  {
    slug: "kastani-beach",
    name: "Kastani Beach",
    titleSlug: "mamma-mia",
    destinationSlug: "skopelos",
    lat: 39.109,
    lng: 23.679,
    kind: "nature",
    address: "Kastani Beach, Skopelos 370 03, Greece",
    sceneContext:
      "This pine-backed pebble cove on the island's west coast is where several of the film's beach musical numbers were staged.",
    howToVisit:
      "A public beach with a seasonal taverna and sunbed hire; the water is clear and calm. Go by car or scooter, the road winds down through pine forest. Mornings are quietest.",
    nearbyTips: [
      "Milia and Panormos beaches are close by along the same coast.",
      "Bring water shoes for the pebbles.",
    ],
  },

  // ===================== Bridgerton =====================
  {
    slug: "royal-crescent-bath",
    name: "The Royal Crescent, Bath",
    titleSlug: "bridgerton",
    destinationSlug: "bath",
    lat: 51.387,
    lng: -2.369,
    kind: "building",
    address: "Royal Crescent, Bath BA1 2LR, United Kingdom",
    sceneContext:
      "The sweeping Georgian crescent of golden townhouses appears as fashionable Regency London, with one end standing in for a society residence.",
    howToVisit:
      "The crescent and its lawn are public to walk along for free; No.1 Royal Crescent is a restored Georgian house-museum with paid entry. The terrace is residential, so admire the facades from the green.",
    nearbyTips: [
      "The Circus, another Georgian set-piece, is a two-minute walk.",
      "The Roman Baths and Bath Abbey are in the centre below.",
    ],
  },
  {
    slug: "holburne-museum",
    name: "The Holburne Museum",
    titleSlug: "bridgerton",
    destinationSlug: "bath",
    lat: 51.3838,
    lng: -2.352,
    kind: "building",
    address: "Great Pulteney St, Bath BA2 4DB, United Kingdom",
    sceneContext:
      "The museum's grand facade played the exterior of Lady Danbury's house, at the head of one of Bath's finest streets.",
    howToVisit:
      "Entry to the museum is free (special exhibitions may charge); the building stands at the end of Great Pulteney Street, itself a Bridgerton backdrop. Allow an hour for the art and the café.",
    nearbyTips: [
      "Stroll Great Pulteney Street and cross to Pulteney Bridge.",
      "Sydney Gardens behind the museum are a quiet break.",
    ],
  },
  {
    slug: "rangers-house-greenwich",
    name: "Ranger's House, Greenwich",
    titleSlug: "bridgerton",
    destinationSlug: "greenwich",
    lat: 51.469,
    lng: -0.001,
    kind: "building",
    address: "Chesterfield Walk, Blackheath, London SE10 8QX, United Kingdom",
    sceneContext:
      "This red-brick Georgian villa on the edge of Greenwich Park is the exterior of the Bridgerton family's London townhouse.",
    howToVisit:
      "Run by English Heritage with seasonal paid entry to see the art collection inside; the exterior and the surrounding park are free. Reachable by DLR or river boat from central London.",
    nearbyTips: [
      "Climb the park to the Royal Observatory and the prime meridian.",
      "The Old Royal Naval College, another period-drama favourite, is downhill by the river.",
    ],
  },

  // ===================== Money Heist =====================
  {
    slug: "csic-madrid",
    name: "CSIC headquarters (Royal Mint)",
    titleSlug: "money-heist",
    destinationSlug: "madrid",
    lat: 40.4389,
    lng: -3.6889,
    kind: "building",
    address: "C. de Serrano 117, 28006 Madrid, Spain",
    sceneContext:
      "The grand headquarters of Spain's national research council stood in for the Royal Mint, the building the crew occupies in the first heist.",
    howToVisit:
      "It's a working institution on Calle Serrano, so it's an exterior-only photo stop from the public pavement. Combine it with the museum district rather than expecting to go inside.",
    nearbyTips: [
      "The National Archaeological Museum is a short walk south.",
      "The shops of the Salamanca district are all around.",
    ],
  },
  {
    slug: "banco-de-espana",
    name: "Banco de España",
    titleSlug: "money-heist",
    destinationSlug: "madrid",
    lat: 40.4185,
    lng: -3.6938,
    kind: "landmark",
    address: "Calle de Alcalá 48, 28014 Madrid, Spain",
    sceneContext:
      "The real Bank of Spain on Plaza de Cibeles is the target of the second heist; its monumental corner facade appears throughout, though the interiors were a built set.",
    howToVisit:
      "An exterior-only stop, it's a functioning central bank. The best vantage is from across Plaza de Cibeles, one of Madrid's grandest junctions.",
    nearbyTips: [
      "Climb the Cibeles Palace rooftop terrace opposite for the view.",
      "The Prado and Retiro Park are a short walk east.",
    ],
  },

  // ===================== House of the Dragon =====================
  {
    slug: "caceres-old-town",
    name: "Cáceres Old Town",
    titleSlug: "house-of-the-dragon",
    destinationSlug: "extremadura",
    lat: 39.472,
    lng: -6.372,
    kind: "street",
    address: "Plaza de Santa María, 10003 Cáceres, Spain",
    sceneContext:
      "The untouched medieval quarter, towers, palaces and stone lanes, doubled as the streets of King's Landing, needing barely any set dressing.",
    howToVisit:
      "The walled old town is free to wander; some palaces and towers charge small entry fees. It's compact and best on foot, ideally at golden hour when the stone glows. Allow a half-day.",
    nearbyTips: [
      "Climb the Bujaco Tower for views over Plaza Mayor.",
      "Trujillo, another filming town, is 45 minutes east.",
    ],
  },
  {
    slug: "trujillo-castle",
    name: "Trujillo Castle",
    titleSlug: "house-of-the-dragon",
    destinationSlug: "extremadura",
    lat: 39.4605,
    lng: -5.882,
    kind: "building",
    address: "Cerro Cabeza del Zorro, 10200 Trujillo, Cáceres, Spain",
    sceneContext:
      "The Moorish hilltop castle and the grand Plaza Mayor below featured as parts of the Targaryens' capital and its surroundings.",
    howToVisit:
      "Small paid entry to the castle, which crowns the town; the climb up through Trujillo's old streets is part of the appeal. Sunset from the ramparts over the plains is the highlight.",
    nearbyTips: [
      "The arcaded Plaza Mayor is the town's social heart.",
      "Pair it with Cáceres for a full Extremadura day.",
    ],
  },

  // ===================== Downton Abbey =====================
  {
    slug: "highclere-castle",
    name: "Highclere Castle",
    titleSlug: "downton-abbey",
    destinationSlug: "hampshire",
    lat: 51.3267,
    lng: -1.3604,
    kind: "building",
    address: "Highclere Park, Highclere, Newbury RG20 9RN, United Kingdom",
    sceneContext:
      "The honey-stoned Jacobean house and its sweeping grounds are Downton Abbey itself, the saloon, library and bedrooms serving as the family's real interiors across every series.",
    howToVisit:
      "Highclere opens to visitors on selected dates from spring to autumn and over Christmas; tickets sell out fast, so book online well ahead. It's about 90 minutes from London by car, or a train to Newbury plus a short taxi.",
    nearbyTips: [
      "The Egyptian exhibition in the cellars nods to the family's real archaeological history.",
      "The town of Newbury nearby has plenty of lunch options.",
    ],
  },
  {
    slug: "bampton-village",
    name: "Bampton",
    titleSlug: "downton-abbey",
    destinationSlug: "cotswolds",
    lat: 51.7263,
    lng: -1.5466,
    kind: "street",
    address: "Bampton, Oxfordshire OX18, United Kingdom",
    sceneContext:
      "This quiet Oxfordshire village is Downton's village, its church and former grammar school standing in for the local cottage hospital and the streets the family walks through.",
    howToVisit:
      "Bampton is free to wander at any time, a real working village rather than an attraction, so visit respectfully. It's a short drive from Oxford or Witney, with a small Downton exhibition in the old grammar school.",
    nearbyTips: [
      "St Mary's Church features in countless scenes.",
      "Combine it with the nearby Cotswold towns of Burford and Witney.",
    ],
  },

  // ===================== The Crown =====================
  {
    slug: "ely-cathedral",
    name: "Ely Cathedral",
    titleSlug: "the-crown",
    destinationSlug: "ely",
    lat: 52.399,
    lng: 0.2625,
    kind: "landmark",
    address: "The College, Ely CB7 4DL, United Kingdom",
    sceneContext:
      "The vast medieval cathedral, nicknamed the Ship of the Fens, stands in for Westminster Abbey in the coronation and royal-wedding scenes.",
    howToVisit:
      "The cathedral welcomes visitors daily with paid admission that includes its famous octagon tower tours; check times around services. Ely is a 15-minute train ride from Cambridge.",
    nearbyTips: [
      "Climb the octagon and west towers for views across the flat Fens.",
      "Oliver Cromwell's House nearby is the city's other museum.",
    ],
  },
  {
    slug: "lancaster-house",
    name: "Lancaster House",
    titleSlug: "the-crown",
    destinationSlug: "london",
    lat: 51.5045,
    lng: -0.1389,
    kind: "building",
    address: "Stable Yard, St James's, London SW1A 1BB, United Kingdom",
    sceneContext:
      "This opulent St James's mansion provides the gilded staircases and state rooms that double for the interiors of Buckingham Palace.",
    howToVisit:
      "A working government building, so it opens to the public only occasionally, on Open House weekends and special tours; check listings ahead. It sits beside Green Park, an easy walk from the real palace.",
    nearbyTips: [
      "Green Park and The Mall are right outside.",
      "Stroll to Buckingham Palace for the changing of the guard.",
    ],
  },

  // ===================== Peaky Blinders =====================
  {
    slug: "black-country-museum",
    name: "Black Country Living Museum",
    titleSlug: "peaky-blinders",
    destinationSlug: "birmingham",
    lat: 52.5213,
    lng: -2.0918,
    kind: "venue",
    address: "Tipton Rd, Dudley DY1 4SQ, United Kingdom",
    sceneContext:
      "The open-air museum's cobbled streets, canal and old workshops were dressed as Shelby-era Birmingham, including the gang's Garrison-quarter haunts.",
    howToVisit:
      "A ticketed open-air museum near Dudley with costumed demonstrations and a recreated 1900s town; allow at least half a day. It runs special Peaky-themed evenings, which book out early.",
    nearbyTips: [
      "Ride the restored tram and canal boat included with entry.",
      "Dudley Castle and Zoo are next door.",
    ],
  },
  {
    slug: "stanley-dock-liverpool",
    name: "Stanley Dock",
    titleSlug: "peaky-blinders",
    destinationSlug: "liverpool",
    lat: 53.4231,
    lng: -2.993,
    kind: "building",
    address: "Regent Rd, Liverpool L3 0AN, United Kingdom",
    sceneContext:
      "The towering brick Tobacco Warehouse and the cobbled dock road provided the show's smoky factory exteriors and waterfront brawls.",
    howToVisit:
      "The dock area is publicly accessible and now home to a hotel and the regular Stanley Dock market; the warehouse exteriors are free to view. It's a 25-minute walk north along the waterfront from the city centre.",
    nearbyTips: [
      "The Albert Dock and its museums are along the river.",
      "Time it with the weekend market under the warehouse arches.",
    ],
  },

  // ===================== Wednesday =====================
  {
    slug: "cantacuzino-castle",
    name: "Cantacuzino Castle",
    titleSlug: "wednesday",
    destinationSlug: "carpathians",
    lat: 45.4106,
    lng: 25.536,
    kind: "building",
    address: "Strada Zamora 1, Bușteni 105500, Romania",
    sceneContext:
      "This neo-Gothic mountain castle and its terraced gardens are Nevermore Academy, the school for outcasts at the heart of the series.",
    howToVisit:
      "Cantacuzino Castle in Bușteni is open daily with paid entry and runs a popular Nevermore-themed exhibition; book timed tickets in summer. It's about two hours from Bucharest by road or train.",
    nearbyTips: [
      "Ride the Bușteni cable car up to the Bucegi plateau.",
      "The Caraiman cross on the ridge above is Romania's highest summit monument.",
    ],
  },

  // ===================== The Witcher =====================
  {
    slug: "ogrodzieniec-castle",
    name: "Ogrodzieniec Castle",
    titleSlug: "the-witcher",
    destinationSlug: "southern-poland",
    lat: 50.4521,
    lng: 19.5533,
    kind: "landmark",
    address: "Podzamcze 32, 42-440 Ogrodzieniec, Poland",
    sceneContext:
      "The dramatic ruined castle on its rocky outcrop staged the pivotal Battle of Sodden Hill in the first season.",
    howToVisit:
      "The ruins are a ticketed attraction on the Trail of the Eagles' Nests, open daily in season with a walkway around the crags. It's about an hour by car from Kraków.",
    nearbyTips: [
      "The surrounding limestone rocks are popular with climbers.",
      "Pair it with a day in Kraków's old town.",
    ],
  },
  {
    slug: "roque-nublo",
    name: "Roque Nublo",
    titleSlug: "the-witcher",
    destinationSlug: "canary-islands",
    lat: 27.968,
    lng: -15.617,
    kind: "nature",
    address: "Roque Nublo, 35368 Tejeda, Las Palmas, Spain",
    sceneContext:
      "Gran Canaria's volcanic monolith and the pine-clad highlands around it form the otherworldly badlands the characters cross.",
    howToVisit:
      "A well-marked trail climbs to the base of the rock from a roadside car park in the island's interior; allow an hour each way and bring water. The mountain roads from the coast are winding, so plan a full day.",
    nearbyTips: [
      "Sunset over the sea of clouds with Mount Teide beyond is the reward.",
      "The white town of Tejeda below is a scenic lunch stop.",
    ],
  },

  // ===================== Vikings =====================
  {
    slug: "lough-tay",
    name: "Lough Tay",
    titleSlug: "vikings",
    destinationSlug: "wicklow",
    lat: 53.108,
    lng: -6.281,
    kind: "nature",
    address: "Lough Tay, Co. Wicklow, Ireland",
    sceneContext:
      "The dark, peat-stained mountain lake with its pale sandy beach is Kattegat, the Norse settlement the saga returns to again and again.",
    howToVisit:
      "A famous viewpoint over the lake sits on the road across the Sally Gap; the lake itself is on private Guinness land, so admire it from above. It's about an hour's drive into the mountains from Dublin.",
    nearbyTips: [
      "Continue over the Sally Gap for Glendalough's monastic ruins.",
      "Powerscourt Waterfall is a short detour.",
    ],
  },

  // ===================== Poldark =====================
  {
    slug: "charlestown-cornwall",
    name: "Charlestown Harbour",
    titleSlug: "poldark",
    destinationSlug: "cornwall",
    lat: 50.3318,
    lng: -4.757,
    kind: "landmark",
    address: "Charlestown, St Austell PL25 3NJ, United Kingdom",
    sceneContext:
      "This Georgian harbour, with its tall ships still moored, stands in for the 18th-century ports of the series almost unchanged.",
    howToVisit:
      "The harbour is free to walk around at any time, ringed by cafés and a shipwreck museum; it's a working heritage port, so respect filming and ships. Parking is a short walk away in the Charlestown suburb of St Austell.",
    nearbyTips: [
      "The Eden Project's biomes are ten minutes inland.",
      "The tall ships are sometimes open for tours.",
    ],
  },
  {
    slug: "botallack-mine",
    name: "Botallack Mine",
    titleSlug: "poldark",
    destinationSlug: "cornwall",
    lat: 50.143,
    lng: -5.689,
    kind: "landmark",
    address: "Botallack, St Just, Penzance TR19 7QQ, United Kingdom",
    sceneContext:
      "The Crowns engine houses clinging to the cliff edge are Poldark's Wheal Leisure, the mine at the centre of his fortunes.",
    howToVisit:
      "A free National Trust site on the Tin Coast, reached by a short walk down a rough track from the Botallack car park; wear sturdy shoes near the cliff edges. The coast path links it to neighbouring mines.",
    nearbyTips: [
      "The Levant Mine nearby runs a restored beam engine.",
      "Cape Cornwall and Land's End are close along the coast.",
    ],
  },
  {
    slug: "holywell-bay",
    name: "Holywell Bay",
    titleSlug: "poldark",
    destinationSlug: "cornwall",
    lat: 50.393,
    lng: -5.143,
    kind: "nature",
    address: "Holywell Bay, Newquay TR8 5PF, United Kingdom",
    sceneContext:
      "The wide surf beach with its twin rocky islets is the windswept sand Poldark gallops across in the title sequence.",
    howToVisit:
      "A large dune-backed beach with a car park and seasonal café; check tide times, as the strand is huge at low water and shrinks at high. It's a few minutes from Newquay.",
    nearbyTips: [
      "The dunes hide a small holy well in the cliffs.",
      "Newquay's surf schools are close by.",
    ],
  },

  // ===================== Broadchurch =====================
  {
    slug: "west-bay-dorset",
    name: "West Bay",
    titleSlug: "broadchurch",
    destinationSlug: "dorset",
    lat: 50.711,
    lng: -2.762,
    kind: "nature",
    address: "West Bay, Bridport DT6 4EN, United Kingdom",
    sceneContext:
      "The sheer golden cliff of East Beach looms over the harbour town and behind nearly every scene of the murder investigation.",
    howToVisit:
      "The harbour, beach and cliff path are free and open year-round; the cliffs are unstable, so keep well back from the edge and the base. West Bay is a short drive from Bridport on the Jurassic Coast.",
    nearbyTips: [
      "Walk up the cliff path for the postcard view back over town.",
      "Chesil Beach stretches east from here.",
    ],
  },

  // ===================== Normal People =====================
  {
    slug: "trinity-college-dublin",
    name: "Trinity College Dublin",
    titleSlug: "normal-people",
    destinationSlug: "dublin",
    lat: 53.3438,
    lng: -6.2546,
    kind: "landmark",
    address: "College Green, Dublin 2, Ireland",
    sceneContext:
      "The cobbled squares and arches of Ireland's oldest university are where Marianne and Connell reunite and drift apart as students.",
    howToVisit:
      "The campus is free to wander; the Old Library and the Book of Kells are a separate ticketed visit worth booking ahead. It sits right in the centre of Dublin.",
    nearbyTips: [
      "Grafton Street's shops and buskers are next door.",
      "The National Gallery is a short walk away.",
    ],
  },
  {
    slug: "streedagh-beach",
    name: "Streedagh Beach",
    titleSlug: "normal-people",
    destinationSlug: "sligo",
    lat: 54.403,
    lng: -8.536,
    kind: "nature",
    address: "Streedagh, Grange, Co. Sligo, Ireland",
    sceneContext:
      "The long, wild strand stands in for the windswept western coast of the characters' County Sligo home town.",
    howToVisit:
      "A free, unspoilt beach backed by dunes, good for a bracing walk; there are no facilities, so come prepared. It's about 30 minutes north of Sligo town.",
    nearbyTips: [
      "The flat-topped Benbulben mountain dominates the skyline.",
      "Yeats is buried at nearby Drumcliffe churchyard.",
    ],
  },

  // ===================== Sherlock =====================
  {
    slug: "north-gower-street",
    name: "North Gower Street",
    titleSlug: "sherlock",
    destinationSlug: "london",
    lat: 51.5258,
    lng: -0.134,
    kind: "street",
    address: "North Gower St, London NW1 2NJ, United Kingdom",
    sceneContext:
      "This Georgian terrace stands in for 221B Baker Street, with Speedy's café below doubling as the detective's downstairs neighbour.",
    howToVisit:
      "A real, busy residential street near Euston, free to visit any time; the café is open for breakfast and lunch, so be considerate of staff and residents. It's a short walk from Euston Square station.",
    nearbyTips: [
      "Speedy's café still trades on its screen fame.",
      "The real Baker Street and its Holmes museum are nearby.",
    ],
  },
  {
    slug: "st-bartholomews-hospital",
    name: "St Bartholomew's Hospital",
    titleSlug: "sherlock",
    destinationSlug: "london",
    lat: 51.5176,
    lng: -0.1003,
    kind: "building",
    address: "W Smithfield, London EC1A 7BE, United Kingdom",
    sceneContext:
      "The roof of this historic City hospital is where the detective staged his shocking fall at the end of the second series.",
    howToVisit:
      "Britain's oldest hospital still operating on its original site; its small museum and the great hall open on limited days, and the courtyard is freely accessible. It's beside Smithfield, a few minutes from St Paul's.",
    nearbyTips: [
      "St Paul's Cathedral is a short walk south.",
      "Smithfield's Victorian market halls are next door.",
    ],
  },

  // ===================== The Sound of Music =====================
  {
    slug: "mirabell-gardens",
    name: "Mirabell Gardens",
    titleSlug: "the-sound-of-music",
    destinationSlug: "salzburg",
    lat: 47.8055,
    lng: 13.0427,
    kind: "landmark",
    address: "Mirabellplatz, 5020 Salzburg, Austria",
    sceneContext:
      "The baroque parterre, the Pegasus fountain and the long stone steps are where the children dance through Do-Re-Mi.",
    howToVisit:
      "The gardens are a free public park open daily, busiest mid-morning with tour groups; the palace itself hosts concerts. They sit just across the river from the old town.",
    nearbyTips: [
      "The Do-Re-Mi steps lead up to a rose-covered pergola.",
      "Mozart's residence is a couple of minutes away.",
    ],
  },
  {
    slug: "leopoldskron-palace",
    name: "Schloss Leopoldskron",
    titleSlug: "the-sound-of-music",
    destinationSlug: "salzburg",
    lat: 47.7846,
    lng: 13.0331,
    kind: "building",
    address: "Leopoldskronstraße 56-58, 5020 Salzburg, Austria",
    sceneContext:
      "The lakeside terrace and water gate of this rococo palace are the von Trapp family's grand home in the film's exteriors.",
    howToVisit:
      "Now a hotel and cultural institute, the grounds are for guests, but the lake has a public path with views of the famous facade. It's a 30-minute walk or short bus ride from the centre.",
    nearbyTips: [
      "The Untersberg cable car climbs the mountain behind.",
      "Hellbrunn Palace and its trick fountains are close by.",
    ],
  },
  {
    slug: "nonnberg-abbey",
    name: "Nonnberg Abbey",
    titleSlug: "the-sound-of-music",
    destinationSlug: "salzburg",
    lat: 47.7956,
    lng: 13.0497,
    kind: "building",
    address: "Nonnberggasse 2, 5020 Salzburg, Austria",
    sceneContext:
      "This hilltop convent is the real abbey where Maria is a novice, its courtyard and gate used in the film.",
    howToVisit:
      "A working Benedictine convent, with the church open to quiet visitors for free; the nuns' areas are private, so keep noise down. It's a steep walk up steps from the old town behind the fortress.",
    nearbyTips: [
      "The Hohensalzburg fortress towers right above.",
      "The climb rewards you with rooftop views of the city.",
    ],
  },

  // ===================== Roman Holiday =====================
  {
    slug: "spanish-steps",
    name: "Spanish Steps",
    titleSlug: "roman-holiday",
    destinationSlug: "rome",
    lat: 41.906,
    lng: 12.4828,
    kind: "landmark",
    address: "Piazza di Spagna, 00187 Roma RM, Italy",
    sceneContext:
      "The grand stairway is where the runaway princess eats her gelato, in one of the film's most copied scenes.",
    howToVisit:
      "The steps are free and open around the clock, though sitting on them is now banned and fined, so admire from the square. They're in the heart of the shopping district at Piazza di Spagna metro.",
    nearbyTips: [
      "The Keats-Shelley House sits beside the steps.",
      "The Trevi Fountain is a ten-minute walk away.",
    ],
  },
  {
    slug: "mouth-of-truth",
    name: "Mouth of Truth",
    titleSlug: "roman-holiday",
    destinationSlug: "rome",
    lat: 41.8881,
    lng: 12.4814,
    kind: "landmark",
    address: "Piazza della Bocca della Verità 18, 00186 Roma RM, Italy",
    sceneContext:
      "The ancient marble face in the church portico is where the couple dare each other to test the legend that it bites the hands of liars.",
    howToVisit:
      "The Bocca della Verità sits in the portico of Santa Maria in Cosmedin, with a small donation and often a short queue for the photo. It's near the Circus Maximus and the Tiber.",
    nearbyTips: [
      "The round Temple of Hercules stands across the square.",
      "The Aventine hill and its keyhole view are a short climb.",
    ],
  },

  // ===================== The Talented Mr. Ripley =====================
  {
    slug: "positano",
    name: "Positano",
    titleSlug: "the-talented-mr-ripley",
    destinationSlug: "amalfi-coast",
    lat: 40.6281,
    lng: 14.4848,
    kind: "nature",
    address: "Positano, SA, Italy",
    sceneContext:
      "The pastel houses tumbling to the sea capture the glamorous Mediterranean idleness of the film's fictional Mongibello.",
    howToVisit:
      "The village is free to explore but very steep, a cascade of stairs down to the beach; arrive early or by ferry to dodge the worst crowds and parking. Boats connect it to Amalfi and Capri.",
    nearbyTips: [
      "The Path of the Gods clifftop trail starts above town.",
      "Ferries make Capri an easy day trip.",
    ],
  },
  {
    slug: "procida",
    name: "Procida",
    titleSlug: "the-talented-mr-ripley",
    destinationSlug: "bay-of-naples",
    lat: 40.7607,
    lng: 14.0118,
    kind: "landmark",
    address: "Procida, NA, Italy",
    sceneContext:
      "The pastel fishing harbour of Marina Corricella supplies the unspoilt, lived-in Italy of the story's seaside town.",
    howToVisit:
      "The smallest island in the bay, reached by hydrofoil from Naples in under an hour; it's walkable end to end, with no need for a car. The Corricella harbour is car-free and best on foot.",
    nearbyTips: [
      "Climb to the Terra Murata citadel for the view down over the harbour.",
      "Ischia, the larger spa island, is a short hop away.",
    ],
  },

  // ===================== Call Me by Your Name =====================
  {
    slug: "crema-piazza-duomo",
    name: "Piazza del Duomo, Crema",
    titleSlug: "call-me-by-your-name",
    destinationSlug: "lombardy",
    lat: 45.3625,
    lng: 9.6866,
    kind: "landmark",
    address: "Piazza del Duomo, 26013 Crema CR, Italy",
    sceneContext:
      "The cathedral square and arcaded streets of this Lombardy town are the languid backdrop to the lovers' summer wanderings.",
    howToVisit:
      "The piazza is a free, lively public square at the town's heart, ringed by cafés; Crema is an easy train or drive from Milan. Wander the lanes to find the film's shopfronts and fountains.",
    nearbyTips: [
      "The pasticcerie around the square are made for a slow afternoon.",
      "Milan is under an hour away by train.",
    ],
  },
  {
    slug: "cascate-del-serio",
    name: "Cascate del Serio",
    titleSlug: "call-me-by-your-name",
    destinationSlug: "lombardy",
    lat: 46.0289,
    lng: 10.0306,
    kind: "nature",
    address: "Cascate del Serio, 24020 Valbondione BG, Italy",
    sceneContext:
      "The river pools and cascades of this alpine valley north of town are where the pair swim and lounge away the heat.",
    howToVisit:
      "One of Europe's tallest waterfalls, released on a handful of scheduled days a year at Valbondione; the river and trails are walkable year-round. It's a couple of hours up into the mountains from Crema.",
    nearbyTips: [
      "Check the scheduled release dates if you want the full falls.",
      "The Orobie Alps offer plenty of valley hikes.",
    ],
  },

  // ===================== The Grand Budapest Hotel =====================
  {
    slug: "gorlitzer-warenhaus",
    name: "Görlitzer Warenhaus",
    titleSlug: "the-grand-budapest-hotel",
    destinationSlug: "gorlitz",
    lat: 51.1547,
    lng: 14.9892,
    kind: "building",
    address: "Demianiplatz 9, 02826 Görlitz, Germany",
    sceneContext:
      "The grand atrium and sweeping staircase of this Art Nouveau department store became the lobby of the film's pink hotel.",
    howToVisit:
      "A century-old department store used as a film set, opened to visitors at times and for occasional markets; check local listings before you go. It's in the centre of Görlitz's beautifully preserved old town.",
    nearbyTips: [
      "Wander Görliwood, one of Germany's best-preserved old towns.",
      "Cross the bridge to the Polish town of Zgorzelec.",
    ],
  },

  // ===================== Notting Hill =====================
  {
    slug: "the-blue-door",
    name: "The Blue Door",
    titleSlug: "notting-hill",
    destinationSlug: "london",
    lat: 51.5176,
    lng: -0.201,
    kind: "building",
    address: "280 Westbourne Park Rd, London W11 1EH, United Kingdom",
    sceneContext:
      "This west-London doorway was the entrance to William's flat, the famous blue door he and the film star step through.",
    howToVisit:
      "A private home on a residential street, so view it from the pavement and respect the residents; it's free to find and photograph. It's a short walk from Westbourne Park or Notting Hill Gate.",
    nearbyTips: [
      "The travel bookshop that inspired the film is around the corner.",
      "Portobello Road market is a couple of minutes away.",
    ],
  },
  {
    slug: "portobello-road-market",
    name: "Portobello Road Market",
    titleSlug: "notting-hill",
    destinationSlug: "london",
    lat: 51.517,
    lng: -0.2058,
    kind: "street",
    address: "Portobello Rd, London W11, United Kingdom",
    sceneContext:
      "The bustling antiques-and-fruit market is where William walks through the seasons in the film's signature single take.",
    howToVisit:
      "A free street market, biggest on Saturdays for antiques and liveliest in the morning; come early to beat the crush. It runs through the heart of Notting Hill.",
    nearbyTips: [
      "The pastel houses of Notting Hill make for a colourful stroll.",
      "The bookshop and blue door are both nearby.",
    ],
  },

  // ===================== Pride & Prejudice =====================
  {
    slug: "chatsworth-house",
    name: "Chatsworth House",
    titleSlug: "pride-and-prejudice",
    destinationSlug: "peak-district",
    lat: 53.2275,
    lng: -1.6106,
    kind: "building",
    address: "Chatsworth, Bakewell DE45 1PP, United Kingdom",
    sceneContext:
      "This palatial Derbyshire estate is Pemberley, the grand home whose splendour helps turn Elizabeth's head.",
    howToVisit:
      "A stately home with ticketed entry to the house, gardens and parkland, open most of the year; the grounds alone make a fine visit. It's in the Peak District near Bakewell.",
    nearbyTips: [
      "The sculpture gallery features in the film's Pemberley scenes.",
      "The market town of Bakewell and its tart are close by.",
    ],
  },
  {
    slug: "stanage-edge",
    name: "Stanage Edge",
    titleSlug: "pride-and-prejudice",
    destinationSlug: "peak-district",
    lat: 53.347,
    lng: -1.636,
    kind: "nature",
    address: "Stanage Edge, Hathersage, Hope Valley S32, United Kingdom",
    sceneContext:
      "The long gritstone cliff is where Elizabeth stands windswept on a rocky outcrop, lost in thought, in one of the film's signature shots.",
    howToVisit:
      "A free, open moorland edge popular with walkers and climbers, reached by a short uphill walk from roadside parking near Hathersage; come prepared for wind and weather. The ridge gives huge views over the Hope Valley.",
    nearbyTips: [
      "The village of Hathersage below has cafés and a pool.",
      "Climbers flock to the edge at weekends.",
    ],
  },

  // ===================== No Time to Die =====================
  {
    slug: "sassi-di-matera",
    name: "Sassi di Matera",
    titleSlug: "no-time-to-die",
    destinationSlug: "matera",
    lat: 40.6664,
    lng: 16.6105,
    kind: "landmark",
    address: "Sassi di Matera, 75100 Matera MT, Italy",
    sceneContext:
      "The honey-coloured cave districts and ravine bridges stage Bond's explosive opening car chase through Matera.",
    howToVisit:
      "The Sassi are a free, UNESCO-listed warren of lanes and cave dwellings, best explored slowly on foot in good shoes; some rock churches and cave houses charge small entries. Matera is a few hours from Bari or Naples.",
    nearbyTips: [
      "Visit a furnished cave dwelling to see how people once lived here.",
      "The viewpoint across the ravine is best at sunset.",
    ],
  },
  {
    slug: "atlantic-ocean-road",
    name: "Atlantic Ocean Road",
    titleSlug: "no-time-to-die",
    destinationSlug: "atlantic-road",
    lat: 63.0128,
    lng: 7.3509,
    kind: "landmark",
    address: "Atlanterhavsvegen, 6530 Averøy, Norway",
    sceneContext:
      "The low bridges leaping between islets along the storm-lashed coast feature in the film's high-speed Norwegian chase.",
    howToVisit:
      "A free public road you simply drive, with laybys and viewing platforms along its few spectacular kilometres; it's wildest in autumn storms. It links small islands near Kristiansund and Molde.",
    nearbyTips: [
      "Stop at the Storseisundet bridge viewpoint for the classic shot.",
      "Fishing platforms line the route for a windswept walk.",
    ],
  },

  // ===================== Indiana Jones and the Last Crusade =====================
  {
    slug: "al-khazneh-petra",
    name: "Al-Khazneh (The Treasury)",
    titleSlug: "indiana-jones-last-crusade",
    destinationSlug: "petra",
    lat: 30.3285,
    lng: 35.4517,
    kind: "landmark",
    address: "Al-Khazneh, Petra, Wadi Musa, Jordan",
    sceneContext:
      "The towering rock-cut Treasury facade is the temple that guards the Holy Grail at the climax of the film.",
    howToVisit:
      "Petra is a vast ticketed archaeological park; the Treasury appears after a walk of about 20 minutes through the narrow Siq canyon from the entrance. Wear good shoes, bring water, and allow a full day.",
    nearbyTips: [
      "Climb to the high viewpoint above the Treasury for the overhead angle.",
      "The town of Wadi Musa has all the hotels and food.",
    ],
  },

  // ===================== The Beach =====================
  {
    slug: "maya-bay",
    name: "Maya Bay",
    titleSlug: "the-beach",
    destinationSlug: "krabi",
    lat: 7.6776,
    lng: 98.766,
    kind: "nature",
    address: "Maya Bay, Ko Phi Phi Leh, Krabi, Thailand",
    sceneContext:
      "The cliff-ringed cove of brilliant sand and turquoise water is the secret island paradise the travellers seek.",
    howToVisit:
      "Maya Bay on uninhabited Ko Phi Phi Leh is reached by boat tour from Krabi, Phuket or Phi Phi; it now has capped numbers and seasonal closures to protect the reef, so book a regulated trip. Swimming is restricted, and you enter from a back-bay pier.",
    nearbyTips: [
      "The wider Phi Phi Islands offer snorkelling and limestone lagoons.",
      "Go on an early tour to see the bay at its calmest.",
    ],
  },

  // ===================== Amélie =====================
  {
    slug: "cafe-des-deux-moulins",
    name: "Café des Deux Moulins",
    titleSlug: "amelie",
    destinationSlug: "paris",
    lat: 48.8845,
    lng: 2.334,
    kind: "venue",
    address: "15 Rue Lepic, 75018 Paris, France",
    sceneContext:
      "The Montmartre brasserie where Amélie waits tables is a real, still-trading café, its long zinc bar and mirrors much as they appear on screen.",
    howToVisit:
      "An ordinary working café open daily for coffee and a bite, so come for a drink and a look rather than a tour; it gets busy with fans at weekends. It's a short uphill walk from Blanche metro.",
    nearbyTips: [
      "The windmill of the Moulin Rouge is just down Rue Lepic.",
      "Climb on up into Montmartre for the Sacré-Cœur.",
    ],
  },
  {
    slug: "canal-saint-martin",
    name: "Canal Saint-Martin",
    titleSlug: "amelie",
    destinationSlug: "paris",
    lat: 48.8709,
    lng: 2.3658,
    kind: "landmark",
    address: "Quai de Valmy, 75010 Paris, France",
    sceneContext:
      "The tree-lined canal with its iron footbridges is where Amélie skips stones across the water, in one of the film's quiet signature shots.",
    howToVisit:
      "A free, leafy stretch of waterway lined with cafés and locks, lovely for a slow walk any time; sunny evenings draw picnicking crowds to the banks. It's a few minutes from République metro.",
    nearbyTips: [
      "Watch a barge work its way through the locks.",
      "The canalside is full of bistros for lunch.",
    ],
  },

  // ===================== La La Land =====================
  {
    slug: "griffith-observatory",
    name: "Griffith Observatory",
    titleSlug: "la-la-land",
    destinationSlug: "los-angeles",
    lat: 34.1184,
    lng: -118.3004,
    kind: "landmark",
    address: "2800 E Observatory Rd, Los Angeles, CA 90027, United States",
    sceneContext:
      "The Art Deco observatory and its planetarium are where Mia and Sebastian's romance takes flight, literally, in a swirling night-time dance.",
    howToVisit:
      "Free to enter and a hilltop favourite for city and Hollywood-sign views; parking is tight, so go early or rideshare, and check the planetarium-show times. The terraces are best at sunset.",
    nearbyTips: [
      "The lawn gives a clear line to the Hollywood sign.",
      "Trails from here climb higher into Griffith Park.",
    ],
  },
  {
    slug: "angels-flight",
    name: "Angels Flight",
    titleSlug: "la-la-land",
    destinationSlug: "los-angeles",
    lat: 34.0512,
    lng: -118.2497,
    kind: "landmark",
    address: "350 S Grand Ave, Los Angeles, CA 90071, United States",
    sceneContext:
      "The tiny orange funicular climbing Bunker Hill features in the couple's downtown wanderings.",
    howToVisit:
      "A short, historic railway with a token fare, running through the day in Downtown LA; it's a one-minute ride, more for the charm than the distance. Grand Central Market sits at the bottom.",
    nearbyTips: [
      "Grab tacos in Grand Central Market below.",
      "The Broad museum and Walt Disney Concert Hall are a short walk.",
    ],
  },

  // ===================== Vertigo =====================
  {
    slug: "fort-point-golden-gate",
    name: "Fort Point",
    titleSlug: "vertigo",
    destinationSlug: "san-francisco",
    lat: 37.8106,
    lng: -122.4769,
    kind: "landmark",
    address: "Fort Point, Marine Dr, San Francisco, CA 94129, United States",
    sceneContext:
      "The brick fort tucked directly beneath the Golden Gate Bridge is where Madeleine plunges into the bay and Scottie pulls her out.",
    howToVisit:
      "A free national historic site right under the bridge's southern end, with the great span overhead; it's wind-blasted, so bring a layer, and check the opening days. Parking is limited just outside.",
    nearbyTips: [
      "The coastal path leads up to bridge viewpoints.",
      "Crissy Field's beach is a short walk east.",
    ],
  },
  {
    slug: "mission-san-juan-bautista",
    name: "Mission San Juan Bautista",
    titleSlug: "vertigo",
    destinationSlug: "san-francisco",
    lat: 36.8456,
    lng: -121.538,
    kind: "building",
    address: "406 2nd St, San Juan Bautista, CA 95045, United States",
    sceneContext:
      "This Spanish mission staged the film's vertiginous bell-tower climax; the tower itself was a special effect, but the mission and plaza are real.",
    howToVisit:
      "A working mission and state park with a small admission, about 90 minutes south of the city; the quiet plaza beside it is free. It makes an easy stop off the route to Monterey.",
    nearbyTips: [
      "The old plaza and stables are part of the state park.",
      "Pair it with a drive down to Monterey or Carmel.",
    ],
  },

  // ===================== Crazy Rich Asians =====================
  {
    slug: "marina-bay-sands",
    name: "Marina Bay Sands",
    titleSlug: "crazy-rich-asians",
    destinationSlug: "singapore",
    lat: 1.2834,
    lng: 103.8607,
    kind: "hotel",
    address: "10 Bayfront Ave, Singapore 018956",
    sceneContext:
      "The hotel's vast rooftop and its cantilevered infinity pool crown the film's world of wealth, with the city spread out below.",
    howToVisit:
      "The SkyPark observation deck is ticketed and open to all; the famous infinity pool is for hotel guests only, so book a room for that shot. The bay promenade below is free.",
    nearbyTips: [
      "Catch the free Spectra light-and-water show on the bay.",
      "The ArtScience Museum's lotus shape sits alongside.",
    ],
  },
  {
    slug: "gardens-by-the-bay",
    name: "Gardens by the Bay",
    titleSlug: "crazy-rich-asians",
    destinationSlug: "singapore",
    lat: 1.2816,
    lng: 103.8636,
    kind: "nature",
    address: "18 Marina Gardens Dr, Singapore 018953",
    sceneContext:
      "The glowing Supertree Grove, with its towering steel canopies, is pure future-city spectacle straight out of the film.",
    howToVisit:
      "The outdoor gardens and the nightly Supertree light show are free; the cooled conservatory domes and the treetop skyway are ticketed. Evenings are cooler and most magical.",
    nearbyTips: [
      "Time your visit for the after-dark Garden Rhapsody show.",
      "The Cloud Forest dome holds an indoor waterfall.",
    ],
  },

  // ===================== Lost in Translation =====================
  {
    slug: "park-hyatt-tokyo",
    name: "Park Hyatt Tokyo",
    titleSlug: "lost-in-translation",
    destinationSlug: "tokyo",
    lat: 35.6855,
    lng: 139.6907,
    kind: "hotel",
    address: "3-7-1-2 Nishishinjuku, Shinjuku City, Tokyo 163-1055, Japan",
    sceneContext:
      "The hotel's hushed top-floor New York Bar, with its skyline wall of glass, is where the two leads meet over whisky and insomnia.",
    howToVisit:
      "A working luxury hotel; the bar welcomes non-guests for a drink (with an evening cover charge and a dress code), so go up for the view and the mood. It towers over west Shinjuku.",
    nearbyTips: [
      "Live jazz plays in the bar most evenings.",
      "The Metropolitan Government observation decks nearby are free.",
    ],
  },
  {
    slug: "shibuya-crossing",
    name: "Shibuya Crossing",
    titleSlug: "lost-in-translation",
    destinationSlug: "tokyo",
    lat: 35.6595,
    lng: 139.7004,
    kind: "street",
    address: "Shibuya Scramble Crossing, Shibuya City, Tokyo, Japan",
    sceneContext:
      "The vast scramble crossing, a sea of people under giant screens, captures the film's beautiful disorientation.",
    howToVisit:
      "A free, public crossing you simply walk; for the overhead view, head up to the Shibuya Sky deck or a café window above. It is busiest and most cinematic after dark.",
    nearbyTips: [
      "The Hachiko dog statue waits on the station side.",
      "Shibuya Sky's rooftop gives the aerial angle.",
    ],
  },

  // ===================== Gladiator =====================
  {
    slug: "val-d-orcia",
    name: "Val d'Orcia",
    titleSlug: "gladiator",
    destinationSlug: "tuscany",
    lat: 43.0613,
    lng: 11.623,
    kind: "nature",
    address: "Val d'Orcia, Province of Siena, Italy",
    sceneContext:
      "The rolling wheat fields and lone cypresses are Maximus's sunlit memory of home, the Elysium he longs to return to.",
    howToVisit:
      "A UNESCO landscape of public roads and hill towns south of Siena, free to drive and photograph; spring and early summer are greenest. Base in Pienza or Montalcino and wander the back lanes.",
    nearbyTips: [
      "The chapel of Vitaleta is the area's most photographed view.",
      "Montalcino's vineyards pour the famous Brunello.",
    ],
  },
  {
    slug: "ait-benhaddou",
    name: "Aït Benhaddou",
    titleSlug: "gladiator",
    destinationSlug: "ouarzazate",
    lat: 31.047,
    lng: -7.1318,
    kind: "landmark",
    address: "Aït Benhaddou, Ouarzazate Province, Morocco",
    sceneContext:
      "The fortified mud-brick ksar rising from the desert is the slave town of Zucchabar, where Maximus first fights.",
    howToVisit:
      "A UNESCO village reached by a short walk and a stream crossing from the roadside; local guides offer to show the kasbah for a tip. It's a couple of hours over the Atlas from Marrakech.",
    nearbyTips: [
      "Climb to the granary at the top for desert views.",
      "The film studios of Ouarzazate are nearby.",
    ],
  },

  // ===================== Star Wars =====================
  {
    slug: "lars-homestead-chott-el-djerid",
    name: "Lars Homestead (Chott el Djerid)",
    titleSlug: "star-wars",
    destinationSlug: "southern-tunisia",
    lat: 33.8389,
    lng: 8.0567,
    kind: "building",
    address: "Chott el Djerid, near Nefta, Tunisia",
    sceneContext:
      "The white domed igloo on the salt flats is Luke Skywalker's boyhood home, the Lars homestead exterior.",
    howToVisit:
      "The preserved set sits in the open desert near Nefta and is free to reach by 4x4 or a guided trip from Tozeur; there are no facilities, so bring water and a hat. Go early to beat the heat.",
    nearbyTips: [
      "The oasis town of Tozeur is the regional base.",
      "Other Star Wars sets dot the dunes around Nefta and Matmata.",
    ],
  },
  {
    slug: "skellig-michael",
    name: "Skellig Michael",
    titleSlug: "star-wars",
    destinationSlug: "kerry",
    lat: 51.7708,
    lng: -10.5386,
    kind: "nature",
    address: "Skellig Michael, Co. Kerry, Ireland",
    sceneContext:
      "The jagged monastic island rising from the Atlantic is the remote refuge where Rey finds Luke in the sequel trilogy.",
    howToVisit:
      "Reached only by a weather-dependent boat from Portmagee, with limited summer landing permits that sell out far ahead; the climb up ancient steps is steep and unguarded. Book early and hope for calm seas.",
    nearbyTips: [
      "Sixth-century monks' beehive huts crown the summit.",
      "Puffins nest on the island in early summer.",
    ],
  },

  // ===================== Casino Royale =====================
  {
    slug: "villa-del-balbianello",
    name: "Villa del Balbianello",
    titleSlug: "casino-royale",
    destinationSlug: "lake-como",
    lat: 45.9665,
    lng: 9.1958,
    kind: "building",
    address: "Via Comoedia 5, 22016 Lenno, Lake Como, Italy",
    sceneContext:
      "The terraced gardens of this lakeside villa are where a wounded Bond recovers, and where another saga staged a secret wedding.",
    howToVisit:
      "A property of the FAI (Italy's national trust) open on set days with a ticket; reach it by a short boat from Lenno or a lakeside walk. Garden and villa tours are sold separately.",
    nearbyTips: [
      "Lenno and Bellagio are easy ferry hops.",
      "The gardens alone are worth the visit.",
    ],
  },
  {
    slug: "venice-grand-canal",
    name: "Grand Canal",
    titleSlug: "casino-royale",
    destinationSlug: "venice",
    lat: 45.438,
    lng: 12.3358,
    kind: "landmark",
    address: "Grand Canal, Venice, Italy",
    sceneContext:
      "The film's climax plays out as a grand palazzo collapses into the Grand Canal, the city itself the final set.",
    howToVisit:
      "The canal is free to ride by vaporetto water-bus or, pricier, by gondola; the Rialto and Accademia bridges give the classic views. It is busiest at midday, quietest early.",
    nearbyTips: [
      "Ride the number 1 vaporetto the length of the canal.",
      "St Mark's Square is a short walk from the Rialto.",
    ],
  },

  // ===================== A Room with a View =====================
  {
    slug: "piazza-della-signoria",
    name: "Piazza della Signoria",
    titleSlug: "a-room-with-a-view",
    destinationSlug: "florence",
    lat: 43.7696,
    lng: 11.2558,
    kind: "landmark",
    address: "Piazza della Signoria, 50122 Firenze, Italy",
    sceneContext:
      "Florence's great civic square, with its palazzo and statues, is where a shocking moment throws the heroine into the arms of fate.",
    howToVisit:
      "A free, open square at the city's heart, ringed by the Palazzo Vecchio and an open-air sculpture loggia; it's busy all day. The Uffizi gallery opens off one corner.",
    nearbyTips: [
      "A copy of Michelangelo's David stands before the palazzo.",
      "The Uffizi's masterpieces are next door.",
    ],
  },
  {
    slug: "basilica-di-santa-croce",
    name: "Basilica di Santa Croce",
    titleSlug: "a-room-with-a-view",
    destinationSlug: "florence",
    lat: 43.7686,
    lng: 11.2622,
    kind: "landmark",
    address: "Piazza di Santa Croce, 50122 Firenze, Italy",
    sceneContext:
      "The great Franciscan basilica, burial place of Michelangelo and Galileo, features as the heroine explores the city.",
    howToVisit:
      "A working church and monument with paid entry; modest dress is required, and the square outside is free and lively. It's a short walk from the Signoria.",
    nearbyTips: [
      "The tombs of Michelangelo and Galileo lie inside.",
      "The leather school behind the church is a local tradition.",
    ],
  },

  // ===================== Dunkirk =====================
  {
    slug: "dunkirk-beach",
    name: "Dunkirk Beach (Malo-les-Bains)",
    titleSlug: "dunkirk",
    destinationSlug: "dunkirk",
    lat: 51.0383,
    lng: 2.3775,
    kind: "nature",
    address: "Plage de Malo-les-Bains, 59240 Dunkerque, France",
    sceneContext:
      "The wide, flat beach and the long mole are where the film's stranded soldiers wait under fire for rescue, on the very sands of the 1940 evacuation.",
    howToVisit:
      "A free public beach and promenade at Malo-les-Bains, open year-round and bracing in any season; the Dunkirk 1940 museum nearby tells the history. It's a short walk from the town centre.",
    nearbyTips: [
      "The Dunkirk 1940 Operation Dynamo museum is close.",
      "The promenade has cafés facing the sea.",
    ],
  },

  // ===================== Braveheart =====================
  {
    slug: "glen-nevis",
    name: "Glen Nevis",
    titleSlug: "braveheart",
    destinationSlug: "scottish-highlands",
    lat: 56.7969,
    lng: -5.0036,
    kind: "nature",
    address: "Glen Nevis, Fort William PH33 6PF, United Kingdom",
    sceneContext:
      "The green glen beneath Ben Nevis is Wallace's Highland home, its river and slopes filling the film's quieter moments.",
    howToVisit:
      "A free, scenic glen reached by road from Fort William, with car parks, walks and a visitor centre; it's the gateway path to Britain's highest peak. Waterfalls and gorges line the upper glen.",
    nearbyTips: [
      "The Steall Falls walk starts at the road's end.",
      "Fort William is the base for the West Highland Line.",
    ],
  },
  {
    slug: "trim-castle",
    name: "Trim Castle",
    titleSlug: "braveheart",
    destinationSlug: "county-meath",
    lat: 53.5547,
    lng: -6.7894,
    kind: "building",
    address: "Castle St, Trim, Co. Meath, Ireland",
    sceneContext:
      "Ireland's largest Norman castle stood in for the medieval cities of the film, its great keep dressed as York and London.",
    howToVisit:
      "An Office of Public Works site with a small fee for the keep tour and free access to the grounds; the tours are guided and seasonal. Trim is about an hour from Dublin.",
    nearbyTips: [
      "The riverside walk frames the castle nicely.",
      "The ruined Yellow Steeple stands across the river.",
    ],
  },

  // ===================== Jurassic Park =====================
  {
    slug: "kualoa-ranch",
    name: "Kualoa Ranch",
    titleSlug: "jurassic-park",
    destinationSlug: "oahu",
    lat: 21.5236,
    lng: -157.8378,
    kind: "nature",
    address: "49-560 Kamehameha Hwy, Kaneohe, HI 96744, United States",
    sceneContext:
      "The towering green valley is where the film's dinosaurs first roam, a backdrop reused by countless productions since.",
    howToVisit:
      "A private ranch open daily; the famous valley is seen on ticketed movie-site tours by bus, ATV or horseback, so book ahead. It's about an hour's drive from Waikiki.",
    nearbyTips: [
      "Tours point out spots from the many films shot here.",
      "The windward coast drive is scenic in its own right.",
    ],
  },

  // ===================== Slumdog Millionaire =====================
  {
    slug: "chhatrapati-shivaji-terminus",
    name: "Chhatrapati Shivaji Maharaj Terminus",
    titleSlug: "slumdog-millionaire",
    destinationSlug: "mumbai",
    lat: 18.9398,
    lng: 72.8355,
    kind: "building",
    address: "Chhatrapati Shivaji Maharaj Terminus, Fort, Mumbai 400001, India",
    sceneContext:
      "The vast Victorian-Gothic railway terminus is the stage for the film's exuberant closing dance number.",
    howToVisit:
      "A UNESCO-listed working station you can admire from outside any time; heritage tours of the interior run on limited days. It's in the busy Fort district.",
    nearbyTips: [
      "The Fort area is full of grand colonial architecture.",
      "Crawford Market nearby is a lively stop.",
    ],
  },
  {
    slug: "taj-mahal-palace-hotel",
    name: "The Taj Mahal Palace",
    titleSlug: "slumdog-millionaire",
    destinationSlug: "mumbai",
    lat: 18.922,
    lng: 72.8332,
    kind: "hotel",
    address: "Apollo Bunder, Colaba, Mumbai 400001, India",
    sceneContext:
      "The seafront grande-dame hotel and the Gateway of India beside it frame the film's vision of a glittering, unreachable Mumbai.",
    howToVisit:
      "A landmark luxury hotel; non-guests can book afternoon tea or a drink to see inside, and the Gateway arch on the waterfront is free. Colaba's cafés are a short stroll.",
    nearbyTips: [
      "The Gateway of India stands directly opposite.",
      "Boats leave the quay for Elephanta Island.",
    ],
  },

  // ===================== Lawrence of Arabia =====================
  {
    slug: "wadi-rum",
    name: "Wadi Rum",
    titleSlug: "lawrence-of-arabia",
    destinationSlug: "wadi-rum",
    lat: 29.5765,
    lng: 35.4203,
    kind: "nature",
    address: "Wadi Rum Protected Area, Jordan",
    sceneContext:
      "The immense red desert and its sandstone massifs are the backdrop to the film's sweeping ride across Arabia.",
    howToVisit:
      "A protected desert entered by ticket, then explored on Bedouin-run 4x4 trips or overnight camps; days are scorching and nights cold, so plan with a local operator. Aqaba is about an hour away.",
    nearbyTips: [
      "Overnight in a desert camp for the star-filled sky.",
      "Petra is a couple of hours north.",
    ],
  },
  {
    slug: "plaza-de-espana-seville",
    name: "Plaza de España",
    titleSlug: "lawrence-of-arabia",
    destinationSlug: "seville",
    lat: 37.3772,
    lng: -5.9869,
    kind: "landmark",
    address: "Plaza de España, 41013 Sevilla, Spain",
    sceneContext:
      "Seville's grand semicircular plaza stood in for British military headquarters in Cairo, its arcades and bridges instantly recognisable.",
    howToVisit:
      "A free, open public square in María Luisa Park, vast and walkable any time; row a little boat in its moat for a few euros. Mornings are quietest for photos.",
    nearbyTips: [
      "The tiled alcoves represent Spain's provinces.",
      "The park around it is shady and full of fountains.",
    ],
  },

  // ===================== The Godfather =====================
  {
    slug: "bar-vitelli-savoca",
    name: "Bar Vitelli",
    titleSlug: "the-godfather",
    destinationSlug: "savoca",
    lat: 37.9586,
    lng: 15.3344,
    kind: "venue",
    address: "Piazza Fossia 7, 98038 Savoca, Sicily, Italy",
    sceneContext:
      "This village bar is where Michael Corleone asks a wary father for permission to court his daughter Apollonia.",
    howToVisit:
      "A real, still-open bar and tiny Godfather museum in the hill village of Savoca; stop for a granita and a look at the photos. The village is a winding drive up from the coast near Taormina.",
    nearbyTips: [
      "The bar keeps film stills and props on its walls.",
      "The village's clifftop church is a short climb.",
    ],
  },
  {
    slug: "church-san-nicolo-savoca",
    name: "Chiesa di San Nicolò",
    titleSlug: "the-godfather",
    destinationSlug: "savoca",
    lat: 37.9591,
    lng: 15.3349,
    kind: "building",
    address: "Chiesa di San Nicolò, 98038 Savoca, Sicily, Italy",
    sceneContext:
      "The little hilltop church is where Michael and Apollonia marry in the film's Sicilian interlude.",
    howToVisit:
      "A small church on the village's high point, free to visit when open, with sweeping views over the valley; the walk up through Savoca is the appeal. Combine it with the bar below.",
    nearbyTips: [
      "The terrace gives long views to the Ionian Sea.",
      "Forza d'Agrò, another Godfather village, is nearby.",
    ],
  },

  // ===================== Rocky =====================
  {
    slug: "rocky-steps",
    name: "The Rocky Steps",
    titleSlug: "rocky",
    destinationSlug: "philadelphia",
    lat: 39.9656,
    lng: -75.181,
    kind: "landmark",
    address: "Philadelphia Museum of Art, 2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130, United States",
    sceneContext:
      "The broad museum steps are where Rocky's training run ends in triumph, arms aloft over the city.",
    howToVisit:
      "Free and open at all hours; run up them yourself and find the bronze Rocky statue at the base to the right. The museum itself is a ticketed visit.",
    nearbyTips: [
      "Pose with the Rocky statue beside the steps.",
      "The view back down the parkway frames City Hall.",
    ],
  },
  {
    slug: "italian-market-philadelphia",
    name: "9th Street Italian Market",
    titleSlug: "rocky",
    destinationSlug: "philadelphia",
    lat: 39.9343,
    lng: -75.1588,
    kind: "street",
    address: "S 9th St, Philadelphia, PA 19147, United States",
    sceneContext:
      "The old open-air market, with its awnings and stalls, features in Rocky's street-level training montage.",
    howToVisit:
      "A free, working market along 9th Street, busiest in the morning, with delis, cheese shops and produce; it's closed on Mondays. It sits in the historic Italian neighbourhood of South Philly.",
    nearbyTips: [
      "Grab a cheesesteak from a corner counter.",
      "The cheese and spice shops are local institutions.",
    ],
  },

  // ===================== Lupin =====================
  {
    slug: "louvre-pyramid",
    name: "Louvre Pyramid",
    titleSlug: "lupin",
    destinationSlug: "paris",
    lat: 48.8611,
    lng: 2.3358,
    kind: "landmark",
    address: "Rue de Rivoli, 75001 Paris, France",
    sceneContext:
      "The glass pyramid and the galleries beneath are where Assane Diop pulls off his audacious opening heist.",
    howToVisit:
      "The courtyard and pyramid are free to walk around any time; entering the museum needs a timed ticket booked ahead, and it's closed on Tuesdays. Go early or late to dodge the crush.",
    nearbyTips: [
      "The Tuileries gardens stretch west from the pyramid.",
      "The glass pyramid is floodlit beautifully at night.",
    ],
  },
  {
    slug: "falaise-etretat",
    name: "Cliffs of Étretat",
    titleSlug: "lupin",
    destinationSlug: "etretat",
    lat: 49.707,
    lng: 0.2036,
    kind: "nature",
    address: "Falaises d'Étretat, 76790 Étretat, France",
    sceneContext:
      "The white chalk cliffs and their natural arch are where the series sweeps to the Normandy coast for a tense reckoning.",
    howToVisit:
      "Free clifftop paths climb from either end of the beach for the famous arch-and-needle views; they are steep and exposed, so wear good shoes. The little resort below has cafés and parking.",
    nearbyTips: [
      "Climb the path for the view of the Aiguille needle.",
      "The painter Monet worked these same cliffs.",
    ],
  },

  // ===================== The Durrells =====================
  {
    slug: "corfu-old-town",
    name: "Corfu Old Town",
    titleSlug: "the-durrells",
    destinationSlug: "corfu",
    lat: 39.6243,
    lng: 19.9217,
    kind: "landmark",
    address: "Corfu Old Town, 49100, Greece",
    sceneContext:
      "The Venetian fortresses, shuttered lanes and arcaded streets of the old town feature throughout the family's island life.",
    howToVisit:
      "A free, UNESCO-listed old town to wander on foot, with two old forts to climb for a small fee; it's compact and walkable. The port and airport are close.",
    nearbyTips: [
      "Climb the Old Fortress for harbour views.",
      "The Liston arcade is the spot for a frappé.",
    ],
  },
  {
    slug: "kalami-bay",
    name: "Kalami Bay",
    titleSlug: "the-durrells",
    destinationSlug: "corfu",
    lat: 39.7297,
    lng: 19.93,
    kind: "nature",
    address: "Kalami, Corfu, Greece",
    sceneContext:
      "The clear north-east bay, overlooked by the White House the Durrell family knew, is the show's sun-soaked seaside.",
    howToVisit:
      "A free pebble bay with tavernas and swimming off the rocks, sheltered and calm; the coast road there is winding, so allow time. Boats can be hired to explore the coves.",
    nearbyTips: [
      "The White House taverna sits right on the water.",
      "Albania's coast looms across the strait.",
    ],
  },

  // ===================== Ted Lasso =====================
  {
    slug: "richmond-green",
    name: "Richmond Green",
    titleSlug: "ted-lasso",
    destinationSlug: "london",
    lat: 51.4613,
    lng: -0.3037,
    kind: "venue",
    address: "The Green, Richmond TW9 1LX, United Kingdom",
    sceneContext:
      "The leafy green and the pub beside it stand in for the team's local, the heart of the show's Richmond.",
    howToVisit:
      "A free, open common ringed by pubs and Georgian houses; the pub used for exteriors is a real, working one, so be considerate of staff. Richmond is a quick train or Tube from central London.",
    nearbyTips: [
      "The riverside is a two-minute walk away.",
      "Richmond Park's deer herds are up the hill.",
    ],
  },
  {
    slug: "richmond-bridge",
    name: "Richmond Bridge",
    titleSlug: "ted-lasso",
    destinationSlug: "london",
    lat: 51.4561,
    lng: -0.3082,
    kind: "landmark",
    address: "Richmond Bridge, Richmond TW9 1EW, United Kingdom",
    sceneContext:
      "The handsome Georgian stone bridge over the Thames appears in the show's strolls along the river.",
    howToVisit:
      "A free, historic bridge you can cross on foot, the oldest surviving Thames bridge in London; the towpaths on either side are pleasant walks. Riverside pubs cluster nearby.",
    nearbyTips: [
      "Hire a rowing boat from the embankment in summer.",
      "Walk the towpath toward Petersham meadows.",
    ],
  },

  // ===================== Sex and the City =====================
  {
    slug: "carrie-stoop-perry-street",
    name: "Carrie's Stoop (Perry Street)",
    titleSlug: "sex-and-the-city",
    destinationSlug: "new-york",
    lat: 40.7359,
    lng: -74.0055,
    kind: "building",
    address: "66 Perry St, New York, NY 10014, United States",
    sceneContext:
      "This Greenwich Village brownstone stoop is Carrie Bradshaw's front step, the show's most photographed address.",
    howToVisit:
      "A private home on a quiet street, so admire and photograph from the public sidewalk and keep noise down; a chain across the steps marks where to stop. It's a short walk from Christopher Street.",
    nearbyTips: [
      "The West Village's cafés and shops are all around.",
      "Bleecker Street's boutiques are a block away.",
    ],
  },
  {
    slug: "magnolia-bakery",
    name: "Magnolia Bakery",
    titleSlug: "sex-and-the-city",
    destinationSlug: "new-york",
    lat: 40.7359,
    lng: -74.0048,
    kind: "venue",
    address: "401 Bleecker St, New York, NY 10014, United States",
    sceneContext:
      "The little corner bakery whose cupcakes the friends share helped launch a global craze after the show.",
    howToVisit:
      "A real, busy bakery open daily; queue for a cupcake to go and eat it in the leafy streets nearby. It's a couple of blocks from Carrie's stoop.",
    nearbyTips: [
      "Take your cupcake to nearby Bleecker Playground.",
      "Combine it with a West Village wander.",
    ],
  },

  // ===================== La Dolce Vita =====================
  {
    slug: "trevi-fountain",
    name: "Trevi Fountain",
    titleSlug: "la-dolce-vita",
    destinationSlug: "rome",
    lat: 41.9009,
    lng: 12.4833,
    kind: "landmark",
    address: "Piazza di Trevi, 00187 Roma RM, Italy",
    sceneContext:
      "Anita Ekberg wades into the great baroque fountain at night in cinema's most famous midnight bathe.",
    howToVisit:
      "The fountain is free and open around the clock; paddling is firmly banned and fined now, so toss a coin from the edge instead. It's mobbed by day, far calmer at dawn.",
    nearbyTips: [
      "Come at first light for the fountain almost to yourself.",
      "The Spanish Steps are a ten-minute walk away.",
    ],
  },
  {
    slug: "via-veneto",
    name: "Via Veneto",
    titleSlug: "la-dolce-vita",
    destinationSlug: "rome",
    lat: 41.9069,
    lng: 12.4889,
    kind: "street",
    address: "Via Vittorio Veneto, 00187 Roma RM, Italy",
    sceneContext:
      "The sweeping, café-lined boulevard was the heart of the film's nightlife and gave rise to the word paparazzi.",
    howToVisit:
      "A free public street to stroll, still grand if quieter than in its heyday; settle into one of the historic café terraces for the full dolce-vita pose. It climbs from Piazza Barberini.",
    nearbyTips: [
      "The Capuchin Crypt nearby is a curious detour.",
      "The Villa Borghese gardens sit at the top of the hill.",
    ],
  },

  // ===================== Midnight in Paris =====================
  {
    slug: "saint-etienne-du-mont",
    name: "Église Saint-Étienne-du-Mont",
    titleSlug: "midnight-in-paris",
    destinationSlug: "paris",
    lat: 48.8465,
    lng: 2.3479,
    kind: "landmark",
    address: "Place Sainte-Geneviève, 75005 Paris, France",
    sceneContext:
      "The stone steps beside this church are where, on the stroke of midnight, a vintage car spirits the hero back to the 1920s.",
    howToVisit:
      "A working church free to enter when open, with the famous steps on its flank always accessible; the Latin Quarter around it is made for wandering. It's near the Panthéon.",
    nearbyTips: [
      "The Panthéon and its crypt are next door.",
      "The Jardin du Luxembourg is a short walk west.",
    ],
  },
  {
    slug: "musee-rodin",
    name: "Musée Rodin",
    titleSlug: "midnight-in-paris",
    destinationSlug: "paris",
    lat: 48.8553,
    lng: 2.3158,
    kind: "building",
    address: "77 Rue de Varenne, 75007 Paris, France",
    sceneContext:
      "The sculptor's mansion and its garden of bronzes are one of the couple's strolls through a romanticized Paris.",
    howToVisit:
      "A ticketed museum with a famous sculpture garden you can visit on a cheaper garden-only ticket; it's closed on Mondays. The Thinker broods among the roses.",
    nearbyTips: [
      "Les Invalides and Napoleon's tomb are next door.",
      "The Eiffel Tower is a fifteen-minute walk.",
    ],
  },

  // ===================== Pretty Woman =====================
  {
    slug: "beverly-wilshire-hotel",
    name: "Beverly Wilshire",
    titleSlug: "pretty-woman",
    destinationSlug: "los-angeles",
    lat: 34.0669,
    lng: -118.4003,
    kind: "hotel",
    address: "9500 Wilshire Blvd, Beverly Hills, CA 90212, United States",
    sceneContext:
      "The grand hotel where Edward stays, and where the fairy-tale romance plays out, is a real Beverly Hills landmark.",
    howToVisit:
      "A working luxury hotel; non-guests can book a drink or afternoon tea to see the lobby, or simply admire the facade at the foot of Rodeo Drive. It sits on Wilshire Boulevard.",
    nearbyTips: [
      "Rodeo Drive begins right outside the door.",
      "The cafés of Beverly Hills are all around.",
    ],
  },
  {
    slug: "rodeo-drive",
    name: "Rodeo Drive",
    titleSlug: "pretty-woman",
    destinationSlug: "los-angeles",
    lat: 34.0676,
    lng: -118.4015,
    kind: "street",
    address: "Rodeo Dr, Beverly Hills, CA 90210, United States",
    sceneContext:
      "The famous luxury shopping street is where Vivian's big-spree transformation montage unfolds.",
    howToVisit:
      "A free, walkable strip of designer boutiques; window-shopping and people-watching cost nothing, and the cobbled Two Rodeo lane is the photo spot. Valet and meters cover parking.",
    nearbyTips: [
      "The stepped Two Rodeo lane looks like a film set.",
      "Beverly Gardens Park and its sign are a short walk.",
    ],
  },

  // ===================== Mrs. Doubtfire =====================
  {
    slug: "mrs-doubtfire-house",
    name: "Mrs. Doubtfire House",
    titleSlug: "mrs-doubtfire",
    destinationSlug: "san-francisco",
    lat: 37.7967,
    lng: -122.4393,
    kind: "building",
    address: "2640 Steiner St, San Francisco, CA 94115, United States",
    sceneContext:
      "This handsome Pacific Heights townhouse is the family home at the centre of the comedy.",
    howToVisit:
      "A private residence on a quiet street, so admire and photograph from the public sidewalk and respect the residents. It's a short walk from the Lyon Street steps.",
    nearbyTips: [
      "The Lyon Street steps and Alta Plaza Park are nearby.",
      "Fillmore Street's cafés are a few blocks away.",
    ],
  },

  // ===================== Breakfast at Tiffany's =====================
  {
    slug: "tiffany-flagship-5th-ave",
    name: "Tiffany & Co Fifth Avenue",
    titleSlug: "breakfast-at-tiffanys",
    destinationSlug: "new-york",
    lat: 40.7625,
    lng: -73.9737,
    kind: "building",
    address: "727 5th Ave, New York, NY 10022, United States",
    sceneContext:
      "Holly Golightly gazes into the windows of the Tiffany flagship over coffee and a pastry in the film's opening.",
    howToVisit:
      "The recently restored flagship store is free to enter and browse, with a café upstairs if you really want breakfast at Tiffany's. It's on the corner of 57th Street.",
    nearbyTips: [
      "Central Park's southern edge is two blocks north.",
      "The shops of Fifth Avenue run south from here.",
    ],
  },

  // ===================== Ghostbusters =====================
  {
    slug: "hook-and-ladder-8",
    name: "Hook & Ladder 8",
    titleSlug: "ghostbusters",
    destinationSlug: "new-york",
    lat: 40.7194,
    lng: -74.0066,
    kind: "building",
    address: "14 N Moore St, New York, NY 10013, United States",
    sceneContext:
      "This working Tribeca firehouse is the Ghostbusters' headquarters, its red doors instantly recognisable.",
    howToVisit:
      "A real, active fire station, so admire the exterior from the sidewalk without blocking the doors; there's a small Ghostbusters plaque and sign. It's in the heart of Tribeca.",
    nearbyTips: [
      "Tribeca's cobbled streets and cafés surround it.",
      "The Hudson River greenway is a short walk west.",
    ],
  },
  {
    slug: "new-york-public-library",
    name: "New York Public Library",
    titleSlug: "ghostbusters",
    destinationSlug: "new-york",
    lat: 40.7532,
    lng: -73.9822,
    kind: "building",
    address: "476 5th Ave, New York, NY 10018, United States",
    sceneContext:
      "The library's marble halls and lion-flanked steps open the film with its very first ghost.",
    howToVisit:
      "The landmark Stephen A. Schwarzman Building is free to enter and wander, including the grand Rose Reading Room; the lions out front guard the Fifth Avenue steps. It's by Bryant Park.",
    nearbyTips: [
      "Bryant Park sits directly behind the library.",
      "Grand Central Terminal is a few blocks east.",
    ],
  },

  // ===================== When Harry Met Sally =====================
  {
    slug: "katz-delicatessen",
    name: "Katz's Delicatessen",
    titleSlug: "when-harry-met-sally",
    destinationSlug: "new-york",
    lat: 40.7223,
    lng: -73.9874,
    kind: "venue",
    address: "205 E Houston St, New York, NY 10002, United States",
    sceneContext:
      "The bustling Lower East Side deli is the scene of the film's most quoted moment, over a pastrami sandwich.",
    howToVisit:
      "A real, famously busy deli open daily; grab a ticket at the door, order pastrami at the counter, and a sign marks the very table from the scene. Cash and card both work.",
    nearbyTips: [
      "The Lower East Side's bars and galleries are all around.",
      "The Tenement Museum nearby tells the neighbourhood's story.",
    ],
  },

  // ===================== Paddington =====================
  {
    slug: "paddington-station",
    name: "Paddington Station",
    titleSlug: "paddington",
    destinationSlug: "london",
    lat: 51.517,
    lng: -0.1769,
    kind: "building",
    address: "Paddington Station, London W2 1HB, United Kingdom",
    sceneContext:
      "The great Victorian terminus gives the little bear his name and his first bewildered arrival in London.",
    howToVisit:
      "A working railway station free to walk through; find the bronze Paddington Bear statue on platform 1 and the shop nearby. It's a major Tube interchange.",
    nearbyTips: [
      "Pose with the Paddington statue on platform 1.",
      "Little Venice's canals are a short walk north.",
    ],
  },
  {
    slug: "primrose-hill",
    name: "Primrose Hill",
    titleSlug: "paddington",
    destinationSlug: "london",
    lat: 51.5388,
    lng: -0.1606,
    kind: "nature",
    address: "Primrose Hill, London NW3 3NA, United Kingdom",
    sceneContext:
      "The pastel terraces below this green hill are the Brown family's neighbourhood, and the summit gives the film its London views.",
    howToVisit:
      "A free public park open all hours, with one of the best skyline panoramas in the city from the top; the streets below are a pretty wander. It adjoins Regent's Park.",
    nearbyTips: [
      "The summit has a protected view across the skyline.",
      "Regent's Park and London Zoo are next door.",
    ],
  },

  // ===================== The Da Vinci Code =====================
  {
    slug: "temple-church-london",
    name: "Temple Church",
    titleSlug: "the-da-vinci-code",
    destinationSlug: "london",
    lat: 51.5125,
    lng: -0.1106,
    kind: "building",
    address: "Temple, London EC4Y 7BB, United Kingdom",
    sceneContext:
      "The round 12th-century Templar church is a key stop on the film's London treasure hunt.",
    howToVisit:
      "A historic church with a small admission on open days; it's tucked inside the quiet legal quarter of the Inns of Court, worth exploring around it. Check opening times, which vary.",
    nearbyTips: [
      "Wander the hidden courtyards of the Inns of Court.",
      "Fleet Street and the Royal Courts of Justice are close.",
    ],
  },
  {
    slug: "rosslyn-chapel",
    name: "Rosslyn Chapel",
    titleSlug: "the-da-vinci-code",
    destinationSlug: "rosslyn",
    lat: 55.8556,
    lng: -3.1606,
    kind: "building",
    address: "Chapel Loan, Roslin EH25 9PU, United Kingdom",
    sceneContext:
      "The intricately carved medieval chapel provides the film's climactic resting place for its secret.",
    howToVisit:
      "A working chapel and visitor attraction with timed paid entry; the carvings reward a guided talk, and photography inside is restricted. It's about 30 minutes from Edinburgh.",
    nearbyTips: [
      "The wooded Roslin Glen is a walk below the chapel.",
      "Edinburgh's old town is a short drive north.",
    ],
  },

  // ===================== Bridget Jones's Diary =====================
  {
    slug: "borough-market",
    name: "Borough Market",
    titleSlug: "bridget-joness-diary",
    destinationSlug: "london",
    lat: 51.5055,
    lng: -0.0909,
    kind: "street",
    address: "8 Southwark St, London SE1 1TL, United Kingdom",
    sceneContext:
      "The food market beneath the railway arches is the neighbourhood of Bridget's famous flat.",
    howToVisit:
      "A free, bustling food market open most days, best mid-week for the stalls and street food; it gets very busy at weekend lunchtimes. It's beside London Bridge station.",
    nearbyTips: [
      "Southwark Cathedral sits right beside the market.",
      "The Thames path and the Globe theatre are a short walk.",
    ],
  },
  {
    slug: "the-globe-tavern-borough",
    name: "The Globe Tavern",
    titleSlug: "bridget-joness-diary",
    destinationSlug: "london",
    lat: 51.5052,
    lng: -0.0903,
    kind: "building",
    address: "8 Bedale St, London SE1 9AL, United Kingdom",
    sceneContext:
      "Bridget's flat sits above this corner pub on the edge of Borough Market.",
    howToVisit:
      "A real, working pub at the market's edge, so come for a drink and a look at the flat above; it's busy when the market is. The exterior is the recognisable bit.",
    nearbyTips: [
      "The market stalls are right outside the door.",
      "London Bridge and the river are a couple of minutes away.",
    ],
  },

  // ===================== Forrest Gump =====================
  {
    slug: "chippewa-square-savannah",
    name: "Chippewa Square",
    titleSlug: "forrest-gump",
    destinationSlug: "savannah",
    lat: 32.076,
    lng: -81.0934,
    kind: "landmark",
    address: "Chippewa Square, Savannah, GA 31401, United States",
    sceneContext:
      "The leafy, oak-shaded square is where Forrest sits on a bench and tells his life story to passers-by.",
    howToVisit:
      "A free public square to stroll, though the film bench was a prop and now lives in a local history museum, so the square is the spot rather than a bench. The historic district spreads out from here.",
    nearbyTips: [
      "The original prop bench is in the Savannah History Museum.",
      "Savannah's other oak-lined squares are an easy walk.",
    ],
  },

  // ===================== The Shawshank Redemption =====================
  {
    slug: "ohio-state-reformatory",
    name: "Ohio State Reformatory",
    titleSlug: "the-shawshank-redemption",
    destinationSlug: "mansfield",
    lat: 40.7791,
    lng: -82.5026,
    kind: "building",
    address: "100 Reformatory Rd, Mansfield, OH 44905, United States",
    sceneContext:
      "The vast Gothic former prison is Shawshank itself, its cell blocks and the warden's office used throughout the film.",
    howToVisit:
      "A preserved historic prison open for ticketed self-guided and guided tours, including Shawshank-specific routes; allow a couple of hours. It's just outside Mansfield.",
    nearbyTips: [
      "Shawshank-themed tours point out the film's spots.",
      "A wider Shawshank trail links other sites around Mansfield.",
    ],
  },

  // ===================== The Shining =====================
  {
    slug: "timberline-lodge",
    name: "Timberline Lodge",
    titleSlug: "the-shining",
    destinationSlug: "mount-hood",
    lat: 45.3311,
    lng: -121.711,
    kind: "hotel",
    address: "27500 E Timberline Rd, Government Camp, OR 97028, United States",
    sceneContext:
      "The lodge's exterior is the snowbound Overlook Hotel, seen in the film's chilling aerial approach.",
    howToVisit:
      "A working mountain lodge and ski hub open year-round; non-guests can visit the day lodge, eat, or just photograph the exterior. It's near the top of the Mount Hood road.",
    nearbyTips: [
      "The lodge sits on a year-round ski slope.",
      "Trails fan out across Mount Hood from the car park.",
    ],
  },

  // ===================== Close Encounters of the Third Kind =====================
  {
    slug: "devils-tower",
    name: "Devils Tower",
    titleSlug: "close-encounters",
    destinationSlug: "wyoming",
    lat: 44.5902,
    lng: -104.7146,
    kind: "nature",
    address: "Devils Tower National Monument, WY 82714, United States",
    sceneContext:
      "The flat-topped volcanic monolith is the mountain the characters are compelled to reach for the alien rendezvous.",
    howToVisit:
      "America's first national monument, entered by vehicle pass; an easy paved loop circles the base, and climbers tackle the columns. It's a remote drive in Wyoming's north-east.",
    nearbyTips: [
      "The 1.3-mile Tower Trail loops right around the base.",
      "A prairie-dog town sits near the entrance road.",
    ],
  },

  // ===================== Thelma & Louise =====================
  {
    slug: "dead-horse-point",
    name: "Dead Horse Point",
    titleSlug: "thelma-and-louise",
    destinationSlug: "moab",
    lat: 38.4783,
    lng: -109.7401,
    kind: "nature",
    address: "Dead Horse Point State Park, UT 84532, United States",
    sceneContext:
      "The sheer canyon overlook stood in for the Grand Canyon in the film's unforgettable final scene.",
    howToVisit:
      "A Utah state park with a vehicle fee, a short walk from the car park to the dramatic overlook; sunrise and sunset are spectacular. It's about 40 minutes from Moab.",
    nearbyTips: [
      "Canyonlands National Park adjoins the park.",
      "Arches National Park is a short drive from Moab.",
    ],
  },

  // ===================== Out of Africa =====================
  {
    slug: "ngong-hills",
    name: "Ngong Hills",
    titleSlug: "out-of-africa",
    destinationSlug: "kenya",
    lat: -1.396,
    lng: 36.648,
    kind: "nature",
    address: "Ngong Hills, Kajiado County, Kenya",
    sceneContext:
      "The rolling ridgeline is the film's emotional horizon, where Denys is laid to rest above the plains.",
    howToVisit:
      "A breezy ridge walk along the hilltops, usually done with a local guide or ranger for safety; it's a short drive from Nairobi. Mornings are clearest before the haze.",
    nearbyTips: [
      "Wind turbines now line part of the ridge.",
      "Nairobi National Park is on the way back to the city.",
    ],
  },
  {
    slug: "karen-blixen-museum",
    name: "Karen Blixen Museum",
    titleSlug: "out-of-africa",
    destinationSlug: "kenya",
    lat: -1.3517,
    lng: 36.7117,
    kind: "building",
    address: "Karen Rd, Nairobi, Kenya",
    sceneContext:
      "The author's real farmhouse at the foot of the hills is now a museum to the African years behind the story.",
    howToVisit:
      "A ticketed museum in the leafy Karen suburb, with guided tours of the house and gardens; allow an hour. It's about 30 minutes from central Nairobi.",
    nearbyTips: [
      "The Giraffe Centre is a short drive away.",
      "The suburb of Karen takes its name from her.",
    ],
  },

  // ===================== Trainspotting =====================
  {
    slug: "princes-street-edinburgh",
    name: "Princes Street",
    titleSlug: "trainspotting",
    destinationSlug: "edinburgh",
    lat: 55.9519,
    lng: -3.199,
    kind: "street",
    address: "Princes St, Edinburgh EH2, United Kingdom",
    sceneContext:
      "The city's main shopping street is where the film's breathless opening chase begins.",
    howToVisit:
      "A free, busy public street with the castle and gardens along one side; walk it for the views up to the old town. Trams and buses run its length.",
    nearbyTips: [
      "Princes Street Gardens sit below the castle.",
      "The Scott Monument rises from the street's edge.",
    ],
  },
  {
    slug: "calton-hill",
    name: "Calton Hill",
    titleSlug: "trainspotting",
    destinationSlug: "edinburgh",
    lat: 55.9549,
    lng: -3.1825,
    kind: "nature",
    address: "Calton Hill, Edinburgh EH7 5AA, United Kingdom",
    sceneContext:
      "The monument-topped hill gives the film its sweeping views over the characters' Edinburgh.",
    howToVisit:
      "A free, short climb from the city centre to a cluster of monuments and one of the best views in Scotland; it's a favourite for sunset. Steps lead up from Waterloo Place.",
    nearbyTips: [
      "The unfinished National Monument crowns the top.",
      "The view takes in the castle, Arthur's Seat and the sea.",
    ],
  },

  // ===================== Chariots of Fire =====================
  {
    slug: "west-sands-st-andrews",
    name: "West Sands",
    titleSlug: "chariots-of-fire",
    destinationSlug: "st-andrews",
    lat: 56.3434,
    lng: -2.806,
    kind: "nature",
    address: "West Sands, St Andrews KY16 9XL, United Kingdom",
    sceneContext:
      "The long, flat beach is where the athletes run in the film's iconic slow-motion title sequence.",
    howToVisit:
      "A free, vast beach beside the famous golf links, open at all times and bracing in any weather; it stretches for nearly two miles. Park at the Old Course end.",
    nearbyTips: [
      "The Old Course clubhouse stands at the beach's edge.",
      "St Andrews' old town and cathedral ruins are close.",
    ],
  },

  // ===================== Field of Dreams =====================
  {
    slug: "field-of-dreams",
    name: "Field of Dreams",
    titleSlug: "field-of-dreams",
    destinationSlug: "dyersville",
    lat: 42.198,
    lng: -91.0654,
    kind: "venue",
    address: "28995 Lansing Rd, Dyersville, IA 52040, United States",
    sceneContext:
      "The baseball diamond carved into an Iowa cornfield still stands exactly as it was built for the film.",
    howToVisit:
      "The field and farmhouse are a free visitor site (donations welcome) open seasonally; you can play catch on the diamond and walk into the corn. It's a few minutes from Dyersville.",
    nearbyTips: [
      "Bring a glove and play catch on the diamond.",
      "The town of Dyersville has a basilica worth a look.",
    ],
  },

  // ===================== Brokeback Mountain =====================
  {
    slug: "kananaskis-country",
    name: "Kananaskis Country",
    titleSlug: "brokeback-mountain",
    destinationSlug: "canadian-rockies",
    lat: 50.9,
    lng: -115.1,
    kind: "nature",
    address: "Kananaskis Country, Alberta, Canada",
    sceneContext:
      "The peaks and meadows of the Canadian Rockies stood in for the Wyoming mountain that gives the film its name.",
    howToVisit:
      "A vast area of provincial parks with a conservation pass for vehicles, laced with trails and viewpoints; it's quieter than nearby Banff. About an hour west of Calgary.",
    nearbyTips: [
      "Mount Lougheed is the peak that played Brokeback.",
      "Banff National Park is a short drive on.",
    ],
  },

  // ===================== Breaking Bad =====================
  {
    slug: "walter-white-house",
    name: "Walter White's House",
    titleSlug: "breaking-bad",
    destinationSlug: "albuquerque",
    lat: 35.1264,
    lng: -106.5364,
    kind: "building",
    address: "3828 Piermont Dr NE, Albuquerque, NM 87111, United States",
    sceneContext:
      "The modest ranch house is the White family home throughout the series, including its famous pizza-on-the-roof moment.",
    howToVisit:
      "A private residence on an ordinary street, so view it only from the public road, keep quiet and do not throw anything; the owners have asked fans to be respectful. Drive-by photos from the curb only.",
    nearbyTips: [
      "Many other Breaking Bad spots are scattered across the city.",
      "Old Town Albuquerque is a good central base.",
    ],
  },
  {
    slug: "los-pollos-twisters",
    name: "Los Pollos Hermanos (Twisters)",
    titleSlug: "breaking-bad",
    destinationSlug: "albuquerque",
    lat: 35.0826,
    lng: -106.5564,
    kind: "venue",
    address: "4257 Isleta Blvd SW, Albuquerque, NM 87105, United States",
    sceneContext:
      "This working Twisters restaurant is Gus Fring's fried-chicken chain Los Pollos Hermanos, the front for his empire.",
    howToVisit:
      "A real, open fast-food spot, so go in, order, and snap a photo of the unmistakable interior; staff are used to fans. It's on the city's south-west side.",
    nearbyTips: [
      "The dining room is dressed with nods to the show.",
      "Pair it with a self-drive tour of other filming spots.",
    ],
  },

  // ===================== Mission: Impossible =====================
  {
    slug: "burj-khalifa",
    name: "Burj Khalifa",
    titleSlug: "mission-impossible",
    destinationSlug: "dubai",
    lat: 25.1972,
    lng: 55.2744,
    kind: "landmark",
    address: "1 Sheikh Mohammed bin Rashid Blvd, Dubai, United Arab Emirates",
    sceneContext:
      "Ethan Hunt scales the glass face of the world's tallest building in the franchise's most vertiginous stunt.",
    howToVisit:
      "The At the Top observation decks are ticketed and best booked ahead for sunset; the tower soars above the Dubai Mall and its fountains. No climbing required.",
    nearbyTips: [
      "The Dubai Fountain show runs below the tower each evening.",
      "The Dubai Mall is one of the world's largest.",
    ],
  },
  {
    slug: "vienna-state-opera",
    name: "Vienna State Opera",
    titleSlug: "mission-impossible",
    destinationSlug: "vienna",
    lat: 48.203,
    lng: 16.369,
    kind: "building",
    address: "Opernring 2, 1010 Wien, Austria",
    sceneContext:
      "A performance at the grand opera house is the stage for a tense assassination set piece.",
    howToVisit:
      "A working opera house; catch a performance, take a guided backstage tour, or grab cheap standing-room tickets on the night. It sits on the Ringstrasse in the heart of the city.",
    nearbyTips: [
      "Standing-room tickets are sold cheaply before shows.",
      "The Sachertorte at the nearby Hotel Sacher is a ritual.",
    ],
  },

  // ===================== Skyfall =====================
  {
    slug: "glen-etive",
    name: "Glen Etive",
    titleSlug: "skyfall",
    destinationSlug: "scottish-highlands",
    lat: 56.6149,
    lng: -5.008,
    kind: "nature",
    address: "Glen Etive, Glencoe, Scotland, United Kingdom",
    sceneContext:
      "The winding single-track road into this remote glen is where Bond drives his Aston Martin home to Skyfall.",
    howToVisit:
      "A free public single-track road off the A82 through Glencoe, with passing places and stunning views; drive slowly and use the laybys for photos. It dead-ends at a loch.",
    nearbyTips: [
      "The Glencoe valley itself is a few minutes back up the road.",
      "Fort William and Glenfinnan are a short drive on.",
    ],
  },
  {
    slug: "grand-bazaar-istanbul",
    name: "Grand Bazaar",
    titleSlug: "skyfall",
    destinationSlug: "istanbul",
    lat: 41.0106,
    lng: 28.968,
    kind: "landmark",
    address: "Kalpakçılar Cd. No:22, Fatih, İstanbul, Turkey",
    sceneContext:
      "The film's breathless opening chase tears across the rooftops and through the covered lanes of the great market.",
    howToVisit:
      "One of the world's oldest covered markets, free to enter and open daily except Sundays; haggling is expected and it is busiest midday. Mind your bearings in the maze of lanes.",
    nearbyTips: [
      "The Spice Bazaar is a short walk downhill.",
      "Hagia Sophia and the Blue Mosque are nearby.",
    ],
  },

  // ===================== Crash Landing on You =====================
  {
    slug: "iseltwald-jetty",
    name: "Iseltwald Jetty",
    titleSlug: "crash-landing-on-you",
    destinationSlug: "interlaken",
    lat: 46.7236,
    lng: 7.956,
    kind: "nature",
    address: "Iseltwald, Lake Brienz, Switzerland",
    sceneContext:
      "The little wooden jetty on turquoise Lake Brienz is where the drama's lovers share a fateful piano scene.",
    howToVisit:
      "So many fans come that the village now charges a small fee to step onto the jetty; reach Iseltwald by boat or bus from Interlaken. Go early for calm water and fewer queues.",
    nearbyTips: [
      "Lake Brienz boats stop right at the village.",
      "The Giessbach Falls are across the lake.",
    ],
  },
  {
    slug: "sigriswil-panorama-bridge",
    name: "Sigriswil Panorama Bridge",
    titleSlug: "crash-landing-on-you",
    destinationSlug: "interlaken",
    lat: 46.7167,
    lng: 7.71,
    kind: "landmark",
    address: "Panoramabrücke Sigriswil, 3655 Sigriswil, Switzerland",
    sceneContext:
      "The slender footbridge spanning a deep gorge features in the couple's Swiss idyll.",
    howToVisit:
      "A suspension footbridge with a small crossing fee, part of a scenic walk above Lake Thun; it's an easy drive or bus ride from Interlaken. Not for the faint of heart.",
    nearbyTips: [
      "The bridge links to a lakeside panorama trail.",
      "Thun's castle and old town are close.",
    ],
  },

  // ===================== Parasite =====================
  {
    slug: "ahyeon-dong-stairs",
    name: "Ahyeon-dong Stairs",
    titleSlug: "parasite",
    destinationSlug: "seoul",
    lat: 37.5519,
    lng: 126.953,
    kind: "street",
    address: "Ahyeon-dong, Mapo-gu, Seoul, South Korea",
    sceneContext:
      "The steep stair-street the Kim family hurries down in the rain captures the film's upstairs-downstairs geography.",
    howToVisit:
      "A real, lived-in residential staircase, free to walk but home to actual residents, so visit quietly and by day. It's near Ahyeon and Gongdeok stations.",
    nearbyTips: [
      "The corner shop from the film is at the foot of the stairs.",
      "Mapo's pojangmacha food tents are a local night out.",
    ],
  },
  {
    slug: "woori-supermarket",
    name: "Woori Supermarket",
    titleSlug: "parasite",
    destinationSlug: "seoul",
    lat: 37.5503,
    lng: 126.9525,
    kind: "venue",
    address: "Ahyeon-dong, Mapo-gu, Seoul, South Korea",
    sceneContext:
      "The neighbourhood grocery at the bottom of the stairs is the corner shop seen throughout the family's scenes.",
    howToVisit:
      "A working local shop, so buy something and be considerate of the owners and residents; it sits right by the famous stairs. Combine the two in one short stop.",
    nearbyTips: [
      "It pairs naturally with the stair-street above.",
      "Hongdae's buzz is a couple of stops away.",
    ],
  },

  // ===================== The Third Man =====================
  {
    slug: "wiener-riesenrad",
    name: "Wiener Riesenrad",
    titleSlug: "the-third-man",
    destinationSlug: "vienna",
    lat: 48.2167,
    lng: 16.3958,
    kind: "landmark",
    address: "Riesenradplatz 1, 1020 Wien, Austria",
    sceneContext:
      "The giant Ferris wheel at the Prater is where Harry Lime delivers his chilling cuckoo-clock speech.",
    howToVisit:
      "A historic Ferris wheel with a ticketed ride in roomy cabins, open daily in the Prater funfair; it's a short metro ride from the centre. Dusk gives the best city light.",
    nearbyTips: [
      "The Prater's old funfair sprawls around the wheel.",
      "The green Prater park is good for a walk or cycle.",
    ],
  },
  {
    slug: "schreyvogelgasse-doorway",
    name: "Schreyvogelgasse Doorway",
    titleSlug: "the-third-man",
    destinationSlug: "vienna",
    lat: 48.2103,
    lng: 16.3625,
    kind: "street",
    address: "Schreyvogelgasse 8, 1010 Wien, Austria",
    sceneContext:
      "A shadowed doorway on this quiet lane is where Harry Lime is first revealed by a sudden shaft of light.",
    howToVisit:
      "A real doorway on a public street near the Mölker Bastei, free to find and photograph at any time; it is unmarked, so look for the address. The old-town lanes around it reward a wander.",
    nearbyTips: [
      "Beethoven once lived on the Mölker Bastei nearby.",
      "The university and Ringstrasse are a short walk.",
    ],
  },

  // ===================== Schindler's List =====================
  {
    slug: "schindler-factory-krakow",
    name: "Schindler's Factory",
    titleSlug: "schindlers-list",
    destinationSlug: "krakow",
    lat: 50.0476,
    lng: 19.9617,
    kind: "building",
    address: "Lipowa 4, 30-702 Kraków, Poland",
    sceneContext:
      "Oskar Schindler's real enamel factory, now a museum of wartime Kraków, sits at the heart of the true story.",
    howToVisit:
      "A ticketed museum in the Zabłocie district, best booked ahead as it sells out; allow a couple of sobering hours. It's across the river from the old town.",
    nearbyTips: [
      "The MOCAK contemporary-art museum is next door.",
      "The Podgórze ghetto memorial square is nearby.",
    ],
  },
  {
    slug: "kazimierz-district",
    name: "Kazimierz",
    titleSlug: "schindlers-list",
    destinationSlug: "krakow",
    lat: 50.0517,
    lng: 19.9447,
    kind: "landmark",
    address: "Kazimierz, Kraków, Poland",
    sceneContext:
      "The historic Jewish quarter, with its old synagogues and squares, stands in for wartime Kraków throughout the film.",
    howToVisit:
      "A free, atmospheric district to wander on foot, now full of cafés and bars alongside its synagogues and memorials. It's a short walk from the main market square.",
    nearbyTips: [
      "Plac Nowy is the heart of Kazimierz nightlife.",
      "Several historic synagogues are open to visit.",
    ],
  },

  // ===================== The Hunger Games =====================
  {
    slug: "dupont-state-forest",
    name: "DuPont State Forest",
    titleSlug: "the-hunger-games",
    destinationSlug: "north-carolina",
    lat: 35.2008,
    lng: -82.6259,
    kind: "nature",
    address: "DuPont State Recreational Forest, Cedar Mountain, NC 28718, United States",
    sceneContext:
      "The waterfalls and woods of this forest are the arena where Katniss survives the Games.",
    howToVisit:
      "A free state forest with marked trails to several big waterfalls; Triple Falls and Hooker Falls are the headline hikes, busy on summer weekends. Bring sturdy shoes.",
    nearbyTips: [
      "Triple Falls appears in the arena scenes.",
      "Brevard and Asheville are nearby bases.",
    ],
  },
  {
    slug: "henry-river-mill-village",
    name: "Henry River Mill Village",
    titleSlug: "the-hunger-games",
    destinationSlug: "north-carolina",
    lat: 35.7026,
    lng: -81.403,
    kind: "building",
    address: "Henry River Mill Village, Hildebran, NC 28637, United States",
    sceneContext:
      "This abandoned cotton-mill village is District 12, Katniss's run-down home district.",
    howToVisit:
      "A preserved historic village offering ticketed tours; check the schedule as access is managed and it is private property. It's off Interstate 40 west of Hickory.",
    nearbyTips: [
      "Tours point out Katniss's house and the Mellark bakery.",
      "It's an easy detour between Asheville and Charlotte.",
    ],
  },

  // ===================== Twilight =====================
  {
    slug: "forks-washington",
    name: "Forks",
    titleSlug: "twilight",
    destinationSlug: "forks",
    lat: 47.9504,
    lng: -124.3855,
    kind: "street",
    address: "Forks, WA 98331, United States",
    sceneContext:
      "The rainy logging town is the saga's setting, and the town now embraces its fame with Twilight signs and tours.",
    howToVisit:
      "A real working town you can drive around freely; the visitor centre runs Twilight maps and a 'Bella's truck' photo op. Much of the films were actually shot in Oregon, so this is the spiritual home.",
    nearbyTips: [
      "The visitor centre has a Twilight photo spot.",
      "The Hoh Rain Forest is a scenic drive away.",
    ],
  },
  {
    slug: "la-push-beach",
    name: "La Push (First Beach)",
    titleSlug: "twilight",
    destinationSlug: "forks",
    lat: 47.907,
    lng: -124.6357,
    kind: "nature",
    address: "First Beach, La Push, WA 98350, United States",
    sceneContext:
      "The wild, driftwood-strewn beach of the Quileute lands features through the series.",
    howToVisit:
      "A free, dramatic Pacific beach on the Quileute Reservation, open to visitors who respect the community; it's about 20 minutes from Forks. Watch the tides and the weather.",
    nearbyTips: [
      "Sea stacks rise offshore at low tide.",
      "Rialto Beach nearby is another wild strand.",
    ],
  },

  // ===================== Cinema Paradiso =====================
  {
    slug: "palazzo-adriano-square",
    name: "Piazza Umberto I, Palazzo Adriano",
    titleSlug: "cinema-paradiso",
    destinationSlug: "cefalu",
    lat: 37.6736,
    lng: 13.3897,
    kind: "landmark",
    address: "Piazza Umberto I, 90030 Palazzo Adriano PA, Sicily, Italy",
    sceneContext:
      "The village square, with its fountain and twin churches, was the site of the open-air cinema at the film's heart.",
    howToVisit:
      "A free, sleepy mountain-village square about an hour and a half inland from the coast; there is a small Cinema Paradiso exhibition in the village. Best paired with a drive through the Sicani hills.",
    nearbyTips: [
      "A small museum recalls the film's shoot here.",
      "The Sicani mountains make a scenic drive.",
    ],
  },
  {
    slug: "cefalu-old-town",
    name: "Cefalù Old Town",
    titleSlug: "cinema-paradiso",
    destinationSlug: "cefalu",
    lat: 38.0397,
    lng: 14.0233,
    kind: "landmark",
    address: "Cefalù, 90015 PA, Sicily, Italy",
    sceneContext:
      "The seaside town's old lanes, beach and great Norman cathedral also feature in the beloved film.",
    howToVisit:
      "A free, walkable old town beneath a huge rock; the cathedral is free to enter and the beach is right there. It's an easy train ride east of Palermo.",
    nearbyTips: [
      "Climb La Rocca above town for the view.",
      "The Norman cathedral's mosaics are remarkable.",
    ],
  },

  // ===================== The Sopranos =====================
  {
    slug: "holstens-bloomfield",
    name: "Holsten's",
    titleSlug: "the-sopranos",
    destinationSlug: "new-jersey",
    lat: 40.7855,
    lng: -74.164,
    kind: "venue",
    address: "1063 Broad St, Bloomfield, NJ 07003, United States",
    sceneContext:
      "This old-fashioned ice-cream parlour and sweet shop is where the series famously cuts to black in its final scene.",
    howToVisit:
      "A real, beloved diner open daily; sit in the booth, order onion rings and a sundae, and a plaque marks the moment. It's in Bloomfield, north-west of Newark.",
    nearbyTips: [
      "Ask to sit at the booth from the finale.",
      "The chocolate counter is a Jersey institution.",
    ],
  },
  {
    slug: "pizzaland-north-arlington",
    name: "Pizzaland",
    titleSlug: "the-sopranos",
    destinationSlug: "new-jersey",
    lat: 40.7889,
    lng: -74.133,
    kind: "venue",
    address: "260 Belleville Tpke, North Arlington, NJ 07031, United States",
    sceneContext:
      "The tiny roadside pizzeria flashes by in the show's famous opening-credits drive home.",
    howToVisit:
      "A real, still-open slice shop, so stop in for a classic New Jersey slice; it's a quick photo of the unchanged storefront. It sits on the Belleville Turnpike.",
    nearbyTips: [
      "The storefront looks just as it did in the credits.",
      "It's an easy stop on a wider Sopranos drive.",
    ],
  },

  // ===================== Succession =====================
  {
    slug: "hudson-yards-nyc",
    name: "Hudson Yards",
    titleSlug: "succession",
    destinationSlug: "new-york",
    lat: 40.7539,
    lng: -74.0021,
    kind: "landmark",
    address: "Hudson Yards, New York, NY 10001, United States",
    sceneContext:
      "The gleaming glass towers of this development stand in for the Roy family's media empire.",
    howToVisit:
      "A public plaza free to wander, with the climbable Vessel sculpture and the ticketed Edge sky deck above; it's at the end of the High Line. Go for the architecture and the river views.",
    nearbyTips: [
      "Walk the High Line straight to Hudson Yards.",
      "The Edge observation deck juts out overhead.",
    ],
  },
  {
    slug: "castello-di-celsa",
    name: "Castello di Celsa",
    titleSlug: "succession",
    destinationSlug: "tuscany",
    lat: 43.2356,
    lng: 11.1817,
    kind: "building",
    address: "Castello di Celsa, 53018 Sovicille SI, Tuscany, Italy",
    sceneContext:
      "This Tuscan castle and its gardens host the lavish family wedding of the show's third-season finale.",
    howToVisit:
      "A private castle whose Italianate gardens open on selected days with a ticket; check ahead before visiting. It's in the wooded hills west of Siena.",
    nearbyTips: [
      "Siena's shell-shaped Piazza del Campo is close.",
      "The hill towns of the Montagnola spread around it.",
    ],
  },

  // ===================== Dune =====================
  {
    slug: "wadi-rum-dune",
    name: "Wadi Rum Dunes (Arrakis)",
    titleSlug: "dune",
    destinationSlug: "wadi-rum",
    lat: 29.55,
    lng: 35.42,
    kind: "nature",
    address: "Wadi Rum Protected Area, Jordan",
    sceneContext:
      "The red dunes and towering canyons of Wadi Rum are the desert planet Arrakis, home of the spice.",
    howToVisit:
      "Entered by ticket and explored on Bedouin-run 4x4 trips or overnight desert camps; book with a local operator and bring sun protection. Aqaba is about an hour away.",
    nearbyTips: [
      "Overnight camps offer huge, clear night skies.",
      "Petra is a couple of hours to the north.",
    ],
  },
  {
    slug: "liwa-desert",
    name: "Liwa Desert",
    titleSlug: "dune",
    destinationSlug: "abu-dhabi",
    lat: 23.1333,
    lng: 53.7833,
    kind: "nature",
    address: "Liwa Oasis, Empty Quarter, Abu Dhabi, United Arab Emirates",
    sceneContext:
      "The colossal dunes of the Empty Quarter near Liwa also stand in for the sands of Arrakis.",
    howToVisit:
      "A remote desert region reached by a long drive from Abu Dhabi; go with a desert-tour operator for dune drives, and consider the dramatic Qasr Al Sarab resort. Summers are punishingly hot.",
    nearbyTips: [
      "The Tal Moreeb dune is among the world's tallest.",
      "Desert resorts offer guided dune excursions.",
    ],
  },

  // ===================== Interstellar =====================
  {
    slug: "svinafellsjokull-glacier",
    name: "Svínafellsjökull Glacier",
    titleSlug: "interstellar",
    destinationSlug: "vatnajokull",
    lat: 64.0167,
    lng: -16.875,
    kind: "nature",
    address: "Svínafellsjökull, Skaftafell, Iceland",
    sceneContext:
      "This blue glacier tongue is the icy, frozen-cloud world the crew explores beyond the wormhole.",
    howToVisit:
      "A glacier outlet near Skaftafell in Vatnajökull National Park; admire it from the car park and marked path, or go onto the ice only with a guided group, as crevasses are dangerous. It's just off the ring road.",
    nearbyTips: [
      "The Jökulsárlón ice lagoon is a short drive east.",
      "Skaftafell has waterfalls and longer hikes.",
    ],
  },

  // ===================== Stranger Things =====================
  {
    slug: "downtown-jackson-georgia",
    name: "Downtown Jackson",
    titleSlug: "stranger-things",
    destinationSlug: "atlanta",
    lat: 33.2935,
    lng: -83.9663,
    kind: "street",
    address: "Downtown Jackson, GA 30233, United States",
    sceneContext:
      "The old town square of this small Georgia town stands in for the centre of fictional Hawkins, Indiana.",
    howToVisit:
      "A free, real town square you can walk around; shops and the cinema facade are recognisable from the show. It's about an hour south of Atlanta.",
    nearbyTips: [
      "The square's storefronts feature in the show.",
      "Atlanta's film-tour operators cover more spots.",
    ],
  },
  {
    slug: "gwinnett-place-mall",
    name: "Gwinnett Place Mall (Starcourt)",
    titleSlug: "stranger-things",
    destinationSlug: "atlanta",
    lat: 33.9601,
    lng: -84.133,
    kind: "building",
    address: "2100 Pleasant Hill Rd, Duluth, GA 30096, United States",
    sceneContext:
      "This faded shopping mall was transformed into the gleaming Starcourt Mall of the show's third season.",
    howToVisit:
      "A largely closed mall in Duluth whose access varies, so check before visiting; the exterior is easy to see from the road. It sits in Atlanta's northern suburbs.",
    nearbyTips: [
      "The mall's sign became a fan landmark.",
      "Central Atlanta's attractions are a short drive.",
    ],
  },

  // ===================== Yellowstone =====================
  {
    slug: "chief-joseph-ranch",
    name: "Chief Joseph Ranch",
    titleSlug: "yellowstone",
    destinationSlug: "montana",
    lat: 46.1497,
    lng: -114.133,
    kind: "building",
    address: "501 Eastside Hwy, Darby, MT 59829, United States",
    sceneContext:
      "This historic log-and-stone ranch in the Bitterroot Valley is the Dutton family's Yellowstone home.",
    howToVisit:
      "A working guest ranch and private home; the main lodge cabins are rented to guests in the off-season, but it is not a drop-in attraction, so admire from the highway. Book a cabin far ahead if you want to stay.",
    nearbyTips: [
      "The Bitterroot Valley drive is spectacular.",
      "Darby and Hamilton are the nearest towns.",
    ],
  },

  // ===================== Eat Pray Love =====================
  {
    slug: "padang-padang-beach",
    name: "Padang Padang Beach",
    titleSlug: "eat-pray-love",
    destinationSlug: "bali",
    lat: -8.811,
    lng: 115.1028,
    kind: "nature",
    address: "Padang Padang Beach, Pecatu, Bali, Indonesia",
    sceneContext:
      "The cliff-framed cove, reached through a cleft in the rock, is where the heroine finds calm on her Bali journey.",
    howToVisit:
      "A small beach with a modest entry fee, reached down a staircase through a rock crevice; it's popular with surfers and busy at midday. It's on the Bukit Peninsula.",
    nearbyTips: [
      "The Uluwatu temple and its sunset dance are close.",
      "The Bukit's surf breaks draw boarders worldwide.",
    ],
  },
  {
    slug: "tegallalang-rice-terraces",
    name: "Tegallalang Rice Terraces",
    titleSlug: "eat-pray-love",
    destinationSlug: "bali",
    lat: -8.4312,
    lng: 115.2792,
    kind: "nature",
    address: "Tegallalang, Gianyar, Bali, Indonesia",
    sceneContext:
      "The sculpted emerald rice terraces around Ubud frame the film's Balinese reawakening.",
    howToVisit:
      "A working farming valley with a small entry and donation points along the paths; go early to beat the tour buses and heat. It's a short drive north of Ubud.",
    nearbyTips: [
      "Ubud's monkey forest and markets are nearby.",
      "Sunrise gives the softest light on the terraces.",
    ],
  },

  // ===================== Joker =====================
  {
    slug: "joker-stairs-bronx",
    name: "The Joker Stairs",
    titleSlug: "joker",
    destinationSlug: "new-york",
    lat: 40.8369,
    lng: -73.929,
    kind: "landmark",
    address: "Shakespeare Ave & W 167th St, Bronx, NY 10452, United States",
    sceneContext:
      "The long public staircase where Arthur Fleck dances in full costume became an instant pop-culture landmark.",
    howToVisit:
      "A real, free public stairway between two Bronx streets, used daily by residents, so visit respectfully and by day. It's a subway ride from Manhattan.",
    nearbyTips: [
      "The steps link Shakespeare and Anderson Avenues.",
      "Yankee Stadium is not far south.",
    ],
  },

  // ===================== In Bruges =====================
  {
    slug: "belfry-of-bruges",
    name: "Belfry of Bruges",
    titleSlug: "in-bruges",
    destinationSlug: "bruges",
    lat: 51.2085,
    lng: 3.2247,
    kind: "landmark",
    address: "Markt 7, 8000 Brugge, Belgium",
    sceneContext:
      "The medieval bell tower over the market square is the site of the film's vertiginous final showdown.",
    howToVisit:
      "A ticketed climb of 366 narrow steps to the top for views over the city; book a time slot in summer to skip the queue. The Markt square below is free and lively.",
    nearbyTips: [
      "The square is ringed by gabled guild houses and cafés.",
      "Horse-drawn carriage tours start from the Markt.",
    ],
  },
  {
    slug: "rozenhoedkaai",
    name: "Rozenhoedkaai",
    titleSlug: "in-bruges",
    destinationSlug: "bruges",
    lat: 51.2076,
    lng: 3.2278,
    kind: "landmark",
    address: "Rozenhoedkaai, 8000 Brugge, Belgium",
    sceneContext:
      "This canal corner, the most photographed view in Bruges, features in the hitmen's wanderings through the old town.",
    howToVisit:
      "A free, always-open quayside viewpoint; come at dawn or dusk for the light and fewer crowds. Canal boat tours leave from nearby jetties.",
    nearbyTips: [
      "Take a canal boat to see the city from the water.",
      "The Burg square and its basilica are a minute away.",
    ],
  },

  // ===================== Ocean's Eleven =====================
  {
    slug: "bellagio-fountains",
    name: "Fountains of Bellagio",
    titleSlug: "oceans-eleven",
    destinationSlug: "las-vegas",
    lat: 36.1126,
    lng: -115.1767,
    kind: "landmark",
    address: "3600 S Las Vegas Blvd, Las Vegas, NV 89109, United States",
    sceneContext:
      "The Bellagio's choreographed fountains are the backdrop to the heist crew's final, wistful gathering.",
    howToVisit:
      "Free shows run every 15 to 30 minutes on the lake in front of the hotel, more often after dark; the Strip sidewalk is the spot. Evenings are best.",
    nearbyTips: [
      "The Bellagio conservatory inside is free to visit.",
      "The Strip's themed casinos line up nearby.",
    ],
  },

  // ===================== The Hangover =====================
  {
    slug: "caesars-palace",
    name: "Caesars Palace",
    titleSlug: "the-hangover",
    destinationSlug: "las-vegas",
    lat: 36.1162,
    lng: -115.1745,
    kind: "hotel",
    address: "3570 S Las Vegas Blvd, Las Vegas, NV 89109, United States",
    sceneContext:
      "The opulent casino resort is where the doomed bachelor party checks in before the night goes off the rails.",
    howToVisit:
      "A working casino-hotel free to walk through, with the Forum Shops and fountains inside; you don't need to stay to wander. It's central on the Strip.",
    nearbyTips: [
      "The Forum Shops have a faux sky and fountains.",
      "The Bellagio fountains are across the road.",
    ],
  },

  // ===================== Spectre =====================
  {
    slug: "zocalo-mexico-city",
    name: "Zócalo",
    titleSlug: "spectre",
    destinationSlug: "mexico-city",
    lat: 19.4326,
    lng: -99.1332,
    kind: "landmark",
    address: "Plaza de la Constitución, Centro, 06000 Ciudad de México, Mexico",
    sceneContext:
      "Bond chases a target through a vast Day of the Dead parade across the city's main square in the film's bravura opening.",
    howToVisit:
      "One of the world's largest city squares, free and open; the Day of the Dead parade the film inspired now runs each late October. The cathedral and national palace frame it.",
    nearbyTips: [
      "A rooftop terrace bar gives the square's full sweep.",
      "The Templo Mayor ruins sit just off the plaza.",
    ],
  },
  {
    slug: "gran-hotel-ciudad-de-mexico",
    name: "Gran Hotel Ciudad de México",
    titleSlug: "spectre",
    destinationSlug: "mexico-city",
    lat: 19.4316,
    lng: -99.1339,
    kind: "hotel",
    address: "Av. 16 de Septiembre 82, Centro, 06000 Ciudad de México, Mexico",
    sceneContext:
      "The hotel's spectacular stained-glass Art Nouveau ceiling appears in the film's opening sequence.",
    howToVisit:
      "A working hotel just off the Zócalo; non-guests can visit the lobby or the rooftop restaurant to see the famous Tiffany-style ceiling. Be discreet, or book a drink.",
    nearbyTips: [
      "The rooftop terrace overlooks the Zócalo.",
      "It sits steps from the cathedral.",
    ],
  },

  // ===================== Letters to Juliet =====================
  {
    slug: "juliet-balcony-verona",
    name: "Casa di Giulietta",
    titleSlug: "letters-to-juliet",
    destinationSlug: "verona",
    lat: 45.4419,
    lng: 10.9985,
    kind: "landmark",
    address: "Via Cappello 23, 37121 Verona VR, Italy",
    sceneContext:
      "The courtyard balcony of Juliet's house is where the film's letter-writing romance begins.",
    howToVisit:
      "The courtyard is free to enter; a ticket gets you onto the balcony and into the house museum. Expect crowds and walls of love notes.",
    nearbyTips: [
      "Add a note to the wall, or rub the Juliet statue for luck.",
      "Piazza delle Erbe is two minutes away.",
    ],
  },
  {
    slug: "piazza-delle-erbe-verona",
    name: "Piazza delle Erbe",
    titleSlug: "letters-to-juliet",
    destinationSlug: "verona",
    lat: 45.443,
    lng: 10.9976,
    kind: "landmark",
    address: "Piazza delle Erbe, 37121 Verona VR, Italy",
    sceneContext:
      "The frescoed market square, on the old Roman forum, is the film's picture of romantic Verona.",
    howToVisit:
      "A free, lively square with a market and café terraces, open all day; climb the Lamberti tower beside it for the view. It's the city's social heart.",
    nearbyTips: [
      "Climb the Torre dei Lamberti for rooftop views.",
      "The Roman Arena is a short walk south.",
    ],
  },

  // ===================== A Good Year =====================
  {
    slug: "chateau-la-canorgue",
    name: "Château la Canorgue",
    titleSlug: "a-good-year",
    destinationSlug: "provence",
    lat: 43.8264,
    lng: 5.2569,
    kind: "building",
    address: "Route du Pont Julien, 84480 Bonnieux, France",
    sceneContext:
      "This working Luberon winery is the vineyard estate the hero inherits and learns to love.",
    howToVisit:
      "A real, family-run wine domaine near Bonnieux; it's private land, so buy and taste wine at the cellar rather than wandering the vines. Call ahead for opening hours.",
    nearbyTips: [
      "The Roman Pont Julien bridge is nearby.",
      "Hilltop Bonnieux is a short drive up.",
    ],
  },
  {
    slug: "gordes-village",
    name: "Gordes",
    titleSlug: "a-good-year",
    destinationSlug: "provence",
    lat: 43.9114,
    lng: 5.2003,
    kind: "landmark",
    address: "Gordes, 84220, France",
    sceneContext:
      "The tiered stone village stands in for the sun-drenched Provence the film falls for.",
    howToVisit:
      "A free hilltop village to wander, with a famous viewpoint on the approach road; parking is limited, so arrive early. The lanes are steep and cobbled.",
    nearbyTips: [
      "The Sénanque Abbey and its lavender are close by.",
      "The viewpoint on the D15 road is the classic photo.",
    ],
  },

  // ===================== Captain Corelli's Mandolin =====================
  {
    slug: "myrtos-beach",
    name: "Myrtos Beach",
    titleSlug: "captain-corellis-mandolin",
    destinationSlug: "kefalonia",
    lat: 38.3447,
    lng: 20.5353,
    kind: "nature",
    address: "Myrtos Beach, Kefalonia 280 84, Greece",
    sceneContext:
      "The dazzling white-pebble bay between sheer cliffs is the film's vision of an idyllic Greek island.",
    howToVisit:
      "A free beach reached by a winding switchback road, with a clifftop viewpoint on the way down; there are a couple of seasonal kiosks but little shade. Go in the morning.",
    nearbyTips: [
      "Stop at the clifftop overlook for the postcard shot.",
      "The village of Assos is a scenic detour.",
    ],
  },
  {
    slug: "antisamos-beach",
    name: "Antisamos Beach",
    titleSlug: "captain-corellis-mandolin",
    destinationSlug: "kefalonia",
    lat: 38.2719,
    lng: 20.6486,
    kind: "nature",
    address: "Antisamos Beach, Sami 280 80, Kefalonia, Greece",
    sceneContext:
      "This green-backed pebble cove near Sami was a key filming beach for the wartime romance.",
    howToVisit:
      "A free beach with sunbeds and tavernas, backed by forested hills; it's a short drive over the headland from Sami. The water is clear and deep.",
    nearbyTips: [
      "The port of Sami is nearby for ferries.",
      "The Melissani cave lake is close by.",
    ],
  },

  // ===================== The Goonies =====================
  {
    slug: "goonies-house-astoria",
    name: "The Goonies House",
    titleSlug: "the-goonies",
    destinationSlug: "astoria",
    lat: 46.1856,
    lng: -123.829,
    kind: "building",
    address: "368 38th St, Astoria, OR 97103, United States",
    sceneContext:
      "The hilltop Victorian house is where the Goonies gang sets off on its treasure hunt.",
    howToVisit:
      "A private home, so view it from the public road below and do not enter the driveway; respect the residents. It overlooks the river from the hill.",
    nearbyTips: [
      "The Astoria Column is a short drive up the hill.",
      "The Oregon Film Museum in town has Goonies exhibits.",
    ],
  },
  {
    slug: "astoria-column",
    name: "Astoria Column",
    titleSlug: "the-goonies",
    destinationSlug: "astoria",
    lat: 46.1876,
    lng: -123.8163,
    kind: "landmark",
    address: "1 Coxcomb Dr, Astoria, OR 97103, United States",
    sceneContext:
      "The painted hilltop column gives the sweeping views over town and river seen in the film.",
    howToVisit:
      "A small parking fee covers the site; climb the spiral stairs inside for the panorama, and launch a balsa glider from the top by tradition. It's open daily.",
    nearbyTips: [
      "Buy a balsa glider at the gift shop to fly from the top.",
      "The view spans the mouth of the Columbia River.",
    ],
  },

  // ===================== Jaws =====================
  {
    slug: "jaws-bridge-marthas-vineyard",
    name: "Jaws Bridge",
    titleSlug: "jaws",
    destinationSlug: "marthas-vineyard",
    lat: 41.4022,
    lng: -70.553,
    kind: "landmark",
    address: "American Legion Memorial Bridge, Edgartown, MA 02539, United States",
    sceneContext:
      "This drawbridge between Edgartown and Oak Bluffs is the bridge the shark swims under; locals leap from it all summer.",
    howToVisit:
      "A free public bridge you can walk across and, as locals do, jump from in summer at your own risk; the beaches either side are open. It's on the island's east shore.",
    nearbyTips: [
      "State Beach runs alongside the bridge.",
      "Oak Bluffs and its gingerbread cottages are close.",
    ],
  },
  {
    slug: "edgartown",
    name: "Edgartown",
    titleSlug: "jaws",
    destinationSlug: "marthas-vineyard",
    lat: 41.389,
    lng: -70.5134,
    kind: "landmark",
    address: "Edgartown, MA 02539, United States",
    sceneContext:
      "The white-clapboard town stood in for Amity's harbour and main street in the film.",
    howToVisit:
      "A free, genteel town to wander, with a lighthouse, harbour and whaling-era mansions; it's busiest in high summer. Reach the island by ferry from Cape Cod.",
    nearbyTips: [
      "Walk out to the Edgartown lighthouse.",
      "Chappaquiddick is a tiny ferry hop away.",
    ],
  },

  // ===================== Dirty Dancing =====================
  {
    slug: "lake-lure",
    name: "Lake Lure",
    titleSlug: "dirty-dancing",
    destinationSlug: "north-carolina",
    lat: 35.4332,
    lng: -82.2018,
    kind: "nature",
    address: "Lake Lure, NC 28746, United States",
    sceneContext:
      "The mountain lake is where Johnny and Baby practise the famous lift, waist-deep in the water.",
    howToVisit:
      "A public lake with a beach, boat tours and the lakeside spots from the film; the beach charges a seasonal fee. It's in the Blue Ridge foothills near Chimney Rock.",
    nearbyTips: [
      "Chimney Rock State Park towers above the lake.",
      "Boat tours point out the film's locations.",
    ],
  },
  {
    slug: "mountain-lake-lodge-virginia",
    name: "Mountain Lake Lodge",
    titleSlug: "dirty-dancing",
    destinationSlug: "virginia",
    lat: 37.3565,
    lng: -80.534,
    kind: "hotel",
    address: "115 Hotel Cir, Pembroke, VA 24136, United States",
    sceneContext:
      "This stone mountain lodge was Kellerman's, the summer resort at the centre of the film.",
    howToVisit:
      "A working resort hotel that leans into its Dirty Dancing fame with themed weekends and tours; day visitors can dine and walk the grounds. It's high in the Virginia mountains.",
    nearbyTips: [
      "The lodge runs Dirty Dancing themed events.",
      "Trails and the old lake bed are on the grounds.",
    ],
  },

  // ===================== Cast Away =====================
  {
    slug: "monuriki-island",
    name: "Monuriki Island",
    titleSlug: "cast-away",
    destinationSlug: "fiji",
    lat: -17.608,
    lng: 177.043,
    kind: "nature",
    address: "Monuriki, Mamanuca Islands, Fiji",
    sceneContext:
      "This tiny uninhabited island is where Chuck washes ashore and survives alone, the real Pacific castaway isle of the film.",
    howToVisit:
      "Uninhabited and reached only by boat, on day trips and snorkelling tours from Nadi or the nearby Mamanuca resorts; there are no facilities, so bring everything. Landings are weather-dependent.",
    nearbyTips: [
      "Snorkel the reef offshore on the same trip.",
      "The Mamanuca resorts make the closest base.",
    ],
  },

  // ===================== Mad Max: Fury Road =====================
  {
    slug: "namib-desert",
    name: "Namib Desert",
    titleSlug: "mad-max-fury-road",
    destinationSlug: "namibia",
    lat: -22.9,
    lng: 14.7,
    kind: "nature",
    address: "Dorob National Park, near Swakopmund, Namibia",
    sceneContext:
      "The towering dunes and endless gravel plains here are the wasteland the film's ferocious chase tears across.",
    howToVisit:
      "The dunes around Swakopmund are reached on guided 4x4, quad or scenic-flight tours; the desert is protected, so stick to operators and permits. Swakopmund is the base town.",
    nearbyTips: [
      "Sandwich Harbour, where dunes meet the sea, is a classic 4x4 trip.",
      "Walvis Bay's lagoon nearby is full of flamingos.",
    ],
  },

  // ===================== Emily in Paris (added in the pre-launch audit) =====================
  {
    slug: "cafe-de-flore",
    name: "Café de Flore",
    titleSlug: "emily-in-paris",
    destinationSlug: "paris",
    lat: 48.8542,
    lng: 2.332,
    kind: "venue",
    address: "172 Bd Saint-Germain, 75006 Paris, France",
    sceneContext:
      "The storied Saint-Germain café, all red banquettes and brass, is one of the Paris institutions Emily drifts through between work and romance.",
    howToVisit:
      "A real, always-busy café open daily; prices match the address, so come for a coffee on the terrace and the people-watching rather than a bargain. It's on Boulevard Saint-Germain.",
    nearbyTips: [
      "Les Deux Magots next door is its old literary rival.",
      "The Saint-Germain-des-Prés church is across the boulevard.",
    ],
  },

  // ===================== Under the Tuscan Sun =====================
  {
    slug: "cortona",
    name: "Cortona",
    titleSlug: "under-the-tuscan-sun",
    destinationSlug: "tuscany",
    lat: 43.2745,
    lng: 11.9853,
    kind: "landmark",
    address: "Piazza della Repubblica, 52044 Cortona AR, Italy",
    sceneContext:
      "Cortona is the hill town where Frances puts down roots, and its steep lanes, the Piazza della Repubblica and the town-hall steps recur through the film as she builds a new life.",
    howToVisit:
      "Cortona sits on a ridge in eastern Tuscany, an easy day trip from Arezzo or a stop between Florence and Perugia. Walk up to Piazza della Repubblica, climb the palazzo steps and follow the ramparts for long views over the Val di Chiana.",
    nearbyTips: [
      "Climb to the Fortezza del Girifalco at the top of town for the widest views.",
      "The MAEC museum holds the Etruscan finds that give Cortona its ancient depth.",
    ],
  },
  {
    slug: "montepulciano",
    name: "Montepulciano",
    titleSlug: "under-the-tuscan-sun",
    destinationSlug: "tuscany",
    lat: 43.0975,
    lng: 11.7869,
    kind: "landmark",
    address: "Piazza Grande, 53045 Montepulciano SI, Italy",
    sceneContext:
      "The wine town of Montepulciano lends the film its festive, sun-washed Tuscany, its Piazza Grande and long climbing main street standing in for the story's Renaissance backdrop.",
    howToVisit:
      "Montepulciano crowns a ridge south-west of Cortona, about an hour by car through the Val d'Orcia. Walk up the Corso to Piazza Grande and duck into a cellar to taste the town's famous Vino Nobile.",
    nearbyTips: [
      "Pair it with a drive through the Val d'Orcia, Tuscany's postcard countryside.",
      "Pienza and Montalcino nearby complete a classic wine-country loop.",
    ],
  },
  {
    slug: "bramasole",
    name: "Bramasole",
    titleSlug: "under-the-tuscan-sun",
    destinationSlug: "tuscany",
    lat: 43.281,
    lng: 11.978,
    kind: "building",
    sceneContext:
      "Bramasole is the villa Frances buys and restores, the emotional centre of the film. The real house sits on the hillside just below Cortona, framed by cypresses and olive terraces.",
    howToVisit:
      "Bramasole is a private home, not a museum, so admire it only from the public lane and keep your distance out of respect for the residents. The surrounding Cortona countryside, all olive groves and long valley views, is the real reward.",
    nearbyTips: [
      "The lanes below Cortona are lined with the olive terraces and cypresses seen throughout the film.",
      "Base yourself in Cortona to explore the surrounding hills on foot or by car.",
    ],
  },

  // ===================== The Odyssey =====================
  {
    slug: "ait-benhaddou-troy",
    name: "Aït Benhaddou",
    titleSlug: "the-odyssey",
    destinationSlug: "ouarzazate",
    lat: 31.047,
    lng: -7.1318,
    kind: "landmark",
    address: "Aït Benhaddou, Ouarzazate Province, Morocco",
    sceneContext:
      "The ancient earthen ksar, a UNESCO-listed stack of kasbahs above a river, stood in for the walled city of Troy in the film's opening chapter.",
    howToVisit:
      "Aït Benhaddou is about 30 km from Ouarzazate, an easy half-day trip. Cross the river, climb through the fortified village to the granary at the top for the classic view, and go early or late to beat the tour buses and the midday heat.",
    nearbyTips: [
      "The Atlas Studios in Ouarzazate run tours of standing film sets.",
      "The Tizi n'Tichka pass toward Marrakech is one of Morocco's great drives.",
    ],
  },
  {
    slug: "essaouira-beach",
    name: "Essaouira Beach",
    titleSlug: "the-odyssey",
    destinationSlug: "essaouira",
    lat: 31.505,
    lng: -9.772,
    kind: "nature",
    sceneContext:
      "The broad Atlantic beach below Essaouira's ramparts stands in for the shore where the Trojan Horse is discovered and where Odysseus launches his fleet for the long voyage home.",
    howToVisit:
      "The beach runs for miles south from the medina and is free to walk at any time. The wind that made Essaouira a windsurfing capital is strongest in the afternoon, so mornings are calmest for a walk along the sand.",
    nearbyTips: [
      "The Skala de la Ville sea bastion frames the classic view back over the port.",
      "Argan cooperatives on the road inland press the region's famous oil.",
    ],
  },
  {
    slug: "voidokilia-beach",
    name: "Voidokilia Beach",
    titleSlug: "the-odyssey",
    destinationSlug: "messenia",
    lat: 36.9556,
    lng: 21.6664,
    kind: "nature",
    sceneContext:
      "This near-perfect crescent of white sand and clear shallows in Messenia lends the film the sun-blessed coast of the hero's Greek homeland.",
    howToVisit:
      "Voidokilia sits in a protected bay north of Pylos, with no road onto the sand, so park at the edge and walk in. Come early in summer, bring water and shade, and climb to Nestor's Cave and the old fort on the headland for the aerial-postcard view.",
    nearbyTips: [
      "The Gialova lagoon behind the beach is a birdwatching haven.",
      "Ancient Pylos and the Palace of Nestor are a short drive inland.",
    ],
  },
  {
    slug: "methoni-castle",
    name: "Methoni Castle",
    titleSlug: "the-odyssey",
    destinationSlug: "messenia",
    lat: 36.8189,
    lng: 21.7047,
    kind: "landmark",
    sceneContext:
      "The great sea-fortress of Methoni, reaching out into the water on the southern Messenian shore, brings its weathered, myth-worn stonework to the story.",
    howToVisit:
      "The castle is free to wander, a wide walled peninsula ending in the little octagonal Bourtzi tower on its own islet. There is almost no shade, so bring a hat; the village beside it has tavernas for after.",
    nearbyTips: [
      "The twin fortress of Koroni sits across the peninsula.",
      "Voidokilia and Pylos make an easy day's loop from here.",
    ],
  },
  {
    slug: "favignana-castle",
    name: "Castello di Santa Caterina",
    titleSlug: "the-odyssey",
    destinationSlug: "egadi-islands",
    lat: 37.9376,
    lng: 12.3216,
    kind: "landmark",
    sceneContext:
      "The old fort crowning the highest point of Favignana, in the Egadi Islands off Sicily, appears among the wind-swept island settings that stand in for the realm of Aeolus, keeper of the winds.",
    howToVisit:
      "Favignana is a short ferry from Trapani. The castle sits high above the town and is usually admired from below or on the hike up, since access can be restricted. Rent a bike to reach the island's coves and old tuna works.",
    nearbyTips: [
      "Cala Rossa's turquoise water is the island's most famous swim.",
      "The former Florio tuna cannery in town is now a museum.",
    ],
  },

  // ===================== The Devil Wears Prada 2 =====================
  {
    slug: "elias-clarke-building",
    name: "1221 Avenue of the Americas",
    titleSlug: "devil-wears-prada-2",
    destinationSlug: "new-york",
    lat: 40.7595,
    lng: -73.9814,
    kind: "building",
    address: "1221 Avenue of the Americas, New York, NY",
    sceneContext:
      "This Midtown skyscraper on Sixth Avenue returns as the exterior of Elias-Clarke, the publisher behind the fictional Runway magazine.",
    howToVisit:
      "It is a working office tower, so the draw is the street-level plaza and facade; admire it from Sixth Avenue between 48th and 49th, then wander down to Rockefeller Center a couple of blocks south.",
    nearbyTips: [
      "Rockefeller Center and its rooftop deck are two blocks away.",
      "The Museum of Modern Art (MoMA) is a short walk east.",
    ],
  },
  {
    slug: "amnh-runway-gala",
    name: "American Museum of Natural History",
    titleSlug: "devil-wears-prada-2",
    destinationSlug: "new-york",
    lat: 40.7813,
    lng: -73.974,
    kind: "landmark",
    address: "200 Central Park West, New York, NY",
    sceneContext:
      "The museum's grand Central Park West steps and rotunda set the stage for the film's glittering Runway gala.",
    howToVisit:
      "The museum is open to visitors daily on the west side of Central Park; you can climb the same front steps for free, and the park is right across the road.",
    nearbyTips: [
      "Central Park's western lakes and the Ramble are directly opposite.",
      "The Upper West Side's brownstone streets are a classic stroll.",
    ],
  },
  {
    slug: "galleria-vittorio-emanuele",
    name: "Galleria Vittorio Emanuele II",
    titleSlug: "devil-wears-prada-2",
    destinationSlug: "milan",
    lat: 45.4659,
    lng: 9.1899,
    kind: "landmark",
    address: "Piazza del Duomo, 20123 Milano MI, Italy",
    sceneContext:
      "The 19th-century glass-domed arcade beside the Duomo, all mosaic floors and luxury boutiques, gives Miranda a rare, elegant moment alone.",
    howToVisit:
      "The Galleria is a public passage linking the Duomo to La Scala and is free to walk through; go early or late to enjoy the light under the dome without the midday crush.",
    nearbyTips: [
      "Milan's Duomo and its rooftop terraces are at one end.",
      "La Scala opera house sits at the other.",
    ],
  },
  {
    slug: "brera-academy",
    name: "Accademia di Brera",
    titleSlug: "devil-wears-prada-2",
    destinationSlug: "milan",
    lat: 45.472,
    lng: 9.1876,
    kind: "building",
    address: "Via Brera, 28, 20121 Milano MI, Italy",
    sceneContext:
      "The courtyard of Milan's historic fine-arts academy in the Brera district stages the film's runway show.",
    howToVisit:
      "The academy is a working art school, but its courtyard and the adjoining Pinacoteca di Brera gallery are open to visitors; the surrounding Brera lanes are the city's most atmospheric quarter.",
    nearbyTips: [
      "The Pinacoteca di Brera holds masterpieces by Raphael and Caravaggio.",
      "Brera's cafes and design boutiques are made for an evening aperitivo.",
    ],
  },
  {
    slug: "villa-del-balbiano",
    name: "Villa del Balbiano",
    titleSlug: "devil-wears-prada-2",
    destinationSlug: "lake-como",
    lat: 45.9686,
    lng: 9.1739,
    kind: "building",
    sceneContext:
      "This 16th-century lakeside palazzo in Tremezzina, familiar from House of Gucci, hosts the film's glamorous Lake Como interlude.",
    howToVisit:
      "The villa is a private luxury estate let for stays and events rather than a public museum, so the best view is from the water; a Como boat tour glides past its gardens and those of its neighbours.",
    nearbyTips: [
      "The nearby villages of Brienno and Argegno cling to the shore.",
      "Bellagio, the lake's showpiece town, is a short ferry away.",
    ],
  },

  // ===================== Wuthering Heights (2026) =====================
  {
    slug: "healaugh-crag",
    name: "Healaugh Crag",
    titleSlug: "wuthering-heights",
    destinationSlug: "yorkshire-dales",
    lat: 54.385,
    lng: -1.98,
    kind: "nature",
    sceneContext:
      "The gritstone ridge above Healaugh in Swaledale is where Cathy waits for Heathcliff, looking down over the film's Wuthering Heights.",
    howToVisit:
      "Reach it on foot from the village of Healaugh near Reeth; the moor is open and exposed, so wear boots and take a map, and go on a clear day for the long valley views.",
    nearbyTips: [
      "The stone village of Reeth is the gateway to Swaledale.",
      "The moor road climbs west past old lead-mining ruins.",
    ],
  },
  {
    slug: "old-gang-mill",
    name: "Old Gang Smelting Mill",
    titleSlug: "wuthering-heights",
    destinationSlug: "yorkshire-dales",
    lat: 54.393,
    lng: -1.99,
    kind: "landmark",
    sceneContext:
      "The ruined lead-smelting mill on the moor below Healaugh Crag stands in for the estate's weathered, wind-scoured outbuildings.",
    howToVisit:
      "The atmospheric ruins sit beside the moor road above Reeth, in the Old Gang valley; the track is rough, so park considerately and walk the last stretch.",
    nearbyTips: [
      "The whole hillside is dotted with 19th-century lead-mining remains.",
      "Gunnerside Gill nearby has more dramatic mining ruins to explore.",
    ],
  },
  {
    slug: "swaledale",
    name: "Swaledale",
    titleSlug: "wuthering-heights",
    destinationSlug: "yorkshire-dales",
    lat: 54.38,
    lng: -2.06,
    kind: "nature",
    sceneContext:
      "The drystone-walled valley around Low Row gives the film its brooding, timeless Yorkshire, all stone barns, sheep pasture and open sky.",
    howToVisit:
      "The B6270 threads the length of Swaledale from Richmond up to Keld, past field barns and stone villages; it is one of the Dales' great slow drives or cycle routes.",
    nearbyTips: [
      "Keld sits where the Pennine Way meets the Coast to Coast path.",
      "Muker and Gunnerside are picture-perfect Dales villages en route.",
    ],
  },
];
