// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AnimationPreset {
  id: string;
  name: string;
  description: string;
  category: string;
  demoText: string;
  initial: any;
  animate: any;
  transition: any;
  code: string;
}

export const CATEGORIES = [
  "All",
  "Entrance",
  "Hover",
  "Scroll",
  "Looping",
  "Typography",
];

export const animationPresets: AnimationPreset[] = [
  {
    id: "micro-fade",
    name: "Micro Fade",
    description: "Ultra-subtle opacity with a tiny upward drift",
    category: "Entrance",
    demoText: "Fade",
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, y: 4 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Fade
</motion.div>`,
  },
  {
    id: "pixel-slide",
    name: "Pixel Slide",
    description: "Sharp 8px horizontal slide-in",
    category: "Entrance",
    demoText: "Slide",
    initial: { opacity: 0, x: -8 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.35, ease: "easeOut" },
    code: `<motion.div
  initial={{ opacity: 0, x: -8 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  Slide
</motion.div>`,
  },
  {
    id: "breath-reveal",
    name: "Breath Reveal",
    description: "Subtle scale-up with a soft fade-in",
    category: "Entrance",
    demoText: "Breathe",
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
  Breathe
</motion.div>`,
  },
  {
    id: "cinematic-rise",
    name: "Cinematic Rise",
    description:
      "Silky fade with a subtle upward drift — refined and weightless",
    category: "Entrance",
    demoText: "Rise",
    initial: { opacity: 0, y: 24, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
>
  Rise
</motion.div>`,
  },
  {
    id: "vault-up",
    name: "Vault Up",
    description: "Punchy spring entrance from below — confident and kinetic",
    category: "Entrance",
    demoText: "Vault",
    initial: { opacity: 0, y: 60, scale: 0.94 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring", stiffness: 420, damping: 28, mass: 0.8 },
    code: `<motion.div
  initial={{ opacity: 0, y: 60, scale: 0.94 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.8 }}
>
  Vault
</motion.div>`,
  },
  {
    id: "plunge",
    name: "Plunge",
    description: "Drops from above with a tight spring snap — dramatic",
    category: "Entrance",
    demoText: "Plunge",
    initial: { opacity: 0, y: -50, scale: 1.05 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring", stiffness: 380, damping: 22, mass: 0.9 },
    code: `<motion.div
  initial={{ opacity: 0, y: -50, scale: 1.05 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ type: "spring", stiffness: 380, damping: 22, mass: 0.9 }}
>
  Plunge
</motion.div>`,
  },
  {
    id: "glass-slide",
    name: "Glass Slide",
    description: "Right-to-left entrance with backdrop blur",
    category: "Entrance",
    demoText: "Glass",
    initial: { opacity: 0, x: 40, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Glass
</motion.div>`,
  },
  {
    id: "sweep-in",
    name: "Sweep In",
    description: "Glides from the right with blur — editorial and fluid",
    category: "Entrance",
    demoText: "Sweep",
    initial: { opacity: 0, x: 80, filter: "blur(6px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, x: 80, filter: "blur(6px)" }}
  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Sweep
</motion.div>`,
  },
  {
    id: "ricochet",
    name: "Ricochet",
    description: "Springs in from the left, overshoots, then lands",
    category: "Entrance",
    demoText: "Ricochet",
    initial: { opacity: 0, x: -70 },
    animate: { opacity: 1, x: 0 },
    transition: { type: "spring", stiffness: 500, damping: 24, mass: 0.7 },
    code: `<motion.div
  initial={{ opacity: 0, x: -70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 500, damping: 24, mass: 0.7 }}
>
  Ricochet
</motion.div>`,
  },
  {
    id: "iris-open",
    name: "Iris Open",
    description: "Expands from a tiny focal point — like a camera aperture",
    category: "Entrance",
    demoText: "Iris",
    initial: { opacity: 0, scale: 0.1, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.1, filter: "blur(8px)" }}
  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
>
  Iris
</motion.div>`,
  },
  {
    id: "exhale",
    name: "Exhale",
    description: "Breathes in from oversized — like a slow exhale",
    category: "Entrance",
    demoText: "Exhale",
    initial: { opacity: 0, scale: 1.4, filter: "blur(12px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 1.4, filter: "blur(12px)" }}
  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
>
  Exhale
</motion.div>`,
  },
  {
    id: "matrix-rain",
    name: "Matrix Rain",
    description: "Letters fall from the top with sharp deceleration",
    category: "Entrance",
    demoText: "Matrix",
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45] },
    code: `<motion.div
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.55, 0, 1, 0.45] }}
>
  Matrix
</motion.div>`,
  },
  {
    id: "smoke-rise",
    name: "Smoke Rise",
    description: "Vertical drift upward with soft opacity reveal",
    category: "Entrance",
    demoText: "Smoke",
    initial: { opacity: 0.3, y: 20, filter: "blur(3px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0.3, y: 20, filter: "blur(3px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
  Smoke
</motion.div>`,
  },
  {
    id: "paper-fold",
    name: "Paper Fold",
    description: "Scales with subtle shadow lift — like unfolding paper",
    category: "Entrance",
    demoText: "Fold",
    initial: { opacity: 0, scale: 0.9, rotateX: 10 },
    animate: { opacity: 1, scale: 1, rotateX: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Fold
</motion.div>`,
  },
  {
    id: "liquid-pour",
    name: "Liquid Pour",
    description: "ScaleY bottom-up fill effect — fluid and organic",
    category: "Entrance",
    demoText: "Pour",
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scaleY: 0 }}
  animate={{ opacity: 1, scaleY: 1 }}
  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
>
  Pour
</motion.div>`,
  },
  {
    id: "tilt-land",
    name: "Tilt & Land",
    description: "Tilts in on the X-axis and settles — cinematic depth",
    category: "Entrance",
    demoText: "Tilt",
    initial: { opacity: 0, rotateX: 55, y: 20, filter: "blur(4px)" },
    animate: { opacity: 1, rotateX: 0, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, rotateX: 55, y: 20, filter: "blur(4px)" }}
  animate={{ opacity: 1, rotateX: 0, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
  Tilt
</motion.div>`,
  },
  {
    id: "card-flip",
    name: "Card Flip",
    description: "A clean 90→0 flip — like turning a playing card",
    category: "Entrance",
    demoText: "Flip",
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
    code: `<motion.div
  initial={{ opacity: 0, rotateY: 90 }}
  animate={{ opacity: 1, rotateY: 0 }}
  transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
>
  Flip
</motion.div>`,
  },
  {
    id: "curtain-lift",
    name: "Curtain Lift",
    description: "Clips upward as if a curtain is being raised",
    category: "Entrance",
    demoText: "Curtain",
    initial: { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
    animate: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 1 }}
  animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
>
  Curtain
</motion.div>`,
  },
  {
    id: "wipe-right",
    name: "Wipe Right",
    description: "Reveals text left-to-right like a stage wipe",
    category: "Entrance",
    demoText: "Wipe",
    initial: { clipPath: "inset(0% 100% 0% 0%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
  transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
>
  Wipe
</motion.div>`,
  },
  {
    id: "split-reveal",
    name: "Split Reveal",
    description: "Expands from the center outward — theatrical",
    category: "Entrance",
    demoText: "Split",
    initial: { clipPath: "inset(0% 50% 0% 50%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
>
  Split
</motion.div>`,
  },
  {
    id: "letter-lift",
    name: "Letter Lift",
    description: "Gentle upward lift on interaction",
    category: "Hover",
    demoText: "Lift",
    initial: { y: 0 },
    animate: { y: -6 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
    code: `<motion.div
  initial={{ y: 0 }}
  animate={{ y: -6 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}
>
  Lift
</motion.div>`,
  },
  {
    id: "glass-orb",
    name: "Glass Orb",
    description: "Scale up with soft blur on hover",
    category: "Hover",
    demoText: "Orb",
    initial: { scale: 1, filter: "blur(0px)" },
    animate: { scale: 1.05, filter: "blur(1px)" },
    transition: { duration: 0.3, ease: "easeOut" },
    code: `<motion.div
  initial={{ scale: 1, filter: "blur(0px)" }}
  animate={{ scale: 1.05, filter: "blur(1px)" }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  Orb
</motion.div>`,
  },
  {
    id: "neon-underline",
    name: "Neon Underline",
    description: "Glowing underline expands from center",
    category: "Hover",
    demoText: "Neon",
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ scaleX: 0, opacity: 0 }}
  animate={{ scaleX: 1, opacity: 1 }}
  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Neon
</motion.div>`,
  },
  {
    id: "gradient-shift",
    name: "Gradient Shift",
    description: "Background gradient slides on interaction",
    category: "Hover",
    demoText: "Gradient",
    initial: { opacity: 0.7 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.7 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
>
  Gradient
</motion.div>`,
  },
  {
    id: "shimmer-pass",
    name: "Shimmer Pass",
    description: "A luminous sheen sweeps across text",
    category: "Hover",
    demoText: "Shimmer",
    initial: { opacity: 0, filter: "blur(8px) brightness(2)" },
    animate: { opacity: 1, filter: "blur(0px) brightness(1)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, filter: "blur(8px) brightness(2)" }}
  animate={{ opacity: 1, filter: "blur(0px) brightness(1)" }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
  Shimmer
</motion.div>`,
  },
  {
    id: "ripple-wave",
    name: "Ripple Wave",
    description: "Circular scale pulse from center",
    category: "Hover",
    demoText: "Ripple",
    initial: { scale: 1 },
    animate: { scale: 1.08 },
    transition: { type: "spring", stiffness: 500, damping: 15 },
    code: `<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: 1.08 }}
  transition={{ type: "spring", stiffness: 500, damping: 15 }}
>
  Ripple
</motion.div>`,
  },
  {
    id: "border-pulse",
    name: "Border Pulse",
    description: "Subtle border width and glow pulse",
    category: "Hover",
    demoText: "Pulse",
    initial: { opacity: 0.8, scale: 0.99 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
    code: `<motion.div
  initial={{ opacity: 0.8, scale: 0.99 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  Pulse
</motion.div>`,
  },
  {
    id: "ink-fill",
    name: "Ink Fill",
    description: "Background color fills from left to right",
    category: "Hover",
    demoText: "Ink",
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ scaleX: 0, opacity: 0 }}
  animate={{ scaleX: 1, opacity: 1 }}
  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
>
  Ink
</motion.div>`,
  },
  {
    id: "button-press",
    name: "Button Press",
    description: "Scale down with shadow drop — tactile feel",
    category: "Hover",
    demoText: "Press",
    initial: { scale: 1, y: 0 },
    animate: { scale: 0.96, y: 1 },
    transition: { duration: 0.15, ease: "easeOut" },
    code: `<motion.div
  initial={{ scale: 1, y: 0 }}
  animate={{ scale: 0.96, y: 1 }}
  transition={{ duration: 0.15, ease: "easeOut" }}
>
  Press
</motion.div>`,
  },
  {
    id: "letter-pop",
    name: "Letter Pop",
    description: "Scale bounce per character — playful",
    category: "Hover",
    demoText: "Pop",
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 600, damping: 30, mass: 0.6 },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.6 }}
>
  Pop
</motion.div>`,
  },
  {
    id: "floating-tag",
    name: "Floating Tag",
    description: "Gentle bob with slight rotation",
    category: "Hover",
    demoText: "Float",
    initial: { y: 0, rotate: 0 },
    animate: { y: -4, rotate: -1 },
    transition: { duration: 0.4, ease: "easeInOut" },
    code: `<motion.div
  initial={{ y: 0, rotate: 0 }}
  animate={{ y: -4, rotate: -1 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
>
  Float
</motion.div>`,
  },
  {
    id: "neon-flicker",
    name: "Neon Flicker",
    description: "Subtle opacity twitch like a neon sign",
    category: "Hover",
    demoText: "Flicker",
    initial: { opacity: 0.85 },
    animate: { opacity: 1 },
    transition: { duration: 0.2, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.85 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.2, ease: "easeInOut" }}
>
  Flicker
</motion.div>`,
  },
  {
    id: "magnetic-snap",
    name: "Magnetic Snap",
    description: "Pulls in from the left with magnetic spring tension",
    category: "Hover",
    demoText: "Magnetic",
    initial: { opacity: 0, x: -120, skewX: -10 },
    animate: { opacity: 1, x: 0, skewX: 0 },
    transition: { type: "spring", stiffness: 350, damping: 26, mass: 1 },
    code: `<motion.div
  initial={{ opacity: 0, x: -120, skewX: -10 }}
  animate={{ opacity: 1, x: 0, skewX: 0 }}
  transition={{ type: "spring", stiffness: 350, damping: 26, mass: 1 }}
>
  Magnetic
</motion.div>`,
  },
  {
    id: "3d-tilt",
    name: "3D Tilt",
    description: "RotateX/Y based on interaction — depth illusion",
    category: "Hover",
    demoText: "Tilt",
    initial: { rotateX: 0, rotateY: 0 },
    animate: { rotateX: -5, rotateY: 5 },
    transition: { duration: 0.3, ease: "easeOut" },
    code: `<motion.div
  initial={{ rotateX: 0, rotateY: 0 }}
  animate={{ rotateX: -5, rotateY: 5 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  Tilt
</motion.div>`,
  },
  {
    id: "text-shadow-dance",
    name: "Shadow Dance",
    description: "Multiple text shadows cycle dynamically",
    category: "Hover",
    demoText: "Shadow",
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  Shadow
</motion.div>`,
  },
  {
    id: "hologram-scan",
    name: "Hologram Scan",
    description: "Line sweep with glow trail effect",
    category: "Hover",
    demoText: "Holo",
    initial: { opacity: 0, x: 20, filter: "blur(2px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Holo
</motion.div>`,
  },
  {
    id: "glass-morph",
    name: "Glass Morph",
    description: "Backdrop blur with border glow on hover",
    category: "Hover",
    demoText: "Glass",
    initial: { opacity: 0, filter: "blur(12px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, filter: "blur(12px)" }}
  animate={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Glass
</motion.div>`,
  },
  {
    id: "pixel-expand",
    name: "Pixel Expand",
    description: "Scale with sharp pixelate feel — digital aesthetic",
    category: "Hover",
    demoText: "Expand",
    initial: { scale: 0.92, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
    code: `<motion.div
  initial={{ scale: 0.92, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
>
  Expand
</motion.div>`,
  },
  {
    id: "gradient-chase",
    name: "Gradient Chase",
    description: "Multi-color gradient with cycling effect",
    category: "Hover",
    demoText: "Chase",
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  Chase
</motion.div>`,
  },
  {
    id: "magnetic-pull",
    name: "Magnetic Pull",
    description: "Follows interaction with spring physics",
    category: "Hover",
    demoText: "Pull",
    initial: { x: 0, y: 0 },
    animate: { x: 4, y: -2 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
    code: `<motion.div
  initial={{ x: 0, y: 0 }}
  animate={{ x: 4, y: -2 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  Pull
</motion.div>`,
  },
  {
    id: "parallax-fade",
    name: "Parallax Fade",
    description: "Opacity plus Y offset based on scroll depth",
    category: "Scroll",
    demoText: "Parallax",
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Parallax
</motion.div>`,
  },
  {
    id: "pin-reveal",
    name: "Pin Reveal",
    description: "Sticks then reveals text on scroll",
    category: "Scroll",
    demoText: "Reveal",
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
  Reveal
</motion.div>`,
  },
  {
    id: "section-stagger",
    name: "Section Stagger",
    description: "Cards reveal as you scroll past them",
    category: "Scroll",
    demoText: "Stagger",
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Stagger
</motion.div>`,
  },
  {
    id: "hero-shrink",
    name: "Hero Shrink",
    description: "Scale down subtly as you scroll down",
    category: "Scroll",
    demoText: "Shrink",
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
  Shrink
</motion.div>`,
  },
  {
    id: "line-draw",
    name: "Line Draw",
    description: "SVG path stroke draws on scroll",
    category: "Scroll",
    demoText: "Draw",
    initial: { opacity: 0, scaleX: 0 },
    animate: { opacity: 1, scaleX: 1 },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scaleX: 0 }}
  animate={{ opacity: 1, scaleX: 1 }}
  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
>
  Draw
</motion.div>`,
  },
  {
    id: "image-reveal",
    name: "Image Reveal",
    description: "Text masks image underneath on scroll",
    category: "Scroll",
    demoText: "Mask",
    initial: { clipPath: "inset(0% 0% 100% 0%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
>
  Mask
</motion.div>`,
  },
  {
    id: "wave-scroll",
    name: "Wave Scroll",
    description: "Text waves based on scroll Y position",
    category: "Scroll",
    demoText: "Wave",
    initial: { opacity: 0, rotate: -5, y: 20 },
    animate: { opacity: 1, rotate: 0, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, rotate: -5, y: 20 }}
  animate={{ opacity: 1, rotate: 0, y: 0 }}
  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Wave
</motion.div>`,
  },
  {
    id: "fade-layers",
    name: "Fade Layers",
    description: "Multiple text layers at different speeds",
    category: "Scroll",
    demoText: "Layers",
    initial: { opacity: 0, y: 60, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 60, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
  Layers
</motion.div>`,
  },
  {
    id: "bar-graph",
    name: "Bar Graph",
    description: "Heights grow from scroll progress",
    category: "Scroll",
    demoText: "Graph",
    initial: { scaleY: 0, opacity: 0 },
    animate: { scaleY: 1, opacity: 1 },
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ scaleY: 0, opacity: 0 }}
  animate={{ scaleY: 1, opacity: 1 }}
  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
>
  Graph
</motion.div>`,
  },
  {
    id: "timeline-dots",
    name: "Timeline Dots",
    description: "Dots light up as you scroll through",
    category: "Scroll",
    demoText: "Timeline",
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
>
  Timeline
</motion.div>`,
  },
  {
    id: "scroll-shadow",
    name: "Scroll Shadow",
    description: "Dynamic drop-shadow that grows with scroll",
    category: "Scroll",
    demoText: "Shadow",
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
  Shadow
</motion.div>`,
  },
  {
    id: "progress-path",
    name: "Progress Path",
    description: "Custom SVG path fills on scroll",
    category: "Scroll",
    demoText: "Path",
    initial: { opacity: 0, scaleX: 0 },
    animate: { opacity: 1, scaleX: 1 },
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scaleX: 0 }}
  animate={{ opacity: 1, scaleX: 1 }}
  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
>
  Path
</motion.div>`,
  },
  {
    id: "floating-cards",
    name: "Floating Cards",
    description: "Cards drift at different scroll speeds",
    category: "Scroll",
    demoText: "Cards",
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 200, damping: 30 },
    code: `<motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 30 }}
>
  Cards
</motion.div>`,
  },
  {
    id: "counter-spin",
    name: "Counter Spin",
    description: "Numbers count up with rotation on scroll",
    category: "Scroll",
    demoText: "Counter",
    initial: { opacity: 0, rotate: -180, scale: 0.5 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
    code: `<motion.div
  initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
  animate={{ opacity: 1, rotate: 0, scale: 1 }}
  transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
>
  Counter
</motion.div>`,
  },
  {
    id: "text-warp",
    name: "Text Warp",
    description: "Letters curve and straighten on scroll",
    category: "Scroll",
    demoText: "Warp",
    initial: { opacity: 0, rotateY: 30, x: -20 },
    animate: { opacity: 1, rotateY: 0, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, rotateY: 30, x: -20 }}
  animate={{ opacity: 1, rotateY: 0, x: 0 }}
  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Warp
</motion.div>`,
  },
  {
    id: "horizontal-scroll",
    name: "Horizontal Scroll",
    description: "Cards slide in horizontally on scroll",
    category: "Scroll",
    demoText: "Scroll",
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Scroll
</motion.div>`,
  },
  {
    id: "pin-split",
    name: "Pin Split",
    description: "Text splits and pins sections on scroll",
    category: "Scroll",
    demoText: "Pin",
    initial: { clipPath: "inset(0% 50% 0% 50%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    code: `<motion.div
  initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
>
  Pin
</motion.div>`,
  },
  {
    id: "image-sequence",
    name: "Image Sequence",
    description: "Images change frame-by-frame on scroll",
    category: "Scroll",
    demoText: "Sequence",
    initial: { opacity: 0, scale: 1.2, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 1.2, filter: "blur(8px)" }}
  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
  Sequence
</motion.div>`,
  },
  {
    id: "progress-ring",
    name: "Progress Ring",
    description: "SVG ring stroke animates with scroll",
    category: "Scroll",
    demoText: "Ring",
    initial: { opacity: 0, rotate: -90, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    code: `<motion.div
  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
  animate={{ opacity: 1, rotate: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
>
  Ring
</motion.div>`,
  },
  {
    id: "sticky-counter",
    name: "Sticky Counter",
    description: "Numbers increment while the section is sticky",
    category: "Scroll",
    demoText: "Sticky",
    initial: { opacity: 0, y: 40, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Sticky
</motion.div>`,
  },
  {
    id: "gentle-float",
    name: "Gentle Float",
    description: "Infinite Y bob — calm and ambient",
    category: "Looping",
    demoText: "Float",
    initial: { y: 0 },
    animate: { y: [-8, 0, -8] },
    transition: { duration: 4, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ y: 0 }}
  animate={{ y: [-8, 0, -8] }}
  transition={{ duration: 4, repeat: null, ease: "easeInOut" }}
>
  Float
</motion.div>`,
  },
  {
    id: "subtle-glow",
    name: "Subtle Glow",
    description: "Text opacity pulses gently forever",
    category: "Looping",
    demoText: "Glow",
    initial: { opacity: 0.7 },
    animate: { opacity: [0.7, 1, 0.7] },
    transition: { duration: 3, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.7 }}
  animate={{ opacity: [0.7, 1, 0.7] }}
  transition={{ duration: 3, repeat: null, ease: "easeInOut" }}
>
  Glow
</motion.div>`,
  },
  {
    id: "breathe",
    name: "Breathe",
    description: "Scale 0.98→1 infinite loop — living text",
    category: "Looping",
    demoText: "Breathe",
    initial: { scale: 0.98 },
    animate: { scale: [0.98, 1, 0.98] },
    transition: { duration: 4, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ scale: 0.98 }}
  animate={{ scale: [0.98, 1, 0.98] }}
  transition={{ duration: 4, repeat: null, ease: "easeInOut" }}
>
  Breathe
</motion.div>`,
  },
  {
    id: "heartbeat",
    name: "Heartbeat",
    description: "Scale pulse like a heartbeat",
    category: "Looping",
    demoText: "Heart",
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 1.2, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 1.2, repeat: null, ease: "easeInOut" }}
>
  Heart
</motion.div>`,
  },
  {
    id: "calm-sea",
    name: "Calm Sea",
    description: "Gentle wave distortion — peaceful motion",
    category: "Looping",
    demoText: "Sea",
    initial: { skewX: 0 },
    animate: { skewX: [-1, 1, -1] },
    transition: { duration: 5, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ skewX: 0 }}
  animate={{ skewX: [-1, 1, -1] }}
  transition={{ duration: 5, repeat: null, ease: "easeInOut" }}
>
  Sea
</motion.div>`,
  },
  {
    id: "wind-drift",
    name: "Wind Drift",
    description: "Letters gently sway like in the wind",
    category: "Looping",
    demoText: "Wind",
    initial: { x: 0 },
    animate: { x: [-3, 3, -3] },
    transition: { duration: 3, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ x: 0 }}
  animate={{ x: [-3, 3, -3] }}
  transition={{ duration: 3, repeat: null, ease: "easeInOut" }}
>
  Wind
</motion.div>`,
  },
  {
    id: "gentle-sway",
    name: "Gentle Sway",
    description: "Tree-in-wind motion — organic rotation",
    category: "Looping",
    demoText: "Sway",
    initial: { rotate: 0 },
    animate: { rotate: [-1.5, 1.5, -1.5] },
    transition: { duration: 4, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ rotate: 0 }}
  animate={{ rotate: [-1.5, 1.5, -1.5] }}
  transition={{ duration: 4, repeat: null, ease: "easeInOut" }}
>
  Sway
</motion.div>`,
  },
  {
    id: "ambient-pulse",
    name: "Ambient Pulse",
    description: "Ultra-slow opacity pulse — 8s cycle",
    category: "Looping",
    demoText: "Ambient",
    initial: { opacity: 0.85 },
    animate: { opacity: [0.85, 1, 0.85] },
    transition: { duration: 8, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.85 }}
  animate={{ opacity: [0.85, 1, 0.85] }}
  transition={{ duration: 8, repeat: null, ease: "easeInOut" }}
>
  Ambient
</motion.div>`,
  },
  {
    id: "cosmic-drift",
    name: "Cosmic Drift",
    description: "Slow multi-axis float — spacey feel",
    category: "Looping",
    demoText: "Cosmic",
    initial: { x: 0, y: 0 },
    animate: { x: [-6, 6, -6], y: [-3, 3, -3] },
    transition: { duration: 6, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ x: 0, y: 0 }}
  animate={{ x: [-6, 6, -6], y: [-3, 3, -3] }}
  transition={{ duration: 6, repeat: null, ease: "easeInOut" }}
>
  Cosmic
</motion.div>`,
  },
  {
    id: "star-twinkle",
    name: "Star Twinkle",
    description: "Opacity and scale twinkle effect",
    category: "Looping",
    demoText: "Twinkle",
    initial: { opacity: 0.8, scale: 1 },
    animate: { opacity: [0.8, 1, 0.8], scale: [1, 1.03, 1] },
    transition: { duration: 2, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.8, scale: 1 }}
  animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.03, 1] }}
  transition={{ duration: 2, repeat: null, ease: "easeInOut" }}
