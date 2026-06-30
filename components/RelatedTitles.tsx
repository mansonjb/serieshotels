import Link from "next/link";
import { Img } from "@/components/Img";
import { getDestination, relatedTitles } from "@/lib/data";
import { titleImage } from "@/lib/images";
import {
  localePath,
  localizeDestination,
  localizeTitle,
  t,
  type Locale,
} from "@/lib/i18n";

const HEADING: Record<Locale, string> = {
  en: "More to watch and visit",
  fr: "Autres tournages à explorer",
  de: "Weitere Drehorte zum Entdecken",
  es: "Más rodajes para explorar",
  it: "Altri set da esplorare",
};
const ALSO_IN: Record<Locale, string> = {
  en: "Also filmed in {place}",
  fr: "Aussi tourné à {place}",
  de: "Auch gedreht in {place}",
  es: "También rodada en {place}",
  it: "Girato anche a {place}",
};
const SIMILAR: Record<Locale, string> = {
  en: "Similar",
  fr: "Même univers",
  de: "Ähnlich",
  es: "Similar",
  it: "Simile",
};

/** Title-to-title bridges (shared filming places first, then genre). */
export function RelatedTitles({ slug, locale }: { slug: string; locale: Locale }) {
  const related = relatedTitles(slug, 4);
  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="font-display text-2xl font-bold text-ink">{HEADING[locale]}</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {related.map(({ title: base, sharedDestSlug }) => {
          const title = localizeTitle(base, locale);
          const hero = titleImage(base);
          const sharedDest = sharedDestSlug ? getDestination(sharedDestSlug) : undefined;
          const chip = sharedDest
            ? t(ALSO_IN[locale], { place: localizeDestination(sharedDest, locale).name })
            : SIMILAR[locale];
          return (
            <Link
              key={base.slug}
              href={localePath(locale, `/titles/${base.slug}`)}
              className="group block overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                {hero ? (
                  <Img
                    src={hero}
                    alt={title.name}
                    ratio="aspect-[3/4]"
                    className="transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 240px"
                  />
                ) : (
                  <div
                    className="aspect-[3/4]"
                    style={{ background: `linear-gradient(135deg, #${base.accent}, #${base.accent}22)` }}
                  />
                )}
                <div
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: `#${base.accent}` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <span
                  className="absolute left-3 top-3 max-w-[85%] truncate rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm backdrop-blur-sm"
                  style={{ background: `#${base.accent}cc` }}
                >
                  {chip}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <h3 className="font-display text-sm font-bold leading-tight text-white">
                    {title.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-white/85">{title.year}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
