import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const title = "Rahul Chakravarthy | Head of Academics at MindSplash Academy";
const description =
  "Read about Rahul Chakravarthy, MindSplash Academy's Head of Academics, IIT Madras graduate, Olympiad author and educator.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/authors/rahul-chakravarthy" },
  openGraph: { title, description, type: "profile", url: "https://mindsplash.in/authors/rahul-chakravarthy" },
};

const articles = [
  { href: "/blog/ib-myp-eassessment-guide-hyderabad", title: "IB MYP eAssessment guide" },
  { href: "/blog/ib-dp-aa-vs-ai-math-guide", title: "IB DP Mathematics AA and AI guide" },
  { href: "/blog/olympiad-preparation-strategy-ioqm-amc", title: "Olympiad preparation strategy" },
];

export default function RahulChakravarthyProfile() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Rahul Chakravarthy" }]} />
      <main className="mx-auto my-10 w-[90%] max-w-5xl space-y-12 md:my-16">
        <header className="rounded-[36px] bg-gradient-to-r from-gradient-start to-gradient-end px-7 py-12 text-center text-white md:px-16">
          <p className="mb-3 font-semibold">Academic profile</p>
          <h1 className="text-3xl font-bold md:text-5xl">Rahul Chakravarthy</h1>
          <p className="mt-4 text-lg">Head of Academics · B.Tech, IIT Madras</p>
        </header>

        <section aria-labelledby="profile-heading">
          <h2 id="profile-heading" className="mb-4 text-2xl font-bold text-secondary md:text-3xl">Academic leadership and teaching</h2>
          <p className="leading-relaxed text-description">Rahul Chakravarthy is MindSplash Academy&apos;s Head of Academics, an IIT Madras graduate, National Math Olympiad awardee, Olympiad author and educator. At the academy, he teaches, develops worksheets and other learning tools, plans lessons, oversees lesson quality, and recruits and trains teachers.</p>
          <p className="mt-4 leading-relaxed text-description">On behalf of the Government of India, he has trained students from Telangana and Andhra Pradesh for the Indian National Mathematical Olympiad. He has authored Mathematics, Physics and Chemistry Olympiad books for high-school students, and has designed learning content and teacher training for companies across India.</p>
        </section>

        <section aria-labelledby="expertise-heading" className="rounded-3xl bg-secondary-foreground p-7 md:p-9">
          <h2 id="expertise-heading" className="mb-4 text-2xl font-bold text-secondary">Teaching and subject areas</h2>
          <p className="leading-relaxed text-description">His published work and Olympiad training experience include Mathematics, Physics and Chemistry. At MindSplash, his academic leadership also includes lesson planning, worksheet development, teacher training and quality review across the academy&apos;s programmes.</p>
          <p className="mt-4 text-sm leading-relaxed text-description">This profile describes credentials and responsibilities published by MindSplash Academy. The academy has not supplied a publication catalogue or dated employment history for this page.</p>
        </section>

        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="mb-5 text-2xl font-bold text-secondary md:text-3xl">Articles by Rahul</h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {articles.map((article) => <li key={article.href} className="rounded-2xl border border-card-border bg-white p-5"><Link href={article.href} className="font-semibold text-gradient-start hover:underline">{article.title}</Link></li>)}
          </ul>
        </section>

        <p className="text-description">Learn about the <Link className="font-semibold text-gradient-start hover:underline" href="/methodology">MindSplash teaching methodology</Link>, explore <Link className="font-semibold text-gradient-start hover:underline" href="/programs">programmes</Link>, or <Link className="font-semibold text-gradient-start hover:underline" href="/contact">contact the academy</Link>.</p>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person", name: "Rahul Chakravarthy",
        jobTitle: "Head of Academics", alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Madras" },
        knowsAbout: ["Mathematics", "Physics", "Chemistry", "Olympiad preparation", "Teacher training", "Academic lesson planning"],
        worksFor: { "@type": "EducationalOrganization", name: "MindSplash Academy", url: "https://mindsplash.in" },
        url: "https://mindsplash.in/authors/rahul-chakravarthy",
      }) }} />
    </>
  );
}
