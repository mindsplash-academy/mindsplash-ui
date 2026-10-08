import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const title = "Teaching Methodology | MindSplash Academy Hyderabad";
const description = "Learn how MindSplash Academy uses baseline assessment, prerequisite support, lesson checkpoints and follow-up assessment to guide student learning.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/methodology" },
  openGraph: { title, description, type: "website", url: "https://mindsplash.in/methodology" },
};

const steps = [
  ["1. Baseline assessment", "Teachers identify what a student already understands and which prerequisite ideas may need attention."],
  ["2. Prerequisite support", "When a gap blocks the next topic, the teacher revisits the relevant prerequisite before progressing."],
  ["3. Lesson with checkpoints", "A typical 60-minute lesson includes five or six checkpoints. Teachers ask questions to check understanding and adjust explanations when needed."],
  ["4. Formative topic assessment", "Short checks during learning help reveal whether the student can use the idea, not only repeat an explanation."],
  ["5. Summative topic assessment", "A topic assessment gives the teacher and student a clearer view of what has been retained and applied."],
  ["6. Targeted follow-up", "If the assessment shows a misunderstanding, the student receives further explanation and practice before moving forward."],
];

export default function MethodologyPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Teaching Methodology" }]} />
    <header className="mx-3 mt-2 flex min-h-[280px] flex-col items-center justify-center rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center text-white sm:mx-5 md:mx-7">
      <h1 className="text-3xl font-bold md:text-5xl">How MindSplash lessons work</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/90">A feedback loop helps teachers notice learning gaps during a lesson and adapt the next explanation or practice task.</p>
    </header>
    <main className="mx-auto my-12 w-[90%] max-w-5xl md:my-16">
      <section aria-labelledby="learning-loop-heading">
        <h2 id="learning-loop-heading" className="mb-6 text-2xl font-bold text-secondary md:text-3xl">The learning loop</h2>
        <ol className="grid gap-5 md:grid-cols-2">
          {steps.map(([heading, body]) => <li key={heading} className="rounded-3xl border border-card-border bg-secondary-foreground p-6"><h3 className="mb-2 text-lg font-bold text-secondary">{heading}</h3><p className="leading-relaxed text-description">{body}</p></li>)}
        </ol>
      </section>
      <section className="mt-12" aria-labelledby="practice-heading">
        <h2 id="practice-heading" className="mb-4 text-2xl font-bold text-secondary md:text-3xl">Practice, review and classroom alignment</h2>
        <p className="leading-relaxed text-description">Teachers use topic-based worksheets and student responses to decide what needs more practice. The academy also describes shared lesson planning and weekly teacher meetings to align lessons with school curricula, plan assessments and discuss additional support.</p>
        <p className="mt-4 leading-relaxed text-description">The steps are a teaching process, not a promised score or outcome. The focus is on checking understanding, responding to the student&apos;s needs and revisiting concepts when the checks show a gap.</p>
      </section>
      <nav aria-label="Related pages" className="mt-10 flex flex-wrap gap-5 text-sm font-semibold text-gradient-start">
        <Link className="hover:underline" href="/about#methodology">See the methodology overview</Link>
        <Link className="hover:underline" href="/authors/rahul-chakravarthy">Meet the Head of Academics</Link>
        <Link className="hover:underline" href="/programs">Explore programmes</Link>
        <Link className="hover:underline" href="/contact">Ask about a free demo</Link>
      </nav>
    </main>
  </>;
}
