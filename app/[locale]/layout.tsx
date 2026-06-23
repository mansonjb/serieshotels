import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stay22LetMeAllez } from "@/components/Stay22LetMeAllez";
import { DEFAULT_LOCALE, LOCALES, getDict, isLocale, localePath, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { ConsentProvider, CookieBanner } from "@/components/consent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ogImages, orgNode } from "@/lib/seo";
import "../globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--ff-display",
  display: "swap",
});
const body = Inter({ subsets: ["latin"], variable: "--ff-body", display: "swap" });
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--ff-mono",
  display: "swap",
});

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
  es: "es_ES",
  it: "it_IT",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dict = getDict(l);
  const languages = Object.fromEntries(LOCALES.map((x) => [x, `/${x}`]));
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME}, ${dict.hero.title}`,
      template: `%s · ${SITE_NAME}`,
    },
    description: dict.hero.subtitle,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[l],
      images: ogImages(undefined, SITE_NAME),
    },
    twitter: { card: "summary_large_image", images: ogImages(undefined, SITE_NAME) },
    alternates: {
      canonical: `/${l}`,
      languages: { ...languages, "x-default": "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <ConsentProvider>
          <GoogleAnalytics />
          <JsonLd data={{ "@context": "https://schema.org", ...orgNode() }} />
          <Header locale={locale} dict={dict} />
          {children}
          <Footer locale={locale} dict={dict} />
          <Stay22LetMeAllez />
          <CookieBanner
            message={dict.consent.message}
            accept={dict.consent.accept}
            decline={dict.consent.decline}
            privacyLabel={dict.privacyPage.title}
            privacyHref={localePath(locale, "/privacy")}
          />
        </ConsentProvider>
      </body>
    </html>
  );
}
