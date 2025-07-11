import React from 'react';
import Image from 'next/image';

function TeamCard({ className, myRef, img, name, role, bg }) {
  const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true";

  return (
    <section
      ref={myRef}
      className={`${className} ${bg} sm:w-[30vw] sm:h-[30vh] md:w-[15vw] md:h-[60vh] rounded-full overflow-hidden p-0 flex flex-col`}
    >
      {/* Text Section */}
      <section className="w-full sm:h-[40%] flex flex-col justify-center items-center overflow-hidden">
        <h3 className="sm:text-[4vw] md:text-[1.5vw] font-bold text-zinc-900">{name}</h3>
        <p className="sm:text-[2.5vw] md:text-[1vw] font-semibold text-zinc-500 text-center">{role}</p>
      </section>

      {/* Image Section */}
      <section className="w-full sm:h-[65%] relative flex justify-center items-center rounded-full overflow-hidden">
        {isProduction ? (
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover rounded-full scale-[1.1]"
            sizes="(max-width: 768px) 30vw, 15vw"
            priority
          />
        ) : (
          <img
            src={img?.src || img}
            alt={name}
            className="w-full h-full object-cover rounded-full scale-[1.1]"
          />
        )}
      </section>
    </section>
  );
}

export default React.memo(TeamCard);
