import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import { ChevronRight, BookOpen, Award, Users, Clock, Target, CheckCircle } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IB MYP Coaching in Hyderabad | MindSplash Academy",
  description:
    "Explore IB MYP coaching and academic support in Hyderabad for students following the International Baccalaureate Middle Years Programme.",
  keywords: [
    "IB MYP coaching Hyderabad",
    "IB MYP classes Hyderabad",
    "IB MYP preparation Hyderabad",
    "IB MYP coaching institute Hyderabad",
    "IB MYP academic support Hyderabad",
    "IB MYP exam preparation Hyderabad"
  ],
  openGraph: {
    title: "IB MYP Coaching in Hyderabad | MindSplash Academy",
    description:
      "Explore IB MYP coaching and academic support in Hyderabad for students following the International Baccalaureate Middle Years Programme.",
    type: "website",
    url: "https://mindsplash.in/programs/ib-myp",
  },
  alternates: {
    canonical: "/programs/ib-myp",
  },
};

const SUBJECTS = [
  { name: "Mathematics", slug: "mathematics", description: "Number, algebra, geometry, trigonometry, statistics and probability, with criteria-based practice." },
  { name: "Physics", slug: "physics", description: "Mechanics, waves, electricity and thermal physics with experimental design and data analysis." },
  { name: "Chemistry", slug: "chemistry", description: "Atomic structure, bonding, stoichiometry, energetics and reaction concepts." },
  { name: "Biology", slug: "biology", description: "Cell biology, genetics, ecology, human physiology and scientific investigation skills." },
];

const METHODOLOGY = [
  { icon: Target, title: "Baseline Assessment", desc: "Diagnostic test to identify strengths and gaps before starting the programme." },
  { icon: BookOpen, title: "Criteria-Based Worksheets", desc: "Proprietary worksheets mapped to IB MYP Criteria A, B, C and D for each subject." },
  { icon: Clock, title: "Assessprep Practice", desc: "Computer-based practice tasks on Assessprep help students become familiar with digital assessment formats." },
  { icon: CheckCircle, title: "Timed Mock Exams", desc: "Full-length timed mocks every 3â€“4 weeks with detailed performance analysis and remedial plans." },
  { icon: Award, title: "Score Tracking", desc: "Individual score dashboards tracking criteria-level progress across terms." },
  { icon: Users, title: "Small Batches (8â€“12)", desc: "Limited class sizes give teachers more opportunity to offer individual feedback and attention." },
];

const FAQS = [
  {
    q: "What is the IB MYP eAssessment?",
    a: "The IB MYP eAssessment is a computer-based examination for Year 5 students, with tasks assessed against subject-specific criteria. At MindSplash, students practise computer-based assessment-style tasks on Assessprep and review feedback to become familiar with the format and question types.",
  },
  {
    q: "Which grades/years does MindSplash cover for IB MYP?",
    a: "We coach IB MYP Years 4 and 5 students. Year 4 focuses on building foundational concepts and introducing criteria-based assessment. Year 5 is intensive eAssessment preparation with weekly mocks and detailed criteria analysis.",
  },
  {
    q: "How many hours per week is the IB MYP programme?",
    a: "The programme includes 6 hours of classes per week â€” 3 hours of Mathematics and 3 hours of Science (Physics, Chemistry, Biology). Sessions are 1 hour each, 6 days a week. Contact us for exact schedules at each centre.",
  },
  {
    q: "What results have MindSplash IB MYP students achieved?",
    a: "In the 2024 IB MYP cohort, one student scored 54/56 and multiple students scored 7/7 in Mathematics.",
  },
  {
    q: "Which centres offer IB MYP coaching?",
    a: "IB MYP coaching is available at all three MindSplash centres â€” Khajaguda (Gachibowli), Kokapet and Financial District, Hyderabad.",
  },
  {
    q: "How are the worksheets different from school worksheets?",
    a: "Our worksheets are designed by the Head of Academics and organised around IB MYP criteria. Students use them alongside lessons, practice tasks, and feedback to work on subject knowledge and exam technique.",
  },
];

