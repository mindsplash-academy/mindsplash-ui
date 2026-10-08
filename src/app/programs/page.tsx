import Description from "@/components/Description";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IB, IGCSE & Olympiad Programs in Hyderabad | MindSplash Academy",
  description:
    "Explore MindSplash programs for Primary, IGCSE, IB MYP, IB DP, Olympiads and exam preparation across Hyderabad.",
  openGraph: {
    title: "IB, IGCSE & Olympiad Programs in Hyderabad | MindSplash Academy",
    description:
      "Explore MindSplash programs for Primary, IGCSE, IB MYP, IB DP, Olympiads and exam preparation across Hyderabad.",
    type: "website",
    url: "https://mindsplash.in/programs",
  },
  keywords: ["IB IGCSE programs Hyderabad", "IB MYP coaching Hyderabad", "IB DP coaching Hyderabad", "IGCSE tuition Hyderabad", "Olympiad classes Hyderabad"],
  alternates: { canonical: "/programs" },
};

// SEO and Content Constants
const SEO_CONSTANTS = {
  PAGE_TITLE_ONE: "Academic Programmes in Hyderabad",
  PAGE_TITLE_TWO: "IB, IGCSE, Olympiad & Exam Preparation",
  PRIMARY_TITLE: "Primary",
  PRIMARY_SUBTITLE: "Grade 5 and below: Math and Science foundations",
  IGCSE_TITLE: "IGCSE",
  IGCSE_SUBTITLE: "Cambridge O-Level and A-Level tuition in Maths, Sciences and Computer Science",
  IB_MYP_TITLE: "IB MYP",
  IB_MYP_SUBTITLE: "Years 4 and 5: criteria-based learning and eAssessment practice",
  IB_DP_TITLE: "IB DP",
  IB_DP_SUBTITLE: "IB Diploma Programme subject support: Math AA/AI, Sciences, Economics and more",
  OLYMPIAD_TITLE: "Olympiads",
  OLYMPIAD_SUBTITLE: "Problem-solving preparation for Maths and Science competitions",
  EXAM_PREP_TITLE: "SAT / PSAT & Exam Prep",
  EXAM_PREP_SUBTITLE: "Digital SAT, PSAT and school exam preparation",
  FOOTER_HEADING: "Experience learning that's engaging, immersive, and fun.",
  SPEAK_WITH_US: "Speak With Us",
} as const;

