import Link from "next/link";
import type { Destination } from "@/data/types";

export function DestinationCard({
  destination,
  stats,
}: {
  destination: Destination;
  stats: { titles: number; locations: number };
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg"
    >
      <div
        className="flex h-28 items-end p-5"
        style={{
          background: `linear-gradient(135deg, #${destination.accent}, #${destination.accent}66)`,
        }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
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
