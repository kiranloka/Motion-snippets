import { useMotionConfig } from "@/components/motion/MotionProvider";
import { presets } from "@/lib/motion/presets";
import { MotionPreset } from "@/lib/motion/types";

export function useMotionPreset(presetName: string): MotionPreset {
  const config = useMotionConfig();
  const preset = presets[presetName];

  if (!preset) {
    console.warn(`Motion preset "${presetName}" not found. Falling back to default.`);
    return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } };
  }

  const transition = { ...preset.transition };
  
  if (config?.duration !== undefined && !transition.type) {
    transition.duration = config.duration;
  }
  if (config?.easing !== undefined && !transition.type) {
    transition.ease = config.easing;
  }

  return {
    ...preset,
    transition,
  };
}
