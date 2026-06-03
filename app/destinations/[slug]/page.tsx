import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LocationCard } from "@/components/LocationCard";
import { Stay22Map } from "@/components/Stay22Map";
import { TourBlock } from "@/components/TourBlock";
import {
  DESTINATIONS,
  getDestination,
  locationsForDestination,
  titlesForDestination,
} from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  const title = `Filming locations in ${dest.name}`;
  return {
    title,
    description: dest.blurb.slice(0, 155),
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title,
      description: dest.blurb.slice(0, 155),
      type: "article",
      url: `${SITE_URL}/destinations/${slug}`,
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const locations = locationsForDestination(slug);
  const titles = titlesForDestination(slug);
  const url = `${SITE_URL}/destinations/${slug}`;

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
          { name: "Home", href: "/" },
          { name: "Destinations", href: "/destinations" },
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
          Filming locations in {dest.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {dest.blurb}
        </p>
      </header>

      <AffiliateDisclosure className="mt-8" />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Stay22Map
          lat={dest.lat}
          lng={dest.lng}
          label={dest.name}
          campaign={`dest-${slug}`}
          accent={dest.accent}
        />
        <TourBlock
          query={`${dest.name} tours`}
          place={dest.name}
          context={`dest-${slug}`}
        />
      </div>

      {titles.map((title) => {
        const locs = locations.filter((l) => l.titleSlug === title.slug);
        return (
          <section key={title.slug} className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              <Link href={`/titles/${title.slug}`} className="hover:underline">
                {title.name}
              </Link>
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {locs.map((l) => (
                <LocationCard
                  key={l.slug}
                  location={l}
                  subtitle={title.name}
                  accent={title.accent}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
