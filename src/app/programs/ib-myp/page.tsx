import type { Metadata } from "next";
import Link from "next/link";
import ContactUsModal from "../../_components/ContactUsModal";

export const metadata: Metadata = {
  title: "IB MYP Coaching in Hyderabad | IB Middle Years Programme | MindSplash Academy",

  description:
    "Explore IB MYP coaching in Hyderabad at MindSplash Academy with structured academic support, concept learning, practice worksheets, mock tests and preparation for IB MYP assessments.",

  keywords: [
    "IB MYP coaching Hyderabad",
    "IB MYP classes Hyderabad",
    "IB Middle Years Programme coaching Hyderabad",
    "IB MYP tuition Hyderabad",
    "IB MYP preparation Hyderabad",
    "IB MYP eAssessment preparation",
    "IB MYP Maths coaching Hyderabad",
    "IB MYP Science coaching Hyderabad",
    "IB MYP mock tests Hyderabad",
    "IB MYP assessment preparation",
  ],

  alternates: {
    canonical: "https://mindsplash.in/programs/ib-myp",
  },

  openGraph: {
    title: "IB MYP Coaching in Hyderabad | MindSplash Academy",
    description:
      "Structured IB MYP academic support with concept learning, worksheets, mock tests and assessment preparation.",
    url: "https://mindsplash.in/programs/ib-myp",
    siteName: "MindSplash Academy",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is IB MYP coaching?",
    answer:
      "IB MYP coaching provides additional academic support for students following the International Baccalaureate Middle Years Programme. Support can include concept clarification, worksheets, practice questions, mock tests and assessment preparation.",
  },
  {
    question: "Does MindSplash Academy provide IB MYP preparation?",
    answer:
      "Yes. The existing MindSplash Programs information describes an IB MYP program that includes preparation related to computer-based eAssessment, AssessPrep, rigorous worksheets and mock tests.",
  },
  {
    question: "Which subjects are covered in the IB MYP program?",
    answer:
      "The existing MindSplash Programs information describes three hours of Mathematics and three hours of Science per week for its IB MYP program. Current subject availability should be confirmed with the academy.",
  },
  {
    question: "Does the IB MYP program include mock tests?",
    answer:
      "The existing MindSplash Programs information mentions rigorous worksheets and mock tests as part of its IB MYP preparation.",
  },
  {
    question: "How can I enquire about IB MYP coaching?",
    answer:
      "You can contact MindSplash Academy to discuss current IB MYP batches, subjects, schedules, assessment preparation and the student's academic requirements.",
  },
];

