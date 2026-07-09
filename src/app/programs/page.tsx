import Description from "@/components/Description";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContactUsModal from "../_components/ContactUsModal";

// SEO and Content Constants
const SEO_CONSTANTS = {
  PAGE_TITLE_ONE: "Our programs empower,",
  PAGE_TITLE_TWO: "educate, support and grow",
  PRIMARY_TITLE: "Primary",
  PRIMARY_SUBTITLE: "Grade 5 and below",
  IGCSE_TITLE: "IGCSE",
  IGCSE_SUBTITLE: "1 - 3",
  IB_MVP_TITLE: "IB MVP",
  IB_MVP_SUBTITLE: "4 & 5 - Aligning to the IB MYP eAssessment - Gateway for 7",
  IB_DP_TITLE: "IB DP",
  IB_DP_SUBTITLE: "IB Diploma Programme",
  OLYMPIAD_TITLE: "OLYMPIAD",
  OLYMPIAD_SUBTITLE: "International Math and Science Competitions",
  EXAM_PREP_TITLE: "EXAM PREP",
  EXAM_PREP_SUBTITLE: "Grade 5 and below",
  FOOTER_HEADING: "Experience learning that's engaging, immersive, and fun.",
  SPEAK_WITH_US: "Speak With Us",
} as const;

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-7 mt-5 flex justify-center items-center h-[300px] md:h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="relative lg:mt-25 xl:mt-0">
          <div className="mt-20 md:mt-25 lg:mt-8">
            <h1 className="relative text-center break-word font-bold text-[22px] sm:text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[60px] leading-10 lg:leading-[72px] tracking-[0px] px-12 md:px-0">
              <Image
                src={"/new.svg"}
                alt="MindSplash Academy - Innovative educational programs"
                width={64}
                height={80}
                className="absolute left-2 -top-8 md:-top-10 md:-left-12 lg:-left-14 scale-50 lg:scale-none 2xl:-left-5 2xl:-top-8"
                loading="lazy"
              />
              {SEO_CONSTANTS.PAGE_TITLE_ONE}
            </h1>
            <h1 className="text-center break-word font-bold text-[22px] sm:text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[60px] leading-10 md:leading-[72px] tracking-[0px] px-12 md:px-0">
              {SEO_CONSTANTS.PAGE_TITLE_TWO}
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
            alt="MindSplash Academy - Primary education program"
            width={64}
            height={80}
            className="absolute -top-12 -left-14"
            loading="lazy"
          />
          <Image
            src={"/primary_kid.jpg"}
            alt="MindSplash Academy primary students learning math and science concepts"
            width={541}
            height={473}
            className="w-full max-w-[541px] h-auto rounded-[28px]"
            loading="lazy"
          />
        </figure>
        <dl className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
          <dt className="mb-[18px]" id="primary-program-heading">
            <GradientHeading content={SEO_CONSTANTS.PRIMARY_TITLE} />
          </dt>
          <SubHeading
            content={SEO_CONSTANTS.PRIMARY_SUBTITLE}
            className="mb-8"
          />
          <Description content="The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, data handling etc., The program lays strong foundation for Secondary School Math. The Science Component of the Program lays stress on biology and physics concepts. Concepts related to basic life processes and fundamentals of mechanics, optics, sound waves, etc., are discussed connecting them with real-life examples. The program aims at igniting and inspiring young minds towards basic sciences." />
        </dl>
      </section>
      {/* IGCSE Program Section */}
      <section
        className="w-full bg-secondary-foreground mt-10 lg:mt-20"
        aria-labelledby="igcse-program-heading"
      >
        <div className="w-[74%] flex flex-col-reverse lg:flex-row mx-auto justify-between mt-10 lg:mt-0 items-center px-4 lg:gap-20 py-[100px] pb-20">
          <dl className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
            <dt className="mb-[18px]" id="igcse-program-heading">
              <GradientHeading content={SEO_CONSTANTS.IGCSE_TITLE} />
            </dt>
            <SubHeading
              content={SEO_CONSTANTS.IGCSE_SUBTITLE}
              className="mb-8"
            />
            <Description content="We offer IGCSE (O-level) and A-level programs for Math, Physics, Chemistry, Biology and Computer Science. Our programs are designed to give an edge in the Cambridge examinations. Given the vastness of the syllabus, we have designed memory maps which are single page topic revisions sheets which will help them revise a lot of content over a small time." />
          </dl>
          <figure className="relative">
            <Image
              src="/new_image.svg"
              alt="MindSplash Academy - IGCSE education program"
              width={64}
              height={80}
              className="absolute -top-12 -left-14"
              loading="lazy"
            />
            <Image
              src={"/igcse_kid.jpg"}
              alt="MindSplash Academy IGCSE students preparing for Cambridge examinations"
              width={541}
              height={473}
              loading="lazy"
              className="rounded-[28px]"
            />
          </figure>
        </div>
      </section>
      {/* IB MVP Program Section */}
      <section
        className="w-[74%] mx-auto flex flex-col lg:flex-row justify-between my-20 sm:mt-20 md:mt-24 px-4 lg:gap-20 lg:mt-25 lg:px-0"
        aria-labelledby="ib-mvp-program-heading"
      >
        <figure className="relative">
          <Image
            src="/new_image.svg"
            alt="MindSplash Academy - IB MYP education program"
            width={64}
            height={80}
            className="absolute -top-12 -left-14"
            loading="lazy"
          />
          <Image
            src={"/mvp_kid.jpg"}
            alt="MindSplash Academy IB MYP students preparing for eAssessment"
            width={541}
            height={473}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>
        <dl className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
          <dt className="mb-[18px]" id="ib-mvp-program-heading">
            <GradientHeading content={SEO_CONSTANTS.IB_MVP_TITLE} />
          </dt>
          <SubHeading
            content={SEO_CONSTANTS.IB_MVP_SUBTITLE}
            className="mb-8"
          />
          <Description content="IB MYP eAssessment is a computer based test taken on IB proprietary platform. It requires some practice with respect to inserting math symbols etc., At Mindsplash Academy, the assessments are conducted on a similar software (Assessprep) which is close to the IB platform. Enough practice (with one step ahead of IB MYP eAssessment), Rigorous worksheets, Mock tests ensure that our students find it easy in the actual eAssessment! Our results speak for the efforts we put in to create interesting and at the same time challenging exam-styled worksheets and assessments. The Program has 6 hours of classes per week with 1 hour each day. The Program has 3 hours of Math and 3 hours of Science (Physics/Chemistry/Biology). For exact schedules, please contact our branches." />
        </dl>
      </section>
      {/* IB DP Program Section */}
      <section
        className="w-full bg-secondary-foreground mt-10 lg:mt-20"
        aria-labelledby="ib-dp-program-heading"
      >
        <div className="w-[74%] flex mx-auto flex flex-col-reverse lg:flex-row justify-between mt-10 lg:mt-0 items-center px-4 lg:gap-20 py-[100px] pb-20">
          <dl className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
            <dt className="mb-[18px]" id="ib-dp-program-heading">
              <GradientHeading content={SEO_CONSTANTS.IB_DP_TITLE} />
            </dt>
            <SubHeading
              content={SEO_CONSTANTS.IB_DP_SUBTITLE}
              className="mb-8"
            />
            <Description content="1B DP is perhaps the most globally accepted programme for admission into ivy-league universities across the world. Probably, the relative difficulty of the Higher Level (HL) options when compared to other similar programs makes a successful IBDP student ‘ivy-league ready’. We offer 1B DP programs in Math (AA & Al), Physics, Chemistry, Economics, Language and Literature and Computer Science. Each program has 3 hours of classes per week with 1 hour each day. For exact schedules, please contact our branches." />
          </dl>
          <figure className="relative">
            <Image
              src="/new_image.svg"
              alt="MindSplash Academy - IB Diploma Programme"
              width={64}
              height={80}
              className="absolute -top-12 -left-14"
              loading="lazy"
            />
            <Image
              src={"/dp_kid.jpg"}
              alt="MindSplash Academy IB Diploma Programme students preparing for university"
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
            alt="MindSplash Academy - Olympiad training program"
            width={64}
            height={80}
            className="absolute -top-12 -left-14"
            loading="lazy"
          />
          <Image
            src={"/olympiad_kid.jpg"}
            alt="MindSplash Academy students preparing for international math and science competitions"
            width={541}
            height={473}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>
        <dl className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
          <dt className="mb-[18px]" id="olympiad-program-heading">
            <GradientHeading content={SEO_CONSTANTS.OLYMPIAD_TITLE} />
          </dt>
          <SubHeading
            content={SEO_CONSTANTS.OLYMPIAD_SUBTITLE}
            className="mb-8"
          />
          <Description content="MindSplash Academy is pioneers and leaders in Olympiads! Our results and national level ranks speak for us. We train students of grades 6 to 10 for various international math and science competitions. The recognition at these Olympiads add to their resume and have a significant impact on their university admissions. Along with Olympiads, we offer training for American Math Competitions (AMC), IOQM, and other such Olympiads which lead to participation to represent their nation at international level." />
        </dl>
      </section>
      {/* Exam Prep Program Section */}
      <section
        className="w-full bg-secondary-foreground mt-10 lg:mt-20 lg:mb-20"
        aria-labelledby="exam-prep-program-heading"
      >
        <div className="w-[74%] flex flex-col-reverse lg:flex-row mx-auto justify-between  items-center px-4 lg:gap-20 py-[100px] pb-20">
          <dl className="w-full lg:max-w-[51%] self-center mt-10 lg:mt-0">
            <dt className="mb-[18px]" id="exam-prep-program-heading">
              <GradientHeading content={SEO_CONSTANTS.EXAM_PREP_TITLE} />
            </dt>
            <SubHeading
              content={SEO_CONSTANTS.EXAM_PREP_SUBTITLE}
              className="mb-8"
            />
            <Description content="The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, data handling etc., The program lays strong foundation for Secondary School Math. The Science Component of the Program lays stress on biology and physics concepts." />
            <br />
            <Description content="Concepts related to basic life processes and fundamentals of mechanics, optics, sound waves, etc., are discussed connecting them with real-life examples. The program aims at igniting and inspiring young minds towards basic sciences." />
          </dl>
          <figure className="relative">
            <Image
              src="/new_image.svg"
              alt="MindSplash Academy - Exam preparation program"
              width={64}
              height={80}
              className="absolute -top-12 -left-14"
              loading="lazy"
            />
            <Image
              src={"/exam_kid.jpg"}
              alt="MindSplash Academy students preparing for exams with mental math and science concepts"
              width={541}
              height={473}
              loading="lazy"
              className="rounded-[28px]"
            />
          </figure>
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
            Experience learning that’s
            <br />
            <span className="font-semibold">
              {" "}
              engaging, immersive, and fun.
            </span>
          </p>
          <Button type="button" className="group">
            <a
              href="/contact"
              aria-label="Contact MindSplash Academy to learn more about our programs"
            >
              {SEO_CONSTANTS.SPEAK_WITH_US}
            </a>
            <div className="self-center group-hover:opacity-100 right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
              <ChevronRight className="text-foreground" />
            </div>
          </Button>
        </div>
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
            name: "MindSplash Academy Educational Programs - Primary, IGCSE, IB MYP, IB DP, Olympiad & Exam Prep",
            description:
              "Discover MindSplash Academy's comprehensive educational programs including Primary, IGCSE, IB MYP, IB DP, Olympiad training, and Exam Preparation. Our programs empower, educate, support and grow students.",
            url: "https://mindsplash.com/programs",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              description:
                "Leading educational institution offering comprehensive programs from primary to IB diploma",
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
                        "Grades 1-3 - Cambridge IGCSE and A-level preparation",
                      educationalLevel: "Secondary",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalProgram",
                      name: "IB MYP",
                      description:
                        "Grades 4-5 - International Baccalaureate Middle Years Programme",
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
                      description: "Comprehensive exam preparation program",
                      educationalLevel: "Primary",
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
