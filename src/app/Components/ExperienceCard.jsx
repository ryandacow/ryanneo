"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";

const ExperienceCard = ({ experience }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Check if this experience should be a placeholder
  const isPlaceholder = experience.placeholder !== undefined;

  const placeholderExperience = {
    role: "Seeking to Intern!",
    company: "Looking for opportunities to grow",
    duration: "Available May to August 2025",
    description:
      "I'm currently seeking an internship opportunity to learn and contribute in a professional environment!",
  };

  // Determine which experience to show
  const currentExperience = isPlaceholder ? placeholderExperience : experience;

  return (
    <div
      className="group perspective cursor-pointer w-[26rem] h-[12rem] mx-auto"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transform-style-preserve transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-purple-100 rounded-lg shadow-lg p-4 flex transform-style-backface-hidden transition-all hover:translate-y-[-3px] group-hover:shadow-xl">
          {/* Left: Company Image (Only for real experiences) */}
          {!isPlaceholder && (
            <div className="w-1/3 flex justify-center items-center">
                <img
                src={currentExperience.image}
                alt={currentExperience.company}
                className="h-100 w-100 object-contain ml-10"
                />
            </div>
          )}

          {/* Right: Role, Company, Duration (Full Width for Placeholder) */}
          <div className={`${isPlaceholder ? "w-full text-center" : "w-2/3 ml-10"} flex flex-col justify-center`}>
            <h3 className={`text-lg font-bold ${isPlaceholder ? "text-indigo-500" : ""}`}>
              {currentExperience.role}
            </h3>
            <p className="text-indigo-500">{currentExperience.company}</p>
            <p className="text-gray-500 text-sm">{currentExperience.duration}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-purple-100 rounded-lg shadow-lg p-6 transform rotate-y-180 transform-style-backface-hidden transition-all hover:translate-y-[-3px]">
          <h3 className="text-lg font-bold text-center">Details</h3>
          <p className="text-gray-700 text-sm mt-2">
            {currentExperience.description}
          </p>

          {/* Read More Button (Only if blog link exists) */}
          {currentExperience.blog && (
            <div className="mt-4 flex justify-center">
              <a
                href={currentExperience.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-violet-200 text-white rounded-lg shadow-md transition hover:bg-indigo-600"
              >
                <FaBookOpen /> Read More
              </a>
            </div>
          )}

          {/* Placeholder Icon if Seeking Internship */}
          {isPlaceholder && (
            <div className="mt-4 flex justify-center">
              <FaUserGraduate className="text-indigo-500 text-4xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;