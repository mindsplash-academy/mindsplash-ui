import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MindSplash Financial District | Learning Centre",
  description:
    "Explore MindSplash Financial District and discover an engaging academic environment focused on concept clarity, personalised attention and student development.",
};

export default function FinancialDistrictPage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-secondary-foreground py-16 md:py-24">
        <div className="mx-auto grid w-[90%] max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div>
            <p className="mb-3 font-semibold text-primary">
              MindSplash Learning Centre
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              MindSplash
              <br />
              <span className="text-primary">
                Financial District
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-secondary">
              A modern learning environment designed to help
              students strengthen their academic foundations,
              understand concepts and develop confidence.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book a Free Demo Class
              </Link>

              <Link
                href="/"
                className="rounded-full border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Explore MindSplash
              </Link>
            </div>
          </div>

          {/* Branch Image */}
          <div className="relative h-[350px] overflow-hidden rounded-[30px] md:h-[500px]">
            <Image
              src="/branches/financial-district.jpg"
              alt="MindSplash Financial District learning centre"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="mx-auto w-[90%] max-w-6xl py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Learning at Financial District
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-secondary">
            MindSplash Financial District provides a focused
            academic environment where students can learn through
            concept clarity, structured practice and regular
            feedback.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Feature 1 */}
          <div className="rounded-[25px] bg-secondary-foreground p-7">
            <h3 className="text-xl font-bold">
              Concept Clarity
            </h3>

            <p className="mt-3 leading-7 text-secondary">
              Students are encouraged to understand the concepts
              behind every topic.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-[25px] bg-secondary-foreground p-7">
            <h3 className="text-xl font-bold">
              Personalised Learning
            </h3>

            <p className="mt-3 leading-7 text-secondary">
              Learning activities can be structured around the
              needs and progress of individual students.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-[25px] bg-secondary-foreground p-7">
            <h3 className="text-xl font-bold">
              Continuous Practice
            </h3>

            <p className="mt-3 leading-7 text-secondary">
              Regular practice and feedback help students track
              their academic progress.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="bg-secondary-foreground py-16 md:py-20">
        <div className="mx-auto w-[90%] max-w-6xl text-center">

          <h2 className="text-3xl font-bold md:text-5xl">
            Programs at MindSplash
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Primary",
              "IGCSE",
              "IB DP",
              "Olympiad Preparation",
            ].map((program) => (
              <div
                key={program}
                className="rounded-[22px] bg-white p-7 shadow-sm"
              >
                <h3 className="font-bold">
                  {program}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 text-center md:py-24">

        <h2 className="text-3xl font-bold md:text-5xl">
          Give Your Child a Joyful Learning Experience
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-secondary">
          Explore the MindSplash approach and discover a structured
          learning environment for your child.
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

