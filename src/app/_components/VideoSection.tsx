"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch((error: unknown) => {
        console.error("Homepage video playback failed:", error);
      });
    };

    video.addEventListener("ended", playVideo);
    playVideo();

    return () => video.removeEventListener("ended", playVideo);
  }, []);

  return (
    <section className="relative z-0 mx-auto mb-16 mt-12 w-[88%] max-w-5xl sm:mb-20 sm:mt-16 md:mb-24 md:mt-20">
      <div className="relative overflow-hidden rounded-[28px] border-8 border-[#FFFFFF1A] sm:border-12">
        <video
          ref={videoRef}
          className="video-section-player h-[280px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[460px]"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="mt-4 text-left text-[21px] font-semibold leading-7 tracking-[0px] text-secondary sm:mt-5 sm:text-[23px] md:text-[26px] md:leading-[34px]">
        Don’t just take our word for it, hear it from our students.
      </h3>
    </section>
  );
}
