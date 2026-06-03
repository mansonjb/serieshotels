import Script from "next/script";

const LMA_ID = process.env.NEXT_PUBLIC_STAY22_LMA_ID || "";

/**
 * Stay22 LetMeAllez — auto-rewrites hotel/booking links anywhere on the page
 * (Booking, Airbnb, Expedia, Hotels.com, Vrbo, GetYourGuide, TripAdvisor)
 * into trackable affiliate deeplinks. Drop in once at the root layout.
 *
 * Loads lazily so it never blocks first paint. Renders nothing when the id is
 * unset — no broken tag, no console error — so local dev stays clean.
 */
export function Stay22LetMeAllez() {
  if (!LMA_ID) return null;

  return (
    <Script
      id="stay22-lma"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (function (s, t, a, y) {
            s.Stay22 = s.Stay22 || {};
            s.Stay22.params = { lmaID: '${LMA_ID}' };
            var el = t.createElement(a);
            var first = t.getElementsByTagName(a)[0];
            el.async = 1;
            el.src = 'https://scripts.stay22.com/letmeallez.js';
            first.parentNode.insertBefore(el, first);
          })(window, document, 'script');
        `,
      }}
    />
  );
}
