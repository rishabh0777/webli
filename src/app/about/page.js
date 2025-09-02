"use client";

import React, { useRef } from "react";
import OurTeam from "../../components/ourTeam";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const headRef = useRef(null);
  const paraRef1 = useRef(null);
  const paraRef2 = useRef(null);

  useGSAP(() => {
    // Animations (unchanged)
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    const split1 = new SplitType(paraRef1.current, { types: "chars" });
    const split2 = new SplitType(paraRef2.current, { types: "chars" });

    gsap.fromTo(
      split1.chars,
      { color: "#888", opacity: 0.2 },
      {
        color: "#fff",
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: paraRef1.current,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      split2.chars,
      { color: "#888", opacity: 0.2 },
      {
        color: "#fff",
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: paraRef2.current,
          start: "top 50%",
          end: "top 15%",
          scrub: true,
        },
      }
    );

    return () => {
      split1.revert();
      split2.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full min-h-[100vh] py-10 px-[4vw] 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* H1 is great for SEO */}
      <h1
        ref={headRef}
        className="sm:text-[10vw] md:text-[4vw] font-bold text-center text-white"
      >
        About Webli
      </h1>

      {/* SEO-rich intro text */}
      <section className="text-base sm:text-[3.4vw] md:text-[1.2vw] flex flex-col gap-5 mt-[6vh] text-white">
        <p ref={paraRef1}>
          At <strong>Webli</strong>, we&apos;re passionate about transforming
          ideas into interactive, visually stunning, and high-performing
          websites. As a <strong>modern web development agency</strong>, our
          mission is to empower startups and small businesses by delivering
          responsive, fast, and SEO-optimized digital experiences.
        </p>
        <p ref={paraRef2}>
          With a skilled team of frontend and backend developers, we
          specialize in the <strong>MERN stack</strong> and provide a wide
          range of services—from professional landing pages to advanced
          animated websites. Our unique zero-investment model ensures{" "}
          <strong>affordable website design</strong> without compromising on
          creativity, performance, or functionality.
        </p>
      </section>

      {/* Our Team Section */}
      <OurTeam />
    </section>
  );
}
