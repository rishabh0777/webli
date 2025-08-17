"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Image imports
import cardReveal1 from "@/assets/images/cardReveal1.jpg";
import cardReveal2 from "@/assets/images/cardReveal2.jpg";
import cardReveal3 from "@/assets/images/cardReveal3.jpg";
import cardReveal4 from "@/assets/images/cardReveal4.jpg";
import cardReveal5 from "@/assets/images/cardReveal5.jpg";
import cardReveal6 from "@/assets/images/cardReveal6.jpg";
import cardReveal7 from "@/assets/images/cardReveal7.jpg";

const images = [
  cardReveal1,
  cardReveal2,
  cardReveal3,
  cardReveal4,
  cardReveal5,
  cardReveal6,
  cardReveal7,
];

export default function ImageReveal() {
  const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true";
  const container = useRef(null);

  const tags = [
    "Innovation",
    "Motion",
    "Discovery",
    "Creativity",
    "Transformation",
    "Futuristic",
    "Immersive",
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
        if (!container.current) return;

        const cards = container.current.querySelectorAll(".card");
        const images = container.current.querySelectorAll(".image-inner");
        const totalCards = cards.length;

        // Initial positions
        gsap.set(cards[0], { y: "0%", scale: 1, rotate: 0 });
        gsap.set(images[0], { scale: 1 });

        for (let i = 1; i < totalCards; i++) {
          gsap.set(cards[i], { y: "100%", scale: 1, rotation: 0 });
          gsap.set(images[i], { scale: 1 });
        }

        const endValue = isMobile
          ? `+=${window.innerHeight * (totalCards - 1) * 0.6}`
          : `+=${window.innerHeight * (totalCards - 1) + 200}`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".sticky-card",
            start: "-30%",
            end: endValue,
            pin: true,
            scrub: 0.5,
          },
        });

        for (let i = 0; i < totalCards - 1; i++) {
          const currentCard = cards[i];
          const currentImage = images[i];
          const nextCard = cards[i + 1];

          tl.to(
            currentCard,
            {
              scale: isDesktop ? 0.5 : 0.8,
              rotation: isDesktop ? 10 : 5,
              duration: 1,
              ease: "linear",
            },
            i
          );

          tl.to(
            currentImage,
            {
              scale: isDesktop ? 1.5 : 1.2,
              duration: 1,
              ease: "linear",
            },
            i
          );

          tl.to(
            nextCard,
            {
              y: "0%",
              duration: 1,
              ease: "linear",
            },
            i
          );
        }

        ScrollTrigger.refresh();

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="w-full left-0 relative py-3 overflow-hidden 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Intro Section */}
      <section className="intro relative w-full md:h-[25vh] sm:h-[40vh] lg:h-[35vh] p-3" />

      {/* Sticky Cards */}
      <section className="sticky-card relative w-full h-[30vh] sm:h-[40vh] md:min-h-[80vh] lg:h-[40vh] p-2 flex justify-center">
        <section className="cards-container relative w-full sm:h-full md:h-auto rounded-lg overflow-hidden">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="card absolute top-0 left-1/2 -translate-x-1/2 
                         w-[80vw] md:w-[80vw] sm:h-full md:h-[80vh] 
                         flex items-center justify-center rounded-lg overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-full image-inner">
                {isProduction ? (
                  <Image
                    src={images[index]}
                    alt={tag}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                ) : (
                  <img
                    src={images[index].src}
                    alt={tag}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Tag text */}
              <h3 className="absolute text-white text-3xl font-bold z-10">
                {tag}
              </h3>
            </div>
          ))}
        </section>
      </section>

      {/* Spacer */}
      <div className="h-[10vh] md:h-[40vh]" />
    </section>
  );
}
