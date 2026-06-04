import Link from "next/link";
import { Img } from "@/components/Img";
import type { Location } from "@/data/types";
import { localePath, type Locale } from "@/lib/i18n";
import { locationImage } from "@/lib/images";

export function LocationCard({
  location,
  subtitle,
  accent,
  locale,
}: {
  location: Location;
  /** Context line, e.g. the title or destination name. */
  subtitle: string;
  /** Hex (no #) for the accent fallback. */
  accent: string;
  locale: Locale;
}) {
  const img = locationImage(location.slug);
  return (
    <Link
      href={localePath(locale, `/locations/${location.slug}`)}
      className="group flex gap-4 rounded-2xl border border-line bg-paper p-4 transition-shadow hover:shadow-lg"
    >
      {img ? (
        <Img
          src={img}
          alt={location.name}
          ratio="aspect-[4/3]"
          rounded="rounded-xl"
          className="w-32 shrink-0 sm:w-52"
          sizes="(max-width: 640px) 128px, 208px"
        />
      ) : (
        <div
          className="aspect-[4/3] w-32 shrink-0 rounded-xl sm:w-52"
          style={{
            background: `linear-gradient(135deg, #${accent}, #${accent}66)`,
          }}
          aria-hidden
        />
      )}
      <div className="min-w-0 flex-1 py-1">
        <div className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{location.kind}</span>
          <span className="text-line">·</span>
          <span className="truncate">{subtitle}</span>
        </div>
        <h3 className="mt-1.5 font-display text-lg font-semibold leading-tight text-ink group-hover:underline sm:text-xl">
          {location.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted sm:line-clamp-3">
          {location.sceneContext}
        </p>
      </div>
    </Link>
  );
}
