"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EDITORIAL_ASSETS } from "@/lib/products";
import { ArrowsOutSimple } from "@phosphor-icons/react";

interface EditorialPhoto {
  src: string;
  title: string;
  location: string;
  state: "CHECKMATE" | "EMOTIONS" | "DUAL STATE";
  colSpan: string;
  aspect: string;
}

const EDITORIAL_ITEMS: EditorialPhoto[] = [
  {
    src: EDITORIAL_ASSETS.streetwearDuo,
    title: "DUAL STATE VELOCITY",
    location: "SOHO DISTRICT // 02:44 AM",
    state: "DUAL STATE",
    colSpan: "lg:col-span-7",
    aspect: "aspect-[4/3] sm:aspect-[16/10]",
  },
  {
    src: EDITORIAL_ASSETS.concreteModel,
    title: "MW CHESS EMBLEM",
    location: "BRUTALIST ARCHIVE // SECTOR 04",
    state: "CHECKMATE",
    colSpan: "lg:col-span-5",
    aspect: "aspect-[3/4] sm:aspect-[4/5]",
  },
  {
    src: EDITORIAL_ASSETS.architecturalFullBody,
    title: "CARGO SILHOUETTE",
    location: "METROPOLITAN RUN // RAIN OPS",
    state: "CHECKMATE",
    colSpan: "lg:col-span-5",
    aspect: "aspect-[3/4] sm:aspect-[4/5]",
  },
  {
    src: EDITORIAL_ASSETS.heroEmotions,
    title: "GRAFFITI NIGHT RUN",
    location: "ALLEYWAY DISCHARGE // 04:12 AM",
    state: "EMOTIONS",
    colSpan: "lg:col-span-7",
    aspect: "aspect-[4/3] sm:aspect-[16/10]",
  },
];

export function LifestyleGallery() {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-void border-b border-editorial-border py-20 md:py-28">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 border-b border-editorial-border pb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-ultra uppercase text-neutral-400 mb-2">
              <span>Editorial Series</span>
              <span className="text-neutral-600">//</span>
              <span>Lookbook 001</span>
            </div>
            <h2 className="font-display-condensed text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase">
              Campaign In Situ
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono tracking-ultra uppercase text-neutral-400 max-w-sm">
            Captured on the streets without studio boundaries. Garments engineered for real posture and unyielding velocity.
          </div>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {EDITORIAL_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${item.colSpan} relative group rounded-sm overflow-hidden border border-editorial-border bg-surface-200 cursor-pointer`}
              onClick={() => setActiveModalImage(item.src)}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top Corner State Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`text-[9px] font-mono tracking-ultra uppercase px-2 py-0.5 rounded-sm border ${
                      item.state === "CHECKMATE"
                        ? "bg-void/80 text-checkmate-gold border-checkmate-gold/30"
                        : item.state === "EMOTIONS"
                        ? "bg-void/80 text-emotions-red border-emotions-red/30"
                        : "bg-void/80 text-white border-neutral-700"
                    }`}
                  >
                    {item.state}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 z-10 w-7 h-7 rounded-sm bg-void/70 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-200">
                  <ArrowsOutSimple size={14} weight="bold" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 mt-1">
                      {item.location}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono tracking-ultra text-neutral-500 uppercase">
                    FRAME 0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveModalImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={activeModalImage}
              alt="Editorial expanded view"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 text-xs font-mono tracking-ultra uppercase bg-surface-100 text-white border border-neutral-700 px-3 py-1.5 rounded-sm"
            >
              CLOSE [ESC]
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
