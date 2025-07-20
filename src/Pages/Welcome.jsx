"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const WelcomePage = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onComplete?.(), 800);
      }, 1200);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black text-white z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/Welcome5.jpg" // Replace with your actual image path
              alt="Welcome Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />{" "}
            {/* Dark Overlay */}
          </div>

          {/* Main Content */}
          <div className="relative z-30 text-center space-y-8 px-6">
            {/* Icons */}
            <motion.div className="flex justify-center gap-6">
              {[Code2, User, FaGithub].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.2,
                    filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.8))",
                  }}
                  className="transition-all duration-300"
                >
                  {React.createElement(Icon, {
                    className: "w-10 h-10 text-white/80",
                  })}
                </motion.div>
              ))}
            </motion.div>

            {/* Welcome Message */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-violet-500 neon-glow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to My Portfolio
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.p
              className="text-lg text-indigo-300 drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Let's explore my journey together 🚀
            </motion.p>

            {/* Interactive Button */}
            <motion.button
              className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-600 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-300 animate-glow"
              onClick={handleClick}
              whileHover={{
                scale: 1.1,
                filter: "drop-shadow(0px 0px 12px rgba(99, 102, 241, 0.8))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              {step === 0 ? "Get Started" : "Great! Let's go!"}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePage;
