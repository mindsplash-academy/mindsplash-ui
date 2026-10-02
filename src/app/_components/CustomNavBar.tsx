"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  ChevronDownIcon,
  ChevronRight,
  MapPin,
  BookOpen,
  GraduationCap,
  Trophy,
  ClipboardCheck,
} from "lucide-react";

import MobileNavbar from "./MobileNavbar";

export default function CustomNavBar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[76px] w-full max-w-7xl items-center px-4">
        {/* =====================================================
            DESKTOP NAVBAR
        ====================================================== */}

        <nav className="hidden w-full items-center md:flex">
          {/* LOGO */}

          <Link
            href="/"
            className="flex w-[210px] shrink-0 items-center"
            aria-label="MindSplash Academy Home"
          >
            <Image
              src="/footer_logo.png"
              alt="MindSplash Academy"
              width={216}
              height={77}
              priority
              className="block h-auto w-[180px] object-contain opacity-100"
            />
          </Link>

          {/* NAVIGATION */}

          <div className="flex flex-1 items-center justify-end gap-1 whitespace-nowrap">
            {/* HOME */}

            <Link href="/">
              <Button
                variant="ghost"
                className="px-3 font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600"
              >
                Home
              </Button>
            </Link>

            {/* ABOUT */}

            <Popover open={aboutOpen} onOpenChange={setAboutOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-1 px-3 font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                >
                  About Us

                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="center"
                className="w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
              >
                <NavItem
                  href="/about#leadership-team"
                  label="Leadership Team"
                  onClick={() => setAboutOpen(false)}
                />

                <NavItem
                  href="/about#our-teachers"
                  label="Our Teachers"
                  onClick={() => setAboutOpen(false)}
                />

                <NavItem
                  href="/about#methodology"
                  label="Our Methodology"
                  onClick={() => setAboutOpen(false)}
                />

                <NavItem
                  href="/about#results"
                  label="Results"
                  onClick={() => setAboutOpen(false)}
                />

                <NavItem
                  href="/about#curriculum"
                  label="Our Curriculum"
                  onClick={() => setAboutOpen(false)}
                />
              </PopoverContent>
            </Popover>

            {/* PROGRAMS */}

            <Popover open={programsOpen} onOpenChange={setProgramsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-1 px-3 font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                >
                  Our Programs

                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      programsOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="center"
                className="w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
              >
                <ProgramItem
                  href="/programs"
                  label="All Programs"
                  icon={<BookOpen className="h-4 w-4" />}
                  onClick={() => setProgramsOpen(false)}
                />

                <ProgramItem
                  href="/programs/igcse"
                  label="IGCSE"
                  icon={<GraduationCap className="h-4 w-4" />}
                  onClick={() => setProgramsOpen(false)}
                />

                <ProgramItem
                  href="/programs/ib-myp"
                  label="IB MYP"
                  icon={<GraduationCap className="h-4 w-4" />}
                  onClick={() => setProgramsOpen(false)}
                />

                <ProgramItem
                  href="/programs/ib-dp"
                  label="IB DP"
                  icon={<GraduationCap className="h-4 w-4" />}
                  onClick={() => setProgramsOpen(false)}
                />

                <ProgramItem
                  href="/programs/olympiads"
                  label="Olympiads"
                  icon={<Trophy className="h-4 w-4" />}
                  onClick={() => setProgramsOpen(false)}
                />

                <ProgramItem
                  href="/programs/exam-prep"
                  label="Exam Preparation"
                  icon={<ClipboardCheck className="h-4 w-4" />}
                  onClick={() => setProgramsOpen(false)}
                />
              </PopoverContent>
            </Popover>

            {/* BLOG */}

            <Link href="/blog">
              <Button
                variant="ghost"
                className="px-3 font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600"
              >
                Blog
              </Button>
            </Link>

            {/* BRANCHES */}

            <Popover open={branchesOpen} onOpenChange={setBranchesOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-1 px-3 font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                >
                  Branches

                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      branchesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="center"
                className="w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
              >
                <BranchItem
                  href="/branches/khajaguda"
                  label="Khajaguda"
                  onClick={() => setBranchesOpen(false)}
                />

                <BranchItem
                  href="/branches/kokapet"
                  label="Kokapet"
                  onClick={() => setBranchesOpen(false)}
                />

                <BranchItem
                  href="/branches/financialdistrict"
                  label="Financial District"
                  onClick={() => setBranchesOpen(false)}
                />
              </PopoverContent>
            </Popover>

            {/* CONTACT */}

            <Link href="/contact">
              <Button
                variant="ghost"
                className="px-3 font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600"
              >
                Contact Us
              </Button>
            </Link>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/917075340810"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with MindSplash Academy on WhatsApp"
            >
              <Button className="ml-2 rounded-full bg-green-500 px-5 font-semibold text-white shadow-sm hover:bg-green-600">
                <span className="mr-2">●</span>
                WhatsApp
              </Button>
            </a>
          </div>
        </nav>

        {/* =====================================================
            MOBILE NAVBAR
        ====================================================== */}

        <div className="flex w-full items-center justify-between md:hidden">
          <Link
            href="/"
            className="flex items-center"
            aria-label="MindSplash Academy Home"
          >
            <Image
              src="/footer_logo.png"
              alt="MindSplash Academy"
              width={216}
              height={77}
              priority
              className="block h-auto w-[150px] object-contain opacity-100"
            />
          </Link>

          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   ABOUT / NORMAL NAV ITEM
============================================================ */

function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
    >
      {label}

      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

/* ============================================================
   PROGRAM ITEM
============================================================ */

function ProgramItem({
  href,
  label,
  icon,
  onClick,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
    >
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>

      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

/* ============================================================
   BRANCH ITEM
============================================================ */

function BranchItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
    >
      <MapPin className="h-4 w-4" />
      {label}
    </Link>
  );
}