import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export type Crumb = { name: string; href?: string };

/**
 * Visual breadcrumb trail + matching BreadcrumbList JSON-LD. Pass site-root
 * relative hrefs (e.g. "/destinations"); the last crumb is the current page
 * and should omit href.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
      >
        {items.map((c, i) => (
          <span key={c.name} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-ink">
                {c.name}
              </Link>
            ) : (
              <span className="text-ink">{c.name}</span>
            )}
            {i < items.length - 1 && <span className="text-line">/</span>}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
          })),
        }}
      />
    </>
  );
}
