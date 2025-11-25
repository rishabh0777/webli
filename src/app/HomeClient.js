"use client";

import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Lenis from "lenis";

import HeroMain from "./home/index.js";
import Navbar from "../components/navbar";
import ServiceMain from "./service/index.js";
import HorizontalScrollText from "../components/horizontalScrollText.js";
import AboutMain from "./about/index.js";
import ImageReveal from "../components/ImageReveal.js";
import ScrollToTop from "../components/scrollToTop";
import PortfolioMain from "./portfolio/index.js";
import ContactMain from "./contact/index.js";

export default function HomeClient() {
  

  useEffect(() => {
    loading();
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  
 

  return (
   
      <section className="relative w-full bg-[#060606] overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <HeroMain />
      <ServiceMain />
      <HorizontalScrollText />
      <AboutMain />
      <PortfolioMain />
      <ImageReveal />
      <ContactMain />
    </section>
    );
}
