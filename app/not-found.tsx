import Link from "next/link";

/**
 * Root 404, reached only for paths with no locale (middleware redirects most
 * traffic to a locale first). Self-contained html/body because the root layout
 * is a passthrough; localized 404s live in app/[locale]/not-found.tsx.
 */
export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#faf8f3",
          color: "#0e0e13",
        }}
      >
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "112px 20px" }}>
          <p style={{ letterSpacing: "0.2em", fontSize: 12, color: "#6b6760" }}>
            404
          </p>
          <h1 style={{ fontSize: 36, margin: "12px 0 0", lineHeight: 1.1 }}>
            This page doesn&apos;t exist.
          </h1>
          <p style={{ color: "#6b6760", marginTop: 16 }}>
            Head back to the start.
          </p>
          <Link
            href="/en"
            style={{
              display: "inline-block",
              marginTop: 24,
              background: "#0e0e13",
              color: "#faf8f3",
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Back home →
          </Link>
        </main>
      </body>
    </html>
  );
}
