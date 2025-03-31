import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function HowWeWork() {
  const imageRef = useRef(null);
  const headRef = useRef(null);
  const mainTextRef = useRef(null);

  let tl = gsap.timeline();

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // When 80% of the viewport reaches the section
          toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
        },
      }
    );

    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%", // When 80% of the viewport reaches the section
          toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="relative w-full sm:min-h-[100dvh] px-[4vw]">
        <section className="w-full min-h-[22vh] mt-[12vh]">
          <img
            ref={imageRef}
            alt="webli creative web development agency"
            src="/images/hero.jpg"
            className="w-full"
          />
        </section>
        <h3 ref={headRef} className="text-[4vw] mt-[5vh]">
          How we work
        </h3>
        <section className="pb-[2vh] mt-8">
          <h1 className="text-[23vw]">Think.</h1>
        </section>
        <section className="pb-[2vh]">
          <h1 className="text-[23vw]">Build.</h1>
        </section>
        <section className="pb-[2vh]">
          <h1 className="text-[23vw]">Grow.</h1>
        </section>
      </section>
    </>
  );
}
