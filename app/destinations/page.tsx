import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DestinationCard } from "@/components/DestinationCard";
import { JsonLd } from "@/components/JsonLd";
import { DESTINATIONS, destinationStats } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Filming-location hubs you can actually travel to — from Dubrovnik and Taormina to the Golden Circle and Paris.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Destinations" }]}
      />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        Destinations
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Each place gathers every filming spot we&apos;ve mapped there, plus where
        to stay and what to book nearby.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <DestinationCard
            key={d.slug}
            destination={d}
            stats={destinationStats(d.slug)}
          />
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: DESTINATIONS.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/destinations/${d.slug}`,
            name: `${d.name}, ${d.country}`,
          })),
        }}
      />
    </main>
  );
}
