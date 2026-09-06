"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, SkillItem } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { Code2, Wrench, Layers, Cpu, CheckCircle, ChevronRight, Terminal } from "lucide-react";

export function TechDnaSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "languages" | "tools" | "concepts" | "technologies">("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(PORTFOLIO_DATA.skillsByCategory.technologies[2]); // Default ARM Cortex-M

  const categories = [
    { id: "all", label: "00 // ALL DISCIPLINES", icon: Layers },
    { id: "languages", label: "01 // PROGRAMMING", icon: Code2 },
    { id: "tools", label: "02 // DEVELOPER TOOLS", icon: Wrench },
    { id: "concepts", label: "03 // CORE CONCEPTS", icon: Terminal },
    { id: "technologies", label: "04 // TECHNOLOGIES & DOMAINS", icon: Cpu },
  ] as const;

  const getAllSkills = () => [
    ...PORTFOLIO_DATA.skillsByCategory.languages,
    ...PORTFOLIO_DATA.skillsByCategory.tools,
    ...PORTFOLIO_DATA.skillsByCategory.concepts,
    ...PORTFOLIO_DATA.skillsByCategory.technologies,
  ];

  const currentSkills: SkillItem[] =
    activeCategory === "all"
      ? getAllSkills()
      : PORTFOLIO_DATA.skillsByCategory[activeCategory];

  return (
    <section id="stack" className="py-24 border-b border-[#D5E4F2] bg-white relative overflow-hidden">
      {/* Blueprint Dots Background */}
      <div className="absolute inset-0 bg-blueprint-grid-dense opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#1677FF]" />
            <span>03 // ENGINEERING DNA & TECHNICAL STACK</span>
          </div>
          <div className="font-mono text-xs text-[#4B6279]">
            <span>SYSTEM CONSTELLATION: </span>
            <span className="text-[#1677FF] font-bold">19 VERIFIED MODULES</span>
          </div>
        </div>

        {/* Title & Editorial Intro */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#061A2B] uppercase tracking-tight mb-4">
            COMPUTATIONAL STACK &amp; SYSTEM CAPABILITIES
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#4B6279] leading-relaxed">
            Organized strictly according to the verified engineering syllabus and resume data. Spanning low-level bare metal register configuration, networking protocol stacks, and high-level algorithmic logic.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#D5E4F2] font-mono text-xs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick(680);
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-2.5 border transition-all flex items-center gap-2 tracking-wider ${
                  isActive
                    ? "bg-[#061A2B] text-white border-[#061A2B] shadow-sm font-semibold"
                    : "bg-[#F8FBFF] text-[#4B6279] border-[#D5E4F2] hover:border-[#1677FF] hover:text-[#061A2B]"
                }`}
                data-cursor="action"
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#48C8FF]" : "text-[#1677FF]"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive 2-Column Matrix: Constellation Grid Left + Deep Node Inspector Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Constellation Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentSkills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => {
                    soundFx.playClick(840);
                    setSelectedSkill(skill);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`p-4 border transition-all cursor-pointer relative group text-left ${
                    isSelected
                      ? "bg-[#EDF7FD] border-[#1677FF] shadow-md ring-1 ring-[#1677FF]"
                      : "bg-white border-[#D5E4F2] hover:border-[#1677FF]/60 hover:bg-[#F8FBFF]"
                  }`}
                  data-cursor="action"
                >
                  {/* Highlight indicator */}
                  {skill.highlight && (
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] text-[#4B6279] uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 ${
                        skill.level === "Core Focus"
                          ? "bg-[#DDF4FF] text-[#1677FF] font-bold"
                          : "bg-[#F8FBFF] text-[#4B6279] border border-[#D5E4F2]"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#061A2B] group-hover:text-[#1677FF] transition-colors mb-1.5">
                    {skill.name}
                  </h3>

                  <p className="font-sans text-xs text-[#4B6279] line-clamp-2 mb-3">
                    {skill.desc}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {skill.ecosystem.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[9px] px-1.5 py-0.5 bg-white border border-[#D5E4F2] text-[#08243B]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Node Inspector (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 bg-[#061A2B] text-white border border-[#08243B] shadow-xl relative overflow-hidden tech-corner-tl tech-corner-br">
              {/* Background Circuit Decal */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#1677FF]/15 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-[10px]">
                <div className="flex items-center gap-2 text-[#48C8FF]">
                  <span className="w-2 h-2 rounded-full bg-[#48C8FF] animate-pulse" />
                  <span className="font-bold">NODE INSPECTOR // SYSTEM ARCHIVE</span>
                </div>
                <span className="text-white/40">DISCIPLINE: {selectedSkill.category.toUpperCase()}</span>
              </div>

              {/* Title & Level */}
              <div className="mb-6">
                <span className="font-mono text-xs text-[#48C8FF] tracking-widest uppercase block mb-1">
                  MODULE SPECIFICATION
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {selectedSkill.name}
                </h3>
                <div className="mt-2 flex items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 bg-[#1677FF] text-white font-semibold">
                    STATUS: {selectedSkill.level.toUpperCase()}
                  </span>
                  <span className="text-white/60">VERIFIED IN CURRICULUM</span>
                </div>
              </div>

              {/* Technical Description */}
              <div className="mb-6 space-y-2">
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider block">
                  TECHNICAL DEFINITION &amp; ROLE
                </span>
                <p className="font-sans text-sm text-[#DDF4FF] leading-relaxed">
                  {selectedSkill.desc}
                </p>
              </div>

              {/* Ecosystem & Sub-concepts */}
              <div className="mb-6">
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider block mb-2">
                  ASSOCIATED PREREQUISITES &amp; PARADIGMS
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {selectedSkill.ecosystem.map((eco) => (
                    <div
                      key={eco}
                      className="p-2 bg-white/5 border border-white/10 text-[#48C8FF] flex items-center gap-2"
                    >
                      <ChevronRight className="w-3 h-3 text-[#1677FF]" />
                      <span>{eco}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Blueprint Callout */}
              <div className="p-3.5 bg-white/5 border-l-2 border-[#48C8FF] font-mono text-[11px] text-white/80">
                <span className="text-[#48C8FF] font-bold block mb-1">SJCET COURSEWORK INTEGRATION:</span>
                Applicable across Laboratory Practicums, Microcontroller Instrumentation, and Object-Oriented Software Projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

