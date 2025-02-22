"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";

// Typewriter effect roles
const roles = ["Business Analyst", "Data Scientist", "Full Stack Developer"];
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseDuration = 1000;

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40
  });

  const yText = useTransform(smoothScroll, [0, 1], [0, -200]);
  const scaleLogo = useTransform(smoothScroll, [0, 1], [1, 0.8]);
  const opacityOverlay = useTransform(smoothScroll, [0, 0.5], [1, 0]);

  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), erasingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < role.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }

    setCurrentText(role.substring(0, charIndex));
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
  id="home"
  className="flex flex-col lg:flex-row items-center justify-center px-6 pt-24 pb-24 min-h-[100dvh] w-full mx-auto"
  style={{ scrollMarginTop: "6rem", background: "transparent" }}
>
  {/* Text Content */}
  <div className="lg:w-1/2 flex flex-col items-center text-center lg:text-left px-4 md:px-8 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-2 text-gray-800">
        Hi there 👋 I am
      </h1>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-indigo-600">
        Ryan Neo
      </h1>

      {/* Typewriter Effect */}
      <p className="text-lg md:text-2xl lg:text-3xl mt-4 mb-6 text-indigo-500 font-semibold">
        Aspiring <span className="text-indigo-700">{currentText}</span><span className="text-indigo-500">|</span>
      </p>

      <p className="text-md md:text-lg lg:text-xl mb-8 text-gray-600 max-w-2xl">
        Undergraduate at NUS, eager to learn and contribute! <br />
        Actively seeking tech internship opportunities this summer! <br />
      </p>

      {/* Portfolio Button */}
      <motion.a
        href="#portfolio"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-indigo-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all animate-glow"
      >
        View My Work
      </motion.a>

      {/* Social Buttons */}
      <div className="flex justify-center lg:justify-start gap-6 mt-12">
        <SocialIcon 
          href="https://www.linkedin.com/in/ryanneojh/" 
          icon={<FaLinkedin />} 
          color="bg-blue-700"
        />
        <SocialIcon
          href="https://github.com/ryandacow"
          icon={<FaGithub />}
          color="bg-black"
        />
        <SocialIcon
          href="https://t.me/RyanDaCow"
          icon={<FaTelegram />}
          color="bg-blue-500"
        />
        <SocialIcon
          href="mailto:ryanneo.jh@gmail.com"
          icon={<FaEnvelope />}
          color="bg-red-600"
        />
      </div>
    </motion.div>
  </div>

  {/* Image Container */}
  <div className="lg:w-1/2 flex justify-center items-center px-4 md:px-8 l:pt-0 pt-10">
    <motion.div 
    className="relative w-48 md:w-85 lg:w-123 h-[450px] md:h-[700px] l:h-[700px] flex self-center"
    whileHover= {{y:-3}}
    >
      {/* Gradient Rectangle */}
      <div className="absolute bottom-0 w-full h-6/7 bg-gradient-to-b from-blue-300 to-indigo-500 rounded-lg shadow-xl border border-blue-300 animate-glow" />
      
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-0.5 w-full h-full"
      >
        <img
          src="/Profile.png"
          alt="Ryan Neo"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </motion.div>
    </motion.div>
  </div>
</section>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    className={`${color} text-white w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-2xl shadow-md hover:shadow-lg transition-shadow animate-glow`}
  >
    {icon}
  </motion.a>
);

// Glowing Button Animation
const styles = `
  @keyframes glow {
    0% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
    50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
    100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
  }
  .animate-glow {
    animation: glow 2s infinite alternate;
  }
`;

export default () => (
  <>
    <style>{styles}</style>
    <Hero />
  </>
);
