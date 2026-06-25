import Script from "next/script";

/**
 * GA4 (gtag.js). Loaded on every page after hydration, like the sibling sites
 * (hotelswithpets / bestsnowhotels / lemans), so every visit is captured. The
 * measurement id is public (it ships in the page HTML): hardcoded default,
 * overridable via NEXT_PUBLIC_GA_ID.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-T3CZ1EJPL0";

export function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
