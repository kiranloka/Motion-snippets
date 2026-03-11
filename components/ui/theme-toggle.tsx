"use client";

import { useTheme } from "@/lib/theme";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 z-50 theme-toggle-orb w-12 h-12 rounded-full flex items-center justify-center glass border border-white cursor-pointer"
        aria-label="Toggle theme"
      >
        <Moon className="w-5 h-5 text-accent text-white" />
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 theme-toggle-orb w-12 h-12 rounded-full flex items-center justify-center glass border border-slate-200 dark:border-white/20 cursor-pointer shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5 text-accent-foreground" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
