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
      className="group perspective cursor-pointer w-[18rem] mx-auto" // Fixed width and centralized
      onClick={handleFlip}
    >
      <div
        className={`relative h-96 transform-style-preserve transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Frontside */}
        <div
          className={`absolute w-full h-full rounded-lg shadow-lg overflow-hidden transform-style-backface-hidden transition-all hover:translate-y-[-3px] group-hover:shadow-lg ${
            project.color.bg
          } ${project.color.text}`}
        >
          <div className="flex flex-col items-center justify-center h-full px-5">
            {/* Render Icon or Image */}
            {project.image && (<img
                src={project.image}
                alt={project.name}
                className={`${
                  project.scale || "w-28 h-28"
                } mb-4 object-contain`}
              />)}
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-lg font-semibold text-center mb-4">
              {project.context}
            </p>
            <p className="text-left text-base w-full">{project.shortDesc}</p>
          </div>
        </div>

        {/* Backside */}
        <div
          className={`absolute w-full h-full rounded-lg shadow-lg overflow-hidden transform rotate-y-180 transform-style-backface-hidden transition-all hover:translate-y-[-3px] ${
            project.color.bg
          } ${project.color.text}`}
        >
          <div className="flex flex-col items-center justify-center h-full px-4 py-6">
            <h3 className="text-2xl font-bold mb-6 text-center">
              More Details!
            </h3>
            <div className="flex flex-wrap gap-4 justify-center max-w-full px-4">
              {/* Source Button */}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 border-2 rounded-lg shadow-md transition text-sm flex items-center gap-2 ${
                  project.color.text
                } ${project.color.bg} border-${project.color.text} hover:translate-y-[-3px]`}
              >
                <FaGithub /> Source
              </a>
              {/* View Button */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 border-2 rounded-lg shadow-md transition text-sm flex items-center gap-2 ${
                  project.color.text
                } ${project.color.bg} border-${project.color.text} hover:translate-y-[-3px]`}
              >
                <FaExternalLinkAlt /> View
              </a>
              {/* Optional Blog Button */}
              {project.blog && (
                <a
                  href={project.blog}
                  className={`px-4 py-2 border-2 rounded-lg shadow-md transition text-sm flex items-center gap-2 ${
                    project.color.text
                  } ${project.color.bg} border-${project.color.text} hover:translate-y-[-3px]`}
                >
                  <FaBook /> Blog
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;