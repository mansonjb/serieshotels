import Link from "next/link";
import type { UI } from "@/data/i18n/ui";
import { localePath, type Locale } from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: UI }) {
  const cols = [
    {
      heading: dict.footer.explore,
      links: [
        { href: "/titles", label: dict.nav.titles },
        { href: "/destinations", label: dict.nav.destinations },
        { href: "/guides", label: dict.nav.guides },
      ],
    },
    {
      heading: dict.footer.site,
      links: [
        { href: "/about", label: dict.nav.about },
        { href: "/affiliate-disclosure", label: dict.footer.affiliateDisclosure },
      ],
    },
  ];
  return (
    <footer className="mt-20 border-t border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <div className="font-display text-lg font-bold text-ink">
            Screen<span className="text-muted">To</span>Trip
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {dict.footer.tagline}
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.heading}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {col.heading}
            </p>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={localePath(locale, l.href)}
                    className="text-sm text-ink/80 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          © {SITE_NAME}. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
