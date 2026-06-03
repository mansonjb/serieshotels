import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `What ${SITE_NAME} is, how we build the location data, and how we keep it honest.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        About {SITE_NAME}
      </h1>

      <div className="longform mt-8">
        <p>
          {SITE_NAME} is a set-jetting travel guide. We map the real, visitable
          places where films and series were shot, and pair each one with what
          you actually need to plan a visit: the scene, the exact point on the
          map, how to get there, and where to stay nearby.
        </p>

        <h2>How the data is built</h2>
        <p>
          Every location is entered by hand into a typed dataset and cross-checked
          against production sources, regional film commissions and local tourism
          boards. We only list spots that are genuinely accessible — public
          landmarks, ticketed monuments, bookable hotels — and we write the scene
          notes and visiting tips in our own words. We never copy synopses or
          reviews.
        </p>

        <h2>No copyrighted imagery</h2>
        <p>
          You will not find posters, stills or studio logos here. The screen
          content belongs to its makers; we point you at the real-world places,
          not their footage. The site is deliberately built from typography and
          colour rather than borrowed images.
        </p>

        <h2>How we keep the lights on</h2>
        <p>
          Some links on the site are affiliate links — hotels through Stay22,
          tours and tickets through partners like Viator, GetYourGuide and
          Tiqets, and car rental through DiscoverCars. If you book through one we
          may earn a small commission, at no extra cost to you. It never changes
          which places we list or what we say about them. The full policy is on
          our{" "}
          <a href="/affiliate-disclosure">affiliate disclosure</a> page.
        </p>
      </div>
    </main>
  );
}
