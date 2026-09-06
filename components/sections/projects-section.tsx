"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { ExternalLink, X, Terminal, Cpu, Network, Sparkles, Binary, Check, ArrowRight, ShieldCheck } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = ["ALL", "EMBEDDED", "NETWORKING", "MACHINE LEARNING", "ALGORITHMS"];

  const filteredProjects =
    activeFilter === "ALL"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  const openProjectModal = (proj: Project) => {
    soundFx.playClick(880);
    setSelectedProject(proj);
  };

  const closeProjectModal = () => {
    soundFx.playClick(520);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 border-b border-[#D5E4F2] bg-[#F8FBFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#1677FF]" />
            <span>06 // ENGINEERING SHOWCASE &amp; SYSTEMS WORK</span>
          </div>
          <span className="font-mono text-xs text-[#4B6279]">
            DATA-DRIVEN PROJECT ARCHITECTURE
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#061A2B] uppercase tracking-tight mb-4">
            FEATURED ENGINEERING SYSTEMS
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#4B6279] leading-relaxed">
            Modular engineering projects and systems research spanning bare-metal ARM Cortex-M telemetry, packet routing simulation, machine learning classification, and algorithmic performance benchmarks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-[#D5E4F2] font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick(640);
                setActiveFilter(cat);
              }}
              className={`px-4 py-2 border transition-all ${
                activeFilter === cat
                  ? "bg-[#061A2B] text-white border-[#061A2B] font-bold"
                  : "bg-white text-[#4B6279] border-[#D5E4F2] hover:border-[#1677FF] hover:text-[#061A2B]"
              }`}
              data-cursor="action"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Oversized Editorial Project Panels */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 lg:p-12 bg-white border border-[#D5E4F2] shadow-sm hover:shadow-xl transition-all relative group tech-corner-tl tech-corner-br"
              data-cursor="project"
              data-cursor-text="VIEW"
            >
              {/* Project Index Top Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-[#D5E4F2] font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[#1677FF] font-black text-sm">{project.code}</span>
                  <span className="text-[#D5E4F2]">/</span>
                  <span className="font-bold text-[#061A2B]">{project.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-[#EDF7FD] border border-[#D5E4F2] text-[#4B6279] text-[10px]">
                    YEAR: {project.year}
                  </span>
                  <span className="px-2 py-0.5 bg-[#DDF4FF] text-[#1677FF] font-semibold text-[10px]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Asymmetric 2-Column Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Huge Title & Narrative (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <h3
                    onClick={() => openProjectModal(project)}
                    className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[#061A2B] group-hover:text-[#1677FF] transition-colors leading-[1.05] cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-base font-sans font-medium text-[#08243B] leading-relaxed">
                    {project.subtitle}
                  </p>

                  <p className="text-sm font-sans text-[#4B6279] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 bg-[#F8FBFF] border border-[#D5E4F2] text-[#061A2B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="px-6 py-3 bg-[#061A2B] text-white hover:bg-[#1677FF] transition-colors font-mono text-xs font-bold tracking-wider flex items-center gap-2 shadow-sm"
                      data-cursor="action"
                    >
                      <span>VIEW SYSTEM SPECIFICATION</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Architectural Blueprint Metrics Display (5 cols) */}
                <div className="lg:col-span-5 bg-[#061A2B] text-white p-6 border border-[#08243B] shadow-inner relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/10 font-mono text-[10px] text-[#48C8FF]">
                    <span>SYSTEM TELEMETRY &amp; METRICS</span>
                    <span>DIAGNOSTIC VERIFIED</span>
                  </div>

                  {/* Metrics Grid */}
                  <div className="space-y-4 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-3 bg-white/5 border border-white/10">
                        <span className="block font-mono text-[9px] text-white/50 uppercase tracking-wider mb-1">
                          {m.label}
                        </span>
                        <span className="font-mono font-bold text-lg sm:text-xl text-[#48C8FF]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* System Architecture Note */}
                  <div className="p-3 bg-white/5 border-l-2 border-[#1677FF] font-mono text-[10px] text-[#DDF4FF]/80">
                    <span className="text-[#48C8FF] font-bold block">ARCHITECTURE NOTE:</span>
                    Includes direct register definitions, memory-mapped peripheral abstraction, and RFC-compliant structures.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Editorial Project Inspection Detail */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in-50">
            <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#D5E4F2] shadow-2xl p-6 sm:p-10 relative">
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className="absolute top-6 right-6 p-2 bg-[#F8FBFF] border border-[#D5E4F2] text-[#061A2B] hover:bg-[#061A2B] hover:text-white transition-colors"
                aria-label="Close Project Specification"
                data-cursor="action"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="font-mono text-xs text-[#1677FF] mb-2 flex items-center gap-2">
                <span>{selectedProject.code}</span>
                <span>//</span>
                <span>{selectedProject.category} SPECIFICATION</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#061A2B] mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-sm sm:text-base font-sans font-medium text-[#4B6279] mb-8 pb-6 border-b border-[#D5E4F2]">
                {selectedProject.subtitle}
              </p>

              {/* 6-Part Architectural Breakdown */}
              <div className="space-y-8 font-sans">
                {/* 01 Overview */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#1677FF] uppercase tracking-wider mb-2">
                    01 / SYSTEM OVERVIEW
                  </h4>
                  <p className="text-sm text-[#061A2B] leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                {/* 02 Problem */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#1677FF] uppercase tracking-wider mb-2">
                    02 / TECHNICAL CHALLENGE &amp; BOTTLENECK
                  </h4>
                  <p className="text-sm text-[#061A2B] leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* 03 Approach */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#1677FF] uppercase tracking-wider mb-2">
                    03 / ARCHITECTURAL APPROACH
                  </h4>
                  <p className="text-sm text-[#061A2B] leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>

                {/* 04 Implementation */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#1677FF] uppercase tracking-wider mb-3">
                    04 / IMPLEMENTATION SPECIFICATIONS
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.implementation.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#F8FBFF] border border-[#D5E4F2] text-xs text-[#061A2B] flex items-start gap-2.5 font-mono"
                      >
                        <span className="text-[#1677FF] font-bold">0{i + 1}.</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 05 Tech Stack & Metrics */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#1677FF] uppercase tracking-wider mb-3">
                    05 / TECHNOLOGIES &amp; METRICS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {selectedProject.metrics.map((m) => (
                      <div key={m.label} className="p-3 bg-[#EDF7FD] border border-[#D5E4F2]">
                        <span className="block font-mono text-[9px] text-[#4B6279] uppercase">
                          {m.label}
                        </span>
                        <span className="font-mono font-bold text-base text-[#1677FF]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 bg-white border border-[#D5E4F2] text-[#061A2B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 06 SJCET Coursework Tie-in */}
                <div className="p-4 bg-[#061A2B] text-white border border-[#08243B] font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#48C8FF] mb-1 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>06 / VERIFIABLE ACADEMIC CONTEXT</span>
                  </div>
                  <p className="text-white/80 text-[11px] font-sans">
                    Constructed under the Computer Science &amp; Engineering curriculum at St. Joseph's College of Engineering and Technology, Palai. Configurable for expansion with real-world sensor boards and live network topologies.
                  </p>
                </div>
              </div>

              {/* Close Action */}
              <div className="mt-8 pt-6 border-t border-[#D5E4F2] flex justify-end">
                <button
                  onClick={closeProjectModal}
                  className="px-6 py-2.5 bg-[#061A2B] text-white hover:bg-[#1677FF] transition-colors font-mono text-xs font-semibold"
                  data-cursor="action"
                >
                  CLOSE SPECIFICATION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

