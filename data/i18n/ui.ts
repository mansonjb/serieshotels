/**
 * English UI dictionary, the source of truth for every interface string.
 * `pnpm translate` produces fr/de/es/it overlays in data/generated/i18n/.
 * Placeholders in {braces} must survive translation (the script is told so).
 */
export const UI_EN = {
  nav: {
    titles: "Series & Films",
    destinations: "Destinations",
    guides: "Guides",
    about: "About",
  },
  hero: {
    eyebrow: "Set-jetting travel guide",
    title: "Visit the real places behind your favourite films and series.",
    subtitle:
      "A set-jetting travel guide: the real, visitable filming locations behind hit films and series, with maps, how-to-visit notes, tours, and where to stay nearby.",
    cta1: "Browse series & films",
    cta2: "Explore destinations",
  },
  home: {
    onScreen: "On screen",
    onMap: "On the map",
    allTitles: "All titles",
    allDestinations: "All destinations",
    howItWorks: "How it works",
    steps: [
      { t: "Pick a show", b: "Browse series and films by the places they were shot." },
      {
        t: "Find the real spots",
        b: "Each location comes with the scene, the exact map point, and how to actually visit.",
      },
      {
        t: "Book stay & tours",
        b: "Compare nearby hotels and book tours, tickets and cars in a couple of taps.",
      },
    ],
  },
  labels: {
    series: "Series",
    film: "Film",
    spot: "spot",
    spots: "spots",
    work: "work",
    works: "works",
    location: "location",
    locations: "locations",
    destination: "destination",
    destinations: "destinations",
    minRead: "min read",
    guide: "Guide",
  },
  titlesIndex: {
    heading: "Series & Films",
    intro:
      "Pick a title to see where each scene was really shot, with maps, how to visit, and where to stay nearby.",
  },
  destinationsIndex: {
    heading: "Destinations",
    intro:
      "Each place gathers every filming spot we've mapped there, plus where to stay and what to book nearby.",
  },
  guidesIndex: {
    heading: "Guides",
    intro: "Long-form, practical reading on planning trips around the screen.",
  },
  titlePage: {
    whereFilmed: "Where {name} was filmed",
    across: "{n} locations across {m} destinations",
  },
  destinationPage: {
    filmingLocationsIn: "Filming locations in {name}",
  },
  locationPage: {
    aFilmingLocationFrom: "A filming location from {title} in {destination}.",
    theScene: "The scene",
    howToVisit: "How to visit",
    address: "Address",
    openInMaps: "Open in Google Maps",
    closerLook: "{name}, a closer look",
    more: "More to film-spot in {name}",
  },
  trailer: {
    eyebrow: "On screen",
    title: "Watch the official trailer",
    note: "Official trailer via YouTube, see the real locations as they appear on screen.",
  },
  stay22: {
    whereToStay: "Where to stay",
    hotelsNear: "Hotels near {name}",
    sponsored: "Stay22 · sponsored",
    browse: "Browse hotels near {name}",
    note: "Same hotels, same prices, Stay22 just sends you to whichever site is cheapest today, and we earn a small commission if you book.",
  },
  tours: {
    eyebrow: "Make a day of it",
    title: "Tours, tickets & getting there",
    viator: "Tours on Viator",
    gyg: "Tours on GetYourGuide",
    tiqets: "Tickets on Tiqets",
    cars: "Rent a car",
    note: "Affiliate links, booking through them supports the site at no extra cost to you.",
  },
  disclosure: {
    text: "Some links are affiliate links, we may earn a commission at no extra cost to you.",
    how: "How this works",
  },
  footer: {
    explore: "Explore",
    site: "Site",
    affiliateDisclosure: "Affiliate disclosure",
    tagline:
      "Visit the real places where your favourite films and series were shot.",
    rights: "Real places only, no copyrighted stills or posters.",
  },
  breadcrumb: { home: "Home" },
  notFound: {
    code: "404",
    title: "This scene didn't make the cut.",
    body: "The page you're after doesn't exist. Try the series, the map, or head back to the start.",
    home: "Back home",
    browse: "Browse series",
  },
  langName: "English",
  aboutPage: {
    title: "About {site}",
    blocks: [
      {
        body: "{site} is a set-jetting travel guide. We map the real, visitable places where films and series were shot, and pair each one with what you actually need to plan a visit: the scene, the exact point on the map, how to get there, and where to stay nearby.",
      },
      {
        heading: "How the data is built",
        body: "Every location is entered by hand into a typed dataset and cross-checked against production sources, regional film commissions and local tourism boards. We only list spots that are genuinely accessible, public landmarks, ticketed monuments, bookable hotels, and we write the scene notes and visiting tips in our own words.",
      },
      {
        heading: "No copyrighted imagery",
        body: "You will not find posters or studio logos here. The screen content belongs to its makers; we point you at the real-world places, with photos of those places and the official trailers, not borrowed stills.",
      },
      {
        heading: "How we keep the lights on",
        body: "Some links are affiliate links, hotels through Stay22, tours and tickets through partners like Viator, GetYourGuide and Tiqets, and car rental through DiscoverCars. If you book through one we may earn a small commission, at no extra cost to you. It never changes which places we list or what we say about them.",
      },
    ],
  },
  disclosurePage: {
    title: "Affiliate disclosure",
    blocks: [
      {
        body: "{site} is reader-supported. Some of the outbound links on this site are affiliate links, which means we may earn a commission if you make a booking or purchase after clicking one, at no extra cost to you. You pay the same price you would have paid anyway.",
      },
      {
        heading: "Who we work with",
        body: "Stay22 for hotels and accommodation; Viator and GetYourGuide for tours and activities; Tiqets for attraction tickets; and DiscoverCars for car rental.",
      },
      {
        heading: "Our promise",
        body: "Affiliate relationships never decide which locations we feature or what we say about them. We list a place because it is a real, worthwhile filming location, full stop. Commission has no bearing on the scene notes, the visiting advice, or the order things appear in.",
      },
    ],
  },
  faq: {
    heading: "Good to know",
    whatFilmedLoc: "What was filmed at {name}?",
    canVisit: "Can you visit {name}?",
    whereLoc: "Where is {name}?",
    whereLocAnswer: "{name} is a real filming location in {destination}.",
    whatFilmedDest: "What was filmed in {name}?",
    whatFilmedDestAnswer: "{name} stands in for scenes from {titles}.",
    stay: "Where should I stay to visit the {name} locations?",
    stayAnswer: "Use the map above to compare hotels right next to the filming spots, at the same prices you would pay anyway.",
  },
  consent: {
    message: "We use cookies and third-party embeds (a hotel map and video) to run the site and power affiliate features.",
    accept: "Accept",
    decline: "Decline",
    loadEmbed: "Load content",
    loadNote: "This loads a third-party widget that may set cookies.",
  },
  privacyPage: {
    title: "Privacy & cookies",
    blocks: [
      { body: "{site} is a reader-supported travel guide. We keep data to a minimum: you can browse without an account, and we never sell personal data." },
      { heading: "Cookies", body: "We use one essential cookie to remember your language and your cookie choice. We set no advertising or tracking cookies." },
      { heading: "Third-party embeds", body: "Some pages embed a Stay22 hotel map and YouTube video (in privacy-enhanced mode). These load only after you accept cookies or click to load them, and may then set their own cookies under their own policies." },
      { heading: "Affiliate links", body: "Some outbound links are affiliate links. If you book through one we may earn a commission at no extra cost to you. See the affiliate disclosure for details." },
      { heading: "Your rights", body: "Under the GDPR you can ask to access, correct or delete any personal data we hold. As we store no account data, this usually just means clearing your browser cookies." },
    ],
  },
  hotels: {
    heading: "Top hotels in {name}",
    intro: "A handpicked selection of well-rated stays right by the filming locations.",
    check: "Check availability",
    reviews: "reviews",
    sponsored: "Affiliate · Stay22",
  },
  destGuide: {
    heading: "Visiting {name}: a set-jetting guide",
  },
} as const;

export type UI = typeof UI_EN;
