import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, BookOpen, ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import Description from "@/components/Description";
import { BLOG_POSTS } from "../page";

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
    title: `${post.title} | MindSplash Academy Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | MindSplash Academy`,
      description: post.excerpt,
      type: "article",
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
        { label: post.title },
      ]} />

      <article className="w-[85%] lg:w-[70%] mx-auto my-12">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-secondary md:text-5xl">
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

        <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-card-border/50">
          <Image
            src="/meticulous.jpg"
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-16 max-w-none font-sans text-secondary">
          <p className="mb-10 rounded-2xl border border-card-border bg-secondary-foreground px-6 py-5 text-lg font-medium leading-8 text-secondary/90 md:text-xl">
            {post.excerpt}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="mb-4 text-2xl font-bold leading-snug text-secondary md:text-3xl">{section.heading}</h2>
              <p className="text-base leading-8 text-secondary/90 md:text-lg">{section.body}</p>
              {section.points && (
                <ul className="mt-5 space-y-3 pl-6 text-base leading-7 text-secondary/90 md:text-lg">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {post.sources?.length ? (
            <section aria-labelledby="article-sources-heading" className="mt-10 border-t border-card-border pt-6">
              <h2 id="article-sources-heading" className="mb-4 text-2xl font-bold text-secondary">Official curriculum references</h2>
              <ul className="space-y-3 text-base leading-7 text-secondary/90 md:text-lg">
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
            image: "https://mindsplash.in/meticulous.jpg",
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
