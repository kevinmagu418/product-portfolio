"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2,
  CheckCircle2,
  BrainCircuit,
  Smartphone
} from "lucide-react";
import { 
  SectionWrapper
} from "@/components/ui-components";
import { DevToolbox } from "@/components/dev-toolbox";
import { ProjectShowcase } from "@/components/project-showcase";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <SectionWrapper className="pt-32 pb-20 text-center relative">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-6 gap-3">
            <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-wider uppercase">
              Full-Stack Software Engineer
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted text-xs font-medium">
              <div className="w-4 h-4 rounded-full bg-primary/20 overflow-hidden">
                <img src="/newkevin.jpg" alt="Kevin" className="w-full h-full object-cover" />
              </div>
              Kevin Magu Kiragu
            </div>
          </motion.div>
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Building High-Impact <span className="text-gradient">Autonomous</span> Systems
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10"
          >
            I am a <span className="text-white font-semibold">Product Builder</span> who owns the full lifecycle—from raw idea to scalable deployment.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="https://github.com/kevinmagu418/" target="_blank" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,77,141,0.3)]">
              <Github size={20} />
              GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/magu-kiragu-b1b8292b8/" target="_blank" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* ABOUT ME SECTION */}
      <SectionWrapper className="border-t border-white/5 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-card p-2">
              <div className="w-full h-full bg-[#1A1A24] rounded-2xl overflow-hidden relative group">
                <img 
                  src="/newkevin.jpg" 
                  alt="Kevin Magu Kiragu" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              I am a <span className="text-white font-semibold">Full-stack software engineer</span> and final-year Applied Computer Science student at <span className="text-white font-semibold">Egerton University</span>. 
              I specialize in building scalable web and mobile applications, backend systems, and AI-driven solutions.
            </p>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              My passion lies in fintech innovation and leveraging intelligent systems to solve real-world problems. 
              I employ an <span className="text-white font-semibold">AI-native workflow</span> to iterate rapidly and ship high-quality code. 
              I am committed to writing clean, efficient, and production-ready systems while maintaining full ownership of the end-to-end architecture and security.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium">Full-Stack Capability</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium">Mobile App Dev</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium">AI & ML Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium">System Architecture</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="mailto:kevinmagu418@gmail.com" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-muted hover:text-primary">
                <Mail size={20} />
              </a>
              <a href="https://github.com/kevinmagu418/" target="_blank" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-muted hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/magu-kiragu-b1b8292b8/" target="_blank" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-muted hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://kevins-portfolio-green.vercel.app/" target="_blank" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-muted hover:text-primary">
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* SKILLS SECTION */}
      <SectionWrapper className="border-t border-white/5">
        <DevToolbox />
      </SectionWrapper>

      {/* PROJECTS SECTION */}
      <SectionWrapper id="projects" className="border-t border-white/5">
        <ProjectShowcase />
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper className="py-32 text-center border-t border-white/5 bg-primary/[0.01]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something <span className="text-gradient">Incredible</span></h2>
          <p className="text-xl text-muted mb-12">I'm currently looking for new opportunities and collaborations.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:kevinmagu418@gmail.com" className="px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold transition-all flex items-center gap-3 text-lg shadow-[0_0_30px_rgba(255,77,141,0.4)]">
              <Mail size={24} />
              Get In Touch
            </a>
            <a href="https://github.com/kevinmagu418/" target="_blank" className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all flex items-center gap-3 text-lg">
              <Github size={24} />
              View GitHub
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-muted text-sm">© 2026 Kevin Magu Kiragu. Built with Next.js, Framer Motion, and Passion.</p>
      </footer>
    </main>
  );
}
