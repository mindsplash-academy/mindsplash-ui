import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, Clock, BookOpen, Tag } from "lucide-react";
import ContactUsModal from "../_components/ContactUsModal";

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
    canonical: "https://mindsplash.in/blog",
  },
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "IB MYP" | "IB DP" | "IGCSE" | "Olympiads" | "SAT & Prep";
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ib-myp-eassessment-guide-hyderabad",
    title: "Complete Guide to IB MYP eAssessment & Criteria-Based Grading in 2026",
    excerpt:
      "Master the computer-based IB MYP eAssessment platform (Assessprep), understand Criteria A-D breakdown for Math & Sciences, and learn how our students score 54/56+ in Hyderabad.",
    category: "IB MYP",
    readTime: "7 min read",
    date: "September 2026",
    author: "Rahul Chakravarthy (Head of Academics, IIT Madras)",
    featured: true,
  },
  {
    slug: "igcse-math-physics-study-plan",
    title: "IGCSE Revision Strategies: How Proprietary Memory Maps Guarantee A* Grades",
    excerpt:
      "Discover how single-page visual memory maps help Cambridge IGCSE and A-Level students revise vast Maths, Physics, Chemistry & Biology syllabi in record time before board exams.",
    category: "IGCSE",
    readTime: "6 min read",
    date: "September 2026",
    author: "MindSplash Academic Team",
    featured: true,
  },
  {
    slug: "ib-dp-aa-vs-ai-math-guide",
    title: "IB DP Mathematics: Analysis & Approaches (AA) vs Applications & Interpretation (AI)",
    excerpt:
      "Detailed breakdown comparing IB DP Math AA (HL/SL) and Math AI (HL/SL). Learn which stream aligns with top university degree requirements in Engineering, CS, Medicine & Finance.",
    category: "IB DP",
    readTime: "8 min read",
    date: "August 2026",
    author: "Rahul Chakravarthy",
  },
  {
    slug: "olympiad-preparation-strategy-ioqm-amc",
    title: "Cracking Math Olympiads: IOQM & AMC 8/10/12 Preparation Roadmap for Grades 6-10",
    excerpt:
      "Step-by-step competitive math strategies from a National Math Olympiad awardee. How to build deep analytical thinking and qualify for national & international math competitions.",
    category: "Olympiads",
    readTime: "9 min read",
    date: "August 2026",
    author: "Rahul Chakravarthy (IIT Madras)",
  },
  {
    slug: "sat-psat-prep-tips-hyderabad",
    title: "Digital SAT 1500+ Strategy: Adaptive Math & Evidence-Based Reading Mastery",
    excerpt:
      "A comprehensive guide for Hyderabad high schoolers to ace the Digital SAT. Master timed section strategies, adaptive question difficulty, and high-yield math formulas.",
    category: "SAT & Prep",
    readTime: "6 min read",
    date: "July 2026",
    author: "MindSplash Test Prep Experts",
  },
];

export default function BlogHubPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      {/* Hero Header */}
      <section className="mx-7 mt-5 flex justify-center items-center min-h-[300px] md:min-h-[360px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            MindSplash Knowledge Hub
          </div>
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4">
            IB, IGCSE & Olympiad Insights
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl mx-auto">
            Expert academic guides, exam strategies, subject breakdowns, and university preparation roadmaps from Hyderabad’s leading IB/IGCSE faculty.
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

          <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-10 bg-secondary-foreground border border-card-border rounded-[36px] shadow-lg hover:shadow-xl transition-all">
            <div className="lg:col-span-7 flex flex-col justify-between">
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

                <p className="text-description text-base md:text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-card-border/60">
                <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <User className="w-4 h-4 text-gradient-start" /> {featuredPost.author}
                </div>
                <Button asChild className="group">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Guide
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gradient-start/10 to-gradient-end/20 flex items-center justify-center p-8 border border-gradient-start/20">
              <div className="text-center">
                <Image
                  src="/meticulous.jpg"
                  alt="IB MYP eAssessment preparation MindSplash Hyderabad"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-md object-cover w-full h-[260px]"
                />
              </div>
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
                className="p-7 bg-secondary-foreground border border-card-border rounded-[30px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-secondary font-medium">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-secondary hover:text-gradient-start transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-description text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between text-xs text-secondary">
                  <span className="font-semibold">{post.author}</span>
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

      <ContactUsModal />

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
              author: {
                "@type": "Person",
                name: post.author,
              },
            })),
          }),
        }}
      />
    </>
  );
}
