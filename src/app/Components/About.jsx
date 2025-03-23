"use client";
import React, { useState, useEffect } from "react";
import { ChevronsLeftRight, Globe, Target, Heart, Brain, Trophy } from "lucide-react";
import { PiShirtFolded } from "react-icons/pi";
import { projects } from "../../Data/dataProjects";
import { motion } from "framer-motion";


const About = () => {
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    let targetProjects = projects.length;
    let projectInterval = setInterval(() => {
      setProjectsCount((prev) => (prev < targetProjects ? prev + 1 : targetProjects));
    }, 100);

    return () => clearInterval(projectInterval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center text-center text-gray-800 px-6 py-16 xl:py-30 lg:pb-50 relative z-10"
      style={{ scrollMarginTop: "6rem" }}
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Profile Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30, }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50/80 to-blue-50/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-200/30 rounded-full blur-xl" />
          
          {/* Profile Image */}
          <div className="relative w-52 h-52 mt-4 mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-full transform group-hover:rotate-12 transition-transform duration-300" />
            <img
              src="/Profile2.png"
              alt="Profile"
              className="relative w-full h-full rounded-full shadow-xl object-cover border-4 border-white/80 z-10 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Resume Download */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Resume.pdf"
            download
            className="w-full px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all text-center"
          >
            Download Resume
          </motion.a>

          {/* Stats Cards */}
          <div className="w-full mt-8 space-y-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-indigo-100rounded-lg">
                <ChevronsLeftRight className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-center flex-1">
                <p className="text-xl font-bold text-indigo-600">{projectsCount}+</p>
                <p className="text-gray-600">Projects</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-center flex-1">
                <p className="text-xl font-bold text-indigo-600">1+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Content Section */}
        <div className="col-span-2 grid grid-rows-2 gap-8 ">
          {/* About Me Card */}
          <motion.div
            initial={{ opacity:0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5 }}
            className="relative backdrop-blur-sm shadow-2xl rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-indigo-50/80 to-blue-50/80"
          >
            <div className="flex -top-20 -left-20  bg-blue-200/30 rounded-full blur-xl" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 text-justify">
              Hi, I'm <span className="font-semibold text-indigo-600">Ryan</span>! 
              An aspiring Business Analyst who indulges in problem solving and loves exploring new things!
              I'm also an avid athlete, playing Ultimate Frisbee and Football.
              Feel free to connect via my socials! Always excited to meet new people 😆
            </p>
          </motion.div>

          {/* Goals & Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-indigo-50/80 to-blue-50/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl" />
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-10 h-10 text-indigo-600" />
                <h3 className="text-2xl font-bold text-indigo-700">2025 Goals</h3>
              </div>
              <ul className="space-y-3 pl-2 text-gray-700">
                <li className="flex gap-3 items-center text-left">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  Break into my Ultimate club's 1st team
                </li>
                <li className="flex gap-3 items-center text-left">
                  <div className="w-2.5 h-2 bg-indigo-500 rounded-full" />
                  Implement 1 Simple ML-powered Webapp
                </li>
                <li className="flex gap-3 items-center text-left">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  Implement 1 Deep-Learning Model
                </li>
              </ul>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-indigo-50/80 to-blue-50/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl" />
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-10 h-10 text-indigo-600" />
                <h3 className="text-2xl font-bold text-indigo-700">Passions</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <Trophy className="w-6 h-6 text-indigo-600" />
                  <span>Sports</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <Brain className="w-6 h-6 text-indigo-600" />
                  <span>AI Tech</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  <span>Travel</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <PiShirtFolded className="w-6 h-6 text-indigo-600" />
                  <span>Fashion</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;