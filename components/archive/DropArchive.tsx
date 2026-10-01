"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Bell, Check } from "@phosphor-icons/react";

interface DropArchiveItem {
  id: string;
  tag: string;
  title: string;
  date: string;
  status: "ARCHIVED" | "ACTIVE NOW" | "INCOMING";
  image: string;
  description: string;
  units: string;
}

const DROPS: DropArchiveItem[] = [
  {
    id: "drop-000",
    tag: "DROP 000",
    title: "THE PROTOTYPE FOUNDRY",
    date: "WINTER 2023",
    status: "ARCHIVED",
    image: "/assets/photography/p14.png",
    description: "Initial 100-piece laboratory batch establishing the MW Chess Knight silhouette and heavyweight 450 GSM fleece specs.",
    units: "100 Units // Sold Out",
  },
  {
    id: "drop-001",
    tag: "DROP 001",
    title: "CHOOSE YOUR STATE",
    date: "AUTUMN 2024",
    status: "ACTIVE NOW",
    image: "/assets/photography/p2.png",
    description: "The global launch of Checkmate and Emotions dual collections. 14 distinct garments exploring calculated dominance and kinetic speed.",
    units: "Active Collection // Limited Units",
  },
  {
    id: "drop-002",
    tag: "DROP 002",
    title: "BLACKOUT PROTOCOL",
    date: "INCOMING // WINTER 2024",
    status: "INCOMING",
    image: "/assets/photography/p16.png",
    description: "Stealth weatherized tech fabrics, storm-grade seam sealing, and reflective subterranean graphics.",
    units: "Waitlist Exclusive // 500 Slots",
  },
];

export function DropArchive() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="archive" className="relative w-full bg-void border-b border-editorial-border py-20 md:py-32">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-editorial-border gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 block mb-2">
              Chronological Ledger // The Vault
            </span>
            <h2 className="font-display-condensed text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase">
              Drop History & Archive
            </h2>
          </div>
          <p className="text-xs font-mono tracking-ultra uppercase text-neutral-400 max-w-sm">
            We produce numbered editions. Once an edition is vaulted, it is never reprinted.
          </p>
        </div>

        {/* Drop Ledger Rows */}
        <div className="flex flex-col divide-y divide-editorial-border border-y border-editorial-border">
          {DROPS.map((drop) => {
            const isActive = drop.status === "ACTIVE NOW";
            const isIncoming = drop.status === "INCOMING";

            return (
              <div
                key={drop.id}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group hover:bg-surface-200/50 transition-colors px-4 rounded-sm"
              >
                {/* Col 1: Tag & Status (3 Cols) */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className={`text-[9px] font-mono tracking-ultra uppercase px-2 py-0.5 rounded-sm border ${
                        isActive
                          ? "bg-emerald-950/80 text-emerald-400 border-emerald-700/50"
                          : isIncoming
                          ? "bg-emotions-red/20 text-emotions-red border-emotions-red/50"
                          : "bg-surface-100 text-neutral-500 border-neutral-800"
                      }`}
                    >
                      {drop.status}
                    </span>
                    <span className="text-[10px] font-mono tracking-ultra text-neutral-500">
                      {drop.date}
                    </span>
                  </div>
                  <h3 className="font-display-condensed text-3xl sm:text-4xl text-white tracking-tighter uppercase">
                    {drop.tag}
                  </h3>
                </div>

                {/* Col 2: Title & Description (6 Cols) */}
                <div className="lg:col-span-6">
                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-tight mb-2">
                    {drop.title}
                  </h4>
                  <p className="text-sm font-sans text-neutral-400 leading-relaxed max-w-[60ch]">
                    {drop.description}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-mono tracking-ultra uppercase text-neutral-500">
                    {drop.units}
                  </span>
                </div>

                {/* Col 3: Visual & Action (3 Cols) */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6">
                  <div className="relative w-16 h-20 bg-surface-100 border border-editorial-border rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src={drop.image}
                      alt={drop.title}
                      fill
                      className="object-contain p-1 filter contrast-125"
                    />
                  </div>

                  <div>
                    {isActive ? (
                      <a
                        href="#shop"
                        className="inline-flex items-center gap-1.5 bg-white text-black px-4 py-2 text-xs font-mono font-bold tracking-ultra uppercase rounded-sm hover:bg-neutral-200 transition-colors"
                      >
                        <span>Shop Now</span>
                        <ArrowUpRight size={13} weight="bold" />
                      </a>
                    ) : isIncoming ? (
                      <a
                        href="#newsletter"
                        className="inline-flex items-center gap-1.5 bg-emotions-red text-white px-4 py-2 text-xs font-mono font-bold tracking-ultra uppercase rounded-sm hover:bg-white hover:text-black transition-colors"
                      >
                        <Bell size={13} weight="bold" />
                        <span>Waitlist</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono tracking-ultra text-neutral-600 uppercase border border-neutral-800 px-3 py-1.5 rounded-sm">
                        Vaulted
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
