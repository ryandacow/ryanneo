"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12"
    >
      {/* Left: Photo */}
      <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <img
          src="/Profile.jpeg" // Replace with your image path
          alt="Profile"
          className="w-64 h-64 rounded-full shadow-lg object-cover"
        />
      </div>

      {/* Right: Description, Resume, Socials */}
      <div className="w-full lg:w-2/3 px-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Hi, I’m Ryan! An aspiring business analyst who indulges in problem solving and loves exploring new things!<br />
          I'm also an avid athlete, playing Ultimate Frisbee and Football. Check out my blog for some highlights of mine 🤭<br />
          Feel free to connect via my socials below! I'm always excited to meet new people 😆

        </p>
        {/* Resume Download */}
        <a
          href="/Resume.pdf" // Replace with your resume path
          download
          className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
        >
          Download my Resume
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ryanneojh/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn bg-blue-700 text-white text-4xl"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/ryandacow"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn bg-black text-white text-4xl"
          >
            <FaGithub />
          </a>
          {/* Telegram */}
          <a
            href="https://t.me/RyanDaCow"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn bg-blue-500 text-white text-4xl"
          >
            <FaTelegram />
          </a>
          {/* Gmail */}
          <a
            href="mailto:ryanneo.jh@gmail.com"
            className="icon-btn bg-red-600 text-white text-4xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;