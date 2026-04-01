"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import { motion, useAnimation } from "motion/react";

export function WordGravity({
  text = "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [isPlaying, setIsPlaying] = useState(false);
  
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

  // Build the array of word instances with their exact X,Y layout metrics
  const words = useMemo(() => {
    const list: { id: string; text: string; x: number; y: number; width: number }[] = [];
    if (!lines || lines.length === 0) return list;

    lines.forEach((line, lineIndex) => {
      let currentX = 0;
      // Pretext's PreparedTextWithSegments has internal properties: .segments and .widths
      // Since it's opaque in TS but exposed in JS, we can typecast.
      const raw = prepared as any;
      const widths = raw.widths as number[];
      const segments = raw.segments as string[];

      const startIdx = line.start.segmentIndex;
      // line.end is exclusive, but if graphemeIndex > 0, it means it broke inside a word.
      // For simplicity in WordGravity, assuming words aren't breaking inside (standard words).
      const endIdx = line.end.segmentIndex + (line.end.graphemeIndex > 0 ? 1 : 0);

      for (let i = startIdx; i < endIdx && i < segments.length; i++) {
        const segText = segments[i];
        const segWidth = widths[i];
        
        // We only animate actual words, not pure whitespace segments.
        if (segText.trim().length > 0) {
          list.push({
            id: `${lineIndex}-${i}`,
            text: segText,
            x: currentX,
            y: lineIndex * lineHeight,
            width: segWidth,
          });
        }
        currentX += segWidth;
      }
    });
    return list;
  }, [prepared, lines, lineHeight]);

  // Replay on hover
  const [playTrigger, setPlayTrigger] = useState(0);

  return (
    <div
      onMouseEnter={() => setPlayTrigger(prev => prev + 1)}
      className="relative w-full bg-white dark:bg-black p-8 cursor-pointer overflow-hidden min-h-[400px] flex flex-col items-center justify-center"
    >
      <div className="absolute top-8 left-8 text-xs font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        Hover to Trigger Gravity
      </div>
      
      <div ref={containerRef} className="relative w-full max-w-2xl px-4">
        <div key={playTrigger} className="relative w-full" style={{ height }}>
          {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="absolute left-0 right-0 whitespace-nowrap text-center text-slate-900 dark:text-slate-100"
            style={{
              top: lineIndex * lineHeight,
              height: lineHeight,
              lineHeight: `${lineHeight}px`,
            }}
          >
            {line.text.split(/(\s+)/).map((segment, j) => {
              const isSpace = segment.trim().length === 0;
              return (
                <motion.span
                  key={j}
                  initial={{
                    y: !isSpace ? -300 - Math.random() * 200 : 0,
                    opacity: !isSpace ? 0 : 1,
                    rotate: !isSpace ? Math.random() * 60 - 30 : 0,
                  }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150 + Math.random() * 50,
                    damping: 12 + Math.random() * 5,
                    delay: !isSpace ? Math.random() * 0.2 : 0,
                  }}
                  className="inline-block"
                  style={{ whiteSpace: "pre" }}
                >
                  {segment}
                </motion.span>
              );
            })}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
