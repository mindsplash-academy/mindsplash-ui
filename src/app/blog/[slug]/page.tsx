import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "../blogData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogArticles.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | MindSplash Academy",
      description:
        "The requested MindSplash Academy blog article could not be found.",
    };
  }

  return {
    title: `${blog.title} | MindSplash Academy`,

    description: blog.description,

    keywords: [
      "MindSplash Academy",
      "MindSplash blog",
      "academic preparation",
      "student learning",
      "exam preparation",
      blog.title,
    ],

    alternates: {
      canonical: `https://mindsplash.in/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://mindsplash.in/blog/${blog.slug}`,
      siteName: "MindSplash Academy",
      type: "article",
      ...(blog.image
        ? {
            images: [
              {
                url: `https://mindsplash.in${blog.image}`,
                width: 1200,
                height: 800,
                alt: blog.title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      ...(blog.image
        ? {
            images: [`https://mindsplash.in${blog.image}`],
          }
        : {}),
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blogIndex = blogArticles.findIndex(
    (item) => item.slug === slug
  );

  const blog = blogArticles[blogIndex];

  if (!blog) {
    notFound();
  }

  const previousBlog =
    blogIndex > 0 ? blogArticles[blogIndex - 1] : null;

  const nextBlog =
    blogIndex < blogArticles.length - 1
      ? blogArticles[blogIndex + 1]
      : null;

  const relatedBlogs = blogArticles
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.title,

    description: blog.description,

    url: `https://mindsplash.in/blog/${blog.slug}`,

    ...(blog.image
      ? {
          image: `https://mindsplash.in${blog.image}`,
        }
      : {}),

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mindsplash.in/blog/${blog.slug}`,
    },

    author: {
      "@type": "Organization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },

    publisher: {
      "@type": "EducationalOrganization",
      name: "MindSplash Academy",
      url: "https://mindsplash.in/",
    },
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
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://mindsplash.in/blog/${blog.slug}`,
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* HERO */}

        <section className="bg-gradient-to-r from-orange-500 via-red-400 to-purple-500 px-6 pb-16 pt-32">
          <div className="mx-auto max-w-5xl text-white">
            <Link
              href="/blog"
              className="mb-6 inline-block text-sm font-semibold text-white/90 transition hover:text-white"
            >
              ← Back to Blog
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              MindSplash Academy Blog
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
              {blog.description}
            </p>
          </div>
        </section>

        {/* BREADCRUMBS */}

        <nav
          aria-label="Breadcrumb"
          className="border-b border-gray-100 bg-white px-6 py-4"
        >
          <div className="mx-auto max-w-4xl text-sm text-gray-500">
            <Link
              href="/"
              className="transition hover:text-orange-500"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link
              href="/blog"
              className="transition hover:text-orange-500"
            >
              Blog
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-700">
              {blog.title}
            </span>
          </div>
        </nav>

        {/* ARTICLE */}

        <article className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            {/* FEATURED IMAGE */}

            {blog.image && (
              <div className="relative mb-10 aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            )}

            {/* ARTICLE CONTENT */}

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
              <div className="whitespace-pre-line text-lg leading-8 text-gray-700">
                {blog.content}
              </div>
            </div>

            {/* PROGRAM LINKS */}

            <section className="mt-12 rounded-2xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Explore MindSplash Academic Programs
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Explore the academic programs available from
                MindSplash Academy.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/programs/igcse"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-semibold text-gray-800 transition hover:border-orange-400 hover:text-orange-600"
                >
                  IGCSE
                </Link>

                <Link
                  href="/programs/ib-myp"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-semibold text-gray-800 transition hover:border-orange-400 hover:text-orange-600"
                >
                  IB MYP
                </Link>

                <Link
                  href="/programs/ib-dp"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-semibold text-gray-800 transition hover:border-orange-400 hover:text-orange-600"
                >
                  IB DP
                </Link>

                <Link
                  href="/programs/olympiads"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-semibold text-gray-800 transition hover:border-orange-400 hover:text-orange-600"
                >
                  Olympiads
                </Link>

                <Link
                  href="/programs/exam-prep"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-semibold text-gray-800 transition hover:border-orange-400 hover:text-orange-600"
                >
                  Exam Preparation
                </Link>
              </div>
            </section>

            {/* RELATED BLOGS */}

            <section className="mt-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Related Articles
                </h2>

                <p className="mt-3 text-gray-600">
                  Continue reading more educational articles from
                  MindSplash Academy.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedBlogs.map((relatedBlog) => (
                  <article
                    key={relatedBlog.slug}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* RELATED IMAGE */}

                    {relatedBlog.image && (
                      <Link href={`/blog/${relatedBlog.slug}`}>
                        <div className="relative aspect-[3/2] w-full overflow-hidden">
                          <Image
                            src={relatedBlog.image}
                            alt={relatedBlog.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </Link>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold leading-7 text-gray-900">
                        {relatedBlog.title}
                      </h3>

                      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                        {relatedBlog.description}
                      </p>

                      <Link
                        href={`/blog/${relatedBlog.slug}`}
                        className="mt-5 font-semibold text-orange-600 hover:text-orange-700"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* PREVIOUS / NEXT */}

            <section className="mt-12 grid gap-4 md:grid-cols-2">
              {previousBlog ? (
                <Link
                  href={`/blog/${previousBlog.slug}`}
                  className="rounded-xl border border-gray-200 p-5 transition hover:border-orange-400 hover:shadow-sm"
                >
                  <span className="text-sm font-semibold text-gray-500">
                    ← Previous Article
                  </span>

                  <p className="mt-2 font-bold text-gray-900">
                    {previousBlog.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextBlog ? (
                <Link
                  href={`/blog/${nextBlog.slug}`}
                  className="rounded-xl border border-gray-200 p-5 text-left transition hover:border-orange-400 hover:shadow-sm md:text-right"
                >
                  <span className="text-sm font-semibold text-gray-500">
                    Next Article →
                  </span>

                  <p className="mt-2 font-bold text-gray-900">
                    {nextBlog.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </section>

            {/* CTA */}

            <section className="mt-16 rounded-3xl bg-gray-900 p-8 text-center text-white md:p-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Explore MindSplash Academy
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
                Explore our academic programs and learning support for
                students.
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
                  className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* ARTICLE SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
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