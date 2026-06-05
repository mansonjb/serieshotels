import type { Metadata } from "next";
import { TitleCard } from "@/components/TitleCard";
import { TitleCardCine } from "@/components/TitleCardCine";
import { TITLES, locationsForTitle } from "@/lib/data";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localizeTitle,
  type Locale,
} from "@/lib/i18n";

// Preview only — keep it out of search and the sitemap.
export const metadata: Metadata = {
  title: "Aperçu cartes",
  robots: { index: false, follow: false },
};

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        Aperçu · non déployé
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">
        Cartes « ciné » (proposition)
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Traitement cinématographique appliqué aux vraies photos des lieux :
        étalonnage contrasté, vignette, grain léger, format poster et titre en
        surimpression. Aucune image sous copyright.
      </p>

      <h2 className="mt-12 font-display text-2xl font-bold text-ink">
        Proposition « ciné »
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TITLES.map((tt) => (
          <TitleCardCine
            key={tt.slug}
            title={localizeTitle(tt, loc)}
            locationCount={locationsForTitle(tt.slug).length}
            locale={loc}
            dict={dict}
          />
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-bold text-ink">
        Actuel (pour comparer)
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TITLES.map((tt) => (
          <TitleCard
            key={tt.slug}
            title={localizeTitle(tt, loc)}
            locationCount={locationsForTitle(tt.slug).length}
            locale={loc}
            dict={dict}
          />
        ))}
      </div>
    </main>
  );
}
