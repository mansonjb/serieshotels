import Link from "next/link";
import { Img } from "@/components/Img";
import type { Location } from "@/data/types";
import { locationImage } from "@/lib/images";

export function LocationCard({
  location,
  subtitle,
  accent,
}: {
  location: Location;
  /** Context line, e.g. the title or destination name. */
  subtitle: string;
  /** Hex (no #) for the accent fallback. */
  accent: string;
}) {
  const img = locationImage(location.slug);
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group flex gap-4 rounded-2xl border border-line bg-paper p-4 transition-shadow hover:shadow-lg"
    >
      {img ? (
        <Img
          src={img}
          alt={location.name}
          ratio="aspect-square"
          rounded="rounded-xl"
          className="w-24 shrink-0 sm:w-28"
          sizes="112px"
        />
      ) : (
        <div
          className="w-1.5 shrink-0 rounded-full"
          style={{ background: `#${accent}` }}
          aria-hidden
        />
      )}
      <div className="min-w-0 py-1">
        <div className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{location.kind}</span>
          <span className="text-line">·</span>
          <span className="truncate">{subtitle}</span>
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
