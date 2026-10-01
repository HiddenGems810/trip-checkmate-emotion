"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types";
import { X, Check, ShoppingBag, Ruler, Sparkle } from "@phosphor-icons/react";

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<CartItem["size"]>("L");
  const [selectedView, setSelectedView] = useState<"garment" | "lifestyle">("garment");
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const SIZES: CartItem["size"][] = ["S", "M", "L", "XL", "XXL"];
  const isCheckmate = quickViewProduct.collection === "checkmate";

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const currentImage =
    selectedView === "lifestyle" && quickViewProduct.lifestyleImage
      ? quickViewProduct.lifestyleImage
      : quickViewProduct.image;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-surface-300 border border-editorial-border rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-sm bg-void/80 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} weight="bold" />
        </button>

        {/* Left: Product Images with Angle Toggle */}
        <div className="md:w-1/2 bg-surface-200 p-6 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-editorial-border">
          <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface-300">
            <Image
              src={currentImage}
              alt={quickViewProduct.name}
              fill
              className={`filter contrast-115 ${
                selectedView === "garment" ? "object-contain p-4" : "object-cover"
              }`}
            />
          </div>

          {/* View Angle Switcher */}
          {quickViewProduct.lifestyleImage && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <button
                onClick={() => setSelectedView("garment")}
                className={`px-3 py-1 text-[10px] font-mono tracking-ultra uppercase rounded-sm border transition-colors ${
                  selectedView === "garment"
                    ? "bg-white text-black font-bold border-white"
                    : "bg-surface-100 text-neutral-400 border-neutral-800 hover:text-white"
                }`}
              >
                Studio Flatlay
              </button>
              <button
                onClick={() => setSelectedView("lifestyle")}
                className={`px-3 py-1 text-[10px] font-mono tracking-ultra uppercase rounded-sm border transition-colors ${
                  selectedView === "lifestyle"
                    ? "bg-white text-black font-bold border-white"
                    : "bg-surface-100 text-neutral-400 border-neutral-800 hover:text-white"
                }`}
              >
                Campaign On-Model
              </button>
            </div>
          )}
        </div>

        {/* Right: Garment Specs & Ordering */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-surface-300">
          <div>
            {/* Collection & Fabric Weights */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-[9px] font-mono tracking-ultra uppercase px-2 py-0.5 rounded-sm border ${
                  isCheckmate
                    ? "bg-void text-checkmate-gold border-checkmate-gold/30"
                    : "bg-void text-emotions-red border-emotions-red/30"
                }`}
              >
                {quickViewProduct.collection}
              </span>
              <span className="text-[9px] font-mono tracking-ultra uppercase bg-surface-100 text-neutral-300 px-2 py-0.5 rounded-sm border border-neutral-800">
                {quickViewProduct.gsm}
              </span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">
              {quickViewProduct.name}
            </h2>

            <div className="text-xl font-mono font-bold text-white mb-4">
              ${quickViewProduct.price} USD
            </div>

            <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed mb-6">
              {quickViewProduct.description}
            </p>

            {/* Spec Details List */}
            <div className="border-t border-editorial-border py-4 mb-6">
              <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 block mb-2">
                Laboratory Specifications:
              </span>
              <ul className="space-y-1.5 text-xs font-mono text-neutral-300">
                {quickViewProduct.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-500">—</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Size Selector & Add to Cart */}
          <div className="border-t border-editorial-border pt-6">
            <div className="flex items-center justify-between mb-3 text-xs font-mono tracking-ultra uppercase text-neutral-400">
              <span>Select Size:</span>
              <span className="flex items-center gap-1 text-neutral-400">
                <Ruler size={13} />
                <span>Boxy True To Size Fit</span>
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2 mb-6">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-xs font-mono font-bold rounded-sm border transition-colors ${
                    selectedSize === size
                      ? "bg-white text-black border-white"
                      : "bg-surface-200 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-3.5 px-6 text-xs font-mono font-bold tracking-ultra uppercase rounded-sm flex items-center justify-center gap-2 transition-all ${
                isAdded
                  ? "bg-emerald-500 text-black"
                  : isCheckmate
                  ? "bg-white text-black hover:bg-checkmate-gold active:scale-[0.98]"
                  : "bg-white text-black hover:bg-emotions-red hover:text-white active:scale-[0.98]"
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={16} weight="bold" />
                  <span>Added To Vault ({selectedSize})</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={16} weight="bold" />
                  <span>Claim Piece ({selectedSize})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
