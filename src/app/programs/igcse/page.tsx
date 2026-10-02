import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactUsModal from "../../_components/ContactUsModal";

export const metadata: Metadata = {
  title:
    "IGCSE Coaching in Hyderabad | Cambridge IGCSE Classes | MindSplash Academy",

  description:
    "Explore IGCSE coaching in Hyderabad at MindSplash Academy with structured academic support in Mathematics, Physics, Chemistry, Biology and Computer Science, along with concept learning, practice and exam preparation.",

  keywords: [
    "IGCSE coaching Hyderabad",
    "IGCSE classes Hyderabad",
    "IGCSE tuition Hyderabad",
    "IGCSE preparation Hyderabad",
    "Cambridge IGCSE coaching Hyderabad",
    "IGCSE Maths coaching Hyderabad",
    "IGCSE Physics coaching Hyderabad",
    "IGCSE Chemistry coaching Hyderabad",
    "IGCSE Biology coaching Hyderabad",
    "IGCSE Computer Science coaching Hyderabad",
    "IGCSE exam preparation Hyderabad",
    "Cambridge IGCSE classes",
    "IGCSE tutors Hyderabad",
  ],

  alternates: {
    canonical: "https://mindsplash.in/programs/igcse",
  },

  openGraph: {
    title:
      "IGCSE Coaching in Hyderabad | Cambridge IGCSE | MindSplash Academy",

    description:
      "Structured IGCSE academic support in Mathematics, Physics, Chemistry, Biology and Computer Science at MindSplash Academy.",

    url: "https://mindsplash.in/programs/igcse",

    siteName: "MindSplash Academy",

    type: "website",
  },
};

const faqs = [
  {
    question: "What is IGCSE coaching?",
    answer:
      "IGCSE coaching provides additional academic support for students following the Cambridge IGCSE pathway. It can include concept clarification, subject practice, problem-solving, worksheets, revision and examination preparation.",
  },
  {
    question: "Which IGCSE subjects are supported by MindSplash Academy?",
    answer:
      "The existing MindSplash Programs information mentions Mathematics, Physics, Chemistry, Biology and Computer Science for its IGCSE and A-level programs. Current subject availability should be confirmed with MindSplash Academy.",
  },
  {
    question: "Does MindSplash Academy provide Cambridge IGCSE preparation?",
    answer:
      "The existing MindSplash Programs information describes IGCSE as part of its academic programs and refers to Cambridge examinations. Students and parents should confirm the current syllabus, subjects, batches and examination preparation details with the academy.",
  },
  {
    question: "How can students prepare for IGCSE examinations?",
    answer:
      "IGCSE preparation can include understanding concepts, practising subject-specific questions, reviewing mistakes, using structured revision and becoming familiar with examination-style questions.",
  },
  {
    question: "Does MindSplash Academy provide IGCSE Mathematics coaching?",
    answer:
      "Mathematics is one of the subjects mentioned in the existing MindSplash IGCSE program information. Contact the academy to confirm current Mathematics batches and schedules.",
  },
  {
    question: "How can I enquire about IGCSE coaching in Hyderabad?",
    answer:
      "You can contact MindSplash Academy to discuss current IGCSE subjects, batches, schedules, academic support and examination preparation.",
  },
];

