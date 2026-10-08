import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrimaryButton from "@/components/PrimaryButton";
import ProgramLocations from "@/app/_components/ProgramLocations";

const SUBJECTS = {
  mathematics: {
    name: "Mathematics",
    description: "IB MYP Mathematics tuition in Hyderabad for concept understanding, mathematical reasoning and preparation for criteria-based tasks and eAssessment-style questions.",
    focus: ["Number, algebra and functions", "Geometry and trigonometry", "Statistics and probability", "Explaining reasoning and applying mathematics in context"],
  },
  physics: {
    name: "Physics",
    description: "IB MYP Physics tuition in Hyderabad for scientific concepts, calculations, data interpretation and criteria-based assessment practice.",
    focus: ["Mechanics and energy", "Waves, electricity and thermal physics", "Experimental design and data analysis", "Explaining scientific reasoning with evidence"],
  },
  chemistry: {
    name: "Chemistry",
    description: "IB MYP Chemistry tuition in Hyderabad for chemical concepts, representations, calculations and criteria-based assessment practice.",
    focus: ["Atomic structure and bonding", "Chemical formulae and reactions", "Quantitative and energy concepts", "Interpreting evidence and explaining conclusions"],
  },
  biology: {
    name: "Biology",
    description: "IB MYP Biology tuition in Hyderabad for biological concepts, scientific investigation, data interpretation and criteria-based assessment practice.",
    focus: ["Cells and life processes", "Genetics and ecology", "Human physiology", "Scientific investigation and evidence-based explanations"],
  },
} as const;

type SubjectSlug = keyof typeof SUBJECTS;
function getSubject(slug: string) { return Object.prototype.hasOwnProperty.call(SUBJECTS, slug) ? SUBJECTS[slug as SubjectSlug] : undefined; }
export function generateStaticParams() { return Object.keys(SUBJECTS).map((subject) => ({ subject })); }

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return {};
  const title = `${subject.name} Tuition for IB MYP in Hyderabad | MindSplash Academy`;
  const url = `/programs/ib-myp/${slug}`;
  return { title, description: subject.description, alternates: { canonical: url }, openGraph: { title, description: subject.description, type: "website", url } };
}

export default async function IBMYPSubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();
  const title = `${subject.name} Tuition for IB MYP in Hyderabad | MindSplash Academy`;
  const faqs = [
    { q: `What does IB MYP ${subject.name} tuition cover?`, a: `Support follows the student's current school topics and the relevant IB MYP subject objectives. Lessons can include concept review, practice questions and feedback on how to explain or apply ideas.` },
    { q: "Does the course include eAssessment practice?", a: "MindSplash lists computer-based assessment-style practice and criteria-based worksheets. Ask the academy about current materials and the preparation plan for the student's school and assessment schedule." },
    { q: "Which MYP years can ask about this subject?", a: "MindSplash currently lists IB MYP coaching for Years 4 and 5. Contact the academy to confirm current class availability and suitability for the student's course." },
  ];
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }, { label: "IB MYP", href: "/programs/ib-myp" }, { label: subject.name }]} />
    <header className="mx-3 mt-2 flex min-h-[300px] flex-col items-center justify-center rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center text-white sm:mx-5 md:mx-7">
      <p className="mb-3 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">IB Middle Years Programme</p>
      <h1 className="max-w-4xl text-3xl font-bold md:text-5xl">IB MYP {subject.name} Tuition in Hyderabad</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/90">{subject.description}</p>
      <Link href="/contact?program=IB_MYP" className="mt-7"><PrimaryButton content={`Ask about IB MYP ${subject.name}`} /></Link>
    </header>
    <main className="mx-auto my-12 w-[90%] max-w-5xl space-y-10 md:my-16">
      <section><h2 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">IB MYP {subject.name}: topics and skills</h2><p className="leading-relaxed text-description">The exact learning sequence depends on the student’s school course. MindSplash describes its MYP support as criteria-based, with worksheets and teacher feedback to help students practise understanding, application and clear explanations.</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{subject.focus.map((item) => <li key={item} className="rounded-2xl bg-secondary-foreground p-5 text-description">{item}</li>)}</ul></section>
      <section className="rounded-3xl border border-card-border bg-secondary-foreground p-7"><h2 className="mb-3 text-2xl font-bold text-secondary">Practice and feedback</h2><p className="leading-relaxed text-description">Students work through topic questions and receive feedback on the ideas or reasoning that need more attention. Teachers can revisit prerequisites, clarify a concept and use another task to check understanding. eAssessment-style practice should be aligned with the student’s school guidance and current assessment arrangements.</p></section>
      <section><h2 className="mb-5 text-2xl font-bold text-secondary">IB MYP {subject.name} FAQs</h2><div className="space-y-3">{faqs.map((faq) => <details key={faq.q} className="rounded-2xl border border-card-border bg-secondary-foreground p-5"><summary className="cursor-pointer font-semibold text-secondary">{faq.q}</summary><p className="mt-3 leading-relaxed text-description">{faq.a}</p></details>)}</div></section>
      <nav className="flex flex-wrap gap-5 text-sm font-semibold text-gradient-start" aria-label="Related programme links"><Link href="/programs/ib-myp" className="hover:underline">All IB MYP subject coaching</Link><Link href="/blog/ib-myp-eassessment-guide-hyderabad" className="hover:underline">{slug === "mathematics" ? "IB MYP Mathematics eAssessment preparation guide" : "IB MYP eAssessment preparation guide"}</Link></nav>
    </main>
    <ProgramLocations programme={`IB MYP ${subject.name}`} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Course", name: `IB MYP ${subject.name} coaching`, description: subject.description, provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" }, url: `https://mindsplash.in/programs/ib-myp/${slug}` }) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
  </>;
}
