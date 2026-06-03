import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description: `How ${SITE_NAME} uses affiliate links, and our promise that they never influence what we recommend.`,
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Affiliate disclosure" },
        ]}
      />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        Affiliate disclosure
      </h1>

      <div className="longform mt-8">
        <p>
          {SITE_NAME} is reader-supported. Some of the outbound links on this
          site are affiliate links, which means we may earn a commission if you
          make a booking or purchase after clicking one — at no extra cost to
          you. You pay the same price you would have paid anyway.
        </p>

        <h2>Who we work with</h2>
        <ul>
          <li>
            <strong>Stay22</strong> — hotel and accommodation search, including
            the interactive maps and &ldquo;where to stay&rdquo; links.
          </li>
          <li>
            <strong>Viator</strong> and <strong>GetYourGuide</strong> — tours and
            activities.
          </li>
          <li>
            <strong>Tiqets</strong> — attraction tickets.
          </li>
          <li>
            <strong>DiscoverCars</strong> — car rental.
          </li>
        </ul>

        <h2>Our promise</h2>
        <p>
          Affiliate relationships never decide which locations we feature or what
          we say about them. We list a place because it is a real, worthwhile
          filming location, full stop. Commission has no bearing on the scene
          notes, the visiting advice, or the order things appear in.
        </p>

        <h2>Questions</h2>
        <p>
          If anything here is unclear, or you spot a link that looks off, let us
          know and we will fix it. Transparency is the point — this page exists so
          you always know exactly how the site is funded.
        </p>
      </div>
    </main>
  );
}
