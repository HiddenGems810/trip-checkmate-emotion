"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CaretLeft, CaretRight, Play, Check } from "@phosphor-icons/react";

interface DropSlide {
  id: string;
  headline: string;
  subhead: string;
  image: string;
  editorial: string;
  caption: string;
}

const CHECKMATE_SLIDES: DropSlide[] = [
  {
    id: "01",
    headline: "DROP 001",
    subhead: "CHECKMATE // STRATEGY OVER SPEED.",
    image: "/assets/photography/p20.png",
    editorial: "MORE THAN CLOTHING. A STATE OF MIND.",
    caption: "Night Storefront // Checkmate Heavyweight Armor",
  },
  {
    id: "02",
    headline: "DROP 001",
    subhead: "ROYAL SOVEREIGNTY // CHESS NOT CHECKERS.",
    image: "/assets/photography/p17.png",
    editorial: "POSITION IS EVERYTHING. THINK THREE MOVES AHEAD.",
    caption: "King's Royal Stance // Gold Bullion Crown Motif",
  },
  {
    id: "03",
    headline: "DROP 001",
    subhead: "ARCHITECTURAL PROPORTIONS // 450 GSM FLEECE.",
    image: "/assets/photography/p21.png",
    editorial: "BUILT FOR THE STREETS. ENGINEERED FOR SUPREMACY.",
    caption: "Concrete MW Knight Longsleeve Silhouette",
  },
  {
    id: "04",
    headline: "DROP 001",
    subhead: "CONTROLLED AGGRESSION // RED DRIP GRAFFITI.",
    image: "/assets/photography/p22.png",
    editorial: "CALCULATED REIGN. ZERO UNFORCED ERRORS.",
    caption: "Night Ops // Checkmate Graffiti Script Armor",
  },
];

const EMOTIONS_SLIDES: DropSlide[] = [
  {
    id: "01",
    headline: "DROP 001",
    subhead: "NO EMOTIONS. ONLY MOTION. // KINETIC BURST.",
    image: "/assets/photography/p24.png",
    editorial: "MORE MOTION. LESS DISTRACTION.",
    caption: "Night Alley Discharge // Three Apes Kinetic Armor",
  },
  {
    id: "02",
    headline: "DROP 001",
    subhead: "450 GSM VELOCITY FLEECE // SKYLINE OPS.",
    image: "/assets/photography/p26.png",
    editorial: "FORWARD MOMENTUM THAT BREAKS THROUGH EVERY PERIMETER.",
    caption: "Rooftop Overlook // Three Apes Heavyweight Hoodie",
  },
  {
    id: "03",
    headline: "DROP 001",
    subhead: "DIRECTION OVER HESITATION // SOHO LAB.",
    image: "/assets/photography/p25.png",
    editorial: "DISCIPLINE CREATES FREEDOM. SOMATIC INSTINCT.",
    caption: "SoHo Flagship Exterior // Compass & Chains Vintage Tee",
  },
  {
    id: "04",
    headline: "DROP 001",
    subhead: "A HIGHER STANDARD // BUILT DIFFERENT.",
    image: "/assets/photography/p28.png",
    editorial: "ZERO REMORSE. UNCONTAINABLE ACCELERATION.",
    caption: "Urban Duology // Full Emotions Streetwear Armor",
  },
];

const DUAL_SLIDES: DropSlide[] = [
  {
    id: "01",
    headline: "DROP 001",
    subhead: "TWO COLLECTIONS. ONE VISION. + AVAILABLE NOW.",
    image: "/assets/photography/p20.png",
    editorial: "MORE THAN CLOTHING. A STATE OF MIND.",
    caption: "Night Storefront // Checkmate Heavyweight Armor",
  },
  {
    id: "02",
    headline: "DROP 001",
    subhead: "NO EMOTIONS. ONLY MOTION. // KINETIC BURST.",
    image: "/assets/photography/p24.png",
    editorial: "MORE MOTION. LESS DISTRACTION.",
    caption: "Night Alley Discharge // Three Apes Kinetic Armor",
  },
  {
    id: "03",
    headline: "DROP 001",
    subhead: "ROYAL SOVEREIGNTY // CHESS NOT CHECKERS.",
    image: "/assets/photography/p17.png",
    editorial: "POSITION OVER POWER. THINK THREE MOVES AHEAD.",
    caption: "King's Royal Stance // Gold Bullion Crown Motif",
  },
  {
    id: "04",
    headline: "DROP 001",
    subhead: "450 GSM VELOCITY FLEECE // SKYLINE OPS.",
    image: "/assets/photography/p26.png",
    editorial: "FORWARD MOMENTUM THAT BREAKS THROUGH EVERY PERIMETER.",
    caption: "Rooftop Overlook // Three Apes Heavyweight Hoodie",
  },
];

