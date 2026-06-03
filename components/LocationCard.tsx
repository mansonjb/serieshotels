import Link from "next/link";
import type { Location } from "@/data/types";

export function LocationCard({
  location,
  subtitle,
  accent,
}: {
  location: Location;
  /** Context line, e.g. the title or destination name. */
  subtitle: string;
  /** Hex (no #) for the accent strip. */
  accent: string;
}) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group flex gap-4 rounded-2xl border border-line bg-paper p-5 transition-shadow hover:shadow-lg"
    >
      <div
        className="mt-1 h-full w-1.5 shrink-0 rounded-full"
        style={{ background: `#${accent}` }}
        aria-hidden
      />
      <div>
        <div className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{location.kind}</span>
          <span className="text-line">·</span>
          <span>{subtitle}</span>
        </div>
        <h3 className="mt-1.5 font-display text-lg font-semibold leading-tight text-ink group-hover:underline">
          {location.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {location.sceneContext}
        </p>
      </div>
    </Link>
  );
}
