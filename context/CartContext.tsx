"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem, BrandState } from "@/types";
import { PRODUCTS } from "@/lib/products";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, size?: CartItem["size"], qty?: number) => void;
  removeFromCart: (productId: string, size: CartItem["size"]) => void;
  updateQuantity: (productId: string, size: CartItem["size"], delta: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalCount: number;
  activeState: BrandState;
  setActiveState: (state: BrandState) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeState, setActiveState] = useState<BrandState>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Initialize with 1 starter item so visitor immediately sees the interactive cart richness
  useEffect(() => {
    const starterProduct = PRODUCTS.find((p) => p.id === "cm-02") || PRODUCTS[0];
    setItems([
      {
        product: starterProduct,
        size: "L",
        quantity: 1,
      },
    ]);
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (
    product: Product,
    size: CartItem["size"] = "L",
    qty: number = 1
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      }
      return [...prev, { product, size, quantity: qty }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string, size: CartItem["size"]) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    size: CartItem["size"],
    delta: number
  ) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalCount,
        activeState,
        setActiveState,
        quickViewProduct,
        setQuickViewProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
