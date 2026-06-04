import Link from "next/link";

/** Localized-chrome 404 (renders inside the [locale] layout). */
export default function LocaleNotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-start px-5 py-28">
      <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-ink">
        This scene didn&apos;t make the cut.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re after doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:opacity-90"
      >
        Back home →
      </Link>
    </main>
  );
}
