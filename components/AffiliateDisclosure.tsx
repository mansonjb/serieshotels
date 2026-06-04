import type { UI } from "@/data/i18n/ui";
import { localePath, type Locale } from "@/lib/i18n";

/** FTC disclosure note. Render near the top of any page with affiliate links. */
export function AffiliateDisclosure({
  locale,
  dict,
  className = "",
}: {
  locale: Locale;
  dict: UI;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.14em] text-muted ${className}`}
    >
      {dict.disclosure.text}{" "}
      <a
        href={localePath(locale, "/affiliate-disclosure")}
        className="underline hover:text-ink"
      >
        {dict.disclosure.how}
      </a>
    </p>
  );
}
