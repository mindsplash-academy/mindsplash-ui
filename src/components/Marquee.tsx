import ImageCard from "./ImageCard";

export default function Marquee({
  cards,
}: {
  cards: { figure: string; title: string }[];
}) {
  const duplicatedCards = [...cards, ...cards];

  return (
    <div
      className="group relative mx-auto flex w-full max-w-[95%] overflow-hidden py-4"
      aria-label="Archived student results"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-24" />
      <div className="flex w-max shrink-0 gap-4 animate-[marquee_24s_linear_infinite] group-hover:[animation-play-state:paused] sm:gap-6">
        {duplicatedCards.map((card, index) => (
          <div key={`${card.title}-${index}`} className="w-[194px] flex-none">
            <div className="transition-transform duration-300 hover:-translate-y-2">
              <ImageCard image={card.figure} name={card.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
