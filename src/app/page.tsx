import Image from "next/image";
import VideoSection from "./_components/VideoSection";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IB & IGCSE Tuition in Hyderabad | MindSplash Academy",
  description: "MindSplash Academy offers IB, IGCSE, Olympiad and exam preparation with expert teachers, structured learning and branches in Khajaguda, Kokapet and Financial District.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IB & IGCSE Tuition in Hyderabad | MindSplash Academy",
    description: "MindSplash Academy offers IB, IGCSE, Olympiad and exam preparation with expert teachers, structured learning and branches in Khajaguda, Kokapet and Financial District.",
    type: "website",
    url: "https://mindsplash.in/",
    siteName: "MindSplash Academy",
  },
  keywords: [
    "IB & IGCSE tuition in Hyderabad",
    "MindSplash Academy Hyderabad",
    "academic coaching Hyderabad",
    "IGCSE coaching Hyderabad",
    "IB coaching Hyderabad",
    "IB MYP coaching Hyderabad",
    "IB DP coaching Hyderabad",
    "Olympiad preparation Hyderabad",
    "exam preparation Hyderabad",
    "academic support Hyderabad"
  ],
};

// SEO and Content Constants
const SEO_CONSTANTS = {
  HERO_TITLE: "IB, IGCSE & Olympiad Coaching in Hyderabad",
  HERO_SUBTITLE: "Small-group tuition with focused academic support",
  HERO_DESCRIPTION:
    "Explore IB, IGCSE, Olympiad and exam preparation at our Hyderabad centres.",
  HERO_BUTTON: "Explore Programmes",
  WORKSHEETS_HEADING: "Worksheets for focused academic practice",
  TEACHERS_HEADING: "Teachers who make learning engaging",
} as const;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-3 mt-4 flex min-h-[500px] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-r from-gradient-start to-gradient-end shadow-lg sm:mx-5 sm:min-h-[480px] md:mx-7 md:min-h-[480px] md:rounded-[40px] lg:min-h-[520px]">
        <div className="relative z-10 w-full px-5 py-10 sm:w-[88%] sm:px-0 md:py-12 lg:mr-auto lg:ml-[8%] lg:w-[54%]">
          <h1 className="max-w-[594px] font-bold text-[30px] leading-[1.2] tracking-[0px] md:text-[52px] md:leading-[1.2] lg:text-[60px]">
            {SEO_CONSTANTS.HERO_TITLE}
          </h1>
          <p className="mt-7 font-bold text-xl leading-[29px] tracking-[0px] md:mt-9 md:text-2xl">
            {SEO_CONSTANTS.HERO_SUBTITLE}
          </p>
          <h2
            className="mt-2 mb-8 max-w-[480px] font-normal text-base leading-6 tracking-[0px] md:mb-10 md:text-[18px] md:leading-[24px]"
          >
            {SEO_CONSTANTS.HERO_DESCRIPTION}
          </h2>

          <Link
            href="/programs"
            aria-label="Explore IB MYP, IB DP, IGCSE, Olympiad and exam preparation programmes in Hyderabad"
          >
            <PrimaryButton content={SEO_CONSTANTS.HERO_BUTTON} />
          </Link>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[170px] opacity-50 sm:w-[220px] md:w-[320px] md:opacity-60 lg:top-0 lg:bottom-auto lg:w-auto lg:opacity-100">
          <Image
            src="/thumbsUp.png"
            alt="Students smiling and giving a thumbs-up"
            loading="eager"
            width={800}
            height={600}
            className="w-full object-contain lg:w-[480px] xl:w-[580px] 2xl:w-[660px]"
          />
        </div>
      </section>
      <VideoSection />

      {/* Worksheets Section */}
      <section
        className="mx-auto flex w-[92%] flex-col-reverse justify-between sm:w-[88%] lg:w-[74%] lg:flex-row lg:gap-16 xl:gap-20"
        aria-labelledby="worksheets-heading"
      >
        <div className="w-full mt-12 lg:mt-0 lg:max-w-[51%] self-center">
          <h2 className="mb-8" id="worksheets-heading">
            <Heading content={SEO_CONSTANTS.WORKSHEETS_HEADING} />
          </h2>
          <SubHeading
            content="Topic-based materials help students revisit key ideas and practise applying them."
            className="mb-8"
          />
          <Description content="Teachers create worksheets around curriculum topics and use student responses to decide what needs more practice. A typical lesson includes several checkpoints so teachers can check understanding as they go." />
          <Link
            href="/methodology"
            aria-label="Learn more about MindSplash's curriculum and teaching methodology"
          >
            <PrimaryButton
              content="Explore Our Methodology"
              className="mt-5"
            />
          </Link>
        </div>
        <figure className="relative w-full min-w-0">
          <Image
            src="/new_image.svg"
            alt=""
            width={64}
            height={80}
            style={{ width: "auto", height: "auto" }}
            className="absolute -top-8 left-2 sm:-top-12 sm:-left-14"
          />
          <Image
            src={"/meticulous.jpg"}
            alt="Students working through carefully designed academic worksheets"
            width={540}
            height={576}
            priority={true}
            className="h-auto w-full max-w-full rounded-[28px]"
          />
        </figure>
      </section>
      {/* Teachers Section */}
      <section
        className="mx-auto my-20 flex w-[92%] flex-col justify-between sm:w-[88%] md:mt-[132px] md:mb-[100px] lg:w-[74%] lg:flex-row lg:gap-16 xl:gap-20"
        aria-labelledby="teachers-heading"
      >
        <figure className="relative w-full min-w-0">
          <Image
            src="/new_image.svg"
            alt=""
            width={64}
            height={80}
            style={{ width: "auto", height: "auto" }}
            className="absolute -top-8 left-2 sm:-top-12 sm:-left-14"
            loading="lazy"
          />
          <Image
            src={"/teachers-funfilled.jpg"}
            alt="MindSplash teachers creating an engaging classroom experience"
            width={540}
            height={576}
            loading="lazy"
            className="h-auto w-full max-w-full rounded-[28px]"
          />
        </figure>
        <div className="w-full mt-12 lg:mt-0 lg:max-w-[54%] self-center">
          <h2 className="mb-8" id="teachers-heading">
            <Heading content={SEO_CONSTANTS.TEACHERS_HEADING} />
          </h2>
          <SubHeading
            content="Subject teachers plan lessons and help students work through challenging concepts."
            className="mb-8"
          />
          <Description content="Teachers prepare lessons, review student work, and revisit a concept when students need more support. Regular lesson planning helps keep classroom teaching connected to each student's learning needs." />
          <Link
            href="/about#our-teachers"
            aria-label="Learn more about MindSplash's exceptional teachers and teaching methodology"
          >
            <PrimaryButton
              content="Meet Our Teachers"
              className="mt-5"
            />
          </Link>
        </div>
      </section>
      {/* Our Speciality */}
      <section
        className="w-full mx-auto flex flex-col justify-center items-center py-12 mb-8 md:pt-15 md:pb-20 bg-secondary-foreground"
        aria-labelledby="specialities-heading"
      >
        <h2 className="mb-12" id="specialities-heading">
          <Heading content={"Our "} />
          <GradientHeading content="Speciality" />
        </h2>
        <article className="grid w-[92%] max-w-6xl gap-5 sm:w-[88%] sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {specialities.map((each, i) => {
            return (
              <div
                key={i}
                className="p-7 space-y-5 bg-foreground bg-no-repeat bg-origin-padding shadow-[0px_3px_26px_#00000008] rounded-[30px]"
              >
                <figure className="p-3 flex justify-center items-center bg-gradient-to-r from-gradient-start to-gradient-end rounded-[14px] h-[54px] w-[54px]">
                  <Image
                    src={each.icon}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </figure>
                <h3 className="text-left font-bold text-xl leading-[25px] tracking-[0px] text-gradient-start">
                  {each.title}
                </h3>
                <Description content={each.description} />
              </div>
            );
          })}
        </article>
      </section>

      {/* Archived student results */}
      <section
        className="mx-auto mb-20 w-[88%] max-w-6xl overflow-hidden rounded-[32px] border border-card-border bg-foreground shadow-sm"
        aria-labelledby="home-results-heading"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-gradient-to-br from-gradient-start to-gradient-end p-7 text-white sm:p-10 lg:p-12">
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Archived 2024 IB MYP cohort
            </p>
            <h2 id="home-results-heading" className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
              Student achievement, shown with context
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/90 sm:text-base">
              One student scored 54 out of 56 in the IB MYP eAssessment. Multiple students in the same cohort earned 7 out of 7 in Mathematics.
            </p>
            <Link
              href="/about#results"
              className="mt-7 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-bold text-secondary transition-colors hover:bg-white/90"
            >
              Read the archived results
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-1 lg:content-center lg:p-10">
            <article className="rounded-2xl border border-card-border bg-secondary-foreground p-5 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-secondary">IB MYP eAssessment</p>
                  <p className="mt-1 text-xs text-description">2024 cohort · one student</p>
                </div>
                <p className="text-3xl font-bold text-gradient-start">54<span className="text-lg text-description">/56</span></p>
              </div>
              <div
                className="mt-5 h-3 overflow-hidden rounded-full bg-card-border"
                role="img"
                aria-label="54 out of 56 points"
              >
                <div className="h-full rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" style={{ width: `${(54 / 56) * 100}%` }} />
              </div>
              <p className="mt-2 text-right text-xs text-description">54 of 56 points</p>
            </article>

            <article className="flex flex-col justify-between rounded-2xl border border-card-border bg-secondary-foreground p-5 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-secondary">IB MYP Mathematics</p>
                <p className="mt-1 text-xs text-description">Archived 2024 cohort result</p>
              </div>
              <p className="mt-4 text-3xl font-bold text-gradient-start">7<span className="text-lg text-description">/7</span></p>
              <p className="mt-1 text-sm text-description">Multiple students earned the top score.</p>
            </article>
          </div>
        </div>
        <p className="border-t border-card-border px-6 py-4 text-xs leading-5 text-description sm:px-10">
          These are historical results from the 2024 cohort, not current-year results. Individual outcomes vary.
        </p>
      </section>

      {/* Other Specialities */}
      <section
        className="w-full mx-auto flex flex-col justify-center items-center mb-[100px]"
        aria-labelledby="other-specialities-heading"
      >
        <h2
          className="mb-12 text-center px-3 md:px-0"
          id="other-specialities-heading"
        >
          <Heading content={"Explore Our "} />
          <GradientHeading content="Programmes" />
        </h2>
        <article className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6 w-[88%] max-w-6xl">
          {otherSpecialities.map((each, i) => {
            return (
              <Link
                key={i}
                href={each.href}
                aria-label={each.linkLabel}
                className="flex flex-col-reverse md:flex-row xl:flex-col-reverse 2xl:flex-row items-center gap-5 p-4 lg:p-5 bg-secondary-foreground shadow-[0px_3px_26px_#00000008] border border-card-border rounded-[24px]"
              >
                <div className="space-y-4">
                  <h3
                    style={{
                      background: `linear-gradient(to right, ${each.from}, ${each.to})`,
                    }}
                    className="rounded-[4px] px-2 py-0.5 w-fit text-left font-semibold text-base leading-6 tracking-[0px] text-foreground"
                  >
                    {each.title}
                  </h3>
                  <p className="text-left font-medium text-sm leading-[21px] tracking-[0px] text-secondary">
                    {each.description}
                  </p>
                  <p className="font-semibold text-gradient-start">{each.linkLabel}</p>
                </div>
                <Image
                  src={each.icon}
                  alt=""
                  width={200}
                  height={132}
                  className="mt-3 h-auto w-full max-w-[200px] object-contain xl:max-w-[180px]"
                  loading="lazy"
                />
              </Link>
            );
          })}
        </article>
        <p className="mt-8 text-center text-sm text-secondary">
          Find a nearby centre: {[
            { label: "Khajaguda", href: "/branches/khajaguda" },
            { label: "Kokapet", href: "/branches/kokapet" },
            { label: "Financial District", href: "/branches/financialdistrict" },
          ].map((branch, index) => (
            <span key={branch.href}>
              {index > 0 ? " · " : ""}<Link href={branch.href} className="font-semibold text-gradient-start hover:underline">{branch.label} tuition centre</Link>
            </span>
          ))}
        </p>
      </section>

      {/* Subject links */}
      <section
        className="mb-20 bg-secondary-foreground py-14 md:py-20"
        aria-labelledby="subject-support-heading"
      >
        <div className="mx-auto w-[88%] max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <h2 id="subject-support-heading" className="mb-4">
              <Heading content="Find support by " />
              <GradientHeading content="subject" />
            </h2>
            <p className="text-description leading-7">
              Explore subject coaching for IB MYP, IB DP and Cambridge IGCSE. Each subject page explains the areas students can work on and how lessons can support their current course.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {subjectGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-card-border bg-foreground p-6 shadow-sm"
              >
                <h3 className="mb-4 text-lg font-bold text-secondary">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.subjects.map((subject) => (
                    <li key={subject.label}>
                      <Link
                        href={subject.href}
                        className="inline-flex rounded-full border border-card-border px-3 py-2 text-sm font-medium text-secondary transition-colors hover:border-gradient-start hover:text-gradient-start"
                      >
                        {subject.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hyderabad centres */}
      <section
        className="mx-auto mb-20 w-[88%] max-w-6xl"
        aria-labelledby="home-centres-heading"
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 id="home-centres-heading" className="mb-4">
              <Heading content="Visit a MindSplash " />
              <GradientHeading content="centre" />
            </h2>
            <p className="text-description leading-7">
              Choose the Hyderabad centre that works best for your family and view its programmes, contact details and directions.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 font-semibold text-gradient-start underline underline-offset-4 hover:opacity-80"
          >
            Ask about a free demo
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {homeCentres.map((centre) => (
            <Link
              key={centre.name}
              href={centre.href}
              className="group rounded-3xl border border-card-border bg-secondary-foreground p-6 transition-shadow hover:shadow-md"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-gradient-start">
                Hyderabad
              </p>
              <h3 className="mb-3 text-xl font-bold text-secondary group-hover:text-gradient-start">
                {centre.name}
              </h3>
              <p className="mb-5 text-sm leading-6 text-description">{centre.description}</p>
              <span className="font-semibold text-gradient-start">View centre details →</span>
            </Link>
          ))}
        </div>
      </section>


      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "MindSplash Academy | IB and IGCSE Tuition in Hyderabad",
            description:
              "MindSplash Academy provides small-group tuition in Hyderabad across Primary, Cambridge IGCSE, IB MYP, IB DP, Olympiad, and exam preparation programmes.",
            url: "https://mindsplash.in/",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              description:
                "Empowering students with innovative learning methodologies",
              offers: [
                {
                  "@type": "Offer",
                  name: "Primary Education",
                  description:
                    "Primary Math and Science foundations for Grade 5 and below",
                },
                {
                  "@type": "Offer",
                  name: "IGCSE Program",
                  description:
                    "Cambridge O-Level and A-Level subject coaching with topic-based revision resources",
                },
                {
                  "@type": "Offer",
                  name: "IB MYP & DP",
                  description:
                    "IB MYP eAssessment and IB DP subject coaching",
                },
                {
                  "@type": "Offer",
                  name: "Olympiad Preparation",
                  description: "Mathematics and Science problem-solving practice for competitions",
                },
                {
                  "@type": "Offer",
                  name: "Exam Preparation",
                  description:
                    "Digital SAT, PSAT, and school exam preparation",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Educational Programs",
                itemListElement: specialities.map((item, index) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: item.title,
                    description: item.description,
                  },
                })),
              },
            },
          }),
        }}
      />
    </>
  );
}

