import type { CSSProperties, ReactNode } from "react";

export type AffiliateNetwork =
  | "stay22"
  | "viator"
  | "getyourguide"
  | "discovercars"
  | "tiqets"
  | "amazon";

type Props = {
  href: string;
  network: AffiliateNetwork;
  /** Free-form analytics tag, e.g. "dubrovnik-walls-viator". */
  context: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  children: ReactNode;
};

/**
 * The single front door for every outbound monetized link.
 *
 * - `rel="sponsored noopener nofollow"` for FTC + SEO hygiene.
 * - Opens in a new tab so the reader keeps their place.
 * - `data-affiliate-*` attrs let analytics group clicks by network/context
 *   without touching call sites when tracking is added later.
 */
export function AffiliateLink({
  href,
  network,
  context,
  className,
  style,
  ariaLabel,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener nofollow"
      data-affiliate-network={network}
      data-affiliate-context={context}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
