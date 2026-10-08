import { Metadata } from "next";
import SpeakUsForm from "./_components/SpeakUsForm";
import Breadcrumbs from "@/components/Breadcrumbs";

const pageTitle = "Contact MindSplash Academy | Book a Free Demo Class";
const pageDescription =
  "Speak with MindSplash Academy about IB, IGCSE, Olympiad and exam preparation programs. Choose a Hyderabad branch and book a free demo class.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    "IB IGCSE tuition contact Hyderabad, contact MindSplash Academy, book a free demo class",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "https://mindsplash.in/contact",
  },
  alternates: { canonical: "/contact" },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <section className="mx-3 mt-2 flex h-[250px] items-center justify-center rounded-[50px] bg-gradient-to-r from-gradient-start to-gradient-end sm:mx-5 md:mx-7 md:mt-3 md:h-[400px]">
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          Contact MindSplash Academy
        </h1>
      </section>

      <section
        className="mx-auto my-10 flex w-full flex-col items-center justify-center p-6 md:my-20 lg:p-0"
        aria-labelledby="contact-form-heading"
      >
        <div className="w-full rounded-[50px] bg-secondary-foreground p-6 shadow-md md:p-12 lg:w-[80%] xl:w-[55%]">
          <h2
            className="mb-3 text-center text-2xl font-bold text-secondary md:text-3xl"
            id="contact-form-heading"
          >
            Request a free demo
          </h2>
          <p className="text-center text-base leading-7 text-description">
            Share your child's current grade, preferred programme, and centre.
            Our enrolment team will contact you about next steps.
          </p>
          <div className="mt-10 w-full">
            <SpeakUsForm />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: pageTitle,
            description: pageDescription,
            url: "https://mindsplash.in/contact",
            mainEntity: {
              "@type": "Organization",
              name: "MindSplash Academy",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                description: "Enrollment team contact form",
                telephone: "+917075340810",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />
    </>
  );
}
