import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "./posts";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, Clock, BookOpen, Tag } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogIllustration from "./BlogIllustration";

export const metadata: Metadata = {
  title: "IB & IGCSE Education Blog & Resources | MindSplash Academy Hyderabad",
  description:
    "Expert insights, study guides, IB MYP eAssessment tips, IGCSE exam strategies, Olympiad preparation roadmaps, and parent guides from MindSplash Academy Hyderabad.",
  keywords:
    "IB MYP eAssessment tips, IGCSE study plans, IB DP subject selection, Olympiad coaching Hyderabad, SAT preparation guide, MindSplash blog",
  openGraph: {
    title: "IB & IGCSE Education Blog & Resources | MindSplash Academy",
    description:
      "Expert educational articles, study plans, and exam strategies for IB MYP, IB DP, IGCSE, and Olympiads in Hyderabad.",
    type: "website",
    url: "https://mindsplash.in/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};



export default function BlogHubPage() {
  const calendarPosts = BLOG_POSTS.filter((post) => post.keyword);
  const featuredPost = BLOG_POSTS.find((post) => post.slug === "best-ib-tuition-hyderabad")
    ?? calendarPosts[0]
    ?? BLOG_POSTS.find((post) => post.featured)
    ?? BLOG_POSTS[0];
  const regularPosts = [
    ...calendarPosts.filter((post) => post.slug !== featuredPost.slug),
    ...BLOG_POSTS.filter((post) => !post.keyword && post.slug !== featuredPost.slug),
  ].sort((a, b) => {
    const imageNumber = (imageSrc?: string) => Number(imageSrc?.match(/\/(\d+)\.png$/)?.[1] ?? Number.MAX_SAFE_INTEGER);
    return imageNumber(a.imageSrc) - imageNumber(b.imageSrc);
  });

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      {/* Hero Header */}
      <section className="mx-3 mt-2 sm:mx-5 md:mx-7 md:mt-3 flex justify-center items-center min-h-[300px] md:min-h-[360px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            MindSplash Knowledge Hub
          </div>
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4">
            IB, IGCSE & Olympiad Insights
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl mx-auto">
            Expert academic guides, exam strategies, subject breakdowns, and university preparation roadmaps from Hyderabad's leading IB/IGCSE faculty.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-[85%] lg:w-[75%] mx-auto my-16">
        {/* Featured Article Card */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-3 w-3 rounded-full bg-gradient-start inline-block"></span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary">
              Featured Guide
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 p-6 lg:p-8 bg-secondary-foreground border border-card-border rounded-[30px] shadow-lg hover:shadow-xl transition-all">
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-secondary font-medium">
                    <Clock className="w-4 h-4 text-gradient-start" /> {featuredPost.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-secondary font-medium">
                    <Calendar className="w-4 h-4 text-gradient-start" /> {featuredPost.date}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary hover:text-gradient-start transition-colors mb-4 leading-snug">
                    {featuredPost.title}
                  </h3>
                </Link>


                <p className="max-w-2xl font-sans text-lg font-medium leading-8 text-secondary/90 md:text-xl mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 border-t border-card-border/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2 text-sm font-semibold text-secondary sm:items-center">
                  <User className="w-4 h-4 text-gradient-start" /> {featuredPost.author.startsWith("Rahul") ? <Link href="/authors/rahul-chakravarthy" className="hover:underline">{featuredPost.author}</Link> : featuredPost.author}
                </div>
                <Button asChild className="group h-10 px-4 py-2 text-sm sm:h-15 sm:px-8 sm:py-5">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Guide
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group relative lg:col-span-4 flex items-center justify-center overflow-hidden rounded-2xl border border-gradient-start/20 bg-gradient-to-br from-gradient-start/10 to-gradient-end/20 p-3">
              <span className="absolute left-5 top-2 z-10 rounded bg-white px-1.5 py-1">
                <Image src="/footer_logo.png" alt="MindSplash Academy" width={105} height={38} className="h-5 w-auto object-contain" />
              </span>
              <Image src={featuredPost.imageSrc ?? "/7.png"} alt={featuredPost.imageAlt} title={featuredPost.imageAlt} width={1536} height={1024} priority className="block h-auto w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
          </div>
        </div>

        {/* All Topic Clusters & Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-card-border pb-4">
            <h2 className="text-2xl font-bold">
              <Heading content="Latest " />
              <GradientHeading content="Academic Articles" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-[24px] border border-card-border bg-secondary-foreground p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-1 flex h-9 items-center">
                  <Image src="/footer_logo.png" alt="MindSplash Academy" width={160} height={58} className="h-7 w-auto object-contain" />
                </div>
                <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-card-border/70 bg-white">
                  {post.imageSrc ? (
                    <Image src={post.imageSrc} alt={post.imageAlt} title={post.imageAlt} width={1536} height={1024} sizes="(max-width: 768px) 90vw, 45vw" className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]" />
                  ) : (
                    <BlogIllustration title={post.imageAlt ?? post.title} category={post.category} slug={post.slug} className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]" />
                  )}
                </Link>
                <div>
                  <div className="mb-3">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-secondary font-medium">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="mb-2 text-lg font-bold leading-snug text-secondary transition-colors hover:text-gradient-start sm:text-xl">
                      {post.title}
                    </h3>
                  </Link>


                  <p className="mb-3 font-sans text-sm font-medium leading-6 text-secondary/90 sm:text-base">
                    {post.excerpt}
                  </p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-card-border/60 flex items-center justify-between text-xs text-secondary">
                  <span className="font-semibold">{post.author.startsWith("Rahul") ? <Link href="/authors/rahul-chakravarthy" className="hover:underline">{post.author}</Link> : post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-gradient-start hover:underline inline-flex items-center gap-1"
                  >
                    Read More <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Browse programmes and locations" className="mx-auto mb-12 flex w-[85%] flex-wrap justify-center gap-x-6 gap-y-3 rounded-2xl bg-secondary-foreground p-6 text-sm font-semibold text-gradient-start lg:w-[75%]">
        <Link href="/programs/ib-myp" className="hover:underline">IB MYP tuition in Hyderabad</Link>
        <Link href="/programs/ib-dp" className="hover:underline">IB DP subject tuition in Hyderabad</Link>
        <Link href="/programs/igcse" className="hover:underline">IGCSE tuition in Hyderabad</Link>
        <Link href="/programs/olympiads" className="hover:underline">Olympiad classes in Hyderabad</Link>
        <Link href="/programs/exam-prep" className="hover:underline">SAT and PSAT preparation in Hyderabad</Link>
        <Link href="/branches" className="hover:underline">Find a Hyderabad tuition centre</Link>
        <Link href="/contact" className="hover:underline">Ask a question or book a free demo</Link>
      </nav>


      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MindSplash Academy IB & IGCSE Blog",
            description:
              "Expert academic articles, study guides, and exam strategies for IB MYP, IB DP, IGCSE, and Olympiads in Hyderabad.",
            url: "https://mindsplash.in/blog",
            publisher: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              logo: "https://mindsplash.in/mindsplash-logo.png",
            },
            blogPost: BLOG_POSTS.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `https://mindsplash.in/blog/${post.slug}`,
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
            })),
          }),
        }}
      />
    </>
  );
}


