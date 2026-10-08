import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import PrimaryButton from "@/components/PrimaryButton";
import { ChevronRight, MapPin, Phone, Clock, BookOpen, Award, Users } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IB & IGCSE Tuition in Financial District | MindSplash Academy",
  description:
    "MindSplash Academy provides IB and IGCSE coaching in Financial District, Hyderabad. Explore programs and book a free demo class.",
  keywords: [
    "IB & IGCSE tuition Financial District",
    "IB tuition Financial District",
    "IGCSE tuition Financial District",
    "IB MYP coaching Financial District",
    "IB DP coaching Financial District",
  ],
  openGraph: {
    title: "IB & IGCSE Tuition in Financial District | MindSplash Academy",
    description: "MindSplash Academy provides IB and IGCSE coaching in Financial District, Hyderabad. Explore programs and book a free demo class.",
    type: "website",
    url: "https://mindsplash.in/branches/financialdistrict",
  },
  alternates: {
    canonical: "/branches/financialdistrict",
  },
};

const PROGRAMS = [
  { name: "IB MYP", grades: "Years 4 & 5", href: "/programs#ib-myp-program-heading" },
  { name: "IB DP", grades: "Diploma Programme", href: "/programs#ib-dp-program-heading" },
  { name: "IGCSE", grades: "O-Level & A-Level", href: "/programs#igcse-program-heading" },
  { name: "Olympiads", grades: "Grades 6â€“10", href: "/programs#olympiad-program-heading" },
  { name: "SAT / PSAT", grades: "University admission prep", href: "/programs#exam-prep-program-heading" },
  { name: "Primary", grades: "Grade 5 & below", href: "/programs#primary-program-heading" },
];

const FAQS = [
  {
    q: "Where is MindSplash Academy Financial District located?",
    a: "Our Financial District centre is above ICICI Bank, My Home Vihanga Road, Gachibowli, Hyderabad 500032. It is easily accessible from Nanakramguda, Raidurgam, Gachibowli, Hitec City and Madhapur.",
  },
  {
    q: "What programmes does the Financial District centre offer?",
    a: "We offer IB MYP (eAssessment preparation), IB DP (Maths AA/AI, Physics, Chemistry, Economics, CS), IGCSE (Cambridge O-Level & A-Level), Olympiad coaching (IOQM, AMC) and SAT/PSAT preparation.",
  },
  {
    q: "What makes the Financial District branch convenient for working parents?",
    a: "Located in the heart of the IT corridor, our Financial District centre is just minutes from major tech parks and residential communities like My Home Vihanga, Aparna Sarovar and Lanco Hills â€” making drop-off and pick-up seamless.",
  },
  {
    q: "Can I book a free trial class at Financial District?",
    a: "Yes! Call +91 7075340810 or fill in our online contact form to book a free demo class at the Financial District centre.",
  },
  {
    q: "What are the batch sizes?",
    a: "All batches are limited to 8â€“12 students to ensure personalised attention, regular feedback, and close monitoring by our expert faculty.",
  },
];

const NEARBY_LANDMARKS = [
  "Nanakramguda", "Raidurgam", "Gachibowli", "Hitec City", "Madhapur", "Lanco Hills", "My Home Vihanga",
];

