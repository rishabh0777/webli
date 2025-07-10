"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import img1 from "@/assets/images/cardReveal1.jpg";
import img2 from "@/assets/images/cardReveal2.jpg";
import img3 from "@/assets/images/cardReveal3.jpg";
import img4 from "@/assets/images/cardReveal4.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal() {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const tags = ["Design", "Development", "Animation", "Branding"];
  const images = [img1, img2, img3, img4];

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");

    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
        anticipatePin: 1
      }
    });
  }, []);

  return (
    <section
      ref={triggerRef}
      className="w-full h-screen overflow-hidden relative bg-black text-white"
    >
      <div
        ref={containerRef}
        className="flex w-[400vw] h-screen relative"
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="card relative w-screen h-screen flex flex-col items-center justify-center"
          >
            <div className="relative w-[90%] h-[60vh] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={images[index]}
                alt={tag}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <h3 className="mt-6 text-[4vw] font-bold z-10">{tag}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
