import { AffiliateLink } from "@/components/AffiliateLink";
import { Img } from "@/components/Img";
import type { Hotel } from "@/lib/hotels";
import type { UI } from "@/data/i18n/ui";
import { stay22Url } from "@/lib/affiliates/stay22";

/**
 * A single scraped hotel, with a Stay22 affiliate "check availability" CTA
 * (Stay22 sends the visitor to whichever OTA is cheapest and pays commission).
 * Photo is a real Google Places image; never a copyrighted still.
 */
export function HotelCard({
  hotel,
  destName,
  context,
  dict,
}: {
  hotel: Hotel;
  destName: string;
  context: string;
  dict: UI;
}) {
  const query = hotel.address ? `${hotel.name}, ${hotel.address}` : `${hotel.name}, ${destName}`;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper">
      <div className="relative">
        {hotel.photo ? (
          <Img src={hotel.photo} alt={hotel.name} ratio="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 360px" />
        ) : (
          <div className="aspect-[4/3] w-full bg-paper-2" />
        )}
        {hotel.stars ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/65 px-2 py-0.5 font-mono text-[10px] tracking-wide text-white">
            {"★".repeat(Math.min(5, Math.round(hotel.stars)))}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-semibold leading-tight text-ink">
          {hotel.name}
        </h3>
        {hotel.rating ? (
          <p className="mt-1 text-sm text-muted">
            {hotel.rating.toFixed(1)} ★
            {hotel.reviewCount ? ` · ${hotel.reviewCount.toLocaleString()} ${dict.hotels.reviews}` : ""}
          </p>
        ) : null}
        <AffiliateLink
          network="stay22"
          context={context}
          href={stay22Url(query)}
          className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
        >
          {dict.hotels.check} →
        </AffiliateLink>
      </div>
    </div>
  );
}
