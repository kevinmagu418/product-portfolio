"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Brain, 
  Wrench, 
  Component
} from "lucide-react";
import {
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  RiFlowChart,
  RiRobot2Line,
  RiShieldKeyholeLine,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiPytorch,
  SiSocketdotio,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandReactNative, TbBrain, TbBrandVscode } from "react-icons/tb";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Skill = {
  name: string;
  icon: React.ElementType;
};

type SkillCategory = {
  id: string;
  label: string;
  icon: React.ElementType;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "React Native", icon: TbBrandReactNative },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "JWT Auth", icon: RiShieldKeyholeLine },
      { name: "WebSockets", icon: SiSocketdotio },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", icon: SiTensorflow },
      { name: "Deep Learning", icon: SiPytorch },
      { name: "AI SDK Integration", icon: SiOpenai },
      { name: "Agentic AI", icon: RiRobot2Line },
      { name: "Computer Vision", icon: TbBrain },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: FaDocker },
      { name: "CI/CD", icon: RiFlowChart },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    id: "softwares",
    label: "Softwares",
    icon: Component,
    skills: [
      { name: "Figma (UI/UX)", icon: FaFigma },
      { name: "VS Code", icon: TbBrandVscode },
    ],
  },
];

export const DevToolbox = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Technical <span className="text-primary">Toolbox</span></h2>
        <p className="text-muted max-w-2xl mx-auto">
          A collection of technologies I use to bring ideas to life, from frontend polish to backend power.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8 p-1 bg-white/5 rounded-2xl border border-white/10 max-w-3xl mx-auto">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              activeTab === category.id
                ? "bg-primary text-white shadow-[0_0_15px_rgba(255,77,141,0.3)]"
                : "text-muted hover:text-white hover:bg-white/5"
            )}
          >
            <category.icon size={16} />
            {category.label}
          </button>
        ))}
      </div>

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/[0.02] transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-muted group-hover:text-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                  <skill.icon size={24} />
                </div>
                
                <span className="text-sm font-semibold text-muted group-hover:text-white transition-colors relative z-10">
                  {skill.name}
                </span>

                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
