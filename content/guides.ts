import type { ComponentType } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Editorial guide registry. The long-form prose lives in /content/*.mdx with a
 * per-locale variant (<slug>.<locale>.mdx). Title + description are localized
 * here (read via localizeGuide) so the H1, meta and schema match the body.
 */
type Loader = () => Promise<{ default: ComponentType }>;
type I18nText = Record<Locale, string>;

export type Guide = {
  slug: string;
  title: I18nText;
  description: I18nText;
  datePublished: string;
  readingMinutes: number;
  loaders: Record<Locale, Loader>;
};

export const GUIDES: Guide[] = [
  {
    slug: "set-jetting-101",
    title: {
      en: "Set-jetting 101: visiting filming locations the right way",
      fr: "Le set-jetting pour les nuls : visiter les lieux de tournage comme il faut",
      de: "Set-Jetting 101: Drehorte richtig besuchen",
      es: "Set-jetting 101: visitar lugares de rodaje como se debe",
      it: "Set-jetting 101: visitare i luoghi delle riprese nel modo giusto",
    },
    description: {
      en: "A practical primer on planning a trip around film and TV locations, how to find the real spot, when to go, and how to visit without being a nuisance.",
      fr: "Un guide pratique pour organiser un voyage autour des lieux de tournage : trouver le vrai décor, quand y aller et comment visiter sans déranger.",
      de: "Ein praktischer Leitfaden, um eine Reise rund um Film- und Seriendrehorte zu planen: den echten Ort finden, den besten Zeitpunkt wählen und besuchen, ohne zu stören.",
      es: "Una guía práctica para planear un viaje en torno a localizaciones de cine y series: encontrar el lugar real, cuándo ir y cómo visitarlo sin molestar.",
      it: "Una guida pratica per organizzare un viaggio attorno ai luoghi di film e serie: trovare il posto vero, quando andare e come visitarlo senza disturbare.",
    },
    datePublished: "2026-06-01",
    readingMinutes: 6,
    loaders: {
      en: () => import("./set-jetting-101.mdx"),
      fr: () => import("./set-jetting-101.fr.mdx"),
      de: () => import("./set-jetting-101.de.mdx"),
      es: () => import("./set-jetting-101.es.mdx"),
      it: () => import("./set-jetting-101.it.mdx"),
    },
  },
  {
    slug: "game-of-thrones-locations",
    title: {
      en: "The Game of Thrones location trail: Croatia, Spain, Iceland & beyond",
      fr: "Sur les traces de Game of Thrones : Croatie, Espagne, Islande et plus",
      de: "Auf den Spuren von Game of Thrones: Kroatien, Spanien, Island und mehr",
      es: "La ruta de Juego de Tronos: Croacia, España, Islandia y más",
      it: "Sulle tracce del Trono di Spade: Croazia, Spagna, Islanda e oltre",
    },
    description: {
      en: "How the show's real-world sets fit together across Europe, from King's Landing in Dubrovnik to Dorne in Seville and Dragonstone on the Basque coast.",
      fr: "Comment les décors réels de la série s'enchaînent à travers l'Europe, de Port-Réal à Dubrovnik à Dorne à Séville et Peyredragon sur la côte basque.",
      de: "Wie sich die realen Drehorte der Serie quer durch Europa verbinden, von Königsmund in Dubrovnik über Dorne in Sevilla bis Drachenstein an der baskischen Küste.",
      es: "Cómo encajan los escenarios reales de la serie por toda Europa, de Desembarco del Rey en Dubrovnik a Dorne en Sevilla y Rocadragón en la costa vasca.",
      it: "Come si collegano i set reali della serie in tutta Europa, da Approdo del Re a Dubrovnik a Dorne a Siviglia fino a Roccia del Drago sulla costa basca.",
    },
    datePublished: "2026-06-01",
    readingMinutes: 5,
    loaders: {
      en: () => import("./game-of-thrones-locations.mdx"),
      fr: () => import("./game-of-thrones-locations.fr.mdx"),
      de: () => import("./game-of-thrones-locations.de.mdx"),
      es: () => import("./game-of-thrones-locations.es.mdx"),
      it: () => import("./game-of-thrones-locations.it.mdx"),
    },
  },
  {
    slug: "european-set-jetting-itinerary",
    title: {
      en: "A European set-jetting road trip: three loops to plan around",
      fr: "Road trip set-jetting en Europe : trois boucles à suivre",
      de: "Ein Set-Jetting-Roadtrip durch Europa: drei Routen zum Nachfahren",
      es: "Un viaje set-jetting por Europa: tres rutas para organizarte",
      it: "Un road trip set-jetting in Europa: tre anelli da seguire",
    },
    description: {
      en: "Three ready-made routes that string famous filming locations together across the Mediterranean, Britain and Ireland, and Iberia.",
      fr: "Trois itinéraires clés en main qui relient des lieux de tournage célèbres à travers la Méditerranée, la Grande-Bretagne et l'Irlande, et la péninsule Ibérique.",
      de: "Drei fertige Routen, die berühmte Drehorte quer durch das Mittelmeer, Großbritannien und Irland sowie die Iberische Halbinsel verbinden.",
      es: "Tres rutas listas para seguir que enlazan localizaciones famosas por el Mediterráneo, Gran Bretaña e Irlanda, y la península ibérica.",
      it: "Tre itinerari pronti all'uso che collegano celebri luoghi di ripresa attraverso il Mediterraneo, Gran Bretagna e Irlanda, e la penisola iberica.",
    },
    datePublished: "2026-06-01",
    readingMinutes: 6,
    loaders: {
      en: () => import("./european-set-jetting-itinerary.mdx"),
      fr: () => import("./european-set-jetting-itinerary.fr.mdx"),
      de: () => import("./european-set-jetting-itinerary.de.mdx"),
      es: () => import("./european-set-jetting-itinerary.es.mdx"),
      it: () => import("./european-set-jetting-itinerary.it.mdx"),
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** Localized title + description for a guide (English fallback). */
export function localizeGuide(g: Guide, locale: Locale) {
  return {
    title: g.title[locale] ?? g.title.en,
    description: g.description[locale] ?? g.description.en,
  };
}

export function loadGuide(guide: Guide, locale: Locale): Promise<{ default: ComponentType }> {
  return (guide.loaders[locale] ?? guide.loaders.en)();
}
