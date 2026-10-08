import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gradient-start">
        404 | Page not found
      </p>
      <h1 className="mb-4 text-3xl font-bold text-secondary md:text-5xl">
        We couldn't find that page
      </h1>
      <p className="mb-8 max-w-xl text-description">
        The link may be outdated or the page may have moved. Explore our programs or return to the home page.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-3 font-semibold text-white"
        >
          Go to home
        </Link>
        <Link
          href="/programs"
          className="rounded-full border border-card-border px-6 py-3 font-semibold text-secondary"
        >
          Explore programs
        </Link>
      </div>
    </main>
  );
}
