"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Leaf } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-primary/20 rounded-lg blur-sm group-hover:bg-primary/30 transition-colors" />
      <div className="relative bg-background border border-primary/50 w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
        <Leaf size={16} className="text-primary z-10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse" />
      </div>
    </div>
    <span className="font-bold text-white tracking-tight">Bingwa<span className="text-primary">Shambani</span></span>
  </div>
);

export const SectionWrapper = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section
    id={id}
    className={cn("py-20 px-6 md:px-12 max-w-7xl mx-auto", className)}
  >
    {children}
  </section>
);

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
}: {
  title: string;
  description: string;
  icon: any;
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={cn("glass-card p-8 flex flex-col gap-4", className)}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-muted text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export const StatCard = ({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) => (
  <div className="glass-card p-6 border-t-2 border-t-primary/50">
    <p className="text-muted text-xs uppercase tracking-widest mb-2">{label}</p>
    <h4 className="text-3xl font-bold text-white mb-1">{value}</h4>
    <p className="text-muted text-sm">{description}</p>
  </div>
);

export const StepCard = ({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: any;
}) => (
  <div className="relative flex gap-6 group">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-sm z-10 shrink-0">
        {number}
      </div>
      <div className="w-px h-full bg-gradient-to-b from-primary/40 to-transparent absolute top-10 group-last:hidden" />
    </div>
    <div className="pb-12">
      <div className="flex items-center gap-3 mb-2">
        <Icon size={18} className="text-primary-glow" />
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);
