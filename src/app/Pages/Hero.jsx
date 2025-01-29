"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";

// Typewriter effect roles
const roles = ["Business Analyst", "Data Scientist", "Full Stack Developer"];
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseDuration = 1000;

const Hero = () => {
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
      className="flex flex-col lg:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900 px-32 pt-[10rem] pb-6 lg:px-24 lg:pb-30"
      style = {{ scrollMarginTop: "6rem" }}
    >
      {/* Text Content */}
      <div className="lg:w-1/2 lg:pr-12 ml-25 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Hi there 👋 I am
          </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400">
            Ryan Neo
          </h1>

          {/* Typewriter Effect */}
          <p className="text-xl md:text-2xl mt-4 mb-6 text-indigo-500 font-semibold">
            Aspiring <span className="text-indigo-700 dark:text-indigo-300">{currentText}</span><span className="text-indigo-500">|</span>
          </p>

          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
            Undergraduate at NUS, eager to learn and contribute!
          </p>

          {/* Portfolio Button */}
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all animate-glow"
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
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-64 lg:w-96 h-[550px]">
          {/* Gradient Rectangle */}
          <div className="absolute bottom-0 w-full h-6/7 bg-gradient-to-b from-blue-300 to-indigo-500 dark:from-indigo-900/20 dark:to-blue-900/30 rounded-lg shadow-xl border border-blue-300 dark:border-indigo-500" />
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 w-full h-full"
          >
            <img
              src="/Profile.png"
              alt="Ryan Neo"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </motion.div>
        </div>
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
    className={`${color} text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-md hover:shadow-lg transition-shadow animate-glow`}
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