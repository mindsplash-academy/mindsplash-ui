"use client";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronRight, BookOpen, GraduationCap, Trophy, ClipboardList, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

export default function CustomNavBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [programsOpen, setProgramsOpen] = useState<boolean>(false);
  const [branchesOpen, setBranchesOpen] = useState<boolean>(false);

  const closeAllMenus = () => {
    setOpen(false);
    setProgramsOpen(false);
    setBranchesOpen(false);
  };

  return (
    <>
      {(open || programsOpen || branchesOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeAllMenus} aria-hidden="true" />
      )}
      <div className="hidden flex-wrap items-center justify-end gap-2 xl:gap-4 min-[1100px]:flex relative z-50">
        <Button asChild type="button" variant="nav">
          <Link href="/" className="flex items-center">
            Home
          </Link>
        </Button>
        <div className="relative flex items-center">
          <Button asChild type="button" variant="nav">
            <Link href="/about">About Us</Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? "Close About Us menu" : "Open About Us menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen((value) => !value);
              setProgramsOpen(false);
              setBranchesOpen(false);
            }}
            className="text-white hover:bg-white/15 hover:text-white"
          >
              <ChevronDownIcon
                className={`size-4 transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
          </Button>
          {open && <div className="absolute right-0 top-full z-[60] mt-3 grid w-[min(350px,90vw)] gap-3 rounded-2xl border border-border bg-white p-4 text-secondary shadow-xl grid-cols-1">
            <Button
              asChild
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
              <Link href="/about#leadership-team" onClick={() => setOpen(false)}>
                <div className="group-hover:bg-foreground bg-secondary-foreground rounded-full h-10 w-10 flex items-center justify-center mr-4">
                  <Image
                    src={"/leader.svg"}
                    alt="mind-splash"
                    width={20}
                    height={20}
                  />
                </div>
                Leadership Team
                <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible absolute right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                  <ChevronRight className="text-foreground" />
                </div>
              </Link>
            </Button>

            <Button
              asChild
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
              <Link href="/about#our-teachers" onClick={() => setOpen(false)}>
                <div className="group-hover:bg-foreground bg-secondary-foreground rounded-full h-10 w-10 flex items-center justify-center mr-4">
                  <Image
                    src={"/teachers.svg"}
                    alt="mind-splash"
                    width={20}
                    height={20}
                  />
                </div>
                Our Teachers
                <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible absolute right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                  <ChevronRight className="text-foreground" />
                </div>
              </Link>
            </Button>

            <Button
              asChild
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
              <Link href="/about#methodology" onClick={() => setOpen(false)}>
                <div className="group-hover:bg-foreground bg-secondary-foreground rounded-full h-10 w-10 flex items-center justify-center mr-4">
                  <Image
                    src={"/methodology.svg"}
                    alt="mind-splash"
                    width={20}
                    height={20}
                  />
                </div>
                Our Methodology
                <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible absolute right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                  <ChevronRight className="text-foreground" />
                </div>
              </Link>
            </Button>

            <Button
              asChild
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
              <Link href="/about#results" onClick={() => setOpen(false)}>
                <div className="group-hover:bg-foreground bg-secondary-foreground rounded-full h-10 w-10 flex items-center justify-center mr-4">
                  <Image
                    src={"/results.svg"}
                    alt="mind-splash"
                    width={20}
                    height={20}
                  />
                </div>
                Results
                <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible absolute right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                  <ChevronRight className="text-foreground" />
                </div>
              </Link>
            </Button>

            <Button
              asChild
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
              <Link href="/about#curriculum" onClick={() => setOpen(false)}>
                <div className="group-hover:bg-foreground bg-secondary-foreground rounded-full h-10 w-10 flex items-center justify-center mr-4">
                  <Image
                    src={"/curriculum.svg"}
                    alt="mind-splash"
                    width={20}
                    height={20}
                  />
                </div>
                Our Curriculum
                <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible absolute right-4 h-5 w-5 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                  <ChevronRight className="text-foreground" />
                </div>
              </Link>
            </Button>
          </div>}
        </div>

        <div className="relative flex items-center">
          <Button asChild type="button" variant="nav">
            <Link href="/programs" onClick={closeAllMenus}>Our Programs</Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={programsOpen ? "Close Programs menu" : "Open Programs menu"}
            aria-expanded={programsOpen}
            onClick={() => {
              setProgramsOpen((value) => !value);
              setOpen(false);
              setBranchesOpen(false);
            }}
            className="text-white hover:bg-white/15 hover:text-white"
          >
              <ChevronDownIcon
                className={`size-4 transition-transform duration-300 ${
                  programsOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
          </Button>
          {programsOpen && <div className="absolute right-0 top-full z-[60] mt-3 grid w-[min(300px,90vw)] gap-1 rounded-2xl border border-border bg-white p-3 text-secondary shadow-xl">
            {[
              { label: "All Programs", href: "/programs", icon: BookOpen },
              { label: "IGCSE", href: "/programs/igcse", icon: GraduationCap },
              { label: "IB MYP", href: "/programs/ib-myp", icon: GraduationCap },
              { label: "IB DP", href: "/programs/ib-dp", icon: GraduationCap },
              { label: "Olympiads", href: "/programs/olympiads", icon: Trophy },
              { label: "Exam Preparation", href: "/programs/exam-preparation", icon: ClipboardList }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={closeAllMenus}
                className="group flex justify-between items-center w-full h-12 px-4 hover:bg-slate-100 rounded-lg font-normal text-base text-slate-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-800 group-hover:text-slate-900">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
              </Link>
            ))}
          </div>}
        </div>

        <Button asChild type="button" variant="nav">
          <Link href="/blog" className="flex items-center" onClick={closeAllMenus}>
            Blog
          </Link>
        </Button>

        <div className="relative flex items-center">
          <Button asChild type="button" variant="nav">
            <Link href="/branches" onClick={closeAllMenus}>Branches</Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={branchesOpen ? "Close Branches menu" : "Open Branches menu"}
            aria-expanded={branchesOpen}
            onClick={() => {
              setBranchesOpen((value) => !value);
              setOpen(false);
              setProgramsOpen(false);
            }}
            className="text-white hover:bg-white/15 hover:text-white"
          >
              <ChevronDownIcon
                className={`size-4 transition-transform duration-300 ${
                  branchesOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
          </Button>
          {branchesOpen && <div className="absolute right-0 top-full z-[60] mt-3 grid w-[min(350px,90vw)] gap-1 rounded-2xl border border-border bg-white p-3 text-secondary shadow-xl">
            {[
              { 
                label: "Khajaguda", 
                href: "/branches/khajaguda",
                address: "4th Floor, Arka Rochish, Khajaguda" 
              },
              { 
                label: "Kokapet", 
                href: "/branches/kokapet",
                address: "4th Floor, Raichandani Business Bay" 
              },
              { 
                label: "Financial District", 
                href: "/branches/financialdistrict",
                address: "Above ICICI Bank, My Home Vihanga Rd" 
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={closeAllMenus}
                className="group flex justify-start items-start w-full px-4 py-3 hover:bg-slate-100 rounded-lg font-normal text-base gap-3 text-slate-800 transition-colors"
              >
                <MapPin className="w-5 h-5 text-slate-600 group-hover:text-slate-900 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-slate-800 group-hover:text-slate-900 font-medium">{item.label}</span>
                  <span className="text-sm text-slate-500 group-hover:text-slate-700 mt-0.5">{item.address}</span>
                </div>
              </Link>
            ))}
          </div>}
        </div>

        <Button asChild type="button" variant="nav">
          <Link href="/contact" className="flex items-center" onClick={closeAllMenus}>
            Contact Us
          </Link>
        </Button>
        <Button asChild type="button" variant="navIcon">
          <Link href="https://wa.me/917075340810" target="_blank" rel="noopener noreferrer">
            <Image
              src={"/WhatsApp.svg"}
              alt="mind-splash"
              width={20}
              height={20}
            />
            WhatsApp
          </Link>
        </Button>
      </div>

      <MobileNavbar />
    </>
  );
}
