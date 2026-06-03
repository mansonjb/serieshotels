import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LocationCard } from "@/components/LocationCard";
import { Stay22Map } from "@/components/Stay22Map";
import { TourBlock } from "@/components/TourBlock";
import type { Title } from "@/data/types";
import {
  TITLES,
  destinationsForTitle,
  getTitle,
  locationsForTitle,
} from "@/lib/data";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// ISR: prebuild every known title, 404 anything else, refresh daily.
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return TITLES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = getTitle(slug);
  if (!title) return {};
  const name = `Where ${title.name} was filmed`;
  const description = title.synopsis.slice(0, 155);
  return {
    title: name,
    description,
    alternates: { canonical: `/titles/${slug}` },
    openGraph: {
      title: `${name} · ${SITE_NAME}`,
      description,
      type: "article",
      url: `${SITE_URL}/titles/${slug}`,
    },
  };
}

function yearLabel(t: Title): string {
  if (t.type === "movie") return String(t.year);
  return `${t.year}–${t.endYear ?? "present"}`;
}

export default async function TitlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = getTitle(slug);
  if (!title) notFound();

  const locations = locationsForTitle(slug);
  const destinations = destinationsForTitle(slug);
  const url = `${SITE_URL}/titles/${slug}`;

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": title.type === "series" ? "TVSeries" : "Movie",
          name: title.name,
          genre: title.genres,
          ...(title.type === "movie"
            ? { datePublished: String(title.year) }
            : { startDate: String(title.year) }),
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
          { name: "Home", href: "/" },
          { name: "Series & Films", href: "/titles" },
          { name: title.name },
        ]}
      />

      <header className="mt-6">
        <div
          className="h-2 w-24 rounded-full"
          style={{ background: `#${title.accent}` }}
        />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {title.type === "series" ? "Series" : "Film"} · {yearLabel(title)} ·{" "}
          {title.genres.join(" · ")}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Where {title.name} was filmed
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {title.synopsis}
        </p>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {locations.length} {locations.length === 1 ? "location" : "locations"}{" "}
          across {destinations.length}{" "}
          {destinations.length === 1 ? "destination" : "destinations"}
        </p>
      </header>

      <AffiliateDisclosure className="mt-8" />

      {destinations.map((dest) => {
        const locs = locations.filter((l) => l.destinationSlug === dest.slug);
        return (
          <section key={dest.slug} className="mt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-bold text-ink">
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="hover:underline"
                >
                  {dest.name}
                </Link>
                <span className="text-muted">, {dest.country}</span>
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {locs.length} {locs.length === 1 ? "spot" : "spots"}
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {locs.map((l) => (
                <LocationCard
                  key={l.slug}
                  location={l}
                  subtitle={dest.name}
                  accent={title.accent}
                />
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Stay22Map
                lat={dest.lat}
                lng={dest.lng}
                label={dest.name}
                campaign={`${slug}-${dest.slug}`}
                accent={dest.accent}
              />
              <TourBlock
                query={`${dest.name} tours`}
                place={dest.name}
                context={`title-${slug}-${dest.slug}`}
              />
            </div>
          </section>
        );
      })}
    </main>
  );
}
