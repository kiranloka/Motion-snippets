import React from "react";
import { ObstacleParting } from "@/components/ui/pretext/01-obstacle-parting";
import { LineByLineCascade } from "@/components/ui/pretext/02-line-by-line-cascade";
import { FluidContainerMorph } from "@/components/ui/pretext/03-fluid-container-morph";
import { WordGravity } from "@/components/ui/pretext/04-word-gravity";
import { LiveTypewriter } from "@/components/ui/pretext/05-live-typewriter";

export default function PretextShowcasePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-24 font-sans selection:bg-blue-500/30">
      {/* Premium Header */}
      <div className="relative overflow-hidden border-b border-zinc-800/60 bg-zinc-950 px-6 py-24 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
        <div className="relative flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <span>Powered by Pretext & Motion</span>
          </div>
          <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            DOM-Free Layouts.
            <br />
            Infinite Framer springs.
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl">
            20 zero-reflow typography animations utilizing Cheng Lou's{" "}
            <code className="bg-zinc-800/80 px-1.5 py-0.5 rounded text-zinc-200">@chenglou/pretext</code> engine, 
            driven seamlessly by strictly typed Framer Motion wrappers. 
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-32">
        <Section 
          num="01" 
          title="Obstacle Parting" 
          desc="Text reflows in real time around your cursor as if it's a physical object parting water. Lines split left/right dynamically."
          api="pretext api: layoutNextLine() per frame with cursor exclusion zones carved from each line's available width."
        >
          <ObstacleParting />
        </Section>

        <Section 
          num="02" 
          title="Line-by-Line Cascade" 
          desc="Each line of a paragraph enters with a staggered Motion spring — but the lines are real wrap-aware lines, not fake spans."
          api="pretext api: layoutWithLines() gives exact line breaks; each LayoutLine gets its own Motion animate() entrance."
        >
          <LineByLineCascade />
        </Section>

        <Section 
          num="03" 
          title="Fluid Container Morph" 
          desc="Drag to resize a container — the paragraph reflows instantly and Motion smoothly animates the height change with zero DOM reads."
          api="pretext api: layout(handle, newWidth, lineH) on every drag tick → animate height via Motion useSpring."
        >
          <FluidContainerMorph />
        </Section>

        <Section 
          num="04" 
          title="Word Gravity" 
          desc="Words rain down from their natural paragraph positions and then spring-physics bounce back into their measured slots."
          api="pretext api: prepareWithSegments() + layoutWithLines() gives each word's x/y origin for launch & landing."
        >
          <WordGravity />
        </Section>

        <Section 
          num="05" 
          title="Live Typewriter with True Wrapping" 
          desc="Characters stream in one-by-one and the paragraph height expands in real time — no height jump or flicker at line breaks."
          api="pretext api: layout(handle, w, lh) called after each appended character; Motion animates height per frame."
        >
          <LiveTypewriter />
        </Section>
      </div>
    </div>
  );
}

function Section({ num, title, desc, api, children }: { num: string; title: string; desc: string; api: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
      <div className="sticky top-24 space-y-4 pr-8">
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono text-zinc-500">{num}</span>
          <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
        </div>
        <p className="text-zinc-400 leading-relaxed text-sm">{desc}</p>
        <div className="p-4 bg-zinc-900/60 rounded border border-zinc-800 text-xs font-mono text-blue-400/80 leading-relaxed shadow-sm">
          {api}
        </div>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
