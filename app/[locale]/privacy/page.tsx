import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  DEFAULT_LOCALE,
  getDict,
  isLocale,
  localePath,
  t,
  type Locale,
} from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";
import { alternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);
  return {
    title: dict.privacyPage.title,
    alternates: alternates(loc, "/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(loc);

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs
        items={[
          { name: dict.breadcrumb.home, href: localePath(loc, "/") },
          { name: dict.privacyPage.title },
        ]}
      />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink">
        {dict.privacyPage.title}
      </h1>
      <div className="longform mt-8">
        {dict.privacyPage.blocks.map((b, i) => (
          <div key={i}>
            {"heading" in b && b.heading ? <h2>{b.heading}</h2> : null}
            <p>{t(b.body, { site: SITE_NAME })}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
