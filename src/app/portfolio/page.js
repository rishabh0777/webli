"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

import ProjectImage from "../../components/projectImage";

import FounderPortfolio from "../../assets/images/foundersPortfolio.png";
import LionsDenCafe from "../../assets/images/lionsDenCafe.png";
import TimelessVogue from "../../assets/images/timelessVogue.png";
import SereneStays from "../../assets/images/sereneStays.png";
import JerdonVilla from "../../assets/images/jerdonVilla.png";

export default function Portfolio() {
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const projectRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const projects = [
    { id: 1, name: "Lion's Den Cafe", url: "https://lionsdencafe.vercel.app", image: LionsDenCafe },
    { id: 2, name: "Founder Portfolio", url: "https://rishabhsrivastava.vercel.app", image: FounderPortfolio },
    { id: 3, name: "Timeless Vogue", url: "https://timelessvogue.vercel.app", image: TimelessVogue },
    { id: 4, name: "Serene Stays", url: "https://serenestays.vercel.app", image: SereneStays },
    { id: 5, name: "Jerdon Villa", url: "https://jerdonvilla.vercel.app", image: JerdonVilla },
  ];

  useEffect(() => {
    // detect if it's a touch device
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.fromTo(headRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
    tl.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6"
    );

    projectRefs.current.forEach((ref) => {
      tl.fromTo(ref, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5 }, "-=0.8");
    });
  }, []);

  const handleProjectClick = (index) => {
    if (isTouchDevice) {
      // For touch screens: tap once to show image, tap again to open link
      if (activeIndex === index) {
        window.open(projects[index].url, "_blank");
      } else {
        setActiveIndex(index);
      }
    } else {
      // On desktop: open immediately
      window.open(projects[index].url, "_blank");
    }
  };

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-[80vh] px-[4vw] py-[8vh] 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <h2 ref={headRef} className="sm:text-[10vw] md:text-[6vw] text-center font-bold">
        Portfolio
      </h2>

      <p ref={paraRef} className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
        Explore our recent web projects — from cafes to fashion brands, each
        website is built with performance, animation, and business growth in mind.
      </p>

      <ul className="w-full h-full mt-[10vh] space-y-6">
        {projects.map((project, index) => (
          <li
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="relative w-full flex justify-between items-center border-b border-gray-600 pb-2 transition-all duration-500 bg-transparent overflow-visible cursor-pointer select-none"
            onMouseEnter={() => !isTouchDevice && setActiveIndex(index)}
            onMouseLeave={() => !isTouchDevice && setActiveIndex(null)}
            onClick={() => handleProjectClick(index)}
          >
            {/* ✅ Hover / Tap Image */}
            <ProjectImage projectDetails={project} active={activeIndex === index} />

            <h3 className="sm:text-[7.8vw] md:text-[3vw] font-semibold">
              {project.name}
            </h3>

            <i className="bx bx-right-arrow-alt sm:text-[8vw] md:text-[4vw] -rotate-45 hover:text-indigo-400 transition-colors"></i>
          </li>
        ))}
      </ul>
    </section>
  );
}