export function DropOverview() {
  const { activeState } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayingFilm, setIsPlayingFilm] = useState(false);

  // Reset slide index when active collection state changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeState]);

  const activeSlides =
    activeState === "checkmate"
      ? CHECKMATE_SLIDES
      : activeState === "emotions"
      ? EMOTIONS_SLIDES
      : DUAL_SLIDES;

  const slide = activeSlides[currentSlide] || activeSlides[0];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  return (
    <section
      id="drop"
      className="relative w-full bg-surface-300 border-b border-editorial-border py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* 3-Column Layout Matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Drop Title & CTAs (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-neutral-600" />
              <span className="text-[11px] font-mono tracking-ultra uppercase text-neutral-400">
                Latest Drop
              </span>
            </div>

            <h2 className="font-display-condensed text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter mb-4">
              {slide.headline}
            </h2>

            <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-300 uppercase max-w-[34ch] mb-8 leading-relaxed">
              {slide.subhead}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#collections"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 text-xs font-mono font-bold tracking-ultra uppercase hover:bg-neutral-200 transition-colors duration-200 active:scale-[0.98]"
              >
                Explore Drop
              </Link>

              <button
                onClick={() => setIsPlayingFilm(true)}
                className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-white px-4 py-3.5 text-xs font-mono tracking-ultra uppercase transition-colors duration-200 group"
              >
                <span>Watch Film</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-neutral-600 group-hover:border-white transition-colors">
                  <Play size={10} weight="fill" />
                </span>
              </button>
            </div>
          </div>

          {/* Center Column: Large Cinematic Photography (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-sm overflow-hidden border border-editorial-border group bg-surface-200">
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.caption}
                fill
                priority
                className="object-cover object-center filter contrast-110 brightness-90 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-ultra uppercase text-neutral-300">
                <span className="bg-void/70 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-neutral-800">
                  {slide.caption}
                </span>
                <span className="hidden sm:inline-block text-neutral-500">
                  REF // 001-STREET
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Interactive Slide Indicator (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-2">
            <div className="border-l border-editorial-border pl-6 lg:pl-8 mb-8">
              <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-500 block mb-2">
                Manifesto Note
              </span>
              <p className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-snug">
                {slide.editorial}
              </p>
            </div>

            {/* Thumbnail Previews & Pagination */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-4 gap-2">
                {activeSlides.map((s, idx) => (
                  <button
                    key={s.id + s.image}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative aspect-square rounded-sm overflow-hidden border transition-all duration-300 ${
                      currentSlide === idx
                        ? "border-white ring-1 ring-white"
                        : "border-neutral-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.caption}
                      fill
                      className={`object-cover transition-all duration-300 ${
                        currentSlide === idx ? "filter grayscale-0 brightness-100" : "filter grayscale brightness-75"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-between pt-3 border-t border-editorial-border text-xs font-mono tracking-ultra uppercase text-neutral-400">
                <span className="text-white font-semibold">
                  0{currentSlide + 1} <span className="text-neutral-600">/</span> 0{activeSlides.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-sm border border-editorial-border hover:border-neutral-400 hover:text-white transition-colors"
                    aria-label="Previous drop slide"
                  >
                    <CaretLeft size={14} weight="bold" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-sm border border-editorial-border hover:border-neutral-400 hover:text-white transition-colors"
                    aria-label="Next drop slide"
                  >
                    <CaretRight size={14} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Lookbook Film Modal */}
      {isPlayingFilm && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-5xl aspect-video bg-void border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between">
            <button
              onClick={() => setIsPlayingFilm(false)}
              className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-white text-xs font-mono uppercase bg-surface-100 px-3 py-1.5 border border-neutral-700 rounded-sm"
            >
              Close [ESC]
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/assets/photography/p23.png"
                alt="Film teaser"
                fill
                className="object-cover filter contrast-125 brightness-50"
              />
              <div className="relative z-10 text-center max-w-lg px-6">
                <div className="inline-flex items-center gap-2 text-emotions-red text-xs font-mono tracking-ultra uppercase mb-3">
                  <span className="w-2 h-2 rounded-full bg-emotions-red animate-ping" />
                  Lookbook Premiere // 4K 60FPS
                </div>
                <h3 className="font-display-condensed text-4xl sm:text-6xl text-white tracking-tighter mb-4">
                  CHECKMATE // EMOTIONS
                </h3>
                <p className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-6">
                  Official Campaign Film directed for Drop 001. Filmed on location across Tokyo and New York.
                </p>
                <div className="inline-flex items-center gap-3 bg-white text-black px-6 py-2.5 text-xs font-mono font-bold tracking-ultra uppercase">
                  <Play size={14} weight="fill" />
                  Streaming Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
