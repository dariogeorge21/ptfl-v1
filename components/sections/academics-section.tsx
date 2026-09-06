"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, AcademicArea } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { BookOpen, Network, Cpu, Database, Binary, BrainCircuit, FolderKanban, Code } from "lucide-react";

export function AcademicsSection() {
  const [selectedArea, setSelectedArea] = useState<AcademicArea | null>(PORTFOLIO_DATA.academicAreas[0]);

  const iconMap: Record<string, React.ReactNode> = {
    "ACAD // 01": <Network className="w-4 h-4 text-[#1677FF]" />,
    "ACAD // 02": <Network className="w-4 h-4 text-[#48C8FF]" />,
    "ACAD // 03": <Binary className="w-4 h-4 text-[#1677FF]" />,
    "ACAD // 04": <Cpu className="w-4 h-4 text-[#48C8FF]" />,
    "ACAD // 05": <Cpu className="w-4 h-4 text-[#1677FF]" />,
    "ACAD // 06": <BrainCircuit className="w-4 h-4 text-[#1677FF]" />,
    "ACAD // 07": <FolderKanban className="w-4 h-4 text-[#48C8FF]" />,
    "ACAD // 08": <Code className="w-4 h-4 text-[#1677FF]" />,
  };

  return (
    <section id="academics" className="py-24 border-b border-[#D5E4F2] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#1677FF]" />
            <span>05 // ACADEMIC AREAS &amp; CURRICULAR FOUNDATIONS</span>
          </div>
          <span className="font-mono text-xs text-[#4B6279]">
            SJCET PALAI // 8 VERIFIED CORE DISCIPLINES
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#061A2B] uppercase tracking-tight mb-4">
            ACADEMIC CURRICULUM &amp; KNOWLEDGE MAP
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#4B6279] leading-relaxed">
            The core theoretical and applied domains studied through the B.Tech Computer Science &amp; Engineering syllabus under APJ Abdul Kalam Technological University (KTU).
          </p>
        </div>

        {/* 8-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PORTFOLIO_DATA.academicAreas.map((area) => {
            const isSelected = selectedArea?.id === area.id;

            return (
              <div
                key={area.id}
                onClick={() => {
                  soundFx.playClick(720);
                  setSelectedArea(area);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`p-5 border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#EDF7FD] border-[#1677FF] shadow-md ring-1 ring-[#1677FF]"
                    : "bg-[#F8FBFF] border-[#D5E4F2] hover:border-[#1677FF]/60 hover:bg-white"
                }`}
                data-cursor="action"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[10px]">
                    <span className="text-[#1677FF] font-bold">{area.code}</span>
                    <span className="px-1.5 py-0.5 bg-white border border-[#D5E4F2] text-[#4B6279]">
                      {area.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    {iconMap[area.code] || <BookOpen className="w-4 h-4 text-[#1677FF]" />}
                    <h3 className="font-display font-bold text-base text-[#061A2B] leading-tight">
                      {area.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[9px] text-[#4B6279] block mb-3 uppercase">
                    DOMAIN: {area.domain}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#D5E4F2]/70 font-mono text-[10px] text-[#1677FF] flex items-center justify-between">
                  <span>INSPECT TOPICS</span>
                  <span>{isSelected ? "● ACTIVE" : "→"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Academic Area */}
        {selectedArea && (
          <div className="p-6 sm:p-8 bg-[#061A2B] text-white border border-[#08243B] shadow-xl relative overflow-hidden tech-corner-tl tech-corner-br animate-in fade-in-50">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#48C8FF]">
                <BookOpen className="w-4 h-4" />
                <span className="font-bold">{selectedArea.code} // SYLLABUS BREAKDOWN</span>
              </div>
              <span className="px-2 py-0.5 bg-[#1677FF] text-white font-semibold text-[10px]">
                {selectedArea.domain}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {selectedArea.title}
                </h3>
                <div className="p-4 bg-white/5 border border-white/10 mt-4">
                  <span className="font-mono text-[10px] text-[#48C8FF] uppercase tracking-wider block mb-1">
                    APPLIED ENGINEERING CONTEXT
                  </span>
                  <p className="font-sans text-xs text-[#DDF4FF] leading-relaxed">
                    {selectedArea.application}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider block mb-3">
                  SYLLABUS MODULES &amp; COMPETENCIES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                  {selectedArea.topics.map((topic, i) => (
                    <div
                      key={topic}
                      className="p-3 bg-white/5 border border-white/10 flex items-center gap-2.5 text-[#DDF4FF]"
                    >
                      <span className="text-[#48C8FF] font-bold text-[10px]">0{i + 1}.</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

