import React, { useRef } from 'react';
import TeamCard from '../components/teamCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

export default function OurTeam() {
  const member1 = useRef(null);
  const member2 = useRef(null);
  const member3 = useRef(null);
  const head1 = useRef(null);
  const head2 = useRef(null);
  const myTeam = [
    {
      name: 'Pawan',
      role: 'Frontend Developer',
      img: '/images/member2.jpg',
      bg: 'bg-blue-200',
      myRef: member1
    },
    {
      name: 'Rishabh',
      role: 'Fullstack Developer (founder)',
      img: '/images/member1.jpg',
      bg: 'bg-yellow-200',
      myRef: member2
      }, 
    {
      name: 'Anshuman',
      role: 'Backend Developer',
      img: '/images/member3.jpg',
      bg: 'bg-green-200',
      myRef: member3
    }
  ];

useGSAP(() => {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    head1.current,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: head1.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
  gsap.fromTo(
    head2.current,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: head2.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    member1.current,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: member1.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    member2.current,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: member1.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    member3.current,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: member1.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );
});



  return (
    <section className="relative w-full min-h-[50vh] mt-[6vh]">
        <section className='w-full px-[4vw] py-[4vh] text-center overflow-hidden sm:text-[7vw] md:text-[4vw] md:leading-[4vw]'>
        <section><h2 ref={head1} >
          Creative Coders
        </h2></section>
        <section><h2 ref={head2}>
          United by Passion
        </h2></section>
      </section>
      <section className='w-full flex justify-center sm:gap-2 md:gap-6 mt-[8vh]'>
        {
          myTeam.map((detail, index)=>{
            return(
              <TeamCard key={index} className='teamCard' myRef={detail.myRef} img={detail.img} name={detail.name} role={detail.role} bg={detail.bg} />
            )
          })
        }
      </section>
      
     
    </section>
  )
}
