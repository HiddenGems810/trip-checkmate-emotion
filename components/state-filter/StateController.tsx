"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/products";
import { Crown, Crosshair, Sparkle } from "@phosphor-icons/react";

export function StateController() {
  const { activeState, setActiveState } = useCart();

  const checkmateCount = PRODUCTS.filter((p) => p.collection === "checkmate").length;
  const emotionsCount = PRODUCTS.filter((p) => p.collection === "emotions").length;
  const totalCount = PRODUCTS.length;

  return (
    <div
      id="collections"
      className="relative w-full bg-void border-b border-editorial-border py-4 sm:py-5 px-6 md:px-12 z-20"
    >
      <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* State Toggle Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveState("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono tracking-ultra uppercase transition-all duration-200 whitespace-nowrap ${
              activeState === "all"
                ? "bg-white text-black font-bold shadow-lg"
                : "bg-surface-100/90 text-neutral-400 hover:text-white border border-editorial-border"
            }`}
          >
            <Sparkle size={13} weight="bold" />
            <span>All Pieces</span>
            <span className="opacity-60 text-[10px]">[{totalCount}]</span>
          </button>

          <button
            onClick={() => setActiveState("checkmate")}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono tracking-ultra uppercase transition-all duration-200 whitespace-nowrap ${
              activeState === "checkmate"
                ? "bg-checkmate-gold text-black font-bold shadow-lg"
                : "bg-surface-100/90 text-neutral-400 hover:text-checkmate-gold border border-editorial-border"
            }`}
          >
            <Crown size={14} weight="bold" />
            <span>Checkmate</span>
            <span className="opacity-60 text-[10px]">[{checkmateCount}]</span>
          </button>

          <button
            onClick={() => setActiveState("emotions")}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono tracking-ultra uppercase transition-all duration-200 whitespace-nowrap ${
              activeState === "emotions"
                ? "bg-emotions-red text-white font-bold shadow-lg"
                : "bg-surface-100/90 text-neutral-400 hover:text-emotions-red border border-editorial-border"
            }`}
          >
            <Crosshair size={14} weight="bold" />
            <span>Emotions</span>
            <span className="opacity-60 text-[10px]">[{emotionsCount}]</span>
          </button>
        </div>

        {/* State Micro-Manifesto Descriptor */}
        <div className="hidden lg:flex items-center gap-4 text-[11px] font-mono tracking-ultra uppercase text-neutral-400">
          {activeState === "all" && (
            <span>Viewing Complete Dual-State Roster // 280-450 GSM Heavyweights</span>
          )}
          {activeState === "checkmate" && (
            <span className="text-neutral-300">
              Checkmate State: <strong className="text-checkmate-gold font-normal">Strategy · Position · Dominance</strong>
            </span>
          )}
          {activeState === "emotions" && (
            <span className="text-neutral-300">
              Emotions State: <strong className="text-emotions-red font-normal">No Emotions · Only Motion</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
