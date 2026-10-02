import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactUsModal from "../../_components/ContactUsModal";

const faqs = [
  {
    question: "Where is the MindSplash Academy Financial District branch?",
    answer:
      "MindSplash Academy's Financial District location is above ICICI Bank on My Home Vihanga Road, Gachibowli, Hyderabad - 500032.",
  },
  {
    question:
      "What programs are available at MindSplash Academy Financial District?",
    answer:
      "MindSplash Academy provides academic programs including IGCSE, IB MYP, IB DP, Olympiad preparation and exam preparation.",
  },
  {
    question: "Does MindSplash offer IGCSE coaching in Financial District?",
    answer:
      "IGCSE is one of the academic programs listed by MindSplash Academy. Contact the academy to confirm current subjects, batches and schedules.",
  },
  {
    question: "Does MindSplash offer IB MYP and IB DP coaching?",
    answer:
      "MindSplash Academy provides dedicated IB MYP and IB DP program information. Contact the academy to confirm current availability.",
  },
  {
    question: "Does MindSplash Academy provide Olympiad preparation?",
    answer:
      "Olympiad preparation is one of the academic programs listed by MindSplash Academy.",
  },
];

export const metadata: Metadata = {
  title:
    "MindSplash Academy Financial District | IGCSE, IB & Olympiad Coaching",

  description:
    "Explore MindSplash Academy Financial District for IGCSE, IB MYP, IB DP, Olympiad preparation and exam preparation programs in Hyderabad.",

  keywords: [
    "MindSplash Academy Financial District",
    "academic coaching Financial District",
    "IGCSE coaching Financial District",
    "IB coaching Financial District",
    "IB MYP coaching Financial District",
    "IB DP coaching Financial District",
    "Olympiad coaching Financial District",
    "exam preparation Financial District",
  ],

  alternates: {
    canonical: "https://mindsplash.in/branches/financialdistrict",
  },

  openGraph: {
    title:
      "MindSplash Academy Financial District | IGCSE, IB & Olympiad Coaching",

    description:
      "Explore IGCSE, IB MYP, IB DP, Olympiad and exam preparation programs at MindSplash Academy Financial District.",

    url: "https://mindsplash.in/branches/financialdistrict",

    siteName: "MindSplash Academy",

    type: "website",

    images: [
      {
        url: "https://mindsplash.in/financial-district.jpg",
        width: 1200,
        height: 800,
        alt: "MindSplash Academy Financial District",
      },
    ],
  },
};

export default function FinancialDistrictPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mindsplash.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Branches",
        item: "https://mindsplash.in/branches",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Financial District",
        item: "https://mindsplash.in/branches/financialdistrict",
      },
    ],
  };

  const branchSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",

    name: "MindSplash Academy - Financial District",

    url: "https://mindsplash.in/branches/financialdistrict",

    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "Above ICICI Bank - My Home Vihanga Road",
      addressLocality: "Gachibowli",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Place",
      name: "Financial District, Hyderabad, Telangana, India",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <section className="mx-5 mt-5 overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg md:mx-7 md:rounded-[50px]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="font-semibold text-white">
              MindSplash Academy
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              MindSplash Academy Financial District
            </h1>

            <p className="mt-5 text-2xl font-semibold text-white md:text-3xl">
              Academic Coaching in Financial District, Hyderabad
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Explore IGCSE, IB MYP, IB DP, Olympiad preparation and exam
              preparation programs at MindSplash Academy Financial District.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-7 py-4 font-semibold text-gray-900 hover:bg-gray-100"
              >
                Enquire Now
              </Link>

              <Link
                href="/programs"
                className="rounded-xl border border-white/70 px-7 py-4 font-semibold text-white hover:bg-white/10"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/financial-district.jpg"
              alt="MindSplash Academy Financial District"
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <main className="bg-white text-gray-900">
        <article className="mx-auto max-w-6xl px-6 py-16">
          <section>
            <h2 className="text-3xl font-bold md:text-4xl">
              Academic Coaching in Financial District
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              MindSplash Academy provides academic learning and preparation
              programs for students in Hyderabad. The Financial District
              location provides access to academic programs for students and
              families in and around Financial District and Gachibowli.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can explore IGCSE, IB MYP, IB DP, Olympiad preparation
              and exam preparation programs.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Coaching in Financial District
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              IGCSE is one of the academic programs listed by MindSplash
              Academy. The program information includes Mathematics, Physics,
              Chemistry, Biology and Computer Science.
            </p>

            <Link
              href="/programs/igcse"
              className="mt-6 inline-block font-semibold underline hover:text-orange-600"
            >
              Explore IGCSE Coaching →
            </Link>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IB MYP and IB DP Programs
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students following an IB pathway can explore the dedicated IB
              MYP and IB DP program pages.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/programs/ib-myp"
                className="rounded-xl border px-5 py-3 font-semibold hover:border-orange-400"
              >
                Explore IB MYP
              </Link>

              <Link
                href="/programs/ib-dp"
                className="rounded-xl border px-5 py-3 font-semibold hover:border-orange-400"
              >
                Explore IB DP
              </Link>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Olympiad Preparation in Financial District
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students can explore Olympiad preparation to work on subject
              fundamentals, problem-solving practice and examination-oriented
              preparation.
            </p>

            <Link
              href="/programs/olympiads"
              className="mt-6 inline-block font-semibold underline hover:text-orange-600"
            >
              Explore Olympiad Preparation →
            </Link>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Exam Preparation in Financial District
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              MindSplash Academy also provides exam preparation support for
              students who need structured revision and practice.
            </p>

            <Link
              href="/programs/exam-prep"
              className="mt-6 inline-block font-semibold underline hover:text-orange-600"
            >
              Explore Exam Preparation →
            </Link>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              MindSplash Academy Financial District Location
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Above ICICI Bank - My Home Vihanga Road, Gachibowli, Hyderabad,
              Telangana - 500032
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border p-5 shadow-sm"
                >
                  <summary className="cursor-pointer font-semibold">
                    {faq.question}
                  </summary>

                  <p className="mt-3 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-3xl bg-gray-50 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Looking for Academic Coaching in Financial District?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
              Contact MindSplash Academy to discuss programs, availability and
              academic requirements.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block rounded-xl bg-black px-7 py-4 font-semibold text-white hover:bg-gray-800"
            >
              Contact MindSplash Academy
            </Link>
          </section>
        </article>
      </main>

      <ContactUsModal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(branchSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}