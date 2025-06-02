"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);
  const paraRef = useRef(null)
  const serviceRefs = useRef([]);
  


  useGSAP(() => {
    gsap.fromTo(
      headRef1.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: headRef1.current,
          start: 'top 90%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      headRef2.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: headRef2.current,
          start: 'top 90%',
          scrub: true,
          toggleActions: 'play none none reverse',
          // markers: true
        },
      }
    );
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 90%',
          scrub: true,
          toggleActions: 'play none none reverse',
          // markers: true
        },
      }
    );
    serviceRefs.current.forEach((serviceRef, index) => {
      gsap.fromTo(
        serviceRef,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: serviceRef,
            start: 'top 90%',
            scrub: true,
            toggleActions: 'play none none reverse',
            // markers: true
          },
        }
      );
    });
    return () => {
      // Clean up the GSAP animations
      gsap.killTweensOf([headRef1.current, headRef2.current, paraRef.current]);
      serviceRefs.current.forEach((serviceRef) => {
        gsap.killTweensOf(serviceRef);
      });
    };
  }, []);
  

 

  const services = [
    {
      title: "Custom Web Design",
      description:
        "From one-pagers to full-scale websites, we design tailored layouts that reflect your brand and engage your audience."
    },
    {
      title: "Responsive UI/UX",
      description:
        "We create clean and modern interfaces optimized for performance on desktop, tablet, and mobile—ensuring great user experiences."
    },
    {
      title: "Animated Experiences",
      description:
        "Using GSAP and Framer Motion, we add motion to elevate your site’s interactivity and keep users engaged longer."
    },
    {
      title: "MERN Stack Development",
      description:
        "We build scalable, full-stack websites using MongoDB, Express, React, and Node.js—perfect for businesses that want more."
    }
  ];

  return (
    <section
    id="service"
      className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden px-6 py-20 md:px-20"
    >
      <h1 ref={headRef1} className="text-center text-[10vw] md:text-[4vw] font-bold tracking-wider mb-5">
        Services
      </h1>
      <div className="max-w-6xl mx-auto text-center">
        <h2 ref={headRef2} className="sm:text-[3.5vw] md:text-[1.8vw] font-bold mb-6 leading-tight">
          We believe every business deserves a powerful online presence—
          <br className="hidden md:block" /> designed to perform across all
          platforms.
        </h2>
        <p ref={paraRef} className="text-[4vw] md:text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
          Our mission is to turn that belief into reality with thoughtful design
          and cutting-edge development.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              ref={(el) => (serviceRefs.current[index] = el)}
              key={index}
              className="service-card p-6 shadow-md border-b-2 border-gray-800 hover:scale-[1.03] transition-transform duration-300 text-left"
            >
              <h3 className="text-[6vw] md:text-[1vw] font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-[3vw] md:text-[0.99vw]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
