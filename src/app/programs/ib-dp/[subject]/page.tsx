import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrimaryButton from "@/components/PrimaryButton";
import ProgramLocations from "@/app/_components/ProgramLocations";

const SUBJECTS = {
  "mathematics-analysis-approaches": {
    name: "Mathematics: Analysis and Approaches", short: "Math AA",
    description: "IB DP Mathematics: Analysis and Approaches support for algebra, functions, calculus, trigonometry and mathematical reasoning, matched to the student’s HL or SL course.",
    focus: ["Algebra and functions", "Calculus and trigonometry", "Mathematical reasoning and problem solving", "Course-specific practice and feedback"],
  },
  "mathematics-applications-interpretation": {
    name: "Mathematics: Applications and Interpretation", short: "Math AI",
    description: "IB DP Mathematics: Applications and Interpretation support for modelling, statistics, data interpretation and mathematical problem solving, matched to the student’s HL or SL course.",
    focus: ["Mathematical modelling", "Statistics and probability", "Interpreting data and results", "Course-specific practice and feedback"],
  },
  physics: {
    name: "Physics", short: "Physics",
    description: "IB DP Physics support for understanding physical models, applying relationships, solving calculations and explaining evidence in the student’s HL or SL course.",
    focus: ["Physical models and concepts", "Equations, units and calculations", "Data interpretation and explanations", "Course-specific practice and feedback"],
  },
  chemistry: {
    name: "Chemistry", short: "Chemistry",
    description: "IB DP Chemistry support for chemical concepts, representations, calculations and explaining patterns in the student’s HL or SL course.",
    focus: ["Atomic structure and bonding", "Chemical reactions and quantitative work", "Energetics, kinetics and equilibrium", "Course-specific practice and feedback"],
  },
  economics: {
    name: "Economics", short: "Economics",
    description: "IB DP Economics support for economic models, interpreting data, constructing explanations and applying concepts to the student’s HL or SL course.",
    focus: ["Economic concepts and models", "Using diagrams and data", "Building structured explanations", "Course-specific practice and feedback"],
  },
  "english-language-and-literature": {
    name: "English Language and Literature", short: "English Language and Literature",
    description: "IB DP English Language and Literature support for close reading, analysis, written responses and course assessment tasks at the student’s HL or SL level.",
    focus: ["Close reading and textual analysis", "Evidence-based interpretation", "Comparative and analytical writing", "Course-specific practice and feedback"],
  },
  "computer-science": {
    name: "Computer Science", short: "Computer Science",
    description: "IB DP Computer Science support for computational thinking, programming concepts, systems and structured explanations in the student’s HL or SL course.",
    focus: ["Computational thinking and algorithms", "Programming and problem solving", "Computer systems and data", "Course-specific practice and feedback"],
  },
} as const;

type SubjectSlug = keyof typeof SUBJECTS;
function getSubject(slug: string) { return Object.prototype.hasOwnProperty.call(SUBJECTS, slug) ? SUBJECTS[slug as SubjectSlug] : undefined; }
export function generateStaticParams() { return Object.keys(SUBJECTS).map((subject) => ({ subject })); }

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return {};
  const title = `IB DP ${subject.short} Tuition in Hyderabad | MindSplash Academy`;
  const url = `/programs/ib-dp/${slug}`;
  return { title, description: subject.description, alternates: { canonical: url }, openGraph: { title, description: subject.description, type: "website", url } };
}

export default async function IBDPSubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();
  const title = `IB DP ${subject.short} Tuition in Hyderabad | MindSplash Academy`;
  const faqs = [
    { q: `What does IB DP ${subject.short} tuition cover?`, a: `Lessons focus on concepts and skills from the student's current IB DP ${subject.name} course. The teacher can align practice with school topics and the student's HL or SL level.` },
    { q: "Can support be matched to Higher Level or Standard Level?", a: "MindSplash lists IB DP subject coaching at HL and SL. Contact the academy to confirm current availability for this subject, level and centre." },
    { q: "How do I ask about the current schedule?", a: "Schedules vary. Share the student's level, school topics and preferred centre through the contact form to ask about availability." },
  ];
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }, { label: "IB DP", href: "/programs/ib-dp" }, { label: subject.name }]} />
    <header className="mx-3 mt-2 flex min-h-[300px] flex-col items-center justify-center rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center text-white sm:mx-5 md:mx-7">
      <p className="mb-3 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">IB Diploma Programme · HL and SL</p>
      <h1 className="max-w-4xl text-3xl font-bold md:text-5xl">IB DP {subject.short} Tuition in Hyderabad</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/90">{subject.description}</p>
      <Link href="/contact?program=IB_DP" className="mt-7"><PrimaryButton content={`Ask about IB DP ${subject.short}`} /></Link>
    </header>
    <main className="mx-auto my-12 w-[90%] max-w-5xl space-y-10 md:my-16">
      <section><h2 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">Learning areas</h2><p className="leading-relaxed text-description">The exact content depends on the student’s IB course and current school sequence. MindSplash lists this subject for HL and SL coaching; confirm availability and topic coverage with the academy.</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{subject.focus.map((item) => <li key={item} className="rounded-2xl bg-secondary-foreground p-5 text-description">{item}</li>)}</ul></section>
      <section className="rounded-3xl border border-card-border bg-secondary-foreground p-7"><h2 className="mb-3 text-2xl font-bold text-secondary">How subject support works</h2><p className="leading-relaxed text-description">Teachers use explanations, guided examples and student practice to check understanding. When a student’s work shows a gap, the teacher can revisit the underlying concept and select follow-up questions. This approach supports learning; it does not promise a particular score or result.</p></section>
      <section><h2 className="mb-5 text-2xl font-bold text-secondary">IB DP {subject.short} tuition FAQs</h2><div className="space-y-3">{faqs.map((faq) => <details key={faq.q} className="rounded-2xl border border-card-border bg-secondary-foreground p-5"><summary className="cursor-pointer font-semibold text-secondary">{faq.q}</summary><p className="mt-3 leading-relaxed text-description">{faq.a}</p></details>)}</div></section>
      <nav className="flex flex-wrap gap-5 text-sm font-semibold text-gradient-start" aria-label="Related programme links"><Link href="/programs/ib-dp" className="hover:underline">All IB DP subjects</Link><Link href="/methodology" className="hover:underline">Teaching methodology</Link></nav>
    </main>
    <ProgramLocations programme={`IB DP ${subject.short}`} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Course", name: `IB DP ${subject.name} coaching`, description: subject.description, provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" }, url: `https://mindsplash.in/programs/ib-dp/${slug}` }) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
  </>;
}
