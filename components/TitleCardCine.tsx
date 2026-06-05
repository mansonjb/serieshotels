import Image from "next/image";
import Link from "next/link";
import type { Title } from "@/data/types";
import type { UI } from "@/data/i18n/ui";
import { localePath, type Locale } from "@/lib/i18n";
import { titleImage } from "@/lib/images";

const SHADOW_SM = { textShadow: "0 1px 4px rgba(0,0,0,0.6)" };
const SHADOW_LG = { textShadow: "0 2px 14px rgba(0,0,0,0.7)" };

/** Subtle film grain (SVG noise) laid over the graded photo. */
const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")";

/**
 * Cinematic variant of the title card: a portrait crop of the real-place photo,
 * colour-graded (contrast/sat + vignette + grain) with the title set over it.
 * Uses only our own location photos, never copyrighted stills.
 */
export function TitleCardCine({
  title,
  locationCount,
  locale,
  dict,
}: {
  title: Title;
  locationCount: number;
  locale: Locale;
  dict: UI;
}) {
  const img = titleImage(title);
  const meta = `${title.type === "series" ? dict.labels.series : dict.labels.film} · ${title.year}`;

  return (
    <Link
      href={localePath(locale, `/titles/${title.slug}`)}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-ink"
    >
      {img ? (
        <Image
          src={img}
          alt={title.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          style={{ filter: "contrast(1.08) saturate(1.06) brightness(0.95)" }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, #${title.accent}, #${title.accent}55)`,
          }}
        />
      )}

      {/* Cinematic grade: strong bottom, soft top. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />
      {/* Vignette. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 140px 28px rgba(0,0,0,0.6)" }}
      />
      {/* Film grain. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_BG, backgroundSize: "140px 140px" }}
      />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <div
          className="mb-3 h-0.5 w-10 rounded-full"
          style={{ background: `#${title.accent}` }}
        />
        <p
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/75"
          style={SHADOW_SM}
        >
          {meta} · {locationCount}{" "}
          {locationCount === 1 ? dict.labels.spot : dict.labels.spots}
        </p>
        <h3
          className="mt-2 font-display text-3xl font-bold leading-[1.05] text-white"
          style={SHADOW_LG}
        >
          {title.name}
        </h3>
      </div>
    </Link>
  );
}
