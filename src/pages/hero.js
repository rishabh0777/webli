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
        y:-500,
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
    <section className="relative sm:min-h-[92svh] w-full px-[4vw] z-[50] top-[8vh] bg-[#060606] text-white">
      {/* Header Section */}
      <section className="w-full min-h-[50vh] mt-[10vh] px-[2vw]">
        <section className="flex items-center justify-center gap-4 overflow-hidden">
          <h1 ref={mainText1Ref} className="text-[8vw] font-semibold opacity-0">Webli Creative</h1>
        <p ref={paraText1Ref} className="text-[2.9vw] leading-[2.9vw] text-center opacity-0 text-gray-300">Based in<br />India</p>
        </section>
        <section className="flex items-center justify-center gap-2 overflow-hidden">
        <p ref={paraText2Ref} className="text-[2.9vw] leading-[2.9vw] text-center opacity-0 text-gray-300">We carft high-performance websites<br /> with stunning design and smooth<br /> functionality.</p>
        <h1 ref={mainText2Ref} className="text-[8vw] font-semibold opacity-0">/Agency</h1>
      </section>
      <section className="w-full rounded-lg overflow-hidden mt-[8vh]">
        <img ref={imageRef} className="w-full h-full object-cover opacity-0" src="/images/hero3.jpg" alt="" />

      </section>
      </section>
     

      {/* Scroll Indicator */}
      <section className="flex flex-col items-center mt-[10vh]">
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
