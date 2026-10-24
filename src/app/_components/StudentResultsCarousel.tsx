"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "@/components/ImageCard";

const results = [
  {
    image: "/1.jpeg",
    name: "Ishanvi Tupili",
    heading: "Ishanvi Tupili — IB DP 2026 result",
    programmeLabel: "Curriculum",
    programme: "IB DP 2026",
    resultLabel: "Result",
    result: "43/45",
    quote: "The structured study plans, personalized feedback, and focused revision sessions at MindSplash helped me strengthen my understanding of challenging concepts. Regular practice and exam-oriented preparation helped me approach the IB Diploma Programme assessments with greater confidence.",
    attribution: "Ishanvi Tupili",
  },
  {
    image: "/2.jpeg",
    name: "Yashica Reddy",
    heading: "Yashica Reddy — IB MYP 2026 result",
    programmeLabel: "Curriculum",
    programme: "IB MYP 2026",
    resultLabel: "Result",
    result: "53/56",
    quote: "The concept-based learning and regular practice sessions at MindSplash helped me understand complex topics more clearly. The detailed feedback and mock assessments helped me identify areas for improvement and prepare confidently for my IB MYP assessments.",
    attribution: "Yashica Reddy",
  },
  {
    image: "/3.jpeg",
    name: "Dakshesh",
    heading: "Dakshesh — Olympiad result, SAMSO 2026",
    programmeLabel: "Competition",
    programme: "SAMSO 2026 (Olympiads)",
    resultLabel: "Award",
    result: "Gold Medal",
    quote: "The problem-solving techniques and consistent practice at MindSplash helped me improve my logical thinking and tackle challenging Olympiad questions. The guidance and practice sessions strengthened my confidence and helped me work towards achieving a Gold Medal at SAMSO 2026.",
    attribution: "Dakshesh",
  },
  {
    image: "/4.png",
    name: "Shreya Singh",
    heading: "Shreya Singh — IB DP 2026 result",
    programmeLabel: "Curriculum",
    programme: "IB DP 2026",
    resultLabel: "Result",
    result: "41/45",
    quote: "The personalized guidance and structured revision at MindSplash helped me develop a stronger understanding of IB DP concepts. Regular assessments and constructive feedback helped me improve my exam technique, manage challenging questions, and prepare with confidence.",
    attribution: "Shreya Singh",
  },
  {
    image: "/5.jpeg",
    name: "Deekshitha",
    heading: "Deekshitha — IB MYP 2026 result",
    programmeLabel: "Curriculum",
    programme: "IB MYP 2026",
    resultLabel: "Result",
    result: "51/56",
    quote: "The interactive learning approach and regular assessments at MindSplash helped me build a strong foundation in key subjects. The step-by-step explanations and targeted feedback helped me improve my understanding and approach my IB MYP assessments with confidence.",
    attribution: "Deekshitha",
  },
  {
    image: "/6.png",
    name: "Yash Agarwal",
    heading: "Yash Agarwal — JEE Advanced 2026 result",
    programmeLabel: "Programme",
    programme: "JEE Advanced 2026",
    resultLabel: "All India Rank",
    result: "136",
    quote: "The focused preparation, advanced problem-solving practice, and systematic revision at MindSplash helped me tackle challenging JEE Advanced questions more effectively. The emphasis on conceptual clarity, time management, and mock tests helped me strengthen my preparation and work towards my engineering entrance goals.",
    attribution: "Yash Agarwal",
  },
];

export default function StudentResultsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeResult = results[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % results.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + results.length) % results.length);
  };
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % results.length);
  };

  return (
    <div className="mx-auto w-[90%] max-w-4xl">
      <div className="mb-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Show previous student result"
          className="flex size-10 items-center justify-center rounded-full border border-card-border bg-secondary-foreground text-secondary shadow-sm transition hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gradient-start"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Show next student result"
          className="flex size-10 items-center justify-center rounded-full border border-card-border bg-secondary-foreground text-secondary shadow-sm transition hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gradient-start"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <article className="flex flex-col items-center gap-8 text-left md:flex-row md:gap-12" aria-live="polite">
        <ImageCard image={activeResult.image} name={activeResult.name} zoomImage={activeIndex > 0} />
        <div className="min-h-[340px] w-full rounded-2xl border border-card-border bg-secondary-foreground p-6 shadow-sm md:flex-1">
          <h3 className="mb-3 text-xl font-bold text-secondary">{activeResult.heading}</h3>
          <p className="mb-3 text-sm leading-relaxed text-secondary/80">
            <strong>{activeResult.programmeLabel}:</strong> {activeResult.programme}<br />
            <strong>{activeResult.resultLabel}:</strong> {activeResult.result}.
          </p>
          {activeResult.quote && (
            <blockquote className="my-4 border-l-4 border-gradient-start pl-4 italic text-secondary/90">
              &ldquo;{activeResult.quote}&rdquo;
              <span className="mt-2 block text-sm font-semibold">— {activeResult.attribution}</span>
            </blockquote>
          )}
          <p className="mt-4 text-right text-sm font-medium text-secondary/70">
            {activeIndex + 1} / {results.length}
          </p>
        </div>
      </article>
    </div>
  );
}
