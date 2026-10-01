"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { MagnifyingGlass, X } from "@phosphor-icons/react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { setQuickViewProduct } = useCart();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (product: Product) => {
    setQuickViewProduct(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-start justify-center p-4 sm:p-8 pt-20">
      <div className="w-full max-w-3xl bg-surface-300 border border-editorial-border rounded-sm shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-editorial-border flex items-center gap-4">
          <MagnifyingGlass size={22} className="text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH GARMENTS, SILHOUETTES, GSM, OR STATE..."
            autoFocus
            className="flex-1 bg-transparent text-white font-mono text-sm sm:text-base uppercase tracking-wider focus:outline-none placeholder:text-neutral-600"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-neutral-500 hover:text-white text-xs font-mono"
            >
              CLEAR
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === "" ? (
            <div>
              <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-500 block mb-3">
                Quick Discover
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "CHESS NOT CHECKERS",
                  "450 GSM HOODIE",
                  "THREE APES",
                  "COMPASS & CHAINS",
                  "MW KNIGHT",
                  "RED DRIP",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-surface-200 border border-editorial-border text-neutral-300 hover:text-white hover:border-neutral-500 px-3 py-1.5 text-xs font-mono tracking-wider rounded-sm transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 font-mono text-xs tracking-ultra uppercase">
              No matching pieces found for "{query}".
            </div>
          ) : (
            <div className="divide-y divide-editorial-border">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="py-3 flex items-center justify-between gap-4 cursor-pointer hover:bg-surface-200/60 px-3 rounded-sm transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-14 bg-surface-200 border border-editorial-border rounded-sm overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-white uppercase tracking-tight">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-neutral-400 uppercase mt-0.5">
                        <span
                          className={
                            product.collection === "checkmate"
                              ? "text-checkmate-gold"
                              : "text-emotions-red"
                          }
                        >
                          {product.collection}
                        </span>
                        <span>·</span>
                        <span>{product.gsm}</span>
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-sm font-bold text-white">
                    ${product.price} USD
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
