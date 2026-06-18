import { JsonLd } from "@/components/JsonLd";

/**
 * Rendered FAQ + FAQPage JSON-LD. Questions are localized templates; answers
 * reuse the already-translated scene/visit fields, so a page gains real depth
 * and rich-result eligibility without a separate translation pass.
 */
export function Faq({
  heading,
  items,
}: {
  heading: string;
  items: { q: string; a: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-bold text-ink">{heading}</h2>
      <dl className="mt-6 space-y-3">
        {items.map((it) => (
          <div key={it.q} className="rounded-2xl border border-line bg-paper p-5">
            <dt className="font-display text-lg font-semibold text-ink">{it.q}</dt>
            <dd className="mt-2 leading-relaxed text-ink/90">{it.a}</dd>
          </div>
        ))}
      </dl>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
    </section>
  );
}
