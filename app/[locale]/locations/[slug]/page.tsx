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
  LOCATIONS,
  destinationForLocation,
  getLocation,
  getTitle,
  locationsForDestination,
  titleForLocation,
} from "@/lib/data";
import { locationGallery, locationImage } from "@/lib/images";
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
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const base = getLocation(slug);
  if (!base) return {};
  const location = localizeLocation(base, loc);
  const dest = destinationForLocation(base);
  const name = `${location.name}${dest ? ` · ${dest.name}` : ""}`;
  return {
    title: name,
    description: location.sceneContext.slice(0, 155),
    alternates: { canonical: `/${loc}/locations/${slug}` },
    openGraph: {
      title: name,
      description: location.sceneContext.slice(0, 155),
      type: "article",
      url: `${SITE_URL}/${loc}/locations/${slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);
  const base = getLocation(slug);
  if (!base) notFound();

  const titleBase = titleForLocation(base);
  const destBase = destinationForLocation(base);
  if (!titleBase || !destBase) notFound();

  const location = localizeLocation(base, loc);
  const title = localizeTitle(titleBase, loc);
  const dest = localizeDestination(destBase, loc);

  const url = `${SITE_URL}/${loc}/locations/${slug}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
  const nearby = locationsForDestination(dest.slug).filter(
    (l) => l.slug !== location.slug,
  );
  const heroImg = locationImage(slug);
  const sceneImg = locationGallery(slug)[0];

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: location.name,
          url,
          description: location.sceneContext,
          ...(location.address && {
            address: {
              "@type": "PostalAddress",
              streetAddress: location.address,
            },
          }),
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.lat,
            longitude: location.lng,
          },
          isPartOf: {
            "@type": "TouristDestination",
            name: dest.name,
            url: `${SITE_URL}/${loc}/destinations/${dest.slug}`,
          },
        }}
      />

      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.nav.destinations, href: localePath(loc, "/destinations") },
          { name: dest.name, href: localePath(loc, `/destinations/${dest.slug}`) },
          { name: location.name },
        ]}
      />

      <header className="mt-6">
        <div
          className="h-2 w-24 rounded-full"
          style={{ background: `#${title.accent}` }}
        />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {location.kind} · {dest.name}, {dest.country}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {location.name}
        </h1>
        <p className="mt-4 text-muted">
          {dict.locationPage.aFilmingLocationFrom
            .split(/(\{title\}|\{destination\})/)
            .map((part, i) => {
              if (part === "{title}") {
                return (
                  <Link
                    key={i}
                    href={localePath(loc, `/titles/${title.slug}`)}
                    className="font-semibold text-ink underline underline-offset-2"
                  >
                    {title.name}
                  </Link>
                );
              }
              if (part === "{destination}") {
                return (
                  <Link
                    key={i}
                    href={localePath(loc, `/destinations/${dest.slug}`)}
                    className="font-semibold text-ink underline underline-offset-2"
                  >
                    {dest.name}
                  </Link>
                );
              }
              return <span key={i}>{part}</span>;
            })}
        </p>
      </header>

      {heroImg && (
        <div className="mt-8">
          <Img
            src={heroImg}
            alt={location.name}
            ratio="aspect-[21/9]"
            rounded="rounded-2xl"
            className="border border-line"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
        </div>
      )}

      <AffiliateDisclosure locale={loc} dict={dict} className="mt-8" />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-ink">
          {dict.locationPage.theScene}
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink/90">
          {location.sceneContext}
        </p>
        {sceneImg && (
          <div className="mt-6">
            <Img
              src={sceneImg}
              alt={t(dict.locationPage.closerLook, { name: location.name })}
              ratio="aspect-[16/9]"
              rounded="rounded-2xl"
              className="border border-line"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-ink">
          {dict.locationPage.howToVisit}
        </h2>
        <p className="mt-3 leading-relaxed text-ink/90">{location.howToVisit}</p>
        {location.address && (
          <p className="mt-4 text-sm text-muted">
            <span className="font-semibold text-ink">
              {dict.locationPage.address}:
            </span>{" "}
            {location.address} ·{" "}
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              {dict.locationPage.openInMaps}
            </a>
          </p>
        )}
        {location.nearbyTips && location.nearbyTips.length > 0 && (
          <ul className="mt-5 space-y-2">
            {location.nearbyTips.map((tip) => (
              <li key={tip} className="flex gap-2.5 text-ink/90">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: `#${dest.accent}` }}
                  aria-hidden
                />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-12 space-y-6">
        <Stay22Map
          lat={location.lat}
          lng={location.lng}
          label={location.name}
          campaign={`loc-${slug}`}
          accent={dest.accent}
          dict={dict}
        />
        <TourBlock
          query={location.name}
          place={dest.name}
          context={`loc-${slug}`}
          dict={dict}
        />
      </div>

      {nearby.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-ink">
            {t(dict.locationPage.more, { name: dest.name })}
          </h2>
          <div className="mt-6 grid gap-4">
            {nearby.map((l) => {
              const tb = getTitle(l.titleSlug);
              return (
                <LocationCard
                  key={l.slug}
                  location={localizeLocation(l, loc)}
                  subtitle={tb ? localizeTitle(tb, loc).name : dest.name}
                  accent={tb?.accent ?? dest.accent}
                  locale={loc}
                />
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
