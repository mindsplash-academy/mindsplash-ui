import type { Metadata } from "next";
import Link from "next/link";
import ContactUsModal from "../../_components/ContactUsModal";

export const metadata: Metadata = {
  title: "IB DP Coaching in Hyderabad | IB Diploma Programme | MindSplash Academy",

  description:
    "Explore IB DP coaching in Hyderabad at MindSplash Academy with subject-focused academic support for Mathematics, Physics, Chemistry, Economics, Language and Literature, and Computer Science.",

  keywords: [
    "IB DP coaching Hyderabad",
    "IB Diploma coaching Hyderabad",
    "IB Diploma Programme Hyderabad",
    "IB DP classes Hyderabad",
    "IB Maths coaching Hyderabad",
    "IB Physics coaching Hyderabad",
    "IB Chemistry coaching Hyderabad",
    "IB Economics coaching Hyderabad",
    "IB Computer Science coaching Hyderabad",
    "IB Language and Literature coaching Hyderabad",
  ],

  alternates: {
    canonical: "https://mindsplash.in/programs/ib-dp",
  },

  openGraph: {
    title: "IB DP Coaching in Hyderabad | IB Diploma Programme",
    description:
      "Subject-focused IB Diploma Programme academic support at MindSplash Academy in Hyderabad.",
    url: "https://mindsplash.in/programs/ib-dp",
    siteName: "MindSplash Academy",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is IB DP?",
    answer:
      "IB DP refers to the International Baccalaureate Diploma Programme. MindSplash Academy's existing Programs information describes academic support for selected IB DP subjects.",
  },
  {
    question: "Which IB DP subjects does MindSplash Academy support?",
    answer:
      "The existing MindSplash Programs information mentions Mathematics, including AA and AI, Physics, Chemistry, Economics, Language and Literature, and Computer Science.",
  },
  {
    question: "Does MindSplash provide IB Mathematics support?",
    answer:
      "Yes. The existing Programs information describes IB Mathematics support for both Mathematics: Analysis and Approaches (AA) and Mathematics: Applications and Interpretation (AI).",
  },
  {
    question: "How many hours per week does the existing IB DP program mention?",
    answer:
      "The existing MindSplash Programs information describes an IB DP program with three hours per week. Students and parents should confirm the current schedule directly with the academy.",
  },
  {
    question: "How can I enquire about IB DP coaching?",
    answer:
      "You can contact MindSplash Academy to discuss the student's IB DP subjects, academic requirements, current batches and available schedules.",
  },
];

