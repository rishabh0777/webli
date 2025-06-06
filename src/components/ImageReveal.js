import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal() {
  const container = useRef(null);
  const tags = [
    "Innovation",
    "Motion",
    "Discovery",
    "Creativity",
    "Transformation",
    "Futuristic",
    "Immersive"
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        // Desktop
        isDesktop: "(min-width: 768px)",
        // Mobile
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        if (!container.current) return;

        const cards = container.current.querySelectorAll('.card');
        const images = container.current.querySelectorAll('.card img');
        const totalCards = cards.length;

        gsap.set(cards[0], { y: '0%', scale: 1, rotate: 0 });
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
            start: '-30%',
            end: endValue,
            pin: true,
            scrub: 0.5,
          }
        });

        for (let i = 0; i < totalCards - 1; i++) {
          const currentCard = cards[i];
          const currentImage = images[i];
          const nextCard = cards[i + 1];

          tl.to(currentCard, {
            scale: isDesktop ? 0.5 : 0.8,
            rotation: isDesktop ? 10 : 5,
            duration: 1,
            ease: 'linear',
          }, i);

          tl.to(currentImage, {
            scale: isDesktop ? 1.5 : 1.2,
            duration: 1,
            ease: 'linear',
          }, i);

          tl.to(nextCard, {
            y: '0%',
            duration: 1,
            ease: 'linear',
          }, i);
        }

        ScrollTrigger.refresh();

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full left-0 relative py-3 overflow-hidden ">
      <section className="intro relative w-full md:h-[25vh] sm:h-[40vh] lg:h-[35vh] p-3 ">
        
      </section>

      <section className="sticky-card relative w-full h-[30vh] sm:h-[40vh] md:min-h-[80vh] lg:h-[40vh] p-2 flex justify-center">
        <section className="cards-container relative w-full sm:h-full md:h-auto rounded-lg overflow-hidden">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="card absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] md:w-[80vw] sm:h-full md:h-auto flex items-center justify-center rounded-lg overflow-hidden"
            >
              <img
                src={`/images/cardReveal${index + 1}.jpg`}
                alt={tag}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute text-white text-3xl font-bold z-10">{tag}</h3>
            </div>
          ))}
        </section>
      </section>

      {/* Spacer to prevent overlapping with next section */}
      <div className="h-[10vh] md:h-[40vh]"></div>
    </section>
  );
}
