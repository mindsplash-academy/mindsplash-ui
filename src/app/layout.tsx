import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import CustomNavBar from "./_components/CustomNavBar";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";
import Script from "next/script";
import AnalyticsEvents from "./_components/AnalyticsEvents";

const configuredGaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gaMeasurementId = configuredGaId && /^G-[A-Z0-9]+$/i.test(configuredGaId)
  ? configuredGaId
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mindsplash.in"),
  title: {
    default: "IB & IGCSE Coaching in Hyderabad | MindSplash Academy",
  },
  description:
    "Premium IB (MYP, DP) and IGCSE coaching in Hyderabad. Located in Khajaguda, Kokapet, and Financial District. Expert coaching for SAT, PSAT, and Olympiads.",
  keywords: [
    "IB Coaching Hyderabad",
    "IGCSE Coaching Hyderabad",
    "IB MYP Tuitions",
    "IB DP Tuitions",
    "Olympiad Coaching",
    "SAT Preparation Hyderabad",
    "PSAT Preparation",
    "Khajaguda Tuitions",
    "Kokapet Tuitions",
    "Financial District Tuitions",
    "Best IB Tutors",
  ],
  openGraph: {
    title: "MindSplash Academy | Elite IB & IGCSE Coaching in Hyderabad",
    description: "Expert IB and IGCSE coaching across Khajaguda, Kokapet and Financial District. Achieve academic excellence with our personalized programmes.",
    url: "https://mindsplash.in",
    siteName: "MindSplash Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindSplash Academy | Elite IB & IGCSE Coaching in Hyderabad",
    description: "Expert IB and IGCSE coaching across Khajaguda, Kokapet and Financial District. Achieve academic excellence with our personalized programmes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Additional SEO */}
        <meta name="application-name" content="MindSplash" />
        <meta name="apple-mobile-web-app-title" content="MindSplash" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/mindsplash-logo.png" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Canonical URLs are set per page through metadata.alternates. */}

        {/* Structured Data for Organization + LocalBusiness branches */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              description:
                "IB and IGCSE coaching in Hyderabad — IB MYP, IB DP, IGCSE, Olympiad, SAT/PSAT programmes across Khajaguda, Kokapet and Financial District.",
              url: "https://mindsplash.in/",
              logo: "https://mindsplash.in/mindsplash-logo.png",
              telephone: "+917075340810",
              email: "reachus@mindsplash.com",
              sameAs: [
                "https://www.facebook.com/MindsplashAcademy",
                "https://x.com/MindsplashA",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "enrollment",
                telephone: "+917075340810",
                availableLanguage: "English",
              },
              location: [
                {
                  "@type": "LocalBusiness",
                  name: "MindSplash Academy — Khajaguda",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "4th Floor, Arka Rochish, Khajaguda-Nanakramguda Road, Gachibowli",
                    addressLocality: "Hyderabad",
                    addressRegion: "Telangana",
                    postalCode: "500089",
                    addressCountry: "IN",
                  },
                  telephone: "+917075340810",
                },
                {
                  "@type": "LocalBusiness",
                  name: "MindSplash Academy — Kokapet",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "4th Floor, Raichandani Business Bay, Opp. Rajapushpa Regalia, Kokapet",
                    addressLocality: "Hyderabad",
                    addressRegion: "Telangana",
                    postalCode: "500075",
                    addressCountry: "IN",
                  },
                  telephone: "+917075340810",
                },
                {
                  "@type": "LocalBusiness",
                  name: "MindSplash Academy — Financial District",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Above ICICI Bank, My Home Vihanga Road, Gachibowli",
                    addressLocality: "Hyderabad",
                    addressRegion: "Telangana",
                    postalCode: "500032",
                    addressCountry: "IN",
                  },
                  telephone: "+917075340810",
                },
              ],
              offers: {
                "@type": "Offer",
                category: "Educational Services",
                description:
                  "IB MYP, IB DP, IGCSE, Olympiad, SAT/PSAT and primary education programmes",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased relative overflow-x-hidden">
        {gaMeasurementId && (
          <>
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; window.gtag = function(){window.dataLayer.push(arguments);}; window.gtag('js', new Date()); window.gtag('config', '${gaMeasurementId}');`,
              }}
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
          </>
        )}
        <AnalyticsEvents />
        <Toaster position="top-right" richColors />
        <header className="relative z-50 mx-3 mt-2 flex min-h-16 flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-3xl bg-gradient-to-r from-gradient-start to-gradient-end px-4 py-2 shadow-lg sm:mx-5 sm:px-6 lg:mx-auto lg:mt-3 lg:max-w-7xl lg:flex-nowrap lg:px-8 lg:py-2">
          <Link href="/" aria-label="MindSplash home" className="shrink-0">
            <Image
              src="/mindsplash-logo.png"
              alt="MindSplash Academy"
              width={172}
              height={64}
              priority
              className="h-auto w-[112px] sm:w-[150px]"
            />
          </Link>
          <CustomNavBar />
        </header>
        <main>{children}</main>


        <Footer />
      </body>
    </html>
  );
}
