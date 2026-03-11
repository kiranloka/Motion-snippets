import { MotionPresetRegistry } from "./types";

export const presets: MotionPresetRegistry = {
  "micro-fade": {
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "pixel-slide": {
    initial: { opacity: 0, x: -8 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.35, ease: "easeOut" },
  },
  "breath-reveal": {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  "cinematic-rise": {
    initial: { opacity: 0, y: 24, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
  "vault-up": {
    initial: { opacity: 0, y: 60, scale: 0.94 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring", stiffness: 420, damping: 28, mass: 0.8 },
  },
  "plunge": {
    initial: { opacity: 0, y: -50, scale: 1.05 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring", stiffness: 380, damping: 22, mass: 0.9 },
  },
  "glass-slide": {
    initial: { opacity: 0, x: 40, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "sweep-in": {
    initial: { opacity: 0, x: 80, filter: "blur(6px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "ricochet": {
    initial: { opacity: 0, x: -70 },
    animate: { opacity: 1, x: 0 },
    transition: { type: "spring", stiffness: 500, damping: 24, mass: 0.7 },
  },
  "iris-open": {
    initial: { opacity: 0, scale: 0.1, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
  "exhale": {
    initial: { opacity: 0, scale: 1.4, filter: "blur(12px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  "matrix-rain": {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45] },
  },
  "smoke-rise": {
    initial: { opacity: 0.3, y: 20, filter: "blur(3px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  "paper-fold": {
    initial: { opacity: 0, scale: 0.9, rotateX: 10 },
    animate: { opacity: 1, scale: 1, rotateX: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "liquid-pour": {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  "tilt-land": {
    initial: { opacity: 0, rotateX: 55, y: 20, filter: "blur(4px)" },
    animate: { opacity: 1, rotateX: 0, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  "card-flip": {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
  "curtain-lift": {
    initial: { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
    animate: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  "wipe-right": {
    initial: { clipPath: "inset(0% 100% 0% 0%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
  },
  "split-reveal": {
    initial: { clipPath: "inset(0% 50% 0% 50%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  "letter-lift": {
    initial: { y: 0 },
    whileHover: { y: -6 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  "glass-orb": {
    initial: { scale: 1, filter: "blur(0px)" },
    whileHover: { scale: 1.05, filter: "blur(1px)" },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  "neon-underline": {
    initial: { scaleX: 0, opacity: 0 },
    whileHover: { scaleX: 1, opacity: 1 },
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "gradient-shift": {
    initial: { opacity: 0.7 },
    whileHover: { opacity: 1 },
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  "shimmer-pass": {
    initial: { opacity: 0, filter: "blur(8px) brightness(2)" },
    whileHover: { opacity: 1, filter: "blur(0px) brightness(1)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  "ripple-wave": {
    initial: { scale: 1 },
    whileHover: { scale: 1.08 },
    transition: { type: "spring", stiffness: 500, damping: 15 },
  },
  "border-pulse": {
    initial: { opacity: 0.8, scale: 0.99 },
    whileHover: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  "ink-fill": {
    initial: { scaleX: 0, opacity: 0 },
    whileHover: { scaleX: 1, opacity: 1 },
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  "button-press": {
    initial: { scale: 1, y: 0 },
    whileHover: { scale: 0.96, y: 1 },
    transition: { duration: 0.15, ease: "easeOut" },
  },
  "letter-pop": {
    initial: { opacity: 0, scale: 0.6 },
    whileHover: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 600, damping: 30, mass: 0.6 },
  },
  "floating-tag": {
    initial: { y: 0, rotate: 0 },
    whileHover: { y: -4, rotate: -1 },
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  "neon-flicker": {
    initial: { opacity: 0.85 },
    whileHover: { opacity: 1 },
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  "magnetic-snap": {
    initial: { opacity: 0, x: -120, skewX: -10 },
    whileHover: { opacity: 1, x: 0, skewX: 0 },
    transition: { type: "spring", stiffness: 350, damping: 26, mass: 1 },
  },
  "3d-tilt": {
    initial: { rotateX: 0, rotateY: 0 },
    whileHover: { rotateX: -5, rotateY: 5 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  "text-shadow-dance": {
    initial: { opacity: 0, y: 12 },
    whileHover: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  "hologram-scan": {
    initial: { opacity: 0, x: 20, filter: "blur(2px)" },
    whileHover: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "glass-morph": {
    initial: { opacity: 0, filter: "blur(12px)" },
    whileHover: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  "pixel-expand": {
    initial: { scale: 0.92, opacity: 0 },
    whileHover: { scale: 1, opacity: 1 },
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
  "gradient-chase": {
    initial: { opacity: 0, scale: 0.95 },
    whileHover: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  "magnetic-pull": {
    initial: { x: 0, y: 0 },
    whileHover: { x: 4, y: -2 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  "parallax-fade": {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: false },
  },
  "pin-reveal": {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: false },
  },
  "section-stagger": {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    viewport: { once: false },
  },
  "hero-shrink": {
    initial: { scale: 1.1, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: false },
  },
  "line-draw": {
    initial: { opacity: 0, scaleX: 0 },
    whileInView: { opacity: 1, scaleX: 1 },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    viewport: { once: false },
  },
  "image-reveal": {
    initial: { clipPath: "inset(0% 0% 100% 0%)" },
    whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    viewport: { once: false },
  },
  "wave-scroll": {
    initial: { opacity: 0, rotate: -5, y: 20 },
    whileInView: { opacity: 1, rotate: 0, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    viewport: { once: false },
  },
  "fade-layers": {
    initial: { opacity: 0, y: 60, scale: 0.9 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: false },
  },
  "bar-graph": {
    initial: { scaleY: 0, opacity: 0 },
    whileInView: { scaleY: 1, opacity: 1 },
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    viewport: { once: false },
  },
  "timeline-dots": {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
    viewport: { once: false },
  },
  "scroll-shadow": {
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: false },
  },
  "progress-path": {
    initial: { opacity: 0, scaleX: 0 },
    whileInView: { opacity: 1, scaleX: 1 },
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    viewport: { once: false },
  },
  "floating-cards": {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 200, damping: 30 },
    viewport: { once: false },
  },
  "counter-spin": {
    initial: { opacity: 0, rotate: -180, scale: 0.5 },
    whileInView: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
    viewport: { once: false },
  },
  "text-warp": {
    initial: { opacity: 0, rotateY: 30, x: -20 },
    whileInView: { opacity: 1, rotateY: 0, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    viewport: { once: false },
  },
  "horizontal-scroll": {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: false },
  },
  "pin-split": {
    initial: { clipPath: "inset(0% 50% 0% 50%)" },
    whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    viewport: { once: false },
  },
  "image-sequence": {
    initial: { opacity: 0, scale: 1.2, filter: "blur(8px)" },
    whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: false },
  },
  "progress-ring": {
    initial: { opacity: 0, rotate: -90, scale: 0.8 },
    whileInView: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    viewport: { once: false },
  },
  "sticky-counter": {
    initial: { opacity: 0, y: 40, scale: 0.9 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    viewport: { once: false },
  },
  "gentle-float": {
    initial: { y: 0 },
    animate: { y: [-8, 0, -8] },
    transition: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "subtle-glow": {
    initial: { opacity: 0.7 },
    animate: { opacity: [0.7, 1, 0.7] },
    transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "breathe": {
    initial: { scale: 0.98 },
    animate: { scale: [0.98, 1, 0.98] },
    transition: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "heartbeat": {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 1.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "calm-sea": {
    initial: { skewX: 0 },
    animate: { skewX: [-1, 1, -1] },
    transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "wind-drift": {
    initial: { x: 0 },
    animate: { x: [-3, 3, -3] },
    transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "gentle-sway": {
    initial: { rotate: 0 },
    animate: { rotate: [-1.5, 1.5, -1.5] },
    transition: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "ambient-pulse": {
    initial: { opacity: 0.85 },
    animate: { opacity: [0.85, 1, 0.85] },
    transition: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "cosmic-drift": {
    initial: { x: 0, y: 0 },
    animate: { x: [-6, 6, -6], y: [-3, 3, -3] },
    transition: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "star-twinkle": {
    initial: { opacity: 0.8, scale: 1 },
    animate: { opacity: [0.8, 1, 0.8], scale: [1, 1.03, 1] },
    transition: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "northern-lights": {
    initial: { opacity: 0.7, y: 0 },
    animate: { opacity: [0.7, 1, 0.7], y: [-2, 2, -2] },
    transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "fireflies": {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: [0, 1, 0], scale: [0.8, 1, 0.8] },
    transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "liquid-metal": {
    initial: { opacity: 0.9, filter: "brightness(1)" },
    animate: {
      opacity: [0.9, 1, 0.9],
      filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"],
    },
    transition: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "thermal-wave": {
    initial: { filter: "blur(0px)" },
    animate: { filter: ["blur(0px)", "blur(0.5px)", "blur(0px)"] },
    transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "polar-lights": {
    initial: { y: 0, opacity: 0.8 },
    animate: { y: [-4, 4, -4], opacity: [0.8, 1, 0.8] },
    transition: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "deep-focus": {
    initial: { filter: "blur(3px)", opacity: 0.7 },
    animate: {
      filter: ["blur(3px)", "blur(0px)", "blur(3px)"],
      opacity: [0.7, 1, 0.7],
    },
    transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "gradient-flow": {
    initial: { opacity: 0.8, x: 0 },
    animate: { opacity: [0.8, 1, 0.8], x: [-4, 4, -4] },
    transition: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "matrix-code": {
    initial: { y: -4, opacity: 0.6 },
    animate: { y: [4, -4], opacity: [0.6, 1, 0.6] },
    transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "floating-dust": {
    initial: { y: 6, opacity: 0 },
    animate: { y: [-6, 6], opacity: [0, 1, 0] },
    transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "cursor-dance": {
    initial: { rotate: 0, y: 0 },
    animate: { rotate: [-2, 2, -2], y: [-3, 3, -3] },
    transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
  "kerning-dance": {
    initial: { letterSpacing: "0em", opacity: 0 },
    animate: { letterSpacing: "0.05em", opacity: 1 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  "tracking-tighten": {
    initial: { letterSpacing: "0.15em", opacity: 0 },
    animate: { letterSpacing: "0em", opacity: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "baseline-shift": {
    initial: { y: 8, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
  "type-scale": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  "contrast-flip": {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  "shadow-cascade": {
    initial: { opacity: 0, y: 16, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  "weight-ladder": {
    initial: { opacity: 0, scale: 0.9, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "outline-stroke": {
    initial: { opacity: 0, scale: 1.1, filter: "blur(2px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  "baseline-glow": {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  "typewriter-delete": {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
  "color-spectrum": {
    initial: { opacity: 0, rotate: -5 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  "opacity-layers": {
    initial: { opacity: 0, scale: 0.95, y: 6 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  "monospace-march": {
    initial: { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.35, ease: "easeOut" },
  },
  "italic-sweep": {
    initial: { opacity: 0, skewX: -8 },
    animate: { opacity: 1, skewX: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  "dissolve": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.1, ease: "linear" },
  },
  "underline-draw": {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  "shimmer-in": {
    initial: { opacity: 0, filter: "blur(8px) brightness(2)" },
    animate: { opacity: 1, filter: "blur(0px) brightness(1)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  "pop-land": {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 600, damping: 30, mass: 0.6 },
  },
  "gravity-drop": {
    initial: { opacity: 0, y: -80, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45] },
  },
  "rotate-settle": {
    initial: { opacity: 0, rotate: -12, scale: 0.85, y: 20 },
    animate: { opacity: 1, rotate: 0, scale: 1, y: 0 },
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};
