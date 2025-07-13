"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import { toast } from 'react-hot-toast';
  

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [year, setYear] = useState(2023);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heading", {
        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heading",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      gsap.from('[data-gsap="input"]', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '[data-gsap="input"]',
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const messageSubmissionAnimation = async (e) => {
    e.preventDefault();
    const { name, email, subject, message, company } = formData;

    if (!name || !email || !subject || !message || !company) {
       toast.error("All fields are required!");
  return;
    }

    setLoading(true);
    try {
      await axios.post('https://backend-webli.onrender.com/send', formData);
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "", company: "" });
    } catch (error) {
      toast.error("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen flex sm:flex-col md:flex-row items-center px-[4vw] py-[6vh]"
    >
      {/* Left Side */}
      <div className="md:w-1/2 sm:w-full md:h-[80%] flex flex-col justify-between mb-10 md:mb-0">
        <div>
          <h1 className="heading md:text-[5vw] sm:text-[10vw]">Let&apos;s collaborate</h1>
          <p
            className="heading cursor-pointer underline"
            onClick={() => window.open("https://webli.vercel.app", "_blank")}
          >
            webli.vercel.app
          </p>
        </div>

        {/* Social Links - Desktop Only */}
        <div className="hidden md:flex flex-col gap-2 heading">
          <h3>Find us</h3>
          <div className="flex gap-3 items-center text-[2vw]">
            <i onClick={() => window.open("https://instagram.com/webli__", "_blank")} className="ri-instagram-fill cursor-pointer"></i>
            <i onClick={() => window.open("https://www.linkedin.com/in/webli-creative-web-development-agency-250a5336b", "_blank")} className="ri-linkedin-fill cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full flex flex-col gap-5">
        <h2 className="heading md:text-[2.4vw] sm:text-[7vw]">Say hello</h2>
        <form onSubmit={messageSubmissionAnimation}>
          <div className="flex md:flex-row sm:flex-col gap-6">
            {/* Left Column */}
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <div data-gsap="input" className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className="border-b border-gray-400 outline-none md:text-[1vw]"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div data-gsap="input" className="flex flex-col gap-2">
                <label htmlFor="company">Company</label>
                <input
                  className="border-b border-gray-400 outline-none md:text-[1vw]"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div data-gsap="input" className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  className="border-b border-gray-400 outline-none md:text-[1vw] resize-none h-[5vh]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <div data-gsap="input" className="flex flex-col gap-2">
                <label htmlFor="subject">Subject</label>
                <input
                  className="border-b border-gray-400 outline-none md:text-[1vw]"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div data-gsap="input" className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  className="border-b border-gray-400 outline-none md:text-[1vw]"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Submit & Mobile Social */}
          <div className="flex justify-between items-center mt-6">
            {/* Mobile Icons */}
            <div className="flex gap-3 items-center md:hidden">
              <i
                onClick={() => window.open("https://instagram.com/webli__", "_blank")}
                className="ri-instagram-fill text-[6vw] cursor-pointer"
              ></i>
              <i
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/webli-creative-web-development-agency-250a5336b",
                    "_blank"
                  )
                }
                className="ri-linkedin-fill text-[6vw] cursor-pointer"
              ></i>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`border-b border-gray-400 sm:text-[4.5vw] md:text-[1vw] hover:text-green-500 transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Submit"} <i className="ri-arrow-right-line"></i>
            </button>
          </div>

        </form>
      </div>

      {/* Footer Year */}
      <div className="w-full absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center mt-6">
        <p className="text-center sm:text-[3.6vw] md:text-[1vw]">
          © {year} Webli Studio. All rights reserved.
        </p>
      </div>
    </section>
  );
}
