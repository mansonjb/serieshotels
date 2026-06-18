import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { LocationCard } from "@/components/LocationCard";
import { Stay22Map } from "@/components/Stay22Map";
import { TourBlock } from "@/components/TourBlock";
import { TrailerEmbed } from "@/components/TrailerEmbed";
import type { Title } from "@/data/types";
import {
  TITLES,
  destinationsForTitle,
  getTitle,
  locationsForTitle,
} from "@/lib/data";
import { titleImage } from "@/lib/images";
import { titleTrailer } from "@/lib/trailers";
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
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { abs, alternates, clip, ogImages, trailerVideo } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return TITLES.map((tt) => ({ slug: tt.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const base = getTitle(slug);
  if (!base) return {};
  const title = localizeTitle(base, loc);
  const dict = getDict(loc);
  const name = t(dict.titlePage.whereFilmed, { name: title.name });
  const heroImg = titleImage(base);
  const desc = clip(title.synopsis);
  return {
    title: name,
    description: desc,
    alternates: alternates(loc, `/titles/${slug}`),
    openGraph: {
      title: `${name} · ${SITE_NAME}`,
      description: desc,
      type: "article",
      url: `${SITE_URL}/${loc}/titles/${slug}`,
      images: ogImages(heroImg, title.name),
    },
    twitter: { card: "summary_large_image", images: ogImages(heroImg, title.name) },
  };
}

function yearLabel(tt: Title): string {
  if (tt.type === "movie") return String(tt.year);
  return `${tt.year}-${tt.endYear ?? "present"}`;
}

export default async function TitlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);
  const base = getTitle(slug);
  if (!base) notFound();
  const title = localizeTitle(base, loc);

  const locations = locationsForTitle(slug);
  const destinations = destinationsForTitle(slug);
  const url = `${SITE_URL}/${loc}/titles/${slug}`;
  const heroImg = titleImage(base);
  const trailer = titleTrailer(slug);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": title.type === "series" ? "TVSeries" : "Movie",
          name: title.name,
          description: title.synopsis,
          genre: title.genres,
          inLanguage: loc,
          ...(heroImg ? { image: abs(heroImg) } : {}),
          ...(title.type === "movie"
            ? { datePublished: String(title.year) }
            : {
                startDate: String(title.year),
                ...(title.endYear ? { endDate: String(title.endYear) } : {}),
              }),
          ...(trailer
            ? { trailer: trailerVideo(trailer, `${title.name} — trailer`) }
            : {}),
          url,
          contentLocation: locations.map((l) => ({
            "@type": "Place",
            name: l.name,
            geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
          })),
        }}
      />

      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.nav.titles, href: localePath(loc, "/titles") },
          { name: title.name },
        ]}
      />

      <header className="mt-6">
        <div
          className="h-2 w-24 rounded-full"
          style={{ background: `#${title.accent}` }}
        />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {title.type === "series" ? dict.labels.series : dict.labels.film} ·{" "}
          {yearLabel(title)} · {title.genres.join(" · ")}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {t(dict.titlePage.whereFilmed, { name: title.name })}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {title.synopsis}
        </p>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {t(dict.titlePage.across, {
            n: locations.length,
            m: destinations.length,
          })}
        </p>
      </header>

      {trailer && (
        <div className="mt-8">
          <TrailerEmbed youtubeId={trailer} dict={dict} />
        </div>
      )}

      {heroImg && (
        <div className="mt-8">
          <Img
            src={heroImg}
            alt={title.name}
            ratio="aspect-[21/9]"
            rounded="rounded-2xl"
            className="border border-line"
            sizes="(max-width: 1280px) 100vw, 1152px"
            priority={!trailer}
          />
        </div>
      )}
      {destinations.map((destBase) => {
        const dest = localizeDestination(destBase, loc);
        const locs = locations.filter((l) => l.destinationSlug === dest.slug);
        return (
          <section key={dest.slug} className="mt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-bold text-ink">
                <Link
                  href={localePath(loc, `/destinations/${dest.slug}`)}
                  className="hover:underline"
                >
                  {dest.name}
                </Link>
                <span className="text-muted">, {dest.country}</span>
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {locs.length}{" "}
                {locs.length === 1 ? dict.labels.spot : dict.labels.spots}
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              {locs.map((l) => (
                <LocationCard
                  key={l.slug}
                  location={localizeLocation(l, loc)}
                  subtitle={dest.name}
                  accent={title.accent}
                  locale={loc}
                />
              ))}
            </div>

            <div className="mt-6 space-y-6">
              <Stay22Map
                lat={dest.lat}
                lng={dest.lng}
                label={dest.name}
                campaign={`${slug}-${dest.slug}`}
                accent={dest.accent}
                dict={dict}
              />
              <TourBlock
                query={`${dest.name} tours`}
                place={dest.name}
                context={`title-${slug}-${dest.slug}`}
                dict={dict}
              />
            </div>
          </section>
        );
      })}
    </main>
  );
}
