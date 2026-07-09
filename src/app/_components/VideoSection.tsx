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
    <section className="relative max-w-[90%] mt-18 md:mt-0 md:max-w-[70%] mx-auto rounded-[34px] overflow-hidden -top-30 border-[24px] border-[#FFFFFF1A]">
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-[638px] object-cover"
        poster="/students-thumbnail.jpg" // fallback poster before play
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
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
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
        <h3 className="text-4xl font-medium text-left leading-10 tracking-[0px] max-w-[500px]">
          Don’t just take our word for it, hear it from our students.
        </h3>

        {/* CTA Row */}
        <div className="flex items-center gap-5 mt-6 text-sm">
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
