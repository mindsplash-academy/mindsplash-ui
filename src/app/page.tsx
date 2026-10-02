import Image from "next/image";
import VideoSection from "./_components/VideoSection";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import ContactUsModal from "./_components/ContactUsModal";

const SEO_CONSTANTS = {
  HERO_TITLE: "IB & IGCSE Coaching in Hyderabad | MindSplash Academy",

  HERO_SUBTITLE: "Explore the Real Joy of Learning",

  HERO_DESCRIPTION:
    "State-of-the-art learning ambience with expert teachers, small batch sizes, structured worksheets, and personalized academic support for IB and IGCSE students in Hyderabad.",

  KNOW_MORE_BUTTON: "Explore More",

  START_VIDEO_BUTTON: "Start the video",

  VIDEO_DURATION: "2 MIN",

  STUDENT_QUOTE:
    "Don't just take our word for it, hear it from our students.",

  WORKSHEETS_HEADING:
    "Worksheets so meticulously designed To cater to exact needs of the students!",

  WORKSHEETS_SUBTITLE:
    "The only IB/IGCSE tuition chain to have proprietary content in India!",

  TEACHERS_HEADING:
    "Teachers who are not just learning Facilitators…. But great Creators of Fun-filled spaces!",

  SPECIALITIES_HEADING: "Our Speciality",

  OTHER_SPECIALITIES_HEADING: "Other Specialities",
} as const;

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative mx-6 mt-5 flex min-h-[650px] items-center justify-center overflow-hidden rounded-[50px] bg-gradient-to-r from-gradient-start to-gradient-end shadow-lg md:min-h-[783px]"
        aria-labelledby="hero-heading"
      >
        {/* Decorative Image */}
        <Image
          src="new.svg"
          alt=""
          width={64}
          height={80}
          className="absolute left-8 top-20 z-10 w-12 md:left-16 md:top-24 md:w-16"
          priority
        />

        {/* HERO CONTENT */}
        <div className="relative z-20 w-full px-8 py-20 md:w-[70%] md:px-0">
          <h1
            id="hero-heading"
            className="max-w-[750px] text-[34px] font-bold leading-[1.15] tracking-tight text-white md:text-[60px] md:leading-[1.2]"
          >
            {SEO_CONSTANTS.HERO_TITLE}
          </h1>

          <p className="mt-8 text-2xl font-bold leading-[29px] text-white">
            {SEO_CONSTANTS.HERO_SUBTITLE}
          </p>

          <p className="mb-10 mt-4 max-w-[650px] text-[18px] font-normal leading-[28px] text-white">
            {SEO_CONSTANTS.HERO_DESCRIPTION}
          </p>

          <Link
            href="/about"
            aria-label="Learn more about MindSplash Academy"
          >
            <PrimaryButton content={SEO_CONSTANTS.KNOW_MORE_BUTTON} />
          </Link>
        </div>

        {/* HERO IMAGE */}
        <div className="absolute bottom-0 right-0 z-10 hidden lg:block">
          <Image
            src="/thumbsUp.png"
            alt="MindSplash Academy students enjoying an excellent learning experience"
            width={800}
            height={600}
            priority
            className="h-auto w-[500px] object-contain lg:w-[550px] xl:w-[650px] 2xl:w-[750px]"
          />
        </div>
      </section>

      {/* VIDEO SECTION */}
      <VideoSection />

      {/* WORKSHEETS SECTION */}
      <section
        className="mx-auto flex w-[90%] flex-col-reverse justify-between lg:w-[74%] lg:flex-row lg:gap-16 xl:gap-20"
        aria-labelledby="worksheets-heading"
      >
        <dl className="mt-12 w-full self-center lg:mt-0 lg:max-w-[51%]">
          <dt className="mb-8" id="worksheets-heading">
            <Heading content="Worksheets so " />
            <GradientHeading content="meticulously " />
            <GradientHeading content="designed " />
            <Heading content="To cater to exact needs of the students!" />
          </dt>

          <SubHeading
            content="The only IB/IGCSE tuition chain to have proprietary content in India!"
            className="mb-8"
          />

          <Description
            content="Our Teaching Methodology is based on a dynamic feedback approach. The teaching plan of a lesson is divided into multiple checkpoints. An average 60-minute session has around 5 to 6 checkpoints, helping teachers understand student progress and provide personalized academic support."
          />

          <Link
            href="/about#curriculum"
            aria-label="Learn more about MindSplash Academy curriculum and teaching methodology"
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
            alt=""
            width={64}
            height={80}
            className="absolute -left-14 -top-12"
          />

          <Image
            src="/meticulous.jpg"
            alt="MindSplash Academy meticulously designed learning worksheets"
            width={540}
            height={576}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>
      </section>

      {/* TEACHERS SECTION */}
      <section
        className="mx-auto my-20 flex w-[90%] flex-col justify-between lg:mt-[132px] lg:w-[74%] lg:flex-row lg:gap-16 xl:gap-20"
        aria-labelledby="teachers-heading"
      >
        <figure className="relative">
          <Image
            src="/new_image.svg"
            alt=""
            width={64}
            height={80}
            className="absolute -left-14 -top-12"
          />

          <Image
            src="/teachers-funfilled.jpg"
            alt="MindSplash Academy teachers creating fun-filled learning spaces"
            width={540}
            height={576}
            loading="lazy"
            className="rounded-[28px]"
          />
        </figure>

        <dl className="mt-12 w-full self-center lg:mt-0 lg:max-w-[54%]">
          <dt className="mb-8" id="teachers-heading">
            <Heading content="Teachers who are not just learning " />
            <Heading content="Facilitators…. " />
            <GradientHeading content="But great Creators of " />
            <GradientHeading content="Fun-filled spaces! " />
          </dt>

          <SubHeading
            content="Experienced teachers supporting IB, IGCSE and international curriculum students."
            className="mb-8"
          />

          <Description
            content="Our Teaching Methodology is based on a dynamic feedback approach. Teachers continuously monitor student understanding through structured checkpoints and provide targeted guidance based on individual learning needs."
          />

          <Link
            href="/about#our-teachers"
            aria-label="Learn more about MindSplash Academy teachers"
          >
            <PrimaryButton
              content={SEO_CONSTANTS.KNOW_MORE_BUTTON}
              className="mt-5"
            />
          </Link>
        </dl>
      </section>

      {/* OUR SPECIALITY */}
      <section
        className="mx-auto mb-8 flex w-full flex-col items-center justify-center bg-secondary-foreground py-12 md:pb-20 md:pt-16"
        aria-labelledby="specialities-heading"
      >
        <h2 className="mb-12" id="specialities-heading">
          <Heading content="Our " />
          <GradientHeading content="Speciality" />
        </h2>

        <article className="grid w-[90%] gap-[50px] md:grid-cols-2 lg:w-[72%] lg:grid-cols-3">
          {specialities.map((each, i) => (
            <dl
              key={i}
              className="space-y-5 rounded-[30px] bg-foreground p-7 shadow-[0px_3px_26px_#00000008]"
            >
              <figure className="flex h-[54px] w-[54px] items-center justify-center rounded-[14px] bg-gradient-to-r from-gradient-start to-gradient-end p-3">
                <Image
                  src={each.icon}
                  alt={each.title}
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </figure>

              <dt className="text-left text-xl font-bold leading-[25px] tracking-[0px] text-gradient-start">
                {each.title}
              </dt>

              <Description content={each.description} />
            </dl>
          ))}
        </article>
      </section>

      {/* OTHER SPECIALITIES */}
      <section
        className="mx-auto mb-[100px] flex w-full flex-col items-center justify-center"
        aria-labelledby="other-specialities-heading"
      >
        <h2
          className="mb-12 px-3 text-center md:px-0"
          id="other-specialities-heading"
        >
          <Heading content="Other " />
          <GradientHeading content="Specialities" />
        </h2>

        <article className="grid w-[90%] grid-cols-1 gap-7 xl:w-[72%] xl:grid-cols-2">
          {otherSpecialities.map((each, i) => (
            <div
              key={i}
              className="flex flex-col-reverse items-center gap-[30px] rounded-[30px] border border-card-border bg-secondary-foreground p-6 shadow-[0px_3px_26px_#00000008] md:flex-row xl:flex-col-reverse 2xl:flex-row"
            >
              <dl className="space-y-4">
                <dt
                  style={{
                    background: `linear-gradient(to right, ${each.from}, ${each.to})`,
                  }}
                  className="w-fit rounded-[4px] px-2 py-0.5 text-left text-[18px] font-semibold leading-[25px] tracking-[0px] text-foreground"
                >
                  {each.title}
                </dt>

                <dd className="text-left text-[15px] font-medium leading-[23px] tracking-[0px] text-secondary">
                  {each.description}
                </dd>
              </dl>

              <Image
                src={each.icon}
                alt={`${each.title} program at MindSplash Academy`}
                width={244}
                height={160}
                className="mt-4 object-contain xl:w-full"
                loading="lazy"
              />
            </div>
          ))}
        </article>
      </section>

      <ContactUsModal />

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IB & IGCSE Coaching in Hyderabad | MindSplash Academy",
            description:
              "MindSplash Academy provides IB and IGCSE coaching in Hyderabad with expert teachers, personalized academic support, structured worksheets, small batch sizes, and international curriculum programs.",
            url: "https://mindsplash.in/",
            inLanguage: "en-IN",

            about: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              url: "https://mindsplash.in/",
              description:
                "MindSplash Academy provides academic coaching and personalized learning support for IB, IGCSE, Primary, Olympiad and exam preparation programs in Hyderabad.",
              areaServed: {
                "@type": "City",
                name: "Hyderabad",
              },

              offers: [
                {
                  "@type": "Offer",
                  name: "IB Coaching",
                  description:
                    "Academic coaching and support for International Baccalaureate students.",
                },
                {
                  "@type": "Offer",
                  name: "IGCSE Coaching",
                  description:
                    "Subject-focused coaching and academic support for IGCSE students.",
                },
                {
                  "@type": "Offer",
                  name: "Primary Education",
                  description:
                    "Strong foundation in number systems, fractions, decimals, ratios, percentages and other fundamental concepts.",
                },
                {
                  "@type": "Offer",
                  name: "Olympiad Preparation",
                  description:
                    "Specialized academic preparation for Olympiad examinations and competitions.",
                },
                {
                  "@type": "Offer",
                  name: "Exam Preparation",
                  description:
                    "Focused academic preparation and personalized guidance for examinations.",
                },
              ],

              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "MindSplash Academy Educational Programs",
                itemListElement: specialities.map((item) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: item.title,
                    description: item.description,
                  },
                })),
              },
            },

            mainEntity: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
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
    description:
      "Small batch sizes facilitate teachers to monitor each student's progress and provide personalized attention.",
  },
  {
    icon: "/building.svg",
    title: "Everything Under One Roof",
    description:
      "Offers multiple academic subjects and programs including SAT and PSAT support in one place.",
  },
  {
    icon: "/sheets.svg",
    title: "Criteria Based Worksheets",
    description:
      "Structured worksheets help identify student strengths and areas of improvement across different assessment criteria.",
  },
  {
    icon: "/hat.svg",
    title: "Looking Beyond",
    description:
      "Academic guidance and support for students exploring higher education and university options.",
  },
  {
    icon: "/sync.svg",
    title: "In Sync with School",
    description:
      "Curriculum flow and learning depth are aligned with the student's school curriculum.",
  },
  {
    icon: "/golf.svg",
    title: "Proven Track Record",
    description:
      "A structured teaching approach focused on academic progress and measurable student outcomes.",
  },
];

