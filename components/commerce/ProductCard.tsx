"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, CartItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { Eye, ShoppingBag, Check } from "@phosphor-icons/react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, setQuickViewProduct } = useCart();
  const [selectedSize, setSelectedSize] = useState<CartItem["size"]>("L");
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const SIZES: CartItem["size"][] = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const isCheckmate = product.collection === "checkmate";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleQuickView}
      className="group relative flex flex-col bg-surface-200 border border-editorial-border rounded-sm overflow-hidden transition-all duration-300 hover:border-neutral-700 cursor-pointer"
    >
      {/* Visual Container */}
      <div className="relative aspect-[3/4] w-full bg-surface-300 overflow-hidden">
        {/* Primary Garment Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-contain p-4 sm:p-6 transition-all duration-700 ease-out ${
            isHovered && product.lifestyleImage
              ? "opacity-0 scale-95"
              : "opacity-100 scale-100 group-hover:scale-105"
          }`}
        />

        {/* Secondary Lifestyle Image on Hover */}
        {product.lifestyleImage && (
          <Image
            src={product.lifestyleImage}
            alt={`${product.name} lifestyle`}
            fill
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        )}

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <span
            className={`text-[9px] font-mono tracking-ultra uppercase px-2 py-0.5 rounded-sm border ${
              isCheckmate
                ? "bg-void/90 text-checkmate-gold border-checkmate-gold/30"
                : "bg-void/90 text-emotions-red border-emotions-red/30"
            }`}
          >
            {product.collection}
          </span>

          <span className="text-[9px] font-mono tracking-ultra uppercase bg-void/90 text-neutral-300 px-2 py-0.5 rounded-sm border border-neutral-800">
            {product.gsm}
          </span>
        </div>

        {/* Hover Quick Action Layer */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2">
          <button
            onClick={handleQuickView}
            className="flex-1 flex items-center justify-center gap-1.5 bg-void/90 hover:bg-white hover:text-black text-white text-[10px] font-mono tracking-ultra uppercase py-2 px-3 rounded-sm border border-neutral-700 transition-all"
          >
            <Eye size={13} weight="bold" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-surface-200">
        <div>
          {/* Edition / Tagline */}
          <span className="block text-[9px] font-mono tracking-ultra uppercase text-neutral-500 mb-1">
            {product.edition}
          </span>

          {/* Title */}
          <h3 className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-tight line-clamp-1 group-hover:text-neutral-200 transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-sm sm:text-base font-mono font-bold text-white">
              ${product.price} USD
            </span>
            {product.originalPrice && (
              <span className="text-xs font-mono line-through text-neutral-500">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Size Selection & Tactile Add to Cart */}
        <div className="mt-4 pt-3 border-t border-editorial-border">
          {/* Size Pills */}
          <div className="flex items-center gap-1 mb-3">
            <span className="text-[9px] font-mono tracking-wider uppercase text-neutral-500 mr-1">
              Size:
            </span>
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`w-6 h-6 flex items-center justify-center text-[10px] font-mono rounded-sm transition-colors ${
                  selectedSize === size
                    ? "bg-white text-black font-bold"
                    : "bg-surface-100 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-4 text-xs font-mono font-bold tracking-ultra uppercase flex items-center justify-center gap-2 rounded-sm transition-all duration-200 ${
              isAdded
                ? "bg-emerald-500 text-black"
                : isCheckmate
                ? "bg-white text-black hover:bg-checkmate-gold active:scale-[0.98]"
                : "bg-white text-black hover:bg-emotions-red hover:text-white active:scale-[0.98]"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={14} weight="bold" />
                <span>Added ({selectedSize})</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} weight="bold" />
                <span>Add To Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
