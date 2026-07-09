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
import Link from "next/link";
import ContactUsModal from "../_components/ContactUsModal";

// SEO and Content Constants
const SEO_CONSTANTS = {
  PAGE_TITLE: "Discover the history of Mindsplash Academy",
  LEADERS_HEADING: "Meet Our Leaders",
  METHODOLOGY_HEADING: "Methodology",
  HIGHLIGHTS_HEADING: "Highlights",
  TEACHERS_HEADING: "Our Teachers",
  RESULTS_HEADING: "Our Results",
  KNOW_MORE_BUTTON: "Know More",
  LEADER_NAME: "RAHUL CHAKRAVARTHY",
  LEADER_QUALIFICATION: "B.Tech IIT Madras",
  LEADER_ROLE: "Head of Academics",
  LEADER_DESCRIPTION:
    "National Math Olympiad Awardee, IlTian, Author and teacher by choice!",
  IB_MYP_TOPPER: "IB MYP 2024 Topper (54/56)",
  MATH_TOPPERS: "IB MYP 2024 Toppers in Mathematics",
  ACADEMY_TOPPERS: "Mindsplash Academy IB MYP 2024 Toppers",
} as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-7 mt-5 flex justify-center items-center h-[300px] md:h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="mt-16 md:mt-24 xl:mt-0">
          <h1 className="relative text-center break-word font-bold text-[22px] sm:text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[60px] leading-10 md:leading-[72px] tracking-[0px] px-12 md:px-0 lg:max-w-[800px]">
            <Image
              src="/new.svg"
              alt="MindSplash Academy - New innovative learning approach"
              width={64}
              height={80}
              className="absolute left-2 -top-12 md:-top-10 md:-left-12 lg:-left-14 scale-50 lg:scale-none 2xl:left-4 2xl:-top-8"
              loading="lazy"
            />
            {SEO_CONSTANTS.PAGE_TITLE}
          </h1>
        </div>
      </section>
      {/* Leadership Section */}
      <section
        id="leadership-team"
        className="flex justify-center mt-15"
        aria-labelledby="leadership-heading"
      >
        <header className="w-[77%] max-w-full px-4">
          <div id="leadership-heading">
            <Heading content="Meet Our " />
            <GradientHeading content="Leaders" />
          </div>
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
            alt="MindSplash Academy - Innovative teaching methodology"
            width={64}
            height={80}
            className="absolute -top-12 right-[-12%] md:hidden lg:block lg:-right-14"
            loading="lazy"
          />
          <Image
            src={"/mvp_kid.png"}
            alt="MindSplash Academy student demonstrating learning success"
            width={540}
            height={576}
            loading="lazy"
          />
        </figure>
        <dl className="w-full mt-8 lg:mt-0 lg:max-w-[54%] self-center">
          <dt
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
          </dt>
          <SubHeading content={SEO_CONSTANTS.LEADER_ROLE} className="mb-11" />
          <SubHeading
            content={SEO_CONSTANTS.LEADER_DESCRIPTION}
            className="font-bold mb-6"
          />
          <Description content="At Mindsplash Academy, he teaches, designs worksheets and other learning tools, plans lessons, oversees quality of lessons delivered across all centers. Besides these, he is also involved in recruitment and training of teachers at the Academy. His other activities include training students of Telangana and Andhra Pradesh on behalf of Govt of India for Indian National Mathematical Olympiad. He is also author of bestsellers of Math, Physics and Chemistry Olympiad books for high school students. His past works include designing content and training teachers of various corporates across India." />
          {/* <PrimaryButton content="Know More" className="mt-5" /> */}
        </dl>
      </section>
      {/* Methodology Section */}
      <section
        id="methodology"
        className="w-full mx-auto flex flex-col justify-center items-center py-10 md:pt-10 md:py-20 bg-secondary-foreground mb-10"
        aria-labelledby="methodology-heading"
      >
        <div className="mb-10">
          <h1
            className="mb-5 text-center font-bold text-[32px] tracking-[0px] bg-gradient-to-r bg-clip-text text-transparent from-gradient-start to-gradient-end self-baseline"
            id="methodology-heading"
          >
            {SEO_CONSTANTS.METHODOLOGY_HEADING}
          </h1>
          <SubHeading
            content="National Math Olympiad Awardee, IlTian, Author and teacher by choice!"
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
                Assesssment
              </p>
              <Image
                src={"/point_one.svg"}
                alt="mindsplash-point-1"
                className=""
                height={48}
                width={48}
              />
            </div>
            {/* DOT-2 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[91%] left-[36%]">
              <Image
                src={"/point_two.svg"}
                alt="mindsplash-point-2"
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
                alt="mindsplash-point-3"
                className=""
                height={48}
                width={48}
              />
            </div>
            {/* DOT-4 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[91%] left-[58%]">
              <Image
                src={"/point_four.svg"}
                alt="mindsplash-point-4"
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
                Assesssment
              </p>
              <Image
                src={"/point_five.svg"}
                alt="mindsplash-point-5"
                className=""
                height={48}
                width={48}
              />
            </div>
            {/* DOT-6 */}
            <div className="flex flex-col items-center space-y-5 absolute top-[91%] left-[80%]">
              <Image
                src={"/point_six.svg"}
                alt="mindsplash-point-6"
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
          <Description content="Our Teaching Methodology is based on ‘dynamic feedback’ approach. The teaching plan of a lesson is divided into many checkpoints. An average session (or lesson which lasts for around (60 minutes) has around 5 to 6 checkpoints." />
          <br />
          <Description content="At Mindsplash Academy, we strongly believe that our teachers are like gardeners. Every plant is unique with respect to its needs and growth rate - so is every child! We cannot have rigid templates. Our job is to consistently nurture and After every checkpoint, the teacher asks questions (to take feedback) to see how many students understood it the right way." />
          <br />
          <Description content=" If there are students who did not understand or misunderstood, the concept is cleared to all the students. Only then, the teacher proceeds further to the next checkpoint. This regular and dynamic feedback approach lays." />
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
          <h1
            className="mb-[50px] text-center font-bold text-[32px] tracking-[0px] bg-gradient-to-r bg-clip-text text-transparent from-gradient-start to-gradient-end self-baseline"
            id="highlights-heading"
          >
            {SEO_CONSTANTS.HIGHLIGHTS_HEADING}
          </h1>
        </div>
        <Carousal />
      </section>

      {/* Our Teachers Section */}
      <section
        id="our-teachers"
        className="w-[75%] mx-auto flex justify-between mb-5 flex-col-reverse pt-16 md:pt-0 lg:gap-20 xl:gap-auto lg:flex-row"
        aria-labelledby="our-teachers-heading"
      >
        <dl className="w-full lg:max-w-[52%] self-center mt-8 lg:mt-0">
          <dt className="mb-8" id="our-teachers-heading">
            <Heading content={"Our "} />
            <GradientHeading content="Teachers " />
          </dt>
          <Description
            content={
              "Our teachers are not just learning facilitators! They are here to understand their emotions and limitations. They plug these factors during their lessons! At Mindsplash Academy, our teachers consistently strive to make the class room a fun-filled learning space. More than academic results, our achievements are measured in smiles we bring on their faces!"
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
                <h1 className="font-bold">
                  People{" "}
                  <span className="font-normal">
                    (The best minds of India!)
                  </span>
                </h1>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <Description
                  content="Our teachers are hired from premier institutes of India. The
                  hiring process is very rigid which evaluates their knowledge,
                  passion, communication, emotions, sense of humor, lesson
                  planning abilities etc., Almost all our teachers are
                  postgraduates or doctorates. For our teachers, their
                  professions is their identity, not a mere job!"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h1 className="font-bold">
                  Roles{" "}
                  <span className="font-normal">
                    (Understanding role of teacher)
                  </span>
                </h1>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <Description content="The role of a teacher is not confined to classroom alone! This is a part of the role. A teacher spends good time on preparation of lessons, grading, remedial lesson plans etc., At Mindsplash Academy, we completely realize the off-class room role of a teacher. The number of teaching hours for teachers are planned accordingly. Each role of teacher has its own importance which improves over all class-room experience." />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h1 className="font-bold">
                  Processes{" "}
                  <span className="font-normal">(Weekly meetings)</span>
                </h1>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <Description content="The lesson plans drawn by teachers are discussed every week. A micro-schedule helps us to be in sync with school structure and also gives us edge to plan tests and remedials upfront." />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </dl>
        <figure className="relative">
          <Image
            src="/new_image.svg"
            alt="mindsplsh-new"
            width={64}
            height={80}
            className="absolute -top-12 -left-14"
            loading="lazy"
          />
          <Image
            src={"/meticulous.png"}
            alt="mindsplash-meticulous"
            width={540}
            height={576}
            loading="lazy"
          />
        </figure>
      </section>
      {/* Results Section */}
      <section
        id="results"
        className="w-full mx-auto flex flex-col items-center mb-15 md:mb-[100px] md:overflow-visible"
        aria-labelledby="results-heading"
      >
        <div className="mb-5 flex" id="results-heading">
          <Heading
            content="Our"
            className="text-center font-bold text-[42px] tracking-[0px] self-baseline"
          />
          <h1 className="text-center font-bold text-[42px] tracking-[0px] bg-gradient-to-r bg-clip-text text-transparent from-gradient-start to-gradient-end self-baseline">
            &nbsp;{SEO_CONSTANTS.RESULTS_HEADING}
          </h1>
        </div>
        <div className="mb-12 text-center">
          <SubHeading content={SEO_CONSTANTS.IB_MYP_TOPPER} />
        </div>
        <ImageCard image="/nihal.png" name="Nihal" />
        <div className="text-center mt-10 mb-12">
          <SubHeading
            content={SEO_CONSTANTS.MATH_TOPPERS}
            className="text-center! md:text-left!"
          />
        </div>
        <ImageCarousal cards={mathCards} />
        <div className="text-center mt-16 md:mt-[65px] mb-12">
          <SubHeading
            content={SEO_CONSTANTS.ACADEMY_TOPPERS}
            className="text-center! md:text-left! py-1.5 px-4 md:p-0"
          />
        </div>

        <ImageCarousal maxWidth="max-w-[95%]" cards={toppperCards} />
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
              "Discover the history of MindSplash Academy. Meet our leaders including Rahul Chakravarthy, Head of Academics and IIT Madras graduate. Learn about our innovative teaching methodology and proven results.",
            url: "https://mindsplash.com/about",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              description:
                "Leading educational institution with innovative learning methodologies",
              founder: {
                "@type": "Person",
                name: "Rahul Chakravarthy",
                jobTitle: "Head of Academics",
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "IIT Madras",
                },
                description:
                  "National Math Olympiad Awardee, IITian, Author and teacher by choice",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Educational Programs",
                description:
                  "Comprehensive educational programs with proven track record",
              },
              award: [
                "IB MYP 2024 Topper (54/56)",
                "Multiple IB MYP Mathematics Toppers",
                "Proven track record in academic excellence",
              ],
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
