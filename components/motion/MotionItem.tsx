"use client";

import { motion } from "motion/react";
import { MotionItemProps } from "@/lib/motion/types";
import { presets } from "@/lib/motion/presets";

export function MotionItem({
  children,
  className,
  preset,
  as = "div",
}: MotionItemProps) {
  const presetData = preset ? presets[preset] : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const MotionComponent = typeof as === "string" ? (motion as any)[as] || motion.div : motion(as);

  return (
    <MotionComponent
      variants={{
        hidden: presetData.initial,
        visible: presetData.animate || presetData.whileInView,
      }}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </MotionComponent>
  );
}
