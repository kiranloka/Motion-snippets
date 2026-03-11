import { TargetAndTransition, Transition, VariantLabels } from "motion/react";
import { ElementType, ReactNode } from "react";

export type MotionTarget = TargetAndTransition | VariantLabels | string;

export type MotionPreset = {
  initial?: any;
  animate?: any;
  whileHover?: any;
  whileInView?: any;
  exit?: any;
  transition?: Transition | any;
  viewport?: any;
};

export type MotionPresetRegistry = Record<string, MotionPreset>;

export type AnimateProps = {
  preset: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: ElementType;
  isHovered?: boolean;
  loopOnHover?: boolean;
};

export type MotionGroupProps = {
  preset?: string;
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: ElementType;
};

export type MotionItemProps = {
  children: ReactNode;
  className?: string;
  preset?: string;
  as?: ElementType;
};

export type MotionContextProps = {
  duration?: number;
  easing?: any;
};
