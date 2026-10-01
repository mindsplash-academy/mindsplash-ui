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
      "At Mindsplash Academy, we strongly believe that students shall practice questions of one level up! Over years, we have seen that this approach has helped our students to be ready for any surprises during their exams! Given that the syllabus of many international curricula and their examination trends are changing frequently, it is important that our students leave no stone unturned with respect to the content they get to work on. They shall be ready for any format!",
  },
  {
    id: "4",
    figure: "/highlight_4.png",
    title: "Content Consistency",
    description:
      "No ‘content gap’ between board and boards!Many a times we see students complaining “nothing that was taught in class came in exams!” OR “nothing that I practiced from worksheets came in exams!” - We are sure this problem is more prevalent with respect to international curricula like IB/GCSE. This is due to ‘content gap’ between class board to boards (board examinations",
  },
  {
    id: "5",
    figure: "/highlight_5.png",
    title: "Mindmaps",
    description:
      "Our Curriculum has been one of our strong pillars of success. Having a rich experience of developing content for many corporates across the globe, we at Mindsplash academy design new lesson materials which are very closer to exam-style questions.",
  },
  {
    id: "1",
    figure: "/highlight_6.png",
    title: "Mock Examinations",
    description:
      "Almost all the students preparing for IB/GCSE exams take previous year questions during their mock examinations at schools! These will not add any freshness or surprise or anxiety element to the students as they might have already answered these during their preparation. The actual examination questions are not repeated. In order to plug in these factors, we prepare our own questions which are one level up so that students are habituated to handling timeand emotions, both at ease! For IB MYP, we conduct examinations on digital platform similar to eAssessment platform.",
  },
  {
    id: "2",
    figure: "/highlight_2.png",
    title: "In Sync with School",
    description:
      "Our Curriculum has been one of our strong pillars of success. Having a rich experience of developing content for many corporates across the globe, we at Mindsplash academy design new lesson materials which are very closer to exam-style questions.",
  },
];

export default function Carousal() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="relative mx-auto flex w-full items-center gap-2 sm:gap-4 lg:w-[90%]">
      <Button onClick={scrollPrev} variant="secondary" size="icon" className="z-20 h-10 w-10 shrink-0 rounded-full shadow sm:h-12 sm:w-12" aria-label="Previous curriculum item"><ChevronLeft className="size-8" /></Button>
      <div className="min-w-0 flex-1 overflow-hidden px-1 py-1 sm:px-2" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, i) => (
            <div key={i} className="min-w-full sm:min-w-[76%] md:min-w-[54%]">
              <div className="px-2 sm:px-3">
                <dl className="shadow-md rounded-[20px] min-h-[500px] bg-secondary-foreground">
                  <figure className="mb-2">
                    <Image
                      src={card.figure}
                      alt="mindsplash-highlight"
                      width={576}
                      height={220}
                      className="h-auto w-full max-h-60 object-cover sm:max-h-72"
                    />
                  </figure>

                  <dt className="flex items-center justify-start px-4 pb-4 pt-5 sm:px-5">
                    <p className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(125deg,_#FE4E13_0%,_#7C5CA7_100%)] text-[18px] leading-[22px] tracking-[0px] text-foreground">
                      {card.id}
                    </p>
                    <p className="font-bold text-[21px] leading-7 tracking-[0px] text-secondary sm:text-[23px]">
                      {card.title}
                    </p>
                  </dt>

                  {card.id === "4" ? (
                    <>
                      <Description
                        content={card.description}
                        className="mx-4 !leading-[20px] !text-sm sm:mx-5 sm:!text-base"
                      />
                      <br />
                      <Description
                        content="To eliminate this gap, we have worked on our lesson content, worksheet content and examination content and made sure that they are of same level."
                        className="mx-4 !leading-[20px] !text-sm sm:mx-5 sm:!text-base"
                      />
                    </>
                  ) : (
                    <Description
                      content={card.description}
                      className="mx-4 !leading-[20px] !text-sm sm:mx-5 sm:!text-base"
                    />
                  )}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={scrollNext} variant="secondary" size="icon" className="z-20 h-10 w-10 shrink-0 rounded-full shadow sm:h-12 sm:w-12" aria-label="Next curriculum item"><ChevronRight className="size-8" /></Button>
    </section>
  );
}
