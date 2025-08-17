"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import service1 from "@/assets/images/service1.jpg";
import service2 from "@/assets/images/service2.jpg";
import service3 from "@/assets/images/service3.jpg";
import service4 from "@/assets/images/service4.jpg";
import service5 from "@/assets/images/service5.jpg";

const images = [service1, service2, service3, service4, service5];

export default function HorizontalScrollText() {
  const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true";

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
     const cards = [
  { id: "#card1", x: -200, y: -50, endX: -3000, rotate: 28, z: 10 },  
  { id: "#card2", x: 300,  y: -150, endX: -3500, rotate: -15, z: 20 }, 
  { id: "#card3", x: 600,  y: -80, endX: -13000, rotate: 25, z: 15 },   
  { id: "#card4", x: 1400, y: -200, endX: -15000, rotate: -25, z: 25 }, 
  { id: "#card5", x: 600, y: -100, endX: -23000, rotate: 30, z: 5 },   
];


      ScrollTrigger.create({
        trigger: ".wrapper",
        start: "top top",
        end: "+=950vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          gsap.to(".wrapper", {
            x: `${-900 * self.progress}vw`,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });

      cards.forEach((card) => {
        gsap.set(card.id, {
          x: card.x,
          y: card.y,
          zIndex: card.z,
          rotate: 0,
        });

        ScrollTrigger.create({
          trigger: card.id,
          start: "top top",
          end: "+=1200vh",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(card.id, {
              x: card.x + card.endX * self.progress,
              rotate: `${card.rotate * self.progress}deg`,
              duration: 1,
              ease: "power3.out",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    });

    mm.add("(max-width: 767px)", () => {
       const cards = [
        { id: "#card1", x: 0, y: -100, endX: -2000, rotate: 45, z: 10 },
        { id: "#card2", x: 500, y: -10, endX: -3000, rotate: -35, z: 20 },
        { id: "#card3", x: 800, y: -120, endX: -6000, rotate: -45, z: 15 },
        { id: "#card4", x: -500, y: -80, endX: -1400, rotate: -45, z: 25 },
        { id: "#card5", x: -300, y: -60, endX: -2000, rotate: 30, z: 5 },
      ];

      ScrollTrigger.create({
        trigger: ".wrapper",
        start: "top top",
        end: "+=950vh",
        scrub: 2,
        pin: true,
        onUpdate: (self) => {
          gsap.to(".wrapper", {
            x: `${-950 * self.progress}vw`,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });

      cards.forEach((card) => {
        gsap.set(card.id, {
          x: card.x,
          y: card.y,
          zIndex: card.z,
          rotate: 0,
        });

        ScrollTrigger.create({
          trigger: card.id,
          start: "top top",
          end: "+=1250vh",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(card.id, {
              x: card.x + card.endX * self.progress,
              rotate: `${card.rotate * self.progress}deg`,
              duration: 1,
              ease: "power3.out",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    });
  });

  return (
    <section
      className="relative w-full sm:h-[250vh] md:h-[190vh] overflow-hidden 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <section className="wrapper relative w-[900vw] sm:h-[80vh] md:h-screen will-change-transform sm:p-[10em] md:p-[5em]">
        <h1 className="sm:text-[52vw] h-0 md:text-[22vw] font-black whitespace-nowrap text-center text-white">
          WEBSITES THAT SPEAKS
        </h1>

        {images.map((image, i) => (
          <div
            key={i}
            id={`card${i + 1}`}
            className="card absolute sm:w-[45vw] sm:h-[30vh] md:w-[20vw] md:h-[45vh] overflow-hidden rounded-lg"
          >
            <div className="relative w-full h-full">
              {isProduction ? (
                <Image
                  src={image}
                  alt={`service${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 20vw"
                  priority={i === 0}
                />
              ) : (
                <img
                  src={image?.src || image}
                  alt={`service${i + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