export default function ProgramsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Programs" }]} />
      {/* Hero Section */}
      <section className="mx-3 mt-2 sm:mx-5 md:mx-7 md:mt-3 flex justify-center items-center h-[300px] md:h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="relative lg:mt-25 xl:mt-0">
          <div className="mt-20 md:mt-25 lg:mt-8">
            <h1 className="relative text-center break-word font-bold text-[22px] sm:text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[60px] leading-10 lg:leading-[72px] tracking-[0px] px-12 md:px-0">
              {SEO_CONSTANTS.PAGE_TITLE_ONE}
              <span className="block text-center">
                {SEO_CONSTANTS.PAGE_TITLE_TWO}
              </span>
            </h1>
          </div>
        </div>
      </section>
      {/* Primary Program Section */}
      <section
        className="w-[74%] mx-auto flex flex-col lg:flex-row justify-between mt-30 px-4 lg:gap-20 sm:mt-20 md:mt-24 lg:mt-30 lg:px-0"
        aria-labelledby="primary-program-heading"
      >
        <figure className="relative">
          <Image
            src="/new_image.svg"
            alt=""
            width={64}
            height={80}
            style={{ width: "auto", height: "auto" }}
            className="absolute -top-12 -left-14"
            loading="lazy"
          />
          <Image
            src={"/primary_kid.jpg"}
            alt="Students learning Mathematics and Science"
            width={541}
            height={473}
            className="w-full max-w-[541px] h-auto rounded-[28px]"
            loading="lazy"
          />
        </figure>
        <div className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
          <h2 className="mb-[18px]" id="primary-program-heading">
            <GradientHeading content={SEO_CONSTANTS.PRIMARY_TITLE} />
          </h2>
          <SubHeading
            content={SEO_CONSTANTS.PRIMARY_SUBTITLE}
            className="mb-8"
          />
          <Description content="The Primary programme builds confidence in mental maths and core concepts such as number systems, fractions, decimals, ratios, percentages, and data handling. Science lessons introduce life processes and foundational physics through examples connected to everyday experience." />
        </div>
      </section>
      {/* IGCSE Program Section */}
      <section
        className="w-full bg-secondary-foreground mt-10 lg:mt-20"
        aria-labelledby="igcse-program-heading"
      >
        <div className="w-[74%] flex flex-col-reverse lg:flex-row mx-auto justify-between mt-10 lg:mt-0 items-center px-4 lg:gap-20 py-[100px] pb-20">
          <div className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
            <h2 className="mb-[18px]" id="igcse-program-heading">
              <GradientHeading content={SEO_CONSTANTS.IGCSE_TITLE} />
            </h2>
            <SubHeading
              content={SEO_CONSTANTS.IGCSE_SUBTITLE}
              className="mb-8"
            />
            <Description content="Cambridge O-Level and A-Level tuition covers Mathematics, Physics, Chemistry, Biology, and Computer Science. Topic-based memory maps help students organise syllabus content for revision, alongside practice applying ideas to Cambridge-style questions." />
            <p className="mt-4"><Link href="/programs/igcse" className="font-semibold text-gradient-start hover:underline">Cambridge IGCSE tuition in Hyderabad</Link></p>
          </div>
          <figure className="relative">
            <Image
              src="/new_image.svg"
              alt=""
              width={64}
              height={80}
              style={{ width: "auto", height: "auto" }}
              className="absolute -top-12 -left-14"
              loading="lazy"
            />
            <Image
              src={"/igcse_kid.jpg"}
              alt="Student preparing for Cambridge IGCSE exams"
              width={541}
              height={473}
              loading="lazy"
              className="rounded-[28px]"
            />
          </figure>
        </div>
      </section>
      {/* IB MYP Program Section */}
      <section
        className="w-[74%] mx-auto flex flex-col lg:flex-row justify-between my-20 sm:mt-20 md:mt-24 px-4 lg:gap-20 lg:mt-25 lg:px-0"
        aria-labelledby="ib-myp-program-heading"
      >
        <figure className="relative">
          <Image
            src="/new_image.svg"
            alt=""
            width={64}
            height={80}
            style={{ width: "auto", height: "auto" }}
            className="absolute -top-12 -left-14"
            loading="lazy"
          />
          <Image
            src={"/mvp_kid.jpg"}
            alt="Student preparing for an IB MYP eAssessment"
            width={541}
            height={473}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>
        <div className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
          <h2 className="mb-[18px]" id="ib-myp-program-heading">
            <GradientHeading content={SEO_CONSTANTS.IB_MYP_TITLE} />
          </h2>
          <SubHeading
            content={SEO_CONSTANTS.IB_MYP_SUBTITLE}
            className="mb-8"
          />
          <Description content="Students practise computer-based IB MYP eAssessment-style tasks on Assessprep and use criteria-based worksheets and feedback to work on Mathematics and Science skills. An archived result from the 2024 cohort is one student score of 54/56. The programme includes six hours of classes per week: three hours of Mathematics and three hours of Science. Contact a branch for current schedules." />
            <p className="mt-4"><Link href="/programs/ib-myp" className="font-semibold text-gradient-start hover:underline">IB MYP tuition in Hyderabad</Link></p>
        </div>
      </section>
      {/* IB DP Program Section */}
      <section
        className="w-full bg-secondary-foreground mt-10 lg:mt-20"
        aria-labelledby="ib-dp-program-heading"
      >
        <div className="w-[74%] flex mx-auto flex flex-col-reverse lg:flex-row justify-between mt-10 lg:mt-0 items-center px-4 lg:gap-20 py-[100px] pb-20">
          <div className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
            <h2 className="mb-[18px]" id="ib-dp-program-heading">
              <GradientHeading content={SEO_CONSTANTS.IB_DP_TITLE} />
            </h2>
            <SubHeading
              content={SEO_CONSTANTS.IB_DP_SUBTITLE}
              className="mb-8"
            />
            <Description content="The IB Diploma Programme combines subject study with independent academic work. MindSplash Academy offers coaching in Mathematics: Analysis and Approaches (AA), Mathematics: Applications and Interpretation (AI), Physics, Chemistry, Economics, Language and Literature, and Computer Science. Classes run for three hours per subject each week across our Khajaguda, Kokapet and Financial District centres. Contact a branch for current schedules and subject availability." />
            <p className="mt-4"><Link href="/programs/ib-dp" className="font-semibold text-gradient-start hover:underline">IB DP subject tuition in Hyderabad</Link></p>
          </div>
          <figure className="relative">
            <Image
              src="/new_image.svg"
              alt=""
              width={64}
              height={80}
              style={{ width: "auto", height: "auto" }}
              className="absolute -top-12 -left-14"
              loading="lazy"
            />
            <Image
              src={"/dp_kid.jpg"}
              alt="Student studying IB Diploma Programme subjects"
              width={541}
              height={473}
              loading="lazy"
              className="rounded-[28px]"
            />
          </figure>
        </div>
      </section>
      {/* Olympiad Program Section */}
      <section
        className="w-[74%] mx-auto flex flex-col lg:flex-row justify-between my-20 px-4 lg:gap-20 lg:mt-25"
        aria-labelledby="olympiad-program-heading"
      >
        <figure className="relative">
          <Image
            src="/new_image.svg"
            alt=""
            width={64}
            height={80}
            style={{ width: "auto", height: "auto" }}
            className="absolute -top-12 -left-14"
            loading="lazy"
          />
          <Image
            src={"/olympiad_kid.jpg"}
            alt="Students practising Mathematics and Science problems"
            width={541}
            height={473}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>
        <div className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
          <h2 className="mb-[18px]" id="olympiad-program-heading">
            <GradientHeading content={SEO_CONSTANTS.OLYMPIAD_TITLE} />
          </h2>
          <SubHeading
            content={SEO_CONSTANTS.OLYMPIAD_SUBTITLE}
            className="mb-8"
          />
            <Description content="Olympiad preparation covers problem-solving in Mathematics and Science, with practice for competitions such as IOQM and AMC. Contact a branch for current competition and class details." />
            <p className="mt-4"><Link href="/programs/olympiads" className="font-semibold text-gradient-start hover:underline">Olympiad classes in Hyderabad</Link></p>
        </div>
      </section>
      {/* SAT/PSAT & Exam Prep Program Section */}
      <section
        className="w-full bg-secondary-foreground mt-10 lg:mt-20 lg:mb-20"
        aria-labelledby="exam-prep-program-heading"
      >
        <div className="w-[74%] flex flex-col-reverse lg:flex-row mx-auto justify-between items-center px-4 lg:gap-20 py-[100px] pb-20">
          <div className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
            <h2 className="mb-[18px]" id="exam-prep-program-heading">
              <GradientHeading content={SEO_CONSTANTS.EXAM_PREP_TITLE} />
            </h2>
            <SubHeading
              content={SEO_CONSTANTS.EXAM_PREP_SUBTITLE}
              className="mb-8"
            />
            <Description content="Students practise Digital SAT and PSAT Math and Reading and Writing, including timed exercises and review of missed questions." />
            <p className="mt-4"><Link href="/programs/exam-prep" className="font-semibold text-gradient-start hover:underline">SAT, PSAT and school exam preparation in Hyderabad</Link></p>
            <br />
            <Description content="We also support school exam preparation across IB, IGCSE, and national board curricula through mock exams, revision workshops, and doubt-clearing sessions. Contact a branch for current schedules." />
          </div>
          <figure className="relative">
            <Image
              src="/new_image.svg"
              alt=""
              width={64}
              height={80}
              style={{ width: "auto", height: "auto" }}
              className="absolute -top-12 -left-14"
              loading="lazy"
            />
            <Image
              src={"/exam_kid.jpg"}
              alt="Student preparing for a standardised test"
              width={541}
              height={473}
              loading="lazy"
              className="rounded-[28px]"
            />
          </figure>
        </div>
      </section>
      <section className="mx-auto mb-16 w-[85%] lg:w-[75%]" aria-labelledby="programme-centres-heading">
        <h2 id="programme-centres-heading" className="mb-6 text-2xl font-bold text-secondary md:text-3xl">Find a MindSplash tuition centre in Hyderabad</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { name: "Khajaguda", href: "/branches/khajaguda" },
            { name: "Kokapet", href: "/branches/kokapet" },
            { name: "Financial District", href: "/branches/financialdistrict" },
          ].map((branch) => <Link key={branch.href} href={branch.href} className="rounded-2xl border border-card-border bg-secondary-foreground p-5 font-semibold text-gradient-start hover:underline">Explore programmes at the {branch.name} centre</Link>)}
        </div>
      </section>
      {/* Call to Action Section */}
      <section
        className="h-[300px] shadow-lg rounded-[50px] md:rounded-none mx-7 md:mx-0 bg-gradient-to-r from-gradient-start to-gradient-end justify-center sm:px-8 min-h-[400px] md:min-h-[500px] md:px-16 lg:h-[579px] md:bg-[url('/footer_kid.png')] md:bg-no-repeat md:bg-center md:bg-cover flex items-center md:justify-end my-20 md:mb-0"
        aria-labelledby="cta-heading"
      >
        <div className="flex flex-col items-center md:items-start lg:px-30 xl:px-5 space-y-11">
          <p
            className="text-center md:text-left text-xl lg:text-[25px] xl:text-[30px] 2xl:text-[46px] md:leading-[60px] tracking-[0px]"
            id="cta-heading"
          >
            Talk with our team about
            <br />
            <span className="font-semibold">
              {" "}
              engaging, immersive, and fun.
            </span>
          </p>
          <Button asChild className="group">
            <Link
              href="/contact"
              aria-label="Contact MindSplash Academy to learn more about our programs"
            >
              {SEO_CONSTANTS.SPEAK_WITH_US}
              <div className="self-center group-hover:opacity-100 right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                <ChevronRight className="text-foreground" />
              </div>
            </Link>
          </Button>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "MindSplash Academy Programmes in Hyderabad",
            description:
              "Compare Primary, Cambridge IGCSE, IB MYP, IB DP, Olympiad, and exam preparation programmes at MindSplash Academy in Hyderabad.",
            url: "https://mindsplash.in/programs",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              description:
                "Educational programmes for Primary, Cambridge IGCSE, IB MYP, IB DP, Olympiad, and exam preparation students.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Educational Programs",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalProgram",
                      name: "Primary Education",
                      description:
                        "Grade 5 and below - Math and Science foundation program",
                      educationalLevel: "Primary",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalProgram",
                      name: "IGCSE Program",
                      description:
                        "Cambridge O-Level and A-Level subject coaching",
                      educationalLevel: "Secondary",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalProgram",
                      name: "IB MYP",
                      description:
                        "Years 4 and 5: International Baccalaureate Middle Years Programme coaching",
                      educationalLevel: "Secondary",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalProgram",
                      name: "IB DP",
                      description:
                        "IB Diploma Programme - University preparation",
                      educationalLevel: "Secondary",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalProgram",
                      name: "Olympiad Training",
                      description:
                        "International math and science competition preparation",
                      educationalLevel: "Secondary",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalProgram",
                      name: "Exam Preparation",
                      description: "SAT, PSAT and school exam preparation",
                    },
                  },
                ],
              },
            },
          }),
        }}
      />
    </>
  );
}
