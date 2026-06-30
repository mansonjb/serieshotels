import type { Locale } from "@/lib/i18n";

type Labels = {
  glance: string;
  format: string;
  period: string;
  spots: string;
  dests: string;
  countries: string;
  series: string;
  film: string;
};

const LABELS: Record<Locale, Labels> = {
  en: { glance: "At a glance", format: "Format", period: "Period", spots: "Filming spots", dests: "Destinations", countries: "Countries", series: "TV series", film: "Film" },
  fr: { glance: "En bref", format: "Format", period: "Période", spots: "Lieux de tournage", dests: "Destinations", countries: "Pays", series: "Série TV", film: "Film" },
  de: { glance: "Auf einen Blick", format: "Format", period: "Zeitraum", spots: "Drehorte", dests: "Reiseziele", countries: "Länder", series: "TV-Serie", film: "Film" },
  es: { glance: "De un vistazo", format: "Formato", period: "Periodo", spots: "Lugares de rodaje", dests: "Destinos", countries: "Países", series: "Serie de TV", film: "Película" },
  it: { glance: "In breve", format: "Formato", period: "Periodo", spots: "Luoghi delle riprese", dests: "Destinazioni", countries: "Paesi", series: "Serie TV", film: "Film" },
};

/** Visual "at a glance" panel of a title's set-jetting facts. */
export function TitleFacts({
  type,
  period,
  spotCount,
  destCount,
  countries,
  accent,
  locale,
}: {
  type: "movie" | "series";
  period: string;
  spotCount: number;
  destCount: number;
  countries: string[];
  accent: string;
  locale: Locale;
}) {
  const L = LABELS[locale];
  const facts: Array<{ k: string; v: string }> = [
    { k: L.format, v: type === "series" ? L.series : L.film },
    { k: L.period, v: period },
    { k: L.spots, v: String(spotCount) },
    { k: L.dests, v: String(destCount) },
    { k: L.countries, v: countries.join(", ") },
  ];
  return (
    <section
      className="mt-8 overflow-hidden rounded-2xl border border-line bg-paper/60"
      style={{ borderLeft: `4px solid #${accent}` }}
    >
      <div className="p-5">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {L.glance}
        </h2>
        <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.k}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                {f.k}
              </dt>
              <dd className="mt-0.5 font-display text-sm font-semibold text-ink">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
