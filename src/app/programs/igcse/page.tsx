import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import { ChevronRight, BookOpen, Award, Users, Brain, FileText, Map } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IGCSE Coaching in Hyderabad | MindSplash Academy",
  description:
    "Explore IGCSE coaching in Hyderabad with subject-focused academic support, concept learning, practice and exam preparation.",
  keywords: [
    "IGCSE coaching Hyderabad",
    "IGCSE classes Hyderabad",
    "IGCSE coaching institute Hyderabad",
    "IGCSE preparation Hyderabad",
    "IGCSE Maths coaching Hyderabad",
    "IGCSE Physics coaching Hyderabad",
    "IGCSE Chemistry coaching Hyderabad",
    "IGCSE Biology coaching Hyderabad",
    "IGCSE Computer Science coaching Hyderabad",
    "IGCSE exam preparation Hyderabad",
  ],
  openGraph: {
    title: "IGCSE Coaching in Hyderabad | MindSplash Academy",
    description: "Explore IGCSE coaching in Hyderabad with subject-focused academic support, concept learning, practice and exam preparation.",
    type: "website", url: "https://mindsplash.in/programs/igcse",
  },
  alternates: { canonical: "https://mindsplash.in/programs/igcse" },
};

const SUBJECTS = [
  { name: "Mathematics", description: "Number, Algebra, Functions, Geometry, Trigonometry, Statistics & Probability. Extended and Core syllabi covered." },
  { name: "Physics", description: "General Physics, Thermal Physics, Waves, Electricity & Magnetism, Atomic Physics. Practical skills and past-paper technique." },
  { name: "Chemistry", description: "Experimental Chemistry, Atomic Structure, Bonding, Stoichiometry, Electrochemistry, Organic Chemistry. Lab-skill preparation." },
  { name: "Biology", description: "Cell Biology, Organisation, Infection, Bioenergetics, Homeostasis, Inheritance, Ecology. Diagram and data-response technique." },
  { name: "Computer Science", description: "Data Representation, Communication, Hardware, Software, Programming (Python/Pseudocode), Databases, Boolean Logic." },
];

const DIFFERENTIATORS = [
  { icon: Map, title: "Proprietary Memory Maps", desc: "Single-page visual topic-revision sheets that condense vast Cambridge syllabi into scannable, exam-ready reference material." },
  { icon: FileText, title: "Past-Paper Mastery", desc: "10+ years of Cambridge past papers practised, with examiner-style marking and targeted feedback." },
  { icon: Brain, title: "Dynamic Feedback", desc: "Lessons divided into 5–6 checkpoints. Teachers assess understanding at each checkpoint before moving forward." },
  { icon: Users, title: "Small Batches (8–12)", desc: "Limited class sizes so teachers can track every student's progress across all assessment objectives." },
];

const FAQS = [
  { q: "What is the difference between IGCSE O-Level and A-Level?", a: "IGCSE O-Level (Cambridge International) is typically taken in Years 10–11 (ages 14–16). A-Level (Advanced Level) follows in Years 12–13 and is the university entrance qualification. MindSplash covers both O-Level and A-Level across all five subjects." },
  { q: "What are Memory Maps?", a: "Memory Maps are our proprietary single-page visual revision sheets. Each map summarises an entire topic — formulae, diagrams, key definitions and worked examples — so students can revise large amounts of content quickly before exams." },
  { q: "How many hours per week is the IGCSE programme?", a: "Typically 3 hours per subject per week. Students take 2–4 subjects with us depending on their needs. Contact us for exact schedules at Khajaguda, Kokapet and Financial District." },
  { q: "Do you cover the Cambridge practical component?", a: "Yes. Our Science programmes include practical-skills training covering experimental design, data collection, analysis and evaluation — all mapped to Cambridge assessment criteria." },
  { q: "What results have IGCSE students achieved?", a: "Multiple students have secured A* grades across Maths, Physics and Chemistry. Our memory-map approach and intensive past-paper practice are key drivers of these results." },
];

