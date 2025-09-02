"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const topTextRef = useRef([]);
  const bottomTextRef = useRef([]);
  const arrowRef = useRef(null);

  useEffect(() => {
    const flagEntrance = (chars, delayStart = 0) => {
      const tl = gsap.timeline({ delay: delayStart });

      tl.fromTo(
        chars,
        {
          y: () => gsap.utils.random(-100, 100),
          x: () => gsap.utils.random(-100, 100),
          opacity: 0,
          rotate: () => gsap.utils.random(-90, 90),
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.04,
        }
      );

      tl.add(() => waveAnimation(chars), "-=0.2");
    };

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
          opacity: 1,
        });
      });
    };

    flagEntrance(topTextRef.current, 0);
    flagEntrance(bottomTextRef.current, 0.4);

    gsap.fromTo(
      arrowRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 0.7,
        delay: 1.5,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.to(arrowRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  const renderText = (text, refArray) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        ref={(el) => (refArray.current[i] = el)}
        className="inline-block opacity-0"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      id="home"
      className="relative sm:min-h-[92vh] md:min-h-[100vh] w-full px-[4vw] z-[50] 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 
                 flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* ✅ SEO-friendly hidden H1 */}
      <h1 className="sr-only">
        Webli Studio - Web Development Agency for Startups and Small Businesses
      </h1>

      {/* Animated Headline */}
      <div className="w-full sm:min-h-[10vh] md:min-h-[40vh] flex flex-col text-[7vw] relative whitespace-nowrap font-bold">
        <h1 className="absolute top-0 left-[30%] -translate-x-[30%] tracking-[0.1em] flex gap-[0.1em]">
          {renderText("WE BUILD", topTextRef)}
        </h1>
        <h1 className="absolute left-[70%] -translate-x-[70%] bottom-0 tracking-[0.1em] flex gap-[0.1em]">
          {renderText("YOU LAUNCH", bottomTextRef)}
        </h1>
      </div>

      {/* ✅ SEO Intro Paragraph (readable content for bots) */}
      <p className="mt-6 max-w-2xl sr-only text-center text-gray-300 text-base md:text-lg px-4">
        At <strong>Webli Studio</strong>, we create{" "}
        <strong>modern, animated, and SEO-optimized websites</strong> that help{" "}
        <strong>startups</strong> and <strong>small businesses</strong> launch
        faster and grow smarter. Our expertise in{" "}
        <strong>MERN stack development</strong>,{" "}
        <strong>custom website design</strong>, and{" "}
        <strong>responsive web solutions</strong> ensures your digital presence
        stands out and converts.
      </p>

      {/* Scroll Down Arrow */}
      <div
        ref={arrowRef}
        className="absolute bottom-[10vh] opacity-0 left-1/2 -translate-x-1/2 text-white text-3xl"
      >
        <i className="ri-arrow-down-line opacity-70" />
      </div>
    </section>
  );
}
