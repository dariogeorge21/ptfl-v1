import React from "react";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { NavHeader } from "@/components/sections/nav-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { TechDnaSection } from "@/components/sections/tech-dna-section";
import { CircuitSection } from "@/components/sections/circuit-section";
import { AcademicsSection } from "@/components/sections/academics-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationTimeline } from "@/components/sections/education-timeline";
import { StrengthsSection } from "@/components/sections/strengths-section";
import { InterestsSection } from "@/components/sections/interests-section";
import { TerminalSandbox } from "@/components/sections/terminal-sandbox";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#061A2B] relative selection:bg-[#1677FF] selection:text-white">
      {/* Adaptive Custom Cursor */}
      <CustomCursor />

      {/* Floating HUD Navigation */}
      <NavHeader />

      {/* 01 // Asymmetric Editorial Hero with 3D Silicon ARM Cortex-M Die */}
      <HeroSection />

      {/* 02 // Identity & Academic Manifesto (SJCET Credentials & Career Objective) */}
      <ManifestoSection />

      {/* 03 // Engineering DNA & Interactive Skills Constellation */}
      <TechDnaSection />

      {/* 04 // Dark Technological Breakout: System Topology & Circuit Bus */}
      <CircuitSection />

      {/* 05 // Academic Curriculum & Knowledge Map (8 Disciplines) */}
      <AcademicsSection />

      {/* 06 // Featured Engineering Systems Showcase & Spec Modals */}
      <ProjectsSection />

      {/* 07 // Chronological Formation & Education Timeline */}
      <EducationTimeline />

      {/* 08 // Operational Methodology & Strengths */}
      <StrengthsSection />

      {/* 09 // Passion Lab: Speed, Silicon & Discovery */}
      <InterestsSection />

      {/* 10 // Interactive KenazOS Command Line Shell */}
      <TerminalSandbox />

      {/* 11 // Grand Finale & Transmission Initiation */}
      <ContactSection />

      {/* Minimal Footer */}
      <FooterSection />
    </main>
  );
}

