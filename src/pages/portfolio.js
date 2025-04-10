import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const headRef = useRef(null);
  const projectRefs = useRef([]); // Array of refs

  const projects = [
    { id: 1, name: 'Atmos', url: 'https://rishabh0777.github.io/Atmos/' },
    { id: 2, name: 'Portfolio', url: 'https://rishabh07.netlify.app' },
    { id: 3, name: 'SpiceSaga', url: 'https://rishabh0777.github.io/spice_saga/' },
    { id: 4, name: 'Tech vista', url: 'https://rishabh0777.github.io/techvista/' },
  ];

  const redirectURL = (url) => {
    window.open(url.trim(), '_blank');
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.fromTo(
      headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    );

    projectRefs.current.forEach((ref, i) => {
      tl.fromTo(
        ref,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5 },
        `-=${0.8}` // small overlap
      );
    });
  }, []);

  return (
    <section className='relative w-full min-h-[80vh] px-[4vw] py-[8vh]'>
      <h1 ref={headRef} className='text-[10vw] text-center font-bold'>
        Portfolio
      </h1>
      <section className='w-full h-full mt-[10vh]'>
        {projects.map((project, index) => (
          <section
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className='w-full flex justify-between items-center border-b border-gray-600 pb-2 mt-6 transition-all duration-500'
          >
            <h2 className='text-[10vw]'>{project.name}</h2>
            <i
              onClick={() => redirectURL(project.url)}
              className='bx bx-right-arrow-alt text-[8vw] -rotate-45 cursor-pointer'
            ></i>
          </section>
        ))}
      </section>
    </section>
  );
}
