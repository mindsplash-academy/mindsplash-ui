import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactUsModal from "@/app/_components/ContactUsModal";
import PrimaryButton from "@/components/PrimaryButton";
import ProgramLocations from "@/app/_components/ProgramLocations";

const SUBJECT_PAGES = {
  mathematics: {
    name: "Mathematics",
    keyword: "IGCSE Mathematics tuition in Hyderabad",
    description: "Build confidence in IGCSE Mathematics with focused support in number, algebra, geometry, functions, statistics and exam-style problem solving in Hyderabad.",
    focus: ["Number, ratio and proportion", "Algebra, equations and functions", "Geometry, mensuration and trigonometry", "Statistics, probability and interpreting data"],
    overview: "IGCSE Mathematics asks students to choose suitable methods, show clear working and interpret what an answer means. Strong preparation starts with reliable number skills and grows into algebraic reasoning, geometry and data handling. The exact topics and assessment route depend on the Cambridge syllabus and option followed by the student, so lessons should be aligned with the course at school.",
    approach: "Tutoring begins by identifying which ideas a student can use independently and where their working breaks down. Lessons then combine short explanations with guided examples and independent questions. Students practise writing each step clearly, checking calculations and choosing an efficient method. When a mistake appears, the teacher helps trace it to a concept, a method choice or a missed instruction so that practice addresses the cause rather than only the final answer.",
    practice: "A useful revision routine mixes familiar questions with problems that require more than one step. Students can keep an error log, redo selected questions after feedback and revisit formulas or methods using concise revision notes. Timed paper practice is most useful after the underlying methods are secure; it helps students manage time and recognise question formats without replacing concept learning.",
    studyPlan: "For each topic, students can first recall key methods without notes, then solve a small set of questions that vary in difficulty. They should mark the work, write down the reason for each error and choose one skill to revisit. A later attempt at a similar problem shows whether the correction has stuck. As exams approach, combine topics in mixed practice so students get used to deciding which method applies, and review timing only after accuracy is steady.",
    faqs: [
      { q: "Which areas can IGCSE Mathematics tuition cover?", a: "Support can cover number, algebra, functions, geometry, trigonometry, statistics and probability. The topics are matched to the student's Cambridge syllabus and current classwork." },
      { q: "How can a student improve written working?", a: "Practise setting out one step at a time, label units where needed, and compare the method with teacher feedback. Clear working makes it easier to check reasoning and find errors." },
      { q: "When should students start past-paper practice?", a: "Use topic questions throughout learning, then add timed past-paper sections as the student becomes confident with the required methods and the school's exam schedule approaches." },
    ],
  },
  physics: {
    name: "Physics",
    keyword: "IGCSE Physics tuition in Hyderabad",
    description: "Get IGCSE Physics support in Hyderabad for core concepts, calculations, diagrams, practical skills and clear explanations of physical processes.",
    focus: ["Forces, motion and energy", "Thermal physics and waves", "Electricity and magnetism", "Atomic physics, practical work and data"],
    overview: "IGCSE Physics connects mathematical relationships with models of how the physical world behaves. Students need to understand the idea behind a formula, select relevant information from a question, use units consistently and explain patterns in words or diagrams. The sequence and depth of topics depend on the Cambridge syllabus being studied, so support should follow the student's school plan rather than assume every course is identical.",
    approach: "Lessons can start with a student's current topic, a recent assessment or a question they found difficult. The teacher makes the model explicit, works through an example and then asks the student to apply the idea in a new situation. For calculations, students practise identifying known quantities, choosing a relationship, substituting values and checking units. For explanation questions, they learn to connect cause and effect instead of memorising disconnected phrases.",
    practice: "Physics revision benefits from alternating conceptual questions, calculations and practical or data-based tasks. Students should explain diagrams aloud, practise reading axes and tables, and review why an incorrect answer seemed plausible. Past-paper questions can reveal familiar command words and mark-scheme expectations, while feedback helps students improve precision and decide which concept to revisit next.",
    studyPlan: "A balanced topic review can begin with a sketch or verbal explanation of the physical model, followed by one worked calculation and a question using unfamiliar values or context. Students then check whether their units, diagram and explanation agree. Keep a short list of relationships that need more practice, but revisit the meaning of each quantity instead of memorising equations alone. Later, mix calculation, explanation and data questions to practise selecting the right approach independently.",
    faqs: [
      { q: "Does IGCSE Physics tuition include calculations and theory?", a: "Support can include conceptual explanations, calculations, diagrams and data interpretation, based on the topics in the student's course." },
      { q: "Can tutoring help with practical skills?", a: "Students can practise interpreting experimental setups, variables, measurements and results. The support should complement the practical work and guidance provided by their school." },
      { q: "How should students revise Physics formulas?", a: "Learn what each quantity represents, practise rearranging and substituting into relationships, and check units. Formula recall is stronger when connected to the physical concept." },
    ],
  },
  chemistry: {
    name: "Chemistry",
    keyword: "IGCSE Chemistry tuition in Hyderabad",
    description: "Strengthen IGCSE Chemistry understanding in Hyderabad with support for atomic structure, bonding, reactions, calculations, practical ideas and exam questions.",
    focus: ["Atoms, elements and chemical bonding", "Formulae, equations and quantitative chemistry", "Reactions, rates and energy changes", "Organic chemistry and experimental evidence"],
    overview: "Chemistry links what students can observe in an experiment with particle-level explanations and symbolic representations such as formulae and equations. Students often need to move between these forms: describe an observation, explain it using a model, and represent a change accurately. The relevant content depends on the Cambridge syllabus and route, so lessons should use the student's current topics and course materials as the reference point.",
    approach: "Teaching can make each representation explicit. A lesson may connect a reaction description to a balanced equation, or connect a measured result to a conclusion about a substance or process. Students practise using chemical language accurately, showing calculation steps and explaining how evidence supports a claim. Teachers can revisit prerequisite ideas when a new topic depends on them, helping students see how concepts connect across the course.",
    practice: "For revision, students can group reactions and definitions by idea, practise writing equations from words, and answer questions that ask them to interpret results or evaluate an experiment. After each task, they should check whether the answer uses the right terms and addresses every part of the prompt. Topic questions and past papers help build familiarity, but should be paired with feedback and targeted review.",
    studyPlan: "Students can organise a topic page around the key idea, the evidence or observations associated with it, and the symbolic form used to describe it. From memory, they can then write an equation, explain a reaction pattern or interpret a result, before checking their work against course notes. Revisit errors by category: an unclear concept, an incorrect formula or equation, a calculation slip, or imprecise language. This makes the next practice set more focused and helps connect separate chemistry topics.",
    faqs: [
      { q: "What can IGCSE Chemistry tuition help with?", a: "It can support understanding of chemical ideas, equations, calculations, practical contexts and exam-style questions from the student's current syllabus." },
      { q: "How can students remember chemical reactions?", a: "Organise reactions by patterns and conditions, practise writing equations, and explain what changes at the particle level. Use the course's required terminology." },
      { q: "Does tutoring replace school laboratory work?", a: "No. Tutoring can help students understand experimental methods and interpret results, while practical work and school requirements remain part of their course." },
    ],
  },
  biology: {
    name: "Biology",
    keyword: "IGCSE Biology tuition in Hyderabad",
    description: "Prepare for IGCSE Biology in Hyderabad with structured support for living systems, diagrams, biological processes, data questions and exam technique.",
    focus: ["Cells and organisation", "Nutrition, transport and gas exchange", "Coordination, inheritance and ecology", "Diagrams, practical contexts and data response"],
    overview: "IGCSE Biology requires students to learn detailed processes and explain how structures, functions and environments relate. Success depends on more than recalling a definition: students also need to interpret diagrams, compare information, use evidence and apply a biological idea to an unfamiliar example. Topic coverage varies with the Cambridge syllabus, so tutoring should be aligned with the student's course and the sequence taught at school.",
    approach: "Lessons can break a process into stages, connect each stage to its purpose and use labelled diagrams to make relationships visible. Students practise turning a diagram or data set into a precise written explanation. Teachers can check understanding with short recall prompts, then move to application questions that ask students to compare, predict or explain. This helps identify whether a gap is about terminology, sequence, evidence or the underlying concept.",
    practice: "Students can build revision notes around processes and comparisons rather than isolated facts. Regular retrieval practice, redraw-and-label tasks and short explanations help make learning easier to review. Data-response questions provide practice in selecting evidence and using it accurately. Feedback should point out missing links in an explanation and guide the next round of practice, with timed papers added as preparation progresses.",
    studyPlan: "A useful Biology review cycle is to recall a process, draw or label its structures, and explain how each part contributes to the outcome. Students can then answer a question using a diagram, table or short passage and underline the evidence they used. Compare the response with feedback, add only the missing links to revision notes, and test recall again later. Before an assessment, mix process, definition and data questions so revision includes both precise knowledge and application.",
    faqs: [
      { q: "What Biology topics can tutoring cover?", a: "Support may include cells, organisation, biological processes, inheritance and ecology, depending on the student's Cambridge syllabus and current classwork." },
      { q: "How can students improve Biology answers?", a: "Use accurate subject vocabulary, answer the command word, and link each point to the question or evidence. Diagrams and process explanations can be practised with feedback." },
      { q: "How should students revise biological processes?", a: "Break each process into ordered stages, connect structure to function, then practise recalling and explaining the sequence without relying only on notes." },
    ],
  },
  "computer-science": {
    name: "Computer Science",
    keyword: "IGCSE Computer Science tuition in Hyderabad",
    description: "Learn IGCSE Computer Science in Hyderabad with guided practice in data representation, systems, algorithms, programming and exam-style reasoning.",
    focus: ["Data representation and communication", "Hardware, software and computer systems", "Algorithms, programming and problem solving", "Databases, logic and structured explanations"],
    overview: "IGCSE Computer Science combines conceptual knowledge about computer systems with the ability to reason through procedures and solve problems. Students may need to explain how a system works, trace an algorithm, represent data or write and interpret program logic. Exact programming language expectations and topic coverage depend on the Cambridge syllabus and school course, so lessons should follow the student's specified materials.",
    approach: "Support can begin with a concept the student finds abstract or a programming task where they are unsure how to proceed. Teachers model how to break a problem into inputs, steps and outputs, then guide students as they trace or construct a solution. Students practise naming variables clearly, following control flow and checking edge cases. For theory, they learn to structure explanations around the question rather than reproduce memorised notes.",
    practice: "Short, regular practice is useful: trace code by hand, explain an algorithm in plain language, then test a solution against sample inputs. Students can keep a record of logic errors and revise the reasoning behind each correction. For written questions, practise definitions and comparisons using precise terms. Past-paper work can help students understand question formats once the underlying concepts are secure.",
    studyPlan: "For a programming task, students can write down the expected inputs and outputs, plan the steps, trace an example and only then write or refine the code. Testing with a normal case and a boundary case helps reveal assumptions. For theory, practise a short explanation from memory and check that it answers the exact question. Keep an error log that separates syntax issues from logic and concept errors. Over time, combine tracing, code construction and written explanations in mixed revision.",
    faqs: [
      { q: "Does IGCSE Computer Science tutoring include programming?", a: "It can include algorithmic thinking and programming practice aligned with the language and requirements used in the student's Cambridge course." },
      { q: "What if a student is new to programming?", a: "Start with tracing simple instructions and understanding inputs, outputs and sequence, then build toward selection, repetition and larger problems as appropriate to the course." },
      { q: "Can tutoring help with theory questions too?", a: "Yes. Students can practise explaining computer systems and data concepts with accurate terminology and answers focused on the wording of each question." },
    ],
  },
} as const;

