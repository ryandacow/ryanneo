"use client";

import React from "react";
import { projects } from "../Data/dataProjects"; // Import project data
import ProjectCard from "./ProjectCard"; // Import the reusable card component

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;