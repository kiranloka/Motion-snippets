"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import { motion, animate, useMotionValue } from "motion/react";

/**
 * 08 — Word-Level Highlight Beam
 * A luminous beam sweeps across the paragraph, highlighting
 * words as it passes. Pretext gives us exact line positions
 * so the beam can accurately track the reading flow.
 */
export function HighlightBeam({
  text = "My name is Lt. Aldo Raine and I'm putting together a special team, and I need me eight soldiers. Eight Jewish-American soldiers. Now, y'all might've heard rumors about the armada happening soon. Well, we'll be leaving a little earlier.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const progress = useMotionValue(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const prepared = useMemo(() => prepareWithSegments(text, font), [text, font]);

  const { lines, height } = useMemo(() => {
    if (!width) return { lines: [], height: 0 };
    return layoutWithLines(prepared, width, lineHeight);
  }, [prepared, width, lineHeight]);

  // Build flat list of words with positions
  const words = useMemo(() => {
    const list: { text: string; lineIndex: number; startX: number; width: number }[] = [];
    const raw = prepared as any;
    const segments = raw.segments as string[];
    const widths = raw.widths as number[];

    lines.forEach((line, lineIndex) => {
      let currentX = 0;
      const startIdx = line.start.segmentIndex;
      const endIdx = line.end.segmentIndex + (line.end.graphemeIndex > 0 ? 1 : 0);

      for (let i = startIdx; i < endIdx && i < segments.length; i++) {
        const segText = segments[i];
        const segWidth = widths[i];
        if (segText.trim().length > 0) {
          list.push({
            text: segText,
            lineIndex,
            startX: currentX,
            width: segWidth,
          });
        }
        currentX += segWidth;
      }
    });
    return list;
  }, [prepared, lines]);

  // Animate beam sweep
  useEffect(() => {
    if (words.length === 0) return;
    progress.set(0);
    const totalWords = words.length;
    const controls = animate(progress, totalWords, {
      duration: totalWords * 0.12,
      ease: "linear",
      repeat: Infinity,
    });
    const unsub = progress.on("change", setCurrentProgress);
    return () => {
      controls.stop();
      unsub();
    };
  }, [words, progress, playKey]);

  const activeWordIndex = Math.floor(currentProgress) % (words.length || 1);

  return (
    <div
      onMouseEnter={() => setPlayKey((k) => k + 1)}
      className="relative w-full bg-white dark:bg-black p-8 min-h-[400px] cursor-pointer overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute top-8 left-8 text-xs font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        Hover to restart beam
      </div>

      <div ref={containerRef} className="relative w-full max-w-2xl px-4 select-none">
        <div key={playKey} className="relative w-full" style={{ height }}>
          {lines.map((line, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 whitespace-pre text-center"
            style={{
              top: i * lineHeight,
              height: lineHeight,
              lineHeight: `${lineHeight}px`,
            }}
          >
            {/* Render words individually for highlighting */}
            {line.text.split(/(\s+)/).map((segment, j) => {
              // Find matching word in flat list
              const wordIdx = words.findIndex(
                (w) => w.lineIndex === i && w.text === segment && segment.trim().length > 0
              );
              const isActive = wordIdx >= 0 && wordIdx <= activeWordIndex;
              const isCurrentWord = wordIdx === activeWordIndex;

              return (
                <span
                  key={j}
                  className={`transition-colors duration-150 ${
                    isActive
                      ? "text-slate-900 dark:text-slate-100"
                      : "text-slate-300 dark:text-slate-600"
                  } ${isCurrentWord ? "font-semibold" : "font-normal"}`}
                  style={{
                    textShadow: isCurrentWord ? "0 0 20px rgba(245, 158, 11, 0.4)" : "none",
                  }}
                >
                  {segment}
                </span>
              );
            })}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
