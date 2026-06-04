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
      "The sea-facing ramparts and the old harbour stood in for King's Landing throughout the series — the walk along the walls frames the same rooftops and bays you'll recognise from the capital's exterior shots.",
    howToVisit:
      "Buy a timed ticket for the full circuit of the walls (a one-way loop of roughly two kilometres, mostly stairs). Go at opening or late afternoon to dodge cruise crowds and the heat; allow 60–90 minutes.",
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
      "The farmyard and tower at this National Trust estate were built out into Winterfell's courtyard — the spot where the Stark household gathers in the very first episode.",
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
      "Book a timed ticket online well ahead — it sells out daily, especially in spring. Go first thing to walk the gardens before the heat and crowds; allow at least 90 minutes.",
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
      "This former convent turned cliff-top hotel was the real 'White Lotus Sicily' — its terraces, pool and sea views are the resort you watch the guests fall apart in.",
    howToVisit:
      "It's a working five-star hotel, so the grounds are for guests and rooms book up far ahead for summer. If you're not staying, you can often reserve a drink or lunch on the terrace — call ahead to check.",
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
      "Grab a granita and brioche on the way up — a Sicilian breakfast ritual.",
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
      "A guest-only resort on the island's quieter north-west coast; villas book up well ahead. Non-guests can sometimes arrange a meal at the restaurants — enquire directly.",
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
      "The most ornate bridge in Paris — gilded statues, lamp posts and all — turns up in the series' romantic and establishing beats over the Seine.",
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
      "The arcaded royal garden — and the striped Buren columns in its forecourt — feature as one of Emily's elegant Right Bank strolls.",
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
      "This medieval stronghold played Castle Leoch, seat of Clan MacKenzie — the same courtyard that earlier stood in for Winterfell in the Game of Thrones pilot.",
    howToVisit:
      "Run by Historic Environment Scotland with paid entry; the excellent audio guide leans into the screen history. About an hour from both Edinburgh and Glasgow. Allow 60–90 minutes.",
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
      "The weathered tower house is the exterior of Lallybroch, the Fraser family home — one of the most recognised facades in the whole series.",
    howToVisit:
      "It sits on the private Hopetoun Estate; pay the small access fee at the estate before driving in. Only the exterior can be visited — the inside isn't open — but the courtyard is the photo everyone comes for.",
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
      "Wander the cobbled streets for free; the National Trust palace and garden have paid entry. It's a small place — an hour or two covers it — on the north shore of the Firth of Forth.",
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
      "Free and open year-round; it's a drive through on the A82 with marked viewpoints and trailheads. The Glencoe Visitor Centre explains the geology and history. Weather changes fast — pack layers.",
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
      "The graceful curved railway viaduct is the one the Hogwarts Express steams across — most famously with a flying car in pursuit.",
    howToVisit:
      "Park at the Glenfinnan visitor car park and walk up the trail to the viewpoint (15–20 minutes). Time it for the Jacobite steam train crossing, which runs daily in season — check the timetable before you go.",
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
      "The castle's outer bailey is where the first films staged Harry's broomstick flying lessons — the lawns Madam Hooch teaches on.",
    howToVisit:
      "Paid entry; the castle runs daily broomstick-flying sessions on the same lawns, which kids love. It's still a family home, so opening is seasonal — check dates. Allow half a day.",
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
      "Visits are by guided tour only, booked in advance — you can't drive into the set itself. Tours leave from the nearby ticket centre; the Green Dragon Inn pours a complimentary ale at the end. Allow about half a day.",
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
      "Book a Crossing shuttle ahead in summer — parking is limited.",
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
      "A public beach with a seasonal taverna and sunbed hire; the water is clear and calm. Go by car or scooter — the road winds down through pine forest. Mornings are quietest.",
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
      "An exterior-only stop — it's a functioning central bank. The best vantage is from across Plaza de Cibeles, one of Madrid's grandest junctions.",
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
      "The untouched medieval quarter — towers, palaces and stone lanes — doubled as the streets of King's Landing, needing barely any set dressing.",
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
];