const specialities = [
  {
    icon: "/users.svg",
    title: "Limited Strength",
    description: "Small groups help teachers follow each studentâ€™s learning progress.",
  },
  {
    icon: "/building.svg",
    title: "Everything Under One Roof",
    description: "Explore academic programmes and exam preparation at one academy.",
  },
  {
    icon: "/sheets.svg",
    title: "Criteria Based Worksheets",
    description:
      "Criteria-based worksheets help students identify strengths and topics to practise.",
  },
  {
    icon: "/hat.svg",
    title: "Looking Beyond",
    description: "Students can get guidance on university and course choices.",
  },
  {
    icon: "/sync.svg",
    title: "In Sync with School",
    description: "Lesson planning considers the curriculum students study at school.",
  },
  {
    icon: "/golf.svg",
    title: "Proven Track Record",
    description: "Read about the academyâ€™s documented student results and experiences.",
  },
];

const otherSpecialities = [
  {
    href: "/programs#primary-program-heading",
    linkLabel: "Primary Math and Science tuition in Hyderabad",
    icon: "/primary_kid.jpg",
    title: "PRIMARY",
    description:
      "Maths and Science foundations for Grade 5 and below, including mental maths, fractions, percentages, and introductory science concepts.",
    from: "#F1A53D",
    to: "#EB3423",
  },
  {
    href: "/programs/igcse",
    linkLabel: "IGCSE tuition in Hyderabad",
    icon: "/igcse_kid.jpg",
    title: "IGCSE",
    description:
      "Cambridge O-Level and A-Level tuition in Mathematics and Sciences, supported by topic-based memory maps.",
    from: "#8BEF81",
    to: "#53B79D",
  },
  {
    href: "/programs/ib-myp",
    linkLabel: "IB MYP tuition in Hyderabad",
    icon: "/mvp_kid.jpg",
    title: "IB MYP",
    description:
      "Criteria-based Mathematics and Science support for Years 4 and 5, including eAssessment practice. Archived 2024 cohort result: 54/56.",
    from: "#86D4EC",
    to: "#6CAADD",
  },
  {
    href: "/programs/ib-dp",
    linkLabel: "IB DP tuition in Hyderabad",
    icon: "/dp_kid.jpg",
    title: "IB DP",
    description:
      "Subject support across IB DP Mathematics, Sciences, Economics, Language and Literature, and Computer Science.",
    from: "#BC4FA9",
    to: "#B54668",
  },
  {
    href: "/programs/olympiads",
    linkLabel: "Olympiad classes in Hyderabad",
    icon: "/olympiad_kid.jpg",
    title: "OLYMPIADS",
    description:
      "Led by a National Math Olympiad awardee, we prepare students in Grades 6â€“10 for IOQM, AMC 8/10/12, and selected Mathematics and Science competitions.",
    from: "#6ADAD4",
    to: "#38758B",
  },
  {
    href: "/programs/exam-prep",
    linkLabel: "SAT, PSAT and exam preparation in Hyderabad",
    icon: "/exam_kid.jpg",
    title: "SAT / PSAT & EXAM PREP",
    description:
      "Digital SAT and PSAT practice in Math and Reading and Writing, with timed exercises and review.",
    from: "#F2F169",
    to: "#F8D560",
  },
];

