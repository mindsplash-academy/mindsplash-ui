import React from "react";
import ImageCard from "./ImageCard";

export default function Marquee({
  cards,
}: {
  cards: { figure: string; title: string }[];
}) {
  // Duplicate the cards twice to ensure seamless infinite scroll (total 2 sets)
  // The animation translates by -50%, which is exactly 1 set of cards.
  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="relative flex w-full max-w-[95%] mx-auto overflow-hidden group py-4">
      {/* Left gradient fade */}
      <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
      
      {/* Right gradient fade */}
      <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

      <div className="flex shrink-0 gap-4 sm:gap-6 animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicatedCards.map((card, i) => (
          <div key={i} className="flex-none w-[194px]">
            <div className="transform transition-transform duration-300 hover:-translate-y-2">
              <ImageCard image={card.figure} name={card.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
