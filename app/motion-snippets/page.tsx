"use client";

import { useState, useMemo } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HeroSection } from "@/components/hero/hero-section";
import { TextPreviewCard } from "@/components/animations/text-preview-card";
import { animationPresets, CATEGORIES } from "@/components/animations/presets";
import { Pagination } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 18;

export default function MotionSnippetsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return animationPresets;
    return animationPresets.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen relative flex items-start justify-center p-4 md:p-8 lg:p-12">
      <ThemeToggle />

      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-[1400px] flex flex-col gap-8 pt-4">
        {/* Header Section */}
        <div className="px-4 md:px-0">
          <HeroSection />
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 flex-wrap px-4 md:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
                "border",
                activeCategory === cat
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-accent/50 hover:text-accent",
              )}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  {animationPresets.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Minimal Grid */}
        <div className="rounded-3xl overflow-hidden bg-slate-300 dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            {paginated.map((preset, index) => (
              <div
                key={preset.id}
                className="bg-[#FBF7F4] dark:bg-[#000000] overflow-hidden flex flex-col"
              >
                <TextPreviewCard preset={preset} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* Footer */}
        <footer className="pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
            <p>Made with ❤️ by Kiran</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {filtered.length} animations · Ready to copy-paste
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
