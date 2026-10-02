import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import { ChevronRight, Trophy, Users, Target, Flame, Medal, Swords } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Olympiad Preparation in Hyderabad | MindSplash Academy",
  description:
    "Explore Olympiad preparation in Hyderabad with focused academic learning, problem-solving practice and subject preparation.",
  keywords: [
    "Olympiad preparation Hyderabad",
    "Olympiad coaching Hyderabad",
    "Olympiad classes Hyderabad",
    "Olympiad coaching institute Hyderabad",
    "Math Olympiad preparation Hyderabad",
    "Science Olympiad preparation Hyderabad",
    "Olympiad problem solving Hyderabad"
  ],
  openGraph: {
    title: "Olympiad Preparation in Hyderabad | MindSplash Academy",
    description: "Explore Olympiad preparation in Hyderabad with focused academic learning, problem-solving practice and subject preparation.",
    type: "website", url: "https://mindsplash.in/programs/olympiads",
  },
  alternates: { canonical: "https://mindsplash.in/programs/olympiads" },
};

const COMPETITIONS = [
  { name: "IOQM", full: "Indian Olympiad Qualifier in Mathematics", desc: "The first stage of India's national selection for the International Mathematical Olympiad (IMO). Combines PRMO and RMO into a single qualifying exam." },
  { name: "AMC 8", full: "American Mathematics Competition 8", desc: "25-question, 40-minute multiple-choice exam for students in grade 8 and below. Builds foundational problem-solving skills." },
  { name: "AMC 10 / AMC 12", full: "American Mathematics Competitions 10 & 12", desc: "Gateway to the AIME (American Invitational Mathematics Examination). Top scores significantly boost Ivy League university applications." },
  { name: "Science Olympiads", full: "National & International Science Competitions", desc: "Physics, Chemistry and Biology Olympiad preparation including NSEP, NSEC, NSEB and international qualifiers." },
];

const METHODOLOGY = [
  { icon: Target, title: "Problem-Solving Framework", desc: "Structured approach to breaking down competition problems: Identify → Model → Solve → Verify. Beyond rote tricks." },
  { icon: Flame, title: "Difficulty Progression", desc: "Worksheets graded from standard to fiendishly hard. Students build confidence at each level before advancing." },
  { icon: Medal, title: "Mock Competitions", desc: "Regular timed mock tests replicating real Olympiad conditions — question count, time limits, scoring rules." },
  { icon: Swords, title: "Expert Mentorship", desc: "Led by Rahul Chakravarthy — National Math Olympiad Awardee, IIT Madras graduate, Olympiad book author, and Govt. of India trainer." },
];

const FAQS = [
  { q: "Which grades does MindSplash train for Olympiads?", a: "We train students in grades 6 through 10 for various national and international maths and science competitions." },
  { q: "Who leads the Olympiad programme?", a: "Rahul Chakravarthy, our Head of Academics — a National Math Olympiad Awardee, IIT Madras graduate, published Olympiad book author, and official Govt. of India trainer for students of Telangana and Andhra Pradesh preparing for INMO." },
  { q: "How does Olympiad training help with university admissions?", a: "Olympiad ranks and awards are among the strongest signals on a university application. AMC scores are specifically considered by US universities, while IOQM/INMO recognition carries weight globally. Our students consistently achieve national-level ranks." },
  { q: "What is the schedule for Olympiad classes?", a: "Olympiad classes typically run 2–3 hours per week with additional intensive sessions before major competitions. Contact us for current schedules across our three centres." },
  { q: "Can a student do Olympiad training alongside IB MYP or IGCSE?", a: "Absolutely. Many of our students combine Olympiad training with their IB MYP or IGCSE programme. The problem-solving skills transfer directly to improved exam performance." },
];

export default function OlympiadsPage() {
  return (
    <>
      <section className="mx-7 mt-5 flex flex-col justify-center items-center min-h-[320px] md:min-h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
          <Trophy className="w-4 h-4" /> Olympiad Training
        </div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4 max-w-4xl">
          Olympiad Coaching in Hyderabad
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
          IOQM, AMC 8/10/12 & science Olympiad training for grades 6–10 — led by a National Math Olympiad awardee from IIT Madras.
        </p>
        <div className="mt-8"><Link href="/contact"><PrimaryButton content="Book a Free Demo" /></Link></div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto my-16 grid sm:grid-cols-4 gap-6">
        {[
          { val: "4+", label: "Competitions Covered" },
          { val: "Gr 6–10", label: "Eligible Grades" },
          { val: "8–12", label: "Batch Size" },
          { val: "National", label: "Level Ranks Achieved" },
        ].map((s) => (
          <div key={s.label} className="p-6 text-center bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm">
            <p className="text-3xl font-bold text-gradient-start mb-1">{s.val}</p>
            <p className="text-sm text-description">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <figure className="lg:w-[45%] shrink-0">
          <Image src="/olympiad_kid.jpg" alt="Olympiad students at MindSplash Academy Hyderabad preparing for IOQM and AMC" width={541} height={473} className="rounded-[28px] w-full" />
        </figure>
        <div className="lg:w-[55%]">
          <div className="mb-4"><Heading content="Why " /><GradientHeading content="Olympiads?" /></div>
          <Description content="Olympiad competitions go far beyond school-level maths and science. They develop deep analytical thinking, creative problem-solving and mathematical elegance — skills that set students apart in university admissions, competitive exams and professional careers." />
          <br />
          <Description content="MindSplash Academy is a pioneer and leader in Olympiad coaching in Hyderabad. Our students consistently achieve national-level ranks in IOQM, AMC and science Olympiads. Recognition at these competitions adds significant weight to university applications — especially for Ivy League, MIT, Stanford and IIT admissions." />
        </div>
      </section>

      <section className="w-full bg-secondary-foreground py-16 mb-16">
        <div className="w-[85%] lg:w-[75%] mx-auto">
          <div className="mb-10 text-center"><Heading content="Competitions " /><GradientHeading content="We Train For" /></div>
          <div className="grid sm:grid-cols-2 gap-6">
            {COMPETITIONS.map((comp) => (
              <div key={comp.name} className="p-7 bg-foreground border border-card-border rounded-[28px] shadow-sm">
                <h3 className="font-bold text-xl text-gradient-start mb-1">{comp.name}</h3>
                <p className="text-xs text-description mb-3 font-medium">{comp.full}</p>
                <p className="text-description text-sm leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <div className="mb-10 text-center"><Heading content="Training " /><GradientHeading content="Methodology" /></div>
        <div className="grid sm:grid-cols-2 gap-6">
          {METHODOLOGY.map((m) => (
            <div key={m.title} className="p-6 bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm">
              <m.icon className="w-8 h-8 text-gradient-start mb-3" />
              <h3 className="font-bold text-lg text-secondary mb-2">{m.title}</h3>
              <p className="text-description text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-20">
        <div className="mb-10"><Heading content="Olympiad " /><GradientHeading content="FAQs" /></div>
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
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Train with the best. Compete with the best.</h2>
        <p className="text-foreground/90 text-lg mb-8 max-w-xl">Start your Olympiad journey with a National Math Olympiad Awardee.</p>
        <Link href="/contact"><PrimaryButton content="Book a Free Demo" /></Link>
      </section>

      <ContactUsModal />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Course", name: "Olympiad Coaching Programme",
        description: "IOQM, AMC 8/10/12, Maths & Science Olympiad training at MindSplash Academy Hyderabad.",
        provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" },
        educationalLevel: "Secondary", url: "https://mindsplash.in/programs/olympiads",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    </>
  );
}
