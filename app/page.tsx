import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { TitleCard } from "@/components/TitleCard";
import { DestinationCard } from "@/components/DestinationCard";
import {
  DESTINATIONS,
  TITLES,
  destinationStats,
  locationsForTitle,
} from "@/lib/data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const STEPS: [string, string][] = [
  ["Pick a show", "Browse series and films by the places they were shot."],
  [
    "Find the real spots",
    "Each location comes with the scene, the exact map point, and how to actually visit.",
  ],
  [
    "Book stay & tours",
    "Compare nearby hotels and book tours, tickets and cars in a couple of taps.",
  ],
];

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background:
              "linear-gradient(115deg, #be123c 0%, #6d28d9 28%, #0e7490 52%, #15803d 74%, #c2410c 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
            Set-jetting travel guide
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl">
            Visit the real places behind your favourite films and series.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {SITE_DESCRIPTION}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/titles"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Browse series & films →
            </Link>
            <Link
              href="/destinations"
              className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Explore destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured series */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-ink">
            On screen
          </h2>
          <Link
            href="/titles"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-ink"
          >
            All titles →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TITLES.map((t) => (
            <TitleCard
              key={t.slug}
              title={t}
              locationCount={locationsForTitle(t.slug).length}
            />
          ))}
        </div>
      </section>

      {/* Featured destinations */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-bold text-ink">
              On the map
            </h2>
            <Link
              href="/destinations"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-ink"
            >
              All destinations →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <DestinationCard
                key={d.slug}
                destination={d}
                stats={destinationStats(d.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-bold text-ink">How it works</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {STEPS.map(([title, body], i) => (
            <li key={title} className="rounded-2xl border border-line bg-paper p-6">
              <span className="font-display text-3xl font-bold text-muted/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
