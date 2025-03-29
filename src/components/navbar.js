import React, { useState } from 'react';


export default function Navbar(){
    const [toggle, setToggle] = useState(false);

    // Toggle Navbar In small screen size -->
    const toggleNavbar = ()=>{
      if(toggle) setToggle(false);
      else setToggle(true)
    }

  return(
      <nav className='fixed w-full h-[6vh] px-[4vw] flex justify-between items-center overflow-hidden'>
        <section className="w-[13vw] absolute z-1000">
            <img
            src='/logo/White.png'
            alt="webli creative web development agency"
            className="w-full"
             />
            </section>
            
            
      </nav>
    )
}