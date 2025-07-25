"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import TeamCard from "../components/teamCard";
import pawanImg from "@/assets/images/pawan.jpeg";
import rishabhImg from "@/assets/images/rishabh.jpeg";
import shubhamImg from "@/assets/images/shubam.jpeg";

export default function OurTeam() {
  const member1 = useRef(null);
  const member2 = useRef(null);
  const member3 = useRef(null);
  const head1 = useRef(null);
  const head2 = useRef(null);

  const myTeam = [
    {
      name: "Pawan",
      role: "Frontend Lead (Core Team)",
      img: pawanImg,
      bg: "bg-blue-200",
      myRef: member1,
    },
    {
      name: "Rishabh",
      role: "Fullstack Developer (Founder)",
      img: rishabhImg,
      bg: "bg-yellow-200",
      myRef: member2,
    },
    {
      name: "Shubham",
      role: "Backend Developer (Marketer)",
      img: shubhamImg,
      bg: "bg-green-200",
      myRef: member3,
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headers = [head1.current, head2.current];
    headers.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    [member1, member2, member3].forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  return (
    <section className="relative w-full min-h-[50vh] mt-[6vh]">
      <section className="w-full px-[4vw] py-[4vh] text-center overflow-hidden sm:text-[7vw] md:text-[4vw] md:leading-[4vw]">
        <h2 ref={head1}>Creative Coders</h2>
        <h2 ref={head2}>United by Passion</h2>
      </section>

      <section className="w-full flex justify-center sm:gap-2 md:gap-6 mt-[8vh]">
        {myTeam.map((detail, index) => (
          <TeamCard
            key={index}
            myRef={detail.myRef}
            img={detail.img}
            name={detail.name}
            role={detail.role}
            bg={detail.bg}
          />
        ))}
      </section>
    </section>
  );
}
