"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const headRef = useRef(null);
  const subHeadRef = useRef(null);
  const paraRef = useRef(null);
  const serviceRefs = useRef([]);

 useGSAP(() => {
  gsap.from([headRef.current, subHeadRef.current, paraRef.current], {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headRef.current,
      start: "top 85%",
    },
  });

  serviceRefs.current.forEach((ref, index) => {
    gsap.from(ref, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref,
        start: "top 85%",
      },
    });
  });
}, []);


  const services = [
    {
      title: "Static & One-Page Sites",
      description:
        "Fast-loading, minimal websites perfect for portfolios, startups, and small businesses.",
      icon: "🌐",
    },
    {
      title: "React Sites with Animation",
      description:
        "Interactive multi-section sites using React, GSAP & Framer Motion.",
      icon: "⚡",
    },
    {
      title: "Full-Stack MERN Web Apps",
      description:
        "Apps with authentication, dashboards, and database integration.",
      icon: "🛠️",
    },
    {
      title: "Brand Websites with CMS",
      description:
        "Custom designs with CMS, admin control, and performance optimization.",
      icon: "🎨",
    },
  ];

  return (
    <section
      id="service"
      className="relative w-full min-h-[90vh] md:min-h-screen px-6 py-20 md:px-20 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <h1
        ref={headRef}
        className="text-center text-[10vw] md:text-[4vw] font-extrabold tracking-widest mb-5 text-white"
      >
        Our Services
      </h1>

      <h2
        ref={subHeadRef}
        className="text-center sm:text-[3.5vw] md:text-[1.8vw] font-bold mb-6 leading-tight text-gray-200"
      >
        Building fast, beautiful, and scalable websites — designed for impact.
      </h2>

      <p
        ref={paraRef}
        className="text-center text-[4vw] md:text-lg mb-12 text-gray-400 max-w-3xl mx-auto"
      >
        From quick launches to complex full-stack applications, we deliver
        design, development, and motion — all in one place.
      </p>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            ref={(el) => (serviceRefs.current[index] = el)}
            key={index}
            className="group p-6 rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-[6vw] md:text-[1.2vw] font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-[3vw] md:text-[1vw]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
