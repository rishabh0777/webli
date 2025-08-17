"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const headRef = useRef(null);
  const projectRefs = useRef([]); // Array of refs

  const projects = [
    { id: 1, name: "Lion's Den Cafe", url: 'https://lionsdencafe.vercel.app' },
    { id: 2, name: 'Founder Portfolio', url: 'https://rishabhsrivastava.vercel.app' },
    { id: 3, name: 'Timeless Vogue', url: 'https://timelessvogue.vercel.app' },
    { id: 4, name: 'SpiceSaga', url: 'https://spicesaga.vercel.app' },
  ];

  const redirectURL = (url) => {
    window.open(url.trim(), '_blank');
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.fromTo(
      headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    );

    projectRefs.current.forEach((ref, i) => {
      tl.fromTo(
        ref,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5 },
        `-=${0.8}` // small overlap
      );
    });
  }, []);

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-[80vh] px-[4vw] py-[8vh] 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <h1
        ref={headRef}
        className="sm:text-[10vw] md:text-[6vw] text-center font-bold"
      >
        Portfolio
      </h1>

      <section className="w-full h-full mt-[10vh]">
        {projects.map((project, index) => (
          <section
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="w-full flex justify-between items-center border-b border-gray-600 pb-2 mt-6 transition-all duration-500"
          >
            <h2 className="sm:text-[7.8vw] md:text-[3.5vw]">{project.name}</h2>
            <i
              onClick={() => redirectURL(project.url)}
              className="bx bx-right-arrow-alt sm:text-[8vw] md:text-[5vw] -rotate-45 cursor-pointer"
            ></i>
          </section>
        ))}
      </section>
    </section>
  );
}
