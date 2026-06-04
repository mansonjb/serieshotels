import { AffiliateLink } from "@/components/AffiliateLink";
import type { UI } from "@/data/i18n/ui";
import { t } from "@/lib/i18n";
import { stay22MapSrc, stay22Url } from "@/lib/affiliates/stay22";

/**
 * Stay22 "where to stay" block — a lazy-loaded interactive hotel map plus a
 * fallback deeplink. Server component: the AID is read from env inside the
 * lib helpers and baked into the iframe src, never hardcoded.
 */
export function Stay22Map({
  lat,
  lng,
  label,
  campaign,
  accent,
  dict,
}: {
  lat: number;
  lng: number;
  /** Human label, e.g. "Dubrovnik" or "San Domenico Palace". */
  label: string;
  campaign?: string;
  /** Brand accent for the pins (hex, no #). */
  accent?: string;
  dict: UI;
}) {
  const src = stay22MapSrc({ lat, lng, campaign, maincolor: accent });

  return (
    <section className="rounded-2xl border border-line bg-paper-2 p-6 sm:p-8">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {dict.stay22.whereToStay}
          </p>
          <h3 className="font-display text-xl font-semibold text-ink">
            {t(dict.stay22.hotelsNear, { name: label })}
          </h3>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {dict.stay22.sponsored}
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-paper">
        <iframe
          src={src}
          title={t(dict.stay22.hotelsNear, { name: label })}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block w-full"
          style={{ height: 480, border: 0 }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <AffiliateLink
          network="stay22"
          context={`${campaign ?? "stay"}-stay22-browse`}
          href={stay22Url(label)}
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
        >
          {t(dict.stay22.browse, { name: label })} →
        </AffiliateLink>
        <p className="max-w-md text-xs leading-relaxed text-muted">
          {dict.stay22.note}
        </p>
      </div>
    </section>
  );
}
