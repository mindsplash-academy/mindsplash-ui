import type { Metadata } from "next";
import Link from "next/link";
import ContactUsModal from "../../_components/ContactUsModal";

export const metadata: Metadata = {
  title:
    "Exam Preparation Coaching in Hyderabad | MindSplash Academy",

  description:
    "Explore structured exam preparation coaching in Hyderabad at MindSplash Academy with concept revision, practice, problem-solving and academic support.",

  keywords: [
    "exam preparation Hyderabad",
    "exam preparation coaching Hyderabad",
    "exam coaching Hyderabad",
    "school exam preparation Hyderabad",
    "student exam preparation",
    "Maths exam preparation Hyderabad",
    "Science exam preparation Hyderabad",
    "academic exam coaching Hyderabad",
  ],

  alternates: {
    canonical: "https://mindsplash.in/programs/exam-prep",
  },

  openGraph: {
    title:
      "Exam Preparation Coaching in Hyderabad | MindSplash Academy",
    description:
      "Structured exam preparation with concept revision, practice and academic support at MindSplash Academy.",
    url: "https://mindsplash.in/programs/exam-prep",
    siteName: "MindSplash Academy",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does exam preparation coaching include?",
    answer:
      "Exam preparation can include concept revision, practice questions, worksheets, problem-solving, revision planning and support for areas where students need additional practice.",
  },
  {
    question: "Who can consider exam preparation support?",
    answer:
      "Students who want additional academic support before school assessments or examinations can discuss their requirements with MindSplash Academy.",
  },
  {
    question: "Does exam preparation include Maths and Science?",
    answer:
      "The existing MindSplash Programs information includes Mathematics and Science learning content. Students and parents should confirm the subjects and current exam-preparation batches available from the academy.",
  },
  {
    question: "How does regular practice help with exams?",
    answer:
      "Regular practice gives students opportunities to revise concepts, identify mistakes and become familiar with different question types before an examination.",
  },
  {
    question: "How can I enquire about exam preparation classes?",
    answer:
      "You can contact MindSplash Academy to discuss the student's grade, subjects, academic requirements and currently available exam preparation programs.",
  },
];

