"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Download, 
  X, 
  ArrowRight,
  Code2,
  Smartphone,
  Cpu,
  Database,
  BrainCircuit,
  Zap,
  CheckCircle2,
  Info,
  Search,
  Layers,
  Activity,
  Terminal,
  ShieldCheck,
  Timer,
  Server
} from "lucide-react";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  logo: React.ElementType;
  image?: string;
  status?: string;
  githubUrl?: string;
  serverGithubUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  backendLiveUrl?: string;
  downloadUrl?: string;
  tags: string[];
  images?: string[];
  details: {
    problem: string;
    solution: string;
    features: string[];
    techStack: { name: string; icon: any; desc: string }[];
    architecture?: { icon: any; label: string; sub: string }[];
  };
};

const projects: Project[] = [
  {
    id: "bingwa-shambani",
    title: "Bingwa Shambani",
    tagline: "Crop Diseases Classifier and Recommender System",
    description: "An AI-powered mobile application that classifies crop diseases from leaf images and provides AI-driven personalized treatment recommendations.",
    logo: BrainCircuit,
    image: "/onboard.jpeg",
    status: "Production",
    githubUrl: "https://github.com/kevinmagu418/Bingwa-expo.git",
    serverGithubUrl: "https://github.com/kevinmagu418/FastApi_server.git",
    liveUrl: "https://expo.dev/accounts/kevinmagu/projects/bingwa-shambani/builds/72488c5e-dc2a-4e1e-9f57-335f46c608b6",
    liveUrlLabel: "Expo App",
    tags: ["React Native", "FastAPI", "MobileNetV2", "Supabase", "RAG"],
    images: ["/actualscan.jpeg", "/results.jpeg", "/aiassistant.jpeg", "/payment.jpeg"],
    details: {
      problem: "Farmers in rural areas lack access to expert agronomists, leading to up to 40% crop loss due to delayed disease identification.",
      solution: "An end-to-end AI pipeline that processes leaf images on a FastAPI backend, identifies diseases using MobileNetV2, and generates treatment plans using LLMs grounded in verified agricultural data.",
      features: [
        "Real-time image scanning and classification",
        "Multilingual AI Assistant (English, Swahili, Sheng)",
        "RAG-based personalized treatment recommendations",
        "Offline-ready architectural considerations"
      ],
      techStack: [
        { name: "Expo/React Native", icon: Smartphone, desc: "Cross-platform mobile interface optimized for rural connectivity." },
        { name: "FastAPI", icon: Zap, desc: "High-performance asynchronous backend for AI model orchestration." },
        { name: "MobileNetV2", icon: Cpu, desc: "Computer vision model balanced for accuracy and mobile inference speed." },
        { name: "Supabase", icon: Database, desc: "Backend-as-a-Service for secure data storage and real-time flow." }
      ],
      architecture: [
        { icon: Smartphone, label: "Mobile App", sub: "Expo/RN" },
        { icon: Cpu, label: "FastAPI", sub: "Python" },
        { icon: BrainCircuit, label: "AI Model", sub: "MobileNetV2" },
        { icon: Database, label: "RAG Engine", sub: "Vector DB" },
        { icon: Zap, label: "LLM", sub: "Llama-3" }
      ]
    }
  },
  {
    id: "kazi-radar",
    title: "KaziRadar",
    tagline: "AI Agent for Autonomous Opportunity Discovery",
    description: "A production-grade intelligent data pipeline acting as an AI Agent, automating the discovery, extraction, and structuring of global job and grant opportunities.",
    logo: Terminal,
    image: "/applogo.png",
    status: "Production Ready",
    githubUrl: "https://github.com/kevinmagu418/kazi-radar",
    liveUrl: "https://kazi-radar-agent.vercel.app/",
    liveUrlLabel: "Frontend App",
    backendLiveUrl: "https://kazi-radar-agent-2.onrender.com",
    tags: ["Next.js 15", "BullMQ", "LLaMA 3.3", "LangChain", "Playwright", "Redis"],
    images: ["/kazintro.png", "/kazi1.png", "/kazi2.png"],
    details: {
      problem: "Fragmented, unstructured opportunity signals across the web make manual discovery labor-intensive and error-prone, resulting in missed signals and messy data.",
      solution: "A distributed producer-consumer pipeline that uses discovery heartbeats and AI-driven JSON structuring via Llama 3.3 to transform raw web signals into actionable intelligence.",
      features: [
        "Modular Micro-Task Architecture (BullMQ/Redis)",
        "AI Heartbeat for LLaMA 3.3 70B Structuring",
        "Headless Ingestion via Playwright (Dynamic React/SPA Support)",
        "12-hour Source Cooldown & High-Priority Scan Bypass",
        "Full Pipeline: Next.js Frontend -> Render Backend -> Redis/MongoDB"
      ],
      techStack: [
        { name: "Next.js 15 (App Router)", icon: Layers, desc: "Modern, high-performance frontend with Vercel optimization." },
        { name: "Node.js & BullMQ", icon: Terminal, desc: "Distributed task orchestration for scalable web scraping and processing." },
        { name: "Llama 3.3 (Groq)", icon: BrainCircuit, desc: "Elite-level AI for structuring raw text into verified JSON objects." },
        { name: "Playwright", icon: Search, desc: "Industrial-grade browser automation for deep-web opportunity discovery." }
      ],
      architecture: [
        { icon: Activity, label: "Scheduler", sub: "Discovery & AI Cycles" },
        { icon: Search, label: "Ingestion", sub: "Playwright / Multi-Fetchers" },
        { icon: Layers, label: "Queue System", sub: "BullMQ / Redis Orchestration" },
        { icon: BrainCircuit, label: "AI Pipeline", sub: "Llama 3.3 / JSON Structuring" },
        { icon: Server, label: "Deployment", sub: "Vercel / Render / MongoDB" }
      ]
    }
  }
];

