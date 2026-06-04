import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GUIDES } from "@/content/guides";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  type Locale,
} from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : DEFAULT_LOCALE);
  return {
    title: dict.guidesIndex.heading,
    description: dict.guidesIndex.intro,
    alternates: { canonical: `/${locale}/guides` },
  };
}

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.guidesIndex.heading },
        ]}
      />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        {dict.guidesIndex.heading}
      </h1>
      <p className="mt-3 max-w-xl text-muted">{dict.guidesIndex.intro}</p>

      <div className="mt-10 space-y-4">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={localePath(loc, `/guides/${g.slug}`)}
            className="group block rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-lg"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {dict.labels.guide} · {g.readingMinutes} {dict.labels.minRead}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink group-hover:underline">
              {g.title}
            </h2>
            <p className="mt-2 text-muted">{g.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
