import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [year, setYear] = useState(2025)
  const headRef = useRef(null)
  const formRefs = useRef([])

  useGSAP(() => {
    // Heading Animation
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: headRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
          // markers: true // Uncomment for debug
        },
      }
    )

    // Form Fields Animation
    formRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })
  }, [])

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className='relative w-full px-[4vw] py-[8vh] h-screen min-h-screen'>
      <section>
      <h1 ref={headRef} className='text-[10vw] font-bold'>
        Let's collaborate
      </h1>
      </section>

      <a className='text-[4vw] tracking-wide text-gray-300' href="https://www.webli.studio" target='_blank'>
        we@webli.studio
      </a>

      <section className='mt-[8vh] text-[7vw]'>
        <h2>Say hello</h2>
      </section>

      <form
        className='w-full mt-[8vh] flex flex-col gap-[6vh]'
        onSubmit={(e) => e.preventDefault()}
      >
        <section className='w-full flex'>
          <section className='w-1/2 flex flex-col gap-[6vh] px-4'>
            <section ref={(el) => (formRefs.current[0] = el)}>
              <label className='text-[4vw]' htmlFor="name">Name</label>
              <input
                className='w-full text-[4vw] bg-transparent outline-none'
                type="text"
                name="name"
                id="name"
                placeholder='Your name'
              />
            </section>

            <section ref={(el) => (formRefs.current[1] = el)}>
              <label className='text-[4vw]' htmlFor="company">Company</label>
              <input
                className='w-full text-[4vw] bg-transparent outline-none'
                type="text"
                name="company"
                id="company"
                placeholder='Your company'
              />
            </section>

            <section ref={(el) => (formRefs.current[2] = el)}>
              <label className='text-[4vw]' htmlFor="message">Message</label>
              <textarea
                className='w-full text-[4vw] bg-transparent outline-none'
                name="message"
                id="message"
                placeholder='Start typing here'
                rows="4"
              ></textarea>
            </section>

            <section ref={(el) => (formRefs.current[3] = el)} className='w-full flex gap-2 items-center'>
              <h2 className='text-[5vw] tracking-wider border-b border-zinc-400'>Submit</h2>
              <i className="bx bx-right-arrow-alt text-[6vw]"></i>
            </section>
          </section>

          <section className='w-1/2 flex flex-col gap-[6vh] px-4'>
            <section ref={(el) => (formRefs.current[4] = el)}>
              <label className='text-[4vw]' htmlFor="subject">Subject</label>
              <input
                className='w-full text-[4vw] bg-transparent outline-none'
                type="text"
                name="subject"
                id="subject"
                placeholder='Subject'
              />
            </section>

            <section ref={(el) => (formRefs.current[5] = el)}>
              <label className='text-[4vw]' htmlFor="email">Email</label>
              <input
                className='w-full text-[4vw] bg-transparent outline-none'
                type="email"
                name="email"
                id="email"
                placeholder='Your email'
              />
            </section>
          </section>
        </section>
      </form>

      <p className="text-center text-[2.6vw] text-gray-200 absolute bottom-1 left-0 right-0 p-2">
        © {year} Webli — Crafted with passion by developers, for dreamers. All rights reserved.
      </p>
    </footer>
  )
}
