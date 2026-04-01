"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import { motion, useSpring } from "motion/react";

/**
 * 06 — Dragon Follower
 * Text lines smoothly arc toward the cursor position like a dragon's tail following its head.
 * Each line gets a decreasing rotation/translation offset based on distance from cursor Y.
 */
export function DragonFollower({
  text = "As far back as I can remember, I always wanted to be a gangster. To me, being a gangster was better than being President of the United States. Even before I first wandered into the cabstand for an after-school job, I knew I wanted to be a part of them.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const smoothX = useSpring(0, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    smoothX.set(x);
    smoothY.set(y);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: width / 2, y: 0 });
    smoothX.set(width / 2);
    smoothY.set(0);
  };

  const prepared = useMemo(() => {
    if (typeof window === "undefined") return null;
    return prepareWithSegments(text, font);
  }, [text, font]);

  const { lines, height } = useMemo(() => {
    if (!prepared || !width) return { lines: [], height: 0 };
    return layoutWithLines(prepared, width, lineHeight);
  }, [prepared, width, lineHeight]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-white dark:bg-black p-8 cursor-pointer overflow-hidden min-h-[400px] flex flex-col"
    >
      <div className="text-xs font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2 relative z-10 w-full">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Move cursor across text
      </div>

      <div className="flex-1 w-full flex items-center justify-center">
        <div ref={containerRef} className="relative w-full max-w-2xl px-4" style={{ height }}>
          {lines.map((line, i) => {
            const lineCenterY = i * lineHeight + lineHeight / 2;
            const dy = mousePos.y - lineCenterY;
            
            // Stronger influence closer to the cursor Y
            const influence = Math.max(0, 1 - Math.abs(dy) / 200);
            
            // Shift X towards cursor, with easing based on Y-distance
            const targetX = mousePos.x - width / 2; // relative to center
            const offsetX = targetX * Math.pow(influence, 1.5) * 0.9;
            const rotation = targetX * influence * 0.04;
            const scale = 1 + influence * 0.05;

            return (
              <motion.div
                key={i}
                animate={{
                  x: offsetX,
                  rotate: rotation,
                  scale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                  mass: 0.5 + Math.abs(dy) * 0.002, // lines further away lag a bit more
                }}
                className="absolute left-0 right-0 whitespace-pre text-center text-slate-900 dark:text-slate-100"
                style={{
                  top: i * lineHeight,
                  height: lineHeight,
                  lineHeight: `${lineHeight}px`,
                  transformOrigin: "center center",
                }}
              >
                {line.text}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
