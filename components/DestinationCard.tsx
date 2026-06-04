import Link from "next/link";
import { Img } from "@/components/Img";
import type { Destination } from "@/data/types";
import { destinationImage } from "@/lib/images";

export function DestinationCard({
  destination,
  stats,
}: {
  destination: Destination;
  stats: { titles: number; locations: number };
}) {
  const img = destinationImage(destination.slug);
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        {img ? (
          <Img src={img} alt={destination.name} ratio="aspect-[16/10]" />
        ) : (
          <div
            className="aspect-[16/10] w-full"
            style={{
              background: `linear-gradient(135deg, #${destination.accent}, #${destination.accent}66)`,
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
        <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white">
          {destination.country}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-ink group-hover:underline">
          {destination.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {destination.blurb}
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {stats.titles} {stats.titles === 1 ? "work" : "works"} ·{" "}
          {stats.locations} {stats.locations === 1 ? "spot" : "spots"}
        </p>
      </div>
    </Link>
  );
}
