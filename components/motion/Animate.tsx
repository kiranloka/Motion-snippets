"use client";

import { motion } from "motion/react";
import { AnimateProps } from "@/lib/motion/types";
import { useMotionPreset } from "@/hooks/useMotionPreset";

export function Animate({
  preset,
  children,
  className,
  delay,
  duration,
  once = true,
  as = "div",
  isHovered = false,
}: AnimateProps) {
  const presetData = useMotionPreset(preset);
  const { initial, animate, whileHover, whileInView, transition, viewport } =
    presetData;

  const MotionComponent =
    typeof as === "string" ? (motion as any)[as] || motion.div : motion(as);

  // Apply overrides
  const customTransition = { ...transition };
  if (delay !== undefined) customTransition.delay = delay;
  if (duration !== undefined) customTransition.duration = duration;

  // Handle external hover state -> infinite loop
  let currentAnimate = animate;
  let currentTransition = customTransition;

  if (isHovered) {
    const target = whileHover || animate;

    if (target) {
      const loopedAnimate: any = { ...target };

      if (initial) {
        Object.keys(initial).forEach((key) => {
          if (
            target[key] !== undefined &&
            initial[key] !== target[key] &&
            !Array.isArray(target[key]) &&
            !Array.isArray(initial[key])
          ) {
            loopedAnimate[key] = [initial[key], target[key]];
          }
        });
      }

      currentAnimate = loopedAnimate;
      currentTransition = {
        ...customTransition,
        repeat: Infinity,
        repeatType: "mirror" as const,
      };
    }
  }

  const currentWhileHover = whileHover && !isHovered ? whileHover : undefined;

  // For scroll animations, handle 'once'
  // If the preset explicitly defines viewport once, use that, otherwise use the component prop
  const customViewport = {
    once: viewport?.once !== undefined ? viewport.once : once,
    ...viewport,
  };

  return (
    <MotionComponent
      initial={initial}
      animate={currentAnimate}
      whileHover={currentWhileHover}
      whileInView={whileInView}
      transition={currentTransition}
      viewport={customViewport}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </MotionComponent>
  );
}
