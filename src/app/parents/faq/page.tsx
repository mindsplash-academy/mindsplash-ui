import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Parent FAQs | IB, IGCSE Tuition & Branches | MindSplash Academy",
  description: "Answers for parents about MindSplash programmes, subjects, schedules, fees, IB and IGCSE pathways, Hyderabad branches and demo classes.",
  alternates: { canonical: "/parents/faq" },
  openGraph: { title: "Parent FAQs | MindSplash Academy", description: "Answers about programmes, subjects, fees, schedules and Hyderabad branches.", type: "website", url: "https://mindsplash.in/parents/faq" },
};

const faqs = [
  { q: "How can I find out the current programme fees?", a: "Fees can depend on the programme, subjects and schedule. The academy has not published a current fee schedule on this page; contact the enrolment team for the latest fee details before making a decision.", links: [{ label: "Contact MindSplash", href: "/contact" }] },
  { q: "What days and times are classes held?", a: "Schedules vary by subject and centre. Contact the academy with the student’s grade, curriculum, subjects and preferred branch to ask about current availability.", links: [{ label: "View Hyderabad branches", href: "/branches" }] },
  { q: "Which grades or programme levels can enquire?", a: "MindSplash lists Primary support for Grade 5 and below, IB MYP support for Years 4 and 5, IB DP subject coaching at HL and SL, Cambridge IGCSE subjects, Olympiad preparation and exam preparation. Confirm a student’s syllabus, grade and current availability with the academy.", links: [{ label: "Explore programmes", href: "/programs" }] },
  { q: "What is the difference between IB MYP and IB DP?", a: "The IB Middle Years Programme is designed for students aged 11–16, while the Diploma Programme is for students aged 16–19. They are distinct programmes with different age ranges and curriculum structures. Check the official IB programme pages and the student’s school pathway.", links: [{ label: "IB MYP overview", href: "https://ibo.org/programmes/middle-years-programme/what-is-the-myp/" }, { label: "IB DP overview", href: "https://ibo.org/programmes/diploma-programme/" }] },
  { q: "How does Cambridge IGCSE differ from the IB?", a: "Cambridge IGCSE is a subject-based qualification with syllabuses and assessment routes that vary by subject. The IB offers programmes such as MYP and DP, each with its own framework. Compare the specific course and subjects at the student’s school rather than treating either curriculum as one single exam.", links: [{ label: "Cambridge IGCSE curriculum", href: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/curriculum/" }, { label: "IB programmes", href: "https://ibo.org/programmes/" }] },
  { q: "Which subjects does MindSplash list for IB DP coaching?", a: "The academy lists Mathematics: Analysis and Approaches (AA), Mathematics: Applications and Interpretation (AI), Physics, Chemistry, Economics, English Language and Literature, and Computer Science. Ask the team to confirm current subject and level availability.", links: [{ label: "IB DP programme", href: "/programs/ib-dp" }] },
  { q: "Which IGCSE subjects are listed?", a: "The current programme pages list Mathematics, Physics, Chemistry, Biology and Computer Science. Support should be matched to the student’s Cambridge syllabus and school course.", links: [{ label: "IGCSE programme and subjects", href: "/programs/igcse" }] },
  { q: "How do we choose a branch?", a: "MindSplash lists centres in Khajaguda, Kokapet and Financial District. Choose based on travel convenience, then confirm whether the required programme and schedule are available at that centre.", links: [{ label: "Khajaguda", href: "/branches/khajaguda" }, { label: "Kokapet", href: "/branches/kokapet" }, { label: "Financial District", href: "/branches/financialdistrict" }] },
  { q: "Can we attend a demo class?", a: "Use the contact form to request a free demo. Include the student’s current grade, curriculum, subject and preferred centre so the team can respond with relevant options.", links: [{ label: "Request a demo", href: "/contact" }] },
];

export default function ParentFaqPage() {
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Parent FAQs" }]} />
    <header className="mx-3 mt-2 flex min-h-[260px] flex-col items-center justify-center rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12 text-center text-white sm:mx-5 md:mx-7">
      <h1 className="text-3xl font-bold md:text-5xl">Parent FAQs</h1>
      <p className="mt-4 max-w-2xl text-lg text-white/90">Practical answers about programmes, schedules, subjects and choosing a Hyderabad centre.</p>
    </header>
    <main className="mx-auto my-12 w-[90%] max-w-4xl space-y-4 md:my-16">
      {faqs.map((faq) => <details key={faq.q} className="group rounded-2xl border border-card-border bg-secondary-foreground p-6">
        <summary className="cursor-pointer list-none font-bold text-secondary">{faq.q}</summary>
        <p className="mt-3 leading-relaxed text-description">{faq.a}</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">{faq.links.map((link) => <Link key={link.href} className="font-semibold text-gradient-start hover:underline" href={link.href}>{link.label}</Link>)}</div>
      </details>)}
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    }) }} />
  </>;
}
