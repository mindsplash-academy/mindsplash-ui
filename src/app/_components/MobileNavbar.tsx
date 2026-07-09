"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function MobileNavbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    const [path, hash] = href.split("#");

    setSheetOpen(false);

    if (pathname === path && hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
    } else {
      router.push(href, { scroll: false });

      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 500);
    }
  };

  return (
    <div className="md:hidden flex items-center">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[300px] sm:w-[400px] bg-gradient-to-r from-gradient-start to-gradient-end text-white"
        >
          <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle>
          <nav className="flex flex-col items-start mt-10 text-base font-medium">
            {/* Home */}
            <Button
              type="button"
              variant="nav"
              className="pl-5"
              onClick={() => {
                setSheetOpen(false);
              }}
            >
              <Link
                href="/"
                className="flex items-center gap-3 hover:underline"
              >
                Home
              </Link>
            </Button>

            {/* About Us */}
            <div className="flex flex-col justify-center">
              <Button
                type="button"
                variant="nav"
                onClick={() => setAboutOpen((prev) => !prev)}
                className="flex items-center  justify-start gap-3  focus:outline-none bg-transparent border-transparent "
              >
                <div className="flex items-center gap-3 pl-2">About Us</div>
                {aboutOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>

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
                    <Link href={item.href} key={item.label}>
                      <Button
                        key={item.label}
                        className="flex items-center gap-2 bg-transparent border-transparent text-white hover:bg-transparent"
                        onClick={() => handleNavClick(item.href)}
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="brightness-0 invert"
                        />
                        {item.label}
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs */}
            <Button
              className="bg-transparent border-transparent pl-5"
              type="button"
              variant="nav"
              onClick={() => {
                setSheetOpen(false);
              }}
            >
              <Link
                href="/programs"
                className="flex items-start gap-3 hover:underline"
              >
                Our Programs
              </Link>
            </Button>

            {/* Contact */}
            <Button
              type="button"
              variant="nav"
              className="bg-transparent border-transparent pl-5"
              onClick={() => {
                setSheetOpen(false);
              }}
            >
              <Link
                href="/contact"
                className="flex gap-3 justify-start hover:underline"
              >
                Contact Us
              </Link>
            </Button>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/917075340810"
              className="flex items-center gap-3 hover:underline"
            >
              <Button
                type="button"
                variant="nav"
                className="bg-transparent border-transparent pl-5"
                onClick={() => {
                  setSheetOpen(false);
                }}
              >
                <Image
                  src="/WhatsApp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                WhatsApp
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
