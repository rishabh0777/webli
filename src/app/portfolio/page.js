"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const headRef = useRef(null);
  const paraRef = useRef(null); // ✅ new ref for <p>
  const projectRefs = useRef([]); // Array of refs

  const projects = [
    { id: 1, name: "Lion's Den Cafe", url: "https://lionsdencafe.vercel.app" },
    { id: 2, name: "Founder Portfolio", url: "https://rishabhsrivastava.vercel.app" },
    { id: 3, name: "Timeless Vogue", url: "https://timelessvogue.vercel.app" },
    { id: 4, name: "SpiceSaga", url: "https://spicesaga.vercel.app" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Animate heading
    tl.fromTo(headRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });

    // ✅ Animate paragraph right after heading
    tl.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6" // small overlap with heading
    );

    // Animate each project
    projectRefs.current.forEach((ref) => {
      tl.fromTo(
        ref,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5 },
        `-=${0.8}` // overlap for smoother flow
      );
    });
  }, []);

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-[80vh] px-[4vw] py-[8vh] 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      {/* h2 for hierarchy (since h1 exists on homepage) */}
      <h2
        ref={headRef}
        className="sm:text-[10vw] md:text-[6vw] text-center font-bold"
      >
        Portfolio
      </h2>

      {/* ✅ paragraph now animated */}
      <p
        ref={paraRef}
        className="text-center text-gray-400 mt-4 max-w-2xl mx-auto"
      >
        Explore our recent web projects — from cafes to fashion brands, each
        website is built with performance, animation, and business growth in
        mind.
      </p>

      <ul className="w-full h-full mt-[10vh] space-y-6">
        {projects.map((project, index) => (
          <li
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="w-full flex justify-between items-center border-b border-gray-600 pb-2 transition-all duration-500"
          >
            <h3 className="sm:text-[7.8vw] md:text-[3.5vw] font-semibold">
              {project.name}
            </h3>

            {/* Anchor tag for SEO + accessibility */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} project`}
              className="sm:text-[8vw] md:text-[5vw] -rotate-45 cursor-pointer hover:text-indigo-400 transition-colors"
            >
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
