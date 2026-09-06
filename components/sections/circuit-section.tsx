"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/sound";
import { Activity, Radio, Cpu, Network, Binary, Sparkles } from "lucide-react";

export function CircuitSection() {
  const [pulseCount, setPulseCount] = useState(1);
  const [activeTrace, setActiveTrace] = useState<number | null>(null);
  const [packetsSent, setPacketsSent] = useState(1284);

  const triggerPulse = (index: number) => {
    soundFx.playPacketPulse();
    setActiveTrace(index);
    setPulseCount((prev) => prev + 1);
    setPacketsSent((prev) => prev + 16);
    setTimeout(() => setActiveTrace(null), 1800);
  };

  const pipelines = [
    {
      id: 0,
      domain: "COMPUTATIONAL ALGORITHMS",
      icon: Binary,
      steps: [
        { label: "DATA STRUCTURES", sub: "Trees, Graphs & Ring Buffers" },
        { label: "ALGORITHMS", sub: "Sorting, Asymptotic Bounds" },
        { label: "SOFTWARE PIPELINE", sub: "Deterministic High-Perf Code" },
      ],
      desc: "Optimizing memory layout and algorithmic complexity to eliminate computational bottlenecks.",
    },
    {
      id: 1,
      domain: "NETWORK PROTOCOLS",
      icon: Network,
      steps: [
        { label: "NETWORKING", sub: "Layer 2 - Layer 7 Mechanics" },
        { label: "TCP/IP & OSI", sub: "3-Way Handshake & Subnetting" },
        { label: "DISTRIBUTED SYSTEMS", sub: "Packet Routing & Socket APIs" },
      ],
      desc: "Architecting transparent data transmission pipelines with RFC conformance and flow control.",
    },
    {
      id: 2,
      domain: "EMBEDDED SILICON",
      icon: Cpu,
      steps: [
        { label: "ARM CORTEX-M", sub: "32-Bit Micro-Architecture" },
        { label: "EMBEDDED FIRMWARE", sub: "NVIC Interrupts, Timers, DMA" },
        { label: "PHYSICAL COMPUTATION", sub: "Real-time Telemetry & I/O" },
      ],
      desc: "Manipulating hardware registers directly to achieve microsecond-level determinism.",
    },
    {
      id: 3,
      domain: "APPLIED INTELLIGENCE",
      icon: Sparkles,
      steps: [
        { label: "MACHINE LEARNING", sub: "Multivariate Data Prep" },
        { label: "CLASSIFICATION", sub: "KNN, Decision Trees, Weights" },
        { label: "INTELLIGENT DECISIONS", sub: "Pattern Inference on Sensor Streams" },
      ],
      desc: "Extracting predictive signals from noisy physical telemetry and structured datasets.",
    },
  ];

  return (
    <section id="circuits" className="py-24 bg-[#020A12] text-white relative overflow-hidden border-b border-[#08243B]">
      {/* Dark Circuit Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint-dark-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#48C8FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#48C8FF]" />
            <span>04 // SYSTEM TOPOLOGY &amp; CIRCUIT DIAGRAM</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1">
              <Activity className="w-3.5 h-3.5 text-[#48C8FF] animate-pulse" />
              <span className="text-[#DDF4FF]">BUS ACTIVITY:</span>
              <span className="text-[#48C8FF] font-bold">{packetsSent} PKTS</span>
            </div>
            <button
              onClick={() => triggerPulse(Math.floor(Math.random() * 4))}
              className="px-3 py-1 bg-[#1677FF] text-white hover:bg-[#48C8FF] hover:text-[#061A2B] transition-colors font-bold shadow-md"
              data-cursor="action"
            >
              TRANSMIT PACKET
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            CONNECTED ENGINEERING TOPOLOGY
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#DDF4FF]/70 leading-relaxed">
            How fundamental computer science disciplines synthesize into applied engineering systems. Click any trace to pulse a simulation packet across the computational pipeline.
          </p>
        </div>

        {/* The 4 Circuit Pipelines */}
        <div className="space-y-6">
          {pipelines.map((pipe) => {
            const Icon = pipe.icon;
            const isPulsing = activeTrace === pipe.id;

            return (
              <div
                key={pipe.id}
                onClick={() => triggerPulse(pipe.id)}
                className={`p-6 bg-[#061A2B]/80 border transition-all cursor-pointer relative group ${
                  isPulsing
                    ? "border-[#48C8FF] shadow-[0_0_30px_rgba(72,200,255,0.25)] bg-[#08243B]"
                    : "border-white/10 hover:border-[#1677FF] hover:bg-[#061A2B]"
                }`}
                data-cursor="action"
              >
                {/* Domain Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2.5 text-[#48C8FF]">
                    <Icon className="w-4 h-4" />
                    <span className="font-bold tracking-wider">{pipe.domain}</span>
                  </div>
                  <span className="text-white/40 text-[10px]">TRACE // 0{pipe.id + 1}</span>
                </div>

                {/* Horizontal Circuit Trace Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative my-4">
                  {pipe.steps.map((step, idx) => (
                    <div
                      key={step.label}
                      className="p-4 bg-white/5 border border-white/10 relative flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[9px] text-[#48C8FF] font-bold">
                            STAGE 0{idx + 1}
                          </span>
                          <Radio
                            className={`w-3 h-3 ${
                              isPulsing ? "text-[#48C8FF] animate-ping" : "text-white/20"
                            }`}
                          />
                        </div>
                        <h4 className="font-display font-bold text-base text-white mb-1">
                          {step.label}
                        </h4>
                        <p className="font-mono text-[11px] text-[#DDF4FF]/60">{step.sub}</p>
                      </div>

                      {/* Arrow indicator between steps for desktop */}
                      {idx < 2 && (
                        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#48C8FF] font-mono text-xs font-black">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Animated Circuit Line Bar */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4 relative">
                  <div
                    className={`h-full bg-gradient-to-r from-[#1677FF] via-[#48C8FF] to-[#1677FF] transition-all duration-1000 ${
                      isPulsing ? "w-full opacity-100" : "w-1/4 opacity-40 group-hover:w-1/2"
                    }`}
                  />
                </div>

                {/* Subtext description */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-sans text-white/60">
                  <span>{pipe.desc}</span>
                  <span className="font-mono text-[10px] text-[#48C8FF] group-hover:underline">
                    TRIGGER PULSE →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

