"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorType, setCursorType] = useState<"default" | "hover" | "project" | "text" | "action">("default");
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (desktop mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const cursorTextAttr = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
      } else {
        setCursorText("");
      }

      if (cursorAttr === "project") {
        setCursorType("project");
      } else if (cursorAttr === "action" || target.closest("button, a")) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth RAF loop for the lagging outer ring
    let animationFrameId: number;
    const render = () => {
      // Lerp ring towards mouse
      const factor = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-9999 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Central sharp point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#1677FF] pointer-events-none transition-transform duration-75"
      />

      {/* Lagging interactive ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center transition-all duration-200 border ${
          cursorType === "project"
            ? "w-20 h-20 bg-[#061A2B]/90 border-[#48C8FF] text-white shadow-lg backdrop-blur-xs scale-100"
            : cursorType === "hover"
            ? "w-10 h-10 bg-[#1677FF]/15 border-[#1677FF] scale-110"
            : "w-7 h-7 border-[#1677FF]/40 scale-100"
        }`}
      >
        {cursorText && (
          <span className="text-[9px] font-mono tracking-widest uppercase font-semibold text-[#48C8FF]">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}