export default function IGCSEPage() {
  return (
    <>
      <section className="mx-7 mt-5 flex flex-col justify-center items-center min-h-[320px] md:min-h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
          <BookOpen className="w-4 h-4" /> Cambridge IGCSE
        </div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4 max-w-4xl">
          IGCSE Coaching in Hyderabad
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
          Cambridge O-Level & A-Level coaching in Maths, Physics, Chemistry, Biology & CS — with proprietary memory maps for rapid revision.
        </p>
        <div className="mt-8"><Link href="/contact"><PrimaryButton content="Book a Free Demo" /></Link></div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto my-16 grid sm:grid-cols-4 gap-6">
        {[
          { val: "5", label: "Subjects Offered" },
          { val: "A*", label: "Top Student Grades" },
          { val: "8–12", label: "Batch Size" },
          { val: "3", label: "Centres" },
        ].map((s) => (
          <div key={s.label} className="p-6 text-center bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm">
            <p className="text-3xl font-bold text-gradient-start mb-1">{s.val}</p>
            <p className="text-sm text-description">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <figure className="lg:w-[45%] shrink-0">
          <Image src="/igcse_kid.jpg" alt="IGCSE students at MindSplash Academy Hyderabad" width={541} height={473} className="rounded-[28px] w-full" />
        </figure>
        <div className="lg:w-[55%]">
          <div className="mb-4"><Heading content="Why Choose MindSplash for " /><GradientHeading content="IGCSE?" /></div>
          <Description content="The Cambridge IGCSE and A-Level syllabi are vast. Students often struggle with revision simply because there is so much content to cover. That's why we created Memory Maps — proprietary single-page visual summaries for every topic that let students revise an entire chapter at a glance." />
          <br />
          <Description content="Combined with 10+ years of past-paper practice, examiner-style marking and our dynamic-feedback teaching methodology, our students consistently achieve A* grades across Maths, Physics, Chemistry, Biology and Computer Science." />
        </div>
      </section>

      <section className="w-full bg-secondary-foreground py-16 mb-16">
        <div className="w-[85%] lg:w-[75%] mx-auto">
          <div className="mb-10 text-center"><Heading content="Subjects " /><GradientHeading content="We Cover" /></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS.map((subj) => (
              <div key={subj.name} className="p-7 bg-foreground border border-card-border rounded-[28px] shadow-sm">
                <h3 className="font-bold text-lg text-gradient-start mb-2">{subj.name}</h3>
                <p className="text-description text-sm leading-relaxed">{subj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <div className="mb-10 text-center"><Heading content="What Makes Us " /><GradientHeading content="Different" /></div>
        <div className="grid sm:grid-cols-2 gap-6">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="p-6 bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm">
              <d.icon className="w-8 h-8 text-gradient-start mb-3" />
              <h3 className="font-bold text-lg text-secondary mb-2">{d.title}</h3>
              <p className="text-description text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-20">
        <div className="mb-10"><Heading content="IGCSE " /><GradientHeading content="FAQs" /></div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="p-6 bg-secondary-foreground border border-card-border rounded-[20px] shadow-sm group">
              <summary className="cursor-pointer font-bold text-secondary text-base list-none flex justify-between items-center">
                {faq.q}<ChevronRight className="w-5 h-5 text-gradient-start group-open:rotate-90 transition-transform shrink-0 ml-3" />
              </summary>
              <p className="mt-4 text-description text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-7 mb-16 flex flex-col items-center justify-center min-h-[280px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-8 py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Ace your Cambridge exams</h2>
        <p className="text-foreground/90 text-lg mb-8 max-w-xl">Book a free demo and see how Memory Maps can transform your revision.</p>
        <Link href="/contact"><PrimaryButton content="Book a Free Demo" /></Link>
      </section>

      <ContactUsModal />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Course", name: "IGCSE Coaching Programme",
        description: "Cambridge IGCSE O-Level & A-Level coaching at MindSplash Academy Hyderabad.",
        provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" },
        educationalLevel: "Secondary", url: "https://mindsplash.in/programs/igcse",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    </>
  );
}
