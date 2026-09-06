"use client";

import React, { useEffect, useState } from "react";
import { soundFx } from "@/lib/sound";
import { Volume2, VolumeX, Terminal, Cpu } from "lucide-react";

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Live Indian Standard Time (IST) clock
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTimeStr(`${now.toLocaleTimeString("en-GB", options)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Scroll listener
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSound = () => {
    soundFx.enabled = !soundOn;
    setSoundOn(!soundOn);
    if (!soundOn) {
      soundFx.playPacketPulse();
    }
  };

  const navLinks = [
    { label: "01. IDENTITY", href: "#identity" },
    { label: "02. STACK", href: "#stack" },
    { label: "03. CIRCUITS", href: "#circuits" },
    { label: "04. WORK", href: "#projects" },
    { label: "05. ACADEMICS", href: "#academics" },
    { label: "06. TERMINAL", href: "#terminal" },
    { label: "07. CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8FBFF]/90 backdrop-blur-md border-b border-[#D5E4F2] py-2.5 shadow-xs"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-inherit no-underline"
            data-cursor="action"
            onClick={() => soundFx.playClick(600)}
          >
            <div className="w-7 h-7 bg-[#061A2B] text-white flex items-center justify-center font-mono font-bold text-xs group-hover:bg-[#1677FF] transition-colors shadow-xs">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-sm text-[#061A2B] group-hover:text-[#1677FF] transition-colors flex items-center gap-1.5">
                KENAZ MATHUKUTTY
                <span className="text-[10px] font-mono px-1 py-0.2 bg-[#DDF4FF] text-[#1677FF] font-medium">
                  v2.6
                </span>
              </span>
              <span className="font-mono text-[9px] text-[#4B6279] tracking-wider">
                COMPUTER ENGINEERING // SJCET
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 font-mono text-[11px] tracking-wider text-[#4B6279]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1677FF] transition-colors relative py-1"
                data-cursor="action"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Telemetry HUD Pill & Audio Toggle */}
          <div className="flex items-center gap-3">
            {/* Live Kerala / IST Clock */}
            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-[#061A2B] bg-white/80 border border-[#D5E4F2] px-2.5 py-1 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#4B6279]">{timeStr || "09:35:00 IST"}</span>
              <span className="text-[#1677FF] font-semibold">14ms</span>
            </div>

            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              className={`p-2 border transition-all flex items-center gap-1.5 font-mono text-[10px] ${
                soundOn
                  ? "bg-[#1677FF] text-white border-[#1677FF]"
                  : "bg-white text-[#4B6279] border-[#D5E4F2] hover:text-[#061A2B]"
              }`}
              title={soundOn ? "Mute Synthetic Audio" : "Enable Synthetic Audio FX"}
              data-cursor="action"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline font-bold">{soundOn ? "SFX: ON" : "SFX"}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="xl:hidden p-2 bg-white border border-[#D5E4F2] text-[#061A2B] hover:border-[#1677FF] transition-colors"
              aria-label="Toggle Navigation Menu"
              data-cursor="action"
            >
              <div className="w-4 h-3.5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-transform ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Scroll Depth Progress Micro-line */}
        <div className="w-full h-[2px] bg-transparent absolute bottom-0 left-0">
          <div
            className="h-full bg-gradient-to-r from-[#1677FF] via-[#48C8FF] to-[#1677FF] transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#F8FBFF] border-b border-[#D5E4F2] px-6 py-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    soundFx.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 border-b border-[#D5E4F2]/50 text-[#061A2B] hover:text-[#1677FF] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#1677FF] text-[10px]">→</span>
                </a>
              ))}
              <div className="pt-3 flex items-center justify-between text-[10px] text-[#4B6279]">
                <span>PALAI, KERALA (09°35'N 76°43'E)</span>
                <span className="text-[#1677FF]">{timeStr}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