export default function IBDPPage() {
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
        name: "IB DP",
        item: "https://mindsplash.in/programs/ib-dp",
      },
    ],
  };

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalProgram",

    name: "IB Diploma Programme Coaching",

    description:
      "Subject-focused academic support for IB Diploma Programme students in Mathematics, Physics, Chemistry, Economics, Language and Literature, and Computer Science.",

    provider: {
      "@type": "EducationalOrganization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },

    url: "https://mindsplash.in/programs/ib-dp",

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
            MindSplash Academy IB Diploma Programme
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            IB DP Coaching in Hyderabad | IB Diploma Programme
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            Subject-focused academic support for IB Diploma Programme
            students across Mathematics, Physics, Chemistry, Economics,
            Language and Literature, and Computer Science.
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
              IB DP Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The IB Diploma Programme is an academically focused pathway in
              which students work across different subject areas. Effective
              academic support can help students understand concepts, practise
              subject-specific questions and build a structured approach to
              their studies.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy's existing Programs information includes IB DP
              academic support across Mathematics, Physics, Chemistry,
              Economics, Language and Literature, and Computer Science. The
              Mathematics offering specifically mentions both Mathematics:
              Analysis and Approaches (AA) and Mathematics: Applications and
              Interpretation (AI).
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The existing program information describes three hours per week
              for IB DP. Students and parents should confirm the current
              timetable, subject availability, batch structure and academic
              support directly with MindSplash Academy before enrollment.
            </p>
          </section>

          {/* IB MATHEMATICS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB Mathematics Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Mathematics is one of the subject areas mentioned in
              MindSplash Academy's IB DP program. The existing Programs
              information includes both Mathematics: Analysis and Approaches
              and Mathematics: Applications and Interpretation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Mathematics preparation requires students to understand
              concepts and apply them to different types of questions.
              Structured practice can give students opportunities to work
              through calculations, mathematical reasoning and application
              problems while identifying topics that need further revision.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can benefit from reviewing their solutions rather than
              focusing only on whether an answer is correct. Understanding the
              steps used to reach a solution can help identify calculation
              errors, conceptual gaps or difficulties with a particular
              question structure.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The appropriate Mathematics pathway depends on the student's IB
              DP subject selection. Students and parents should confirm the
              current subject support available from the academy.
            </p>
          </section>

          {/* PHYSICS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB Physics Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Physics is another subject included in the existing MindSplash
              IB DP program information. Physics learning requires students to
              connect scientific concepts with mathematical relationships and
              applications.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A structured approach can include concept clarification,
              question practice and review of solutions. Students can work on
              understanding the reasoning behind an answer instead of relying
              only on memorisation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Physics questions can require students to identify relevant
              information, select an appropriate relationship and apply it
              correctly. Regular practice can help students become familiar
              with this process and identify areas where additional revision
              is required.
            </p>
          </section>

          {/* CHEMISTRY */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB Chemistry Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Chemistry is included among the IB DP subjects mentioned in the
              existing MindSplash Programs information. Students preparing in
              Chemistry may need to combine conceptual understanding with
              regular question practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Reviewing concepts systematically can help students organise
              their understanding of different topics. Practice questions can
              then be used to apply those concepts and identify areas that
              require additional explanation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Reviewing incorrect answers is also useful because it allows
              students to distinguish between a calculation mistake, a
              misunderstanding of a concept and difficulty interpreting the
              question.
            </p>
          </section>

          {/* ECONOMICS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB Economics Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Economics is included in MindSplash Academy's existing IB DP
              subject list. Academic support in this subject can involve
              understanding concepts and developing the ability to apply those
              concepts when working through questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can benefit from organised revision that separates
              concept learning from question practice. Once a topic is
              understood, students can work through relevant questions and
              review how effectively they applied the concept.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular review can also help students maintain familiarity with
              topics covered earlier in their academic schedule.
            </p>
          </section>

          {/* LANGUAGE AND LITERATURE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB Language and Literature Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Language and Literature is another subject identified in the
              existing MindSplash IB DP program information. Students working
              in this area may need structured academic support based on their
              subject requirements and current areas of study.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular academic practice can help students organise their
              understanding of texts, concepts and subject-related tasks.
              Reviewing work and receiving feedback can also help students
              identify areas where further development is required.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students should discuss their particular subject requirements
              with the academy so that current support and available batches
              can be confirmed.
            </p>
          </section>

          {/* COMPUTER SCIENCE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB Computer Science Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Computer Science is included in the existing IB DP subject list
              provided by MindSplash Academy. Students studying Computer
              Science can benefit from combining conceptual understanding with
              regular academic practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Working through subject-related questions can help students
              understand how concepts are applied. Students can also review
              mistakes and clarify difficult areas as part of their regular
              preparation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The exact academic support available depends on the student's
              current IB DP requirements, subject selection and schedule.
              Parents and students should confirm these details with
              MindSplash Academy.
            </p>
          </section>

          {/* CONCEPT LEARNING */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Concept-Based Learning for IB DP Students
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Understanding concepts is an important part of academic
              preparation. Students who understand why a concept works can
              often approach different question structures more systematically
              than students who rely only on memorised answers.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A concept-focused learning process can begin with clarification
              of difficult topics. Students can then move into examples,
              guided practice and independent questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular feedback can help students identify areas that require
              additional revision. This creates an opportunity to address
              difficulties before they become larger gaps in understanding.
            </p>
          </section>

          {/* PRACTICE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Practice and Revision for IB DP
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Regular practice provides students with opportunities to apply
              what they have learned. Practice can also reveal which concepts
              have been understood and which areas require additional
              explanation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Revision is more effective when students actively work with the
              material rather than simply reading through notes repeatedly.
              Solving questions, reviewing mistakes and revisiting difficult
              concepts can create a more structured academic routine.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can also maintain a list of difficult topics and return
              to them during later revision sessions. This makes it easier to
              focus additional study time where it is most useful.
            </p>
          </section>

          {/* PROBLEM SOLVING */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Developing Problem-Solving Skills
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Many academic questions require students to interpret
              information before deciding how to approach a problem. A
              structured problem-solving process can help students identify
              relevant information, select an approach and review the final
              answer.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Problem-solving practice is particularly relevant to subjects
              such as Mathematics, Physics, Chemistry and Computer Science,
              where students may need to connect several concepts while
              working through a question.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Reviewing different approaches can also help students understand
              why one method may be more appropriate for a particular problem.
            </p>
          </section>

          {/* ACADEMIC ROUTINE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Building a Consistent IB DP Study Routine
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The IB DP involves multiple subjects, making organisation an
              important part of a student's academic routine. Students can
              divide their available study time between subjects according to
              their current requirements and upcoming academic tasks.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A consistent routine can include concept revision, question
              practice and review of difficult topics. Students can also track
              areas where they need additional academic support.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The existing MindSplash program information describes three
              hours per week for IB DP. The current schedule should be
              confirmed directly with the academy before enrollment.
            </p>
          </section>

          {/* WHO CAN CONSIDER */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Who Can Consider IB DP Coaching?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              IB DP students who want additional subject-focused academic
              support can discuss their requirements with MindSplash Academy.
              The appropriate support depends on the subjects selected by the
              student and the areas where additional practice is needed.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students may seek support for concept clarification, question
              practice, revision or preparation around specific academic
              requirements.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Parents can contact the academy to discuss the student's current
              subjects, academic level and available program options before
              making an enrollment decision.
            </p>
          </section>

          {/* HYDERABAD */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB DP Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students and parents looking for IB DP coaching in Hyderabad can
              discuss their academic requirements with MindSplash Academy. The
              academy's existing Programs information includes support for
              Mathematics, Physics, Chemistry, Economics, Language and
              Literature, and Computer Science.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Before enrolling, students should confirm the current subject
              availability, schedule, batch structure and academic support
              offered for their selected IB DP subjects.
            </p>
          </section>

          {/* BENEFITS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How Structured IB DP Support Can Help
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Subject-focused academic support can give students additional
              opportunities to clarify concepts and practise questions.
              Depending on the student's requirements, structured support can
              help with:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>Understanding difficult subject concepts.</li>
              <li>Practising subject-specific questions.</li>
              <li>Reviewing mistakes and correcting misconceptions.</li>
              <li>Developing structured problem-solving approaches.</li>
              <li>Organising regular revision.</li>
              <li>Identifying topics that require additional practice.</li>
              <li>Building familiarity with different question formats.</li>
              <li>Maintaining a consistent academic routine.</li>
            </ul>
          </section>

          {/* OTHER PROGRAMS */}

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Explore Other MindSplash Programs
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <ProgramLink
                href="/programs"
                title="View All Programs"
              />

              <ProgramLink
                href="/programs/igcse"
                title="IGCSE Coaching"
              />

              <ProgramLink
                href="/programs/ib-myp"
                title="IB MYP Coaching"
              />

              <ProgramLink
                href="/programs/olympiads"
                title="Olympiad Coaching"
              />

              <ProgramLink
                href="/programs/exam-prep"
                title="Exam Preparation"
              />

              <ProgramLink
                href="/blog"
                title="Read the MindSplash Blog"
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
            Looking for IB DP Coaching in Hyderabad?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Contact MindSplash Academy to discuss IB DP subjects, academic
            requirements, current programs and schedules.
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