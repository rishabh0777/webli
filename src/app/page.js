"use client";

import React from "react";
import Hero from "@/pages/hero";
import Navbar from "@/components/navbar";
import Service from "@/pages/service";
import HorizontalScrollText from "@/pages/horizontalScrollText"
import About from "@/pages/about";
import ImageReveal from "@/pages/ImageReveal";
import ScrollToTop from "@/components/scrollToTop";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";

export default function Home() {
  return (
    <section className="relative w-full bg-[#060606] overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Service />
      <HorizontalScrollText />
      <ImageReveal />
      <About  />
      <Portfolio />
      <Contact />
    </section>
  );
}
