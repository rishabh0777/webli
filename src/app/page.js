"use client"

import React from "react";
import Hero from "@/pages/hero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <section className="relative w-full">
      <Navbar />
      <Hero />
    </section>
  );
}
