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
    <section className="relative mx-auto w-full overflow-hidden">
      <div className="overflow-hidden px-0 sm:px-6 py-1" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, i) => (
            <div key={i} className="min-w-full sm:min-w-[60%] md:min-w-[40%]">
              <div className="px-[13px]">
                <dl className="shadow-md rounded-[23px] min-h-[550px] bg-secondary-foreground">
                  <figure className="mb-2">
                    <Image
                      src={card.figure}
                      alt="mindsplash-highlight"
                      width={576}
                      height={220}
                      className="w-full h-auto"
                    />
                  </figure>

                  <dt className="pt-6 pl-[26px] pr-[10px] pb-[20px] flex items-center justify-start">
                    <p className="bg-[linear-gradient(125deg,_#FE4E13_0%,_#7C5CA7_100%)] flex justify-center items-center text-[20px] leading-[22px] tracking-[0px] text-foreground rounded-full h-10 w-10 mr-[10px]">
                      {card.id}
                    </p>
                    <p className="font-bold text-[26px] leading-[34px] tracking-[0px] text-secondary">
                      {card.title}
                    </p>
                  </dt>

                  {card.id === "4" ? (
                    <>
                      <Description
                        content={card.description}
                        className="ml-[26px] mr-8 !leading-[20px] !text-base"
                      />
                      <br />
                      <Description
                        content="To eliminate this gap, we have worked on our lesson content, worksheet content and examination content and made sure that they are of same level."
                        className="ml-[26px] mr-8 !leading-[20px] !text-base"
                      />
                    </>
                  ) : (
                    <Description
                      content={card.description}
                      className="ml-[26px] mr-8 !leading-[20px] !text-base"
                    />
                  )}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center md:justify-start mt-6 gap-5 ml-0 md:ml-[70px]">
        <Button
          onClick={scrollPrev}
          variant={"secondary"}
          size="icon"
          className="h-12 w-12 rounded-[30px] shadow"
          aria-label="Previous"
        >
          <ChevronLeft className="size-8" />
        </Button>
        <Button
          onClick={scrollNext}
          variant="secondary"
          size="icon"
          className="h-12 w-12 rounded-[30px] shadow"
          aria-label="Next"
        >
          <ChevronRight className="size-8" />
        </Button>
      </div>
    </section>
  );
}
