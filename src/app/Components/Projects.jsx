"use client";

import React from "react";
import { projects } from "../Data/dataProjects"; // Import project data
import ProjectCard from "./ProjectCard"; // Import the reusable card component

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-gray-800 dark:text-gray-200 text-center">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="mx-8">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;