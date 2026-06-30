import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { DESTINATIONS, TITLES } from "@/lib/data";
import { localePath, localizeDestination, localizeTitle, type Locale } from "@/lib/i18n";

type Term = { name: string; href: string };

const isLetter = (ch: string | undefined) => !!ch && /[\p{L}]/u.test(ch);

/**
 * Wrap the first unused occurrence of each known place / title name in a link,
 * left to right, up to `budget`. Case-sensitive with letter-boundary checks so
 * we only catch real proper-noun mentions, never substrings.
 */
function linkify(
  text: string,
  terms: Term[],
  used: Set<string>,
  budget: { n: number },
  keyBase: string,
): ReactNode[] {
  if (budget.n <= 0) return [text];
  let best: { idx: number; term: Term } | null = null;
  for (const term of terms) {
    if (used.has(term.name)) continue;
    let from = 0;
    let idx = text.indexOf(term.name, from);
    while (idx !== -1) {
      if (!isLetter(text[idx - 1]) && !isLetter(text[idx + term.name.length])) {
        if (!best || idx < best.idx) best = { idx, term };
        break;
      }
      from = idx + 1;
      idx = text.indexOf(term.name, from);
    }
  }
  if (!best) return [text];
  used.add(best.term.name);
  budget.n -= 1;
  const after = text.slice(best.idx + best.term.name.length);
  return [
    text.slice(0, best.idx),
    <Link
      key={`${keyBase}-${best.idx}`}
      href={best.term.href}
      className="font-medium text-ink underline decoration-line decoration-1 underline-offset-2 transition-colors hover:decoration-ink"
    >
      {best.term.name}
    </Link>,
    ...linkify(after, terms, used, budget, `${keyBase}-${best.idx}`),
  ];
}

/**
 * Renders the destination guide paragraphs with internal links auto-woven into
 * the prose (other destinations + the titles filmed in them), for the semantic
 * cocoon. Conservative: longest names first, each linked once, capped per page.
 */
export function GuideProse({
  paragraphs,
  locale,
  currentSlug,
}: {
  paragraphs: string[];
  locale: Locale;
  currentSlug: string;
}) {
  const terms: Term[] = [];
  for (const d of DESTINATIONS) {
    if (d.slug === currentSlug) continue;
    const name = localizeDestination(d, locale).name;
    if (name.length >= 4) terms.push({ name, href: localePath(locale, `/destinations/${d.slug}`) });
  }
  for (const tt of TITLES) {
    const name = localizeTitle(tt, locale).name;
    if (name.length >= 4) terms.push({ name, href: localePath(locale, `/titles/${tt.slug}`) });
  }
  // Longest first so "Emily in Paris" wins over "Paris" at the same spot.
  terms.sort((a, b) => b.name.length - a.name.length);

  const used = new Set<string>();
  const budget = { n: 10 };

  return (
    <div className="longform mt-4">
      {paragraphs.map((p, i) => (
        <p key={i}>{linkify(p, terms, used, budget, `g${i}`).map((node, j) => (
          <Fragment key={j}>{node}</Fragment>
        ))}</p>
      ))}
    </div>
  );
}
