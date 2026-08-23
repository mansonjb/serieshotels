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
import { Faq } from "@/components/Faq";
import { PhotoCredit } from "@/components/PhotoCredit";
import { RelatedTitles } from "@/components/RelatedTitles";
import { TitleFacts } from "@/components/TitleFacts";
import { GuideProse } from "@/components/GuideProse";
import { titleGuide } from "@/lib/titleGuides";
import type { Title } from "@/data/types";
import {
  TITLES,
  destinationsForTitle,
  getTitle,
  locationsForTitle,
} from "@/lib/data";
import { locationImage, titleImage } from "@/lib/images";
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

const GUIDE_HEADING: Record<Locale, string> = {
  en: "Filming {name}: locations and how to visit",
  fr: "Le tournage de {name} : lieux et visite",
  de: "Drehorte von {name} und wie man sie besucht",
  es: "Rodaje de {name}: localizaciones y cómo visitarlas",
  it: "Le riprese di {name}: location e come visitarle",
};
const FAQ_SPOTS_Q: Record<Locale, string> = {
  en: "How many filming locations does {name} have?",
  fr: "Combien de lieux de tournage compte {name} ?",
  de: "Wie viele Drehorte hat {name}?",
  es: "¿Cuántas localizaciones tiene {name}?",
  it: "Quanti luoghi delle riprese ha {name}?",
};
const FAQ_SPOTS_A: Record<Locale, string> = {
  en: "We map {n} real filming locations for {name}, across {m} destinations: {places}.",
  fr: "Nous recensons {n} lieux de tournage réels pour {name}, répartis sur {m} destinations : {places}.",
  de: "Wir verzeichnen {n} reale Drehorte für {name} in {m} Reisezielen: {places}.",
  es: "Cartografiamos {n} localizaciones reales de {name}, en {m} destinos: {places}.",
  it: "Mappiamo {n} luoghi reali delle riprese di {name}, in {m} destinazioni: {places}.",
};
const FAQ_COUNTRIES_Q: Record<Locale, string> = {
  en: "Which countries was {name} filmed in?",
  fr: "Quels sont les pays de tournage de {name} ?",
  de: "In welchen Ländern wurde {name} gedreht?",
  es: "¿En qué países se rodó {name}?",
  it: "In quali paesi è stato girato {name}?",
};
const FAQ_COUNTRIES_A: Record<Locale, string> = {
  en: "{name} was filmed in {countries}.",
  fr: "Les pays de tournage de {name} : {countries}.",
  de: "Drehländer von {name}: {countries}.",
  es: "Los países de rodaje de {name}: {countries}.",
  it: "I paesi delle riprese di {name}: {countries}.",
};

export const dynamicParams = false;
export const revalidate = 2592000; // 30j : contenu statique, un deploy invalide deja le cache

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
  const heroLocSlug = base.locationSlugs.find((s) => locationImage(s));
  const trailer = titleTrailer(slug);
  const guide = titleGuide(slug, loc);
  const placeNames = destinations.map((d) => localizeDestination(d, loc).name).join(", ");
  const countries = [...new Set(destinations.map((d) => d.country))];
  const faqItems = [
    {
      q: t(dict.faq.whatFilmedTitle, { name: title.name }),
      a: t(dict.faq.whatFilmedTitleAnswer, { name: title.name, places: placeNames }),
    },
    {
      q: t(dict.faq.visitTitle, { name: title.name }),
      a: t(dict.faq.visitTitleAnswer, { name: title.name }),
    },
    {
      q: t(FAQ_SPOTS_Q[loc], { name: title.name }),
      a: t(FAQ_SPOTS_A[loc], {
        n: locations.length,
        m: destinations.length,
        places: placeNames,
      }),
    },
    {
      q: t(FAQ_COUNTRIES_Q[loc], { name: title.name }),
      a: t(FAQ_COUNTRIES_A[loc], { countries: countries.join(", ") }),
    },
  ];

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

      <TitleFacts
        type={base.type}
        period={yearLabel(title)}
        spotCount={locations.length}
        destCount={destinations.length}
        countries={countries}
        accent={title.accent}
        locale={loc}
      />

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
          {heroLocSlug && <PhotoCredit kind="locations" slug={heroLocSlug} />}
        </div>
      )}

      {guide.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-ink">
            {t(GUIDE_HEADING[loc], { name: title.name })}
          </h2>
          <GuideProse paragraphs={guide} locale={loc} excludeTitleSlug={slug} />
        </section>
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

      <RelatedTitles slug={slug} locale={loc} />

      <Faq heading={dict.faq.heading} items={faqItems} />
    </main>
  );
}
