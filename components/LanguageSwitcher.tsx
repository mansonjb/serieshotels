"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/i18n";

/** Swaps the locale segment of the current path, keeping the rest of the route. */
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em]">
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={
            l === locale ? "text-ink" : "text-muted transition-colors hover:text-ink"
          }
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
