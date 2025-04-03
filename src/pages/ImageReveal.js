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
        if (!paraRef.current || !container.current) return;

        gsap.fromTo(paraRef.current, 
            { opacity: 0, x: -40, scale: 0.5 }, 
            { 
                opacity: 1, 
                x: 0, 
                scale: 1,
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: paraRef.current,
                    start: "top 90%", // Ensure it animates when coming into view
                    toggleActions: "play none none reverse",
                }
            }
        );

        const cards = container.current.querySelectorAll('.card');
        const images = container.current.querySelectorAll('.card img');
        const totalCards = cards.length;

        gsap.set(cards[0], { y: '0%', scale: 1, rotate: 0 });
        gsap.set(images[0], { scale: 1 });

        for (let i = 1; i < totalCards; i++) {
            gsap.set(cards[i], { y: "100%", scale: 1, rotation: 0 });
            gsap.set(images[i], { scale: 1 });
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-card",
                start: '-35%',
                end: `+=${window.innerHeight * (totalCards - 1)}`,
                pin: true,
                scrub: 0.5,
            }
        });

        for (let i = 0; i < totalCards - 1; i++) {
            const currentCard = cards[i];
            const currentImage = images[i];
            const nextCard = cards[i + 1];

            tl.to(currentCard, { scale: 0.5, rotation: 10, duration: 1, ease: 'none' }, i);
            tl.to(currentImage, { scale: 1.5, duration: 1, ease: 'none' }, i);
            tl.to(nextCard, { y: '0%', duration: 1, ease: 'none' }, i);
        }

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { scope: container });

    return (
        <section className='container py-3' ref={container}>
            <section className='intro relative w-[100vw] h-[40vh] p-2 overflow-hidden flex justify-center items-center'>
                <p ref={paraRef} className='text-[3vw] px-3'>
                    Immerse yourself in a visually stunning experience where every scroll brings innovation to life. 
                    Through seamless motion and creative interactions, we push the boundaries of web animation.
                </p>
            </section>
            <section className='sticky-card relative w-[100vw] h-screen p-2 overflow-hidden flex justify-content-center'>
                <section className='cards-container position relative sm:w-full sm:h-[35%] rounded-lg overflow-hidden'>
                    {[...Array(7)].map((_, index) => (
                        <section key={index} className='card absolute w-full h-full rounded-md overflow-hidden'>
                            <section className='tag absolute top-[1em] left-[1em] p-2 rounded-xl z-1 bg-black text-white px-4 py-2'>
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
