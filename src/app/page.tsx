import Image from "next/image";
import VideoSection from "./_components/VideoSection";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import ContactUsModal from "./_components/ContactUsModal";

// SEO and Content Constants
const SEO_CONSTANTS = {
  HERO_TITLE: "Explore the real Joy of Learning",
  HERO_SUBTITLE: "State-of-art Learning Ambience",
  HERO_DESCRIPTION:
    "Small size gives your child the ultimate edge<br class='hidden lg:block xl:hidden' /> they deserve!",
  KNOW_MORE_BUTTON: "Explore More",
  START_VIDEO_BUTTON: "Start the video",
  VIDEO_DURATION: "2 MIN",
  STUDENT_QUOTE: "Don't just take our word for it, hear it from our students.",
  WORKSHEETS_HEADING:
    "Worksheets so meticulously designed To cater to exact needs of the students!",
  WORKSHEETS_SUBTITLE:
    "The only IB/GCSE tuition chain to have a proprietary content in India!",
  TEACHERS_HEADING:
    "Teachers who are not just learning Facilitators…. But great Creators of Fun-filled spaces!",
  SPECIALITIES_HEADING: "Our Speciality",
  OTHER_SPECIALITIES_HEADING: "Other Specialities",
} as const;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-7 mt-5 flex justify-center items-center h-[650px] md:h-[783px] m-6 rounded-[50px] shadow-lg pt-5 bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="w-[70%] relative">
          <Image
            src={"/new.svg"}
            alt="MindSplash - New innovative learning approach"
            width={64}
            height={80}
            className="absolute -top-12 -left-10 md:-left-14 scale-50 lg:scale-none"
            loading="lazy"
          />
          <h1 className="font-bold text-[30px] leading-[45px] md:text-[60px] md:leading-[72px] tracking-[0px] max-w-[594px]">
            {SEO_CONSTANTS.HERO_TITLE}
          </h1>
          <p className="font-bold text-2xl leading-[29px] tracking-[0px] mt-11">
            {SEO_CONSTANTS.HERO_SUBTITLE}
          </p>
          <p
            className="font-normal text-[18px] leading-[22px] tracking-[0px] mt-2 mb-12"
            dangerouslySetInnerHTML={{ __html: SEO_CONSTANTS.HERO_DESCRIPTION }}
          />

          <Link
            href="/about"
            aria-label="Learn more about MindSplash's innovative learning approach"
          >
            <PrimaryButton content={SEO_CONSTANTS.KNOW_MORE_BUTTON} />
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <Image
            src="/thumbsUp.png"
            alt="MindSplash students showing thumbs up for excellent learning experience"
            loading="eager"
            width={800}
            height={600}
            className="w-[500px] lg:w-[550px] xl:w-[650px] 2xl:w-auto object-contain"
          />
        </div>
      </section>
      <VideoSection />

      {/* Worksheets Section */}
      <section
        className="w-[74%] mx-auto flex justify-between flex-col-reverse lg:flex-row lg:gap-16 xl:gap-20"
        aria-labelledby="worksheets-heading"
      >
        <dl className="w-full mt-12 lg:mt-0 lg:max-w-[51%] self-center">
          <dt className="mb-8" id="worksheets-heading">
            <Heading content={"Worksheets so "} />
            <GradientHeading content="meticulously " />
            <GradientHeading content="designed " />
            <Heading content={"To cater to exact needs of the students!"} />
          </dt>
          <SubHeading
            content="The only IB/GCSE tuition chain to have a proprietary content in India!"
            className="mb-8"
          />
          <Description content="Our Teaching Methodology is based on “dynamic feedback” approach. The teaching plan of a lesson is divided into many checkpoints. An average session (or lesson which lasts for around (60 minutes) has around 5 to 6 checkpoints)." />
          <Link
            href="/about#curriculum"
            aria-label="Learn more about MindSplash's curriculum and teaching methodology"
          >
            <PrimaryButton
              content={SEO_CONSTANTS.KNOW_MORE_BUTTON}
              className="mt-5"
            />
          </Link>
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
            src={"/meticulous.jpg"}
            alt="mindsplash-meticulous"
            width={540}
            height={576}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>
      </section>
      {/* Teachers Section */}
      <section
        className="w-[74%] mx-auto flex justify-between my-25 md:mt-[132px] md:mb-[100px] flex-col lg:gap-16 lg:flex-row xl:gap-20"
        aria-labelledby="teachers-heading"
      >
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
            src={"/teachers-funfilled.jpg"}
            alt="mindsplash-meticulous"
            width={540}
            height={576}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>
        <dl className="w-full mt-12 lg:mt-0 lg:max-w-[54%] self-center">
          <dt className="mb-8" id="teachers-heading">
            <Heading content={"Teachers who are not just learning "} />
            <Heading content={"Facilitators…. "} />
            <GradientHeading content="But great Creators of " />
            <GradientHeading content="Fun-filled spaces! " />
          </dt>
          <SubHeading
            content="The only IB/GCSE tuition chain to have a proprietary content in India!"
            className="mb-8"
          />
          <Description content="Our Teaching Methodology is based on “dynamic feedback” approach. The teaching plan of a lesson is divided into many checkpoints. An average session (or lesson which lasts for around (60 minutes) has around 5 to 6 checkpoints)." />
          <Link
            href="/about#our-teachers"
            aria-label="Learn more about MindSplash's exceptional teachers and teaching methodology"
          >
            <PrimaryButton
              content={SEO_CONSTANTS.KNOW_MORE_BUTTON}
              className="mt-5"
            />
          </Link>
        </dl>
      </section>
      {/* Our Speciality */}
      <section
        className="w-full mx-auto flex flex-col justify-center items-center py-12 mb-8 md:pt-15 md:pb-20 bg-secondary-foreground"
        aria-labelledby="specialities-heading"
      >
        <h1 className="mb-12" id="specialities-heading">
          <Heading content={"Our "} />
          <GradientHeading content="Speciality" />
        </h1>
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] w-[72%]">
          {specialities.map((each, i) => {
            return (
              <dl
                key={i}
                className="p-7 space-y-5 bg-foreground bg-no-repeat bg-origin-padding shadow-[0px_3px_26px_#00000008] rounded-[30px]"
              >
                <figure className="p-3 flex justify-center items-center bg-gradient-to-r from-gradient-start to-gradient-end rounded-[14px] h-[54px] w-[54px]">
                  <Image
                    src={each.icon}
                    alt={each.title}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </figure>
                <dt className="text-left font-bold text-xl leading-[25px] tracking-[0px] text-gradient-start">
                  {each.title}
                </dt>
                <Description content={each.description} />
              </dl>
            );
          })}
        </article>
      </section>
      {/* Other Specialities */}
      <section
        className="w-full mx-auto flex flex-col justify-center items-center mb-[100px]"
        aria-labelledby="other-specialities-heading"
      >
        <h1
          className="mb-12 text-center px-3 md:px-0"
          id="other-specialities-heading"
        >
          <Heading content={"Other "} />
          <GradientHeading content="Specialities" />
        </h1>
        <article className="grid grid-cols-1 xl:grid-cols-2 gap-7 w-[72%]">
          {otherSpecialities.map((each, i) => {
            return (
              <div
                key={i}
                className="flex flex-col-reverse md:flex-row xl:flex-col-reverse 2xl:flex-row items-center gap-[30px] p-6 bg-secondary-foreground shadow-[0px_3px_26px_#00000008] border border-card-border rounded-[30px]"
              >
                <dl className="space-y-4">
                  <dt
                    style={{
                      background: `linear-gradient(to right, ${each.from}, ${each.to})`,
                    }}
                    className="rounded-[4px] px-2 py-0.5 w-fit text-left font-semibold text-[18px] leading-[25px] tracking-[0px] text-foreground"
                  >
                    {each.title}
                  </dt>
                  <dd className="text-left font-medium text-[15px] leading-[23px] tracking-[0px] text-secondary">
                    {each.description}
                  </dd>
                </dl>
                <Image
                  src={each.icon}
                  alt={each.title}
                  width={244}
                  height={160}
                  className="mt-4 xl:w-full"
                  loading="lazy"
                />
              </div>
            );
          })}
        </article>
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
            name: "MindSplash - Innovative Learning for Academic Excellence",
            description:
              "Explore the real joy of learning with MindSplash. State-of-art learning ambience with meticulously designed worksheets, expert teachers, and proven track record in primary, IGCSE, Olympiad, and MVP education.",
            url: "https://mindsplash.com/",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "MindSplash",
              description:
                "Empowering students with innovative learning methodologies",
              offers: [
                {
                  "@type": "Offer",
                  name: "Primary Education",
                  description:
                    "Strong foundation in basic concepts like number systems, fractions, decimals, ratio, percentages",
                },
                {
                  "@type": "Offer",
                  name: "IGCSE Program",
                  description:
                    "Comprehensive IGCSE curriculum with expert guidance",
                },
                {
                  "@type": "Offer",
                  name: "IB MYP & DP",
                  description:
                    "International Baccalaureate programs for middle years and diploma",
                },
                {
                  "@type": "Offer",
                  name: "Olympiad Preparation",
                  description: "Specialized training for academic competitions",
                },
                {
                  "@type": "Offer",
                  name: "Exam Preparation",
                  description:
                    "Focused preparation for various academic assessments",
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
    description: "Facilitates teachers to monitor each student",
  },
  {
    icon: "/building.svg",
    title: "Everything Under One Roof",
    description: "Offers all subjects including SAT/PSAT at one Place",
  },
  {
    icon: "/sheets.svg",
    title: "Criteria Based Worksheets",
    description:
      "Helps in understanding students strengths and Areas of improvement in each criteria of assessment",
  },
  {
    icon: "/hat.svg",
    title: "Looking Beyone",
    description: "Guidance in selection of Universities",
  },
  {
    icon: "/sync.svg",
    title: "In Sync with School",
    description: "Curriculum flow and depth in sync with schools",
  },
  {
    icon: "/golf.svg",
    title: "Proven Track Record",
    description: "Results speak louder than words",
  },
];

const otherSpecialities = [
  {
    icon: "/specialities.png",
    title: "PRIMARY",
    description:
      "The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, date handling etc., The program lays strong foundation",
    from: "#F1A53D",
    to: "#EB3423",
  },
  {
    icon: "/specialities.png",
    title: "IGCSE",
    description:
      "The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, date handling etc., The program lays strong foundation",
    from: "#8BEF81",
    to: "#53B79D",
  },
  {
    icon: "/specialities.png",
    title: "IB MYP",
    description:
      "The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, date handling etc., The program lays strong foundation",
    from: "#86D4EC",
    to: "#6CAADD",
  },
  {
    icon: "/specialities.png",
    title: "IB DP",
    description:
      "The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, date handling etc., The program lays strong foundation",
    from: "#BC4FA9",
    to: "#B54668",
  },
  {
    icon: "/specialities.png",
    title: "OLYMPIADS",
    description:
      "The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, date handling etc., The program lays strong foundation",
    from: "#6ADAD4",
    to: "#38758B",
  },
  {
    icon: "/specialities.png",
    title: "EXAM PREP",
    description:
      "The Math Component of the Program aims at mental math along with good grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, date handling etc., The program lays strong foundation",
    from: "#F2F169",
    to: "#F8D560",
  },
];
