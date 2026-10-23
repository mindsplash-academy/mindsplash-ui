"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

type BannerContent = { heading: string; detail: string; href: string; action: string };

function getBannerContent(pathname: string): BannerContent {
  if (pathname.startsWith("/programs/igcse")) return {
    heading: "Need support with Cambridge IGCSE?",
    detail: "Talk with our team about IGCSE subjects, study plans, and current centre availability.",
    href: "/contact?program=IGCSE", action: "Ask about IGCSE",
  };
  if (pathname.startsWith("/programs/ib-myp")) return {
    heading: "Explore IB MYP support",
    detail: "Talk with our team about Mathematics, Science, and eAssessment preparation.",
    href: "/contact?program=IB_MYP", action: "Ask about IB MYP",
  };
  if (pathname.startsWith("/programs/ib-dp")) return {
    heading: "Plan your IB Diploma support",
    detail: "Ask about subject availability, levels, and schedules at our Hyderabad centres.",
    href: "/contact?program=IB_DP", action: "Ask about IB DP",
  };
  if (pathname.startsWith("/programs/olympiads")) return {
    heading: "Build confidence in Olympiad problem-solving",
    detail: "Talk with our team about Mathematics and Science competition preparation.",
    href: "/contact?program=Olympiads", action: "Ask about Olympiads",
  };
  if (pathname.startsWith("/programs/exam-prep")) return {
    heading: "Get ready for your next exam",
    detail: "Ask us about SAT, PSAT, and school exam preparation options.",
    href: "/contact?program=ExamPrep", action: "Ask about exam prep",
  };
  if (pathname.startsWith("/programs")) return {
    heading: "Find the right programme for your child",
    detail: "Talk with our team about engaging, immersive learning across our programmes.",
    href: "/contact", action: "Speak with us",
  };
  const branch = pathname.includes("financialdistrict") ? "Financial District" : pathname.includes("kokapet") ? "Kokapet" : pathname.includes("khajaguda") ? "Khajaguda" : undefined;
  if (branch) return {
    heading: `Visit our ${branch} centre`,
    detail: "Ask about current programmes, class availability, and booking a free demo.",
    href: `/contact?location=${encodeURIComponent(branch.replace(" ", "_"))}`, action: `Contact ${branch}`,
  };
  if (pathname.startsWith("/contact")) return {
    heading: "We’re here to help",
    detail: "Call our enrolment team or email us if you have a question about getting started.",
    href: "tel:+917075340810", action: "Call +91 7075340810",
  };
  if (pathname.startsWith("/parents/faq")) return {
    heading: "Have another question?",
    detail: "Our team can help with programmes, schedules, centres, and demo classes.",
    href: "/contact", action: "Contact our team",
  };
  if (pathname.startsWith("/blog")) return {
    heading: "Put learning ideas into practice",
    detail: "Talk with our team about academic support tailored to your child.",
    href: "/contact", action: "Explore learning support",
  };
  if (pathname.startsWith("/about") || pathname.startsWith("/methodology")) return {
    heading: "Get to know MindSplash Academy",
    detail: "Talk with us about our teaching approach and the programmes we offer.",
    href: "/contact", action: "Speak with our team",
  };
  return {
    heading: "Make learning engaging, immersive, and fun",
    detail: "Talk with our team about programmes and academic support for your child.",
    href: "/contact", action: "Speak with us",
  };
}

export default function PageContactBanner() {
  const pathname = usePathname() || "/";
  const content = getBannerContent(pathname);

  return (
    <section aria-labelledby="page-contact-banner-heading" className="mx-4 my-12 overflow-hidden rounded-[32px] bg-gradient-to-r from-gradient-start to-gradient-end text-foreground shadow-lg sm:mx-7 md:my-16 md:grid md:min-h-[360px] md:grid-cols-2 md:rounded-none lg:min-h-[420px]">
      <div className="relative min-h-[220px] md:min-h-[360px] lg:min-h-[420px]">
        <Image src="/footer_kid.png" alt="MindSplash student learning with a tablet" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-left" />
      </div>
      <div className="flex items-center justify-center px-7 py-10 text-center md:justify-start md:px-10 md:text-left lg:px-[7%]">
        <div className="max-w-xl">
          <h2 id="page-contact-banner-heading" className="text-2xl font-normal leading-tight sm:text-3xl lg:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-base leading-7 sm:text-lg">{content.detail}</p>
          <Link href={content.href} className="mt-7 inline-flex min-h-14 items-center gap-3 rounded-full border border-white/70 bg-white px-7 font-semibold text-secondary transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            {content.action}
            <span className="flex size-6 items-center justify-center rounded-full bg-secondary text-white"><ChevronRight size={16} aria-hidden="true" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
