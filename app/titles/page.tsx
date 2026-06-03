import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TitleCard } from "@/components/TitleCard";
import { JsonLd } from "@/components/JsonLd";
import { TITLES, locationsForTitle } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Series & Films",
  description:
    "Every series and film we map to real, visitable filming locations — from Westeros stand-ins to a bookable Sicilian resort.",
  alternates: { canonical: "/titles" },
};

export default function TitlesIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Series & Films" }]}
      />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        Series &amp; Films
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Pick a title to see where each scene was really shot — with maps, how to
        visit, and where to stay nearby.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TITLES.map((t) => (
          <TitleCard
            key={t.slug}
            title={t}
            locationCount={locationsForTitle(t.slug).length}
          />
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: TITLES.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/titles/${t.slug}`,
            name: t.name,
          })),
        }}
      />
    </main>
  );
}
