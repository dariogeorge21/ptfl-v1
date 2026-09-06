"use client";

import React, { useState } from "react";
import { CortexScene } from "@/components/3d/cortex-scene";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { ArrowDown, Copy, Check, Terminal, FileDown, ExternalLink } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    soundFx.playClick(900);
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-blueprint-grid">
      {/* Editorial Decorative Grid Corner Lines */}
      <div className="absolute top-0 left-8 w-[1px] h-full bg-[#1677FF]/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-8 w-[1px] h-full bg-[#1677FF]/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-28 left-0 w-full h-[1px] bg-[#1677FF]/10 pointer-events-none" />

      {/* Main Asymmetric Editorial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center">
        {/* Top Editorial Ribbon / Micro-metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 pt-4 border-b border-[#D5E4F2] font-mono text-[11px] tracking-wider text-[#4B6279]">
          <div className="flex items-center gap-3">
            <span className="text-[#1677FF] font-bold">01 // DOSSIER</span>
            <span className="text-[#D5E4F2]">/</span>
            <span>APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">ST. JOSEPH'S COLLEGE OF ENGINEERING & TECHNOLOGY (SJCET)</span>
            <span className="px-2 py-0.5 bg-[#DDF4FF] text-[#1677FF] font-semibold">
              PALAI, KERALA
            </span>
          </div>
        </div>

        {/* Asymmetric Split Layout: Oversized Typography Left/Center + 3D Cortex Die Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center py-8 lg:py-12">
          {/* Left / Center Typography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tech Index Tag */}
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
              <span className="inline-block w-2.5 h-2.5 bg-[#1677FF]" />
              <span>UNDERGRADUATE RESEARCH & SYSTEMS ARCHITECTURE</span>
            </div>

            {/* Massive Hero Editorial Typography */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl xl:text-[6.2rem] leading-[0.88] tracking-tighter text-[#061A2B] uppercase mb-6">
              KENAZ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#061A2B] via-[#08243B] to-[#1677FF]">
                MATHUKUTTY
              </span>
            </h1>

            {/* Architectural Subheadline */}
            <div className="max-w-xl mb-8 space-y-3">
              <p className="text-lg sm:text-xl font-display font-medium text-[#08243B] leading-snug">
                Computer Science & Computer Engineering Student exploring embedded hardware, ARM Cortex-M micro-architectures, and deterministic TCP/IP networking.
              </p>
              <p className="text-sm font-sans text-[#4B6279] leading-relaxed">
                Focused on bridging low-level register manipulation with robust, distributed software pipelines. Currently pursuing 5th Semester B.Tech at SJCET Palai, Kerala.
              </p>
            </div>

            {/* Action Matrix */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href="#projects"
                className="px-5 py-3 bg-[#061A2B] text-white hover:bg-[#1677FF] transition-all flex items-center gap-2.5 shadow-md group"
                data-cursor="action"
                onClick={() => soundFx.playClick()}
              >
                <Terminal className="w-4 h-4 text-[#48C8FF] group-hover:rotate-12 transition-transform" />
                <span className="font-semibold tracking-wider">EXPLORE WORK</span>
                <span className="text-[#48C8FF]">→</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 bg-white border border-[#D5E4F2] text-[#061A2B] hover:border-[#1677FF] hover:bg-[#EDF7FD] transition-all font-medium tracking-wider flex items-center gap-2"
                data-cursor="action"
                onClick={() => soundFx.playClick()}
              >
                <span>GET IN TOUCH</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 bg-[#EDF7FD] border border-[#D5E4F2] text-[#08243B] hover:bg-[#DDF4FF] transition-all flex items-center gap-2"
                title="Copy Email to Clipboard"
                data-cursor="action"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span className="hidden sm:inline font-mono text-[11px]">
                      {PORTFOLIO_DATA.personal.email}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Micro CV Quote Pill */}
            <div className="mt-8 pt-4 border-t border-[#D5E4F2]/70 flex items-center gap-4 font-mono text-[11px] text-[#4B6279]">
              <span className="text-[#1677FF] font-semibold italic">"Better Skills, Bigger Dreams"</span>
              <span className="text-[#D5E4F2]">•</span>
              <span className="uppercase tracking-widest text-[#061A2B]">Keep Going</span>
            </div>
          </div>

          {/* Right Column: 3D WebGL ARM Cortex-M Silicon Die (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Background Radial Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#48C8FF]/15 blur-3xl pointer-events-none" />
            <div className="absolute w-56 h-56 rounded-full bg-[#1677FF]/10 blur-2xl pointer-events-none translate-x-10 -translate-y-10" />

            {/* 3D Scene Container with Editorial Technical Framing */}
            <div className="w-full relative bg-white/40 backdrop-blur-xs border border-[#D5E4F2] shadow-xl p-2 tech-corner-tl tech-corner-br">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#D5E4F2] bg-white/70 font-mono text-[10px] text-[#4B6279]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
                  <span className="font-bold text-[#061A2B]">SYS_DIAGNOSTIC // CORTEX_M</span>
                </div>
                <span>REV. 2026.1</span>
              </div>

              {/* 3D WebGL Canvas */}
              <CortexScene />

              {/* Bottom Technical Grid Info */}
              <div className="grid grid-cols-3 gap-2 p-2.5 bg-[#F8FBFF] border-t border-[#D5E4F2] font-mono text-[9px] text-[#4B6279]">
                <div>
                  <span className="block text-[8px] text-[#1677FF] font-bold">INSTRUCTION SET</span>
                  <span className="font-semibold text-[#061A2B]">ARMv7E-M RISC</span>
                </div>
                <div>
                  <span className="block text-[8px] text-[#1677FF] font-bold">PERIPHERAL BUS</span>
                  <span className="font-semibold text-[#061A2B]">AHB / APB / GPIO</span>
                </div>
                <div>
                  <span className="block text-[8px] text-[#1677FF] font-bold">NETWORK LAYER</span>
                  <span className="font-semibold text-[#061A2B]">TCP / IP STACK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator & Status Ribbon */}
        <div className="pt-6 border-t border-[#D5E4F2] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#4B6279]">
          <a
            href="#identity"
            className="flex items-center gap-2.5 text-[#061A2B] hover:text-[#1677FF] transition-colors group py-1"
            data-cursor="action"
            onClick={() => soundFx.playClick()}
          >
            <div className="w-6 h-6 border border-[#1677FF] flex items-center justify-center group-hover:bg-[#1677FF] group-hover:text-white transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
            <span className="font-bold tracking-wider text-[11px]">SCROLL TO EXPLORE DOSSIER</span>
          </a>

          <div className="flex items-center gap-6 text-[10px]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>STATUS: 5TH SEMESTER ACTIVE</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[#1677FF]">LOCATION:</span>
              <span>KERALA, INDIA [09°35'N 76°43'E]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

