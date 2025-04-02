import React, { forwardRef } from "react";

const Card = forwardRef(({ title, description, indexing, className, img }, ref) => {
  return (
    <section
      ref={ref}
      className={`w-full h-[40vh] bg-zinc-800 rounded-2xl shadow-lg shadow-zinc-900 p-4 flex flex-col justify-center ${className}`}
    >
      {/* Header Section */}
      <section className="flex items-center justify-between">
        <h1 className="text-[4vw] font-semibold text-white">{title}</h1>
        <span className="text-[7vw] font-bold text-zinc-400">{indexing}</span>
      </section>

      {/* Content Section */}
      <section className="flex gap-6 py-2">
        <div className="w-[60%] ">
          <p className="text-zinc-300 text-[4.5vw] leading-relaxed">{description}</p>
        </div>
        <div className="w-[40%] rounded-xl overflow-hidden shadow-md">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>
    </section>
  );
});

export default Card;
