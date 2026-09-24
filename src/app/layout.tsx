import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import CustomNavBar from "./_components/CustomNavBar";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";

// Lato
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mindsplash Academy",
  description: "Mindsplash Academy",
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

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="MindSplash - Empowering students with innovative learning methodologies. Discover our comprehensive programs, expert teachers, and proven results in primary, IGCSE, Olympiad, and MVP education."
        />
        <meta
          name="keywords"
          content="MindSplash, education, learning, students, IGCSE, Olympiad, MVP, primary education, innovative learning, expert teachers, academic excellence"
        />
        <meta name="author" content="MindSplash" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mindsplash.com/" />
        <meta
          property="og:title"
          content="MindSplash - Innovative Learning for Academic Excellence"
        />
        <meta
          property="og:description"
          content="Empowering students with innovative learning methodologies. Discover our comprehensive programs, expert teachers, and proven results."
        />
        <meta property="og:image" content="/mindsplash-logo.png" />
        <meta property="og:site_name" content="MindSplash" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mindsplash.com/" />
        <meta
          property="twitter:title"
          content="MindSplash - Innovative Learning for Academic Excellence"
        />
        <meta
          property="twitter:description"
          content="Empowering students with innovative learning methodologies. Discover our comprehensive programs, expert teachers, and proven results."
        />
        <meta property="twitter:image" content="/mindsplash-logo.png" />

        {/* Additional SEO */}
        <meta name="application-name" content="MindSplash" />
        <meta name="apple-mobile-web-app-title" content="MindSplash" />
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

        {/* Canonical URL */}
        <link rel="canonical" href="https://mindsplash.com/" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "MindSplash",
              description:
                "Empowering students with innovative learning methodologies for academic excellence",
              url: "https://mindsplash.com/",
              logo: "https://mindsplash.com/mindsplash-logo.png",
              sameAs: [
                "https://facebook.com/mindsplash",
                "https://instagram.com/mindsplash",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              offers: {
                "@type": "Offer",
                category: "Educational Services",
                description:
                  "Comprehensive educational programs including Primary, IGCSE, Olympiad, and MVP",
              },
            }),
          }}
        />
      </head>
      <body className={`${lato.variable} antialiased relative`}>
        <Toaster position="top-right" richColors />
        <header className="absolute top-5 left-1/2 -translate-x-1/2 flex justify-between w-[70%] md:w-[85%] lg:w-[70%] xl:w-[75%] md:gap-8  items-center md:items-start lg:items-center z-50">
          <Image
            src={"/mindsplash-logo.png"}
            alt="MindSplash - Innovative Learning for Academic Excellence"
            width={172}
            height={64}
            priority
          />
          <CustomNavBar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
