"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepare, layout, prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import { motion, useMotionValue, animate } from "motion/react";

/**
 * 07 — Paragraph Breath
 * The container's width subtly pulsates in and out on a loop.
 * Pretext recalculates the layout each tick, and Motion smoothly
 * animates the height change, creating a "breathing" paragraph.
 */
export function ParagraphBreath({
  text = "Introduce a little anarchy. Upset the established order, and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair. The joker's card is wild.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
  minWidth = 280,
  maxWidth = 520,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(600);
  const breathWidth = useMotionValue(maxWidth);
  const [currentWidth, setCurrentWidth] = useState(maxWidth);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setParentWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Breathing animation loop
  useEffect(() => {
    const effectiveMax = Math.min(maxWidth, parentWidth - 64);
    const effectiveMin = Math.min(minWidth, effectiveMax - 40);

    const controls = animate(breathWidth, [effectiveMax, effectiveMin, effectiveMax], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    });

    const unsub = breathWidth.on("change", (v) => setCurrentWidth(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [breathWidth, minWidth, maxWidth, parentWidth]);

  const prepared = useMemo(() => {
    if (typeof window === "undefined") return null;
    return prepare(text, font);
  }, [text, font]);
  const preparedWithSegs = useMemo(() => {
    if (typeof window === "undefined") return null;
    return prepareWithSegments(text, font);
  }, [text, font]);

  const textLayout = useMemo(() => {
    if (!prepared) return { height: 0, lineCount: 0 };
    return layout(prepared, currentWidth, lineHeight);
  }, [prepared, currentWidth, lineHeight]);

  const { lines } = useMemo(() => {
    if (!preparedWithSegs || currentWidth === 0) return { lines: [], height: 0 };
    return layoutWithLines(preparedWithSegs, currentWidth, lineHeight);
  }, [preparedWithSegs, currentWidth, lineHeight]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white dark:bg-black p-8 flex flex-col items-center justify-center min-h-[400px] overflow-hidden"
    >
      <motion.div
        animate={{
          width: currentWidth,
          height: textLayout.height + 48,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden max-w-full"
      >
        <div className="p-6" style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 16, lineHeight: `${lineHeight}px` }}>
          <div className="relative" style={{ height: textLayout.height }}>
            {lines.map((line, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 whitespace-pre text-center text-slate-700 dark:text-slate-300 "
                style={{
                  top: i * lineHeight,
                  height: lineHeight,
                  lineHeight: `${lineHeight}px`,
                }}
              >
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
