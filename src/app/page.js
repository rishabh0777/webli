"use client";

import React, { useEffect } from "react";
import 'remixicon/fonts/remixicon.css';
import Lenis from 'lenis';

import Hero from "./home/page.js";                   
import Navbar from "../components/navbar";    
import Service from "./service/page.js";             
import HorizontalScrollText from "../components/horizontalScrollText.js";
import About from "./about/page.js";
import ImageReveal from "../components/ImageReveal.js";
import ScrollToTop from "../components/scrollToTop";
import Portfolio from "./portfolio/page.js";
import Contact from "./contact/page.js";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <section className="relative w-full bg-[#060606] overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Service />
      <HorizontalScrollText />
      <ImageReveal />
      <About />
      <Portfolio />
      <Contact />
    </section>
  );
}
