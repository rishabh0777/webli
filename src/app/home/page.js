"use client";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const scrollIndicatorRef = useRef(null);
  const imageRef = useRef(null);
  const mainText1Ref = useRef(null);
  const mainText2Ref = useRef(null);
  const paraText1Ref = useRef(null);
  const paraText2Ref = useRef(null);

  

  useGSAP(() => {
    let tl = gsap.timeline();
   

    tl.fromTo(
      imageRef.current,{
        opacity: 0,
        scale:0.2,
        y:-100,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      })
      tl.add("a");
      tl.fromTo(
        mainText1Ref.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }, 'a'
      );
      tl.fromTo(
        mainText2Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },'a'
      );
      tl.add('b')

      tl.fromTo(
        paraText1Ref.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },'b'
      );
      tl.fromTo(
        paraText2Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },'b'
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
    <section id="home" className="relative sm:min-h-[92svh] md:min-h-[100svh] w-full px-[4vw] z-[50] sm:top-[8vh] md:top-0 bg-[#060606] text-white overflow-hidden">
      {/* Header Section */}
      <section className="w-full min-h-[50vh] sm:mt-[10vh] md:mt-[8vh] px-[2vw]">
        <section className="flex items-center justify-center gap-4 overflow-hidden">
          <h1 ref={mainText1Ref} className="sm:text-[8vw] md:text-[4vw] font-semibold opacity-0">Webli Creative</h1>
        <p ref={paraText1Ref} className="sm:text-[2.9vw] sm:leading-[2.9vw] md:text-[1.2vw] md:leading-none text-center opacity-0 text-gray-300">Based in<br />India</p>
        </section>
        <section className="flex items-center justify-center gap-2 overflow-hidden">
        <p ref={paraText2Ref} className="sm:text-[2.9vw] sm:leading-[2.9vw] md:text-[1.2vw] md:leading-none text-center opacity-0 text-gray-300">We carft high-performance websites<br /> with stunning design and smooth<br /> functionality.</p>
        <h1 ref={mainText2Ref} className="sm:text-[8vw] md:text-[4vw] font-semibold opacity-0">/Agency</h1>
      </section>
      <section className="sm:w-[90%] md:h-[40%] md:w-[50%] absolute md:top-[30%] left-1/2 -translate-x-1/2 rounded-lg overflow-hidden mt-[8vh]">
        <img ref={imageRef} className="w-full h-full object-cover opacity-0" src="/images/hero3.jpg" alt="" />

      </section>
      </section>
     

      {/* Scroll Indicator */}
      <section className="flex flex-col items-center sm:mt-[10vh] md:mt-[28vh]">
        <div
          ref={scrollIndicatorRef}
          className="w-14 h-14 opacity-0 flex items-center justify-center rounded-full bg-white text-black shadow-lg animate-bounce"
        >
          <i className="bx bx-chevron-down text-3xl"></i>
        </div>
      </section>
      
    </section>
  );
}
