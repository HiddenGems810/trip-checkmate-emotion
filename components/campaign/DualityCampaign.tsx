"use client";

import React from "react";
import Image from "next/image";
import { Crown, Crosshair, ArrowRight } from "@phosphor-icons/react";
import { useCart } from "@/context/CartContext";

export function DualityCampaign() {
  const { setActiveState } = useCart();

  const handleGoTo = (state: "checkmate" | "emotions") => {
    setActiveState(state);
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-void border-b border-editorial-border py-20 md:py-32">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 block mb-3">
            Two Dualities // One Identity
          </span>
          <h2 className="font-display-condensed text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase">
            The Two Philosophies
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-400 uppercase mt-4">
            A dialectic between calculated patience and kinetic velocity. Choose your posture for every battle.
          </p>
        </div>

        {/* Split Philosophical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ================= CARD 1: CHECKMATE ================= */}
          <div className="relative rounded-sm border border-editorial-border bg-surface-200 overflow-hidden flex flex-col justify-between group hover:border-checkmate-gold/50 transition-colors duration-500">
            {/* Ambient Gold Chess Background */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-300">
              <Image
                src="/assets/photography/p17.png"
                alt="Checkmate King Philosophy"
                fill
                className="object-cover object-top filter contrast-125 brightness-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-void/90 text-checkmate-gold text-[10px] font-mono tracking-ultra uppercase px-2.5 py-1 rounded-sm border border-checkmate-gold/30">
                  <Crown size={13} weight="bold" />
                  <span>State 01: Checkmate</span>
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-10 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-display-condensed text-4xl sm:text-5xl text-white tracking-tighter uppercase mb-4">
                  Deliberate Supremacy
                </h3>

                <p className="text-sm font-sans text-neutral-300 leading-relaxed mb-6">
                  In a world of noise and reckless impulse, true power is calculated. Checkmate is built on the ancient mathematics of the board: controlling space, reading the opponent’s next three moves, and striking with absolute, irreversible finality.
                </p>

                {/* Behavioral Pillars */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-editorial-border text-center">
                  <div className="bg-surface-100 p-2.5 rounded-sm border border-editorial-border">
                    <span className="text-[9px] font-mono tracking-ultra text-neutral-500 uppercase block">
                      Core Tactic
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      Position
                    </span>
                  </div>
                  <div className="bg-surface-100 p-2.5 rounded-sm border border-editorial-border">
                    <span className="text-[9px] font-mono tracking-ultra text-neutral-500 uppercase block">
                      Cadence
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      Patience
                    </span>
                  </div>
                  <div className="bg-surface-100 p-2.5 rounded-sm border border-editorial-border">
                    <span className="text-[9px] font-mono tracking-ultra text-neutral-500 uppercase block">
                      End State
                    </span>
                    <span className="text-xs font-mono font-bold text-checkmate-gold uppercase">
                      Dominance
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-editorial-border flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400">
                  7 Garments Available
                </span>
                <button
                  onClick={() => handleGoTo("checkmate")}
                  className="inline-flex items-center gap-2 bg-checkmate-gold text-black font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-sm hover:bg-white transition-colors"
                >
                  <span>Enter Checkmate</span>
                  <ArrowRight size={14} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: EMOTIONS ================= */}
          <div className="relative rounded-sm border border-editorial-border bg-surface-200 overflow-hidden flex flex-col justify-between group hover:border-emotions-red/50 transition-colors duration-500">
            {/* Ambient Kinetic Background */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-300">
              <Image
                src="/assets/photography/p26.png"
                alt="Emotions Velocity Philosophy"
                fill
                className="object-cover object-top filter contrast-125 brightness-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-void/90 text-emotions-red text-[10px] font-mono tracking-ultra uppercase px-2.5 py-1 rounded-sm border border-emotions-red/30">
                  <Crosshair size={13} weight="bold" />
                  <span>State 02: Emotions</span>
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-10 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-display-condensed text-4xl sm:text-5xl text-white tracking-tighter uppercase mb-4">
                  No Emotions. Only Motion.
                </h3>

                <p className="text-sm font-sans text-neutral-300 leading-relaxed mb-6">
                  Doubt is friction. Fear is hesitation. When the pressure peaks, conscious deliberation dissolves into pure somatic instinct. Emotions is the refusal to stall: zero remorse, uncontainable acceleration, forward velocity that breaks through every perimeter.
                </p>

                {/* Behavioral Pillars */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-editorial-border text-center">
                  <div className="bg-surface-100 p-2.5 rounded-sm border border-editorial-border">
                    <span className="text-[9px] font-mono tracking-ultra text-neutral-500 uppercase block">
                      Core Tactic
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      Velocity
                    </span>
                  </div>
                  <div className="bg-surface-100 p-2.5 rounded-sm border border-editorial-border">
                    <span className="text-[9px] font-mono tracking-ultra text-neutral-500 uppercase block">
                      Cadence
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      Instinct
                    </span>
                  </div>
                  <div className="bg-surface-100 p-2.5 rounded-sm border border-editorial-border">
                    <span className="text-[9px] font-mono tracking-ultra text-neutral-500 uppercase block">
                      End State
                    </span>
                    <span className="text-xs font-mono font-bold text-emotions-red uppercase">
                      Progression
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-editorial-border flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400">
                  7 Garments Available
                </span>
                <button
                  onClick={() => handleGoTo("emotions")}
                  className="inline-flex items-center gap-2 bg-emotions-red text-white font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-sm hover:bg-white hover:text-black transition-colors"
                >
                  <span>Enter Emotions</span>
                  <ArrowRight size={14} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
