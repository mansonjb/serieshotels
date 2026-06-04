import type { ComponentType } from "react";

/**
 * Editorial guide registry. The long-form prose lives in /content/*.mdx; this
 * file is the single source of truth for which guides exist, their metadata,
 * and how to lazy-load each compiled MDX module.
 */
export type Guide = {
  slug: string;
  title: string;
  description: string;
  /** Hand-set reading time in minutes. */
  readingMinutes: number;
  /** Dynamic import of the compiled MDX module. */
  load: () => Promise<{ default: ComponentType }>;
};

export const GUIDES: Guide[] = [
  {
    slug: "set-jetting-101",
    title: "Set-jetting 101: visiting filming locations the right way",
    description:
      "A practical primer on planning a trip around film and TV locations — how to find the real spot, when to go, and how to visit without being a nuisance.",
    readingMinutes: 6,
    load: () => import("./set-jetting-101.mdx"),
  },
  {
    slug: "game-of-thrones-locations",
    title: "The Game of Thrones location trail: Croatia, Spain, Iceland & beyond",
    description:
      "How the show's real-world sets fit together across Europe — from King's Landing in Dubrovnik to Dorne in Seville and Dragonstone on the Basque coast.",
    readingMinutes: 5,
    load: () => import("./game-of-thrones-locations.mdx"),
  },
  {
    slug: "european-set-jetting-itinerary",
    title: "A European set-jetting road trip: three loops to plan around",
    description:
      "Three ready-made routes that string famous filming locations together across the Mediterranean, Britain and Ireland, and Iberia.",
    readingMinutes: 6,
    load: () => import("./european-set-jetting-itinerary.mdx"),
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
