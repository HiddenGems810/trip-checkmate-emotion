"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check } from "@phosphor-icons/react";

export function ArchitecturalFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative w-full bg-void pt-20 md:pt-28 pb-12 overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Top Newsletter & Manifesto Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-editorial-border items-start">
          {/* Brand Vision (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <Image
                  src="/assets/logo/logo-white.png"
                  alt="CHECKMATE // EMOTIONS Monogram"
                  fill
                  className="object-contain filter brightness-100 contrast-125 drop-shadow-[0_2px_16px_rgba(255,255,255,0.12)]"
                />
              </div>
              <div>
                <span className="font-mono text-sm sm:text-base tracking-ultra text-white uppercase font-bold block">
                  CHECKMATE // EMOTIONS
                </span>
                <span className="font-mono text-[10px] tracking-ultra text-neutral-500 uppercase block">
                  LABORATORY EDITION // 001
                </span>
              </div>
            </div>

            <p className="font-display-condensed text-3xl sm:text-4xl md:text-5xl text-neutral-200 tracking-tighter uppercase max-w-xl leading-tight">
              An interactive streetwear laboratory dedicated to deliberate strategy and uncompromising kinetic velocity.
            </p>
          </div>

          {/* VIP Drop Priority Access / Newsletter (6 Cols) */}
          <div id="newsletter" className="lg:col-span-6 bg-surface-200 p-8 sm:p-10 rounded-sm border border-editorial-border">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-ultra uppercase text-neutral-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emotions-red animate-pulse" />
              <span>Inner Circle // Early Access Pass</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
              Join The Priority Dispatch
            </h3>
            <p className="text-xs sm:text-sm font-sans text-neutral-400 mb-6 leading-relaxed">
              Receive secret drop codes, lookbook previews, and vault unlock keys 30 minutes before public deployment.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL FOR EARLY DROP ACCESS..."
                required
                className="flex-1 bg-surface-100 border border-editorial-border text-white text-xs font-mono uppercase tracking-wider px-4 py-3.5 rounded-sm placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold tracking-ultra uppercase px-8 py-3.5 rounded-sm flex items-center justify-center gap-2 transition-colors duration-200 flex-shrink-0"
              >
                {submitted ? (
                  <>
                    <Check size={14} weight="bold" />
                    <span>Registered</span>
                  </>
                ) : (
                  <>
                    <span>Enroll</span>
                    <ArrowRight size={14} weight="bold" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 flex items-center gap-4 text-[10px] font-mono tracking-ultra text-neutral-500 uppercase">
              <span>ZERO SPAM</span>
              <span>·</span>
              <span>DROP NOTIFICATIONS ONLY</span>
              <span>·</span>
              <span>UNSUBSCRIBE AT WILL</span>
            </div>
          </div>
        </div>

        {/* Navigation Index & Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-editorial-border text-xs font-mono tracking-ultra uppercase">
          {/* Col 1: Checkmate */}
          <div>
            <h4 className="text-checkmate-gold font-bold mb-4">Checkmate Line</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Chess Not Checkers
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  MW Knight Crest
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Gold Crown Arch
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Red Drip Graffiti
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Showroom Box Set
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Emotions */}
          <div>
            <h4 className="text-emotions-red font-bold mb-4">Emotions Line</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Three Apes Series
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Compass & Chains
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  No Emotion Longsleeve
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Pressure Crewneck
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Velocity Armor
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Archive & Brand */}
          <div>
            <h4 className="text-white font-bold mb-4">The Laboratory</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <a href="#drop" className="hover:text-white transition-colors">
                  Drop 001 Overview
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-white transition-colors">
                  Brand Manifesto
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  Chronological Vault
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  State Selector
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Logistics */}
          <div>
            <h4 className="text-white font-bold mb-4">Commerce & Care</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <span className="text-neutral-300">Worldwide Shipping</span>
              </li>
              <li>
                <span className="text-neutral-500">Free Orders Over $150</span>
              </li>
              <li>
                <span className="text-neutral-500">14-Day Return Window</span>
              </li>
              <li>
                <span className="text-neutral-500">Cold Wash / Hang Dry</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Coordinates */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-white font-bold mb-4">Operations</h4>
            <div className="text-neutral-400 space-y-2 text-[11px]">
              <div>NEW YORK // TOKYO</div>
              <div>COORDINATES: 40.7128° N, 74.0060° W</div>
              <div className="text-emerald-400 flex items-center gap-1.5 pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                GLOBAL FULFILLMENT ACTIVE
              </div>
            </div>
          </div>
        </div>

        {/* Massive Architectural Typography Watermark */}
        <div className="py-12 border-b border-editorial-border select-none overflow-hidden text-center">
          <span className="font-display-condensed text-[12vw] leading-none text-neutral-800 tracking-tightest whitespace-nowrap block">
            CHECKMATE // EMOTIONS
          </span>
        </div>

        {/* Bottom Legal Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-ultra text-neutral-500 uppercase">
          <div>
            © {new Date().getFullYear()} CHECKMATE // EMOTIONS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>TERMS OF DEPLOYMENT</span>
            <span>PRIVACY PROTOCOL</span>
            <span>ACCESSIBILITY</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>TOP OF BOARD</span>
            <ArrowUp size={13} weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