export default function FinancialDistrictPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Locations" },
        { label: "Financial District" },
      ]} />

      {/* Hero */}
      <section className="mx-3 mt-2 sm:mx-5 md:mx-7 md:mt-3 flex flex-col justify-center items-center min-h-[320px] md:min-h-[400px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
          <MapPin className="w-4 h-4" /> Financial District, Hyderabad
        </div>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4 max-w-4xl">
          MindSplash Academy Financial District
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl">
          Premium coaching in Hyderabad's IT corridor â€” small batches, expert IIT faculty, and a track record of top scores.
        </p>
        <div className="mt-8">
          <Link href="/contact?location=Financial_District" aria-label="Book a free demo at Financial District">
            <PrimaryButton content="Book a Free Demo" />
          </Link>
        </div>
      </section>

      {/* Branch Image */}
      <section className="w-[85%] lg:w-[75%] mx-auto mt-12 flex justify-center">
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-[30px] overflow-hidden shadow-2xl border border-card-border">
          <Image
            src="/financial-district.jpg"
            alt="MindSplash Academy Financial District"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
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
            Above ICICI Bank,<br />
            My Home Vihanga Road,<br />
            Gachibowli, Hyderabad 500032
          </p>
          <a href="https://www.google.com/maps/search/?api=1&query=Above%20ICICI%20Bank%2C%20My%20Home%20Vihanga%20Road%2C%20Gachibowli%2C%20Hyderabad%20500032" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gradient-start hover:underline">Get directions</a>
        </div>

        <div className="p-7 bg-secondary-foreground border border-card-border rounded-[30px] shadow-sm flex flex-col gap-4">
          <div className="p-3 flex justify-center items-center bg-gradient-to-r from-gradient-start to-gradient-end rounded-[14px] h-[54px] w-[54px]">
            <Phone className="text-foreground w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-gradient-start">Contact</h3>
          <p className="text-description text-sm leading-relaxed">
            <strong>Phone:</strong> <a href="tel:+917075340810" className="hover:underline">+91 7075340810</a><br />
            <strong>Email:</strong> <a href="mailto:reachus@mindsplash.com" className="hover:underline">reachus@mindsplash.com</a>
          </p>
        </div>

        <div className="p-7 bg-secondary-foreground border border-card-border rounded-[30px] shadow-sm flex flex-col gap-4">
          <div className="p-3 flex justify-center items-center bg-gradient-to-r from-gradient-start to-gradient-end rounded-[14px] h-[54px] w-[54px]">
            <Clock className="text-foreground w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-gradient-start">Timings</h3>
          <p className="text-description text-sm leading-relaxed">
            <strong>Mon â€“ Sat:</strong> 3:00 PM â€“ 8:00 PM<br />
            <strong>Sunday:</strong> By appointment
          </p>
        </div>
      </section>

      {/* Programmes Offered */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-16">
        <div className="mb-8">
          <Heading content="Programmes at " />
          <GradientHeading content="Financial District" />
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

      {/* SEO Content & Internal Linking */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-16 bg-secondary-foreground border border-card-border p-8 rounded-[30px] shadow-sm">
        <h2 className="text-3xl font-bold text-secondary mb-6">Academic Coaching in Financial District</h2>
        <p className="text-description mb-6 leading-relaxed">
          MindSplash Academy offers world-class educational support to students in Hyderabad's premier IT corridor. 
          If you are looking for an <Link href="/programs/igcse" className="text-gradient-start hover:underline font-medium">IGCSE coaching program</Link>, 
          our Financial District branch provides expert IIT faculty and small batch sizes tailored for Cambridge O-Level and A-Level students.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">IGCSE Coaching in Financial District</h2>
        <p className="text-description mb-6 leading-relaxed">
          Our specialized <Link href="/programs/igcse" className="text-gradient-start hover:underline font-medium">IGCSE coaching program</Link> covers essential subjects including Mathematics, Physics, Chemistry, Biology, and Computer Science.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">IB MYP and IB DP Programs</h2>
        <p className="text-description mb-6 leading-relaxed">
          For International Baccalaureate students, we provide comprehensive <Link href="/programs/ib-myp" className="text-gradient-start hover:underline font-medium">IB MYP coaching</Link> for eAssessments and rigorous <Link href="/programs/ib-dp" className="text-gradient-start hover:underline font-medium">IB DP coaching</Link> covering Mathematics AA/AI, Economics, Sciences, and more.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Olympiad Preparation in Financial District</h2>
        <p className="text-description mb-6 leading-relaxed">
          Unlock your competitive edge with our dedicated <Link href="/programs/olympiads" className="text-gradient-start hover:underline font-medium">Olympiad preparation</Link> for IOQM and AMC.
        </p>
        
        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">Exam Preparation in Financial District</h2>
        <p className="text-description mb-6 leading-relaxed">
          We also offer focused <Link href="/programs/exam-prep" className="text-gradient-start hover:underline font-medium">exam preparation</Link> strategies for SAT/PSAT test takers aiming for top scores.
        </p>
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
              <p className="text-sm text-description">Archived 2024 IB MYP top score</p>
            </div>
            <div className="p-8 bg-foreground rounded-[28px] shadow-sm">
              <Users className="w-10 h-10 mx-auto mb-4 text-gradient-start" />
              <p className="text-3xl font-bold text-gradient-start mb-2">8â€“12</p>
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
          <h2 className="text-3xl font-bold"><Heading content="MindSplash Academy Financial District " /><GradientHeading content="Location" /></h2>
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          {NEARBY_LANDMARKS.map((area) => (
            <span key={area} className="px-4 py-2 bg-secondary-foreground border border-card-border rounded-full text-sm font-medium text-secondary">
              {area}
            </span>
          ))}
        </div>
        <p className="text-description text-sm">
          We also welcome students from our sister branches. Explore our <Link href="/branches/khajaguda" className="text-gradient-start hover:underline">Khajaguda</Link> and <Link href="/branches/kokapet" className="text-gradient-start hover:underline">Kokapet</Link> branches. For any inquiries, please <Link href="/contact?location=Financial_District" className="text-gradient-start hover:underline font-medium">contact the Financial District team</Link>.
        </p>
      </section>

      {/* FAQs */}
      <section className="w-[85%] lg:w-[75%] mx-auto mb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold"><Heading content="Frequently Asked " /><GradientHeading content="Questions" /></h2>
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
          Ready to visit our Financial District centre?
        </h2>
        <p className="text-foreground/90 text-lg mb-8 max-w-xl">
          Schedule a free demo class â€” conveniently located in the heart of Hyderabad's tech hub.
        </p>
        <Link href="/contact?location=Financial_District">
          <PrimaryButton content="Book a Free Demo" />
        </Link>
      </section>

      <ContactUsModal location="Financial_District" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MindSplash Academy â€” Financial District",
            description:
              "IB MYP, IB DP, IGCSE, Olympiad and SAT coaching in Financial District, Gachibowli, Hyderabad.",
            url: "https://mindsplash.in/branches/financialdistrict",
            telephone: "+917075340810",
            email: "reachus@mindsplash.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Above ICICI Bank, My Home Vihanga Road, Gachibowli",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500032",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
