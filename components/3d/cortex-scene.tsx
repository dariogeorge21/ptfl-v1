"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function CortexScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // Group for the entire silicon architecture
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Silicon Package Substrate (Dark Graphite Ceramic)
    const substrateGeo = new THREE.BoxGeometry(3.6, 3.6, 0.28);
    const substrateMat = new THREE.MeshStandardMaterial({
      color: 0x061a2b,
      roughness: 0.35,
      metalness: 0.8,
    });
    const substrate = new THREE.Mesh(substrateGeo, substrateMat);
    mainGroup.add(substrate);

    // Substrate Edge Bevel Border
    const borderGeo = new THREE.EdgesGeometry(substrateGeo);
    const borderMat = new THREE.LineBasicMaterial({
      color: 0x1677ff,
      transparent: true,
      opacity: 0.7,
    });
    const substrateBorder = new THREE.LineSegments(borderGeo, borderMat);
    substrate.add(substrateBorder);

    // 2. Central Exposed Silicon Die
    const dieGeo = new THREE.BoxGeometry(2.0, 2.0, 0.08);
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x08243b,
      roughness: 0.1,
      metalness: 0.95,
    });
    const die = new THREE.Mesh(dieGeo, dieMat);
    die.position.z = 0.18;
    mainGroup.add(die);

    // 3. ARM Cortex-M Architectural Laser Grid on Die
    const gridLinesGroup = new THREE.Group();
    const lineMatCyan = new THREE.LineBasicMaterial({
      color: 0x48c8ff,
      transparent: true,
      opacity: 0.85,
    });
    const lineMatBlue = new THREE.LineBasicMaterial({
      color: 0x1677ff,
      transparent: true,
      opacity: 0.6,
    });

    // Create micro circuit traces on the die surface
    for (let i = -0.9; i <= 0.9; i += 0.3) {
      // Horizontal traces
      const hPoints = [
        new THREE.Vector3(-0.9, i, 0.23),
        new THREE.Vector3(0.9, i, 0.23),
      ];
      const hGeo = new THREE.BufferGeometry().setFromPoints(hPoints);
      gridLinesGroup.add(new THREE.Line(hGeo, i % 0.6 === 0 ? lineMatCyan : lineMatBlue));

      // Vertical traces
      const vPoints = [
        new THREE.Vector3(i, -0.9, 0.23),
        new THREE.Vector3(i, 0.9, 0.23),
      ];
      const vGeo = new THREE.BufferGeometry().setFromPoints(vPoints);
      gridLinesGroup.add(new THREE.Line(vGeo, i % 0.6 === 0 ? lineMatCyan : lineMatBlue));
    }
    mainGroup.add(gridLinesGroup);

    // 4. Gold Interconnect Contact Pads (Perimeter Pins)
    const pinGeo = new THREE.BoxGeometry(0.12, 0.32, 0.04);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xf3ba2f,
      metalness: 0.9,
      roughness: 0.2,
    });

    const pinsGroup = new THREE.Group();
    const pinPositions = [-1.4, -1.0, -0.6, -0.2, 0.2, 0.6, 1.0, 1.4];

    pinPositions.forEach((pos) => {
      // Top row
      const pinTop = new THREE.Mesh(pinGeo, pinMat);
      pinTop.position.set(pos, 1.6, 0.16);
      pinsGroup.add(pinTop);

      // Bottom row
      const pinBottom = new THREE.Mesh(pinGeo, pinMat);
      pinBottom.position.set(pos, -1.6, 0.16);
      pinsGroup.add(pinBottom);

      // Left row
      const pinLeft = new THREE.Mesh(pinGeo, pinMat);
      pinLeft.rotation.z = Math.PI / 2;
      pinLeft.position.set(-1.6, pos, 0.16);
      pinsGroup.add(pinLeft);

      // Right row
      const pinRight = new THREE.Mesh(pinGeo, pinMat);
      pinRight.rotation.z = Math.PI / 2;
      pinRight.position.set(1.6, pos, 0.16);
      pinsGroup.add(pinRight);
    });
    mainGroup.add(pinsGroup);

    // 5. Orbiting ARM Computational Rings (Wireframe Torus)
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x48c8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const torusRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    torusRing1.rotation.x = Math.PI / 3;
    mainGroup.add(torusRing1);

    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x1677ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const torusRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    torusRing2.rotation.y = Math.PI / 4;
    mainGroup.add(torusRing2);

    // 6. Floating Telemetry Particles (Constellation)
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i] = r * Math.cos(theta) * Math.cos(phi);
      particlePositions[i + 1] = r * Math.sin(theta) * Math.cos(phi);
      particlePositions[i + 2] = r * Math.sin(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x48c8ff,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xddeeff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x48c8ff, 2.5);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const electricFill = new THREE.PointLight(0x1677ff, 3.0, 15);
    electricFill.position.set(-4, -3, 4);
    scene.add(electricFill);

    const rimLight = new THREE.PointLight(0x48c8ff, 2.0, 10);
    rimLight.position.set(0, 0, 3);
    scene.add(rimLight);

    // Initial orientation
    mainGroup.rotation.x = 0.55;
    mainGroup.rotation.y = -0.45;

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width - 0.5) * 1.4;
      mouse.targetY = (clientY / rect.height - 0.5) * 1.4;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);
    setIsLoaded(true);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Base rotations
      mainGroup.rotation.x = 0.55 + mouse.y * 0.6 + Math.sin(elapsed * 0.4) * 0.05;
      mainGroup.rotation.y = -0.45 + mouse.x * 0.7 + elapsed * 0.12;

      // Floating gentle oscillation
      mainGroup.position.y = Math.sin(elapsed * 0.9) * 0.12;

      // Orbiting rings
      torusRing1.rotation.z = elapsed * 0.25;
      torusRing2.rotation.z = -elapsed * 0.18;

      // Particle rotation
      particles.rotation.y = -elapsed * 0.08;

      // Pulse rim light
      rimLight.intensity = 1.6 + Math.sin(elapsed * 2.5) * 0.7;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas Mount */}
      {hasWebGL ? (
        <div
          ref={containerRef}
          className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          data-cursor="action"
        />
      ) : (
        /* CSS / Canvas Fallback */
        <div className="w-64 h-64 border-2 border-[#1677FF]/40 rounded-xl flex flex-col items-center justify-center p-6 bg-white shadow-xl">
          <div className="w-24 h-24 border border-[#48C8FF] bg-[#061A2B] rounded-lg flex items-center justify-center relative">
            <span className="text-[#48C8FF] font-mono text-xs font-bold">ARM CORTEX-M</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1677FF] rounded-full animate-ping" />
          </div>
          <span className="mt-4 text-xs font-mono text-[#08243B] font-semibold">SILICON DIE RENDER</span>
        </div>
      )}

      {/* Futuristic Engineering Floating HUD Badges */}
      <div className="absolute top-4 right-4 pointer-events-none flex flex-col items-end gap-1.5 font-mono text-[10px] tracking-wider text-[#061A2B]/80">
        <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-2.5 py-1 border border-[#1677FF]/20 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-pulse" />
          <span className="font-bold text-[#061A2B]">CORE // ARM CORTEX-M</span>
        </div>
        <span className="text-[#4B6279] text-[9px]">32-BIT RISC ARCHITECTURE</span>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-none flex flex-col gap-1 font-mono text-[10px] tracking-wider">
        <div className="flex items-center gap-2 bg-[#061A2B] text-white px-2.5 py-1 shadow-md">
          <span className="text-[#48C8FF]">SYS.ONLINE</span>
          <span className="text-white/40">|</span>
          <span className="text-[#DDF4FF]">TCP/IP STACK READY</span>
        </div>
        <span className="text-[#4B6279] text-[9px] bg-white/70 px-1.5 py-0.5 border border-[#D5E4F2] w-fit">
          INTERACTIVE 3D SILICON // DRAG TO ROTATE
        </span>
      </div>
    </div>
  );
}