type SubjectSlug = keyof typeof SUBJECT_PAGES;

function getSubject(slug: string) {
  return Object.prototype.hasOwnProperty.call(SUBJECT_PAGES, slug)
    ? SUBJECT_PAGES[slug as SubjectSlug]
    : undefined;
}

export function generateStaticParams() {
  return Object.keys(SUBJECT_PAGES).map((subject) => ({ subject }));
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return {};
  const url = `/programs/igcse/${slug}`;

  return {
    title: `${subject.keyword} | MindSplash Academy`,
    description: subject.description,
    keywords: [subject.keyword, `${subject.name} IGCSE classes Hyderabad`, `Cambridge ${subject.name} coaching`],
    alternates: { canonical: url },
    openGraph: { title: `${subject.keyword} | MindSplash Academy`, description: subject.description, type: "website", url },
  };
}

export default async function IGCSESubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();
  const url = `/programs/igcse/${slug}`;

  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Programs", href: "/programs" },
        { label: "IGCSE", href: "/programs/igcse" },
        { label: subject.name },
      ]} />
      <section className="mx-3 mt-2 flex min-h-[300px] flex-col items-center justify-center rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center text-white sm:mx-5 md:mx-7 md:mt-3 md:min-h-[360px]">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold"><BookOpen className="h-4 w-4" /> Cambridge IGCSE</div>
        <h1 className="mb-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">IGCSE {subject.name} Tuition in Hyderabad</h1>
        <p className="max-w-2xl text-lg text-white/90 md:text-xl">{subject.description}</p>
        <Link href="/contact?program=IGCSE" className="mt-7"><PrimaryButton content={`Ask about IGCSE ${subject.name}`} /></Link>
      </section>

      <main className="mx-auto my-12 w-[90%] max-w-5xl space-y-12 md:my-16">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">Cambridge IGCSE {subject.name}: concepts and application</h2>
          <p className="text-description leading-relaxed">{subject.overview}</p>
        </section>
        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-card-border bg-secondary-foreground p-7">
            <h2 className="mb-4 text-xl font-bold text-secondary">Learning areas</h2>
            <ul className="list-disc space-y-2 pl-5 text-description">
              {subject.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-description">The topics covered are matched to the Cambridge syllabus and course route followed by each student.</p>
          </div>
          <div className="rounded-3xl border border-card-border bg-secondary-foreground p-7">
            <h2 className="mb-4 text-xl font-bold text-secondary">How subject support works</h2>
            <p className="text-description leading-relaxed">{subject.approach}</p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">Practice, feedback and revision</h2>
          <p className="text-description leading-relaxed">{subject.practice}</p>
        </section>
        <section className="rounded-3xl border border-card-border bg-secondary-foreground p-7">
          <h2 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">A practical study routine for {subject.name}</h2>
          <p className="text-description leading-relaxed">{subject.studyPlan}</p>
        </section>
        <section>
          <h2 className="mb-5 text-2xl font-bold text-secondary md:text-3xl">IGCSE {subject.name} tuition FAQs</h2>
          <div className="space-y-3">
            {subject.faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-card-border bg-secondary-foreground p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-secondary">{faq.q}<ChevronRight className="h-5 w-5 shrink-0 text-gradient-start transition-transform group-open:rotate-90" /></summary>
                <p className="mt-3 leading-relaxed text-description">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-secondary-foreground p-6">
          <Link href="/programs/igcse" className="inline-flex items-center gap-2 font-semibold text-gradient-start hover:underline"><ChevronRight className="h-4 w-4 rotate-180" /> All IGCSE subjects</Link>
          <Link href="/contact?program=IGCSE"><PrimaryButton content="Request a free demo" /></Link>
        </div>
      </main>
      <ProgramLocations programme={`IGCSE ${subject.name} tuition`} />
      <ContactUsModal program="IGCSE" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: `IGCSE ${subject.name} tuition`,
        description: subject.description,
        provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" },
        url: `https://mindsplash.in${url}`,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: subject.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
      }) }} />
    </>
  );
}