export const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Products</span></h2>
        <p className="text-muted max-w-2xl mx-auto">Engineering solutions from mobile AI to scalable web systems.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="glass-card overflow-hidden group border border-white/10 hover:border-primary/50 transition-all duration-500"
          >
            <div className="h-64 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center relative overflow-hidden">
               {project.image ? (
                 <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
               ) : (
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 group-hover:scale-110 transition-transform duration-700" />
               )}
               <project.logo size={64} className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute bottom-4 left-4 flex gap-2">
                 {project.tags.slice(0, 3).map(tag => (
                   <span key={tag} className="px-2 py-1 rounded-md bg-black/40 backdrop-blur-md text-[10px] text-white/70 border border-white/5 uppercase tracking-widest">{tag}</span>
                 ))}
               </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                {project.status && (
                  <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="text-primary-glow text-xs font-bold uppercase tracking-widest mb-4">{project.tagline}</p>
              <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  {project.githubUrl && <a href={project.githubUrl} className="text-muted hover:text-white transition-colors"><Github size={20} /></a>}
                  {project.downloadUrl && <a href={project.downloadUrl} className="text-muted hover:text-white transition-colors"><Download size={20} /></a>}
                  {project.liveUrl && <a href={project.liveUrl} className="text-muted hover:text-white transition-colors"><ExternalLink size={20} /></a>}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/btn"
                >
                  View Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0F0F14] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0F0F14]/80 backdrop-blur-md z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <selectedProject.logo size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                    <p className="text-xs text-muted uppercase tracking-widest">{selectedProject.tagline}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-12">
                    {/* Overview */}
                    <section>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <Info size={16} /> Overview
                      </h4>
                      <p className="text-lg text-muted leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </section>

                    {/* Screenshots Gallery - New Section */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <section>
                        <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Product Features In Action</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedProject.images.map((img, i) => (
                            <div key={i} className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                              <img 
                                src={img} 
                                alt={`${selectedProject.title} screenshot ${i + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <p className="text-[10px] text-white/80 font-medium">Feature Highlight {i + 1}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Problem/Solution */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                        <h5 className="font-bold text-red-400 mb-2">The Challenge</h5>
                        <p className="text-sm text-muted leading-relaxed">{selectedProject.details.problem}</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                        <h5 className="font-bold text-green-400 mb-2">The Solution</h5>
                        <p className="text-sm text-muted leading-relaxed">{selectedProject.details.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <section>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Built With</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.details.techStack.map((tech, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary shrink-0">
                              <tech.icon size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white mb-1">{tech.name}</p>
                              <p className="text-[11px] text-muted leading-snug">{tech.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Features */}
                    <section>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.details.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-muted">
                            <CheckCircle2 size={16} className="text-primary shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="space-y-8">
                    {/* Architecture Node List (if exists) */}
                    {selectedProject.details.architecture && (
                      <div className="p-6 rounded-2xl bg-primary/[0.03] border border-primary/10">
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Architecture</h4>
                        <div className="space-y-4">
                          {selectedProject.details.architecture.map((node, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/50 transition-colors">
                                <node.icon size={18} />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-white">{node.label}</p>
                                <p className="text-[10px] text-muted uppercase tracking-tighter">{node.sub}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      {selectedProject.liveUrl && (
                        <a 
                          href={selectedProject.liveUrl}
                          target="_blank"
                          className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(255,77,141,0.2)]"
                        >
                          <Smartphone size={20} />
                          {selectedProject.liveUrlLabel || "View Live"}
                        </a>
                      )}

                      {selectedProject.backendLiveUrl && (
                        <a 
                          href={selectedProject.backendLiveUrl}
                          target="_blank"
                          className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                          <Server size={20} />
                          Backend Live API
                        </a>
                      )}
                      
                      {selectedProject.githubUrl && (
                        <a 
                          href={selectedProject.githubUrl} 
                          target="_blank"
                          className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                          <Github size={20} />
                          {selectedProject.serverGithubUrl ? "Mobile Repo" : "GitHub Repository"}
                        </a>
                      )}

                      {selectedProject.serverGithubUrl && (
                        <a 
                          href={selectedProject.serverGithubUrl} 
                          target="_blank"
                          className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                          <Server size={20} />
                          FastAPI Server Repo
                        </a>
                      )}

                      {selectedProject.downloadUrl && (
                        <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                          <Download size={20} />
                          Download Assets
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
