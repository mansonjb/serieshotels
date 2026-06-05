import Link from "next/link";
import { Img } from "@/components/Img";
import type { Title } from "@/data/types";
import type { UI } from "@/data/i18n/ui";
import { localePath, type Locale } from "@/lib/i18n";
import { titleImage } from "@/lib/images";

const SHADOW_SM = { textShadow: "0 1px 3px rgba(0,0,0,0.45)" };
const SHADOW_LG = { textShadow: "0 2px 10px rgba(0,0,0,0.55)" };

export function TitleCard({
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
      className="group block overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        {img ? (
          <Img src={img} alt={title.name} ratio="aspect-[4/3]" />
        ) : (
          <div
            className="aspect-[4/3] w-full"
            style={{
              background: `linear-gradient(135deg, #${title.accent}, #${title.accent}66)`,
            }}
          />
        )}

        {/* Calque noir à 20 % pour faire ressortir le titre en surimpression. */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/85"
              style={SHADOW_SM}
            >
              {meta}
            </span>
            <span
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/85"
              style={SHADOW_SM}
            >
              {locationCount}{" "}
              {locationCount === 1 ? dict.labels.spot : dict.labels.spots}
            </span>
          </div>
          <h3
            className="font-display text-2xl font-semibold leading-tight text-white group-hover:underline"
            style={SHADOW_LG}
          >
            {title.name}
          </h3>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5"
          style={{ background: `#${title.accent}` }}
        />
      </div>

      <div className="p-5 pt-4">
        <p className="text-sm leading-relaxed text-muted">{title.tagline}</p>
      </div>
    </Link>
  );
}
