"use client";

import * as React from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type PeekMultiCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  /** Fixed card width (default = 540px) */
  itemWidth?: number;
  /** Gap between cards (default = 24px) */
  gap?: number;
  /** Left/right peek in px (default = 20% of itemWidth, i.e., 108px if 540px) */
  peekPx?: number;
  /** Which snap to start from (default = 1 → shows 2nd card fully, 1st & last peek visible) */
  initialIndex?: number;
  loop?: boolean;
};

export function PeekMultiCarousel<T>({
  items,
  renderItem,
  className,
  itemWidth = 540,
  gap = 24,
  peekPx,
  initialIndex = 1,
  loop = false,
}: PeekMultiCarouselProps<T>) {
  const peek =
    typeof peekPx === "number" ? peekPx : Math.round(itemWidth * 0.2);
  const viewportMaxWidth = 3 * itemWidth + 2 * gap + 2 * peek; // 3 full + gaps + 2 peeks

  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;
    api.scrollTo(initialIndex, true);
  }, [api, initialIndex]);

  return (
    <div
      className={`relative w-full ${className ?? ""}`}
      style={{
        maxWidth: viewportMaxWidth,
        marginInline: "auto",
        paddingLeft: peek,
        paddingRight: peek,
      }}
    >
      <Carousel
        opts={{
          align: "start",
          loop,
          containScroll: "trimSnaps",
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent
          className="flex"
          style={{
            marginLeft: -peek,
            marginRight: -peek,
            gap,
          }}
        >
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="shrink-0"
              style={{ width: itemWidth }}
            >
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom button placement */}
        <div className="absolute -bottom-21 left-[70px] flex gap-2">
          <CarouselPrevious className="relative static" />
          <CarouselNext className="relative static" />
        </div>
      </Carousel>
    </div>
  );
}
