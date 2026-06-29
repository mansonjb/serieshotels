import { backlinksFor, BACKLINKS_HEADING } from "@/lib/backlinks";
import type { Locale } from "@/lib/i18n";

/**
 * Editorial cross-links to our sister travel sites for destinations they also
 * cover. Dofollow, new tab. Renders nothing when there's no overlap.
 */
export function Backlinks({
  slug,
  locale,
  destName,
}: {
  slug: string;
  locale: Locale;
  destName: string;
}) {
  const links = backlinksFor(slug, locale, destName);
  if (links.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-bold text-ink">
        {BACKLINKS_HEADING[locale]}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.url} className="rounded-2xl border border-line p-5">
            <a
              href={l.url}
              target="_blank"
              rel="noopener"
              className="font-display text-lg font-semibold text-ink underline-offset-4 hover:underline"
            >
              {l.anchor}
            </a>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{l.blurb}</p>
            <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {l.brand}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
