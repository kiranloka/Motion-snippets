"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepare, layout } from "@chenglou/pretext";
import { motion } from "motion/react";

export function LiveTypewriter({
  fullText = "I love the smell of napalm in the morning. You know, one time we had a hill bombed, for 12 hours. When it was all over, I walked up. We didn't find one of 'em, not one stinkin' dink body. The smell, you know that gasoline smell? The whole hill. Smelled like... victory.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCharCount(0); // reset when fullText changes
    const timer = setInterval(() => {
      setCharCount((c) => Math.min(c + 1, fullText.length)); // type 1 char per tick
    }, 40);
    return () => clearInterval(timer);
  }, [fullText]);

  // We substring the requested text
  const currentText = fullText.slice(0, charCount);

  // Re-measure height continuously as characters accumulate
  const prepared = useMemo(() => {
    if (typeof window === "undefined") return null;
    return prepare(currentText, font);
  }, [currentText, font]);
  const textLayout = useMemo(() => {
    if (!prepared || !width) return { height: lineHeight, lineCount: 1 };
    return layout(prepared, width, lineHeight);
  }, [prepared, width, lineHeight]);

  return (
    <div
      onMouseEnter={() => setCharCount(0)}
      className="relative w-full bg-white dark:bg-black p-8 min-h-[400px] flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="absolute top-8 left-8 text-xs font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Hover to restart
      </div>

      {/* We animate the container bounding height */}
      <motion.div
        ref={containerRef}
        animate={{ height: textLayout.height }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative w-full max-w-lg overflow-hidden border-l-2 border-primary pl-4 text-slate-900 dark:text-slate-100"
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 16,
          lineHeight: `${lineHeight}px`,
        }}
      >
        <span>{currentText}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-primary ml-1 align-baseline translate-y-0.5"
        />
      </motion.div>
    </div>
  );
}
