"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

export default function CustomNavBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="hidden flex-wrap gap-2 md:flex">
        <Button type="button" variant="nav">
          <Link href="/" className="flex items-center">
            Home
          </Link>
        </Button>
        <Popover>
          <PopoverTrigger
            onClick={() => setOpen(!open)}
            className="flex rounded-md items-center px-4 bg-transparent text-foreground hover:text-accent-foreground cursor-pointer text-base text-left leading-[19px] tracking-[0px] font-normal"
          >
            <a href="/about">About Us</a>
            <ChevronDownIcon
              className={`relative top-[1px] ml-1 size-4 transition-transform duration-300 ${
                open ? "rotate-0" : "rotate-180"
              }`}
              aria-hidden="true"
            />
          </PopoverTrigger>
          <PopoverContent className="grid gap-2 md:grid-cols-2 bg-foreground py-4 px-2 rounded-[20px]">
            <Link href="/about#leadership-team">
              <Button
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
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
              </Button>
            </Link>

            <Link href="/about#our-teachers">
              <Button
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
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
              </Button>
            </Link>

            <Link href="/about#methodology">
              <Button
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
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
              </Button>
            </Link>

            <Link href="/about#results">
              <Button
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
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
              </Button>
            </Link>

            <Link href="/about#curriculum">
              <Button
                type="button"
                variant="navItem"
                size="xl"
                className="group flex justify-start pl-5 gap-0 items-center relative"
              >
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
              </Button>
            </Link>
          </PopoverContent>
        </Popover>

        <Button type="button" variant="nav">
          <Link href="/programs" className="flex items-center">
            Our Programs
          </Link>
        </Button>
        <Button type="button" variant="nav">
          <Link href="/contact" className="flex items-center">
            Contact Us
          </Link>
        </Button>
        <Link href="https://wa.me/917075340810">
          <Button type="button" variant="navIcon">
            <Image
              src={"/WhatsApp.svg"}
              alt="mind-splash"
              width={20}
              height={20}
            />
            WhatsApp
          </Button>
        </Link>
      </div>

      <MobileNavbar />
    </>
  );
}
