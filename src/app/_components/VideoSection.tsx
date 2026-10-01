"use client";

import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative z-0 mx-auto mb-16 mt-12 w-[88%] max-w-5xl overflow-hidden rounded-[28px] border-8 border-[#FFFFFF1A] sm:mb-20 sm:mt-16 sm:border-12 md:mb-24 md:mt-20">
      {/* Video */}
      <video
        ref={videoRef}
        className="h-[280px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[460px]"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          suppressHydrationWarning
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white/70 rounded-full p-5 hover:bg-white transition">
            <Image
              src="/play.svg"
              alt="Play Video"
              width={77}
              height={77}
              className="text-primary"
            />
          </div>
        </button>
      )}

      {/* Gradient Overlay with Text */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-6">
        <h3 className="max-w-[420px] text-left text-2xl font-medium leading-8 tracking-[0px] sm:text-3xl sm:leading-9">
          Don’t just take our word for it, hear it from our students.
        </h3>

        {/* CTA Row */}
        <div className="mt-4 flex items-center gap-4 text-sm sm:mt-5">
          <Button
            type="button"
            variant="videoButton"
            size="videoButtonSize"
            className="group"
          >
            <div className="flex items-center justify-center bg-foreground rounded-full h-5 w-5 mr-2 opacity-100  transition-all duration-300 ease-out transform group-hover:translate-x-1">
              <ChevronRight className="flex items-center justify-center text-black opacity-50 font-semibold" />
            </div>
            Start the video
          </Button>
          <div className="flex items-center gap-1 text-left font-semibold text-base leading-[19px] tracking-[0px]">
            <div className="flex items-center justify-center bg-foreground rounded-full h-5 w-5">
              <ChevronRight className="text-black opacity-50 font-semibold" />
            </div>
            2 MIN
          </div>
        </div>
      </div>
    </section>
  );
}
