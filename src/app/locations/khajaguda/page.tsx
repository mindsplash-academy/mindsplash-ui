import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import PrimaryButton from "@/components/PrimaryButton";
import { ChevronRight, MapPin, Phone, Clock, BookOpen, Award, Users } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IB & IGCSE Coaching in Khajaguda, Hyderabad",
  description:
    "IB MYP, IB DP, IGCSE, Olympiad and SAT coaching at MindSplash Academy Khajaguda, Gachibowli. Small batches, expert IIT faculty, proven results (54/56 IB MYP 2024). Near Nanakramguda Road.",
  keywords:
    "IB tuition Khajaguda, IGCSE coaching Khajaguda, IB MYP coaching Gachibowli, IB DP tuition Khajaguda, Olympiad coaching Gachibowli, MindSplash Khajaguda",
  openGraph: {
    title: "IB & IGCSE Coaching in Khajaguda, Hyderabad | MindSplash Academy",
    description:
      "IB MYP, IB DP, IGCSE, Olympiad and SAT coaching at MindSplash Academy Khajaguda. Small batches, expert faculty, proven results.",
    type: "website",
    url: "https://mindsplash.in/locations/khajaguda",
  },
  alternates: {
    canonical: "https://mindsplash.in/locations/khajaguda",
  },
};

const PROGRAMS = [
  { name: "IB MYP", grades: "Years 4 & 5", href: "/programs#ib-myp-program-heading" },
  { name: "IB DP", grades: "Diploma Programme", href: "/programs#ib-dp-program-heading" },
  { name: "IGCSE", grades: "O-Level & A-Level", href: "/programs#igcse-program-heading" },
  { name: "Olympiads", grades: "Grades 6–10", href: "/programs#olympiad-program-heading" },
  { name: "SAT / PSAT", grades: "University admission prep", href: "/programs#exam-prep-program-heading" },
  { name: "Primary", grades: "Grade 5 & below", href: "/programs#primary-program-heading" },
];

const FAQS = [
  {
    q: "Where exactly is MindSplash Academy Khajaguda located?",
    a: "Our Khajaguda centre is on the 4th Floor, Arka Rochish, Khajaguda-Nanakramguda Road, Gachibowli, Hyderabad 500089. It is easily accessible from Gachibowli, Nanakramguda, Kondapur and Hitec City.",
  },
  {
    q: "What programmes are available at the Khajaguda branch?",
    a: "We offer IB MYP (eAssessment preparation), IB DP (Maths AA/AI, Physics, Chemistry, Economics, CS), IGCSE (Cambridge O-Level & A-Level), Olympiad coaching (IOQM, AMC) and SAT/PSAT preparation.",
  },
  {
    q: "What are the batch sizes at Khajaguda?",
    a: "We maintain small batches of 8–12 students per class so that our teachers can monitor and mentor each student individually.",
  },
  {
    q: "Can I get a free demo class at Khajaguda?",
    a: "Yes! Contact us at +91 7075340810 or fill in our contact form to schedule a free demo class at the Khajaguda centre.",
  },
  {
    q: "What results have students at Khajaguda achieved?",
    a: "Our 2024 IB MYP cohort produced the topper with 54/56. Multiple students secured top scores in IGCSE Cambridge examinations and national-level Olympiad ranks.",
  },
];

const NEARBY_LANDMARKS = [
  "Gachibowli", "Nanakramguda", "Kondapur", "Hitec City", "Madhapur", "Raidurgam",
];

