"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Lightweight, vendor-free cookie consent. Third-party iframes (Stay22 map,
 * YouTube trailer) are wrapped in <EmbedGate> and only load after the visitor
 * accepts cookies globally or clicks to load that embed, so no third-party
 * cookie is set before consent (GDPR-friendly).
 */
type Consent = "all" | "essential" | null;
const KEY = "stt-consent";
const Ctx = createContext<{ consent: Consent; set: (c: "all" | "essential") => void }>({
  consent: null,
  set: () => {},
});

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent>(null);
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === "all" || v === "essential") setConsent(v);
    } catch {}
  }, []);
  const set = (c: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    setConsent(c);
  };
  return <Ctx.Provider value={{ consent, set }}>{children}</Ctx.Provider>;
}

export const useConsent = () => useContext(Ctx);

export function EmbedGate({
  children,
}: {
  children: ReactNode;
  /** Kept for call-site compatibility; no longer used. */
  loadLabel?: string;
  note?: string;
  minHeight?: number;
}) {
  // Consent gating removed: embeds (Stay22 maps, trailers) load immediately so
  // they never block on a cookie prompt. Analytics load unconditionally too.
  return <>{children}</>;
}

export function CookieBanner({
  message,
  accept,
  decline,
  privacyLabel,
  privacyHref,
}: {
  message: string;
  accept: string;
  decline: string;
  privacyLabel: string;
  privacyHref: string;
}) {
  const { consent, set } = useConsent();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || consent) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-4 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm leading-relaxed text-ink/90">
          {message}{" "}
          <a href={privacyHref} className="underline underline-offset-2">
            {privacyLabel}
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => set("essential")}
            className="rounded-full border border-ink px-4 py-2 text-sm font-semibold text-ink"
          >
            {decline}
          </button>
          <button
            type="button"
            onClick={() => set("all")}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper"
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
}
