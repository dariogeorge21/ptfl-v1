"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { PolyhedronScene } from "@/components/3d/polyhedron-scene";
import { soundFx } from "@/lib/sound";
import { Mail, MapPin, Copy, Check, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    soundFx.playClick(900);
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    soundFx.playPacketPulse();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#D5E4F2] bg-[#F8FBFF] relative overflow-hidden">
      {/* 3D Wireframe Polyhedron floating in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] pointer-events-none opacity-40 z-0">
        <PolyhedronScene />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#1677FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#1677FF]" />
            <span>11 // TRANSMISSION &amp; CONTACT INITIATION</span>
          </div>
          <span className="font-mono text-xs text-[#4B6279]">
            COMMUNICATION PROTOCOL: DIRECT
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#061A2B] uppercase tracking-tighter leading-[0.92] mb-6">
            LET'S BUILD
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#061A2B] via-[#1677FF] to-[#48C8FF]">
              SOMETHING REAL.
            </span>
          </h2>
          <p className="text-base sm:text-xl font-sans font-medium text-[#4B6279] max-w-2xl leading-relaxed">
            Open for internships, engineering research collaborations, embedded firmware prototypes, and systems software development.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels Left + Quick Dispatch Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Verified Channels (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* 1. Email Card */}
            <div className="p-6 bg-white border border-[#D5E4F2] shadow-xs hover:border-[#1677FF] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 tech-corner-tl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#EDF7FD] border border-[#D5E4F2] flex items-center justify-center text-[#1677FF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#4B6279] uppercase block">
                    DIRECT EMAIL (CV SOURCE)
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="font-mono font-bold text-sm text-[#061A2B] hover:text-[#1677FF] transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 bg-[#F8FBFF] border border-[#D5E4F2] hover:bg-[#1677FF] hover:text-white transition-all font-mono text-xs flex items-center gap-1.5 self-end sm:self-center"
                data-cursor="action"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="font-semibold text-emerald-600">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* 2. LinkedIn Card */}
            <div className="p-6 bg-white border border-[#D5E4F2] shadow-xs hover:border-[#1677FF] transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#EDF7FD] border border-[#D5E4F2] flex items-center justify-center text-[#1677FF] shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#4B6279] uppercase block">
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="font-mono font-bold text-sm text-[#061A2B]">
                    linkedin.com/in/kenaz-mathukutty
                  </span>
                </div>
              </div>
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#061A2B] text-white hover:bg-[#1677FF] transition-colors font-mono text-xs font-semibold"
                data-cursor="action"
                onClick={() => soundFx.playClick()}
              >
                CONNECT →
              </a>
            </div>

            {/* 3. GitHub Card */}
            <div className="p-6 bg-white border border-[#D5E4F2] shadow-xs hover:border-[#1677FF] transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#EDF7FD] border border-[#D5E4F2] flex items-center justify-center text-[#1677FF] shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#4B6279] uppercase block">
                    CODE REPOSITORY
                  </span>
                  <span className="font-mono font-bold text-sm text-[#061A2B]">
                    github.com/kenaz-mathukutty
                  </span>
                </div>
              </div>
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#061A2B] text-white hover:bg-[#1677FF] transition-colors font-mono text-xs font-semibold"
                data-cursor="action"
                onClick={() => soundFx.playClick()}
              >
                VISIT →
              </a>
            </div>

            {/* 4. Campus Location Card */}
            <div className="p-5 bg-white border border-[#D5E4F2] shadow-xs flex items-center gap-4 font-mono text-xs">
              <div className="w-10 h-10 bg-[#EDF7FD] border border-[#D5E4F2] flex items-center justify-center text-[#1677FF] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#4B6279] block uppercase">
                  BASE OF OPERATIONS
                </span>
                <span className="font-bold text-[#061A2B]">
                  SJCET Campus, Palai, Kerala, India (09°35'N 76°43'E)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Dispatch Form (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-[#D5E4F2] p-6 sm:p-8 shadow-sm tech-corner-tl tech-corner-br">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D5E4F2] font-mono text-xs">
              <div className="flex items-center gap-2 text-[#1677FF] font-bold">
                <Send className="w-3.5 h-3.5" />
                <span>INITIATE DISPATCH</span>
              </div>
              <span className="text-[#4B6279] text-[10px]">ENCRYPTION: STANDARD</span>
            </div>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                <h4 className="font-display font-bold text-xl text-[#061A2B]">
                  DISPATCH PACKET TRANSMITTED
                </h4>
                <p className="font-sans text-xs text-[#4B6279] max-w-sm">
                  Thank you for reaching out. Your transmission has been queued for review. You can also write directly to{" "}
                  <span className="font-mono text-[#1677FF]">{PORTFOLIO_DATA.personal.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="px-4 py-2 bg-[#061A2B] text-white text-xs font-mono font-semibold hover:bg-[#1677FF] transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] text-[#4B6279] uppercase mb-1">
                    YOUR NAME / IDENTIFIER
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2.5 bg-[#F8FBFF] border border-[#D5E4F2] focus:border-[#1677FF] focus:outline-hidden font-mono text-xs text-[#061A2B]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#4B6279] uppercase mb-1">
                    RETURN EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@laboratory.tech"
                    className="w-full px-3 py-2.5 bg-[#F8FBFF] border border-[#D5E4F2] focus:border-[#1677FF] focus:outline-hidden font-mono text-xs text-[#061A2B]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#4B6279] uppercase mb-1">
                    MESSAGE / PROJECT BRIEF
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discussing an embedded systems project, network benchmark, or research opportunity..."
                    className="w-full px-3 py-2.5 bg-[#F8FBFF] border border-[#D5E4F2] focus:border-[#1677FF] focus:outline-hidden font-sans text-xs text-[#061A2B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#061A2B] text-white hover:bg-[#1677FF] transition-all font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-sm"
                  data-cursor="action"
                >
                  <span>SEND TRANSMISSION</span>
                  <Send className="w-3.5 h-3.5 text-[#48C8FF]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Final Typographic Signature & Attestation */}
        <div className="mt-20 pt-8 border-t border-[#D5E4F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] text-[#4B6279] tracking-widest uppercase block mb-1">
              DIGITAL SIGNATURE &amp; CREED
            </span>
            <div className="flex items-baseline gap-4">
              <span className="font-display font-black text-2xl sm:text-3xl text-[#061A2B] tracking-tight">
                KENAZ MATHUKUTTY
              </span>
              <span className="font-serif italic text-lg text-[#1677FF] font-semibold">
                Keep Going
              </span>
            </div>
          </div>

          <div className="font-mono text-xs text-right text-[#4B6279]">
            <div>ST. JOSEPH'S COLLEGE OF ENGINEERING AND TECHNOLOGY</div>
            <div className="text-[#1677FF] font-bold">DEPARTMENT OF COMPUTER SCIENCE &amp; ENGINEERING</div>
          </div>
        </div>
      </div>
    </section>
  );
}

