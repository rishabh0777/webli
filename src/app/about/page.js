"use client";

import React, { useRef, useState } from 'react';
import OurTeam from '../../components/ourTeam';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headRef = useRef(null);
  const paraRef1 = useRef(null);
  const paraRef2 = useRef(null);

  // Heading animation
  useGSAP(() => {
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: headRef.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  // Paragraph 1 animation
  useGSAP(() => {
    const split1 = new SplitType(paraRef1.current, {
      types: 'lines, words, chars',
    });

    gsap.fromTo(
      split1.chars,
      { color: '#888', opacity: 0.2 },
      {
        color: '#fff',
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: paraRef1.current,
          start: 'top 85%',
          end: 'top 30%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => split1.revert();
  }, []);

  // Paragraph 2 animation
  useGSAP(() => {
    const split2 = new SplitType(paraRef2.current, {
      types: 'lines, words, chars',
    });

    gsap.fromTo(
      split2.chars,
      { color: '#888', opacity: 0.2 },
      {
        color: '#fff',
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: paraRef2.current,
          start: 'top 50%',
          end: 'top 15%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => split2.revert();
  }, []);

  return (
    <section id="about" className="relative w-full min-h-[100vh] py-10 px-[4vw]">
      <h1
        ref={headRef}
        className="sm:text-[10vw] md:text-[4vw] font-bold text-center text-white"
      >
        About Us
      </h1>

      <section className="text-base sm:text-[3.4vw] md:text-[1.2vw] flex flex-col gap-5 mt-[6vh] text-white">
        <p ref={paraRef1}>
          At Webli, we&apos;re passionate about transforming ideas into interactive,
          visually stunning, and high-performing websites. Built on creativity
          and code, our mission is to empower individuals and businesses by
          delivering modern, responsive, and engaging digital experiences.
          Whether it&apos;s a sleek portfolio, a dynamic e-commerce platform, or a
          fully customized web application, we approach every project with a
          focus on innovation, quality, and user satisfaction.
        </p>
        <p ref={paraRef2}>
          Backed by a skilled team of frontend and backend developers, we
          specialize in the MERN stack and offer a wide range of services—from
          basic landing pages to advanced animated websites. Our zero-investment
          agency model allows us to provide affordable solutions without
          compromising on design or functionality. At Webli, we believe great
          websites don&apos;t just look good—they tell a story, build trust, and
          drive success.
        </p>
      </section>

      <OurTeam />
    </section>
  );
}
