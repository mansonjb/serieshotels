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
];
