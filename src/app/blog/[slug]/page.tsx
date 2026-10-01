import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, BookOpen, ArrowLeft } from "lucide-react";
import ContactUsModal from "../../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import Description from "@/components/Description";
import { BLOG_POSTS } from "../page";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
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
      canonical: `https://mindsplash.in/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

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
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-secondary font-medium">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-gradient-start" /> {post.author}
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

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16 prose-headings:text-secondary prose-a:text-gradient-start prose-a:no-underline hover:prose-a:underline">
          <p className="text-xl leading-relaxed text-foreground/90 font-medium mb-8">
            {post.excerpt}
          </p>

          <h2>Understanding the Core Challenges</h2>
          <p>
            Many students struggle when transitioning to advanced curriculum levels because they rely on rote memorization rather than deep conceptual understanding. Our approach fundamentally changes this dynamic. By breaking down complex topics into digestible frameworks, we ensure students not only learn but retain the information effectively.
          </p>

          <h3>Strategic Preparation</h3>
          <p>
            The key to mastering these rigorous academic programs is a structured study plan that includes:
          </p>
          <ul>
            <li><strong>Diagnostic Assessments:</strong> Identifying baseline strengths and weaknesses early.</li>
            <li><strong>Targeted Practice:</strong> Focusing on high-yield topics and frequently tested concepts.</li>
            <li><strong>Mock Examinations:</strong> Simulating real testing environments to build stamina and time management skills.</li>
          </ul>

          <h2>Why Our Methodology Works</h2>
          <p>
            Unlike traditional tutoring centers, MindSplash focuses on personalized learning trajectories. We utilize visual memory maps, spaced repetition, and active recall techniques that are proven to enhance cognitive retention. This empowers students to face their final examinations with confidence and clarity.
          </p>
        </div>

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
            <ContactUsModal />
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
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.date, // Note: In a real app, use ISO string dates
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
