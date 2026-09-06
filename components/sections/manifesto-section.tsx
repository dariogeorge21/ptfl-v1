"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { GraduationCap, MapPin, Compass, Award, FileText, CheckCircle2 } from "lucide-react";

export function ManifestoSection() {
  return (
    <section id="identity" className="py-24 border-b border-[#D5E4F2] bg-[#F8FBFF] relative overflow-hidden">
      {/* Background Subtle Coordinate Watermarks */}
      <div className="absolute top-12 right-12 font-mono text-8xl font-black text-[#1677FF]/5 select-none pointer-events-none">
        SJCET // 2026
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
          <span className="w-8 h-[1px] bg-[#1677FF]" />
          <span>02 // ARCHITECTURAL IDENTITY & MANIFESTO</span>
        </div>

        {/* Massive Editorial Kinetic Headline */}
        <div className="mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#061A2B] uppercase max-w-5xl">
            I BUILD AT THE INTERSECTION OF{" "}
            <span className="text-[#1677FF] underline decoration-[#48C8FF] decoration-4 underline-offset-8">
              LOW-LEVEL SILICON
            </span>
            , NETWORK TOPOLOGY, AND DETERMINISTIC{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#48C8FF]">
              SOFTWARE PIPELINES.
            </span>
          </h2>
        </div>

        {/* 2-Column Editorial Grid: Official Credentials Left + Career Objective Dispatch Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Formal Academic & Institutional Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white border border-[#D5E4F2] shadow-xs tech-corner-tl tech-corner-br relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D5E4F2] font-mono text-[10px] text-[#4B6279]">
                <span className="font-bold text-[#1677FF]">INSTITUTIONAL PROFILE</span>
                <span>KTU // ACCREDITED</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="block font-mono text-[10px] text-[#4B6279] uppercase">CANDIDATE</span>
                  <span className="font-display font-bold text-xl text-[#061A2B]">
                    {PORTFOLIO_DATA.personal.fullName}
                  </span>
                </div>

                <div>
                  <span className="block font-mono text-[10px] text-[#4B6279] uppercase">PROGRAM OF STUDY</span>
                  <div className="flex items-start gap-2 mt-1">
                    <GraduationCap className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                    <span className="text-sm font-sans font-medium text-[#08243B]">
                      B.Tech — Computer Science / Computer Engineering
                    </span>
                  </div>
                </div>

                <div>
                  <span className="block font-mono text-[10px] text-[#4B6279] uppercase">COLLEGE / CAMPUS</span>
                  <div className="flex items-start gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-sans font-semibold text-[#061A2B] block">
                        St. Joseph's College of Engineering and Technology, Palai (SJCET)
                      </span>
                      <span className="text-xs text-[#4B6279] block">
                        Autonomous Campus, Choondacherry, Palai, Kerala 686579
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D5E4F2] flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-[#4B6279] block">CURRENT STATUS</span>
                    <span className="font-bold text-[#1677FF]">5th Semester Pursuing</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#4B6279] block">LOCATION</span>
                    <span className="font-bold text-[#061A2B]">Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Language Proficiencies Badge Matrix */}
            <div className="p-5 bg-white border border-[#D5E4F2] shadow-xs">
              <span className="font-mono text-[10px] text-[#4B6279] uppercase tracking-wider block mb-3">
                LINGUISTIC CAPABILITIES (CV SOURCE)
              </span>
              <div className="space-y-3">
                {PORTFOLIO_DATA.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
                      <span className="font-bold text-[#061A2B]">{lang.name}</span>
                      <span className="text-[10px] text-[#4B6279]">({lang.level})</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#DDF4FF] text-[#1677FF] font-semibold text-[11px]">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Career Objective & Engineering Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* The Official Career Objective as Engineering Manifesto */}
            <div className="p-8 bg-white border border-[#D5E4F2] shadow-sm relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D5E4F2] font-mono text-xs">
                <div className="flex items-center gap-2 text-[#1677FF] font-bold">
                  <FileText className="w-4 h-4" />
                  <span>CAREER OBJECTIVE // VERIFIED CV DISPATCH</span>
                </div>
                <span className="text-[#4B6279] text-[10px]">SRC: RESUME_SJCET.PDF</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-display text-[#061A2B] leading-relaxed mb-6 font-medium italic">
                "{PORTFOLIO_DATA.personal.careerObjective}"
              </blockquote>

              <p className="text-sm font-sans text-[#4B6279] leading-relaxed mb-6">
                My objective is rooted in real-world systems: taking theoretical understanding of TCP/IP handshakes, register-level ARM Cortex-M microcontrollers, and asymptotic algorithm complexity, and building dependable, high-efficiency digital tools.
              </p>

              {/* Four Focus Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#D5E4F2] font-mono text-xs">
                <div className="p-3 bg-[#F8FBFF] border border-[#D5E4F2]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#061A2B] block">LOW-LEVEL REGISTER C</span>
                    <span className="text-[10px] text-[#4B6279]">Hardware timer interrupts & GPIO controls</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F8FBFF] border border-[#D5E4F2]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#061A2B] block">TCP/IP & OSI SUITE</span>
                    <span className="text-[10px] text-[#4B6279]">Socket programming & network topologies</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F8FBFF] border border-[#D5E4F2]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#061A2B] block">OOP & STRUCTURES</span>
                    <span className="text-[10px] text-[#4B6279]">Deterministic algorithmic performance</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F8FBFF] border border-[#D5E4F2]/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#061A2B] block">RAPID ADAPTABILITY</span>
                    <span className="text-[10px] text-[#4B6279]">Continuous synthesis of emerging toolchains</span>
                  </div>
                </div>
              </div>

              {/* Hand-drawn Signature Element */}
              <div className="mt-8 pt-4 border-t border-[#D5E4F2] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#4B6279] uppercase block">ATTESTATION</span>
                  <span className="font-serif italic text-xl text-[#061A2B] font-bold">
                    Kenaz Mathukutty
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[9px] text-[#4B6279] uppercase block">MOTTO</span>
                  <span className="font-mono font-bold text-xs text-[#1677FF]">
                    Better Skills, Bigger Dreams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

