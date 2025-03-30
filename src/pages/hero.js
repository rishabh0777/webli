import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTextAnimation from "@/components/ScrollTextAnimation";

export default function Hero() {
  const heroHeadingRef1 = useRef(null);
  const heroHeadingRef2 = useRef(null);
  const smallHeroTextRef1 = useRef(null);
  const smallHeroTextRef2 = useRef(null);
  const heroImageRef = useRef(null);

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
  }, []);
  return (
    <section className="absolute sm:min-h-[100dvh] w-full mt-[8vh] px-[4vw] z-[50]">
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
      <section className="w-full h-[30vh] mt-[8vh]">
        <img
          ref={heroImageRef}
          src="/images/hero3.jpg"
          alt="webli creative web development agency"
          className="w-full opacity-0"
        />
      </section>
      <ScrollTextAnimation />
    </section>
  );
}
