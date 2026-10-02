import type { Metadata } from "next";
import Link from "next/link";
import ContactUsModal from "../../_components/ContactUsModal";

export const metadata: Metadata = {
  title: "Olympiad Coaching in Hyderabad | Maths & Science | MindSplash Academy",

  description:
    "Explore Olympiad coaching in Hyderabad at MindSplash Academy for Maths and Science competitions, including structured practice and competition preparation.",

  keywords: [
    "Olympiad coaching Hyderabad",
    "Olympiad classes Hyderabad",
    "Math Olympiad coaching Hyderabad",
    "Science Olympiad coaching Hyderabad",
    "IOQM coaching Hyderabad",
    "AMC preparation Hyderabad",
    "Olympiad preparation",
  ],

  alternates: {
    canonical: "https://mindsplash.in/programs/olympiads",
  },

  openGraph: {
    title:
      "Olympiad Coaching in Hyderabad | Maths & Science | MindSplash Academy",
    description:
      "Explore Olympiad coaching in Hyderabad at MindSplash Academy for Maths and Science competitions, including structured practice and competition preparation.",
    url: "https://mindsplash.in/programs/olympiads",
    siteName: "MindSplash Academy",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is Olympiad coaching?",
    answer:
      "Olympiad coaching provides structured academic preparation for mathematics and science competitions. It can include concept strengthening, problem-solving practice, logical reasoning and competition-oriented worksheets.",
  },
  {
    question: "Which Olympiads does MindSplash Academy support?",
    answer:
      "The reviewed Programs information mentions international mathematics and science competitions, AMC and IOQM among the competition pathways discussed. Current competition support should be confirmed with MindSplash Academy.",
  },
  {
    question: "What skills are developed through Olympiad preparation?",
    answer:
      "Olympiad preparation can develop conceptual understanding, mathematical thinking, logical reasoning, problem-solving and the ability to approach unfamiliar questions.",
  },
  {
    question: "Which students can consider Olympiad preparation?",
    answer:
      "The existing MindSplash Programs information describes Olympiad training for students in grades 6 to 10. Parents should confirm the current eligibility and program structure before enrollment.",
  },
  {
    question: "How can I enquire about Olympiad batches?",
    answer:
      "Contact MindSplash Academy to confirm current Olympiad programs, subjects, competitions, batches and schedules.",
  },
];

