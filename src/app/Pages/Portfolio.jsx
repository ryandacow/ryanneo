"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Award, Briefcase } from "lucide-react";
import ProjectCard from "../Components/ProjectCard";
import TechStackIcon from "../Components/TechStackIcon";
import { projects } from "../Data/dataProjects"; 
import { experiences } from "../Data/dataExperience";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiVercel } from "react-icons/si";

const techStacks = [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, language: "HTML" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, language: "CSS" },
    { icon: <FaJs size={40} className="text-yellow-400" />, language: "JavaScript" },
    { icon: <FaReact size={40} className="text-blue-400" />, language: "ReactJS" },
    { icon: <FaNodeJs size={40} className="text-green-500" />, language: "Node.js" },
    { icon: <SiFirebase size={40} className="text-yellow-500" />, language: "Firebase" },
    { icon: <SiTailwindcss size={40} className="text-blue-400" />, language: "Tailwind CSS" },
    { icon: <SiVercel size={40} className="text-black" />, language: "Vercel" },
  ];



export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="min-h-[80vh] w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20 pb-30" // Adjusted height
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio Showcase</h2>
          <p className="text-lg leading-relaxed">
            Explore my journey through experience, projects, and technical expertise.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {[
            { id: "projects", icon: <Code className="w-5 h-5" />, label: "Projects" },
            { id: "experiences", icon: <Briefcase className="w-5 h-5" />, label: "Experiences" },
            { id: "skills", icon: <Award className="w-5 h-5" />, label: "Skills" },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                activeTab === id
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-white/10 hover:bg-white/20 text-gray-300"
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-y-16"
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 p-6 rounded-lg shadow-lg border border-white/10"
                >
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-indigo-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Skills Section */}
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
            >
             {techStacks.map((stack, index) => (
  <div key={index} className="flex flex-col items-center">
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