import type { ComponentType } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Editorial guide registry. The long-form prose lives in /content/*.mdx with a
 * per-locale variant (<slug>.<locale>.mdx) written by `pnpm translate`; until
 * translated those variants are English copies, so the build is always green.
 */
type Loader = () => Promise<{ default: ComponentType }>;

export type Guide = {
  slug: string;
  title: string;
  description: string;
  readingMinutes: number;
  loaders: Record<Locale, Loader>;
};

export const GUIDES: Guide[] = [
  {
    slug: "set-jetting-101",
    title: "Set-jetting 101: visiting filming locations the right way",
    description:
      "A practical primer on planning a trip around film and TV locations, how to find the real spot, when to go, and how to visit without being a nuisance.",
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
    title: "The Game of Thrones location trail: Croatia, Spain, Iceland & beyond",
    description:
      "How the show's real-world sets fit together across Europe, from King's Landing in Dubrovnik to Dorne in Seville and Dragonstone on the Basque coast.",
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
    title: "A European set-jetting road trip: three loops to plan around",
    description:
      "Three ready-made routes that string famous filming locations together across the Mediterranean, Britain and Ireland, and Iberia.",
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

export function loadGuide(guide: Guide, locale: Locale): Promise<{ default: ComponentType }> {
  return (guide.loaders[locale] ?? guide.loaders.en)();
}
