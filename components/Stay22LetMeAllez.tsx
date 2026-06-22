import Script from "next/script";

// Public Stay22 LetMeAllez account id. It is a client-side id (shipped in the
// browser by design, not a secret), so it defaults here and stays overridable
// via env for other deployments.
const LMA_ID = process.env.NEXT_PUBLIC_STAY22_LMA_ID || "6a394f30aa09004692667d4e";

/**
 * Stay22 LetMeAllez, auto-rewrites hotel/booking links anywhere on the page
 * (Booking, Airbnb, Expedia, Hotels.com, Vrbo, GetYourGuide, TripAdvisor)
 * into trackable affiliate deeplinks. Drop in once at the root layout.
 *
 * Loads lazily so it never blocks first paint.
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