export default function KhajagudaPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Locations" },
        { label: "Khajaguda" },
      ]} />

      {/* Hero */}
      <section className="mx-7 mt-5 flex flex-col justify-center items-center min-h-[320px] md:min-h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
          <MapPin className="w-4 h-4" /> Khajaguda, Hyderabad
        </div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4 max-w-4xl">
          IB & IGCSE Coaching in Khajaguda
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
          Small batches, expert IIT-trained faculty, and proven results — right in the heart of Gachibowli.
        </p>
        <div className="mt-8">
          <Link href="/contact" aria-label="Book a free demo at Khajaguda">
            <PrimaryButton content="Book a Free Demo" />
          </Link>
        </div>
      </section>

      {/* Branch Details */}
      <section className="w-[85%] lg:w-[75%] mx-auto my-16 grid md:grid-cols-3 gap-8">
        <div className="p-7 bg-secondary-foreground border border-card-border rounded-[30px] shadow-sm flex flex-col gap-4">
          <div className="p-3 flex justify-center items-center bg-gradient-to-r from-gradient-start to-gradient-end rounded-[14px] h-[54px] w-[54px]">
            <MapPin className="text-foreground w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-gradient-start">Address</h3>
          <p className="text-description text-sm leading-relaxed">
            4th Floor, Arka Rochish,<br />
            Khajaguda-Nanakramguda Road,<br />
            Gachibowli, Hyderabad 500089
          </p>
        </div>

        <div className="p-7 bg-secondary-foreground border border-card-border rounded-[30px] shadow-sm flex flex-col gap-4">
          <div className="p-3 flex justify-center items-center bg-gradient-to-r from-gradient-start to-gradient-end rounded-[14px] h-[54px] w-[54px]">
            <Phone className="text-foreground w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-gradient-start">Contact</h3>
          <p className="text-description text-sm leading-relaxed">
            <strong>Phone:</strong> +91 7075340810<br />
            <strong>Email:</strong> reachus@mindsplash.com
          </p>
        </div>

        <div className="p-7 bg-secondary-foreground border border-card-border rounded-[30px] shadow-sm flex flex-col gap-4">
          <div className="p-3 flex justify-center items-center bg-gradient-to-r from-gradient-start to-gradient-end rounded-[14px] h-[54px] w-[54px]">
            <Clock className="text-foreground w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-gradient-start">Timings</h3>
          <p className="text-description text-sm leading-relaxed">
            <strong>Mon – Sat:</strong> 3:00 PM – 8:00 PM<br />
            <strong>Sunday:</strong> By appointment
          </p>
        </div>
      </section>

      {/* Programmes Offered */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <div className="mb-8">
          <Heading content="Programmes at " />
          <GradientHeading content="Khajaguda" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog) => (
            <Link key={prog.name} href={prog.href}>
              <div className="p-6 bg-secondary-foreground border border-card-border rounded-[24px] shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <h3 className="font-bold text-lg text-secondary group-hover:text-gradient-start transition-colors mb-1">
                  {prog.name}
                </h3>
                <p className="text-sm text-description">{prog.grades}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-gradient-start">
                  View Details <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Local Proof / Results */}
      <section className="w-full bg-secondary-foreground py-16 mb-16">
        <div className="w-[85%] lg:w-[75%] mx-auto">
          <div className="mb-10 text-center">
            <Heading content="Proven " />
            <GradientHeading content="Results" />
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-foreground rounded-[28px] shadow-sm">
              <Award className="w-10 h-10 mx-auto mb-4 text-gradient-start" />
              <p className="text-3xl font-bold text-gradient-start mb-2">54/56</p>
              <p className="text-sm text-description">IB MYP 2024 Topper Score</p>
            </div>
            <div className="p-8 bg-foreground rounded-[28px] shadow-sm">
              <Users className="w-10 h-10 mx-auto mb-4 text-gradient-start" />
              <p className="text-3xl font-bold text-gradient-start mb-2">8–12</p>
              <p className="text-sm text-description">Students per Batch</p>
            </div>
            <div className="p-8 bg-foreground rounded-[28px] shadow-sm">
              <BookOpen className="w-10 h-10 mx-auto mb-4 text-gradient-start" />
              <p className="text-3xl font-bold text-gradient-start mb-2">6+</p>
              <p className="text-sm text-description">Subjects Across IB & IGCSE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <div className="mb-6">
          <Heading content="Serving Students from " />
          <GradientHeading content="Nearby Areas" />
        </div>
        <div className="flex flex-wrap gap-3">
          {NEARBY_LANDMARKS.map((area) => (
            <span key={area} className="px-4 py-2 bg-secondary-foreground border border-card-border rounded-full text-sm font-medium text-secondary">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-20">
        <div className="mb-10">
          <Heading content="Frequently Asked " />
          <GradientHeading content="Questions" />
        </div>
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
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          Ready to visit our Khajaguda centre?
        </h2>
        <p className="text-foreground/90 text-lg mb-8 max-w-xl">
          Schedule a free demo class and experience the MindSplash difference first-hand.
        </p>
        <Link href="/contact">
          <PrimaryButton content="Book a Free Demo" />
        </Link>
      </section>

      <ContactUsModal />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MindSplash Academy — Khajaguda",
            description:
              "IB MYP, IB DP, IGCSE, Olympiad and SAT coaching in Khajaguda, Gachibowli, Hyderabad.",
            url: "https://mindsplash.in/locations/khajaguda",
            telephone: "+917075340810",
            email: "reachus@mindsplash.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4th Floor, Arka Rochish, Khajaguda-Nanakramguda Road, Gachibowli",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500089",
              addressCountry: "IN",
            },
            image: "https://mindsplash.in/mindsplash-logo.png",
            parentOrganization: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
