import { imageCredit } from "@/lib/imageCredits";

/**
 * Required CC attribution line under a Wikimedia Commons hero image:
 * author + license, linking to the file page and the licence. Renders nothing
 * when there's no credit (e.g. a gradient-fallback place).
 */
export function PhotoCredit({
  kind,
  slug,
}: {
  kind: "locations" | "destinations";
  slug: string;
}) {
  const c = imageCredit(kind, slug);
  if (!c) return null;
  return (
    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
      {c.source ? (
        <a href={c.source} target="_blank" rel="noopener nofollow" className="hover:text-ink">
          {c.author}
        </a>
      ) : (
        c.author
      )}
      {c.license ? (
        <>
          {" · "}
          {c.licenseUrl ? (
            <a href={c.licenseUrl} target="_blank" rel="noopener nofollow" className="hover:text-ink">
              {c.license}
            </a>
          ) : (
            c.license
          )}
        </>
      ) : null}
      {" · Wikimedia Commons"}
    </p>
  );
}
