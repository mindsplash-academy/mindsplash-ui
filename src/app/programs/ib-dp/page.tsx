import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import { ChevronRight, BookOpen, Award, Users, GraduationCap, Layers, FlaskConical } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IB DP Coaching in Hyderabad | MindSplash Academy",
  description:
    "Explore IB DP coaching and academic support in Hyderabad for students preparing for the IB Diploma Programme.",
  keywords: [
    "IB DP coaching Hyderabad",
    "IB DP classes Hyderabad",
    "IB Diploma coaching Hyderabad",
    "IB Diploma Programme Hyderabad",
    "IB DP preparation Hyderabad",
    "IB DP exam preparation Hyderabad",
    "IB DP academic support Hyderabad"
  ],
  openGraph: {
    title: "IB DP Coaching in Hyderabad | MindSplash Academy",
    description: "Explore IB DP coaching and academic support in Hyderabad for students preparing for the IB Diploma Programme.",
    type: "website",
    url: "https://mindsplash.in/programs/ib-dp",
  },
  alternates: { canonical: "https://mindsplash.in/programs/ib-dp" },
};

const SUBJECTS = [
  { name: "Mathematics AA (HL/SL)", description: "Analysis & Approaches — pure mathematics focusing on algebra, calculus, trigonometry and proof. Ideal for Engineering, Physics and Computer Science degrees.", icon: Layers },
  { name: "Mathematics AI (HL/SL)", description: "Applications & Interpretation — applied mathematics with statistics, modelling and technology. Suited for Business, Social Sciences and Biology degrees.", icon: Layers },
  { name: "Physics (HL/SL)", description: "Mechanics, Thermal Physics, Waves, Electricity, Magnetism, Atomic & Nuclear Physics. Internal Assessment (IA) support included.", icon: FlaskConical },
  { name: "Chemistry (HL/SL)", description: "Stoichiometry, Atomic Structure, Bonding, Energetics, Kinetics, Equilibrium, Organic Chemistry. IA guidance and past-paper practice.", icon: FlaskConical },
  { name: "Economics (HL/SL)", description: "Microeconomics, Macroeconomics, International Economics, Development Economics. Essay technique and data-response practice.", icon: GraduationCap },
  { name: "English Lang & Lit (HL/SL)", description: "Textual analysis, comparative essay, Individual Oral (IO) preparation and Paper 1/Paper 2 strategies.", icon: BookOpen },
  { name: "Computer Science (HL/SL)", description: "Programming (Java/Python), Data Structures, Algorithms, Databases, Web Science. IA project mentoring.", icon: Layers },
];

const FAQS = [
  { q: "What IB DP subjects does MindSplash offer?", a: "We offer Maths Analysis & Approaches (AA), Maths Applications & Interpretation (AI), Physics, Chemistry, Economics, English Language & Literature and Computer Science — all at HL and SL levels." },
  { q: "How does Math AA differ from Math AI?", a: "Math AA (Analysis & Approaches) is theory-heavy with a focus on algebra, calculus and proof — best for Engineering, Physics and CS degrees. Math AI (Applications & Interpretation) emphasises statistics, modelling and technology — suited for Business, Social Sciences and Biology. We help students choose the right stream based on their target university and degree." },
  { q: "Do you help with Internal Assessments (IAs)?", a: "Yes. Each subject programme includes IA topic selection guidance, research methodology support, draft reviews and presentation coaching." },
  { q: "What is the schedule for IB DP classes?", a: "Each subject runs 3 hours per week (1 hour per session, 3 days). Students typically take 2–3 subjects with us. Contact us for exact timetables at Khajaguda, Kokapet and Financial District." },
  { q: "How do you prepare students for IB DP exams?", a: "Through past-paper practice (10+ years), timed mocks, mark-scheme analysis, examiner-style feedback, and targeted revision of weak topics. Our proprietary worksheets go beyond standard textbook difficulty." },
];

