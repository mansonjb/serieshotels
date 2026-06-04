import NextImage from "next/image";

/**
 * Site-wide image wrapper. A fixed-aspect frame + next/image `fill`, which
 * gives automatic AVIF/WebP, responsive srcset, and lazy-loading below the
 * fold. All sources are local /public JPEGs fetched from Google Places
 * (real places only, no posters/stills).
 */
export function Img({
  src,
  alt = "",
  ratio = "aspect-[4/3]",
  rounded = "",
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  priority = false,
}: {
  src: string;
  alt?: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[16/9]". */
  ratio?: string;
  /** Tailwind rounding class, e.g. "rounded-2xl". */
  rounded?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio} ${rounded} ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