const otherSpecialities = [
  {
    icon: "/specialities.png",
    title: "PRIMARY",
    description:
      "The Math Component of the Program aims at mental math along with a strong grasp of basic concepts like number systems, fractions, decimals, ratio, percentages, variation, date handling and other foundational concepts.",
    from: "#F1A53D",
    to: "#EB3423",
  },
  {
    icon: "/specialities.png",
    title: "IGCSE",
    description:
      "The IGCSE program focuses on strengthening mathematical concepts, problem-solving ability, logical thinking and subject understanding through structured academic support.",
    from: "#8BEF81",
    to: "#53B79D",
  },
  {
    icon: "/specialities.png",
    title: "IB MYP",
    description:
      "The IB MYP program supports students with conceptual understanding, application-based learning, problem-solving and structured preparation aligned with the International Baccalaureate framework.",
    from: "#86D4EC",
    to: "#6CAADD",
  },
  {
    icon: "/specialities.png",
    title: "IB DP",
    description:
      "The IB DP program provides focused academic support designed to help students understand concepts, develop analytical skills and prepare effectively for their academic assessments.",
    from: "#BC4FA9",
    to: "#B54668",
  },
  {
    icon: "/specialities.png",
    title: "OLYMPIADS",
    description:
      "Olympiad preparation focuses on logical reasoning, mathematical thinking, problem-solving skills and strong conceptual understanding required for competitive academic examinations.",
    from: "#6ADAD4",
    to: "#38758B",
  },
  {
    icon: "/specialities.png",
    title: "EXAM PREP",
    description:
      "Focused examination preparation with structured learning, practice worksheets, regular feedback and personalized academic guidance.",
    from: "#F2F169",
    to: "#F8D560",
  },
];