const subjectGroups = [
  {
    title: "IB MYP subjects",
    subjects: [
      { label: "Mathematics", href: "/programs/ib-myp/mathematics" },
      { label: "Physics", href: "/programs/ib-myp/physics" },
      { label: "Chemistry", href: "/programs/ib-myp/chemistry" },
      { label: "Biology", href: "/programs/ib-myp/biology" },
    ],
  },
  {
    title: "IB DP subjects",
    subjects: [
      { label: "Math AA", href: "/programs/ib-dp/mathematics-analysis-approaches" },
      { label: "Math AI", href: "/programs/ib-dp/mathematics-applications-interpretation" },
      { label: "Physics", href: "/programs/ib-dp/physics" },
      { label: "Chemistry", href: "/programs/ib-dp/chemistry" },
      { label: "Economics", href: "/programs/ib-dp/economics" },
      { label: "Computer Science", href: "/programs/ib-dp/computer-science" },
    ],
  },
  {
    title: "IGCSE subjects",
    subjects: [
      { label: "Mathematics", href: "/programs/igcse/mathematics" },
      { label: "Physics", href: "/programs/igcse/physics" },
      { label: "Chemistry", href: "/programs/igcse/chemistry" },
      { label: "Biology", href: "/programs/igcse/biology" },
      { label: "Computer Science", href: "/programs/igcse/computer-science" },
    ],
  },
];

const homeCentres = [
  {
    name: "Khajaguda",
    href: "/branches/khajaguda",
    description: "View the Khajaguda centre location, programmes and contact information.",
  },
  {
    name: "Kokapet",
    href: "/branches/kokapet",
    description: "Explore programme details and visit information for the Kokapet centre.",
  },
  {
    name: "Financial District",
    href: "/branches/financialdistrict",
    description: "See the centre details, available programmes and directions.",
  },
];
