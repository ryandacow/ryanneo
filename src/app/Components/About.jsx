"use client";

import React, { useState, useEffect } from "react";
import { ChevronsLeftRight, Globe } from "lucide-react";
import { projects } from "../Data/dataProjects"; // Import projects data

const About = () => {
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    let targetProjects = projects.length; // Get total projects count

    let projectInterval = setInterval(() => {
      setProjectsCount((prev) => (prev < targetProjects ? prev + 1 : targetProjects));
    }, 100);


    return () => {
      clearInterval(projectInterval);
    };
  }, []);

  return (
    <section
  id="about"
  className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 pt-30 pb-30"
>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Profile Image, Resume, and Stats */}
        <div className="flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-700 shadow-lg rounded-lg p-6 relative">
          {/* Profile Image (Aligned Higher) */}
          <div className="relative w-48 h-48 mt-5 mb-5">
            <img
              src="/Profile2.png"
              alt="Profile"
              className="w-full h-full rounded-full shadow-md object-cover border-4 border-neutral-100 dark:border-neutral-300 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Resume Download */}
          <a
            href="/Resume.pdf"
            download
            className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
          >
            Download my Resume
          </a>

          {/* Buttons for Stats */}
          <div className="mt-8 flex gap-4">
            {/* Total Projects */}
            <button className="flex items-center gap-2 px-4 py-2 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-indigo-300 rounded-lg shadow-md hover:bg-sky-200 dark:hover:bg-sky-800 transition">
              <ChevronsLeftRight className="w-8 h-8" />
              <span>{projectsCount} Total Projects</span>
            </button>

            {/* Years of Experience */}
            <button className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg shadow-md hover:bg-green-200 dark:hover:bg-green-800 transition">
              <Globe className="w-8 h-8" />
              <span>1 Year of Experience</span>
            </button>
          </div>
        </div>

        {/* Right: Bento Grid Layout */}
        <div className="col-span-2 grid grid-rows-2 gap-6">
          {/* Main Grid: About Me */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              Hi, I’m Ryan! An aspiring business analyst who indulges in problem-solving and loves exploring new things!
              I'm also an avid athlete, playing Ultimate Frisbee and Football. Check out my blog for some highlights 🤭
              Always eager to learn and meet new people! 😆
            </p>
          </div>

          {/* Bento Grid: Goals & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goals */}
            <div className="bg-indigo-100 dark:bg-indigo-900 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                Goals for 2025!
              </h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Finish my Portfolio Website</li>
                <li>Learn 1 Machine Learning Model</li>
                <li>Implement a practical Data Analysis System</li>
                <li>First team for my Ultimate Club!</li>
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-green-100 dark:bg-green-900 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-2">
                Interests/Hobbies
              </h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Ultimate Frisbee</li>
                <li>Manchester United</li>
                <li>Artificial Intelligence</li>
                <li>Old Money Fashion :o</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;