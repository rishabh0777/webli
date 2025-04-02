"use client";

import React from "react";
import Hero from "@/pages/hero";
import Navbar from "@/components/navbar";
import HowWeWork from "@/pages/howWeWork";
import Service from "@/pages/service";
import ScrollToTop from "./scrollToTop";
import About from "@/pages/about";

export default function Home() {
  return (
    <section className="relative w-full bg-[#060606]">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <HowWeWork />
      <Service />
      <About  />
    </section>
  );
}
