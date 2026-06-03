import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-start px-5 py-28">
      <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-ink">
        This scene didn&apos;t make the cut.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re after doesn&apos;t exist. Try the series, the map,
        or head back to the start.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:opacity-90"
        >
          Back home →
        </Link>
        <Link
          href="/titles"
          className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-paper"
        >
          Browse series
        </Link>
      </div>
    </main>
  );
}
