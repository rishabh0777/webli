import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal() {
    const container = useRef(null);
    const paraRef = useRef(null);
    const tags = ["Innovation", "Motion", "Discovery", "Creativity", "Transformation", "Futuristic", "Immersive"];

    useGSAP(() => {
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

        // Dynamically adjust scroll distance based on screen size
        const endValue = window.innerWidth < 768 ? `+=${window.innerHeight * (totalCards - 1) * 0.5}` : `+=${window.innerHeight * (totalCards - 1)}`;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-card",
                start: '-30%',
                end: endValue, 
                pin: true,
                scrub: 0.5,
                // pinSpacing: false, // Prevents extra spacing issue
            }
        });

        for (let i = 0; i < totalCards - 1; i++) {
            const currentCard = cards[i];
            const currentImage = images[i];
            const nextCard = cards[i + 1];

            tl.to(currentCard, { scale: 0.5, rotation: 10, duration: 1, ease: 'linear' }, i);
            tl.to(currentImage, { scale: 1.5, duration: 1, ease: 'linear' }, i);
            tl.to(nextCard, { y: '0%', duration: 1, ease: 'linear' }, i);
        }

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: container });

    return (
        <section className='relative container py-3 overflow-hidden' ref={container}>
            <section className='intro relative w-[100vw] h-[25vh] sm:h-[40vh] md:h-[30vh] lg:h-[35vh] p-3 flex justify-center items-center'>
    
</section>


            <section className='sticky-card relative w-[100vw] h-[30vh] sm:h-[40vh] md:h-[35vh] lg:h-[40vh] p-2 flex justify-center'>
                <section className='cards-container relative sm:w-full sm:h-[100%] rounded-lg overflow-hidden'>
                    {[...Array(7)].map((_, index) => (
                        <section key={index} className='card absolute w-full h-full rounded-md overflow-hidden'>
                            <section className='tag absolute top-[1em] left-[1em] p-2 rounded-xl z-10 bg-black text-white px-4 py-2'>
                                <p>{tags[index]}</p>
                            </section>
                            <img
                                className="relative w-full h-full object-cover"
                                src={`/images/cardReveal${index + 1}.jpg`}
                                alt={tags[index]}
                            />
                        </section>
                    ))}
                </section>
            </section>
        </section>
    );
}
