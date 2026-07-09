import { Metadata } from "next";
import Image from "next/image";
import SpeakUsForm from "./_components/SpeakUsForm";

export const metadata: Metadata = {
  title: "Contact MindSplash Academy - Get in Touch for Educational Excellence",
  description:
    "Contact MindSplash Academy today! Speak with our enrollment team about our curriculum, programs, and how we can help your child excel. Get personalized guidance in less than a minute.",
  keywords:
    "contact MindSplash Academy, enrollment inquiry, curriculum information, educational programs, student consultation",
  openGraph: {
    title:
      "Contact MindSplash Academy - Get in Touch for Educational Excellence",
    description:
      "Contact MindSplash Academy today! Speak with our enrollment team about our curriculum, programs, and how we can help your child excel.",
    type: "website",
    url: "https://mindsplash.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact MindSplash Academy - Get in Touch for Educational Excellence",
    description:
      "Contact MindSplash Academy today! Speak with our enrollment team about our curriculum, programs, and how we can help your child excel.",
  },
};

// SEO and Content Constants
const SEO_CONSTANTS = {
  PAGE_TITLE: "Speak With Us",
  HERO_SUBTITLE: "Get in Touch for Educational Excellence",
  FORM_DESCRIPTION:
    "Keen to find out more details about our curriculum and programmes? Simply fill in and submit the form below (it takes less than a minute!). Our enrolment team will contact you to discuss your child's needs and find a suitable class for your child.",
  FORM_DESCRIPTION_PART1:
    "Keen to find out more details about our curriculum and programmes?",
  FORM_DESCRIPTION_PART2:
    "Simply fill in and submit the form below (it takes less than a minute!).",
  FORM_DESCRIPTION_PART3:
    "Our enrolment team will contact you to discuss your child's needs and find a suitable class for your child.",
} as const;

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-7 mt-5 flex justify-center items-center h-[250px] md:h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="mt-15 md:mt-24 xl:mt-0">
          <h1 className="relative font-bold  text-[24px] md:text-[35px] lg:text-[36px] 2xl:text-[60px] leading-[72px] tracking-[0px]">
            <Image
              src={"/new.svg"}
              alt="MindSplash Academy - Contact us for educational excellence"
              width={64}
              height={80}
              className="absolute -top-6 md:-top-12 -left-14 scale-50 md:scale-none"
              loading="lazy"
            />
            {SEO_CONSTANTS.PAGE_TITLE}
          </h1>
        </div>
      </section>
      {/* Contact Form Section */}
      <section
        className="w-full mx-auto flex flex-col justify-center items-center my-10 p-6 lg:p-0 md:my-20"
        aria-labelledby="contact-form-heading"
      >
        <dl className="lg:w-[80%] xl:w-[55%] w-full rounded-[50px] p-10 md:p-15 bg-secondary-foreground shadow-md">
          <dd
            className="text-center font-normal text-xl leading-[29px] tracking-[0px] text-description"
            id="contact-form-heading"
          >
            {SEO_CONSTANTS.FORM_DESCRIPTION_PART1}
            <br />
            {SEO_CONSTANTS.FORM_DESCRIPTION_PART2}
            <br />
            Our enrolment team will contact you to discuss your child’s needs
            {SEO_CONSTANTS.FORM_DESCRIPTION_PART3}
          </dd>
          <dd className="w-full mt-15">
            <SpeakUsForm />
          </dd>
        </dl>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact MindSplash Academy - Get in Touch for Educational Excellence",
            description:
              "Contact MindSplash Academy today! Speak with our enrollment team about our curriculum, programs, and how we can help your child excel. Get personalized guidance in less than a minute.",
            url: "https://mindsplash.com/contact",
            mainEntity: {
              "@type": "ContactPage",
              name: "Contact MindSplash Academy",
              description:
                "Get in touch with MindSplash Academy for enrollment inquiries and curriculum information",
              mainEntity: {
                "@type": "Organization",
                name: "MindSplash Academy",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  description: "Enrollment team contact form",
                  availableLanguage: "English",
                },
                potentialAction: {
                  "@type": "ContactAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://mindsplash.com/contact",
                    inLanguage: "English",
                  },
                  result: {
                    "@type": "ContactAction",
                    description:
                      "Our enrollment team will contact you to discuss your child's needs and find a suitable class",
                  },
                },
              },
            },
          }),
        }}
      />
    </>
  );
}