export default function OlympiadsPage() {
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
        name: "Programs",
        item: "https://mindsplash.in/programs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Olympiads",
        item: "https://mindsplash.in/programs/olympiads",
      },
    ],
  };

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalProgram",

    name: "Olympiad Coaching",

    description:
      "Mathematics and science competition preparation with structured practice, problem-solving and conceptual learning.",

    provider: {
      "@type": "EducationalOrganization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },

    url: "https://mindsplash.in/programs/olympiads",

    areaServed: {
      "@type": "City",
      name: "Hyderabad",
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
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="mx-5 mt-5 rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end shadow-lg md:mx-7 md:rounded-[50px]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

          <p className="mb-4 font-semibold text-white">
            MindSplash Academy Competition Preparation
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Olympiad Coaching in Hyderabad | Maths &amp; Science
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            Structured mathematics and science competition preparation focused
            on concepts, logical reasoning, problem-solving and regular
            practice.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Book a Free Demo Class
          </Link>

        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main className="bg-white text-gray-900">
        <article className="mx-auto max-w-6xl px-6 py-16">

          {/* Introduction */}

          <section>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Olympiad Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Mathematics and science Olympiads give students an opportunity
              to work with challenging problems that can require more than
              routine classroom practice. Students may need to identify
              patterns, apply concepts in unfamiliar situations and develop
              logical approaches to solving problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy describes Olympiad training as one of its
              academic programs and highlights preparation for mathematics and
              science competitions. Its existing Programs information also
              mentions AMC and IOQM alongside other Olympiad pathways.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Competition preparation should be structured around the specific
              examination or competition being targeted. Students and parents
              should confirm the current competition list, eligibility,
              syllabus and schedules with MindSplash Academy before enrollment.
            </p>
          </section>

          {/* Math Olympiad */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Math Olympiad Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Mathematics competition preparation often requires students to
              move beyond direct formula application. Problems can require
              logical reasoning, pattern recognition, multiple-step thinking
              and creative approaches.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A structured preparation program can help students strengthen
              foundational concepts before moving into more challenging
              applications. Repeated problem-solving practice can also help
              students become more comfortable with unfamiliar question types.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Mathematics Olympiad preparation can involve working with
              numerical reasoning, patterns, relationships and multi-step
              problems. Instead of approaching every question through a single
              formula, students may need to understand the structure of the
              problem and determine which concepts are relevant.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular practice also gives students opportunities to review
              incorrect solutions. Understanding why an answer was incorrect
              can be as useful as finding the correct answer because it helps
              students recognize gaps in reasoning and improve their approach
              to similar questions.
            </p>
          </section>

          {/* Science Olympiad */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Science Olympiad Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Science competition preparation can involve conceptual
              questions, application-based problems and reasoning across
              scientific topics. A strong foundation allows students to
              approach unfamiliar situations more confidently.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Science questions can require students to connect classroom
              concepts with practical situations. Instead of simply recalling
              definitions, students may need to understand relationships
              between scientific principles and apply those principles to a
              new question.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash's existing program information describes training for
              international mathematics and science competitions. Current
              science competition coverage should be confirmed directly with
              the academy.
            </p>
          </section>

          {/* IOQM and AMC */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IOQM and AMC Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The existing MindSplash Programs page specifically mentions IOQM
              and American Math Competitions among the competition pathways
              associated with its Olympiad training.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Each competition has its own eligibility requirements, format and
              preparation expectations. Students should therefore confirm the
              current competition details and available preparation program
              before enrolling.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Competition-focused preparation can be planned around the
              student's current level and the requirements of the selected
              assessment. This may involve concept revision, practice
              worksheets, timed problem solving and review of previous
              mistakes.
            </p>
          </section>

          {/* Problem Solving */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Building Problem-Solving Skills
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Olympiad preparation is not only about completing more
              questions. Students also need to understand why a solution works
              and how different concepts can be connected.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular problem-solving practice can help students develop a
              systematic approach. A student can learn to read a problem
              carefully, identify relevant information, select an approach,
              work through the solution and review the result.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can also benefit from comparing different approaches to
              the same problem. A question may sometimes have more than one
              possible method, and discussing different methods can encourage
              flexible thinking and deeper conceptual understanding.
            </p>
          </section>

          {/* Concepts */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Concepts Before Competition Practice
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Strong fundamentals are important before students move into
              increasingly difficult competition questions. If a student has a
              gap in a foundational concept, advanced problem-solving can
              become unnecessarily difficult.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A structured learning approach can therefore begin with concept
              clarification and gradually introduce more challenging
              questions. Teachers can use feedback to identify areas that
              require further practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              This approach can be useful for students who are comfortable with
              standard classroom exercises but want additional exposure to
              unfamiliar or competition-oriented problems.
            </p>
          </section>

          {/* Worksheets */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Worksheets and Regular Practice
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Worksheets can provide students with a consistent way to
              practice concepts. They also allow teachers to observe common
              mistakes and identify topics where additional explanation is
              needed.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Consistent practice is particularly important for competitions
              because students may encounter problems that are different from
              standard textbook exercises. Exposure to different question
              patterns can help students develop flexible problem-solving
              strategies.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Reviewing completed worksheets is also an important part of
              learning. Students can revisit questions they found difficult,
              compare their reasoning with the expected approach and identify
              concepts that need additional practice.
            </p>
          </section>

          {/* Benefits */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How Olympiad Preparation Can Help
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              A structured Olympiad preparation program can provide students
              with additional opportunities to work on concepts and problem
              types beyond their regular classroom routine.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>Strengthen mathematical and scientific concepts.</li>
              <li>Develop logical reasoning.</li>
              <li>Improve problem-solving ability.</li>
              <li>Practice unfamiliar question formats.</li>
              <li>
                Build structured approaches to difficult problems.
              </li>
              <li>Identify academic strengths and gaps.</li>
              <li>
                Prepare systematically for competition-focused assessments.
              </li>
              <li>
                Develop greater familiarity with multi-step questions.
              </li>
            </ul>
          </section>

          {/* Who Can Consider */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Who Can Consider Olympiad Coaching?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The MindSplash Programs information describes Olympiad training
              for students in grades 6 to 10. The appropriate program depends
              on the student's current grade, academic level and the
              competition being targeted.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Parents should discuss the student's requirements with the
              academy before selecting a competition preparation program. This
              allows the academy to provide current information about available
              subjects, competitions and batches.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students who enjoy Mathematics or Science and want to explore
              questions beyond routine textbook exercises may also find
              competition-style practice useful as an additional academic
              activity.
            </p>
          </section>

          {/* Learning Approach */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              A Structured Approach to Olympiad Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Competition preparation can be organized into several stages.
              Students can begin by reviewing the concepts required for their
              selected competition. They can then move into guided examples,
              practice questions and progressively more challenging problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular feedback can help students understand where their
              reasoning needs improvement. Instead of treating every incorrect
              answer as a simple mistake, students can examine the process
              used to reach the answer and identify where their approach
              changed direction.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Over time, repeated exposure to different problem structures can
              help students become more familiar with competition-style
              questions while continuing to strengthen their academic
              foundations.
            </p>
          </section>

          {/* Hyderabad */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Olympiad Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students and parents looking for Olympiad coaching in Hyderabad
              can discuss their requirements with MindSplash Academy before
              selecting a program. The most suitable preparation depends on
              the student's grade, subject interests, current academic
              foundation and the competition being considered.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy's Programs information includes mathematics
              and science competition preparation. Parents can contact the
              academy to confirm current program availability, competition
              pathways, schedules and batch details.
            </p>
          </section>

          {/* Internal Links */}

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Explore Other MindSplash Programs
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <ProgramLink
                href="/programs/igcse"
                title="IGCSE Coaching"
              />

              <ProgramLink
                href="/programs/ib-myp"
                title="IB MYP Coaching"
              />

              <ProgramLink
                href="/programs/ib-dp"
                title="IB DP Coaching"
              />

              <ProgramLink
                href="/programs/exam-prep"
                title="Exam Preparation"
              />

            </div>
          </section>

          {/* FAQ */}

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-4">

              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    {faq.question}
                  </summary>

                  <p className="mt-3 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}

            </div>
          </section>

        </article>
      </main>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-5 mb-16 rounded-[35px] bg-gradient-to-r from-gradient-start to-gradient-end md:mx-7">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Looking for Olympiad Coaching in Hyderabad?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Contact MindSplash Academy to discuss current Olympiad programs,
            subjects, competition pathways and schedules.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Book a Free Demo Class
          </Link>

        </div>
      </section>

      {/* Contact Modal */}

      <ContactUsModal />

      {/* =========================================================
          BREADCRUMB SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =========================================================
          PROGRAM SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programSchema),
        }}
      />

      {/* =========================================================
          FAQ SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

function ProgramLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-gray-200 bg-white p-5 font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
    >
      {title}
    </Link>
  );
}