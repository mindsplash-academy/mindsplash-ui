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

type ContextualTextLink = { text: string; phrase: string; href: string };

function getCanonicalBlogHref(href: string) {
  const match = href.match(/^\/blog\/([^/?#]+)\/?(?:[?#].*)?$/);
  if (!match) return undefined;
  const slug = decodeURIComponent(match[1]);
  const post = BLOG_POSTS.find((candidate) => candidate.slug === slug);
  return post ? `/blog/${post.slug}` : undefined;
}

function renderArticleText(value: string, contextualLink?: ContextualTextLink) {
  let articleText = value;
  if (contextualLink && !articleText.includes("[[")) {
    const escapedPhrase = contextualLink.phrase
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\s+/g, "\\s+");
    const phrasePattern = new RegExp(`\\b${escapedPhrase}\\b`, "i");
    const match = articleText.match(phrasePattern);
    if (match) {
      articleText = articleText.replace(phrasePattern, `[[${match[0]}|${contextualLink.href}]]`);
    }
  }

  return articleText.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${index}-${part}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("[[") && part.endsWith("]]")) {
      const [label, href] = part.slice(2, -2).split("|");
      const canonicalHref = href?.startsWith("/blog/") ? getCanonicalBlogHref(href) : href?.startsWith("/") ? href : undefined;
      if (label && canonicalHref) {
        return <Link key={`${index}-${part}`} href={canonicalHref} className="font-medium text-gradient-start underline-offset-4 hover:underline">{label}</Link>;
      }
    }

    return part;
  });
}

const relatedLinkStopWords = new Set([
  "a", "an", "and", "are", "as", "at", "by", "for", "from", "how", "in", "is", "of", "on", "or", "the", "to", "vs", "with",
  "complete", "guide", "students", "student", "preparation", "prepare", "tips", "ways", "learn", "learning",
]);

function getContextualRelatedPosts(post: (typeof BLOG_POSTS)[number]) {
  const getTerms = (value: string) => new Set(
    value.toLowerCase().match(/[a-z0-9]+/g)?.filter((term) => term.length > 2 && !relatedLinkStopWords.has(term)) ?? [],
  );
  const titleTerms = getTerms(post.title);
  const postTerms = getTerms(`${post.keyword ?? ""} ${post.excerpt} ${post.sections[0]?.heading ?? ""}`);

  const rankedPosts = BLOG_POSTS
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const candidateTitleTerms = getTerms(candidate.title);
      const candidateTerms = getTerms(`${candidate.keyword ?? ""} ${candidate.excerpt}`);
      const titleOverlap = [...titleTerms].filter((term) => candidateTitleTerms.has(term)).length;
      const topicOverlap = [...postTerms].filter((term) => candidateTerms.has(term)).length;
      const score = titleOverlap * 4 + topicOverlap * 2 + (candidate.category === post.category ? 1 : 0);
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title));
  const selected = rankedPosts.filter(({ score }) => score > 0).slice(0, 2);
  if (selected.length < 2) {
    const selectedSlugs = new Set(selected.map(({ candidate }) => candidate.slug));
    selected.push(...rankedPosts.filter(({ candidate }) => !selectedSlugs.has(candidate.slug)).slice(0, 2 - selected.length));
  }
  return selected.map(({ candidate }) => candidate);
}

function getRelatedArticleLinks(post: (typeof BLOG_POSTS)[number]) {
  const explicitLinks = (post.relatedLinks ?? []).flatMap((link) => {
    const href = getCanonicalBlogHref(link.href);
    return href && href !== `/blog/${post.slug}` ? [{ ...link, href }] : [];
  });
  const links = explicitLinks.length
    ? explicitLinks
    : getContextualRelatedPosts(post).map((candidate) => ({ label: candidate.title, href: `/blog/${candidate.slug}` }));
  return links.slice(0, 3);
}

function getRelevantProgramLinks(post: (typeof BLOG_POSTS)[number]) {
  const topic = `${post.title} ${post.keyword ?? ""} ${post.excerpt}`.toLowerCase();
  const links = new Map<string, { label: string; href: string }>();
  const add = (label: string, href: string) => links.set(href, { label, href });

  const isMypTopic = post.category === "IB MYP" || /\bmyp\b/.test(topic);
  if (isMypTopic) add("IB MYP tuition", "/programs/ib-myp");
  if (post.category === "IB DP" || /\bdp\b|diploma programme|mathematics aa|mathematics ai/.test(topic) || (!isMypTopic && /\bib\b/.test(topic))) {
    add("IB DP tuition", "/programs/ib-dp");
  }
  if (post.category === "IGCSE" || /\bigcse\b|cambridge/.test(topic)) add("IGCSE tuition", "/programs/igcse");
  if (post.category === "Olympiads" || /olympiad|ioqm|\bamc\b/.test(topic)) add("Olympiad preparation", "/programs/olympiads");
  if (post.category === "SAT & Prep" || /\bsat\b|\bpsat\b/.test(topic)) add("SAT / PSAT preparation", "/programs/exam-prep");

  if (!links.size) add(categoryProgram[post.category].label, categoryProgram[post.category].href);
  return [...links.values()].slice(0, 2);
}

