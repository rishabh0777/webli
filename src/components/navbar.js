"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const hamburgRef = useRef(null);
  const logoRef = useRef(null);
  const menuBarRef = useRef(null);
  const buttonRef = useRef(null);
  const navLinksRef = useRef([]);

  // Entrance animation
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.add("a")
      .fromTo(logoRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "a")
      .fromTo(menuBarRef.current, { scale: 0.5, opacity: 0, rotate: -90 }, { scale: 1, rotate: 0, opacity: 1, duration: 0.6 }, "a")
      .fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "+=0.3");
  }, []);

  // Toggle menu
  const toggleNavbar = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    if (!show) {
      tl.to(hamburgRef.current, {
        top: 0,
        duration: 0.6,
      }).fromTo(
        navLinksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "+=0.2"
      );
    } else {
      tl.to(navLinksRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.in",
      }).to(hamburgRef.current, {
        top: "-100vh",
        duration: 0.6,
      });
    }

    setShow(!show);
  };

  // Scroll to section when nav item clicked
  const handleItemClick = (section) => {
    toggleNavbar();
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect section on scroll and update title + URL hash
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);

              // ✅ Update URL without reload
              window.history.replaceState(null, "", `#${id}`);

              // ✅ Update title
              const capitalized = id.charAt(0).toUpperCase() + id.slice(1);
              document.title = `Webli | ${capitalized}`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full sm:h-[10vh] md:h-[8vh] px-[4vw] flex justify-between items-center bg-transparent text-white z-[1000]">
      {/* Logo */}
      <section className="sm:w-[20vw] md:w-[5vw] absolute z-[905]">
        <img
          ref={logoRef}
          src="/logo/TransparentWhite.png"
          alt="webli logo"
          className="w-full opacity-0"
        />
      </section>

      {/* Pricing + Menu */}
      <section className="w-[45vw] h-full absolute right-[4vw] flex gap-4 justify-end items-center">
        <button
          ref={buttonRef}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/webliPricing&Services.pdf";
            link.download = "webliPricing&Services";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="px-4 py-1 bg-white text-black sm:text-[3.5vw] md:text-[1vw] rounded-md hover:bg-red-400 hover:text-white transition-all duration-300 opacity-0"
        >
          Pricing
        </button>
        <i
          ref={menuBarRef}
          onClick={toggleNavbar}
          className={`bx ${show ? "bx-x" : "bx-menu"} sm:text-[7vw] md:text-[1.5vw] cursor-pointer transition duration-700 z-[905] opacity-0`}
        ></i>
      </section>

      {/* Full-screen Menu */}
      <section
        ref={hamburgRef}
        className="fixed w-screen h-screen top-[-100vh] left-0 flex justify-center items-center bg-[#060606] z-[900]"
      >
        <ul className="flex flex-col gap-6 sm:text-[11vw] md:text-[4vw] text-center">
          {["Home", "Service", "About", "Portfolio", "Contact"].map((item, index) => {
            const key = item.toLowerCase();
            const isActive = key === activeSection;
            return (
              <li
                key={key}
                ref={(el) => (navLinksRef.current[index] = el)}
                onClick={() => handleItemClick(key)}
                className={`cursor-pointer transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-500"
                } hover:text-white`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
}
