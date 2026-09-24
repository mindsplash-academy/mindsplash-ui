import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MindSplash Khajaguda | Learning Centre",
  description:
    "Explore MindSplash Khajaguda and discover an engaging learning environment designed to help students build strong concepts and academic confidence.",
};

export default function KhajagudaPage() {
  const programs = [
    "Primary",
    "IGCSE",
    "IB MYP",
    "Olympiad Preparation",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-foreground py-16 md:py-24">
        <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Hero Content */}
          <div>
            <p className="mb-3 font-semibold text-primary">
              MindSplash Learning Centre
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              MindSplash
              <br />
              <span className="text-primary">Khajaguda</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-secondary">
              A focused learning environment where students can strengthen
              their concepts, improve problem-solving skills, and develop
              confidence through engaging learning experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book a Free Demo Class
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Explore MindSplash
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[350px] overflow-hidden rounded-[30px] md:h-[500px]">
            <Image
              src="/branches/khajaguda.jpg"
              alt="MindSplash Khajaguda learning centre"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Branch */}
      <section className="mx-auto w-[90%] max-w-6xl py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Learning at Khajaguda
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-secondary">
            MindSplash Khajaguda provides students with a structured and
            engaging academic environment. Our learning approach focuses on
            concept clarity, personalised attention, and continuous
            improvement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-[25px] bg-secondary-foreground p-7">
            <h3 className="text-xl font-bold">
              Concept-Based Learning
            </h3>

            <p className="mt-3 leading-7 text-secondary">
              Help students understand concepts instead of relying only on
              memorisation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[25px] bg-secondary-foreground p-7">
            <h3 className="text-xl font-bold">
              Personalised Attention
            </h3>

            <p className="mt-3 leading-7 text-secondary">
              A focused learning environment that allows teachers to
              understand individual student needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[25px] bg-secondary-foreground p-7">
            <h3 className="text-xl font-bold">
              Engaging Learning
            </h3>

            <p className="mt-3 leading-7 text-secondary">
              Interactive learning experiences designed to make academic
              concepts easier to understand.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-secondary-foreground py-16 md:py-20">
        <div className="mx-auto w-[90%] max-w-6xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Programs at MindSplash
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program}
                className="rounded-[22px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-bold">{program}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          Ready to explore MindSplash?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-secondary">
          Give your child an opportunity to experience an engaging and
          structured learning environment.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Book a Free Demo Class
        </Link>
      </section>
    </main>
  );
}