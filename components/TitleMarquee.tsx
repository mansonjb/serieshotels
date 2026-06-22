"use client";

import Image from "next/image";
import Link from "next/link";

export type MarqueeItem = {
  slug: string;
  name: string;
  meta: string;
  img?: string;
  accent: string;
};

/**
 * Edge-to-edge auto-scrolling strip of the top titles, for the home hero. The
 * list is rendered twice so the CSS animation can loop seamlessly; the second
 * copy is hidden from assistive tech and the tab order.
 */
export function TitleMarquee({
  items,
  hrefBase,
}: {
  items: MarqueeItem[];
  hrefBase: string;
}) {
  if (items.length === 0) return null;
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask relative w-full overflow-hidden">
      <div className="marquee gap-4">
        {loop.map((it, i) => {
          const dup = i >= items.length;
          return (
            <Link
              key={`${it.slug}-${i}`}
              href={`${hrefBase}/${it.slug}`}
              aria-hidden={dup}
              tabIndex={dup ? -1 : 0}
              className="group relative block aspect-[3/2] w-56 shrink-0 overflow-hidden rounded-xl border border-line bg-ink sm:w-64"
            >
              {it.img ? (
                <Image
                  src={it.img}
                  alt={it.name}
                  fill
                  sizes="256px"
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="h-full w-full"
                  style={{
                    background: `linear-gradient(135deg, #${it.accent}, #${it.accent}66)`,
                  }}
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
                  {it.meta}
                </div>
                <div className="font-display text-base font-semibold leading-tight text-white">
                  {it.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
