"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const hamburgRef = useRef(null);
  const logoRef = useRef(null);
  const menuBarRef = useRef(null);
  const navLinksRef = useRef([]);

  // Entrance animation for logo & menu
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.add("a")
tl.fromTo(
  logoRef.current,
  { x: -200, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
  "a" // start at time 0
);
tl.fromTo(
  menuBarRef.current,
  { x: 100},
  { x: 0, duration: 0.8, ease: "power3.out" },
  "a" // also start at time 0
);


  // Handle navbar open/close animation
  const toggleNavbar = () => {
    if (!show) {
      const tl = gsap.timeline();
      tl.to(hamburgRef.current, {
        top: "0%",
        duration: 1.2,
        ease: "power3.inOut",
      });
      tl.fromTo(
        navLinksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    } else {
      gsap.to(hamburgRef.current, {
        top: "-100vh",
        duration: 1,
        ease: "power3.inOut",
      });
    }
    setShow(!show);
  };

  // Handle nav item click scroll
  const handleItemClick = (section) => {
    toggleNavbar();
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar fixed w-screen top-0 sm:h-[10vh] md:h-[8vh] px-[4vw] flex justify-between items-center bg-transparent text-white z-[1000]">
      {/* Logo */}
      <section className="sm:w-[13vw] md:w-[4vw] absolute z-[905]">
        <img
          ref={logoRef}
          src="/logo/TransparentWhite.png"
          alt="webli creative web development agency"
          className="w-full opacity-0"
        />
      </section>

      {/* Hamburger Icon */}
      <section className="w-[30vw] h-full absolute right-[4vw] flex gap-4 justify-end items-center">
      <button className="px-4 py-2 bg-red-500 text-white sm:text-[1.4vw] md:text-[0.9vw] rounded-md">Pricing</button>
        <i
        ref={menuBarRef}
        onClick={toggleNavbar}
        className={`bx ${show ? "bx-x" : "bx-menu"} sm:text-2xl md:text-2xl cursor-pointer transition duration-700 z-[905]`}
      ></i>
      </section>

      {/* Full-screen Hamburger Menu */}
      <section
        ref={hamburgRef}
        className="fixed w-screen h-screen top-[-100vh] left-0 flex justify-center items-center bg-[#060606] z-[900]"
      >
        <ul className="navOptions flex flex-col gap-6 sm:text-[11vw] md:text-[4vw] text-center">
          {["Home", "Service", "About", "Portfolio", "Contact"].map(
            (item, index) => {
              const itemKey = item.toLowerCase();
              const isActive = itemKey === activeSection;

              return (
                <li
                  key={index}
                  ref={(el) => (navLinksRef.current[index] = el)}
                  onClick={() => handleItemClick(itemKey)}
                  className={`cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-500"
                  } hover:text-white`}
                >
                  {item}
                </li>
              );
            }
          )}
        </ul>
      </section>
    </nav>
  );
}
