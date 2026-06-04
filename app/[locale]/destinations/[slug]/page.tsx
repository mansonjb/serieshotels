import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { LocationCard } from "@/components/LocationCard";
import { Stay22Map } from "@/components/Stay22Map";
import { TourBlock } from "@/components/TourBlock";
import {
  DESTINATIONS,
  getDestination,
  getTitle,
  locationsForDestination,
  titlesForDestination,
} from "@/lib/data";
import { destinationGallery, destinationImage } from "@/lib/images";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  localizeDestination,
  localizeLocation,
  localizeTitle,
  t,
  type Locale,
} from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const base = getDestination(slug);
  if (!base) return {};
  const dest = localizeDestination(base, loc);
  const dict = getDict(loc);
  const title = t(dict.destinationPage.filmingLocationsIn, { name: dest.name });
  return {
    title,
    description: dest.blurb.slice(0, 155),
    alternates: { canonical: `/${loc}/destinations/${slug}` },
    openGraph: {
      title,
      description: dest.blurb.slice(0, 155),
      type: "article",
      url: `${SITE_URL}/${loc}/destinations/${slug}`,
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);
  const base = getDestination(slug);
  if (!base) notFound();
  const dest = localizeDestination(base, loc);

  const locations = locationsForDestination(slug);
  const titles = titlesForDestination(slug);
  const url = `${SITE_URL}/${loc}/destinations/${slug}`;
  const heroImg = destinationImage(slug);
  const gallery = destinationGallery(slug);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: dest.name,
          url,
          description: dest.blurb,
          ...(dest.region && { addressRegion: dest.region }),
          address: {
            "@type": "PostalAddress",
            addressCountry: dest.country,
            ...(dest.region && { addressRegion: dest.region }),
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: dest.lat,
            longitude: dest.lng,
          },
        }}
      />

      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.nav.destinations, href: localePath(loc, "/destinations") },
          { name: dest.name },
        ]}
      />

      <header className="mt-6">
        <div
          className="h-2 w-24 rounded-full"
          style={{ background: `#${dest.accent}` }}
        />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {dest.country}
          {dest.region ? ` · ${dest.region}` : ""}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {t(dict.destinationPage.filmingLocationsIn, { name: dest.name })}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {dest.blurb}
        </p>
      </header>

      {heroImg && (
        <div className="mt-8">
          <Img
            src={heroImg}
            alt={dest.name}
            ratio="aspect-[21/9]"
            rounded="rounded-2xl"
            className="border border-line"
            sizes="(max-width: 1280px) 100vw, 1152px"
            priority
          />
        </div>
      )}

      <AffiliateDisclosure locale={loc} dict={dict} className="mt-8" />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Stay22Map
          lat={dest.lat}
          lng={dest.lng}
          label={dest.name}
          campaign={`dest-${slug}`}
          accent={dest.accent}
          dict={dict}
        />
        <TourBlock
          query={`${dest.name} tours`}
          place={dest.name}
          context={`dest-${slug}`}
          dict={dict}
        />
      </div>

      {gallery.length > 0 && (
        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <Img
              key={g}
              src={g}
              alt={`${dest.name} — ${i + 2}`}
              ratio="aspect-[4/3]"
              rounded="rounded-xl"
              className="border border-line"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          ))}
        </section>
      )}

      {titles.map((titleBase) => {
        const title = localizeTitle(titleBase, loc);
        const locs = locations.filter((l) => l.titleSlug === title.slug);
        return (
          <section key={title.slug} className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              <Link
                href={localePath(loc, `/titles/${title.slug}`)}
                className="hover:underline"
              >
                {title.name}
              </Link>
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {locs.map((l) => (
                <LocationCard
                  key={l.slug}
                  location={localizeLocation(l, loc)}
                  subtitle={title.name}
                  accent={title.accent}
                  locale={loc}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
