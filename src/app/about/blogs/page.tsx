import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "How MindSplash Makes Learning More Engaging for Students",
    slug: "how-mindsplash-makes-learning-more-engaging",
    image: "/blogs/mindsplash-learning.jpg",
    category: "Learning",
    excerpt:
      "Discover how interactive learning methods can help students understand concepts better and build stronger academic foundations.",
  },
  {
    title: "Why Early Learning Matters for Academic Success",
    slug: "why-early-learning-matters",
    image: "/blogs/early-learning.jpg",
    category: "Education",
    excerpt:
      "Early learning plays an important role in developing curiosity, confidence, problem-solving skills and long-term academic habits.",
  },
  {
    title: "How to Build Better Study Habits for Students",
    slug: "how-to-build-better-study-habits",
    image: "/blogs/study-habits.jpg",
    category: "Study Tips",
    excerpt:
      "Simple and practical study habits that can help students stay organized, focused and consistent throughout the academic year.",
  },
  {
    title: "The Role of Teachers in Modern Education",
    slug: "role-of-teachers-in-modern-education",
    image: "/blogs/teachers-modern-education.jpg",
    category: "Education",
    excerpt:
      "Learn how teachers can create engaging classrooms and support students with personalized and effective learning approaches.",
  },
  {
    title: "Fun Learning Activities Every Student Can Try",
    slug: "fun-learning-activities-for-students",
    image: "/blogs/fun-learning.jpg",
    category: "Activities",
    excerpt:
      "Explore simple learning activities that make education more enjoyable while helping students improve creativity and critical thinking.",
  },
  {
    title: "How Parents Can Support Their Child's Learning",
    slug: "how-parents-can-support-learning",
    image: "/blogs/parents-support-learning.jpg",
    category: "Parenting",
    excerpt:
      "Practical ways parents can create a positive learning environment and encourage children to develop healthy academic habits.",
  },
  {
    title: "Importance of Personalized Learning",
    slug: "importance-of-personalized-learning",
    image: "/blogs/personalized-learning.jpg",
    category: "Learning",
    excerpt:
      "Every student learns differently. Discover why personalized learning can help students learn at their own pace and improve understanding.",
  },
  {
    title: "How Technology Is Changing Education",
    slug: "how-technology-is-changing-education",
    image: "/blogs/technology-in-education.jpg",
    category: "Technology",
    excerpt:
      "From digital resources to interactive tools, technology is creating new opportunities for students and educators.",
  },
  {
    title: "Tips to Improve Focus and Concentration While Studying",
    slug: "tips-to-improve-focus-and-concentration",
    image: "/blogs/focus-concentration.jpg",
    category: "Study Tips",
    excerpt:
      "Use these simple strategies to reduce distractions, improve concentration and make study sessions more productive.",
  },
  {
    title: "Preparing Students for a Successful Academic Journey",
    slug: "preparing-students-for-academic-success",
    image: "/blogs/academic-success.jpg",
    category: "Education",
    excerpt:
      "A strong academic journey starts with the right guidance, learning environment and consistent support.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-12 lg:px-20 lg:pb-20 lg:pt-44">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-primary">
            MindSplash Blog
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Ideas, Insights & Tips for{" "}
            <span className="text-primary">Better Learning</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            Explore educational insights, learning strategies, parenting tips,
            student activities and helpful resources from MindSplash.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Latest Articles
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Discover useful ideas and practical guidance designed to make
              learning more effective and enjoyable.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <Link href={`/blog/${blog.slug}`}>
                  <div className="relative aspect-[1200/628] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {blog.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Make Learning More Engaging?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Give your child an engaging learning experience with MindSplash.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-background px-7 py-3 font-bold text-foreground transition-transform hover:scale-105"
          >
            Book a Free Demo Class
          </Link>
        </div>
      </section>
    </main>
  );
}