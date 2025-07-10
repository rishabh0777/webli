"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const topTextRef = useRef([]);
  const bottomTextRef = useRef([]);
  const arrowRef = useRef(null);

  useEffect(() => {
    const waveAnimation = (chars) => {
      chars.forEach((char, i) => {
        gsap.to(char, {
          y: 10,
          x: 5,
          rotation: 5,
          duration: 0.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.05,
        });
      });
    };

    waveAnimation(topTextRef.current);
    waveAnimation(bottomTextRef.current);

    // Bouncing arrow
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  }, []);

  const renderText = (text, refArray) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        ref={(el) => (refArray.current[i] = el)}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      id="home"
      className="relative sm:min-h-[92vh] md:min-h-[100vh] w-full px-[4vw] z-[50] bg-[#060606] flex justify-center items-center text-white overflow-hidden"
    >
      <div className="w-full sm:min-h-[10vh] md:min-h-[40vh] flex flex-col text-[7vw] relative whitespace-nowrap font-bold">
        <h1 className="absolute top-0 left-[30%] -translate-x-[30%] tracking-[0.1em] flex gap-[0.1em]">
          {renderText("WE BUILD", topTextRef)}
        </h1>
        <h1 className="absolute left-[70%] -translate-x-[70%] bottom-0 tracking-[0.1em] flex gap-[0.1em]">
          {renderText("YOU LAUNCH", bottomTextRef)}
        </h1>
      </div>

      {/* Remix Icon Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-3xl">
        <i ref={arrowRef} className="ri-arrow-down-line opacity-70" />
      </div>
    </section>
  );
}
