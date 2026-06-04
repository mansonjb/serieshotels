import Link from "next/link";
import { Img } from "@/components/Img";
import type { Title } from "@/data/types";
import type { UI } from "@/data/i18n/ui";
import { localePath, type Locale } from "@/lib/i18n";
import { titleImage } from "@/lib/images";

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
  return (
    <Link
      href={localePath(locale, `/titles/${title.slug}`)}
      className="group block overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg"
    >
      {img ? (
        <div className="relative">
          <Img src={img} alt={title.name} ratio="aspect-[16/10]" />
          <div
            className="absolute inset-x-0 bottom-0 h-1.5"
            style={{ background: `#${title.accent}` }}
          />
        </div>
      ) : (
        <div
          className="h-2 w-full"
          style={{
            background: `linear-gradient(90deg, #${title.accent}, #${title.accent}44)`,
          }}
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {title.type === "series" ? dict.labels.series : dict.labels.film} ·{" "}
            {title.year}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {locationCount}{" "}
            {locationCount === 1 ? dict.labels.spot : dict.labels.spots}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink group-hover:underline">
          {title.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{title.tagline}</p>
      </div>
    </Link>
  );
}
