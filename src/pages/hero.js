import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const heroHeadingRef1 = useRef(null);
  const heroHeadingRef2 = useRef(null);
  const smallHeroTextRef1 = useRef(null);
  const smallHeroTextRef2 = useRef(null);
  const heroImageRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.add("b");
    tl.fromTo(
      heroHeadingRef1.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.inOut" },
      "b"
    );
    tl.fromTo(
      heroHeadingRef2.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.inOut" },
      "b"
    );
    tl.fromTo(
      smallHeroTextRef1.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.inOut" },
      "b"
    );
    tl.fromTo(
      smallHeroTextRef2.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.inOut" },
      "b"
    );
    tl.fromTo(
      heroImageRef.current,
      { y: 200, opacity: 0, scale: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.inOut", scale: 1 },
      "b"
    );
    tl.fromTo(
      scrollIndicatorRef.current,
      { y: -10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
        delay: 1,
      }
    );
  }, []);
  return (
    <section className="relative sm:min-h-[90svh] w-full px-[4vw] z-[50] top-[8vh] bg-black text-white">
      <section className="w-full mt-[11vh] flex justify-center items-center gap-4">
        <h1 ref={heroHeadingRef1} className="text-[10vw] opacity-0">
          Webli Creative
        </h1>
        <p
          ref={smallHeroTextRef1}
          className="text-[2.8vw] text-center opacity-0"
        >
          Based in
          <br /> India
        </p>
      </section>
      <section className="w-full flex justify-center items-center gap-4">
        <p
          ref={smallHeroTextRef2}
          className="text-[2.8vw] text-center w-[50vw] flex opacity-0"
        >
          We craft high-performance websites with stunning design and smooth
          functionality.
        </p>
        <h1 ref={heroHeadingRef2} className="text-[10vw] opacity-0">
          /Agency
        </h1>
      </section>
      <section className="w-full min-h-[20vh] mt-[8vh]">
        <img
          ref={heroImageRef}
          src="/images/hero3.jpg"
          alt="webli creative web development agency"
          className="w-full opacity-0"
        />
      </section>

      {/* Scroll Indicator */}
      <section className="flex flex-col items-center mt-[10vh]">
        <div
          ref={scrollIndicatorRef}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-black shadow-lg animate-bounce"
        >
          <i className="bx bx-chevron-down text-3xl"></i>
        </div>
      </section>
    </section>
  );
}
