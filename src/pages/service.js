import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Card from '@/components/card';
import serviceData from "@/data/services";


gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const headRef = useRef(null);
  const cardRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%", // When 80% of the viewport reaches the section
          toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
        },
      }
    );
    const card = cardRef.current
    card.forEach((item, index) => {
      if(index % 2 === 0){
        gsap.fromTo(
          item,
          { opacity: 0, x: -300 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%", // When 80% of the viewport reaches the section
              toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
            },
          }
        );
      }else{
        gsap.fromTo(
          item,
          { opacity: 0, x: 300 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%", // When 80% of the viewport reaches the section
              toggleActions: "play none none reverse", // Runs forward when entering, reverse when leaving
            },
          }
        );
      }
    })
  });
  

  return (
    <>
      <section
        className="relative w-full sm:min-h-[100vh] flex flex-col items-center px-[4vw] gap-8 overflow-hidden"
      >
        <h3 ref={headRef} className="text-[4vw] mt-[5vh] self-start">
          What we do
        </h3>     
           {
          serviceData?.map((item, index) => {
            return (
              <Card
              ref={(el) => (cardRef.current[index] = el)}
                key={index}
                title={item?.title}
                description={item?.description}
                indexing={item?.indexing}
                className={item?.className}
                img={item?.img}
              />
            );
          })
        }
      </section>
    </>
  );
}
