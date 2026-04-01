"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";

/**
 * 10 — Magnetic Word Pull
 * Each word in the paragraph is magnetically attracted to the cursor.
 * Words closer to the cursor get pulled more strongly while those
 * far away remain still. Uses Pretext to compute precise word origins.
 */
export function MagneticWordPull({
  text = "You know the thing about a shark, he's got lifeless eyes. Black eyes. Like a doll's eyes. When he comes at ya, he doesn't even seem to be livin'... 'til he bites ya, and those black eyes roll over white and then... ah then you hear that terrible high-pitched screamin'.",
  font = "16px system-ui, -apple-system, sans-serif",
  lineHeight = 28,
  pullRadius = 180,
  pullStrength = 40,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

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
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const prepared = useMemo(() => prepareWithSegments(text, font), [text, font]);

  const { lines, height } = useMemo(() => {
    if (!width) return { lines: [], height: 0 };
    return layoutWithLines(prepared, width, lineHeight);
  }, [prepared, width, lineHeight]);

  // Extract pretext widths to estimate word center for physics calculation
  const segmentsData = useMemo(() => {
    const raw = prepared as any;
    return {
      segments: raw.segments as string[],
      widths: raw.widths as number[]
    };
  }, [prepared]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-white dark:bg-black p-8 cursor-crosshair overflow-hidden min-h-[400px] flex flex-col items-center justify-center"
    >
      <div className="absolute top-8 left-8 text-xs font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        Hover to attract words
      </div>

      <div ref={containerRef} className="relative w-full max-w-2xl px-4 text-center" style={{ height }}>
        {lines.map((line, lineIndex) => {
          const startIdx = line.start.segmentIndex;
          const endIdx = line.end.segmentIndex + (line.end.graphemeIndex > 0 ? 1 : 0);
          
          // Calculate the starting X of the line based on text-center
          let currentX = (width - line.width) / 2;
          const lineCenterY = lineIndex * lineHeight + lineHeight / 2;

          return (
            <div
              key={lineIndex}
              className="absolute left-0 right-0 whitespace-nowrap text-center text-slate-900 dark:text-slate-100"
              style={{
                top: lineIndex * lineHeight,
                height: lineHeight,
                lineHeight: `${lineHeight}px`,
              }}
            >
              {[...Array(endIdx - startIdx)].map((_, j) => {
                const i = startIdx + j;
                const segText = segmentsData.segments[i] || "";
                const segWidth = segmentsData.widths[i] || 0;
                
                // physics coords
                const wordCenterX = currentX + segWidth / 2;
                currentX += segWidth;

                const dx = mousePos.x - wordCenterX;
                const dy = mousePos.y - lineCenterY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let offsetX = 0;
                let offsetY = 0;
                let scale = 1;

                if (dist < pullRadius && dist > 0) {
                  const force = Math.pow(1 - dist / pullRadius, 2);
                  offsetX = (dx / dist) * force * pullStrength;
                  offsetY = (dy / dist) * force * pullStrength;
                  scale = 1 + force * 0.25;
                }

                const isWhitespace = segText.trim().length === 0;

                return (
                  <span
                    key={j}
                    className="inline-block whitespace-pre"
                    style={{
                      transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
                      transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.15s, font-weight 0.15s",
                      color: !isWhitespace && scale > 1.02 ? "rgb(59, 130, 246)" : undefined,
                      fontWeight: !isWhitespace && scale > 1.05 ? 600 : 400,
                    }}
                  >
                    {segText}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
