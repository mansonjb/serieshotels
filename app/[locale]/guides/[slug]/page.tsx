import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { GUIDES, getGuide, loadGuide } from "@/content/guides";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  type Locale,
} from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/${locale}/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `${SITE_URL}/${locale}/guides/${slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);
  const guide = getGuide(slug);
  if (!guide) notFound();

  const { default: Content } = await loadGuide(guide, loc);
  const url = `${SITE_URL}/${loc}/guides/${slug}`;

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          inLanguage: loc,
          mainEntityOfPage: url,
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.guidesIndex.heading, href: localePath(loc, "/guides") },
          { name: guide.title },
        ]}
      />

      <header className="mt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {dict.labels.guide} · {guide.readingMinutes} {dict.labels.minRead}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {guide.description}
        </p>
      </header>

      <article className="longform mt-10">
        <Content />
      </article>
    </main>
  );
}
