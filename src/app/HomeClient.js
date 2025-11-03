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
import Preloader from "./preloader/page.js"

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);

  
  const loading = async ()=>{

    try{
      const response = await fetch('https://backend-webli.onrender.com');
      if(response.ok){
        // set loading false after 5 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 10000);
      }
       
    }catch(err){
      console.log(err);

    }
  }

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
   
    isLoading ? (
      <Preloader />
    ) : (
      <section className="relative w-full bg-[#060606] overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <HeroMain />
      <ServiceMain />
      <HorizontalScrollText />
      <ImageReveal />
      <AboutMain />
      <PortfolioMain />
      <ContactMain />
    </section>
    )
  );
}
