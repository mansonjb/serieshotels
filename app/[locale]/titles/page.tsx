import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TitleCard } from "@/components/TitleCard";
import { JsonLd } from "@/components/JsonLd";
import { TITLES, locationsForTitle } from "@/lib/data";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  localizeTitle,
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
    title: dict.titlesIndex.heading,
    description: dict.titlesIndex.intro,
    alternates: { canonical: `/${locale}/titles` },
  };
}

export default async function TitlesIndexPage({
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
          { name: dict.titlesIndex.heading },
        ]}
      />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        {dict.titlesIndex.heading}
      </h1>
      <p className="mt-3 text-muted">{dict.titlesIndex.intro}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TITLES.map((tt) => (
          <TitleCard
            key={tt.slug}
            title={localizeTitle(tt, loc)}
            locationCount={locationsForTitle(tt.slug).length}
            locale={loc}
            dict={dict}
          />
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: TITLES.map((tt, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/${loc}/titles/${tt.slug}`,
            name: tt.name,
          })),
        }}
      />
    </main>
  );
}
