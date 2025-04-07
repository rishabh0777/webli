import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const sectionRef = useRef();

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false
      }
    });

    tl.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1
    });
    tl.from(sectionRef.current.querySelectorAll(".service-card"), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1
    }, "<");
  })

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
    <section ref={sectionRef} className="bg-black text-white px-6 py-20 md:px-20">
      <h1 className="text-center text-[10vw] font-bold tracking-wider mb-6">Services</h1>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[5vw] md:text-5xl font-bold mb-6">
          We believe every business deserves a powerful online presence—
          <br className="hidden md:block" /> designed to perform across all platforms.
        </h2>
        <p className="text-[4vw] md:text-xl mb-12 text-gray-300">
          Our mission is to turn that belief into reality with thoughtful design and cutting-edge development.
        </p>
        <div className="grid md:grid-cols-2 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card  p-6 shadow-md border-b-2 border-gray-800 hover:scale-[1.03] transition-transform duration-300"
            >
              <h3 className="text-[6vw] font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-[3vw]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