export default function IBDPPage() {
  return (
    <>
      <section className="mx-7 mt-5 flex flex-col justify-center items-center min-h-[320px] md:min-h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
          <GraduationCap className="w-4 h-4" /> IB Diploma Programme
        </div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4 max-w-4xl">
          IB DP Coaching in Hyderabad
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
          Maths AA & AI, Physics, Chemistry, Economics, English & CS — expert coaching for the world's most rigorous diploma.
        </p>
        <div className="mt-8"><Link href="/contact"><PrimaryButton content="Book a Free Demo" /></Link></div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto my-16 grid sm:grid-cols-4 gap-6">
        {[
          { val: "7", label: "Subjects Offered" },
          { val: "3 hrs", label: "Per Subject / Week" },
          { val: "8–12", label: "Batch Size" },
          { val: "3", label: "Centres in Hyderabad" },
        ].map((s) => (
          <div key={s.label} className="p-6 text-center bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm">
            <p className="text-3xl font-bold text-gradient-start mb-1">{s.val}</p>
            <p className="text-sm text-description">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <figure className="lg:w-[45%] shrink-0">
          <Image src="/dp_kid.jpg" alt="IB DP students at MindSplash Academy Hyderabad" width={541} height={473} className="rounded-[28px] w-full" />
        </figure>
        <div className="lg:w-[55%]">
          <div className="mb-4"><Heading content="Why " /><GradientHeading content="IB DP?" /></div>
          <Description content="The IB Diploma Programme is the most globally recognised pre-university qualification. Top universities — from the Ivy League to Oxbridge — value IB DP for its rigour, breadth and emphasis on independent thinking." />
          <br />
          <Description content="At MindSplash Academy, our IIT-trained faculty deliver subject mastery through past-paper practice, examiner-style feedback, IA mentoring and timed mocks. We cover both Higher Level (HL) and Standard Level (SL) across 7 subjects, helping students choose the right combination for their target university and degree." />
        </div>
      </section>

      <section className="w-full bg-secondary-foreground py-16 mb-16">
        <div className="w-[85%] lg:w-[75%] mx-auto">
          <div className="mb-10 text-center"><Heading content="Subjects " /><GradientHeading content="We Offer" /></div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SUBJECTS.map((subj) => (
              <div key={subj.name} className="p-7 bg-foreground border border-card-border rounded-[28px] shadow-sm">
                <subj.icon className="w-7 h-7 text-gradient-start mb-3" />
                <h3 className="font-bold text-lg text-gradient-start mb-2">{subj.name}</h3>
                <p className="text-description text-sm leading-relaxed">{subj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <div className="mb-8"><Heading content="Available at All " /><GradientHeading content="3 Centres" /></div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Khajaguda", href: "/branches/khajaguda" },
            { name: "Kokapet", href: "/branches/kokapet" },
            { name: "Financial District", href: "/branches/financialdistrict" },
          ].map((c) => (
            <Link key={c.name} href={c.href}>
              <div className="p-6 bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-bold text-lg text-secondary group-hover:text-gradient-start transition-colors">{c.name}</h3>
                <div className="mt-2 flex items-center gap-1 text-xs font-bold text-gradient-start">
                  View Centre <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-[85%] lg:w-[75%] mx-auto mb-20">
        <div className="mb-10"><Heading content="IB DP " /><GradientHeading content="FAQs" /></div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="p-6 bg-secondary-foreground border border-card-border rounded-[20px] shadow-sm group">
              <summary className="cursor-pointer font-bold text-secondary text-base list-none flex justify-between items-center">
                {faq.q}
                <ChevronRight className="w-5 h-5 text-gradient-start group-open:rotate-90 transition-transform shrink-0 ml-3" />
              </summary>
              <p className="mt-4 text-description text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-7 mb-16 flex flex-col items-center justify-center min-h-[280px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-8 py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Ready for the IB Diploma?</h2>
        <p className="text-foreground/90 text-lg mb-8 max-w-xl">Book a free demo and discover how our expert faculty can help you achieve your target score.</p>
        <Link href="/contact"><PrimaryButton content="Book a Free Demo" /></Link>
      </section>

      <ContactUsModal />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Course", name: "IB DP Coaching Programme",
        description: "IB Diploma Programme coaching at MindSplash Academy Hyderabad — Maths AA/AI, Physics, Chemistry, Economics, English & CS.",
        provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" },
        educationalLevel: "Secondary", url: "https://mindsplash.in/programs/ib-dp",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    </>
  );
}
