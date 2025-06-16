"use client";

import React from "react";

import 'remixicon/fonts/remixicon.css';

import Hero from "./home/page.js";                    // ✅ ./home/page.js
import Navbar from "../components/navbar";    // ✅ ../components/navbar.js
import Service from "./service/page.js";              // ✅ ./service/page.js
import HorizontalScrollText from "../components/horizontalScrollText.js";
import About from "./about/page.js";
import ImageReveal from "../components/ImageReveal.js";
import ScrollToTop from "../components/scrollToTop";
import Portfolio from "./portfolio/page.js";
import Contact from "./contact/page.js";


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
