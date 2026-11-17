import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, BookOpen, ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import Description from "@/components/Description";
import { BLOG_POSTS } from "../posts";
import BlogIllustration from "../BlogIllustration";

const categoryProgram = {
  "IB MYP": { label: "IB MYP coaching", href: "/programs/ib-myp", value: "IB_MYP" },
  "IB DP": { label: "IB DP coaching", href: "/programs/ib-dp", value: "IB_DP" },
  IGCSE: { label: "IGCSE coaching", href: "/programs/igcse", value: "IGCSE" },
  Olympiads: { label: "Olympiad preparation", href: "/programs/olympiads", value: "Olympiads" },
  "SAT & Prep": { label: "exam preparation", href: "/programs/exam-prep", value: "ExamPrep" },
  Parents: { label: "all academic programmes", href: "/programs", value: undefined },
} as const;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.seoTitle ?? `${post.title} | MindSplash Academy Blog`,
    description: post.metaDescription ?? post.excerpt,
    keywords: post.keyword,
    openGraph: {
      title: post.seoTitle ?? `${post.title} | MindSplash Academy`,
      description: post.metaDescription ?? post.excerpt,
      type: "article",
      images: [{ url: "https://mindsplash.in/meticulous.jpg", alt: post.imageAlt ?? post.title }],
      url: `https://mindsplash.in/blog/${post.slug}`,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title, href: `/blog/${post.slug}` },
      ]} />

      <article className="mx-auto my-6 w-[90%] max-w-5xl lg:w-[78%]">
        <div className="mb-7 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gradient-start md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-secondary font-medium">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-gradient-start" />
              <Link href={post.author.startsWith("Rahul") ? "/authors/rahul-chakravarthy" : "/about#our-teachers"} className="hover:underline">{post.author}</Link>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gradient-start" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gradient-start" /> {post.readTime}
            </span>
          </div>
        </div>

        <div className="mb-2 flex h-9 items-center">
          <Image src="/footer_logo.png" alt="MindSplash Academy" width={160} height={58} className="h-7 w-auto object-contain" />
        </div>
        <div className="relative mb-6 w-full overflow-hidden rounded-2xl border border-card-border/50 bg-white">
          {(() => {
            const imageBySlug: Record<string, string> = {
              "best-ib-tuition-hyderabad-parents-guide": "/7.png",
              "ib-vs-igcse-which-curriculum": "/8.png",
              "improve-ib-maths-grades-study-guide": "/9.png",
              "igcse-exam-preparation-tips": "/10.png",
              "ib-physics-difficult-study-strategy": "/11.png",
              "ib-myp-vs-ib-dp-differences": "/12.png",
              "personalised-ib-coaching-hyderabad": "/13.png",
              "igcse-maths-vs-cbse-maths": "/14.png",
              "how-to-score-7-ib-mathematics": "/15.png",
              "ib-exam-preparation-mistakes": "/16.png",
              "cambridge-igcse-readiness-guide": "/17.png",
              "ib-chemistry-preparation-guide": "/18.png",
              "igcse-coaching-hyderabad-centre-guide": "/19.png",
              "ib-small-batch-tuition-vs-large-classes": "/20.png",
              "olympiad-preparation-start-early": "/21.png",
              "ioqm-preparation-complete-guide": "/22.png",
              "amc-8-vs-amc-10-guide": "/23.png",
              "ib-maths-aa-vs-ai-student-challenges": "/0.png",
              "sat-preparation-beginners-study-plan": "/24.png",
              "maths-science-problem-solving-skills": "/25.png",
              "ib-internal-assessment-mistakes": "/26.png",
              "ib-biology-preparation-guide": "/27.png",
              "signs-child-needs-academic-support": "/28.png",
              "online-vs-offline-ib-tuition": "/29.png",
              "best-ib-dp-tuition-hyderabad": "/30.png",
              "igcse-physics-numericals-guide": "/31.png",
              "personalised-learning-academic-success": "/32.png",
              "parents-support-ib-igcse-exams": "/33.png",
              "habits-to-improve-ib-grades": "/34.png",
              "ib-igcse-academy-hyderabad-comparison": "/35.png",
              "ib-myp-eassessment-guide-hyderabad": "/36.png",
              "igcse-math-physics-study-plan": "/37.png",
              "ib-dp-aa-vs-ai-math-guide": "/38.png",
              "olympiad-preparation-strategy-ioqm-amc": "/39.png",
              "sat-psat-prep-tips-hyderabad": "/40.png",
              "parent-guide-choosing-academic-coaching": "/41.png",
              "ib-physics-common-mistakes-preparation": "/42.png",
              "igcse-physics-vs-ib-physics": "/43.png",
              "ib-myp-study-timetable-exam-season": "/44.png",
              "parents-identify-learning-gaps-before-exams": "/45.png",
              "ib-vs-igcse-curriculum-assessment-pathway": "/46.png",
              "mock-examinations-time-management": "/47.png",
              "math-study-techniques-international-curriculum": "/48.png",
            };
            const image = imageBySlug[post.slug];
            return image ? (
              <Image src={image} alt={post.imageAlt ?? post.title} width={image === "/0.png" || image === "/11.png" || image === "/13.png" || image === "/16.png" || image === "/20.png" || ["/36.png", "/37.png", "/38.png", "/39.png"].includes(image) ? 1672 : image === "/12.png" || image === "/18.png" ? 1671 : 1536} height={image === "/0.png" || image === "/11.png" || image === "/12.png" || image === "/13.png" || image === "/16.png" || image === "/18.png" || image === "/20.png" || ["/36.png", "/37.png", "/38.png", "/39.png"].includes(image) ? 941 : 1024} priority sizes="(max-width: 768px) 90vw, 1000px" unoptimized={image === "/0.png" || image === "/9.png" || image === "/11.png" || image === "/12.png" || image === "/13.png" || image === "/15.png" || image === "/16.png" || image === "/18.png" || image === "/20.png" || /^\/(3[6-9]|4[0-8])\.png$/.test(image)} className="block h-auto w-full" />
            ) : (
              <BlogIllustration title={post.imageAlt ?? post.title} category={post.category} slug={post.slug} className="block h-auto w-full rounded-2xl" />
            );
          })()}
        </div>

        <div className="mb-10 max-w-none font-sans text-secondary">
          <p className="mb-6 text-base leading-7 text-slate-700 md:text-lg">
            {post.excerpt}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mb-6">
              <h2 className="mb-2 text-xl font-bold leading-snug text-gradient-start md:text-2xl">{section.heading}</h2>
              <p className="text-base leading-7 text-slate-700 md:text-lg">{section.body}</p>
              {section.points && (
                <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-7 text-slate-700 md:text-lg">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {post.faqs?.length ? (
            <section aria-labelledby="article-faq-heading" className="mt-8 border-t border-card-border pt-5">
              <h2 id="article-faq-heading" className="mb-4 text-2xl font-bold text-gradient-end md:text-3xl">Frequently asked questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="mb-1 text-lg font-bold text-gradient-start">{faq.question}</h3>
                    <p className="text-base leading-7 text-slate-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          {post.sources?.length ? (
            <section aria-labelledby="article-sources-heading" className="mt-7 border-t border-card-border pt-5">
              <h2 id="article-sources-heading" className="mb-3 text-xl font-bold text-gradient-end">Official curriculum references</h2>
              <ul className="space-y-1 text-base leading-7 text-slate-700 md:text-lg">
                {post.sources.map((source) => <li key={source.href}><a className="font-semibold text-gradient-start underline-offset-4 hover:underline" href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}
              </ul>
            </section>
          ) : null}
        </div>

        <nav aria-label="Related pages" className="mb-12 rounded-3xl border border-card-border bg-secondary-foreground p-6 md:p-8">
          <h2 className="mb-4 text-xl font-bold text-secondary">Explore related learning and locations</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-gradient-start">
            <Link href={categoryProgram[post.category].href} className="font-semibold hover:underline">
              {categoryProgram[post.category].label}
            </Link>
            <Link href="/branches/khajaguda" className="hover:underline">Khajaguda centre</Link>
            <Link href="/branches/kokapet" className="hover:underline">Kokapet centre</Link>
            <Link href="/branches/financialdistrict" className="hover:underline">Financial District centre</Link>
            <Link href="/contact" className="font-semibold hover:underline">Ask about {categoryProgram[post.category].label} or book a free demo</Link>
          </div>
        </nav>

        <div className="border-t border-card-border pt-8 mb-12 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gradient-start font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </article>

      <section className="bg-secondary-foreground py-16 mt-16 border-t border-card-border">
        <div className="w-[85%] lg:w-[75%] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            <Heading content="Ready to " />
            <GradientHeading content="Excel?" />
          </h2>
          <Description content="Join MindSplash Academy and unlock your true academic potential." />
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-3 font-semibold text-white hover:opacity-90">
              Ask about a free demo <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            keywords: post.keyword,
            mainEntityOfPage: `https://mindsplash.in/blog/${post.slug}`,
            image: "https://mindsplash.in/meticulous.jpg",
            articleSection: post.category,
            datePublished: "2026-11-16",
            dateModified: "2026-11-16",
            author: post.author.startsWith("MindSplash")
              ? {
                  "@type": "Organization",
                  name: "MindSplash Academic Team",
                  url: "https://mindsplash.in/about",
                }
              : {
                  "@type": "Person",
                  name: "Rahul Chakravarthy",
                  url: "https://mindsplash.in/about#leadership-team",
                },
            publisher: {
              "@type": "Organization",
              name: "MindSplash Academy",
              logo: {
                "@type": "ImageObject",
                url: "https://mindsplash.in/mindsplash-logo.png"
              }
            }
          }),
        }}
      />
    </>
  );
}

