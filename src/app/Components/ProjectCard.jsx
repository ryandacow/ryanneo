"use client";

import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaBook } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group perspective cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-96 transform-style-preserve transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Frontside */}
        <div
          className={`absolute w-full h-full rounded-lg shadow-lg overflow-hidden transform-style-backface-hidden transition-all duration-500 group-hover:scale-102 group-hover:shadow-lg ${
            project.color.bg
          } ${project.color.text}`}
        >
          <div className="flex flex-col items-center justify-center h-full px-6">
            <img
              src={project.image}
              alt={project.name}
              className="w-28 h-28 mb-4 object-contain" // Slightly larger image
            />
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-lg font-semibold text-center mb-4">
              {project.context} {/* Centered and larger context */}
            </p>
            <p className="text-left text-base w-full">{project.shortDesc}</p> {/* Larger shortDesc */}
          </div>
        </div>

        {/* Backside */}
        <div
          className={`absolute w-full h-full rounded-lg shadow-lg overflow-hidden transform rotate-y-180 transform-style-backface-hidden transition-all duration-500 group-hover:scale-102 ${
            project.color.bg
          } ${project.color.text}`}
        >
          <div className="flex flex-col items-center justify-center h-full px-6">
            <h3 className="text-2xl font-bold mb-4">Project Details</h3>
            <p
              className="text-left text-base w-full mb-6"
              dangerouslySetInnerHTML={{
                __html: project.detailedDesc.replace(/\n/g, "<br />"),
              }}
            ></p>
            <div className="flex gap-4">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition flex items-center gap-2"
              >
                <FaGithub /> Source
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition flex items-center gap-2"
              >
                <FaExternalLinkAlt /> View
              </a>
              <a
                href={project.blog}
                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition flex items-center gap-2"
              >
                <FaBook /> Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;