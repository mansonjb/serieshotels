import type { UI } from "@/data/i18n/ui";

/**
 * Official trailer embed, the legal way to show real footage of a film/series
 * (served by the rights-holder via YouTube), paired with the "now" photos.
 * Renders nothing when no trailer id is set, so titles without one (or before
 * `pnpm sync-trailers` runs) simply omit the block.
 */
export function TrailerEmbed({
  youtubeId,
  dict,
}: {
  youtubeId?: string;
  dict: UI;
}) {
  if (!youtubeId) return null;
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}`;
  return (
    <section className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {dict.trailer.eyebrow}
      </p>
      <h3 className="mt-1 font-display text-xl font-semibold text-ink">
        {dict.trailer.title}
      </h3>
      <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-line bg-ink">
        <iframe
          src={src}
          title={dict.trailer.title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          style={{ border: 0 }}
        />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">{dict.trailer.note}</p>
    </section>
  );
}
