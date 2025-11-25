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
    <nav className="fixed top-0 left-0 w-full h-[10vh] md:h-[12vh] px-[5vw] 
                flex justify-between items-center bg-transparent text-white 
                z-[1000]">
  {/* ✅ Logo */}
  <div className="w-[28vw] sm:w-[22vw] md:w-[10vw] z-[905]">
    <img
      ref={logoRef}
      src="/logo/TransparentWhite.png"
      alt="webli logo"
      className="w-full opacity-0"
    />
  </div>

  {/* ✅ Right Section */}
  <div className="flex items-center gap-4 z-[905]">
    <button
      ref={buttonRef}
      onClick={() => {
        const link = document.createElement("a");
        link.href = "/webliPricing&Services1.pdf";
        link.download = "webliPricing&Services";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      className="px-3 py-[4px] bg-white text-black 
                 text-[3.5vw] sm:text-[2.6vw] md:text-[1vw]
                 rounded-md hover:bg-black hover:text-white 
                 transition-all duration-300 opacity-0"
    >
      Pricing
    </button>

    <i
      ref={menuBarRef}
      onClick={toggleNavbar}
      className={`bx ${show ? "bx-x" : "bx-menu"} 
                  text-[7vw] sm:text-[5vw] md:text-[2vw] 
                  cursor-pointer transition duration-700 opacity-0`}
    ></i>
  </div>

  {/* ✅ Full-screen Menu */}
  <div
    ref={hamburgRef}
    className="fixed w-screen h-screen top-[-100vh] left-0 
               flex justify-center items-center bg-[#060606] z-[900]"
  >
    <ul className="flex flex-col gap-6 
                   text-[12vw] sm:text-[9vw] md:text-[4vw] 
                   text-center font-semibold tracking-wide">
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
  </div>
</nav>

  );
}
