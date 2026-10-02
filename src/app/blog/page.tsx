import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "./blogData";

export const metadata: Metadata = {
  title: "MindSplash Blog | IGCSE, IB, Olympiad & Exam Preparation",
  description:
    "Read MindSplash Academy articles about IGCSE, IB MYP, IB DP, Olympiads, study strategies, concept-based learning and academic preparation.",

  keywords: [
    "MindSplash Academy blog",
    "IGCSE coaching Hyderabad blog",
    "IB MYP preparation",
    "IB DP preparation",
    "Olympiad preparation",
    "exam preparation tips",
    "study tips for students",
    "concept based learning",
    "academic preparation Hyderabad",
  ],

  alternates: {
    canonical: "https://mindsplash.in/blog",
  },

  openGraph: {
    title: "MindSplash Blog | IGCSE, IB, Olympiad & Exam Preparation",
    description:
      "Practical learning tips, exam preparation strategies and educational insights for students and parents.",
    url: "https://mindsplash.in/blog",
    siteName: "MindSplash Academy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MindSplash Blog | IGCSE, IB, Olympiad & Exam Preparation",
    description:
      "Practical learning tips, exam preparation strategies and educational insights for students and parents.",
  },
};

const categories = [
  {
    name: "IGCSE",
    href: "/programs/igcse",
  },
  {
    name: "IB MYP",
    href: "/programs/ib-myp",
  },
  {
    name: "IB DP",
    href: "/programs/ib-dp",
  },
  {
    name: "Olympiads",
    href: "/programs/olympiads",
  },
  {
    name: "Exam Preparation",
    href: "/programs/exam-prep",
  },
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MindSplash Academy Blog",
    description:
      "Educational articles about IGCSE, IB MYP, IB DP, Olympiad preparation, study strategies and academic preparation.",
    url: "https://mindsplash.in/blog",

    publisher: {
      "@type": "EducationalOrganization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },

    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      url: `https://mindsplash.in/blog/${article.slug}`,

      ...(article.image
        ? {
            image: `https://mindsplash.in${article.image}`,
          }
        : {}),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mindsplash.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://mindsplash.in/blog",
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-r from-orange-500 via-red-400 to-purple-500 px-6 pb-20 pt-32">
          <div className="mx-auto max-w-6xl text-center text-white">
            <p className="mb-4 text-lg font-semibold">
              MindSplash Academy
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              MindSplash Blog
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Practical learning tips, exam preparation strategies and
              educational insights for students and parents.
            </p>
          </div>
        </section>

        {/* CATEGORY LINKS */}
        <section className="border-b border-gray-100 bg-white px-6 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG ARTICLES */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Latest Articles
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                Explore educational articles covering IGCSE, IB MYP,
                IB DP, Olympiads, study strategies and academic support.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogArticles.map((article, index) => (
                <article
                  key={article.slug}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* BLOG IMAGE */}

                  {article.image ? (
                    <Link href={`/blog/${article.slug}`}>
                      <div className="relative aspect-[3/2] w-full overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Link>
                  ) : (
                    <Link href={`/blog/${article.slug}`}>
                      <div className="flex aspect-[3/2] w-full items-center justify-center bg-gradient-to-br from-orange-100 via-red-50 to-purple-100">
                        <span className="px-6 text-center text-xl font-bold text-orange-600">
                          MindSplash Academy
                        </span>
                      </div>
                    </Link>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    {/* ARTICLE NUMBER */}

                    <span className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                      Article {index + 1}
                    </span>

                    {/* TITLE */}

                    <h2 className="mt-5 text-xl font-bold leading-7 text-gray-900">
                      {article.title}
                    </h2>

                    {/* DESCRIPTION */}

                    <p className="mt-4 flex-1 leading-7 text-gray-600">
                      {article.description}
                    </p>

                    {/* LEARN MORE */}

                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-orange-500"
                    >
                      Learn More
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS INTERNAL LINKS */}
        <section className="bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Explore MindSplash Academic Programs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Explore academic programs available from MindSplash Academy
              for different learning and examination requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/programs/igcse"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:ring-orange-400"
              >
                IGCSE
              </Link>

              <Link
                href="/programs/ib-myp"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:ring-orange-400"
              >
                IB MYP
              </Link>

              <Link
                href="/programs/ib-dp"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:ring-orange-400"
              >
                IB DP
              </Link>

              <Link
                href="/programs/olympiads"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:ring-orange-400"
              >
                Olympiads
              </Link>

              <Link
                href="/programs/exam-prep"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:ring-orange-400"
              >
                Exam Preparation
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gray-900 px-8 py-12 text-center text-white md:px-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Need Academic Guidance?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
              Explore MindSplash academic programs or contact the team
              to discuss the student's learning requirements.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/programs"
                className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Programs
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-gray-600 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* BLOG SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}