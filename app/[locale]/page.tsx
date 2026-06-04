import Link from "next/link";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { TitleCard } from "@/components/TitleCard";
import { DestinationCard } from "@/components/DestinationCard";
import {
  DESTINATIONS,
  TITLES,
  destinationStats,
  locationsForTitle,
} from "@/lib/data";
import { destinationImage } from "@/lib/images";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  localizeDestination,
  localizeTitle,
  type Locale,
} from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: `${SITE_URL}/${loc}`,
          inLanguage: loc,
          description: dict.hero.subtitle,
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
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(loc, "/titles")}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              {dict.hero.cta1} →
            </Link>
            <Link
              href={localePath(loc, "/destinations")}
              className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {dict.hero.cta2}
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-5">
            {DESTINATIONS.slice(0, 5).map((d) => {
              const im = destinationImage(d.slug);
              return im ? (
                <Img
                  key={d.slug}
                  src={im}
                  alt={d.name}
                  ratio="aspect-[3/4]"
                  rounded="rounded-xl"
                  className="border border-line"
                  sizes="(max-width: 768px) 33vw, 18vw"
                />
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* Featured series */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-ink">
            {dict.home.onScreen}
          </h2>
          <Link
            href={localePath(loc, "/titles")}
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-ink"
          >
            {dict.home.allTitles} →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TITLES.slice(0, 6).map((tt) => (
            <TitleCard
              key={tt.slug}
              title={localizeTitle(tt, loc)}
              locationCount={locationsForTitle(tt.slug).length}
              locale={loc}
              dict={dict}
            />
          ))}
        </div>
      </section>

      {/* Featured destinations */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-bold text-ink">
              {dict.home.onMap}
            </h2>
            <Link
              href={localePath(loc, "/destinations")}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-ink"
            >
              {dict.home.allDestinations} →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.slice(0, 6).map((d) => (
              <DestinationCard
                key={d.slug}
                destination={localizeDestination(d, loc)}
                stats={destinationStats(d.slug)}
                locale={loc}
                dict={dict}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-bold text-ink">
          {dict.home.howItWorks}
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {dict.home.steps.map((step, i) => (
            <li
              key={i}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <span className="font-display text-3xl font-bold text-muted/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.b}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
