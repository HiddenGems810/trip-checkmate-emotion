"use client";

import React from "react";
import Image from "next/image";
import { Crosshair } from "@phosphor-icons/react";

export function BrandManifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full min-h-[90vh] bg-surface-300 border-b border-editorial-border flex flex-col justify-between overflow-hidden py-16 md:py-24"
    >
      {/* Background Graphic Lines / Technical Orbits */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute right-[-10%] top-[10%] w-[800px] h-[800px] opacity-20 text-neutral-500"
          viewBox="0 0 500 500"
          fill="none"
        >
          <ellipse
            cx="250"
            cy="250"
            rx="220"
            ry="90"
            transform="rotate(-25 250 250)"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <ellipse
            cx="250"
            cy="250"
            rx="240"
            ry="110"
            transform="rotate(-25 250 250)"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line x1="0" y1="250" x2="500" y2="250" stroke="currentColor" strokeWidth="0.5" />
          <line x1="250" y1="0" x2="250" y2="500" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1720px] mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Giant Condensed Typography */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-ultra uppercase text-neutral-400 mb-6">
              <span className="w-8 h-[1px] bg-neutral-600" />
              <span>Manifesto Axiom 001</span>
            </div>

            <h2 className="font-display-condensed text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.84] text-white tracking-tighter uppercase select-none">
              MOVEMENT <br />
              DOESN’T ASK <br />
              PERMISSION.
            </h2>
          </div>

          {/* Right: Dynamic Streetwear Action Subject & Metadata */}
          <div className="lg:col-span-4 relative flex flex-col justify-between min-h-[420px]">
            {/* Dynamic Streetwear Silhouette Image */}
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-editorial-border bg-surface-200">
              <Image
                src="/assets/photography/p21.png"
                alt="Action Silhouette"
                fill
                className="object-cover object-top filter contrast-125 brightness-90 grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

              {/* Floating Crosshair Graphic */}
              <div className="absolute top-4 right-4 text-neutral-400">
                <Crosshair size={22} weight="bold" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[9px] font-mono tracking-ultra text-neutral-400 uppercase block">
                  SUBJECT: URBAN VECTOR
                </span>
                <span className="text-xs font-mono tracking-wider text-white uppercase font-bold">
                  NO HESITATION IN THE DROP.
                </span>
              </div>
            </div>

            {/* Technical Metadata Annotations */}
            <div className="mt-6 flex items-start justify-between text-[11px] font-mono tracking-ultra uppercase text-neutral-400">
              <div>
                <span className="block text-white font-bold">SAME ENERGY.</span>
                <span>DIFFERENT DIRECTION.</span>
              </div>

              <div className="text-right">
                <span className="block text-white font-bold">A HIGHER STATE</span>
                <span>OF HUMAN.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Identity Strip Matching Reference */}
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 w-full pt-12 mt-12 border-t border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-ultra uppercase text-neutral-400">
        <div>CHECKMATE // EMOTIONS COLLECTION 001</div>
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image
              src="/assets/logo/logo-white.png"
              alt="Monogram mark"
              fill
              className="object-contain filter brightness-100 contrast-125"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span>EST. 2024</span>
          <span className="text-neutral-600">—</span>
          <span>WORLDWIDE DISTRIBUTION</span>
        </div>
      </div>
    </section>
  );
}
