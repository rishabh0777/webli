"use client";

import React from "react";
import Hero from "@/pages/hero";
import Navbar from "@/components/navbar";
import HowWeWork from "@/pages/howWeWork";
import Service from "@/pages/service";
import About from "@/pages/about";
import ImageReveal from "@/pages/ImageReveal";
import ScrollToTop from "@/components/scrollToTop";
import OurTeam from "@/pages/ourTeam";

export default function Home() {
  return (
    <section className="relative w-full bg-[#060606] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <HowWeWork />
      <Service />
      <ImageReveal />
      <OurTeam />
      <About  />
    </section>
  );
}
