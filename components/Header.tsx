import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAV = [
  { href: "/titles", label: "Series & Films" },
  { href: "/destinations", label: "Destinations" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink">
          Screen<span className="text-muted">To</span>Trip
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
