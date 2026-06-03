/**
 * FTC disclosure note. Render near the top of any page that carries affiliate
 * links (location, destination, title pages). Short, honest, unmissable.
 */
export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.14em] text-muted ${className}`}
    >
      Some links are affiliate links — we may earn a commission at no extra cost
      to you.{" "}
      <a href="/affiliate-disclosure" className="underline hover:text-ink">
        How this works
      </a>
    </p>
  );
}
