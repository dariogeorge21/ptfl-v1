"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function StrengthsSection() {
  return (
    <section className="py-24 border-b border-[#D5E4F2] bg-[#F8FBFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#1677FF]" />
            <span>08 // OPERATIONAL METHODOLOGY &amp; STRENGTHS</span>
          </div>
          <span className="font-mono text-xs text-[#4B6279]">
            CV VALUE PILLARS
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#061A2B] uppercase tracking-tight mb-4">
            ENGINEERING PRINCIPLES
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#4B6279] leading-relaxed">
            The core cognitive and behavioral strengths that drive my approach to software engineering, embedded systems debugging, and team collaboration.
          </p>
        </div>

        {/* 4 Monumental Typographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.personalStrengths.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-10 bg-white border border-[#D5E4F2] hover:border-[#1677FF] transition-all relative group tech-corner-tl"
            >
              {/* Giant Index Number */}
              <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[#D5E4F2]">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#1677FF] tracking-tighter">
                  {item.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EDF7FD] text-[#08243B] font-semibold">
                  {item.badge}
                </span>
              </div>

              {/* Huge Statement */}
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#061A2B] group-hover:text-[#1677FF] transition-colors mb-2 uppercase">
                {item.title}
              </h3>

              <div className="font-mono text-xs text-[#1677FF] font-medium tracking-wide mb-4">
                // {item.subtitle}
              </div>

              <p className="font-sans text-sm text-[#4B6279] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

