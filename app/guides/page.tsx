import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GUIDES } from "@/content/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Editorial guides to set-jetting — how to plan, find and respectfully visit film and TV locations.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Guides" }]} />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">Guides</h1>
      <p className="mt-3 max-w-xl text-muted">
        Long-form, practical reading on planning trips around the screen.
      </p>

      <div className="mt-10 space-y-4">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group block rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-lg"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Guide · {g.readingMinutes} min read
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink group-hover:underline">
              {g.title}
            </h2>
            <p className="mt-2 text-muted">{g.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
