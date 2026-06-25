"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent";

/**
 * Microsoft Clarity (heatmaps + session recordings). Because Clarity records
 * behaviour, it is far more privacy-sensitive than GA, so we do NOT load the
 * tag at all until the visitor accepts cookies (consent === "all"). Declining
 * or ignoring the banner means Clarity never loads and records nothing.
 *
 * The project id is public (it ships in the tag URL): hardcoded default,
 * overridable via NEXT_PUBLIC_CLARITY_ID.
 */
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "xcqthle32l";

export function MicrosoftClarity() {
  const { consent } = useConsent();
  if (!CLARITY_ID || consent !== "all") return null;
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_ID}");
window.clarity&&window.clarity("consent");`}
    </Script>
  );
}
