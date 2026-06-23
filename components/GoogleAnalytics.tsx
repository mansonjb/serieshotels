"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent";

/**
 * GA4 (gtag.js) wired to Google Consent Mode v2. The tag loads on every page,
 * but every storage type defaults to "denied", so NO analytics cookie is set
 * and no personal data is sent until the visitor accepts cookies in
 * <CookieBanner> (consent === "all"). Declining keeps it fully cookieless.
 *
 * The GA measurement id is public by design (it ships in the page HTML), so a
 * hardcoded default is fine and lets analytics work the moment we deploy;
 * NEXT_PUBLIC_GA_ID overrides it if ever needed.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-T3CZ1EJPL0";

export function GoogleAnalytics() {
  const { consent } = useConsent();
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
gtag('js',new Date());
gtag('config','${GA_ID}');`}
      </Script>
      {consent === "all" && (
        <Script id="ga-consent-granted" strategy="afterInteractive">
          {`window.gtag&&gtag('consent','update',{analytics_storage:'granted'});`}
        </Script>
      )}
    </>
  );
}
