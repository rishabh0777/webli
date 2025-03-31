"use client";

import React from "react";
import Hero from "@/pages/hero";
import Navbar from "@/components/navbar";
import HowWeWork from "@/pages/howWeWork";

export default function Home() {
  return (
    <section className="relative w-full bg-black">
      <Navbar />
      <Hero />
      <HowWeWork />
    </section>
  );
}
