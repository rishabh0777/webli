import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function HowWeWork() {
  const imageRef = useRef(null);
  const headRef = useRef(null);
  const mainTextRef1 = useRef(null);
  const mainTextRef2 = useRef(null);
  const mainTextRef3 = useRef(null);

  let tl = gsap.timeline();

  useGSAP(() => {
   
   
    gsap.fromTo(
      mainTextRef1.current, { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mainTextRef1.current,
          start: "top 60%", 
          toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      mainTextRef2.current, { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mainTextRef2.current,
          start: "top 60%", 
          toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      mainTextRef3.current, { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mainTextRef3.current,
          start: "top 60%", 
          toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="relative w-full sm:min-h-[50svh] px-[4vw] bg-[#060606]">
        
       
        <section className="pb-[2vh] mt-8 overflow-hidden">
          <h1 ref={mainTextRef1} className="text-[20vw] mt-[14vh]">Think.</h1>
        </section>
        <section className="pb-[2vh]">
          <h1 ref={mainTextRef2} className="text-[20vw] overflow-hidden">Build.</h1>
        </section>
        <section className="pb-[2vh]">
          <h1 ref={mainTextRef3} className="text-[20vw] overflow-hidden">Grow.</h1>
        </section>
      </section>
    </>
  );
}
