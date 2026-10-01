"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Crosshair, Crown } from "@phosphor-icons/react";
import { useCart } from "@/context/CartContext";

export function ChooseYourStateHero() {
  const [hoveredSide, setHoveredSide] = useState<"checkmate" | "emotions" | null>(null);
  const { setActiveState } = useCart();

  const handleSelectState = (state: "checkmate" | "emotions") => {
    setActiveState(state);
    const target = document.getElementById("collections");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-void border-b border-editorial-border">
      {/* 50/50 Dual-State Container */}
      <div className="relative flex-1 flex flex-col md:flex-row w-full h-full min-h-[100dvh]">
        {/* ================= LEFT SIDE: CHECKMATE ================= */}
        <div
          onMouseEnter={() => setHoveredSide("checkmate")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => handleSelectState("checkmate")}
          className={`relative flex-1 group cursor-pointer transition-all duration-700 ease-out flex flex-col justify-between p-6 sm:p-10 md:p-14 pt-28 sm:pt-32 md:pt-36 lg:pt-40 overflow-hidden border-b md:border-b-0 md:border-r border-editorial-border ${
            hoveredSide === "checkmate"
              ? "md:flex-[1.25] brightness-105"
              : hoveredSide === "emotions"
              ? "md:flex-[0.8] opacity-60 filter grayscale-[40%]"
              : "flex-1"
          }`}
        >
          {/* Background Image with Streetwear Treatment */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/photography/p22.png"
              alt="CHECKMATE Red Drip Graffiti Streetwear Model"
              fill
              priority
              className="object-cover object-top filter contrast-125 brightness-75 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Cinematic Gradients & Tech Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/30" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
          </div>

          {/* Chess Grid Ambient Background Lines */}
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          {/* Top Metadata */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm border border-neutral-700/80 bg-void/60 text-checkmate-gold text-xs font-mono">
                <Crown size={15} weight="bold" />
              </span>
              <div>
                <span className="block text-[10px] font-mono tracking-ultra text-neutral-400 uppercase">
                  A1 — H8
                </span>
                <span className="block text-xs font-mono tracking-wider text-neutral-200 uppercase font-medium">
                  Think Three Moves Ahead.
                </span>
              </div>
            </div>

            <div className="hidden sm:block text-right text-[10px] font-mono tracking-ultra text-neutral-400 uppercase">
              Position Is Everything
            </div>
          </div>

          {/* Bottom Massive Typography */}
          <div className="relative z-10 mt-auto pt-24">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-checkmate-gold animate-pulse" />
              <span className="text-[11px] font-mono tracking-ultra uppercase text-neutral-300">
                State 01 // Strategy
              </span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-4">
              <h2 className="font-display-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter group-hover:text-neutral-100 transition-colors">
                CHECKMATE
              </h2>
              <div className="inline-flex items-center justify-center text-emotions-red transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                <ArrowUpRight size={44} weight="bold" className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 text-xs sm:text-sm font-mono tracking-ultra text-neutral-400 uppercase">
              <span>Strategy</span>
              <span className="text-neutral-600">//</span>
              <span>Control</span>
              <span className="text-neutral-600">//</span>
              <span>Dominance</span>
            </div>
          </div>
        </div>

        {/* ================= CENTER SPINE BADGE ================= */}
        <div className="pointer-events-none md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 flex flex-col items-center justify-center py-4 md:py-0">
          <div className="bg-void/90 backdrop-blur-md border border-neutral-700/80 px-4 py-3 rounded-sm text-center shadow-2xl flex md:flex-col items-center gap-2 md:gap-1.5">
            <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-ultra text-white uppercase">
              CHOOSE YOUR STATE
            </div>
            <div className="hidden md:block w-8 h-[1px] bg-neutral-700 my-1" />
            <div className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
              ONE BRAND · TWO MINDSETS
            </div>
            <div className="hidden md:block text-[8px] font-mono tracking-ultra text-neutral-500 uppercase">
              ENDLESS MOTION
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: EMOTIONS ================= */}
        <div
          onMouseEnter={() => setHoveredSide("emotions")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => handleSelectState("emotions")}
          className={`relative flex-1 group cursor-pointer transition-all duration-700 ease-out flex flex-col justify-between p-6 sm:p-10 md:p-14 pt-28 sm:pt-32 md:pt-36 lg:pt-40 overflow-hidden ${
            hoveredSide === "emotions"
              ? "md:flex-[1.25] brightness-105"
              : hoveredSide === "checkmate"
              ? "md:flex-[0.8] opacity-60 filter grayscale-[40%]"
              : "flex-1"
          }`}
        >
          {/* Background Image with Streetwear Treatment */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/photography/p24.png"
              alt="EMOTIONS Streetwear Kinetic Lifestyle"
              fill
              priority
              className="object-cover object-center filter contrast-125 brightness-75 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* High-velocity kinetic light streaks & ambient neon tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-void/80 via-transparent to-void/30" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-emotions-acid/10 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-700" />
          </div>

          {/* Kinetic Scanline Texture */}
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          {/* Top Metadata */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="hidden sm:block text-[10px] font-mono tracking-ultra text-neutral-400 uppercase">
              RAW KINETIC PROGRESSION
            </div>

            <div className="flex items-center gap-3 text-right ml-auto">
              <div>
                <span className="block text-[10px] font-mono tracking-ultra text-neutral-400 uppercase">
                  NO EMOTIONS
                </span>
                <span className="block text-xs font-mono tracking-wider text-white uppercase font-medium">
                  ONLY MOTION.
                </span>
              </div>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm border border-neutral-700/80 bg-void/60 text-emotions-acid text-xs font-mono">
                <Crosshair size={15} weight="bold" />
              </span>
            </div>
          </div>

          {/* Bottom Massive Typography */}
          <div className="relative z-10 mt-auto pt-24">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emotions-acid animate-pulse" />
              <span className="text-[11px] font-mono tracking-ultra uppercase text-neutral-300">
                State 02 // Momentum
              </span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-4">
              <h2 className="font-display-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter group-hover:text-neutral-100 transition-colors">
                EMOTIONS
              </h2>
              <div className="inline-flex items-center justify-center text-emotions-acid transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                <ArrowUpRight size={44} weight="bold" className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 text-xs sm:text-sm font-mono tracking-ultra text-neutral-400 uppercase">
              <span>Instinct</span>
              <span className="text-neutral-600">//</span>
              <span>Movement</span>
              <span className="text-neutral-600">//</span>
              <span>Progression</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-hero Minimal Marquee Strip */}
      <div className="border-t border-editorial-border bg-surface-200/90 py-2.5 px-6 flex items-center justify-between text-[11px] font-mono tracking-ultra text-neutral-400 uppercase overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap">
          <span className="text-white font-semibold">DROP 001 // AVAILABLE WORLDWIDE</span>
          <span className="text-neutral-600">■</span>
          <span>450 GSM FRENCH TERRY</span>
          <span className="text-neutral-600">■</span>
          <span>280 GSM COMBED COTTON</span>
          <span className="text-neutral-600">■</span>
          <span>LIMITED NUMBERED RUNS</span>
        </div>
        <div className="hidden lg:flex items-center gap-3 text-neutral-300">
          <span>SCROLL TO EXPLORE</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
