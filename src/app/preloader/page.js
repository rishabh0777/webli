"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  const loaderText = [
    "COOL",
    "MINIMALIST",
    "PREMIUM",
    "ELEGANT",
    "STYLISH",
    "MODERN",
    "TRENDY",
  ];

  const [currentText, setCurrentText] = useState(loaderText[0]);
  const textRef = useRef(null);
  const emojiRefs = useRef([]);

  useGSAP(() => {
    // Animate entry of the main lines
    gsap.from(".main-line", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
    });

    // Floating background emojis (continuous motion)
    emojiRefs.current.forEach((emoji, i) => {
      const floatAnim = () => {
        gsap.to(emoji, {
          x: gsap.utils.random(-30, 30),
          y: gsap.utils.random(-30, 30),
          duration: gsap.utils.random(3, 6),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      };
      floatAnim();
    });
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % loaderText.length;
      setCurrentText(loaderText[index]);

      // Animate changing text (fade + upward motion)
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917897875600", "_blank");
  };

  const emojis = ["✨", "💻", "🚀", "🎨", "🔥", "🌐", "⚡"];

  return (
    <div className="fixed inset-0 flex items-center w-full justify-center bg-black text-white z-[9999] overflow-hidden">
      {/* Floating Emojis */}
      {emojis.map((emoji, i) => (
        <span
          key={i}
          ref={(el) => (emojiRefs.current[i] = el)}
          className="absolute text-[5vw] md:text-[2vw] opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Top Info Bar */}
      <div className="absolute top-0 left-0 h-[12vh] w-full flex justify-between items-center text-[4vw] px-2 md:px-14 md:text-[1.2vw] font-light">
        <h2>
          <i className="ri-map-pin-line"></i> INDIA{" "}
          <span className="opacity-70">
            •{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}{" "}
            • {new Date().toLocaleDateString()}
          </span>
        </h2>
        <h2>
          WHATSAPP US:{" "}
          <span
            className="cursor-pointer hover:text-green-400 transition-colors"
            onClick={handleWhatsAppClick}
          >
            <i className="ri-whatsapp-line text-[5vw] md:text-[1.5vw]" />
          </span>
        </h2>
      </div>

      {/* Center Text */}
      <div className="w-[80vw] h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="main-line md:text-[2.5vw] font-light tracking-wide">
          NEED A{" "}
          <span
            ref={textRef}
            className="text-white font-bold text-[6vw] md:text-[3vw] mx-2 text-yellow-500 border-white"
          >
            {currentText}
          </span>{" "}
          WEBSITE?
        </h1>
        <p className="main-line text-[4vw] md:text-[1.2vw] opacity-80 mt-2">
          Please wait — the experience is loading beautifully...
        </p>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 h-[12vh] w-full flex justify-between items-center text-[4vw] px-2 md:px-14 md:text-[1.2vw] font-light">
        <h2>
          © {new Date().getFullYear()}{" "}
          <span
            onClick={() => window.open("https://webli.vercel.app/", "_blank")}
            className="cursor-pointer text-red-500 hover:text-yellow-300 transition-colors "
          >
            WEBLI STUDIO
          </span>
        </h2>

        <h2>
          FOLLOW US ON
          <i
            className="ri-instagram-line mx-2 cursor-pointer hover:text-pink-400 transition-colors"
            onClick={() =>
              window.open("https://www.instagram.com/webli_studio/", "_blank")
            }
          ></i>
          
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
