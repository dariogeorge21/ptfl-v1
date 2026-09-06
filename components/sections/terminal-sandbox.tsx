"use client";

import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { soundFx } from "@/lib/sound";
import { Terminal, Send, Trash2, CornerDownLeft } from "lucide-react";

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export function TerminalSandbox() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "kenazos --init",
      output: (
        <div className="space-y-1 text-[#48C8FF]">
          <div>KENAZ_OS [Version 2.6.0-SJCET-ARM]</div>
          <div>(c) 2026 Kenaz Mathukutty. All rights reserved.</div>
          <div className="text-white/70">
            Type <span className="text-[#1677FF] font-bold">help</span> to view available system routines.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick(920);
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-white/90 font-mono text-xs">
            <div className="text-[#48C8FF] font-bold mb-1">AVAILABLE COMMANDS:</div>
            <div>• <span className="text-[#1677FF] font-bold">bio</span> : Candidate summary &amp; SJCET affiliation</div>
            <div>• <span className="text-[#1677FF] font-bold">skills</span> : Verified programming languages &amp; tools</div>
            <div>• <span className="text-[#1677FF] font-bold">academics</span> : 8 curriculum modules from KTU syllabus</div>
            <div>• <span className="text-[#1677FF] font-bold">projects</span> : Active engineering systems &amp; telemetry</div>
            <div>• <span className="text-[#1677FF] font-bold">ping sjcet</span> : Diagnostic ICMP round-trip to Palai campus</div>
            <div>• <span className="text-[#1677FF] font-bold">contact</span> : Direct email, LinkedIn &amp; GitHub links</div>
            <div>• <span className="text-[#1677FF] font-bold">clear</span> : Flush terminal output buffer</div>
          </div>
        );
        break;

      case "bio":
      case "whoami":
        output = (
          <div className="space-y-1 text-[#DDF4FF]">
            <div className="text-white font-bold">{PORTFOLIO_DATA.personal.fullName}</div>
            <div>{PORTFOLIO_DATA.personal.tagline} (5th Semester)</div>
            <div>Institution: {PORTFOLIO_DATA.personal.institution}</div>
            <div>Location: {PORTFOLIO_DATA.personal.location} ({PORTFOLIO_DATA.personal.coordinates})</div>
            <div className="text-[#48C8FF] italic">"{PORTFOLIO_DATA.personal.motto} — {PORTFOLIO_DATA.personal.signoff}"</div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-[#DDF4FF]">
            <div><span className="text-[#48C8FF] font-bold">LANGUAGES:</span> Python, Java, C, JavaScript, HTML, CSS</div>
            <div><span className="text-[#48C8FF] font-bold">TOOLS:</span> VS Code, Git, GitHub, Jupyter Notebook, Eclipse</div>
            <div><span className="text-[#48C8FF] font-bold">CORE CONCEPTS:</span> Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems</div>
            <div><span className="text-[#48C8FF] font-bold">TECHNOLOGIES:</span> Networking (TCP/IP), Embedded Systems, ARM Cortex-M, Machine Learning</div>
          </div>
        );
        break;

      case "academics":
        output = (
          <div className="space-y-1 text-white/90">
            {PORTFOLIO_DATA.academicAreas.map((a) => (
              <div key={a.id}>
                <span className="text-[#1677FF] font-bold">{a.code}</span>: {a.title} ({a.domain})
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-white/90">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id}>
                <span className="text-[#48C8FF] font-bold">{p.code}</span>: {p.title} [{p.status}]
              </div>
            ))}
          </div>
        );
        break;

      case "ping sjcet":
      case "ping":
        output = (
          <div className="space-y-1 text-emerald-400 font-mono text-xs">
            <div>PING sjcet.palai.ac.in (09°35'N 76°43'E): 56 data bytes</div>
            <div>64 bytes from sjcet.node01: icmp_seq=1 ttl=64 time=13.8 ms</div>
            <div>64 bytes from sjcet.node01: icmp_seq=2 ttl=64 time=14.1 ms</div>
            <div>64 bytes from sjcet.node01: icmp_seq=3 ttl=64 time=13.6 ms</div>
            <div className="text-[#48C8FF] font-bold">--- sjcet.palai.ac.in ping statistics ---</div>
            <div>3 packets transmitted, 3 received, 0% packet loss, rtt min/avg/max = 13.6/13.8/14.1 ms</div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-[#DDF4FF]">
            <div>EMAIL: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-[#48C8FF] underline">{PORTFOLIO_DATA.personal.email}</a></div>
            <div>LINKEDIN: <a href={PORTFOLIO_DATA.personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#48C8FF] underline">{PORTFOLIO_DATA.personal.linkedinHandle}</a></div>
            <div>GITHUB: <a href={PORTFOLIO_DATA.personal.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#48C8FF] underline">{PORTFOLIO_DATA.personal.githubHandle}</a></div>
            <div>LOCATION: {PORTFOLIO_DATA.personal.location}</div>
          </div>
        );
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-rose-400 font-mono text-xs">
            command not recognized: "{cmd}". Type <span className="text-white font-bold underline">help</span> for routine list.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  const quickCommands = ["help", "bio", "skills", "ping sjcet", "projects", "contact"];

  return (
    <section id="terminal" className="py-24 border-b border-[#08243B] bg-[#020A12] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-dark-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#48C8FF] tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#48C8FF]" />
            <span>10 // INTERACTIVE CLI SANDBOX</span>
          </div>
          <span className="font-mono text-xs text-white/50">
            TTY: /DEV/KENAZ_SJCET_V2
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            KENAZ_OS COMMAND INTERFACE
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#DDF4FF]/70 leading-relaxed">
            For engineers, recruiters, and terminal enthusiasts: run simulated diagnostic commands, ping the campus server, inspect technical skills, and query the verified curriculum.
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-xs">
          <span className="text-white/40 text-[11px] mr-1">QUICK EXEC:</span>
          {quickCommands.map((qCmd) => (
            <button
              key={qCmd}
              onClick={() => {
                setInput(qCmd);
                soundFx.playClick(750);
              }}
              className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-[#48C8FF] hover:text-[#48C8FF] text-white/80 transition-all text-[11px]"
              data-cursor="action"
            >
              ${qCmd}
            </button>
          ))}
          <button
            onClick={() => {
              setHistory([]);
              soundFx.playClick(400);
            }}
            className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-rose-400 hover:text-rose-400 text-white/40 transition-all text-[11px] ml-auto flex items-center gap-1"
            title="Clear Terminal"
            data-cursor="action"
          >
            <Trash2 className="w-3 h-3" />
            <span>CLEAR</span>
          </button>
        </div>

        {/* Terminal Window Box */}
        <div className="bg-[#061A2B] border border-[#08243B] shadow-2xl overflow-hidden tech-corner-tl tech-corner-br">
          {/* Terminal Window Titlebar */}
          <div className="px-4 py-2.5 bg-[#08243B] border-b border-white/10 flex items-center justify-between font-mono text-xs text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-bold text-white text-[11px]">kenaz@sjcet-terminal:~</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-white/40">
              <span>BASH 5.2</span>
              <span>UTF-8</span>
            </div>
          </div>

          {/* Terminal Output Body */}
          <div className="p-6 font-mono text-xs space-y-4 max-h-[380px] overflow-y-auto">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#1677FF] font-bold">
                  <span className="text-[#48C8FF]">kenaz@sjcet:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/10">{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Command Input Form */}
          <form
            onSubmit={handleCommand}
            className="px-4 py-3 bg-[#08243B]/60 border-t border-white/10 flex items-center gap-3 font-mono text-xs"
          >
            <span className="text-[#48C8FF] font-bold">kenaz@sjcet:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help' or any command..."
              className="flex-1 bg-transparent text-white focus:outline-hidden font-mono text-xs placeholder:text-white/30"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-[#1677FF] text-white hover:bg-[#48C8FF] hover:text-[#061A2B] transition-colors flex items-center gap-1 text-[11px] font-bold"
              data-cursor="action"
            >
              <span>RUN</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