function getContextualInlineLinks(post: (typeof BLOG_POSTS)[number]): ContextualTextLink[] {
  const paragraphs = post.sections.flatMap((section) => [
    section.body,
    ...(section.points ?? []),
    section.afterPoints ?? "",
    ...(section.subheadings?.map((subheading) => subheading.body) ?? []),
  ]).filter(Boolean);
  const usedParagraphs = new Set<string>();
  const links: ContextualTextLink[] = [];

  for (const candidate of getContextualRelatedPosts(post)) {
    const sources = [candidate.keyword ?? "", candidate.title, ...(candidate.secondaryKeywords ?? [])];
    const phrases = new Set<string>();
    for (const source of sources) {
      const words = source.toLowerCase().match(/[a-z0-9]+/g)?.filter((word) => word.length > 2 && !relatedLinkStopWords.has(word)) ?? [];
      for (let size = Math.min(3, words.length); size >= 2; size -= 1) {
        for (let start = 0; start <= words.length - size; start += 1) {
          phrases.add(words.slice(start, start + size).join(" "));
        }
      }
      words.forEach((word) => phrases.add(word));
    }

    const options = [...phrases].flatMap((phrase) => {
      const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      const pattern = new RegExp(`\\b${escapedPhrase}\\b`, "i");
      return paragraphs.flatMap((text) => {
        const match = text.match(pattern);
        if (!match || usedParagraphs.has(text)) return [];
        return [{ text, phrase: match[0], href: `/blog/${candidate.slug}`, words: phrase.split(" ").length }];
      });
    }).sort((a, b) => b.words - a.words || a.text.length - b.text.length);

    const selected = options[0];
    if (selected) {
      usedParagraphs.add(selected.text);
      links.push({ text: selected.text, phrase: selected.phrase, href: selected.href });
    }
  }

  return links;
}

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
    keywords: post.secondaryKeywords?.length
      ? [post.keyword, ...post.secondaryKeywords].filter(Boolean) as string[]
      : post.keyword,
    openGraph: {
      title: post.seoTitle ?? `${post.title} | MindSplash Academy`,
      description: post.metaDescription ?? post.excerpt,
      type: "article",
      images: [{ url: post.imageSrc ?? "https://mindsplash.in/meticulous.jpg", alt: post.imageAlt }],
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

  const contextualInlineLinks = post.relatedLinks?.length ? [] : getContextualInlineLinks(post);
  const contextualLinkByText = new Map(contextualInlineLinks.map((contextualLink) => [contextualLink.text, contextualLink]));
  const renderArticleParagraph = (text: string) => renderArticleText(text, contextualLinkByText.get(text));
  const relatedArticleLinks = getRelatedArticleLinks(post);
  const relevantProgramLinks = getRelevantProgramLinks(post);

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
        <div className="group relative mb-6 w-full overflow-hidden rounded-2xl border border-card-border/50 bg-white">
          {(() => {
            const imageBySlug: Record<string, string> = {
              "best-ib-tuition-hyderabad": "/7.png",
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
            const image = post.imageSrc ?? imageBySlug[post.slug];
            return image ? (
              <Image src={image} alt={post.imageAlt} title={post.imageAlt} width={image === "/0.png" || image === "/11.png" || image === "/13.png" || image === "/16.png" || image === "/20.png" || ["/36.png", "/37.png", "/38.png", "/39.png"].includes(image) ? 1672 : image === "/12.png" || image === "/18.png" ? 1671 : 1536} height={image === "/0.png" || image === "/11.png" || image === "/12.png" || image === "/13.png" || image === "/16.png" || image === "/18.png" || image === "/20.png" || ["/36.png", "/37.png", "/38.png", "/39.png"].includes(image) ? 941 : 1024} priority sizes="(max-width: 768px) 90vw, 1000px" unoptimized={image === "/0.png" || image === "/9.png" || image === "/11.png" || image === "/12.png" || image === "/13.png" || image === "/15.png" || image === "/16.png" || image === "/18.png" || image === "/20.png" || /^\/(3[6-9]|4[0-8])\.png$/.test(image)} className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]" />
            ) : (
              <BlogIllustration title={post.imageAlt} category={post.category} slug={post.slug} className="block h-auto w-full rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]" />
            );
          })()}
        </div>

        <div className="mb-10 max-w-none font-sans text-secondary">
          {(post.introduction ?? [post.excerpt]).map((paragraph) => (
            <p key={paragraph} className="mb-6 whitespace-pre-line text-base leading-7 text-slate-700 md:text-lg">
              {renderArticleText(paragraph)}
            </p>
          ))}

          {relatedArticleLinks.length ? (
            <p className="mb-7 rounded-xl bg-secondary-foreground px-4 py-3 text-base leading-7 text-slate-700 md:text-lg">
              Related reading: {relatedArticleLinks.map((link, index) => (
                <span key={link.href}>
                  {index > 0 ? (index === relatedArticleLinks.length - 1 ? " and " : ", ") : " "}
                  <Link href={link.href} className="font-medium text-gradient-start underline-offset-4 hover:underline">{link.label}</Link>
                </span>
              ))}
              .
            </p>
          ) : null}

          {post.sections.map((section) => (
            <section key={section.heading} className="mb-6">
              <h2 className="mb-2 text-xl font-bold leading-snug text-gradient-start md:text-2xl">{section.heading}</h2>
              {section.body && <p className="whitespace-pre-line text-base leading-7 text-slate-700 md:text-lg">{renderArticleParagraph(section.body)}</p>}
              {section.points && (
                <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-7 text-slate-700 md:text-lg">
                  {section.points.map((point) => (
                    <li key={point}>{renderArticleParagraph(point)}</li>
                  ))}
                </ul>
              )}
              {section.afterPoints && <p className="mt-3 text-base leading-7 text-slate-700 md:text-lg">{renderArticleParagraph(section.afterPoints)}</p>}
              {section.subheadings?.map((subheading) => (
                <div key={subheading.heading} className="mt-4">
                  <h3 className="mb-1 text-lg font-bold leading-snug text-gradient-start md:text-xl">{subheading.heading}</h3>
                  <p className="whitespace-pre-line text-base leading-7 text-slate-700 md:text-lg">{renderArticleParagraph(subheading.body)}</p>
                </div>
              ))}
            </section>
          ))}
          {post.faqs?.length ? (
            <section aria-labelledby="article-faq-heading" className="mt-8 border-t border-card-border pt-5">
              <h2 id="article-faq-heading" className="mb-4 text-2xl font-bold text-gradient-end md:text-3xl">Frequently asked questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="mb-1 text-lg font-bold text-gradient-start">{faq.question}</h3>
                    <p className="text-base leading-7 text-slate-700">{renderArticleText(faq.answer)}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          {post.conclusion ? (
            <section className="mt-8 border-t border-card-border pt-5">
              <h2 className="mb-2 text-xl font-bold leading-snug text-gradient-start md:text-2xl">Conclusion</h2>
              <p className="text-base leading-7 text-slate-700 md:text-lg">{renderArticleText(post.conclusion)}</p>
            </section>
          ) : null}
          {post.callToAction ? <p className="mt-5 font-semibold leading-7 text-gradient-start">{renderArticleText(post.callToAction)}</p> : null}
          <p className="mt-5 border-t border-card-border pt-4 text-base leading-7 text-slate-700 md:text-lg">
            Learn more about <Link href="/" className="font-medium text-gradient-start underline-offset-4 hover:underline">MindSplash Academy</Link> or find a convenient Hyderabad location:
            {" "}<Link href="/branches/khajaguda" className="font-medium text-gradient-start underline-offset-4 hover:underline">Khajaguda</Link>,
            {" "}<Link href="/branches/kokapet" className="font-medium text-gradient-start underline-offset-4 hover:underline">Kokapet</Link> or
            {" "}<Link href="/branches/financialdistrict" className="font-medium text-gradient-start underline-offset-4 hover:underline">Financial District</Link>.
          </p>
        </div>

        <nav aria-label="Related pages" className="mb-12 rounded-3xl border border-card-border bg-secondary-foreground p-6 md:p-8">
          <h2 className="mb-5 text-xl font-bold text-secondary">Continue exploring</h2>
          <div className="space-y-5 font-sans text-sm leading-6 text-secondary">
            <section aria-labelledby="related-articles-heading">
              <h3 id="related-articles-heading" className="mb-2 font-bold">Related articles</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4">
                {relatedArticleLinks.map((link) => <li key={link.href}><Link href={link.href} className="hover:text-gradient-start">{link.label}</Link></li>)}
              </ul>
            </section>
            <section aria-labelledby="programmes-heading">
              <h3 id="programmes-heading" className="mb-2 font-bold">Relevant programmes</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4">
                {relevantProgramLinks.map((link) => <li key={link.href}><Link href={link.href} className="hover:text-gradient-start">{link.label}</Link></li>)}
              </ul>
            </section>
            <section aria-labelledby="academy-links-heading">
              <h3 id="academy-links-heading" className="mb-2 font-bold">MindSplash Academy</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4">
                <li><Link href="/" className="hover:text-gradient-start">Home</Link></li>
                <li><Link href="/about" className="hover:text-gradient-start">About Us</Link></li>
                <li><Link href="/methodology" className="hover:text-gradient-start">Our teaching methodology</Link></li>
                <li><Link href="/contact" className="hover:text-gradient-start">Contact our academic team / book a free demo</Link></li>
              </ul>
            </section>
          </div>
        </nav>

        <div className="border-t border-card-border pt-8 mb-12 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-gradient-start hover:underline underline-offset-4">
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
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://mindsplash.in/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://mindsplash.in/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://mindsplash.in/blog/${post.slug}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            keywords: [post.keyword, ...(post.secondaryKeywords ?? [])].filter(Boolean).join(", "),
            mainEntityOfPage: `https://mindsplash.in/blog/${post.slug}`,
            image: post.imageSrc ? `https://mindsplash.in${post.imageSrc}` : "https://mindsplash.in/meticulous.jpg",
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

