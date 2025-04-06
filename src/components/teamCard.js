import React from 'react'

export default function TeamCard({className, myRef, img, name, role, bg}) {
  return (
    <section ref={myRef} className={`${className} ${bg} w-[30vw] h-[30vh] rounded-full overflow-hidden p-0`}>
      <section className={`w-full h-[40%] flex flex-col justify-center items-center overflow-hidden`}>
          <h3 className='text-[4vw] font-bold text-zinc-900'>{name}</h3>
          <p className='text-[2.5vw] font-semibold text-zinc-500 text-center'>{role}</p>
      </section>
      <section className="w-full h-[65%] flex justify-center items-center bg-green-500 rounded-full overflow-hidden">
        <img className='w-[100%] h-[100%] object-cover rounded-full scale-[1.1]' src={img} alt="" />
      </section>
    </section>
  )
}
