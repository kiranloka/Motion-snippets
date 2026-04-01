"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutNextLine, LayoutCursor } from "@chenglou/pretext";
import { motion, useSpring, useMotionValue } from "motion/react";

export function ObstacleParting({ 
  text = "You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.", 
  font = "16px system-ui, -apple-system, sans-serif", 
  lineHeight = 28 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(600);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  
  const obstacleRadius = 45;
  
  // Smooth mouse follow
  const smoothX = useSpring(-1000, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(-1000, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
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
    setMousePos({ x: -1000, y: -1000 });
    smoothX.set(-1000);
    smoothY.set(-1000);
  };

  const prepared = useMemo(() => prepareWithSegments(text, font), [text, font]);

  // Compute Layouts per frame
  // React state will drive the layout updates since mousePos is tracked in states.
  // Real world applications might use pure rAF loops directly updating DOM for performance,
  // but for copy-paste components, React re-renders are clearer and often fast enough.
  const lines = useMemo(() => {
    const layoutLines: { text: string; id: string; x: number; y: number; width: number }[] = [];
    if (containerWidth === 0) return { layoutLines, totalHeight: 0 };

    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
    let currentY = 0;
    let safeGuard = 0;

    while (safeGuard < 1000) {
      safeGuard++;
      const lineCenterY = currentY + lineHeight / 2;
      const dy = lineCenterY - mousePos.y;
      const r2 = obstacleRadius * obstacleRadius;
      
      let leftW = containerWidth;
      let rightW = 0;
      let rightStartX = 0;
      let intersects = false;
      
      if (dy * dy < r2) {
        const dx = Math.sqrt(r2 - dy * dy);
        const obstacleLeft = mousePos.x - dx;
        const obstacleRight = mousePos.x + dx;
        
        leftW = Math.max(0, obstacleLeft);
        rightStartX = Math.min(containerWidth, obstacleRight);
        rightW = Math.max(0, containerWidth - rightStartX);
        intersects = true;
      }
      
      const prevCursor = { ...cursor };
      let advanced = false;

      if (!intersects) {
        const line = layoutNextLine(prepared, cursor, containerWidth);
        if (!line) break;
        layoutLines.push({ text: line.text, id: `line-${currentY}-full`, x: 0, y: currentY, width: line.width });
        cursor = line.end;
        currentY += lineHeight;
        advanced = true;
      } else {
        if (leftW > 10) {
          const lLine = layoutNextLine(prepared, cursor, leftW);
          if (lLine && (lLine.end.segmentIndex > cursor.segmentIndex || lLine.end.graphemeIndex > cursor.graphemeIndex)) {
            layoutLines.push({ text: lLine.text, id: `line-${currentY}-left`, x: 0, y: currentY, width: lLine.width });
            cursor = lLine.end;
            advanced = true;
          }
        }
        
        if (rightW > 10) {
          const rLine = layoutNextLine(prepared, cursor, rightW);
          if (rLine && (rLine.end.segmentIndex > cursor.segmentIndex || rLine.end.graphemeIndex > cursor.graphemeIndex)) {
            layoutLines.push({ text: rLine.text, id: `line-${currentY}-right`, x: rightStartX, y: currentY, width: rLine.width });
            cursor = rLine.end;
            advanced = true;
          }
        }
        
        currentY += lineHeight;
        if (!advanced) {
          // Force layout of one segment if width constraints completely block progress to prevent lockup
          const l = layoutNextLine(prepared, cursor, containerWidth);
          if (l) cursor = l.end;
          else break;
        }
      }

      if (
        cursor.segmentIndex === prevCursor.segmentIndex &&
        cursor.graphemeIndex === prevCursor.graphemeIndex &&
        !advanced
      ) {
        break; 
      }
    }
    return { layoutLines, totalHeight: currentY };
  }, [prepared, containerWidth, mousePos, lineHeight]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-white dark:bg-black p-6 cursor-crosshair min-h-[400px] flex flex-col items-center justify-center"
    >
      <div ref={containerRef} className="relative w-full max-w-2xl px-4 z-10" style={{ height: lines.totalHeight }}>
        {/* Obstacle Bubble - Placed here to share coordinate system with mouse math */}
        <motion.div
          className="absolute rounded-full bg-blue-500/20 mix-blend-screen pointer-events-none blur-md z-0"
          style={{
            x: smoothX,
            y: smoothY,
            width: obstacleRadius * 2,
            height: obstacleRadius * 2,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        <motion.div
          className="absolute rounded-full border border-blue-400/50 pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.5)] z-0"
          style={{
            x: smoothX,
            y: smoothY,
            width: obstacleRadius * 2,
            height: obstacleRadius * 2,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        {lines.layoutLines.map((line) => (
          <div
            key={line.id}
            className="absolute text-center text-slate-900 dark:text-slate-100 whitespace-pre pointer-events-none transition-all duration-75"
            style={{
              left: line.x,
              top: line.y,
              height: lineHeight,
              width: line.width,
              lineHeight: `${lineHeight}px`,
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: 16,
              overflow: "hidden",
            }}
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
