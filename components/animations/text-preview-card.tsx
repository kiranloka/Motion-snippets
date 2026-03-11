"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AnimationPreset } from "./presets";
import { Animate } from "@/components/motion/Animate";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

interface TextPreviewCardProps {
  preset: AnimationPreset;
  index: number;
}

export function TextPreviewCard({ preset, index }: TextPreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={cn(
        "group relative h-full flex flex-col p-8 transition-colors duration-500",
        "cursor-pointer hover:bg-slate-50 dark:hover:bg-[#2a2a2a]",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Light Hover Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between">
        {/* Header - Top Left aligned */}
        <div className="flex items-start justify-between w-full">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {preset.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px]">
              {preset.description}
            </p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <CopyButton
              code={preset.code}
              className="bg-[#FBF7F4] dark:bg-black/20"
            />
          </div>
        </div>

        {/* Animation demo - Centered, bigger footprint */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[160px] py-8 overflow-hidden pointer-events-none">
          {preset.id === "typewriter-delete" ? (
            <motion.div
              key={isHovered ? "hover" : "idle"}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 flex"
            >
              {preset.demoText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, display: "none" },
                    visible: { opacity: 1, display: "inline" },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <Animate
              preset={preset.id}
              isHovered={isHovered}
              as="span"
              className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 inline-block text-center"
            >
              {preset.demoText}
            </Animate>
          )}
        </div>
      </div>
    </motion.div>
  );
}