export default function IBMYPPage() {
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
        name: "IB MYP",
        item: "https://mindsplash.in/programs/ib-myp",
      },
    ],
  };

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalProgram",

    name: "IB MYP Coaching",

    description:
      "IB Middle Years Programme academic support with concept learning, worksheets, mock tests and assessment preparation.",

    provider: {
      "@type": "EducationalOrganization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },

    url: "https://mindsplash.in/programs/ib-myp",

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
            MindSplash Academy IB Middle Years Programme
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            IB MYP Coaching in Hyderabad | IB Middle Years Programme
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            Structured academic support for IB MYP students through concept
            learning, worksheets, practice, mock tests and assessment-focused
            preparation.
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
              IB MYP Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The IB Middle Years Programme provides students with an
              academically structured learning pathway. Students may need
              additional support when they encounter difficult concepts,
              unfamiliar question formats or assessment-focused tasks.
              Structured coaching can provide additional opportunities to
              review concepts, practise questions and receive feedback.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy's existing Programs information describes an
              IB MYP program that includes preparation for computer-based
              eAssessment, AssessPrep, rigorous worksheets and mock tests.
              The program information also describes dedicated Mathematics and
              Science learning time.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The existing program description mentions three hours of
              Mathematics and three hours of Science per week. Students and
              parents should confirm the current schedule, subjects, batch
              structure and assessment support directly with MindSplash
              Academy before enrollment.
            </p>
          </section>

          {/* IB MYP ACADEMIC SUPPORT */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              What Is IB MYP Academic Support?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Academic support for IB MYP students can involve several parts of
              the learning process. Students may need help understanding a
              difficult concept, applying a concept to a new question,
              reviewing mistakes or preparing for an assessment.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A structured program can organise these activities into regular
              learning and practice sessions. Instead of waiting until an
              assessment is close, students can continuously review concepts
              and identify areas where additional practice is required.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy's existing IB MYP program information
              specifically refers to worksheets, mock tests and assessment
              preparation. These activities can give students opportunities to
              apply what they have learned and review their performance.
            </p>
          </section>

          {/* MATHEMATICS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB MYP Mathematics Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Mathematics is one of the subjects specifically mentioned in the
              existing MindSplash IB MYP program information. Mathematics
              preparation can involve strengthening concepts and practising
              different types of questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can benefit from working through a concept step by step
              before attempting more challenging applications. When students
              make mistakes, reviewing the reasoning behind the solution can
              help identify whether the difficulty came from a calculation,
              interpretation or conceptual misunderstanding.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular worksheets can provide repeated opportunities to practise
              mathematical concepts. Over time, students can build a record of
              topics that need additional revision.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The existing program description mentions three hours of
              Mathematics per week. Current schedules should be confirmed
              directly with MindSplash Academy.
            </p>
          </section>

          {/* SCIENCE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB MYP Science Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Science is also included in the existing MindSplash IB MYP
              program information. Science learning often requires students to
              understand concepts and then apply those concepts to questions
              and situations.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A structured learning approach can help students separate
              concept learning from question practice. After understanding a
              topic, students can work through relevant questions and review
              their answers.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Science practice can also involve interpreting information,
              connecting different ideas and explaining answers clearly.
              Regular practice can help students become more familiar with
              different question structures.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The existing program information mentions three hours of Science
              per week. Parents should confirm the current schedule and subject
              structure with the academy.
            </p>
          </section>

          {/* EASSESSMENT */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB MYP eAssessment Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The existing MindSplash Programs information specifically
              mentions preparation for computer-based eAssessment. This makes
              familiarity with assessment-oriented practice an important part
              of the program description.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Computer-based assessments can require students to read
              questions carefully, manage their time and work through digital
              question formats. Regular practice can help students become more
              familiar with working in an assessment-focused environment.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Preparation should not be limited to completing questions.
              Students can also review their performance and identify concepts
              that need additional study.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Current assessment requirements, dates and formats should always
              be confirmed with the student's school and the academy.
            </p>
          </section>

          {/* ASSESSPREP */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              AssessPrep and Practice
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              AssessPrep is mentioned in the existing MindSplash description
              of its IB MYP program. Practice platforms can provide students
              with an organised way to work through assessment-related
              questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Digital practice can also help students become comfortable with
              reading and responding to questions in a computer-based
              environment. The specific platform usage and current features
              available to students should be confirmed with MindSplash
              Academy.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Practice is most useful when it is followed by review. Students
              can examine incorrect answers, identify the relevant concept and
              return to that topic for additional learning.
            </p>
          </section>

          {/* WORKSHEETS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Rigorous Worksheets for IB MYP Students
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Worksheets can provide a consistent structure for academic
              practice. The existing MindSplash IB MYP program information
              specifically mentions rigorous worksheets.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A well-organised worksheet can allow students to practise a
              concept multiple times while working through questions with
              different levels of difficulty. It can also provide teachers
              with information about common mistakes.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can use worksheet performance as a revision guide. If a
              particular topic continues to cause difficulty, additional
              explanation and practice can be introduced.
            </p>
          </section>

          {/* MOCK TESTS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB MYP Mock Tests
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The existing MindSplash Programs information mentions mock tests
              as part of its IB MYP preparation. Mock assessments can give
              students an opportunity to practise working through multiple
              questions in a structured setting.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Mock tests can also help students identify areas that need
              further revision. Reviewing the results is important because the
              purpose of a practice test is not simply to produce a score but
              to identify learning gaps.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can record difficult topics after each practice test
              and use that list to plan subsequent revision.
            </p>
          </section>

          {/* CONCEPT BASED LEARNING */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Concept-Based Learning for IB MYP
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Conceptual understanding gives students a foundation for
              approaching questions that are not identical to examples they
              have already seen. Rather than memorising a single method,
              students can learn how and when a concept can be applied.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              For Mathematics and Science, this can involve understanding the
              relationship between a concept and its application. Students can
              then practise different questions to reinforce their learning.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Feedback is another important part of the learning process.
              Identifying mistakes early gives students an opportunity to
              revisit concepts before moving further into the curriculum.
            </p>
          </section>

          {/* PROBLEM SOLVING */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Developing IB MYP Problem-Solving Skills
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Problem-solving involves more than remembering information.
              Students may need to interpret a question, identify relevant
              information and decide which concept or method should be used.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular practice can help students develop a systematic process.
              They can learn to read the question carefully, identify the
              requirement, select an approach, complete the solution and
              review the result.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              This approach can be useful when students encounter questions
              that look different from the examples discussed during class.
            </p>
          </section>

          {/* REVISION */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Regular Revision for IB MYP Students
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Regular revision can help students retain concepts and identify
              areas where additional support is required. A revision routine
              can include reviewing class material, practising questions and
              correcting previous mistakes.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can maintain a list of difficult topics and revisit
              them at regular intervals. This approach can make revision more
              organised than attempting to review every topic with equal
              attention.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Practice worksheets and mock tests can complement this process
              by giving students additional opportunities to apply concepts.
            </p>
          </section>

          {/* ASSESSMENT PREPARATION */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Assessment-Focused IB MYP Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Assessment preparation works best when it is connected to regular
              learning. Students can first develop their understanding of
              concepts and then practise applying those concepts through
              assessment-style questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Mock tests and practice questions can help students become more
              familiar with assessment conditions. Reviewing performance after
              practice provides additional information about areas requiring
              revision.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The exact assessment requirements can vary depending on the
              student's academic pathway. Students and parents should confirm
              current requirements with their school and MindSplash Academy.
            </p>
          </section>

          {/* WHO CAN CONSIDER */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Who Can Consider IB MYP Coaching?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              IB MYP students who want additional support in Mathematics or
              Science can discuss their academic requirements with MindSplash
              Academy. Students may also seek support when they want more
              structured practice or assessment preparation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The appropriate program depends on the student's current grade,
              subject requirements, learning needs and academic schedule.
              Parents can discuss these details with the academy before
              selecting a batch.
            </p>
          </section>

          {/* HYDERABAD */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              IB MYP Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students searching for IB MYP coaching in Hyderabad can contact
              MindSplash Academy to discuss current academic support options.
              The existing program information describes Mathematics, Science,
              worksheets, mock tests and computer-based assessment preparation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Before enrollment, parents should confirm the current batch
              schedule, subject availability, program structure and assessment
              preparation details.
            </p>
          </section>

          {/* BENEFITS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How Structured IB MYP Support Can Help
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Depending on the student's requirements, structured academic
              support can provide additional opportunities to:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>Strengthen Mathematics concepts.</li>
              <li>Strengthen Science concepts.</li>
              <li>Practise different question formats.</li>
              <li>Work through structured worksheets.</li>
              <li>Review mistakes and misconceptions.</li>
              <li>Develop systematic problem-solving approaches.</li>
              <li>Practise through mock tests.</li>
              <li>Prepare for assessment-focused activities.</li>
              <li>Identify topics that require additional revision.</li>
              <li>Build a consistent academic practice routine.</li>
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
                href="/programs/ib-dp"
                title="IB DP Coaching"
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
            Looking for IB MYP Coaching in Hyderabad?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Contact MindSplash Academy to discuss IB MYP Mathematics,
            Science, worksheets, mock tests and assessment preparation.
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