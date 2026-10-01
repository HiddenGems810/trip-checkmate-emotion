"use client";

import React from "react";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";

interface SpecCard {
  number: string;
  metric: string;
  title: string;
  description: string;
  highlight: string;
}

const SPEC_TILES: SpecCard[] = [
  {
    number: "01",
    metric: "450 GSM",
    title: "Luxury French Terry",
    description:
      "Custom loopback knit providing permanent structural drape. The double-layered crossover hood stands erect without drawstrings.",
    highlight: "Zero sag, maximum thermal retention",
  },
  {
    number: "02",
    metric: "280 GSM",
    title: "Combed Carded Jersey",
    description:
      "Substantial heavyweight cotton that eliminates transparency and body clinging. Formulated for clean boxy streetwear lines.",
    highlight: "Pre-shrunk vintage bio-wash treatment",
  },
  {
    number: "03",
    metric: "6-PASS",
    title: "Discharge Screenprint",
    description:
      "Pigment replaces the fabric fibers rather than sitting on top as rubberized plastisol. Breathable, crack-free, and age-resistant.",
    highlight: "Bullion gold and blood crimson colorfastness",
  },
  {
    number: "04",
    metric: "MW HALLMARK",
    title: "Custom Trims & Hardware",
    description:
      "Woven damask labels on hems, laser-engraved eyelets, bar-tacked pockets, and reinforced 2x2 stretch-recovery ribbed collars.",
    highlight: "Every garment individually numbered in Drop 001",
  },
];

export function Craftsmanship() {
  return (
    <section className="relative w-full bg-surface-300 border-b border-editorial-border py-20 md:py-32">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-editorial-border gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 block mb-2">
              Material Engineering // Lab Specs
            </span>
            <h2 className="font-display-condensed text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase">
              Garment Architecture
            </h2>
          </div>
          <p className="text-xs font-mono tracking-ultra uppercase text-neutral-400 max-w-md">
            We don’t print on catalog blanks. Every silhouette is patterned from scratch with custom-milled fleece, reinforced stress points, and tailored drape.
          </p>
        </div>

        {/* 2x2 Display Tile Grid per taste-skill specification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SPEC_TILES.map((spec) => (
            <div
              key={spec.number}
              className="p-8 sm:p-10 rounded-sm bg-surface-200 border border-editorial-border hover:border-neutral-700 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono tracking-ultra text-neutral-500 uppercase">
                    SPEC // {spec.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 bg-surface-100 px-2.5 py-1 rounded-sm border border-neutral-800">
                    {spec.highlight}
                  </span>
                </div>

                <div className="font-display-condensed text-5xl sm:text-6xl text-white tracking-tighter uppercase mb-2 group-hover:text-neutral-100">
                  {spec.metric}
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-200 uppercase tracking-tight mb-4">
                  {spec.title}
                </h3>

                <p className="text-sm font-sans text-neutral-400 leading-relaxed max-w-[50ch]">
                  {spec.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-editorial-border flex items-center justify-between text-[10px] font-mono tracking-ultra uppercase text-neutral-500">
                <span>LAB TESTED</span>
                <span>GRADE A TOKYO MILLING</span>
              </div>
            </div>
          ))}
        </div>

        {/* Flatlay Showroom Capsule Banner */}
        <div className="mt-12 rounded-sm border border-editorial-border bg-surface-200 overflow-hidden relative group">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full min-h-[220px]">
            <Image
              src="/assets/photography/p18.png"
              alt="Showroom Collection Flatlay"
              fill
              className="object-cover object-center filter contrast-125 brightness-90 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/40 to-transparent" />

            <div className="absolute inset-y-0 left-6 sm:left-12 flex flex-col justify-center max-w-lg z-10">
              <span className="text-[10px] font-mono tracking-ultra text-checkmate-gold uppercase block mb-2">
                COLLECTOR VAULT CAPSULE
              </span>
              <h4 className="font-display-condensed text-3xl sm:text-5xl text-white tracking-tighter uppercase mb-2">
                SHOWROOM BOX SET 001
              </h4>
              <p className="text-xs font-mono tracking-wider text-neutral-300 uppercase line-clamp-2 sm:line-clamp-none mb-4">
                Curated 5-piece capsule with custom presentation case, numbered certificate, and priority access to Drop 002.
              </p>
              <div>
                <a
                  href="#shop"
                  className="inline-block bg-white text-black text-xs font-mono font-bold tracking-ultra uppercase px-6 py-2.5 rounded-sm hover:bg-checkmate-gold transition-colors"
                >
                  Inspect Capsule ($340 USD)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
