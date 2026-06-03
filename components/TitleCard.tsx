import Link from "next/link";
import type { Title } from "@/data/types";

export function TitleCard({
  title,
  locationCount,
}: {
  title: Title;
  locationCount: number;
}) {
  return (
    <Link
      href={`/titles/${title.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg"
    >
      <div
        className="h-2 w-full"
        style={{
          background: `linear-gradient(90deg, #${title.accent}, #${title.accent}44)`,
        }}
      />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {title.type === "series" ? "Series" : "Film"} · {title.year}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {locationCount} {locationCount === 1 ? "spot" : "spots"}
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
