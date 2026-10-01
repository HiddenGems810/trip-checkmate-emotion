"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { useCart } from "@/context/CartContext";
import { GarmentCategory } from "@/types";
import { Funnel, SquaresFour } from "@phosphor-icons/react";

export function ProductShowcase() {
  const { activeState, setActiveState } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<GarmentCategory | "all">("all");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    // Filter by Brand State
    if (activeState !== "all") {
      list = list.filter((p) => p.collection === activeState);
    }

    // Filter by Category
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Sort
    if (sortBy === "price-asc") {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "price-desc") {
      return [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [activeState, selectedCategory, sortBy]);

  return (
    <section id="shop" className="relative w-full bg-void py-20 md:py-28 border-b border-editorial-border">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-8 border-b border-editorial-border gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-ultra uppercase text-neutral-400 mb-2">
              <span>Primary Garment Roster</span>
              <span className="text-neutral-600">//</span>
              <span>Heavyweight Laboratory</span>
            </div>
            <h2 className="font-display-condensed text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase">
              {activeState === "all"
                ? "Dual State Catalogue"
                : activeState === "checkmate"
                ? "Checkmate Archive"
                : "Emotions Kinetic Line"}
            </h2>
          </div>

          {/* Filtering Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter */}
            <div className="flex items-center gap-1 bg-surface-100 p-1 rounded-sm border border-editorial-border text-[11px] font-mono tracking-ultra uppercase overflow-x-auto max-w-full">
              {(["all", "hoodie", "tee", "longsleeve", "capsule"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-sm transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-white text-black font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {cat === "all" ? "All Silhouette" : cat === "capsule" ? "Capsules" : `${cat}s`}
                </button>
              ))}
            </div>

            {/* Price Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-surface-100 border border-editorial-border text-neutral-300 text-[11px] font-mono tracking-ultra uppercase px-3 py-2 rounded-sm focus:outline-none focus:border-neutral-500 cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center border border-dashed border-neutral-800 rounded-sm">
            <p className="text-neutral-400 font-mono text-sm tracking-wider uppercase">
              No garments found matching current criteria.
            </p>
            <button
              onClick={() => {
                setActiveState("all");
                setSelectedCategory("all");
              }}
              className="mt-4 inline-block bg-white text-black px-6 py-2 text-xs font-mono font-bold tracking-ultra uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
