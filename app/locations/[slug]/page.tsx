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
  LOCATIONS,
  destinationForLocation,
  getLocation,
  getTitle,
  locationsForDestination,
  titleForLocation,
} from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  const title = titleForLocation(loc);
  const dest = destinationForLocation(loc);
  const name = `${loc.name}${dest ? ` · ${dest.name}` : ""}`;
  const description = loc.sceneContext.slice(0, 155);
  return {
    title: name,
    description,
    alternates: { canonical: `/locations/${slug}` },
    openGraph: {
      title: `${loc.name} — a filming location from ${title?.name ?? "screen"}`,
      description,
      type: "article",
      url: `${SITE_URL}/locations/${slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const title = titleForLocation(loc);
  const dest = destinationForLocation(loc);
  if (!title || !dest) notFound();

  const url = `${SITE_URL}/locations/${slug}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
  const nearby = locationsForDestination(dest.slug).filter(
    (l) => l.slug !== loc.slug,
  );

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: loc.name,
          url,
          description: loc.sceneContext,
          ...(loc.address && {
            address: { "@type": "PostalAddress", streetAddress: loc.address },
          }),
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.lat,
            longitude: loc.lng,
          },
          isPartOf: {
            "@type": "TouristDestination",
            name: dest.name,
            url: `${SITE_URL}/destinations/${dest.slug}`,
          },
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Destinations", href: "/destinations" },
          { name: dest.name, href: `/destinations/${dest.slug}` },
          { name: loc.name },
        ]}
      />

      <header className="mt-6">
        <div
          className="h-2 w-24 rounded-full"
          style={{ background: `#${title.accent}` }}
        />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {loc.kind} · {dest.name}, {dest.country}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {loc.name}
        </h1>
        <p className="mt-4 text-muted">
          A filming location from{" "}
          <Link
            href={`/titles/${title.slug}`}
            className="font-semibold text-ink underline underline-offset-2"
          >
            {title.name}
          </Link>{" "}
          in{" "}
          <Link
            href={`/destinations/${dest.slug}`}
            className="font-semibold text-ink underline underline-offset-2"
          >
            {dest.name}
          </Link>
          .
        </p>
      </header>

      <AffiliateDisclosure className="mt-8" />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-ink">The scene</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink/90">
          {loc.sceneContext}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-ink">
          How to visit
        </h2>
        <p className="mt-3 leading-relaxed text-ink/90">{loc.howToVisit}</p>
        {loc.address && (
          <p className="mt-4 text-sm text-muted">
            <span className="font-semibold text-ink">Address:</span>{" "}
            {loc.address} ·{" "}
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              Open in Google Maps
            </a>
          </p>
        )}
        {loc.nearbyTips && loc.nearbyTips.length > 0 && (
          <ul className="mt-5 space-y-2">
            {loc.nearbyTips.map((tip) => (
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
          lat={loc.lat}
          lng={loc.lng}
          label={loc.name}
          campaign={`loc-${slug}`}
          accent={dest.accent}
        />
        <TourBlock
          query={loc.name}
          place={dest.name}
          context={`loc-${slug}`}
        />
      </div>

      {nearby.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-ink">
            More to film-spot in {dest.name}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {nearby.map((l) => {
              const t = getTitle(l.titleSlug);
              return (
                <LocationCard
                  key={l.slug}
                  location={l}
                  subtitle={t?.name ?? dest.name}
                  accent={t?.accent ?? dest.accent}
                />
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