export default function IBMYPPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Programs", href: "/programs" },
        { label: "IB MYP" },
      ]} />

      {/* Hero */}
      <section className="mx-3 mt-2 sm:mx-5 md:mx-7 md:mt-3 flex flex-col justify-center items-center min-h-[320px] md:min-h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
          <BookOpen className="w-4 h-4" /> IB MYP Programme
        </div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4 max-w-4xl">
          IB MYP Coaching in Hyderabad
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
          IB MYP Years 4 and 5 eAssessment preparation with criteria-based worksheets, digital practice, and teacher feedback.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/contact?program=IB_MYP"><PrimaryButton content="Book a Free Demo" /></Link>
        </div>
      </section>

      {/* Key Stats */}
      <section className="w-[85%] lg:w-[75%] mx-auto my-16 grid sm:grid-cols-4 gap-6">
        {[
          { val: "54/56", label: "Archived 2024 top score" },
          { val: "6 hrs", label: "Per Week" },
          { val: "8â€“12", label: "Batch Size" },
          { val: "3", label: "Centres in Hyderabad" },
        ].map((stat) => (
          <div key={stat.label} className="p-6 text-center bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm">
            <p className="text-3xl font-bold text-gradient-start mb-1">{stat.val}</p>
            <p className="text-sm text-description">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Programme Overview */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <figure className="relative lg:w-[45%] shrink-0">
          <Image src="/mvp_kid.jpg" alt="Student preparing for an IB MYP eAssessment" width={541} height={473} className="rounded-[28px] w-full" />
        </figure>
        <div className="lg:w-[55%]">
          <h2 className="mb-4">
            <Heading content="What is " /><GradientHeading content="IB MYP?" />
          </h2>
          <Description content="The IB Middle Years Programme (MYP) is a challenging framework for students aged 11â€“16 that encourages critical thinking and cross-disciplinary connections. Years 4 and 5 culminate in the MYP eAssessment â€” a computer-based examination that tests deep understanding across criteria A through D." />
          <br />
          <Description content="At MindSplash Academy, students use criteria-based worksheets, practice tasks on Assessprep, and teacher feedback to develop subject understanding and assessment technique. Contact a centre to discuss current class availability and preparation plans." />
        </div>
      </section>

      {/* Subjects */}
      <section className="w-full bg-secondary-foreground py-16 mb-16">
        <div className="w-[85%] lg:w-[75%] mx-auto">
          <h2 className="mb-10 text-center">
            <Heading content="Subjects " /><GradientHeading content="We Cover" />
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {SUBJECTS.map((subj) => (
              <Link key={subj.name} href={`/programs/ib-myp/${subj.slug}`} className="group block rounded-[28px] border border-card-border bg-foreground p-7 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-bold text-xl text-gradient-start mb-3">{subj.name}</h3>
                <p className="text-description text-sm leading-relaxed">{subj.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gradient-start group-hover:underline">IB MYP {subj.name} tuition in Hyderabad</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <h2 className="mb-10 text-center">
          <Heading content="Our " /><GradientHeading content="Methodology" />
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {METHODOLOGY.map((item) => (
            <div key={item.title} className="p-6 bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm">
              <item.icon className="w-8 h-8 text-gradient-start mb-4" />
              <h3 className="font-bold text-lg text-secondary mb-2">{item.title}</h3>
              <p className="text-description text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Proof */}
      <section className="w-full bg-secondary-foreground py-16 mb-16">
        <div className="w-[85%] lg:w-[75%] mx-auto">
          <h2 className="mb-10 text-center">
            <Heading content="Archived 2024 IB MYP " /><GradientHeading content="Results" />
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-foreground rounded-[28px] shadow-sm text-center">
              <Award className="w-10 h-10 mx-auto mb-4 text-gradient-start" />
              <p className="text-3xl font-bold text-gradient-start mb-2">54/56</p>
              <p className="text-sm text-description font-semibold">IB MYP 2024 Topper â€” Nihal</p>
              <p className="text-xs text-description mt-1">Highest score in Hyderabad</p>
            </div>
            <div className="p-8 bg-foreground rounded-[28px] shadow-sm text-center">
              <Award className="w-10 h-10 mx-auto mb-4 text-gradient-start" />
              <p className="text-3xl font-bold text-gradient-start mb-2">7/7</p>
              <p className="text-sm text-description font-semibold">Multiple Mathematics Toppers</p>
              <p className="text-xs text-description mt-1">Nihal, Dhruv, Hansini, Naithrav, Rohan, Shruti</p>
            </div>
            <div className="p-8 bg-foreground rounded-[28px] shadow-sm text-center">
              <Users className="w-10 h-10 mx-auto mb-4 text-gradient-start" />
              <p className="text-3xl font-bold text-gradient-start mb-2">3</p>
              <p className="text-sm text-description font-semibold">Centres offering IB MYP coaching</p>
              <p className="text-xs text-description mt-1">Khajaguda, Kokapet, and Financial District</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/about#results"><PrimaryButton content="See All Results" className="mt-4" /></Link>
          </div>
        </div>
      </section>

      {/* Centres */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <h2 className="mb-8">
          <Heading content="Available at All " /><GradientHeading content="3 Centres" />
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Khajaguda", addr: "4th Floor, Arka Rochish, Khajaguda-Nanakramguda Road", href: "/branches/khajaguda" },
            { name: "Kokapet", addr: "4th Floor, Raichandani Business Bay, Opp. Rajapushpa Regalia", href: "/branches/kokapet" },
            { name: "Financial District", addr: "Above ICICI Bank, My Home Vihanga Road, Gachibowli", href: "/branches/financialdistrict" },
          ].map((c) => (
            <Link key={c.name} href={c.href}>
              <div className="p-6 bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-bold text-lg text-secondary group-hover:text-gradient-start transition-colors mb-2">{c.name}</h3>
                <p className="text-xs text-description leading-relaxed">{c.addr}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-gradient-start">
                  IB MYP tuition in {c.name} <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-20">
        <h2 className="mb-10">
          <Heading content="IB MYP " /><GradientHeading content="FAQs" />
        </h2>
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

      {/* CTA */}
      <section className="mx-7 mb-16 flex flex-col items-center justify-center min-h-[280px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-8 py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Start your IB MYP journey today</h2>
        <p className="text-foreground/90 text-lg mb-8 max-w-xl">Book a free demo class and experience criteria-based coaching first-hand.</p>
        <Link href="/contact?program=IB_MYP"><PrimaryButton content="Book a Free Demo" /></Link>
      </section>

      <ContactUsModal />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Course",
        name: "IB MYP Coaching Programme", description: "IB MYP Years 4 & 5 eAssessment preparation at MindSplash Academy Hyderabad.",
        provider: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" },
        educationalLevel: "Secondary", url: "https://mindsplash.in/programs/ib-myp",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    </>
  );
}
