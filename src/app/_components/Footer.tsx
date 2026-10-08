import Image from "next/image";
import Link from "next/link";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const linkClassName =
  "text-sm leading-6 text-secondary/80 transition-colors hover:text-gradient-start";
const headingClassName = "mb-4 text-base font-bold text-secondary";
const socialClassName =
  "flex size-11 items-center justify-center rounded-full border border-card-border text-secondary transition-colors hover:border-gradient-start hover:bg-white hover:text-gradient-start";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-foreground shadow-[0_-2px_3px_-1px_rgba(0,0,0,0.1)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-card-border/70 pb-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-10 xl:gap-16">
          <section aria-labelledby="footer-contact-heading" className="min-w-0">
            <h2 id="footer-contact-heading" className={headingClassName}>
              Get in touch
            </h2>
            <Image
              src="/footer_logo.png"
              alt="MindSplash Academy"
              width={216}
              height={77}
              className="mb-5 h-auto w-48"
              loading="lazy"
            />
            <p className="mb-4 max-w-xs text-sm leading-6 text-secondary/75">
              IB, IGCSE, Olympiad and exam preparation programmes in Hyderabad.
            </p>
            <a
              href="tel:+917075340810"
              className={`${linkClassName} mb-2 block font-semibold`}
            >
              +91 7075340810
            </a>
            <a
              href="mailto:reachus@mindsplash.com"
              className={`${linkClassName} block break-words font-semibold`}
            >
              reachus@mindsplash.com
            </a>

            <div className="mt-5 flex gap-2.5">
              <a
                href="https://www.facebook.com/MindsplashAcademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MindSplash Academy on Facebook"
                className={socialClassName}
              >
                <Image src="/fb.svg" alt="" width={11} height={22} />
              </a>
              <a
                href="https://x.com/MindsplashA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MindSplash Academy on X"
                className={socialClassName}
              >
                <Image src="/x.svg" alt="" width={22} height={22} />
              </a>
              <a
                href="https://www.instagram.com/mind_splash_academy?stkn=MWxhaXVybGFhamRobQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MindSplash Academy on Instagram"
                className={socialClassName}
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://youtube.com/@mindsplashacademy?si=qjWcejzks2hxO8yv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MindSplash Academy on YouTube"
                className={socialClassName}
              >
                <Youtube className="size-5" />
              </a>
            </div>
          </section>

          <nav aria-labelledby="footer-explore-heading">
            <h2 id="footer-explore-heading" className={headingClassName}>
              Explore
            </h2>
            <ul className="flex flex-col items-start gap-2.5">
              <li><Link href="/about" className={linkClassName}>About Us</Link></li>
              <li><Link href="/programs" className={linkClassName}>Our Programs</Link></li>
              <li><Link href="/blog" className={linkClassName}>Blog</Link></li>
              <li><Link href="/parents/faq" className={linkClassName}>Parent FAQs</Link></li>
              <li><Link href="/methodology" className={linkClassName}>Teaching Methodology</Link></li>
              <li><Link href="/contact" className={linkClassName}>Contact Us</Link></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-centres-heading">
            <h2 id="footer-centres-heading" className={headingClassName}>
              Our Centres
            </h2>
            <ul className="flex flex-col items-start gap-2.5">
              <li><Link href="/branches/khajaguda" className={linkClassName}>Khajaguda</Link></li>
              <li><Link href="/branches/kokapet" className={linkClassName}>Kokapet</Link></li>
              <li><Link href="/branches/financialdistrict" className={linkClassName}>Financial District</Link></li>
            </ul>
          </nav>

        </div>

        <p className="pt-6 text-center text-xs text-secondary/70">
          © {new Date().getFullYear()} MindSplash Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