export default function IGCSEPage() {
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
        name: "IGCSE",
        item: "https://mindsplash.in/programs/igcse",
      },
    ],
  };

  const programSchema = {
    "@context": "https://schema.org",

    "@type": "EducationalProgram",

    name: "IGCSE Coaching",

    description:
      "IGCSE academic support in Mathematics, Physics, Chemistry, Biology and Computer Science with concept learning, practice and examination preparation.",

    provider: {
      "@type": "EducationalOrganization",

      name: "MindSplash Academy",

      url: "https://mindsplash.in/",
    },

    url: "https://mindsplash.in/programs/igcse",

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

      <section className="mx-5 mt-5 overflow-hidden rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end shadow-lg md:mx-7 md:rounded-[50px]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">

          <div>
            <p className="mb-4 font-semibold text-white">
              MindSplash Academy | Cambridge IGCSE
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              IGCSE Coaching in Hyderabad
            </h1>

            <p className="mt-5 text-2xl font-semibold text-white md:text-3xl">
              Cambridge IGCSE Classes & Exam Preparation
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
              Structured academic support for IGCSE students with concept
              learning, subject practice, problem-solving and examination
              preparation in Mathematics, Physics, Chemistry, Biology and
              Computer Science.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-xl bg-white px-7 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Book a Free Demo Class
              </Link>

              <Link
                href="/programs"
                className="rounded-xl border border-white/70 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                View All Programs
              </Link>

            </div>
          </div>

          <div className="relative">

            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl">
              <Image
                src="/igcse_kid.jpg"
                alt="IGCSE coaching and academic preparation at MindSplash Academy"
                width={700}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main className="bg-white text-gray-900">

        <article className="mx-auto max-w-6xl px-6 py-16">

          {/* INTRODUCTION */}

          <section>
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Coaching in Hyderabad for Concept-Based Learning
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The International General Certificate of Secondary Education,
              commonly known as IGCSE, provides students with an academic
              pathway that requires consistent understanding, subject practice
              and preparation. Students studying through an IGCSE pathway may
              encounter questions that require them to apply concepts rather
              than simply remember information.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy's existing Programs information includes IGCSE
              and A-level academic programs covering Mathematics, Physics,
              Chemistry, Biology and Computer Science. The program information
              also refers to Cambridge examinations and the use of memory maps
              as part of learning.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              IGCSE coaching can provide students with additional opportunities
              to understand difficult topics, practise questions, revise
              concepts and prepare for assessments. The exact subjects,
              syllabus, batch structure and examination support available at
              MindSplash Academy should be confirmed directly with the academy.
            </p>
          </section>

          {/* WHAT IS IGCSE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              What Is IGCSE?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              IGCSE is an internationally used secondary-school qualification
              pathway. Students studying IGCSE subjects work through structured
              academic content and assessments associated with their selected
              subjects.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Because each subject has its own concepts, terminology and
              question formats, students can benefit from subject-specific
              learning. A strong preparation routine can combine concept
              understanding with regular practice and revision.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              For students preparing for Cambridge examinations, understanding
              the subject content is an important part of preparation.
              Students can also benefit from learning how to approach
              different types of questions and reviewing mistakes after
              practice.
            </p>
          </section>

          {/* IGCSE MATHEMATICS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Mathematics Coaching in Hyderabad
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Mathematics is one of the subjects specifically mentioned in the
              existing MindSplash IGCSE program information. IGCSE Mathematics
              preparation can involve developing conceptual understanding,
              practising calculations and learning how to approach
              application-based questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can begin by identifying the mathematical concept
              required for a particular problem. They can then select an
              appropriate method, complete the calculation and review the
              answer. This process can be repeated with questions of different
              levels of difficulty.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular practice is useful because mathematical understanding
              develops through both explanation and application. Worksheets
              can help students revisit topics while practice questions can
              show where additional revision is required.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students preparing for IGCSE Mathematics can also maintain a
              revision list of topics that require additional attention. This
              can make examination preparation more organised.
            </p>
          </section>

          {/* PHYSICS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Physics Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Physics requires students to understand relationships between
              scientific concepts and apply those concepts to problems. IGCSE
              Physics preparation can therefore involve both conceptual
              learning and question practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can benefit from understanding the meaning of formulas
              rather than attempting to memorise formulas without context.
              When a problem is presented, the student can identify the known
              information, determine what needs to be calculated and select
              the relevant principle.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Practice questions can help students become familiar with
              different ways a concept may be presented. Reviewing incorrect
              answers can also reveal whether the difficulty came from
              understanding, calculation or interpretation.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The existing MindSplash Programs information lists Physics among
              the IGCSE and A-level subjects offered in its program
              description.
            </p>
          </section>

          {/* CHEMISTRY */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Chemistry Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Chemistry combines conceptual understanding with structured
              terminology, relationships and application. Students preparing
              for IGCSE Chemistry can benefit from learning concepts clearly
              before moving into question-based practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular revision can help students organise important concepts
              and identify topics that need additional study. Practice
              questions can then be used to check whether students can apply
              what they have learned.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can also review mistakes systematically. Instead of
              simply correcting an answer, they can identify the reason for the
              mistake and revisit the relevant concept.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Chemistry is one of the subjects mentioned in the existing
              MindSplash IGCSE program information. Current Chemistry batches
              and schedules should be confirmed with the academy.
            </p>
          </section>

          {/* BIOLOGY */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Biology Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Biology involves understanding scientific concepts, processes
              and relationships. IGCSE Biology preparation can involve
              organised learning followed by revision and question practice.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can create structured notes for important concepts and
              use diagrams, summaries or memory maps to support revision. The
              existing MindSplash IGCSE program description specifically refers
              to memory maps as part of its learning approach.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Practice questions can help students understand how biological
              concepts are applied in assessments. Students can also use their
              mistakes as a guide for deciding which topics require further
              revision.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Biology is included among the IGCSE and A-level subjects listed
              in the existing MindSplash Programs information.
            </p>
          </section>

          {/* COMPUTER SCIENCE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Computer Science Coaching
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Computer Science requires students to understand technical
              concepts and apply logical thinking to problems. Preparation can
              include learning concepts, understanding how systems work and
              practising questions related to the subject.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can benefit from breaking complicated topics into
              smaller concepts. Once each part is understood, students can
              connect those concepts to solve larger problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Logical reasoning and structured problem-solving are useful
              skills for Computer Science learning. Regular practice can help
              students become more comfortable with unfamiliar problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Computer Science is one of the subjects mentioned in the
              existing MindSplash IGCSE program description.
            </p>
          </section>

          {/* CAMBRIDGE EXAM PREPARATION */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Cambridge IGCSE Examination Preparation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Examination preparation should ideally begin with a clear
              understanding of the subject content. Students can then build
              their preparation through regular practice, revision and
              assessment-focused questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Cambridge examination preparation can require students to work
              carefully through questions and communicate their answers in the
              expected format. Regular practice can help students identify
              question patterns and understand where they need additional
              revision.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The existing MindSplash Programs information refers to Cambridge
              examinations as part of its IGCSE and A-level program
              description. Students should confirm the current examination
              requirements and subject-specific details with their school and
              academy.
            </p>
          </section>

          {/* CONCEPT LEARNING */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Concept-Based IGCSE Learning
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Understanding a concept gives students a foundation for solving
              different types of questions. If students only memorise a single
              example, they may find it difficult when the same idea appears
              in a different form.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Concept-based learning focuses on understanding what a topic
              means, how it works and how it can be applied. Students can then
              practise questions that require them to use the concept in
              different situations.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              This approach can be useful across Mathematics, Physics,
              Chemistry, Biology and Computer Science because each subject
              contains concepts that can be applied in multiple contexts.
            </p>
          </section>

          {/* MEMORY MAPS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Memory Maps for IGCSE Revision
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              The existing MindSplash IGCSE program information mentions memory
              maps. Visual organisation can help students bring related ideas
              together during revision.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A memory map can place a central topic in one location and
              connect related concepts around it. Students can use this type
              of revision technique to organise definitions, processes,
              relationships or important subtopics.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Memory maps should complement concept understanding and question
              practice rather than replace them. Students can use the maps for
              revision and then test their understanding through questions.
            </p>
          </section>

          {/* QUESTION PRACTICE */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Question Practice
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Question practice is an important part of academic preparation.
              Students can use practice questions to check whether they can
              apply concepts independently.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              A useful practice routine can involve solving a question,
              checking the answer, identifying mistakes and returning to the
              relevant concept when necessary.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students should also practise questions that require different
              types of thinking. Working only on familiar examples may not
              provide enough exposure to unfamiliar question structures.
            </p>
          </section>

          {/* REVISION */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Revision Strategy
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Revision becomes more manageable when students organise their
              subjects and topics. Instead of trying to revise everything at
              once, students can create smaller revision targets.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can divide their revision into concept review,
              question practice and mistake analysis. Topics that are already
              well understood can require less revision time, while difficult
              areas can receive additional attention.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Regular revision can also reduce the amount of material that
              needs to be reviewed immediately before an examination.
            </p>
          </section>

          {/* PROBLEM SOLVING */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Building IGCSE Problem-Solving Skills
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Problem-solving is useful across several IGCSE subjects.
              Students may need to interpret information, identify the relevant
              concept and decide how to approach a question.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students can develop a structured process by reading the
              question carefully, identifying what is being asked, selecting
              an approach and reviewing their final answer.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Repeated practice with different question types can provide
              opportunities for students to develop greater flexibility when
              approaching unfamiliar problems.
            </p>
          </section>

          {/* STUDENT SUPPORT */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Structured Academic Support for IGCSE Students
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students can have different academic requirements. Some students
              may need help understanding a specific topic, while others may
              want additional practice before an assessment.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Structured coaching can provide a regular environment for
              learning and practice. Students can work through concepts,
              practise questions and review mistakes as part of an organised
              routine.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Parents can discuss the student's current academic level, school
              requirements and target subjects with MindSplash Academy before
              selecting an IGCSE program.
            </p>
          </section>

          {/* WHO CAN CONSIDER */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Who Can Consider IGCSE Coaching?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              IGCSE students who want additional support with subject concepts,
              practice or examination preparation can discuss their
              requirements with MindSplash Academy.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Students may consider additional coaching when they are finding
              particular concepts difficult, want more structured question
              practice or are preparing for examinations.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The appropriate program depends on the student's subjects,
              academic requirements and current preparation stage. Parents
              should confirm current program availability and schedules before
              enrollment.
            </p>
          </section>

          {/* BENEFITS */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              How Structured IGCSE Preparation Can Help
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Depending on the student's requirements, structured IGCSE
              preparation can provide opportunities to:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>Strengthen subject concepts.</li>

              <li>Practise Mathematics problems.</li>

              <li>Develop scientific understanding.</li>

              <li>Improve logical and analytical thinking.</li>

              <li>Practise subject-specific questions.</li>

              <li>Review mistakes systematically.</li>

              <li>Use organised revision techniques.</li>

              <li>Prepare for Cambridge examination-style questions.</li>

              <li>Identify topics that need additional study.</li>

              <li>Build a consistent academic practice routine.</li>
            </ul>
          </section>

          {/* HYDERABAD */}

          <section className="mt-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              IGCSE Coaching in Hyderabad at MindSplash Academy
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Students and parents searching for IGCSE coaching in Hyderabad
              can contact MindSplash Academy to discuss current academic
              support options. The existing MindSplash program information
              includes Mathematics, Physics, Chemistry, Biology and Computer
              Science within its IGCSE and A-level program description.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Before joining a program, parents can discuss the student's
              subjects, academic level, current preparation and examination
              requirements with the academy. This can help determine which
              available support is relevant to the student's needs.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Current batch timings, subjects, fees, availability and
              examination support should be confirmed directly with MindSplash
              Academy.
            </p>
          </section>

          {/* OTHER PROGRAMS */}

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Explore Other MindSplash Programs
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              MindSplash Academy provides multiple academic programs. Explore
              the other program pages to understand the available learning
              pathways.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <ProgramLink
                href="/programs"
                title="View All Programs"
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
            <h2 className="text-3xl font-bold md:text-4xl">
              Frequently Asked Questions About IGCSE Coaching
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
          CTA SECTION
      ========================================================= */}

      <section className="mx-5 mb-16 rounded-[35px] bg-gradient-to-r from-gradient-start to-gradient-end md:mx-7">

        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Looking for IGCSE Coaching in Hyderabad?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
            Contact MindSplash Academy to discuss IGCSE Mathematics, Physics,
            Chemistry, Biology, Computer Science and examination preparation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Book a Free Demo Class
            </Link>

            <Link
              href="/programs"
              className="rounded-xl border border-white/70 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Programs
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT MODAL
      ========================================================= */}

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
          EDUCATIONAL PROGRAM SCHEMA
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

/* =========================================================
   INTERNAL PROGRAM LINK COMPONENT
========================================================= */

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