import GradientHeading from "@/components/GradientHeading";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full flex-col items-center justify-center bg-secondary-foreground py-10 shadow-[0_-2px_3px_-1px_rgba(0,0,0,0.1)] md:py-20">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <section className="mb-8 flex w-full flex-wrap justify-start gap-10 md:mb-24 md:flex-nowrap md:flex-row md:gap-10 lg:gap-20 xl:w-[70%] xl:gap-[140px]">
        {/* =====================================================
            LEFT SECTION
        ====================================================== */}

        <div className="flex w-full flex-col items-center justify-center md:w-auto md:items-start md:pl-16 lg:px-0 xl:w-fit xl:shrink-0">
          {/* Heading */}

          <h1 className="mb-9 flex gap-2">
            <Heading content="Get In " />
            <GradientHeading content="Touch" />
          </h1>

          {/* Logo */}

          <Link
            href="/"
            aria-label="MindSplash Academy Home"
            className="mb-9"
          >
            <Image
              src="/footer_logo.png"
              alt="MindSplash Academy"
              width={216}
              height={77}
              priority
              className="h-auto w-[216px] object-contain"
            />
          </Link>

          {/* Mobile Number */}

          <p className="mb-1 text-left text-[15px] leading-[23px] text-secondary">
            Mobile Number
          </p>

          <a
            href="tel:+917075340810"
            className="mb-7.5 text-left text-[22px] font-bold leading-[23px] text-secondary hover:underline"
          >
            +91 7075340810
          </a>

          {/* Email */}

          <p className="mb-1 text-left text-[15px] leading-[23px] text-secondary">
            Email ID
          </p>

          <a
            href="mailto:reachus@mindsplash.com"
            className="mb-12 text-left text-[22px] font-bold leading-[23px] text-secondary hover:underline"
          >
            reachus@mindsplash.com
          </a>

          {/* =====================================================
              SOCIAL MEDIA
          ====================================================== */}

          <div className="flex flex-wrap gap-3">
            {/* Facebook */}

            <a
              href="https://www.facebook.com/MindsplashAcademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindSplash Academy Facebook"
            >
              <figure className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-[#ECE8F2] transition hover:bg-secondary">
                <Image
                  src="/fb.svg"
                  alt="Facebook"
                  width={11}
                  height={22}
                />
              </figure>
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/mindsplash-academy-7107a441b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindSplash Academy LinkedIn"
            >
              <figure className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-[#ECE8F2] transition hover:bg-secondary">
                <Image
                  src="/in.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                />
              </figure>
            </a>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/mind_splash_academy?stkn=MTN3bHAxYjAwcW9nZw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindSplash Academy Instagram"
            >
              <figure className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-[#ECE8F2] transition hover:bg-secondary">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6m4envkNDxalMSDXvlg7dgdpRh-Kb-146QSf4Ej5hg&s"
                  alt="Instagram"
                  width={21}
                  height={21}
                  className="object-contain"
                />
              </figure>
            </a>

            {/* X */}

            <a
              href="https://x.com/MindsplashA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindSplash Academy X"
            >
              <figure className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-[#ECE8F2] transition hover:bg-secondary">
                <Image
                  src="/x.svg"
                  alt="X"
                  width={22}
                  height={22}
                />
              </figure>
            </a>

            {/* YouTube */}

            <a
              href="https://youtube.com/@mindsplashacademy?si=jRrvbtZhJGVouvPQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindSplash Academy YouTube"
            >
              <figure className="flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-[#ECE8F2] transition hover:bg-secondary">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgcO3dlxmfhjuNtmuWseWjLOp2PkvXsmP8eiJdlds7A&s"
                  alt="YouTube"
                  width={23}
                  height={23}
                  className="object-contain"
                />
              </figure>
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT SECTION
        ====================================================== */}

        <div className="flex-1 px-8 lg:px-0 xl:max-w-[calc(100%-140px)]">
          <h1 className="mb-14 pt-2 text-left text-[22px] font-bold leading-[23px] text-secondary">
            Ask us more about our Programs
          </h1>

          {/* Contact Form */}

          <ContactForm />

          {/* =====================================================
              EXPLORE
          ====================================================== */}

          <h2 className="mb-5 mt-10 w-fit text-left text-[22px] font-bold leading-[23px] text-secondary">
            Explore
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
            <Link
              href="/"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              About Us
            </Link>

            <Link
              href="/programs"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              Our Programs
            </Link>

            <Link
              href="/blog"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              Blog
            </Link>

            <Link
              href="/branches/khajaguda"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              Khajaguda
            </Link>

            <Link
              href="/branches/kokapet"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              Kokapet
            </Link>

            <Link
              href="/branches/financialdistrict"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              Financial District
            </Link>

            <Link
              href="/contact"
              className="text-left text-[18px] font-normal leading-[23px] text-secondary transition hover:text-orange-500"
            >
              Contact Us
            </Link>
          </div>

          {/* =====================================================
              PROGRAM LINKS
          ====================================================== */}

          <h2 className="mb-5 mt-10 w-fit text-left text-[22px] font-bold leading-[23px] text-secondary">
            Our Programs
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">
            <Link
              href="/programs/igcse"
              className="text-left text-[17px] text-secondary transition hover:text-orange-500"
            >
              IGCSE
            </Link>

            <Link
              href="/programs/ib-myp"
              className="text-left text-[17px] text-secondary transition hover:text-orange-500"
            >
              IB MYP
            </Link>

            <Link
              href="/programs/ib-dp"
              className="text-left text-[17px] text-secondary transition hover:text-orange-500"
            >
              IB DP
            </Link>

            <Link
              href="/programs/olympiads"
              className="text-left text-[17px] text-secondary transition hover:text-orange-500"
            >
              Olympiads
            </Link>

            <Link
              href="/programs/exam-prep"
              className="text-left text-[17px] text-secondary transition hover:text-orange-500"
            >
              Exam Preparation
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRANCHES
      ====================================================== */}

      <section className="flex w-[80%] flex-col items-start justify-around gap-8 rounded-[28px] bg-gradient-to-r from-gradient-start to-gradient-end px-10 py-9 md:w-[70%] lg:flex-row lg:gap-8 xl:gap-8">
        {/* Branch Heading */}

        <div className="space-y-4 not-italic">
          <h2 className="w-full self-center text-left text-[26px] font-bold leading-[25px] lg:text-center 2xl:text-left">
            Our Branches
          </h2>

          <p className="max-w-[600px] text-left text-base font-normal leading-[22px] md:max-w-[300px] lg:max-w-full">
            IB/IGCSE Experts in Hyderabad Serving Financial District, Kokapet &
            Khajaguda
          </p>
        </div>

        {/* Branch Addresses */}

        <div className="flex flex-col gap-10 lg:flex-row xl:gap-20">
          {/* Khajaguda */}

          <address className="space-y-4 not-italic">
            <h3 className="text-left text-[22px] font-bold leading-[23px]">
              Khajaguda
            </h3>

            <p className="text-left text-base font-normal leading-[22px]">
              4th Floor, Arka Rochish, Khajaguda -
              <br />
              Nanakramguda Road, Gachibowli,
              <br />
              Hyderabad 500089
            </p>
          </address>

          {/* Kokapet */}

          <address className="space-y-4 not-italic">
            <h3 className="text-left text-[22px] font-bold leading-[23px]">
              Kokapet
            </h3>

            <p className="text-left text-base font-normal leading-[22px]">
              4th Floor, Raichandani Business Bay,
              <br />
              App.: Rajapushpa Regalia, Kokapet
              <br />
              500075
            </p>
          </address>

          {/* Financial District */}

          <address className="space-y-4 not-italic">
            <h3 className="text-left text-[22px] font-bold leading-[23px]">
              Financial District
            </h3>

            <p className="text-left text-base font-normal leading-[22px]">
              Above ICICI Bank - My Home Vihanga
              <br />
              Road, Gachibowli, Hyderabad 500032
            </p>
          </address>
        </div>
      </section>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-secondary">
        © {new Date().getFullYear()} MindSplash Academy. All rights reserved.
      </div>
    </footer>
  );
}