"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function FooterSection() {
  const scrollToTop = () => {
    soundFx.playClick(1000);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white text-[#061A2B] border-t border-[#D5E4F2] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#D5E4F2]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 bg-[#061A2B] inline-block" />
              <span className="font-display font-bold text-base tracking-tight text-[#061A2B]">
                {PORTFOLIO_DATA.personal.fullName}
              </span>
            </div>
            <p className="text-[#4B6279] text-[11px] font-sans">
              Computer Science &amp; Engineering · SJCET Palai, Kerala, India
            </p>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-1.5 text-[#4B6279] hover:text-[#1677FF] transition-colors"
              data-cursor="action"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>EMAIL</span>
            </a>
            <span className="text-[#D5E4F2]">/</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#4B6279] hover:text-[#1677FF] transition-colors"
              data-cursor="action"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>
            <span className="text-[#D5E4F2]">/</span>
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#4B6279] hover:text-[#1677FF] transition-colors"
              data-cursor="action"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
          </div>

          {/* Back to Top Accelerator Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 bg-[#F8FBFF] border border-[#D5E4F2] hover:border-[#1677FF] hover:bg-[#EDF7FD] transition-all text-[#061A2B] font-bold tracking-wider"
            data-cursor="action"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#1677FF]" />
          </button>
        </div>

        {/* Copyright and Diagnostics */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] text-[#4B6279]">
          <div>
            © 2026 {PORTFOLIO_DATA.personal.fullName}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ENGINEERING SYSTEMS NOMINAL
            </span>
            <span>09°35'N 76°43'E</span>
            <span className="text-[#1677FF] font-semibold">PALAI // KERALA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

