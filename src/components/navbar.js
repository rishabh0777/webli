import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const hamburgRef = useRef(null);
  const logoRef = useRef(null);
  const menuBarRef = useRef(null);

  const toggleNavbar = ()=>{
    if(!show){
      gsap.fromTo(
        hamburgRef.current,
        {top: "-100%"},
        {top: "0%", duration: 1.5, ease: "power3.inOut"}
      )
      setShow(true);
    }else{
      gsap.fromTo(
        hamburgRef.current,
        {top: "0%"},
        {top: "-100%", duration: 1.5, ease: "power3.inOut"}
      )
      setShow(false);
    }
  }

  useGSAP(()=>{
    if(show){
      gsap.fromTo(".navOptions li", {y: -30, opacity: 0}, {y: 0, opacity: 1, stagger: 0.1,delay: 0.8, ease: "power3.inOut"})
    }else{
      gsap.fromTo(".navOptions li", {y: 0, opacity: 1}, {y: -30, opacity: 0, stagger: 0.1, ease: "power3.inOut"})
    }
  },[show])

  // logo icon and menu icon transition -->
  useGSAP(() => {
    //logo transition -->
    let tl = gsap.timeline();
    tl.add("a");
    tl.fromTo(
      logoRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.inOut" },
      "a"
    );
    tl.fromTo(
      menuBarRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.inOut" },
      "a"
    );
  }, []);

  return (
    <>
      <nav className="fixed sm:w-screen top-0 h-[10vh] px-[4vw] flex justify-between items-center overflow-hidden bg-[#060606] text-white z-[1000]">
        <section className="w-[13vw] absolute z-[905]">
          <img
            ref={logoRef}
            src="/logo/Black.png"
            alt="webli creative web development agency"
            className="w-full opacity-0"
          />
        </section>
        <i
          onClick={toggleNavbar}
          ref={menuBarRef}
          className={`${
            show ? "bx bx-x" : "bx bx-menu"
          } text-3xl absolute right-[4vw] transition duration-700 z-[905] opacity-0`}
        ></i>
        <section
          ref={hamburgRef}
          className="fixed w-screen h-[100dvh] top-[-100%] left-[0] flex justify-center items-center bg-[#060606] z-[900]"
        >
          <ul className="navOptions flex flex-col gap-6 text-[18vw] leading-[18vw] text-center">
            <li className="text-zinc-500">Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </section>
      </nav>
    </>
  );
}
