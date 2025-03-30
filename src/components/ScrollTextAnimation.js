import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollTextAnimation() {
  const row1Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;

    gsap.fromTo(
      row1.children,
      { x: "100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    const setupInfiniteScroll = (row, direction = "left") => {
      const children = [...row.children];
      const totalWidth = children.reduce(
        (acc, child) => acc + child.offsetWidth,
        0
      );

      children.forEach((child) => {
        const clone = child.cloneNode(true);
        row.appendChild(clone);
      });

      const moveLeft = direction === "left" ? -totalWidth : totalWidth;

      gsap.fromTo(
        row,
        { x: 0 },
        {
          x: moveLeft,
          duration: 20,
          ease: "none",
          repeat: -1,
          yoyo: true,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        }
      );
    };

    setupInfiniteScroll(row1, "left");
  }, []);

  return (
    <section className="font-novaMono py-12 overflow-hidden text-zinc-900">
      <section className="overflow-hidden">
        <section
          className="flex space-x-8 whitespace-nowrap text-[7vw] opacity-0"
          ref={row1Ref}
        >
          <h2 className="flex items-center gap-3">
            Scroll Down
            <i className="bx bx-down-arrow-alt text-inherit text-3xl"></i>
          </h2>
          <h2 className="flex items-center gap-3">
            Scroll Down
            <i className="bx bx-down-arrow-alt text-inherit text-3xl"></i>
          </h2>
          <h2 className="flex items-center gap-3">
            Scroll Down
            <i className="bx bx-down-arrow-alt text-inherit text-3xl"></i>
          </h2>
          <h2 className="flex items-center gap-3">
            Scroll Down
            <i className="bx bx-down-arrow-alt text-inherit text-3xl"></i>
          </h2>
        </section>
      </section>
    </section>
  );
}
