"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { Gauge, Navigation, Cpu, Sparkles } from "lucide-react";

export function InterestsSection() {
  return (
    <section id="interests" className="py-24 border-b border-[#D5E4F2] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#1677FF]" />
            <span>09 // PASSION LAB &amp; PERSONAL PURSUITS</span>
          </div>
          <span className="font-mono text-xs text-[#4B6279]">
            CV SOURCE TRUTH
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#061A2B] uppercase tracking-tight mb-4">
            SPEED, SILICON &amp; CURIOSITY
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#4B6279] leading-relaxed">
            The external passions that inform my engineering mindset: from mechanical automotive dynamics and road touring across Kerala to semiconductor fabrication and rapid adoption of novel technologies.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.interests.map((interest, idx) => {
            return (
              <div
                key={interest.id}
                className="p-8 sm:p-10 bg-[#F8FBFF] border border-[#D5E4F2] hover:border-[#1677FF] hover:bg-white transition-all relative group tech-corner-tl"
                onMouseEnter={() => soundFx.playHover()}
              >
                {/* Top Code Ribbon */}
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#D5E4F2] font-mono text-xs">
                  <span className="font-bold text-[#1677FF]">{interest.code}</span>
                  <span className="text-[#4B6279] text-[10px]">
                    {interest.metric}
                  </span>
                </div>

                {/* Abstract Stylized SVG Engineering Visual for each discipline */}
                <div className="h-44 w-full bg-white border border-[#D5E4F2] mb-6 p-4 flex items-center justify-center relative overflow-hidden group-hover:border-[#1677FF] transition-colors">
                  {idx === 0 && (
                    /* Cars & Automotive ECU / RPM Vector Graphic */
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
                      <div className="relative flex flex-col items-center">
                        <Gauge className="w-16 h-16 text-[#1677FF] stroke-[1.2] group-hover:scale-110 transition-transform" />
                        <div className="mt-2 flex items-center gap-3 font-mono text-[10px] text-[#061A2B]">
                          <span>CAN-BUS 2.0B</span>
                          <span className="text-[#1677FF]">|</span>
                          <span>ECU TELEMETRY</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    /* Bikes & Kinematics Vector Graphic */
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
                      <div className="relative flex flex-col items-center">
                        <Navigation className="w-16 h-16 text-[#48C8FF] stroke-[1.2] group-hover:rotate-45 transition-transform" />
                        <div className="mt-2 flex items-center gap-3 font-mono text-[10px] text-[#061A2B]">
                          <span>CHASSIS GEOMETRY</span>
                          <span className="text-[#48C8FF]">|</span>
                          <span>ROAD TOURING</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    /* Silicon / Computers Vector Graphic */
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
                      <div className="relative flex flex-col items-center">
                        <Cpu className="w-16 h-16 text-[#061A2B] stroke-[1.2] group-hover:text-[#1677FF] transition-colors" />
                        <div className="mt-2 flex items-center gap-3 font-mono text-[10px] text-[#061A2B]">
                          <span>SILICON LITHOGRAPHY</span>
                          <span className="text-[#1677FF]">|</span>
                          <span>IPC BENCHMARKS</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 3 && (
                    /* Learning / Particles Vector Graphic */
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
                      <div className="relative flex flex-col items-center">
                        <Sparkles className="w-16 h-16 text-[#1677FF] stroke-[1.2] group-hover:rotate-180 transition-transform duration-700" />
                        <div className="mt-2 flex items-center gap-3 font-mono text-[10px] text-[#061A2B]">
                          <span>NEURAL PARADIGMS</span>
                          <span className="text-[#1677FF]">|</span>
                          <span>CONTINUOUS ADAPT</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-2xl text-[#061A2B] group-hover:text-[#1677FF] transition-colors mb-2">
                  {interest.title}
                </h3>

                <div className="font-mono text-xs text-[#1677FF] font-semibold mb-3">
                  {interest.focus}
                </div>

                <p className="font-sans text-sm text-[#4B6279] leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

