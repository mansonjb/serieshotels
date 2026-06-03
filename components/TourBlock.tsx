import { AffiliateLink } from "@/components/AffiliateLink";
import {
  discoverCarsUrl,
  getYourGuideSearchUrl,
  tiqetsSearchUrl,
  viatorSearchUrl,
} from "@/lib/affiliates/links";

/**
 * Reusable "book the experience" row — tours, tickets and a car, all through
 * <AffiliateLink>. `query` is the activity/place search term; `place` is the
 * car pickup label; `context` prefixes the analytics tags.
 */
export function TourBlock({
  query,
  place,
  context,
  heading = "Make a day of it",
}: {
  query: string;
  place: string;
  context: string;
  heading?: string;
}) {
  const buttons: {
    network: "viator" | "getyourguide" | "tiqets" | "discovercars";
    label: string;
    href: string;
  }[] = [
    { network: "viator", label: "Tours on Viator", href: viatorSearchUrl(query) },
    {
      network: "getyourguide",
      label: "Tours on GetYourGuide",
      href: getYourGuideSearchUrl(query),
    },
    { network: "tiqets", label: "Tickets on Tiqets", href: tiqetsSearchUrl(query) },
    { network: "discovercars", label: "Rent a car", href: discoverCarsUrl(place) },
  ];

  return (
    <section className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {heading}
      </p>
      <h3 className="mt-1 font-display text-xl font-semibold text-ink">
        Tours, tickets & getting there
      </h3>
      <div className="mt-5 flex flex-wrap gap-3">
        {buttons.map((b) => (
          <AffiliateLink
            key={b.network}
            network={b.network}
            context={`${context}-${b.network}`}
            href={b.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {b.label} →
          </AffiliateLink>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Affiliate links — booking through them supports the site at no extra
        cost to you.
      </p>
    </section>
  );
}
