import Script from "next/script";

/**
 * Microsoft Clarity (heatmaps + session recordings). Loaded on every page after
 * hydration, like the sibling sites (hotelswithpets / bestsnowhotels / lemans),
 * so every session is actually captured. Project id is public (it ships in the
 * tag URL): hardcoded default, overridable via NEXT_PUBLIC_CLARITY_ID.
 */
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "xcqthle32l";

export function MicrosoftClarity() {
  if (!CLARITY_ID) return null;
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
    </Script>
  );
}
