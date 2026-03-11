"use client";

import { motion } from "motion/react";
import { MotionGroupProps } from "@/lib/motion/types";

export function MotionGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  as = "div",
}: MotionGroupProps) {
  const MotionComponent = typeof as === "string" ? (motion as any)[as] || motion.div : motion(as);

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
