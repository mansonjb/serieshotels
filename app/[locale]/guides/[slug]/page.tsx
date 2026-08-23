import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { GUIDES, getGuide, loadGuide, localizeGuide } from "@/content/guides";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  type Locale,
} from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { abs, alternates, clip, CONTENT_UPDATED, ogImages, OG_FALLBACK, orgNode } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 2592000; // 30j : contenu statique, un deploy invalide deja le cache

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const guide = getGuide(slug);
  if (!guide) return {};
  const g = localizeGuide(guide, loc);
  return {
    title: g.title,
    description: clip(g.description),
    alternates: alternates(loc, `/guides/${slug}`),
    openGraph: {
      title: g.title,
      description: clip(g.description),
      type: "article",
      url: `${SITE_URL}/${loc}/guides/${slug}`,
      images: ogImages(undefined, g.title),
    },
    twitter: { card: "summary_large_image", images: ogImages(undefined, g.title) },
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

  const g = localizeGuide(guide, loc);
  const { default: Content } = await loadGuide(guide, loc);
  const url = `${SITE_URL}/${loc}/guides/${slug}`;

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.description,
          inLanguage: loc,
          image: abs(OG_FALLBACK),
          datePublished: guide.datePublished,
          dateModified: CONTENT_UPDATED,
          author: orgNode(),
          publisher: orgNode(),
          mainEntityOfPage: url,
        }}
      />

      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.guidesIndex.heading, href: localePath(loc, "/guides") },
          { name: g.title },
        ]}
      />

      <header className="mt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {dict.labels.guide} · {guide.readingMinutes} {dict.labels.minRead}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
          {g.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {g.description}
        </p>
      </header>

      <article className="longform mt-10">
        <Content />
      </article>
    </main>
  );
}
