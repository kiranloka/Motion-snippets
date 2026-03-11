import { presets } from "./presets";

export const variants = Object.entries(presets).reduce((acc, [key, value]) => {
  acc[key] = {
    hidden: value.initial,
    visible: value.animate || value.whileInView,
  };
  return acc;
}, {} as Record<string, any>);
