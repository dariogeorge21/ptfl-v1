"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/sound";
import { ArrowUpRight } from "lucide-react";

interface StrengthItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  statement: string;
}

const STRENGTHS: StrengthItem[] = [
  {
    id: "s1",
    number: "01",
    title: "PROBLEM DECONSTRUCTION",
    tag: "FIRST PRINCIPLES",
    statement:
      "Isolating hardware interrupts, memory bottlenecks, and packet drops into deterministic sub-problems.",
  },
  {
    id: "s2",
    number: "02",
    title: "AUTONOMOUS LEARNING",
    tag: "FAST ABSORPTION",
    statement:
      "Rapidly assimilating new silicon architectures, compiler toolchains, and protocol specifications.",
  },
  {
    id: "s3",
    number: "03",
    title: "TEAMWORK & CLARITY",
    tag: "HIGH ALIGNMENT",
    statement:
      "Clean documentation, transparent code reviews, and structured communication across project peers.",
  },
  {
    id: "s4",
    number: "04",
    title: "AGILE ADAPTABILITY",
    tag: "SYSTEM VERSATILITY",
    statement:
      "Pivoting smoothly between bare-metal register manipulation and high-level software pipelines.",
  },
];

export function StrengthsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 border-b border-[#D5E4F2] bg-[#F8FBFF] relative overflow-hidden">
      {/* Subtle blueprint accent line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase mb-12">
          <span className="w-8 h-[1px] bg-[#1677FF]" />
          <span>08 // CORE METHODOLOGY</span>
        </div>

        {/* Editorial Split: Left Thesis + Right Minimal Hairline List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Minimalist Title & Thesis */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#061A2B] uppercase tracking-tight leading-[0.95]">
                ENGINEERING
                <span className="block text-[#1677FF]">PRINCIPLES.</span>
              </h2>
            </div>

            <p className="font-sans text-sm text-[#4B6279] leading-relaxed max-w-sm">
              The operational habits guiding how I diagnose system bottlenecks, adopt new technologies, and collaborate on software and embedded builds.
            </p>

            <div className="pt-4 border-t border-[#D5E4F2] flex items-center justify-between font-mono text-[11px] text-[#4B6279]">
              <span>SOURCE // RESUME DATA</span>
              <span className="text-[#1677FF] font-semibold">4 CORE ATTRIBUTES</span>
            </div>
          </div>

          {/* Right Column: Clean Hairline-Divided Minimal Rows */}
          <div className="lg:col-span-8 border-t border-[#D5E4F2]">
            {STRENGTHS.map((item) => {
              const isHovered = hoveredId === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => {
                    setHoveredId(item.id);
                    soundFx.playHover();
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`py-8 sm:py-10 border-b border-[#D5E4F2] transition-all duration-200 relative group px-4 sm:px-6 -mx-4 sm:-mx-6 cursor-default ${
                    isHovered ? "bg-white/80" : "bg-transparent"
                  }`}
                  data-cursor="action"
                >
                  {/* Left Accent Indicator on Hover */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#1677FF] transition-all duration-200 ${
                      isHovered ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50"
                    }`}
                  />

                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 sm:gap-6">
                    {/* Index & Title */}
                    <div className="flex items-baseline gap-4 md:w-5/12 shrink-0">
                      <span className="font-mono text-xs font-bold text-[#1677FF]">
                        {item.number}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#061A2B] group-hover:text-[#1677FF] transition-colors uppercase tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Statement & Tag */}
                    <div className="md:w-7/12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                      <p className="font-sans text-xs sm:text-sm text-[#4B6279] leading-relaxed">
                        {item.statement}
                      </p>

                      <span className="shrink-0 font-mono text-[10px] px-2 py-0.5 bg-[#EDF7FD] text-[#08243B] border border-[#D5E4F2] uppercase tracking-wider self-start sm:self-auto group-hover:border-[#1677FF]/40 group-hover:text-[#1677FF] transition-colors">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
