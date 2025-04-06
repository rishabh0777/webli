import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  useGSAP(() => {
    const cards = [
      { id: "#card1", endTranslateX: -2000, rotate: 45 },
      { id: "#card2", endTranslateX: -1000, rotate: 35 },
      { id: "#card3", endTranslateX: -1500, rotate: -45 },
      { id: "#card4", endTranslateX: -2000, rotate: -45 },
      { id: "#card5", endTranslateX: -1000, rotate: 30 },
    ];

   
    // Horizontal scroll animation for wrapper
    ScrollTrigger.create({
      trigger: '.wrapper',
      start: 'top top',
      end: '+=950vh',
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to('.wrapper', {
          x: `${-800 * self.progress}vw`,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
    });

    // Animate each card
    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card.id,
        start: 'top top',
        end: '+=1200vh',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(card.id, {
            x: `${card.endTranslateX * self.progress}vw`,
            rotate: `${card.rotate * self.progress}deg`,
            duration: 1,
            ease: 'power3.out',
          });
        },
      });
    });

    ScrollTrigger.refresh();
  });

  return (
    <section className="relative w-full h-[250vh] overflow-hidden">
      <section className="wrapper absolute top-0 w-[1200vw] h-[100vh] will-change-transform sm:p-[20em]">
        <h1 className="text-[44vw] font-black whitespace-nowrap text-center">
          WEBSITES THAT SPEAKS
        </h1>

        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="card absolute w-[45vw] h-[30vh] overflow-hidden"
            id={`card${n}`}
          >
            <img
              className="w-full h-full object-cover"
              src={`/images/service${n}.jpg`}
              alt=""
            />
          </div>
        ))}
      </section>
    </section>
  );
}
