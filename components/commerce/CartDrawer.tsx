"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  X,
  Plus,
  Minus,
  Trash,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
} from "@phosphor-icons/react";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalCount,
  } = useCart();

  const freeShippingThreshold = 150;
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Slide-out Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface-300 border-l border-editorial-border flex flex-col justify-between shadow-2xl text-white">
          {/* Header */}
          <div className="p-6 border-b border-editorial-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag size={18} weight="bold" />
              <h2 className="font-heading text-base font-bold uppercase tracking-tight">
                Vault Cart ({totalCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X size={20} weight="bold" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="bg-surface-200 p-4 border-b border-editorial-border">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-ultra uppercase mb-2">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Truck size={14} weight="bold" />
                {remainingForFreeShipping === 0 ? (
                  <span className="text-emerald-400 font-bold">
                    Free Worldwide Shipping Unlocked
                  </span>
                ) : (
                  <span>
                    Add ${remainingForFreeShipping} More For Free Shipping
                  </span>
                )}
              </span>
              <span className="font-bold text-white">{Math.round(progress)}%</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-1 bg-surface-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ease-out ${
                  remainingForFreeShipping === 0 ? "bg-emerald-400" : "bg-white"
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-editorial-border">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-12 h-12 rounded-sm border border-dashed border-neutral-700 flex items-center justify-center text-neutral-500 mb-4">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase mb-2">
                  Your Vault Is Empty
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-6 max-w-xs">
                  Select your state and claim garments from Drop 001.
                </p>
                <button
                  onClick={closeCart}
                  className="bg-white text-black px-6 py-2.5 text-xs font-mono font-bold tracking-ultra uppercase rounded-sm hover:bg-neutral-200 transition-colors"
                >
                  Browse Drop 001
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="py-4 flex gap-4 items-start"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 bg-surface-200 border border-editorial-border rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1 filter contrast-125"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-tight text-white line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.size)
                        }
                        className="text-neutral-500 hover:text-emotions-red transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash size={14} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                      <span>Size: {item.size}</span>
                      <span>·</span>
                      <span
                        className={
                          item.product.collection === "checkmate"
                            ? "text-checkmate-gold"
                            : "text-emotions-red"
                        }
                      >
                        {item.product.collection}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Modifier */}
                      <div className="flex items-center border border-editorial-border rounded-sm bg-surface-200 text-xs font-mono">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, -1)
                          }
                          className="px-2 py-1 text-neutral-400 hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-2 py-1 text-white font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, 1)
                          }
                          className="px-2 py-1 text-neutral-400 hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="font-mono text-xs font-bold text-white">
                        ${item.product.price * item.quantity} USD
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Area */}
          {items.length > 0 && (
            <div className="p-6 border-t border-editorial-border bg-surface-200">
              <div className="flex items-center justify-between mb-2 text-xs font-mono tracking-ultra uppercase text-neutral-400">
                <span>Subtotal</span>
                <span className="font-bold text-white text-base font-mono">
                  ${subtotal} USD
                </span>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono tracking-ultra uppercase text-neutral-500 mb-4">
                <span>Taxes & Priority Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  alert(
                    "Checkout Gateway Initiated: In a live production environment, this dispatches securely to Shopify Plus or Stripe Checkout."
                  );
                }}
                className="w-full bg-white hover:bg-neutral-200 text-black py-3.5 px-4 text-xs font-mono font-bold tracking-ultra uppercase rounded-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
              >
                <span>Proceed To Checkout</span>
                <ArrowRight size={14} weight="bold" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-mono tracking-ultra text-neutral-500 uppercase">
                <ShieldCheck size={14} weight="bold" />
                <span>Encrypted Direct Terminal Fulfillment</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