>
  Twinkle
</motion.div>`,
  },
  {
    id: "northern-lights",
    name: "Northern Lights",
    description: "Soft slow color-shift ambient mood",
    category: "Looping",
    demoText: "Aurora",
    initial: { opacity: 0.7, y: 0 },
    animate: { opacity: [0.7, 1, 0.7], y: [-2, 2, -2] },
    transition: { duration: 5, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.7, y: 0 }}
  animate={{ opacity: [0.7, 1, 0.7], y: [-2, 2, -2] }}
  transition={{ duration: 5, repeat: null, ease: "easeInOut" }}
>
  Aurora
</motion.div>`,
  },
  {
    id: "fireflies",
    name: "Fireflies",
    description: "Random scale and opacity twinkles",
    category: "Looping",
    demoText: "Firefly",
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: [0, 1, 0], scale: [0.8, 1, 0.8] },
    transition: { duration: 3, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
  transition={{ duration: 3, repeat: null, ease: "easeInOut" }}
>
  Firefly
</motion.div>`,
  },
  {
    id: "liquid-metal",
    name: "Liquid Metal",
    description: "Subtle metallic sheen movement",
    category: "Looping",
    demoText: "Metal",
    initial: { opacity: 0.9, filter: "brightness(1)" },
    animate: {
      opacity: [0.9, 1, 0.9],
      filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"],
    },
    transition: { duration: 4, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.9, filter: "brightness(1)" }}
  animate={{
      opacity: [0.9, 1, 0.9],
      filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"],
    }}
  transition={{ duration: 4, repeat: null, ease: "easeInOut" }}
>
  Metal
</motion.div>`,
  },
  {
    id: "thermal-wave",
    name: "Thermal Wave",
    description: "Heat distortion shimmer effect",
    category: "Looping",
    demoText: "Thermal",
    initial: { filter: "blur(0px)" },
    animate: { filter: ["blur(0px)", "blur(0.5px)", "blur(0px)"] },
    transition: { duration: 3, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ filter: "blur(0px)" }}
  animate={{ filter: ["blur(0px)", "blur(0.5px)", "blur(0px)"] }}
  transition={{ duration: 3, repeat: null, ease: "easeInOut" }}
