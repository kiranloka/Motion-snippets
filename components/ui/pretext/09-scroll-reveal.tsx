"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import { motion, useInView } from "motion/react";

/**
 * 09 — Scroll-Triggered Line Reveal
 * Lines of text fade and slide in as you scroll down the page.
 * Each line is a real, wrap-aware line calculated by Pretext,
 * not a faked <span> — so line breaks are always correct.
 */
export function ScrollReveal({
  text = "Gentlemen, you had my curiosity, but now you have my attention. I've been looking for you for a long time. Now the shoe is on the other foot. You tell me what you know, and maybe I'll let you live.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const prepared = useMemo(() => {
    if (typeof window === "undefined") return null;
    return prepareWithSegments(text, font);
  }, [text, font]);

  const { lines, height } = useMemo(() => {
    if (!prepared || !width) return { lines: [], height: 0 };
    return layoutWithLines(prepared, width, lineHeight);
  }, [prepared, width, lineHeight]);

  // Replay on hover
  useEffect(() => {
    if (isInView) setPlayKey((k) => k + 1);
  }, [isInView]);

  return (
    <div
      onMouseEnter={() => setPlayKey((k) => k + 1)}
      className="relative w-full bg-white dark:bg-black p-8 min-h-[400px] cursor-pointer overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute top-8 left-8 text-xs font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
        Hover to replay reveal
      </div>

      <div ref={containerRef} className="relative w-full max-w-2xl px-4">
        <div key={playKey} className="relative w-full" style={{ height }}>
          {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: i * 0.1,
            }}
            className="absolute left-0 right-0 whitespace-pre text-center text-slate-900 dark:text-slate-100"
            style={{
              top: i * lineHeight,
              height: lineHeight,
              lineHeight: `${lineHeight}px`,
            }}
          >
            {line.text}
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
