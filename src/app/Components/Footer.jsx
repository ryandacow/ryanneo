"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6 px-6 md:px-12 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
        
        {/* Left Side - Copyright */}
        <p className="mb-4 md:mb-0">&copy; RyanNeo 2025</p>

        {/* Middle - Inspirations */}
        <p className="text-center">
          Inspired by  
          <a href="https://www.jordangilroy.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition"> Jordan Gilroy </a>  
          &  
          <a href="https://www.eki.my.id/#Portofolio" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition"> Eki</a>
        </p>

        {/* Right Side - Social Icons */}
        <div className="flex gap-4">
          <SocialIcon href="https://www.linkedin.com/in/ryanneojh/" icon={<FaLinkedin />} color="text-blue-700" />
          <SocialIcon href="https://github.com/ryandacow" icon={<FaGithub />} color="text-gray-800 dark:text-gray-300" />
          <SocialIcon href="https://t.me/RyanDaCow" icon={<FaTelegram />} color="text-blue-500" />
          <SocialIcon href="mailto:ryanneo.jh@gmail.com" icon={<FaEnvelope />} color="text-red-600" />
        </div>

      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} text-xl md:text-2xl hover:opacity-80 transition`}
  >
    {icon}
  </a>
);

export default Footer;