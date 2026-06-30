import Link from "next/link";
import { Img } from "@/components/Img";
import { getTitle, relatedDestinations } from "@/lib/data";
import { destinationImage } from "@/lib/images";
import {
  localePath,
  localizeDestination,
  localizeTitle,
  t,
  type Locale,
} from "@/lib/i18n";

const HEADING: Record<Locale, string> = {
  en: "You might also like",
  fr: "Vous aimerez aussi",
  de: "Das könnte Ihnen auch gefallen",
  es: "También te puede gustar",
  it: "Potrebbe piacerti anche",
};
const INTRO: Record<Locale, string> = {
  en: "More filming-location hubs to explore next.",
  fr: "D'autres lieux de tournage à explorer ensuite.",
  de: "Weitere Drehort-Ziele zum Weiterstöbern.",
  es: "Más destinos de localizaciones para explorar.",
  it: "Altri set da esplorare in seguito.",
};
const SEEN_IN: Record<Locale, string> = {
  en: "Also in {title}",
  fr: "Aussi dans {title}",
  de: "Auch in {title}",
  es: "También en {title}",
  it: "Anche in {title}",
};

/**
 * End-of-page bridges to similar destinations (shared productions first, then
 * same country / nearby). Visual image cards with the destination accent, for
 * internal linking / the semantic cocoon.
 */
export function RelatedDestinations({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const related = relatedDestinations(slug, 6);
  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="font-display text-2xl font-bold text-ink">{HEADING[locale]}</h2>
      <p className="mt-1.5 text-muted">{INTRO[locale]}</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {related.map(({ dest: base, sharedTitleSlug }) => {
          const dest = localizeDestination(base, locale);
          const hero = destinationImage(base.slug);
          const sharedTitle = sharedTitleSlug ? getTitle(sharedTitleSlug) : undefined;
          const chip = sharedTitle
            ? t(SEEN_IN[locale], { title: localizeTitle(sharedTitle, locale).name })
            : dest.country;
          return (
            <Link
              key={base.slug}
              href={localePath(locale, `/destinations/${base.slug}`)}
              className="group block overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                {hero ? (
                  <Img
                    src={hero}
                    alt={dest.name}
                    ratio="aspect-[4/3]"
                    className="transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 320px"
                  />
                ) : (
                  <div
                    className="aspect-[4/3]"
                    style={{ background: `linear-gradient(135deg, #${base.accent}, #${base.accent}22)` }}
                  />
                )}
                <div
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: `#${base.accent}` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span
                  className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm backdrop-blur-sm"
                  style={{ background: `#${base.accent}cc` }}
                >
                  {chip}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <h3 className="font-display text-base font-bold leading-tight text-white">
                    {dest.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-white/85">{dest.country}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