>
  Thermal
</motion.div>`,
  },
  {
    id: "polar-lights",
    name: "Polar Lights",
    description: "Vertical gradient shift — aurora borealis",
    category: "Looping",
    demoText: "Polar",
    initial: { y: 0, opacity: 0.8 },
    animate: { y: [-4, 4, -4], opacity: [0.8, 1, 0.8] },
    transition: { duration: 6, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ y: 0, opacity: 0.8 }}
  animate={{ y: [-4, 4, -4], opacity: [0.8, 1, 0.8] }}
  transition={{ duration: 6, repeat: null, ease: "easeInOut" }}
>
  Polar
</motion.div>`,
  },
  {
    id: "deep-focus",
    name: "Deep Focus",
    description: "Crystallizes from deep blur — lens focus pull",
    category: "Looping",
    demoText: "Focus",
    initial: { filter: "blur(3px)", opacity: 0.7 },
    animate: {
      filter: ["blur(3px)", "blur(0px)", "blur(3px)"],
      opacity: [0.7, 1, 0.7],
    },
    transition: { duration: 5, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ filter: "blur(3px)", opacity: 0.7 }}
  animate={{
      filter: ["blur(3px)", "blur(0px)", "blur(3px)"],
      opacity: [0.7, 1, 0.7],
    }}
  transition={{ duration: 5, repeat: null, ease: "easeInOut" }}
