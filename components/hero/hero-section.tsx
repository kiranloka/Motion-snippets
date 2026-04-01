"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function HeroSection() {
  return (
    <div className="relative flex flex-col items-start text-left w-full  pb-12 overflow-hidden">
      <BackgroundRippleEffect className="opacity-100" rows={5} cols={8} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-7xl font-semibold text-slate-900 dark:text-slate-100 mb-6 leading-tight tracking-tight font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Motion Snippets
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-[480px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Copy-paste library of beautiful text animations built with Motion
          React + Tailwind CSS . Along with Pretext Layout Engine
        </motion.p>
      </div>
    </div>
  );
}
