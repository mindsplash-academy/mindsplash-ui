"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronUp, ChevronRight, BookOpen, GraduationCap, Trophy, ClipboardList, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNavbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const closeMenu = () => {
    setSheetOpen(false);
  };

  return (
    <div className="min-[1100px]:hidden flex items-center">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[min(300px,calc(100vw-2rem))] sm:w-[400px] bg-gradient-to-r from-gradient-start to-gradient-end text-white"
        >
          <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle>
          <nav className="flex flex-col items-start mt-10 text-base font-medium">
            {/* Home */}
            <Button
              asChild
              variant="nav"
              className="pl-5"
            >
              <Link
                href="/"
                className="flex items-center gap-3 hover:underline"
                onClick={closeMenu}
              >
                Home
              </Link>
            </Button>

            {/* About Us */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <Button asChild variant="nav">
                  <Link href="/about" onClick={closeMenu}>
                    About Us
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  aria-label={aboutOpen ? "Collapse About Us links" : "Expand About Us links"}
                  aria-expanded={aboutOpen}
                  onClick={() => setAboutOpen((prev) => !prev)}
                  className="text-white hover:bg-transparent hover:text-white"
                >
                {aboutOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                </Button>
              </div>

              {aboutOpen && (
                <div className="ml-6 flex flex-col">
                  {[
                    {
                      href: "/about#leadership-team",
                      label: "Leadership Team",
                      icon: "/leader.svg",
                    },
                    {
                      href: "/about#our-teachers",
                      label: "Our Teachers",
                      icon: "/teachers.svg",
                    },
                    {
                      href: "/about#methodology",
                      label: "Our Methodology",
                      icon: "/methodology.svg",
                    },
                    {
                      href: "/about#results",
                      label: "Results",
                      icon: "/results.svg",
                    },
                    {
                      href: "/about#curriculum",
                      label: "Our Curriculum",
                      icon: "/curriculum.svg",
                    },
                  ].map((item) => (
                    <Button
                      asChild
                      key={item.label}
                        className="flex items-center gap-2 bg-transparent border-transparent text-white hover:bg-transparent"
                      >
                      <Link href={item.href} onClick={closeMenu}>
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="brightness-0 invert"
                        />
                        {item.label}
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Programs */}
            <div className="flex flex-col justify-center w-full">
              <div className="flex items-center">
                <Button asChild variant="nav" className="pl-5">
                  <Link href="/programs" onClick={closeMenu}>
                    Our Programs
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  aria-label={programsOpen ? "Collapse Programs links" : "Expand Programs links"}
                  aria-expanded={programsOpen}
                  onClick={() => setProgramsOpen((prev) => !prev)}
                  className="text-white hover:bg-transparent hover:text-white"
                >
                {programsOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                </Button>
              </div>

              {programsOpen && (
                <div className="ml-6 flex flex-col">
                  {[
                    { label: "All Programs", href: "/programs", icon: BookOpen },
                    { label: "IGCSE", href: "/programs/igcse", icon: GraduationCap },
                    { label: "IB MYP", href: "/programs/ib-myp", icon: GraduationCap },
                    { label: "IB DP", href: "/programs/ib-dp", icon: GraduationCap },
                    { label: "Olympiads", href: "/programs/olympiads", icon: Trophy },
                    { label: "Exam Preparation", href: "/programs/exam-preparation", icon: ClipboardList }
                  ].map((item) => (
                    <Button
                      asChild
                      key={item.label}
                        className="flex items-center gap-2 bg-transparent border-transparent text-white hover:bg-transparent"
                      >
                      <Link href={item.href} onClick={closeMenu}>
                        <item.icon className="w-5 h-5" />
                        {item.label}
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Blog */}
            <Button
              asChild
              className="bg-transparent border-transparent pl-5"
              type="button"
              variant="nav"
            >
              <Link
                href="/blog"
                className="flex items-start gap-3 hover:underline"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </Button>

            {/* Branches */}
            <div className="flex flex-col justify-center w-full">
              <div className="flex items-center">
                <Button asChild variant="nav" className="pl-5">
                  <Link href="/branches" onClick={closeMenu}>
                    Branches
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  aria-label={branchesOpen ? "Collapse Branches links" : "Expand Branches links"}
                  aria-expanded={branchesOpen}
                  onClick={() => setBranchesOpen((prev) => !prev)}
                  className="text-white hover:bg-transparent hover:text-white"
                >
                {branchesOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                </Button>
              </div>

              {branchesOpen && (
                <div className="ml-6 flex flex-col gap-2 mt-2">
                  {[
                    { 
                      label: "Khajaguda", 
                      href: "/locations/khajaguda",
                      address: "4th Floor, Arka Rochish, Khajaguda" 
                    },
                    { 
                      label: "Kokapet", 
                      href: "/locations/kokapet",
                      address: "4th Floor, Raichandani Business Bay" 
                    },
                    { 
                      label: "Financial District", 
                      href: "/locations/financial-district",
                      address: "Above ICICI Bank, My Home Vihanga Rd" 
                    }
                  ].map((item) => (
                    <Button
                      asChild
                      key={item.label}
                      className="flex items-start gap-3 bg-transparent border-transparent text-white hover:bg-white/10 h-auto py-2 rounded-lg"
                    >
                      <Link href={item.href} onClick={closeMenu}>
                        <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                        <div className="flex flex-col text-left whitespace-normal">
                          <span className="font-medium text-base">{item.label}</span>
                          <span className="text-sm text-white/70 mt-0.5">{item.address}</span>
                        </div>
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <Button
              asChild
              type="button"
              variant="nav"
              className="bg-transparent border-transparent pl-5"
            >
              <Link
                href="/contact"
                className="flex gap-3 justify-start hover:underline"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </Button>

            {/* WhatsApp */}
            <Button
              asChild
              type="button"
              variant="nav"
              className="bg-transparent border-transparent pl-5"
            >
              <Link
                href="https://wa.me/917075340810"
                className="flex items-center gap-3 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Image
                  src="/WhatsApp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                WhatsApp
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
