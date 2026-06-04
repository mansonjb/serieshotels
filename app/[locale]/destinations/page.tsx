import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DestinationCard } from "@/components/DestinationCard";
import { JsonLd } from "@/components/JsonLd";
import { DESTINATIONS, destinationStats } from "@/lib/data";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  localizeDestination,
  type Locale,
} from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : DEFAULT_LOCALE);
  return {
    title: dict.destinationsIndex.heading,
    description: dict.destinationsIndex.intro,
    alternates: { canonical: `/${locale}/destinations` },
  };
}

export default async function DestinationsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.destinationsIndex.heading },
        ]}
      />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        {dict.destinationsIndex.heading}
      </h1>
      <p className="mt-3 max-w-xl text-muted">{dict.destinationsIndex.intro}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <DestinationCard
            key={d.slug}
            destination={localizeDestination(d, loc)}
            stats={destinationStats(d.slug)}
            locale={loc}
            dict={dict}
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
            url: `${SITE_URL}/${loc}/destinations/${d.slug}`,
            name: `${d.name}, ${d.country}`,
          })),
        }}
      />
    </main>
  );
}
