"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Description from "@/components/Description";

const cards = [
  {
    id: "3",
    figure: "/highlight_3.png",
    title: "One level up",
    description:
      "Students practise questions that extend beyond basic recall and ask them to apply concepts in new ways. This gives them experience explaining their reasoning and working through unfamiliar problems.",
  },
  {
    id: "4",
    figure: "/highlight_4.png",
    title: "Content Consistency",
    description:
      "We organise learning materials around the curriculum and assessment objectives students are working towards. This helps connect classroom lessons, guided practice, and exam preparation.",
  },
  {
    id: "5",
    figure: "/highlight_5.png",
    title: "Mindmaps",
    description:
      "Visual memory maps bring key ideas and their connections into one place. Students can use them to review a topic, practise recall, and identify areas that need more work.",
  },
  {
    id: "1",
    figure: "/highlight_6.png",
    title: "Mock Examinations",
    description:
      "Timed mock examinations let students practise pacing, apply subject knowledge, and review their answers under exam-style conditions. For IB MYP, students also practise with computer-based assessment tasks.",
  },
  {
    id: "2",
    figure: "/highlight_2.png",
    title: "In Sync with School",
    description:
      "Lesson planning takes account of the topics students are covering at school. This helps students connect classroom learning with additional practice and feedback.",
  },
];

export default function Carousal() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative mx-auto flex w-full items-center gap-2 sm:gap-4 lg:w-[90%]">
      <Button
        onClick={scrollPrev}
        variant="secondary"
        size="icon"
        className="z-20 h-10 w-10 shrink-0 rounded-full shadow sm:h-12 sm:w-12"
        aria-label="Previous curriculum item"
      >
        <ChevronLeft className="size-8" />
      </Button>
      <div className="min-w-0 flex-1 overflow-hidden px-1 py-1 sm:px-2" ref={emblaRef}>
        <div className="flex">
          {cards.map((card) => (
            <div key={card.id} className="min-w-full sm:min-w-[76%] md:min-w-[54%]">
              <div className="px-2 sm:px-3">
                <dl className="min-h-[500px] rounded-[20px] bg-secondary-foreground shadow-md">
                  <figure className="mb-2">
                    <Image
                      src={card.figure}
                      alt=""
                      width={576}
                      height={220}
                      className="h-auto w-full max-h-60 object-cover sm:max-h-72"
                    />
                  </figure>
                  <dt className="flex items-center justify-start px-4 pb-4 pt-5 sm:px-5">
                    <p className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(125deg,_#FE4E13_0%,_#7C5CA7_100%)] text-[18px] leading-[22px] tracking-[0px] text-foreground">
                      {card.id}
                    </p>
                    <p className="text-[21px] font-bold leading-7 tracking-[0px] text-secondary sm:text-[23px]">
                      {card.title}
                    </p>
                  </dt>
                  <Description
                    content={card.description}
                    className="mx-4 !leading-[20px] !text-sm sm:mx-5 sm:!text-base"
                  />
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={scrollNext}
        variant="secondary"
        size="icon"
        className="z-20 h-10 w-10 shrink-0 rounded-full shadow sm:h-12 sm:w-12"
        aria-label="Next curriculum item"
      >
        <ChevronRight className="size-8" />
      </Button>
    </section>
  );
}
