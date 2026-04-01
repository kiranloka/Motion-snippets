"use client";

import { useState, useMemo } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HeroSection } from "@/components/hero/hero-section";
import { TextPreviewCard } from "@/components/animations/text-preview-card";
import { animationPresets, CATEGORIES } from "@/components/animations/presets";
import { Pagination } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

// Pretext Imports
import { ObstacleParting } from "@/components/ui/pretext/01-obstacle-parting";
import { LineByLineCascade } from "@/components/ui/pretext/02-line-by-line-cascade";
import { FluidContainerMorph } from "@/components/ui/pretext/03-fluid-container-morph";
import { WordGravity } from "@/components/ui/pretext/04-word-gravity";
import { LiveTypewriter } from "@/components/ui/pretext/05-live-typewriter";
import { DragonFollower } from "@/components/ui/pretext/06-dragon-follower";
import { ParagraphBreath } from "@/components/ui/pretext/07-paragraph-breath";
import { HighlightBeam } from "@/components/ui/pretext/08-highlight-beam";
import { ScrollReveal } from "@/components/ui/pretext/09-scroll-reveal";
import { MagneticWordPull } from "@/components/ui/pretext/10-magnetic-word-pull";

import { CopyButton } from "@/components/ui/copy-button";
import codeSnippets from "@/components/ui/pretext/codes.json";

const ITEMS_PER_PAGE = 18;

export default function MotionSnippetsPage() {
  const [activeTab, setActiveTab] = useState("Presets");
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

        {/* Global Tabs */}
        <div className="px-4 md:px-0 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab("Presets")}
            className={cn(
              "px-6 py-2 rounded-t-lg font-medium transition-colors border-b-2",
              activeTab === "Presets"
                ? "border-accent text-slate-900 dark:text-slate-100 bg-accent/5 dark:bg-accent/10"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300",
            )}
          >
            Spring & CSS Presets
          </button>
          <button
            onClick={() => setActiveTab("Pretext")}
            className={cn(
              "px-6 py-2 rounded-t-lg font-medium transition-colors border-b-2",
              activeTab === "Pretext"
                ? "border-accent text-slate-900 dark:text-slate-100 bg-accent/5 dark:bg-accent/10"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300",
            )}
          >
            Pretext Layout Engine
          </button>
        </div>

        {activeTab === "Presets" ? (
          <>
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
                      {
                        animationPresets.filter((p) => p.category === cat)
                          .length
                      }
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
                    className="bg-[#ffffff] dark:bg-[#000000] overflow-hidden flex flex-col"
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
          </>
        ) : (
          <div className="flex flex-col gap-16 px-4 md:px-0">
            {/* Batch 1 Divider */}

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500 space-x-2">
                    01
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Obstacle Parting
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Text reflows in real time around your cursor as if it's a
                  physical object parting water.
                </p>
                <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs text-blue-500 font-mono">
                  pretext api: layoutNextLine() per frame
                </code>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <ObstacleParting />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton code={codeSnippets["01-obstacle-parting"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500 space-x-2">
                    02
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Cascade Entrance
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Each line dynamically enters using staggered springs, while
                  maintaining absolute exact wrap positions.
                </p>
                <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs text-blue-500 font-mono">
                  pretext api: layoutWithLines()
                </code>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <LineByLineCascade />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton code={codeSnippets["02-line-by-line-cascade"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500 space-x-2">
                    03
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Fluid Morph
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Drag handle to resize container. Paragraph instantly reflows
                  while Motion smoothly animates height change.
                </p>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <FluidContainerMorph />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["03-fluid-container-morph"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500 space-x-2">
                    04
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Word Gravity
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Click to drop words, returning them via spring-physics physics
                  to origin spots calculated by pure CPU math.
                </p>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <WordGravity />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["04-word-gravity"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500 space-x-2">
                    05
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Live Typewriter
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  No jumpy container heights! Typing accurately updates
                  container height mathematically frame by frame.
                </p>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <LiveTypewriter />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["05-live-typewriter"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500">06</span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Dragon Follower
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Text lines arc and curve toward your cursor like a
                  dragon&apos;s tail following its head. Proximity-based spring
                  physics.
                </p>
                <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs text-emerald-500 font-mono">
                  pretext api: layoutWithLines() + cursor proximity
                </code>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <DragonFollower />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["06-dragon-follower"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500">07</span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Paragraph Breath
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Container width pulsates on a meditative loop. Text reflows
                  continuously while height animates with zero jank.
                </p>
                <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs text-emerald-500 font-mono">
                  pretext api: layout() on every breath tick
                </code>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <ParagraphBreath />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["07-paragraph-breath"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500">08</span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Highlight Beam
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  A scanning beam of light sweeps across words, highlighting
                  them in reading order with pixel-perfect accuracy.
                </p>
                <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs text-amber-500 font-mono">
                  pretext api: segments + widths per word
                </code>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <HighlightBeam />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["08-highlight-beam"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500">09</span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Scroll Reveal
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Lines slide in from the left with a blur-to-sharp deblur,
                  triggered on scroll or hover. Real wrap-aware lines.
                </p>
                <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs text-violet-500 font-mono">
                  pretext api: layoutWithLines() + useInView
                </code>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <ScrollReveal />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["09-scroll-reveal"]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-24 space-y-4 pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-slate-500">10</span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Magnetic Word Pull
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Every word is a magnet drawn to your cursor. Proximity
                  controls force — close words leap, distant words stay put.
                </p>
                <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs text-rose-500 font-mono">
                  pretext api: segment positions + cursor distance
                </code>
              </div>
              <div className="w-full bg-slate-50 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <MagneticWordPull />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <CopyButton code={codeSnippets["10-magnetic-word-pull"]} />
                </div>
              </div>
            </div>
          </div>
        )}

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
