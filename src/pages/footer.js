import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef();

  useGSAP(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white px-6 md:px-20 pt-16 pb-8 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm">
        {/* Webli branding */}
        <div>
          <h3 className="text-xl font-semibold tracking-wider text-white mb-4">Webli</h3>
          <p className="text-gray-400">
            Turning your ideas into smooth, modern, and high-performing websites. Always custom. Always minimal.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h4 className="text-white font-medium mb-2">Explore</h4>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white hover:underline">Home</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Services</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Portfolio</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div className="space-y-2">
          <h4 className="text-white font-medium mb-2">Let’s Connect</h4>
          <p className="text-gray-400">rishabhsrivastava7777@gmail.com</p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-gray-400 hover:text-white transition-all">🌐</a>
            <a href="#" className="text-gray-400 hover:text-white transition-all">💼</a>
            <a href="#" className="text-gray-400 hover:text-white transition-all">📷</a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-gray-500 text-xs text-center">
        © {new Date().getFullYear()} Webli. All rights reserved.
      </div>
    </footer>
  );
}
