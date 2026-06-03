import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { GUIDES, getGuide } from "@/content/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `${SITE_URL}/guides/${slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const { default: Content } = await guide.load();
  const url = `${SITE_URL}/guides/${slug}`;

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          mainEntityOfPage: url,
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: guide.title },
        ]}
      />

      <header className="mt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Guide · {guide.readingMinutes} min read
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
