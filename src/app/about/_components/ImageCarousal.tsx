"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "@/components/ImageCard";

export default function ImageCarousal({
  maxWidth = "max-w-4xl",
  cards,
}: {
  maxWidth?: string;
  cards: { figure: string; title: string }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
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
    <div className="relative mx-auto w-full overflow-x-hidden overflow-y-visible">
      <div className={`relative mx-auto ${maxWidth}`}>
        {/* viewport that shows multiple cards with partial visibility */}
        <div className="relative overflow-hidden px-6 sm:px-12" ref={emblaRef}>
          <div className="flex -mx-3">
            {cards.map((card, i) => (
              <div key={i} className="flex-[0_0_auto] min-w-0 px-3">
                <div className="transform transition-transform duration-300">
                  <ImageCard image={card.figure} name={card.title} />
                </div>
              </div>
            ))}
          </div>

          {/* Left minimal fade gradient */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10"></div>

          {/* Right minimal fade gradient */}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Navigation arrows */}

      <div
        className={`flex justify-center gap-5 mt-5 md:mx-auto md:justify-start 
      ${
        maxWidth === "max-w-4xl" ? "md:max-w-4xl md:pl-16" : "md:pl-20 lg:pl-30"
      }`}
      >
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
    </div>
  );
}
