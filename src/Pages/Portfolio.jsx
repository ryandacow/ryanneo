"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Award, Briefcase } from "lucide-react";
import ProjectCard from "@/Components/ProjectCard";
import ExperienceCard from "@/Components/ExperienceCard";
import { projects } from "@/Data/dataProjects";
import { experiences } from "@/Data/dataExperience";
import { techStacks } from "@/Data/dataTechStack";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="portfolio" className="min-h-screen w-full text-gray-800 pt-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio Showcase</h2>
          <p className="text-lg leading-relaxed">
            Explore my journey through experience, projects, and technical
            expertise.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4 md:px-8 lg:px-16"
        >
          {[
            {
              id: "projects",
              icon: <Code className="w-4 h-4 md:w-5 md:h-5" />,
              label: "Projects",
            },
            {
              id: "experiences",
              icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5" />,
              label: "Experiences",
            },
            {
              id: "techstack",
              icon: <Award className="w-4 h-4 md:w-5 md:h-5" />,
              label: "Tech Stack",
            },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                activeTab === id
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-indigo-200 hover:bg-indigo-300 text-indigo-600"
              }`}
            >
              {icon}
              <span className="ml-2">{label}</span>
            </button>
          ))}
        </motion.div>

        {/* Portfolio Content */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Projects Section */}
          {activeTab === "projects" && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-y-16 pb-10"
            >
              {projects.map((project) => (
                <div key={project.id} className="mx-8">
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          )}

          {/* Experience Section */}
          {activeTab === "experiences" && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-y-8 gap-x-6"
            >
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.id || index} experience={exp} />
              ))}
            </motion.div>
          )}

          {/* Skills Section */}
          {activeTab === "techstack" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center items-center text-center"
            >
              {techStacks.map((stack, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  {stack.icon}
                  <p className="mt-2 text-sm">{stack.language}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
