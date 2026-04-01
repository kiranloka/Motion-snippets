"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import { motion } from "motion/react";

export function LineByLineCascade({
  text = "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);

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

  const [playKey, setPlayKey] = useState(0);

  return (
    <div
      onMouseEnter={() => setPlayKey(prev => prev + 1)}
      className="relative w-full bg-white dark:bg-black p-8 flex flex-col items-center justify-center min-h-[400px] cursor-pointer"
    >
      <div ref={containerRef} className="relative w-full max-w-2xl px-4">
        <div key={playKey} className="relative w-full" style={{ height }}>
          {lines.map((line, i) => (
          <motion.div
            key={`${i}-${line.text}`}
            initial={{ y: 20, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 150,
              delay: i * 0.08,
            }}
            className="absolute left-0 right-0 whitespace-pre text-center text-slate-900 dark:text-slate-100 origin-bottom"
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