>
  Focus
</motion.div>`,
  },
  {
    id: "gradient-flow",
    name: "Gradient Flow",
    description: "Background gradient moves infinitely",
    category: "Looping",
    demoText: "Flow",
    initial: { opacity: 0.8, x: 0 },
    animate: { opacity: [0.8, 1, 0.8], x: [-4, 4, -4] },
    transition: { duration: 4, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ opacity: 0.8, x: 0 }}
  animate={{ opacity: [0.8, 1, 0.8], x: [-4, 4, -4] }}
  transition={{ duration: 4, repeat: null, ease: "easeInOut" }}
>
  Flow
</motion.div>`,
  },
  {
    id: "matrix-code",
    name: "Matrix Code",
    description: "Letters continuously drift downward",
    category: "Looping",
    demoText: "Code",
    initial: { y: -4, opacity: 0.6 },
    animate: { y: [4, -4], opacity: [0.6, 1, 0.6] },
    transition: { duration: 3, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ y: -4, opacity: 0.6 }}
  animate={{ y: [4, -4], opacity: [0.6, 1, 0.6] }}
  transition={{ duration: 3, repeat: null, ease: "easeInOut" }}
>
  Code
</motion.div>`,
  },
  {
    id: "floating-dust",
    name: "Floating Dust",
    description: "Tiny particles drift up indefinitely",
    category: "Looping",
    demoText: "Dust",
    initial: { y: 6, opacity: 0 },
    animate: { y: [-6, 6], opacity: [0, 1, 0] },
    transition: { duration: 5, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ y: 6, opacity: 0 }}
  animate={{ y: [-6, 6], opacity: [0, 1, 0] }}
  transition={{ duration: 5, repeat: null, ease: "easeInOut" }}
>
  Dust
</motion.div>`,
  },
  {
    id: "cursor-dance",
    name: "Cursor Dance",
    description: "Letters dance with gentle rotation",
    category: "Looping",
    demoText: "Dance",
    initial: { rotate: 0, y: 0 },
    animate: { rotate: [-2, 2, -2], y: [-3, 3, -3] },
    transition: { duration: 3, repeat: null, ease: "easeInOut" },
    code: `<motion.div
  initial={{ rotate: 0, y: 0 }}
  animate={{ rotate: [-2, 2, -2], y: [-3, 3, -3] }}
  transition={{ duration: 3, repeat: null, ease: "easeInOut" }}
>
  Dance
</motion.div>`,
  },
  {
    id: "kerning-dance",
    name: "Kerning Dance",
    description: "Letter spacing breathes in and out",
    category: "Typography",
    demoText: "Kern",
    initial: { letterSpacing: "0em", opacity: 0 },
    animate: { letterSpacing: "0.05em", opacity: 1 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ letterSpacing: "0em", opacity: 0 }}
  animate={{ letterSpacing: "0.05em", opacity: 1 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Kern
</motion.div>`,
  },
  {
    id: "tracking-tighten",
    name: "Tracking Tighten",
    description: "Letter spacing contracts elegantly",
    category: "Typography",
    demoText: "Tight",
    initial: { letterSpacing: "0.15em", opacity: 0 },
    animate: { letterSpacing: "0em", opacity: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ letterSpacing: "0.15em", opacity: 0 }}
  animate={{ letterSpacing: "0em", opacity: 1 }}
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Tight
</motion.div>`,
  },
  {
    id: "baseline-shift",
    name: "Baseline Shift",
    description: "Letters bounce gently on their baseline",
    category: "Typography",
    demoText: "Bounce",
    initial: { y: 8, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 500, damping: 20 },
    code: `<motion.div
  initial={{ y: 8, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 500, damping: 20 }}
>
  Bounce
</motion.div>`,
  },
  {
    id: "type-scale",
    name: "Type Scale",
    description: "Size scales up dramatically from small",
    category: "Typography",
    demoText: "Scale",
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    code: `<motion.div
  initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
>
  Scale
</motion.div>`,
  },
  {
    id: "contrast-flip",
    name: "Contrast Flip",
    description: "Dark to light color transition",
    category: "Typography",
    demoText: "Contrast",
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
  Contrast
</motion.div>`,
  },
  {
    id: "shadow-cascade",
    name: "Shadow Cascade",
    description: "Shadows build up progressively",
    category: "Typography",
    demoText: "Cascade",
    initial: { opacity: 0, y: 16, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Cascade
</motion.div>`,
  },
  {
    id: "weight-ladder",
    name: "Weight Ladder",
    description: "Sequential weight increase feeling",
    category: "Typography",
    demoText: "Weight",
    initial: { opacity: 0, scale: 0.9, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.9, y: 8 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Weight
</motion.div>`,
  },
  {
    id: "outline-stroke",
    name: "Outline Stroke",
    description: "Border stroke animation on text",
    category: "Typography",
    demoText: "Stroke",
    initial: { opacity: 0, scale: 1.1, filter: "blur(2px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 1.1, filter: "blur(2px)" }}
  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
>
  Stroke
</motion.div>`,
  },
  {
    id: "baseline-glow",
    name: "Baseline Glow",
    description: "Underline with glow effect",
    category: "Typography",
    demoText: "Glow",
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
  Glow
</motion.div>`,
  },
  {
    id: "typewriter-delete",
    name: "Typewriter",
    description: "Text types in with cursor blink feel",
    category: "Typography",
    demoText: "Type",
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
    code: `<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  Type
</motion.div>`,
  },
  {
    id: "color-spectrum",
    name: "Color Spectrum",
    description: "HSV hue rotation across text",
    category: "Typography",
    demoText: "Spectrum",
    initial: { opacity: 0, rotate: -5 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    code: `<motion.div
  initial={{ opacity: 0, rotate: -5 }}
  animate={{ opacity: 1, rotate: 0 }}
  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
>
  Spectrum
</motion.div>`,
  },
  {
    id: "opacity-layers",
    name: "Opacity Layers",
    description: "Multiple text shadow layers fade in",
    category: "Typography",
    demoText: "Layers",
    initial: { opacity: 0, scale: 0.95, y: 6 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.95, y: 6 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Layers
</motion.div>`,
  },
  {
    id: "monospace-march",
    name: "Monospace March",
    description: "Letters march in with monospace rhythm",
    category: "Typography",
    demoText: "March",
    initial: { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.35, ease: "easeOut" },
    code: `<motion.div
  initial={{ opacity: 0, x: -12 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  March
</motion.div>`,
  },
  {
    id: "italic-sweep",
    name: "Italic Sweep",
    description: "Font style sweeps from italic to normal",
    category: "Typography",
    demoText: "Italic",
    initial: { opacity: 0, skewX: -8 },
    animate: { opacity: 1, skewX: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    code: `<motion.div
  initial={{ opacity: 0, skewX: -8 }}
  animate={{ opacity: 1, skewX: 0 }}
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Italic
</motion.div>`,
  },
  {
    id: "dissolve",
    name: "Dissolve",
    description: "Pure opacity dissolve — timeless and minimal",
    category: "Typography",
    demoText: "Dissolve",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.1, ease: "linear" },
    code: `<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.1, ease: "linear" }}
>
  Dissolve
</motion.div>`,
  },
  {
    id: "underline-draw",
    name: "Underline Draw",
    description: "Text rises in, then an underline draws itself",
    category: "Typography",
    demoText: "Underline",
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
>
  Underline
</motion.div>`,
  },
  {
    id: "shimmer-in",
    name: "Shimmer In",
    description: "Glows into existence with a luminous shimmer",
    category: "Typography",
    demoText: "Shimmer",
    initial: { opacity: 0, filter: "blur(8px) brightness(2)" },
    animate: { opacity: 1, filter: "blur(0px) brightness(1)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    code: `<motion.div
  initial={{ opacity: 0, filter: "blur(8px) brightness(2)" }}
  animate={{ opacity: 1, filter: "blur(0px) brightness(1)" }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
  Shimmer
</motion.div>`,
  },
  {
    id: "pop-land",
    name: "Pop & Land",
    description: "Snaps in at overshoot scale, then settles",
    category: "Typography",
    demoText: "Pop",
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 600, damping: 30, mass: 0.6 },
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.6 }}
>
  Pop
</motion.div>`,
  },
  {
    id: "gravity-drop",
    name: "Gravity Drop",
    description: "Accelerates in from above — impactful",
    category: "Typography",
    demoText: "Drop",
    initial: { opacity: 0, y: -80, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45] },
    code: `<motion.div
  initial={{ opacity: 0, y: -80, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.5, ease: [0.55, 0, 1, 0.45] }}
>
  Drop
</motion.div>`,
  },
  {
    id: "rotate-settle",
    name: "Rotate & Settle",
    description: "Spins in with rotation and springs to upright",
    category: "Typography",
    demoText: "Rotate",
    initial: { opacity: 0, rotate: -12, scale: 0.85, y: 20 },
    animate: { opacity: 1, rotate: 0, scale: 1, y: 0 },
    transition: { type: "spring", stiffness: 320, damping: 22 },
    code: `<motion.div
  initial={{ opacity: 0, rotate: -12, scale: 0.85, y: 20 }}
  animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 320, damping: 22 }}
>
  Rotate
</motion.div>`,
  },
];
