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

  const toggleNavbar = () => {
    if (!show) {
      gsap.fromTo(
        hamburgRef.current,
        { top: "-100vh" },
        { top: "0%", duration: 1.5, ease: "power3.inOut" }
      );
    } else {
      gsap.fromTo(
        hamburgRef.current,
        { top: "0%" },
        { top: "-100vh", duration: 1.5, ease: "power3.inOut" }
      );
    }
    setShow(!show);
  };

  useGSAP(() => {
    if (show) {
      gsap.fromTo(
        ".navOptions li",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.8, ease: "power3.inOut" }
      );
    }
  }, [show]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.inOut" }
    );
    tl.fromTo(
      menuBarRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.inOut" }
    );
  }, []);

  const handleItemClick = (section) => {
    toggleNavbar();
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      {/* Menu icon */}
      <i
        onClick={toggleNavbar}
        ref={menuBarRef}
        className={`bx ${show ? "bx-x" : "bx-menu"} sm:text-3xl md:text-2xl cursor-pointer absolute right-[4vw] transition duration-700 z-[905] opacity-0`}
      ></i>

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
