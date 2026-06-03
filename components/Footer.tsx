import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const COLS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Explore",
    links: [
      { href: "/titles", label: "Series & Films" },
      { href: "/destinations", label: "Destinations" },
      { href: "/guides", label: "Guides" },
    ],
  },
  {
    heading: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <div className="font-display text-lg font-bold text-ink">
            Screen<span className="text-muted">To</span>Trip
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {SITE_TAGLINE}
          </p>
        </div>
        {COLS.map((col) => (
          <div key={col.heading}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {col.heading}
            </p>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
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
          © {SITE_NAME}. Real places only — no copyrighted stills or posters.
        </div>
      </div>
    </footer>
  );
}
