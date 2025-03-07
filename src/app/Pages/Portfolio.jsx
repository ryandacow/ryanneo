"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Award, Briefcase } from "lucide-react";
import ProjectCard from "../Components/ProjectCard";
import ExperienceCard from "../Components/ExperienceCard";
import TechStackIcon from "../Components/TechStackIcon";
import { projects } from "../../Data/dataProjects"; 
import { experiences } from "../../Data/dataExperience";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiVercel , SiFlask , SiSupabase, SiRender} from "react-icons/si";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";

const techStacks = [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, language: "HTML" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, language: "CSS" },
    { icon: <FaJs size={40} className="text-yellow-400" />, language: "JavaScript" },
    { icon: <FaReact size={40} className="text-blue-400" />, language: "ReactJS" },
    { icon: <SiNextdotjs size={40} className="text-black-500" />, language: "Next.js" },
    { icon: <SiTailwindcss size={40} className="text-blue-400" />, language: "Tailwind CSS" },
    { icon: <FaPython size={40} className="text-yellow-400" />, language: "Python" },
    { icon: <SiFlask size={40} className="text-blue-500" />, language: "Flask" },
    { icon: <img src="/SQL.svg" alt="SQL" className="w-7 h-10" />, language: "SQL" },
    { icon: <img src="/Pandas.svg" alt="Pandas" className="w-10 h-10" />, language: "Pandas" },
    { icon: <img src="/NumPy.svg" alt="NumPy" className="w-10 h-10" />, language: "NumPy" },
    { icon: <img src="/Sklearn.svg" alt="Scikit-Learn" className="w-14 h-10" />, language: "Scikit-Learn" },
    { icon: <SiVercel size={40} className="text-black" />, language: "Vercel" },
    { icon: <SiRender size={40} className="text-black" />, language: "Render" },
    { icon: <SiSupabase size={40} className="text-emerald-300" />, language: "Supabase" },
    { icon: <SiFirebase size={40} className="text-orange-400" />, language: "Firebase" },
    { icon: <PiMicrosoftExcelLogoBold size={40} className="text-green-600" />, language: "Excel" },
    { icon: <img src="/PowerBi.svg" alt="Power BI" className="w-10 h-10" />, language: "Power BI" },
  ];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="min-h-screen w-full text-gray-800 pt-24" // Adjusted height
    >
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
            Explore my journey through experience, projects, and technical expertise.
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
        { id: "projects", icon: <Code className="w-4 h-4 md:w-5 md:h-5" />, label: "Projects" },
        { id: "experiences", icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5" />, label: "Experiences" },
        { id: "skills", icon: <Award className="w-4 h-4 md:w-5 md:h-5" />, label: "Skills" },
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
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center items-center text-center"
            >
             {techStacks.map((stack, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
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