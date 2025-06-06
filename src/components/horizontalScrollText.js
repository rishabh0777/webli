import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollText() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    const cards = [
      { id: "#card1", x: 0, y: -100, endX: -2000, rotate: 45, z: 10 },
      { id: "#card2", x: 500, y: -10, endX: -3000, rotate: -35, z: 20 },
      { id: "#card3", x: 800, y: -120, endX: -6000, rotate: -45, z: 15 },
      { id: "#card4", x: -500, y: -80, endX: -7000, rotate: -45, z: 25 },
      { id: "#card5", x: -300, y: -60, endX: -16000, rotate: 30, z: 5 },
    ];

    mm.add('(min-width: 768px)', () => {
      // Pin & scroll the wrapper horizontally
      ScrollTrigger.create({
        trigger: '.wrapper',
        start: 'top top',
        end: '+=950vh',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          gsap.to('.wrapper', {
            x: `${-900 * self.progress}vw`,
            duration: 0.8,
            ease: 'power3.out',
          });
        },
      });

      // Animate cards independently
      cards.forEach((card) => {
        gsap.set(card.id, {
          x: card.x,
          y: card.y,
          zIndex: card.z,
          rotate: 0,
        });

        ScrollTrigger.create({
          trigger: card.id,
          start: 'top top',
          end: '+=1200vh',
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(card.id, {
              x: card.x + card.endX * self.progress,
              rotate: `${card.rotate * self.progress}deg`,
              duration: 1,
              ease: 'power3.out',
            });
          },
        });
      });

      ScrollTrigger.refresh();
    });

    mm.add('(max-width: 767px)', () => {
      // Same logic with tweaked movement for mobile
      ScrollTrigger.create({
        trigger: '.wrapper',
        start: 'top top',
        end: '+=950vh',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          gsap.to('.wrapper', {
            x: `${-950 * self.progress}vw`,
            duration: 0.8,
            ease: 'power3.out',
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
          start: 'top top',
          end: '+=1250vh',
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(card.id, {
              x: card.x + card.endX * self.progress,
              rotate: `${card.rotate * self.progress}deg`,
              duration: 1,
              ease: 'power3.out',
            });
          },
        });
      });

      ScrollTrigger.refresh();
    });
  });

  return (
    <section className="relative w-full sm:h-[250vh] md:h-[300vh] overflow-hidden">
      <section className="wrapper relative w-[1200vw] sm:h-[80vh] md:h-screen will-change-transform sm:p-[10em] md:p-[5em]">
        <h1 className="sm:text-[48vw] md:text-[20vw] font-black whitespace-nowrap text-center">
          WEBSITES THAT SPEAKS
        </h1>

        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            id={`card${n}`}
            className="card absolute sm:w-[45vw] sm:h-[30vh] md:w-[20vw] md:h-[45vh] overflow-hidden rounded-lg"
          >
            <img
              src={`/images/service${n}.jpg`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>
    </section>
  );
}
