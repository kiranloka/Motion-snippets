export const eases = {
  smooth: [0.16, 1, 0.3, 1],
  cinematic: [0.34, 1.56, 0.64, 1],
  sharp: [0.25, 0.46, 0.45, 0.94],
  accelerate: [0.55, 0, 1, 0.45],
  fluid: [0.76, 0, 0.24, 1],
};

export const springs = {
  soft: { type: "spring", stiffness: 300, damping: 20 },
  medium: { type: "spring", stiffness: 400, damping: 24 },
  snappy: { type: "spring", stiffness: 500, damping: 28 },
  bouncy: { type: "spring", stiffness: 600, damping: 15 },
};
