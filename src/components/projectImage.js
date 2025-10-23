import React from "react";
import Image from "next/image";

export default function ProjectImage({ projectDetails, active }) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 -top-[130%] 
        w-64 h-40 z-10 transition-all duration-500 ease-out
        ${active ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="relative w-64 h-40 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={projectDetails.image}
          alt={projectDetails.name}
          fill
          quality={100}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 256px"
        />
      </div>
    </div>
  );
}