export default function ExamPrepPage() {
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
        name: "Exam Preparation",
        item: "https://mindsplash.in/programs/exam-prep",
      },
    ],
  };

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalProgram",

    name: "Exam Preparation",

    description:
      "Structured academic exam preparation focused on concept revision, practice, problem-solving and examination readiness.",

    provider: {
      "@type": "EducationalOrganization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },

    url: "https://mindsplash.in/programs/exam-prep",

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
          HERO
      ========================================================= */}

      <section className="mx-5 mt-5 rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end shadow-lg md:mx-7 md:rounded-[50px]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

          <p className="mb-4 font-semibold text-white">
            MindSplash Academy Academic Support
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Exam Preparation Coaching in Hyderabad
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            Structured exam preparation focused on concept revision,
            practice, problem-solving and building confidence with
            examination-focused questions.
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

          {/* INTRODUCTION */}

          <section>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Exam Preparation Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Examination preparation is an important part of a student's
              academic journey. Preparing effectively involves more than
              reading a chapter once before an examination. Students need
              opportunities to understand concepts, revise important topics,
              practise questions and identify areas that require additional
              attention.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy's existing Programs information includes
              exam preparation as one of its academic offerings. The program
              information also discusses Mathematics and Science learning,
              including concept-focused study and practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The exact preparation required can vary according to the
              student's grade, curriculum, subjects and examination schedule.
              Students and parents can discuss their specific academic
              requirements with MindSplash Academy before selecting an
              appropriate preparation program.
            </p>
          </section>

          {/* CONCEPT REVISION */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Concept Revision Before Exams
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Strong examination preparation starts with a clear understanding
              of the concepts being assessed. Students who understand the
              underlying idea behind a topic can generally approach different
              question formats more effectively than students who rely only on
              memorising individual answers.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Revision can therefore begin by identifying the topics included
              in the examination and reviewing the concepts associated with
              those topics. Difficult areas can receive additional attention
              before students move into more extensive practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Concept revision is particularly useful when several chapters
              are connected. Understanding how topics relate to one another
              can help students apply their knowledge when questions combine
              more than one concept.
            </p>
          </section>

          {/* MATHEMATICS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Mathematics Exam Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Mathematics preparation requires a balance between understanding
              concepts and practising different types of questions. Students
              may need to revise formulas, understand mathematical processes
              and then apply those concepts to practice problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular practice can help students identify calculation errors,
              misunderstandings and gaps in their approach. Reviewing mistakes
              after completing a worksheet can help students understand which
              parts of a solution need more attention.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Mathematics preparation can also include working through
              questions with different levels of difficulty. Beginning with
              foundational questions and gradually moving towards more
              application-based problems can give students a structured way
              to strengthen their preparation.
            </p>
          </section>

          {/* SCIENCE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Science Exam Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Science examinations can assess both conceptual understanding
              and the ability to apply scientific ideas. Students may need to
              remember important concepts while also understanding how those
              concepts work in different situations.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Effective preparation can include reviewing important concepts,
              practising questions and discussing topics that students find
              difficult. This process can help students organise information
              and prepare for different question formats.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular revision is useful because science subjects can contain
              several interconnected topics. Revisiting earlier concepts can
              help students maintain continuity as they move through the
              syllabus.
            </p>
          </section>

          {/* PRACTICE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Practice Questions and Worksheets
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Practice questions provide students with an opportunity to apply
              the concepts they have studied. Working through questions also
              helps students become familiar with the type of reasoning needed
              to produce an answer.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Worksheets can be used to organise practice around specific
              topics. Teachers can review student responses and identify
              recurring errors or areas where additional explanation may be
              helpful.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Practice should not focus only on completing a large number of
              questions. Reviewing incorrect answers is also important because
              it allows students to understand what went wrong and reduce the
              chance of repeating the same mistake.
            </p>
          </section>

          {/* REVISION STRATEGY */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Structured Revision for Better Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              A structured revision plan can make exam preparation more
              manageable. Instead of trying to revise every topic at the same
              time, students can divide the syllabus into smaller sections and
              work through them systematically.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A revision routine can include concept review, question
              practice, mistake analysis and a final review of important
              topics. The exact schedule should depend on the student's
              examination timetable and academic requirements.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can also keep track of topics they find difficult. This
              creates a practical list for further revision rather than
              repeatedly spending the same amount of time on topics they
              already understand.
            </p>
          </section>

          {/* PROBLEM SOLVING */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Problem-Solving and Application
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Some examination questions require students to apply concepts
              rather than simply recall information. Students may need to
              understand a question, identify the relevant concept and then
              determine how to use that concept to reach an answer.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Problem-solving practice can help students become more
              comfortable with this process. Working through different
              question structures gives students opportunities to practise
              selecting appropriate methods and checking their solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              This type of preparation can be especially useful for subjects
              such as Mathematics and Science, where questions may require
              multiple steps or application of concepts in unfamiliar
              situations.
            </p>
          </section>

          {/* MOCK PRACTICE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Examination Practice and Time Management
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students can benefit from practising questions within a defined
              period of time. This gives them an opportunity to understand how
              they manage their time when working through several questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Timed practice can also help students identify questions that
              take longer than expected. Once these patterns become clear,
              students can discuss different approaches to managing their
              examination time.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The goal of practice should not simply be speed. Accuracy,
              understanding and the ability to review answers are also
              important parts of effective examination preparation.
            </p>
          </section>

          {/* BENEFITS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How Exam Preparation Can Help Students
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Structured preparation can give students a consistent academic
              routine before examinations. It can also provide opportunities
              to identify topics that require additional explanation or
              practice.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>Strengthen understanding of important concepts.</li>
              <li>Revise topics systematically.</li>
              <li>Practise different question formats.</li>
              <li>Identify common mistakes.</li>
              <li>Improve problem-solving approaches.</li>
              <li>Develop regular study and revision habits.</li>
              <li>Become familiar with examination-focused practice.</li>
              <li>Focus additional time on difficult academic areas.</li>
            </ul>
          </section>

          {/* WHO CAN CONSIDER */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Who Can Consider Exam Preparation Coaching?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Exam preparation support can be considered by students who want
              additional practice or structured revision before their academic
              assessments. The appropriate approach depends on the student's
              grade, curriculum, subjects and examination requirements.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students who are finding particular topics difficult can discuss
              those areas with their teachers and parents. Additional practice
              can then be planned around the areas where the student requires
              further support.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Parents can contact MindSplash Academy to understand the
              currently available exam preparation programs and discuss the
              student's academic requirements.
            </p>
          </section>

          {/* MINDSPLASH APPROACH */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Academic Support at MindSplash Academy
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              MindSplash Academy's existing Programs information presents
              academic learning through concept-focused study and practice.
              Its Mathematics and Science descriptions include areas such as
              number systems, fractions, decimals, ratio, percentages,
              variation, data handling and scientific concepts.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              For students preparing for examinations, these academic
              foundations can be combined with revision and question practice
              based on the student's current requirements.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students and parents should confirm the current curriculum,
              subjects, batch timings and examination-specific preparation
              available from the academy before enrollment.
            </p>
          </section>

          {/* HYDERABAD */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Exam Preparation Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students looking for exam preparation coaching in Hyderabad can
              discuss their academic needs with MindSplash Academy. The
              preparation approach can depend on the student's grade, subjects,
              curriculum and the assessment they are preparing for.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A discussion with the academy can help parents understand the
              currently available programs, subjects and schedules before
              choosing an appropriate academic support option.
            </p>
          </section>

          {/* INTERNAL LINKS */}

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
                href="/programs/olympiads"
                title="Olympiad Coaching"
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
            Looking for Exam Preparation Coaching in Hyderabad?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Contact MindSplash Academy to discuss current exam preparation
            programs, subjects, academic requirements and schedules.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Book a Free Demo Class
          </Link>

        </div>
      </section>

      {/* CONTACT MODAL */}

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