import Description from "@/components/Description";
import GradientHeading from "@/components/GradientHeading";
import Heading from "@/components/Heading";
import PrimaryButton from "@/components/PrimaryButton";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import Carousal from "./_components/Carousal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageCard from "@/components/ImageCard";
import ImageCarousal from "./_components/ImageCarousal";
import Marquee from "@/components/Marquee";
import Link from "next/link";
import ContactUsModal from "../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MindSplash Academy | IB & IGCSE Experts in Hyderabad",
  description:
    "Meet the academic team and discover MindSplash Academy's teaching methodology, curriculum approach, archived results and student-focused learning model.",
  keywords:
    "IB IGCSE coaching experts Hyderabad, MindSplash Academy, Rahul Chakravarthy, teaching methodology",
  openGraph: {
    title: "About MindSplash Academy | IB & IGCSE Experts in Hyderabad",
    description: "Meet the academic team and discover MindSplash Academy's teaching methodology, curriculum approach, archived results and student-focused learning model.",
    type: "website",
    url: "https://mindsplash.in/about",
  },
  alternates: { canonical: "/about" },
};

// SEO and Content Constants
const SEO_CONSTANTS = {
  PAGE_TITLE: "About MindSplash Academy",
  LEADERS_HEADING: "Meet Our Leaders",
  METHODOLOGY_HEADING: "Our Teaching Methodology",
  HIGHLIGHTS_HEADING: "Highlights",
  TEACHERS_HEADING: "Our Teachers",
  RESULTS_HEADING: "Archived Results",
  KNOW_MORE_BUTTON: "Know More",
  LEADER_NAME: "RAHUL CHAKRAVARTHY",
  LEADER_QUALIFICATION: "B.Tech IIT Madras",
  LEADER_ROLE: "Head of Academics",
  LEADER_DESCRIPTION:
    "National Math Olympiad awardee, IIT Madras graduate, Olympiad author, and educator.",
  IB_MYP_TOPPER: "Archived IB MYP 2024 cohort result â€” 54/56",
  MATH_TOPPERS: "Archived IB MYP 2024 Mathematics results (7/7)",
  ACADEMY_TOPPERS: "Archived MindSplash Academy IB MYP 2024 cohort results",
} as const;

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]} />

      {/* Hero Section */}
      <section className="mx-3 mt-2 sm:mx-5 md:mx-7 md:mt-3 flex justify-center items-center h-[300px] md:h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="mt-16 md:mt-24 xl:mt-0">
          <h1 className="relative text-center break-word font-bold text-[22px] sm:text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[60px] leading-10 md:leading-[72px] tracking-[0px] px-12 md:px-0 lg:max-w-[800px]">
            {SEO_CONSTANTS.PAGE_TITLE}
          </h1>
        </div>
      </section>
      <section
        id="academy-overview"
        className="mx-auto my-12 w-[88%] max-w-6xl md:my-16"
        aria-labelledby="academy-overview-heading"
      >
        <h2 id="academy-overview-heading" className="mb-4 text-2xl font-bold text-secondary md:text-3xl">
          Academic support for Hyderabad students
        </h2>
        <p className="max-w-5xl leading-relaxed text-description">
          MindSplash Academy provides subject-focused academic support for students following IB MYP, IB DP and Cambridge IGCSE programmes, alongside Olympiad, SAT/PSAT and school exam preparation. Lessons use topic-based practice and teacher feedback to help students work on the subjects and skills in their school courses.
        </p>
        <p className="mt-4 max-w-5xl leading-relaxed text-description">
          The academy has centres in Khajaguda, Kokapet and Financial District. Programme availability and schedules can vary by subject and centre, so families can contact the team to discuss a student&apos;s current grade, curriculum and preferred location.
        </p>
        <nav aria-label="Explore MindSplash programmes and centres" className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-gradient-start">
          <Link href="/programs/ib-myp" className="hover:underline">IB MYP coaching in Hyderabad</Link>
          <Link href="/programs/ib-dp" className="hover:underline">IB DP subject coaching in Hyderabad</Link>
          <Link href="/programs/igcse" className="hover:underline">Cambridge IGCSE tuition in Hyderabad</Link>
          <Link href="/programs/olympiads" className="hover:underline">Olympiad preparation in Hyderabad</Link>
          <Link href="/branches" className="hover:underline">Find a Hyderabad centre</Link>
        </nav>
      </section>
      {/* Leadership Section */}
      <section
        id="leadership-team"
        className="flex justify-center mt-15"
        aria-labelledby="leadership-heading"
      >
        <header className="w-[77%] max-w-full px-4">
          <h2 id="leadership-heading">
            <Heading content="Meet Our " />
            <GradientHeading content="Leaders" />
          </h2>
        </header>
      </section>
      {/* Teachers Section */}
      <section
        className="w-[77%] mx-auto flex justify-between flex-col lg:flex-row mt-8 lg:mt-17 mb-10 md:mb-[100px] lg:gap-20"
        aria-labelledby="teachers-heading"
      >
        <figure className="relative max-w-full">
          <Image
            src="/new_right.svg"
            alt=""
            width={64}
            height={80}
            className="absolute -top-12 right-[-12%] h-auto w-16 md:hidden lg:block lg:-right-14"
            loading="lazy"
          />
          <Image
            src={"/mvp_kid.png"}
            alt="Student studying at MindSplash Academy"
            width={540}
            height={576}
            loading="lazy"
          />
        </figure>
        <div className="w-full mt-8 lg:mt-0 lg:max-w-[54%] self-center">
          <h2
            className="text-left font-bold text-[36px] leading-[47px] tracking-[0px] self-baseline"
            id="teachers-heading"
          >
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent from-gradient-start to-gradient-end`}
            >
              {SEO_CONSTANTS.LEADER_NAME}{" "}
            </span>
            <span className={`text-secondary`}>
              , {SEO_CONSTANTS.LEADER_QUALIFICATION}
            </span>
          </h2>
          <SubHeading content={SEO_CONSTANTS.LEADER_ROLE} className="mb-11" />
          <SubHeading
            content={SEO_CONSTANTS.LEADER_DESCRIPTION}
            className="font-bold mb-6"
          />
          <Description content="At MindSplash Academy, Rahul teaches, develops worksheets and other learning tools, plans lessons, and oversees lesson quality across the centres. He also recruits and trains teachers. On behalf of the Government of India, he has trained students from Telangana and Andhra Pradesh for the Indian National Mathematical Olympiad. He has authored Mathematics, Physics, and Chemistry Olympiad books for high school students, and has designed learning content and teacher training for companies across India." />
          <Link href="/authors/rahul-chakravarthy" className="mt-5 inline-flex font-semibold text-gradient-start hover:underline">
            View Rahul Chakravarthy&apos;s academic profile
          </Link>
        </div>
      </section>
      {/* Methodology Section */}
      <section
        id="methodology"
        className="w-full mx-auto flex flex-col justify-center items-center py-10 md:pt-10 md:py-20 bg-secondary-foreground mb-10"
        aria-labelledby="methodology-heading"
      >
        <div className="mb-10">
          <h2
            className="mb-5 text-center font-bold text-[32px] tracking-[0px] bg-gradient-to-r bg-clip-text text-transparent from-gradient-start to-gradient-end self-baseline"
            id="methodology-heading"
          >
            {SEO_CONSTANTS.METHODOLOGY_HEADING}
          </h2>
          <SubHeading
            content="Teachers check understanding during lessons and use feedback to decide when students need another explanation or practice."
            className="mb-6 px-8"
          />
        </div>
        <div className="hidden lg:block mb-[50px] min-h-[440px] w-full">
          <div className="bg-[url('/brain.png')] bg-no-repeat bg-cover h-[298px] relative">
            {/* DOT-1 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[52%] left-[25%]">
              <p className="bg-foreground bg-no-repeat shadow-[0px_3px_26px_#00000008] rounded-[20px] h-[98px] w-[180px] flex justify-center items-center text-secondary font-bold text-[20px] leading-[24px] tracking-[0px]">
                Baseline
                <br />
                Assessment
              </p>
              <Image
                src={"/point_one.svg"}
                alt=""
                className=""
                height={48}
                width={48}
              />
            </div>
            {/* DOT-2 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[91%] left-[36%]">
              <Image
                src={"/point_two.svg"}
                alt=""
                className=""
                height={48}
                width={48}
              />
              <p className="bg-foreground bg-no-repeat shadow-[0px_3px_26px_#00000008] rounded-[20px] h-[98px] w-[180px] flex justify-center items-center text-secondary font-bold text-[20px] leading-[24px] tracking-[0px]">
                Remedial for
                <br />
                pre-reqs
              </p>
            </div>
            {/* DOT-3 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[52%] left-[47%]">
              <p className="bg-foreground bg-no-repeat shadow-[0px_3px_26px_#00000008] rounded-[20px] h-[98px] w-[180px] flex justify-center items-center text-secondary font-bold text-[20px] leading-[24px] tracking-[0px]">
                Lesson
              </p>
              <Image
                src={"/point_three.svg"}
                alt=""
                className=""
                height={48}
                width={48}
              />
            </div>
            {/* DOT-4 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[91%] left-[58%]">
              <Image
                src={"/point_four.svg"}
                alt=""
                className=""
                height={48}
                width={48}
              />
              <p className="bg-foreground bg-no-repeat shadow-[0px_3px_26px_#00000008] rounded-[20px] h-[98px] w-[180px] flex justify-center items-center text-secondary font-bold text-[20px] leading-[24px] tracking-[0px]">
                Formative topic
                <br />
                (pre-requisite)
                <br />
                assessment
              </p>
            </div>
            {/* DOT-5 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[52%] left-[69%]">
              <p className="bg-foreground bg-no-repeat shadow-[0px_3px_26px_#00000008] rounded-[20px] h-[98px] w-[180px] flex justify-center items-center text-secondary font-bold text-[20px] leading-[24px] tracking-[0px]">
                Summative Topic
                <br />
                Assessment
              </p>
              <Image
                src={"/point_five.svg"}
                alt=""
                className=""
                height={48}
                width={48}
              />
            </div>
            {/* DOT-6 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[91%] left-[80%]">
              <Image
                src={"/point_six.svg"}
                alt=""
                className=""
                height={48}
                width={48}
              />
              <p className="bg-foreground bg-no-repeat shadow-[0px_3px_26px_#00000008] rounded-[20px] h-[98px] w-[180px] flex justify-center items-center text-secondary font-bold text-[20px] leading-[24px] tracking-[0px]">
                Remedial
              </p>
            </div>
          </div>
        </div>

        {/* Mobile version (stacked vertically) */}

        <div className="block w-full px-6 mb-20 relative md:flex md:justify-center lg:hidden">
          <div className="relative flex flex-col items-start pl-8">
            <div className="absolute w-0.5 bg-gradient-to-b from-orange-500 to-purple-500 left-5 top-5 bottom-4 lg:top-0 lg:bottom-0"></div>

            {[
              { id: 1, title: "Baseline Assessment", icon: "/point_one.svg" },
              { id: 2, title: "Remedial for pre-reqs", icon: "/point_two.svg" },
              { id: 3, title: "Lesson", icon: "/point_three.svg" },
              {
                id: 4,
                title: "Formative topic (pre-requisite) assessment",
                icon: "/point_four.svg",
              },
              {
                id: 5,
                title: "Summative Topic Assessment",
                icon: "/point_five.svg",
              },
              { id: 6, title: "Remedial", icon: "/point_six.svg" },
            ].map((step) => (
              <div
                key={step.id}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Dot on the line */}
                <div className="absolute -left-7.5 z-10">
                  <Image src={step.icon} alt="" height={40} width={40} />
                </div>
                <p className="bg-foreground shadow-[0px_3px_26px_#00000008] rounded-[20px] py-4 px-6 text-secondary font-bold text-[16px] leading-5 ml-6">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <dl className="w-[65%]">
          <Description content="Lessons use a dynamic feedback approach. A typical 60-minute session has five or six checkpoints where teachers check whether students understand." />
          <br />
          <Description content="Teachers treat each student as an individual learner. At every checkpoint, they ask questions to check understanding and adjust their explanation when needed." />
          <br />
          <Description content="If a student has misunderstood a concept, the teacher revisits it before moving on. This feedback loop helps the class address gaps during the lesson." />
          <Link href="/contact">
            <PrimaryButton content="Explore More" className="mt-5" />
          </Link>
        </dl>
      </section>
      {/* Highlights Section */}
      <section
        id="curriculum"
        className="w-full mx-auto flex flex-col items-center mb-5 md:mb-[100px]"
        aria-labelledby="highlights-heading"
      >
        <div>
          <h2
            className="mb-[50px] text-center font-bold text-[32px] tracking-[0px] bg-gradient-to-r bg-clip-text text-transparent from-gradient-start to-gradient-end self-baseline"
            id="highlights-heading"
          >
            {SEO_CONSTANTS.HIGHLIGHTS_HEADING}
          </h2>
        </div>
        <Carousal />
      </section>

      {/* Our Teachers Section */}
      <section
        id="our-teachers"
        className="mx-auto mb-5 flex w-[90%] flex-col-reverse justify-between gap-8 pt-12 sm:w-[85%] md:w-[80%] md:pt-8 lg:w-[75%] lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16"
        aria-labelledby="our-teachers-heading"
      >
        <div className="flex w-full flex-col justify-center lg:max-w-[52%]">
          <h2 className="mb-8" id="our-teachers-heading">
            <Heading content={"Our "} />
            <GradientHeading content="Teachers " />
          </h2>
          <Description
            content={
              "Our teachers aim to understand each studentâ€™s needs and challenges and take them into account when planning lessons. At MindSplash Academy, they work to create an engaging classroom where students feel comfortable learning. We value both academic progress and studentsâ€™ confidence in class."
            }
            className="!leading-[25px] !text-base"
          />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h3 className="font-bold">
                  People{" "}
                  <span className="font-normal">
                    (Subject knowledge, communication, and lesson planning)
                  </span>
                </h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                  <Description content="Our teachers are hired from leading institutes in India. The selection process considers subject knowledge, communication, teaching approach, and lesson-planning skills. Most hold postgraduate or doctoral qualifications." />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h3 className="font-bold">
                  Roles{" "}
                  <span className="font-normal">
                    (Understanding role of teacher)
                  </span>
                </h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <Description content="A teacher's work includes lesson preparation, grading, and planning additional support as well as classroom teaching. We plan teachers' hours to account for these responsibilities and support a positive classroom experience." />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h3 className="font-bold">
                  Processes{" "}
                  <span className="font-normal">(Weekly meetings)</span>
                </h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <Description content="Teachers discuss lesson plans in weekly meetings. Shared scheduling helps them align lessons with school curricula and plan assessments and additional support." />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <figure className="relative flex w-full items-center lg:w-[48%] lg:shrink-0">
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
            src={"/meticulous.png"}
            alt="Students learning at MindSplash Academy"
            width={540}
            height={576}
            loading="lazy"
            className="h-auto w-full rounded-[28px] object-cover"
          />
        </figure>
      </section>
      {/* Results Section */}
      <section
        id="results"
        className="w-full mx-auto flex flex-col items-center mb-15 md:mb-[100px] md:overflow-visible"
        aria-labelledby="results-heading"
      >
        <h2 className="mb-5 flex text-center font-bold text-[42px] tracking-[0px]" id="results-heading">
          <Heading content="Our " />
          <GradientHeading content={SEO_CONSTANTS.RESULTS_HEADING} />
        </h2>
        <div className="mb-12 text-center">
          <SubHeading content={SEO_CONSTANTS.IB_MYP_TOPPER} />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl">
          <ImageCard image="/nihal.png" name="Nihal" />
          <div className="bg-secondary-foreground p-6 rounded-2xl border border-card-border shadow-sm flex-1 text-left">
            <h3 className="font-bold text-xl text-secondary mb-3">Archived case study: Nihal's 2024 IB MYP result</h3>
            <p className="text-secondary/80 mb-3 text-sm leading-relaxed">
              <strong>Curriculum:</strong> IB MYP (2024 Cohort)<br/>
              <strong>Archived result:</strong> 54 out of 56 in the 2024 IB MYP eAssessment.
            </p>
            <blockquote className="italic border-l-4 border-gradient-start pl-4 text-secondary/90 my-4">
              "The dynamic feedback methodology and detailed memory maps at MindSplash helped me break down complex criteria into manageable goals. The mock eAssessments exactly mirrored the real platform, which gave me immense confidence on exam day."
              <br/><span className="text-sm font-semibold mt-2 block">â€” Nihal (shared with permission)</span>
            </blockquote>
          </div>
        </div>
        <div className="text-center mt-16 md:mt-[65px] mb-12">
          <SubHeading
            content={SEO_CONSTANTS.ACADEMY_TOPPERS}
            className="text-center! md:text-left! py-1.5 px-4 md:p-0"
          />
        </div>

        <Marquee cards={toppperCards} />
      </section>

      {/* Contact Us Modal */}
      <ContactUsModal />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About MindSplash Academy - Our History, Leadership & Methodology",
            description:
              "Meet Rahul Chakravarthy and the MindSplash Academy team, learn about the teaching methodology, and read an archived IB MYP 2024 cohort result.",
            url: "https://mindsplash.in/about",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              description:
                "Academic support for IB MYP, IB DP, Cambridge IGCSE, Olympiad, SAT/PSAT, and school exam preparation in Hyderabad.",
              employee: {
                "@type": "Person",
                name: "Rahul Chakravarthy",
                jobTitle: "Head of Academics",
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "IIT Madras",
                },
                description:
                  "National Math Olympiad awardee, IIT Madras graduate, Olympiad author, and educator",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Educational Programs",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "EducationalProgram", name: "IB MYP coaching" } },
                  { "@type": "Offer", itemOffered: { "@type": "EducationalProgram", name: "IB DP subject coaching" } },
                  { "@type": "Offer", itemOffered: { "@type": "EducationalProgram", name: "Cambridge IGCSE tuition" } },
                  { "@type": "Offer", itemOffered: { "@type": "EducationalProgram", name: "Olympiad preparation" } },
                  { "@type": "Offer", itemOffered: { "@type": "EducationalProgram", name: "SAT, PSAT and school exam preparation" } },
                ],
              },
            },
          }),
        }}
      />
    </>
  );
}

const mathCards = [
  {
    figure: "/nihal.png",
    title: "Nihal",
  },
  {
    figure: "/dhruv.png",
    title: "Dhruv",
  },
  {
    figure: "/hansini.png",
    title: "Hansini",
  },
  {
    figure: "/naithrav.png",
    title: "Naithrav",
  },
  {
    figure: "/rohan.png",
    title: "Rohan",
  },
  {
    figure: "/shruthi.png",
    title: "Shruti",
  },
];

const toppperCards = [
  {
    figure: "/nihal.png",
    title: "Nihal",
  },
  {
    figure: "/dhruv.png",
    title: "Dhruv",
  },
  {
    figure: "/hansini.png",
    title: "Hansini",
  },
  {
    figure: "/naithrav.png",
    title: "Naithrav",
  },
  {
    figure: "/rohan.png",
    title: "Rohan",
  },
  {
    figure: "/shruthi.png",
    title: "Shruti",
  },
  {
    figure: "/nihal.png",
    title: "Nihal",
  },
  {
    figure: "/dhruv.png",
    title: "Dhruv",
  },
  {
    figure: "/hansini.png",
    title: "Hansini",
  },
  {
    figure: "/naithrav.png",
    title: "Naithrav",
  },
  {
    figure: "/rohan.png",
    title: "Rohan",
  },
  {
    figure: "/shruthi.png",
    title: "Shruti",
  },
];
