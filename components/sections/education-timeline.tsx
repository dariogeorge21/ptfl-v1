"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { GraduationCap, Award, Calendar, BookOpen, MapPin } from "lucide-react";

export function EducationTimeline() {
  return (
    <section id="education" className="py-24 border-b border-[#D5E4F2] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#1677FF]" />
            <span>07 // ACADEMIC MILESTONES &amp; EDUCATION</span>
          </div>
          <span className="font-mono text-xs text-[#4B6279]">
            OFFICIAL RESUME TIMELINE
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#061A2B] uppercase tracking-tight mb-4">
            CHRONOLOGICAL FORMATION
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#4B6279] leading-relaxed">
            The foundational educational progression from secondary schooling in Kerala through undergraduate engineering at St. Joseph's College of Engineering and Technology, Palai.
          </p>
        </div>

        {/* Horizontal Milestone Progression Track */}
        <div className="relative mb-16 hidden md:block">
          {/* Axis Line */}
          <div className="h-[2px] w-full bg-[#D5E4F2] absolute top-1/2 -translate-y-1/2 z-0" />

          {/* Active Highlight Line from 2019 to 2026 */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#1677FF]/40 via-[#1677FF] to-[#48C8FF] absolute top-1/2 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-3 gap-6 relative z-10">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={edu.period} className="flex flex-col items-center text-center">
                {/* Year Marker Badge */}
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-transform hover:scale-110 shadow-sm ${
                    edu.highlight
                      ? "bg-[#1677FF] border-white text-white ring-4 ring-[#DDF4FF]"
                      : "bg-white border-[#1677FF] text-[#061A2B]"
                  }`}
                >
                  0{idx + 1}
                </div>
                <span className="mt-3 font-mono text-xs font-bold text-[#061A2B] tracking-wider">
                  {edu.period}
                </span>
                <span className="text-[11px] font-mono text-[#1677FF]">
                  {edu.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div
              key={edu.period}
              className={`p-6 sm:p-8 border flex flex-col justify-between transition-all tech-corner-tl ${
                edu.highlight
                  ? "bg-[#EDF7FD] border-[#1677FF] shadow-lg ring-1 ring-[#1677FF]"
                  : "bg-[#F8FBFF] border-[#D5E4F2] hover:border-[#1677FF]/60 hover:bg-white"
              }`}
            >
              <div>
                {/* Period Badge */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D5E4F2] font-mono text-xs">
                  <span className="font-bold text-[#1677FF]">{edu.period}</span>
                  <span className="px-2 py-0.5 bg-white border border-[#D5E4F2] text-[#4B6279] text-[10px]">
                    {edu.badge}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="font-display font-bold text-xl text-[#061A2B] mb-2 leading-tight">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-start gap-2 text-xs font-medium text-[#08243B] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>{edu.institution}</span>
                </div>

                {/* Board / University */}
                <div className="font-mono text-[10px] text-[#4B6279] mb-4">
                  AFFILIATION: {edu.board}
                </div>

                {/* Status Indicator */}
                <div className="p-2.5 bg-white border border-[#D5E4F2] font-mono text-xs text-[#061A2B] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold">{edu.status}</span>
                </div>

                {/* Key Focus Disciplines */}
                <div className="space-y-1.5 pt-2">
                  <span className="font-mono text-[9px] text-[#4B6279] uppercase block mb-1">
                    CURRICULAR FOCUS:
                  </span>
                  {edu.focus.map((f) => (
                    <div
                      key={f}
                      className="font-mono text-[11px] text-[#4B6279] flex items-center gap-1.5"
                    >
                      <span className="text-[#1677FF]">›</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Location */}
              <div className="pt-6 mt-6 border-t border-[#D5E4F2] font-mono text-[10px] text-[#4B6279] flex items-center justify-between">
                <span>CAMPUS REGION</span>
                <span className="font-bold text-[#061A2B]">{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

