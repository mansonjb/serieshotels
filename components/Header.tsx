import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { UI } from "@/data/i18n/ui";
import { localePath, type Locale } from "@/lib/i18n";

export function Header({ locale, dict }: { locale: Locale; dict: UI }) {
  const nav = [
    { href: "/titles", label: dict.nav.titles },
    { href: "/destinations", label: dict.nav.destinations },
    { href: "/guides", label: dict.nav.guides },
    { href: "/about", label: dict.nav.about },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
        <Link
          href={localePath(locale, "/")}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Screen<span className="text-muted">To</span>Trip
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
