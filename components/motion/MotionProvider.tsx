"use client";

import { createContext, useContext, ReactNode } from "react";
import { MotionContextProps } from "@/lib/motion/types";

const MotionContext = createContext<MotionContextProps>({});

export function MotionProvider({
  children,
  duration,
  easing,
}: MotionContextProps & { children: ReactNode }) {
  return (
    <MotionContext.Provider value={{ duration, easing }}>
      {children}
    </MotionContext.Provider>
  );
}

export const useMotionConfig = () => useContext(MotionContext);
