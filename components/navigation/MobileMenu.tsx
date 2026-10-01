"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, ArrowUpRight, Crown, Crosshair, Sparkle } from "@phosphor-icons/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { activeState, setActiveState, openCart, totalCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-void flex flex-col justify-between p-6 sm:p-12 overflow-y-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-editorial-border pb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <Image
              src="/assets/logo/logo-white.png"
              alt="Logo"
              fill
              className="object-contain filter brightness-100 contrast-125"
            />
          </div>
          <span className="font-mono text-sm tracking-ultra uppercase text-white font-bold">
            CHECKMATE // EMOTIONS
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-sm border border-neutral-700 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close navigation"
        >
          <X size={20} weight="bold" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="my-auto py-12 flex flex-col gap-6">
        <div className="text-[10px] font-mono tracking-ultra uppercase text-neutral-500 mb-2">
          Directory Index
        </div>

        <Link
          href="#drop"
          onClick={onClose}
          className="font-display-condensed text-5xl sm:text-7xl text-white hover:text-neutral-300 transition-colors uppercase tracking-tight flex items-baseline justify-between"
        >
          <span>Latest Drop 001</span>
          <ArrowUpRight size={28} />
        </Link>

        <Link
          href="#shop"
          onClick={onClose}
          className="font-display-condensed text-5xl sm:text-7xl text-white hover:text-neutral-300 transition-colors uppercase tracking-tight flex items-baseline justify-between"
        >
          <span>Full Collection</span>
          <ArrowUpRight size={28} />
        </Link>

        <Link
          href="#manifesto"
          onClick={onClose}
          className="font-display-condensed text-5xl sm:text-7xl text-white hover:text-neutral-300 transition-colors uppercase tracking-tight flex items-baseline justify-between"
        >
          <span>Brand Manifesto</span>
          <ArrowUpRight size={28} />
        </Link>

        <Link
          href="#archive"
          onClick={onClose}
          className="font-display-condensed text-5xl sm:text-7xl text-white hover:text-neutral-300 transition-colors uppercase tracking-tight flex items-baseline justify-between"
        >
          <span>The Vault Archive</span>
          <ArrowUpRight size={28} />
        </Link>

        <Link
          href="#footer"
          onClick={onClose}
          className="font-display-condensed text-5xl sm:text-7xl text-white hover:text-neutral-300 transition-colors uppercase tracking-tight flex items-baseline justify-between"
        >
          <span>Priority Access</span>
          <ArrowUpRight size={28} />
        </Link>
      </div>

      {/* State Switcher & Bottom Actions */}
      <div className="pt-8 border-t border-editorial-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs font-mono tracking-ultra uppercase">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveState("checkmate");
              onClose();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-sm border ${
              activeState === "checkmate"
                ? "bg-checkmate-gold text-black font-bold border-checkmate-gold"
                : "border-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            <Crown size={14} weight="bold" />
            <span>Checkmate</span>
          </button>

          <button
            onClick={() => {
              setActiveState("emotions");
              onClose();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-sm border ${
              activeState === "emotions"
                ? "bg-emotions-red text-white font-bold border-emotions-red"
                : "border-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            <Crosshair size={14} weight="bold" />
            <span>Emotions</span>
          </button>
        </div>

        <button
          onClick={() => {
            onClose();
            openCart();
          }}
          className="bg-white text-black px-6 py-2.5 rounded-sm font-bold text-center"
        >
          Open Cart ({totalCount})
        </button>
      </div>
    </div>
  );
}
