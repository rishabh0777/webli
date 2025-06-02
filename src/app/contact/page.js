"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [year, setYear] = useState(2023)
  const [myMessage, setMyMessage] = useState('')
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
    company:""
  });

  const handleChange = (e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    setFormData((prev)=>({...prev, [name]: value}));
  };

 
  useEffect(()=>{
    const date = new Date()
    setYear(date.getFullYear())
  },[])

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 768px)": () => {
          gsap.fromTo(
            ".heading",
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: ".heading",
                start: "top 80%",
                scrub: true
              },
            }
          );

          gsap.fromTo(
            ".input-group",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: ".input-group",
                start: "top 90%",
                end: "top 60%",
                scrub: true
              },
            }
          );

          gsap.fromTo(
            ".footer-icons",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".footer-icons",
                start: "top 95%",
                scrub: true
              },
            }
          );
        },

        // Mobile
        "(max-width: 767px)": () => {
          gsap.fromTo(
            ".heading",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: ".heading",
                start: "top 85%",
                scrub: true
              },
            }
          );

          gsap.fromTo(
            ".input-group",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: ".input-group",
                start: "top 90%",
                scrub:true
              },
            }
          );

          gsap.fromTo(
            ".footer-icons",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".footer-icons",
                start: "top 95%",
                scrub: true
              },
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const messageSubmissionAnimation = async (e)=>{
    e.preventDefault()
    if(![
      formData.name, 
      formData.subject,
      formData.message,
      formData.email,
      formData.company
    ]){
      setMyMessage("All fields are required!")
    }
    try {
      const data = await axios.post('https://backend-webli.onrender.com/send', formData)
      console.log(data.response)
    } catch (error) {
      setMyMessage('Something went wrong!')
    }
    
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full h-screen flex sm:flex-col md:flex-row items-center px-[4vw]"
    >
      {/* Left Side */}
      <div className="md:w-1/2 sm:w-full md:h-[80%] flex flex-col justify-between">
        <div>
          <h1 className="heading md:text-[5vw] sm:text-[10vw]">Let's collaborate</h1>
          <p className="heading">www.webli.studio</p>
        </div>
        <div className="flex flex-col gap-2 sm:hidden md:flex heading">
          <h3>Find us</h3>
          <div className="flex gap-2 text-[2vw]">
            <i className="ri-github-fill cursor-pointer text-[1.3vw]"></i>
            <i className="ri-instagram-fill cursor-pointer text-[1.3vw]"></i>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full h-[60%] sm:mt-[6vh] flex flex-col md:justify-between">
        <h2 className="heading md:text-[2.4vw] sm:text-[7vw]">Say hello</h2>
        <form action="">
          <div className="flex md:flex-row sm:flex-col gap-6">
            {/* Left Column */}
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <div className="mt-6 flex flex-col sm:gap-4 md:gap-2 input-group">
                <label htmlFor="name">Name</label>
                <input
                  className="w-[90%] md:w-[60%] border-b border-gray-400 outline-none md:text-[1vw]"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col sm:gap-4 md:gap-2 input-group">
                <label htmlFor="company">Company</label>
                <input
                  className="w-[90%] md:w-[60%] border-b border-gray-400 outline-none md:text-[1vw]"
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}

                />
              </div>

              <div className="flex flex-col sm:gap-4 md:gap-2 input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="w-[90%] md:w-[60%] border-b border-gray-400 outline-none md:text-[1vw] resize-none h-[3.5vh]"
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}

                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <div className="md:mt-6 flex flex-col sm:gap-4 md:gap-2 input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  className="w-[90%] md:w-[60%] border-b border-gray-400 outline-none md:text-[1vw]"
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}

                />
              </div>

              <div className="flex flex-col sm:gap-4 md:gap-2 input-group">
                <label htmlFor="email">Email</label>
                <input
                  className="w-[90%] md:w-[60%] border-b border-gray-400 outline-none md:text-[1vw]"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}

                />
              </div>
            </div>
          </div>

          <button onClick={messageSubmissionAnimation} className="border-b border-gray-400 sm:text-[4.5vw] md:text-[1vw] mt-6 cursor-pointer hover:text-green-500 transition duration-300">
            Submit <i className="ri-arrow-right-long-line"></i>
          </button>
        </form>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4 w-full justify-between md:justify-center md:w-[80%] sm:w-[90%]">
      <div className="flex flex-col gap-2 sm:flex md:hidden heading">
          <h3>Find us</h3>
          <div className="flex gap-2 text-[4vw]">
            <i className="ri-github-fill cursor-pointer text-[1.8vw]"></i>
            <i className="ri-instagram-fill cursor-pointer text-[1.8vw]"></i>
          </div>
        </div>
        <p className="md:text-[1vw] sm:text-[3vw] text-center">
          © {year} Webli Studio. All rights reserved.
        </p>
      </div>
    </section>
  );
}
