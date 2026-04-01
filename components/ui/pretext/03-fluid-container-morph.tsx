"use client";

import React, { useRef, useState, useMemo } from "react";
import { prepare, layout } from "@chenglou/pretext";
import { motion, useSpring } from "motion/react";
import { GripVertical } from "lucide-react";

export function FluidContainerMorph({
  text = "This is your last chance. After this, there is no turning back. You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
}) {
  const [width, setWidth] = useState(400);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Measure once
  const prepared = useMemo(() => {
    if (typeof window === "undefined") return null;
    return prepare(text, font);
  }, [text, font]);

  // Fast math! layout() doesn't touch the DOM
  const textLayout = useMemo(() => {
    if (!prepared) return { height: lineHeight, lineCount: 1 };
    return layout(prepared, width, lineHeight);
  }, [prepared, width, lineHeight]);

  // Animate the container morph
  // We don't even need a React state to hold the 'spring height', we just let Motion handle it via the 'animate' prop.
  // Actually, spring interpolation is smoother if width is also animated. 
  // Let's use framer-motion's animate prop directly for smooth layout.

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newWidth = Math.max(200, Math.min(600, e.clientX - rect.left));
    setWidth(newWidth);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-zinc-50/50 dark:bg-zinc-900/50 border-0 rounded-xl overflow-hidden min-h-[400px]">
      <motion.div
        ref={containerRef}
        animate={{
          width,
          height: textLayout.height + 64, // p-8 top/bottom = 64px
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="relative bg-white dark:bg-black text-slate-900 dark:text-slate-100shadow-lg border rounded-2xl flex"
      >
        <div 
          className="p-8 pointer-events-none select-none overflow-hidden flex-1 text-slate-700 dark:text-slate-300 antialiased"
          style={{ 
            fontFamily: "system-ui, -apple-system, sans-serif", 
            fontSize: 16, 
            lineHeight: `${lineHeight}px` 
          }}
        >
          {text}
        </div>

        {/* Drag Handle */}
        <div
          className="w-12 h-full flex items-center justify-center cursor-ew-resize border-l border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors touch-none bg-slate-50 dark:bg-zinc-900/50"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <GripVertical className="text-muted-foreground w-4 h-4" />
        </div>
      </motion.div>
    </div>
  );
}
