import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import { ChevronRight, GraduationCap, BarChart3, Clock, Calculator, BookOpen, PenTool } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgramLocations from "@/app/_components/ProgramLocations";

export const metadata: Metadata = {
  title: "SAT & PSAT Preparation in Hyderabad | MindSplash Academy",
  description:
    "Prepare for the Digital SAT and PSAT/NMSQT with adaptive practice, timed mock tests, score analysis, and focused coaching in Hyderabad.",
  keywords: [
    "SAT preparation Hyderabad",
    "PSAT coaching Hyderabad",
    "Digital SAT classes Hyderabad",
    "exam preparation Hyderabad",
    "SAT math and reading preparation",
    "PSAT NMSQT preparation"
  ],
  openGraph: {
    title: "SAT & PSAT Preparation in Hyderabad | MindSplash Academy",
    description: "Prepare for the Digital SAT and PSAT/NMSQT with adaptive practice, timed mock tests, and score analysis in Hyderabad.",
    type: "website", url: "https://mindsplash.in/programs/exam-prep",
  },
  alternates: { canonical: "/programs/exam-prep" },
};

const MODULES = [
  { icon: Calculator, name: "SAT Math", desc: "Algebra, Advanced Math, Problem-Solving & Data Analysis, Geometry & Trigonometry. Adaptive module strategies for Section 1 and harder Section 2." },
  { icon: BookOpen, name: "Evidence-Based Reading & Writing", desc: "Reading comprehension, Command of Evidence, Words in Context, Standard English Conventions, Expression of Ideas." },
  { icon: BarChart3, name: "Score Analysis", desc: "After every practice test, personalised score reports identify weak areas by question type and difficulty â€” so study time is maximally efficient." },
  { icon: Clock, name: "Timed Full-Length Mocks", desc: "Regular full-length Digital SAT simulations under real exam conditions â€” including adaptive difficulty progression between modules." },
  { icon: PenTool, name: "PSAT/NMSQT Preparation", desc: "Targeted coaching for the PSAT â€” gateway to the National Merit Scholarship Programme. Same core skills, shorter format." },
  { icon: GraduationCap, name: "College Application Support", desc: "Score-target planning based on dream university requirements. We help students set realistic milestones and track progress." },
];

const FAQS = [
  { q: "What is the Digital SAT?", a: "The Digital SAT is a computer-based, adaptive test with Reading and Writing and Math sections. Students preparing for it should practise both question types and the digital format using current official materials." },
  { q: "How is the Digital SAT adaptive?", a: "Each section has two modules. Your performance on Module 1 determines the difficulty of Module 2. Harder Module 2 questions have a higher scoring ceiling, so strong Module 1 performance is critical. Our training focuses on maximising Module 1 accuracy." },
  { q: "How should I set a target score?", a: "Score goals depend on the universities and programmes a student plans to apply to. Check current admissions requirements for those institutions, then use practice-test results to set a goal with a teacher or advisor." },
  { q: "How long is the SAT preparation programme?", a: "Typically 3â€“6 months of structured preparation. Students attend 3â€“4 hours per week of classes plus take a full-length mock every 2 weeks. Intensive crash courses are also available before specific test dates." },
  { q: "Do you also prepare for the PSAT?", a: "Yes. PSAT/NMSQT shares the same question types and format as the SAT but is shorter. We offer combined SAT + PSAT preparation, and the PSAT is an excellent starting point for grade 10â€“11 students." },
  { q: "Do you help with school exams too?", a: "Yes. Beyond SAT/PSAT, we support students with school exam preparation across IB, IGCSE and national board curricula â€” including midterms, finals and internal assessments." },
];

export default function SATPSATPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }, { label: "Exam Preparation" }]} />
      <section className="mx-3 mt-2 sm:mx-5 md:mx-7 md:mt-3 flex flex-col justify-center items-center min-h-[320px] md:min-h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
          <GraduationCap className="w-4 h-4" /> Test Preparation
        </div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4 max-w-4xl">
          SAT & PSAT Coaching in Hyderabad
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
          Prepare with adaptive Math strategies, evidence-based Reading and Writing practice, and timed mock tests.
        </p>
        <div className="mt-8"><Link href="/contact?program=ExamPrep"><PrimaryButton content="Book a Free Demo" /></Link></div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto my-16 grid sm:grid-cols-4 gap-6">
        {[
          { val: "Personalised", label: "Score planning" },
          { val: "3â€“4 hrs", label: "Per Week" },
          { val: "8â€“12", label: "Batch Size" },
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
          <Image src="/exam_kid.jpg" alt="Student preparing for a standardised test" width={541} height={473} className="rounded-[28px] w-full" />
        </figure>
        <div className="lg:w-[55%]">
          <h2 className="mb-4"><Heading content="Master the " /><GradientHeading content="Digital SAT" /></h2>
          <Description content="The Digital SAT's adaptive format means that strategy matters as much as knowledge. Module 1 accuracy determines whether you face harder (higher-ceiling) or easier (lower-ceiling) questions in Module 2. Our programme trains students to maximise Module 1 performance through targeted practice." />
          <br />
          <Description content="Alongside test-taking strategy, the programme develops Math fluency and reading comprehension through targeted practice. Practice-test reviews help students identify question types to revisit and plan their next study steps. Progress varies by student and depends on their starting point, preparation time, and practice." />
        </div>
      </section>

      <section className="w-full bg-secondary-foreground py-16 mb-16">
        <div className="w-[85%] lg:w-[75%] mx-auto">
          <h2 className="mb-10 text-center"><Heading content="Programme " /><GradientHeading content="Modules" /></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <div key={mod.name} className="p-6 bg-foreground border border-card-border rounded-[28px] shadow-sm">
                <mod.icon className="w-7 h-7 text-gradient-start mb-3" />
                <h3 className="font-bold text-lg text-gradient-start mb-2">{mod.name}</h3>
                <p className="text-description text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramLocations programme="SAT, PSAT and exam preparation" />

      <section className="w-[85%] lg:w-[75%] mx-auto mb-20">
        <h2 className="mb-10"><Heading content="SAT & PSAT " /><GradientHeading content="FAQs" /></h2>
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
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Plan Your Digital SAT Preparation</h2>
        <p className="text-foreground/90 text-lg mb-8 max-w-xl">Book a free diagnostic test and get a personalised study plan.</p>
        <Link href="/contact?program=ExamPrep"><PrimaryButton content="Book a Free Demo" /></Link>
      </section>

      <ContactUsModal />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Course", name: "SAT & PSAT Coaching Programme",
        description: "Digital SAT and PSAT preparation at MindSplash Academy Hyderabad.",
        provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" },
        educationalLevel: "Secondary", url: "https://mindsplash.in/programs/exam-prep",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    </>
  );
}
