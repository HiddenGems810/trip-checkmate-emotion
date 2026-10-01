"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  MagnifyingGlass,
  ShoppingBag,
  List,
} from "@phosphor-icons/react";

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export function Header({ onOpenMobileMenu, onOpenSearch }: HeaderProps) {
  const { totalCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void border-b border-editorial-border shadow-2xl py-3 md:py-3.5"
          : "bg-gradient-to-b from-void/90 via-void/40 to-transparent py-4 md:py-5"
      }`}
    >
      {/* Center Brand Monogram Logo — Anchored to Exact 50% Screen Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
        <Link
          href="/"
          className="relative block w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[84px] lg:h-[84px] group transition-transform duration-300 hover:scale-105"
          aria-label="CHECKMATE // EMOTIONS Home"
        >
          <Image
            src="/assets/logo/logo-cropped.png"
            alt="Brand Monogram Logo"
            fill
            priority
            className="object-contain filter brightness-100 contrast-125 drop-shadow-[0_2px_16px_rgba(255,255,255,0.18)]"
          />
        </Link>
      </div>

      <div className="max-w-[1720px] mx-auto px-6 md:px-12 flex items-center justify-between min-h-[56px] md:min-h-[64px]">
        {/* Left Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-ultra uppercase text-neutral-300 z-10">
          <Link
            href="#drop"
            className="hover:text-white transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            href="#collections"
            className="hover:text-white transition-colors duration-200"
          >
            Collections
          </Link>
          <Link
            href="#archive"
            className="hover:text-white transition-colors duration-200"
          >
            Archive
          </Link>
          <Link
            href="#manifesto"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </nav>

        {/* Right Utility Navigation */}
        <div className="flex items-center gap-6 md:gap-8 text-[11px] font-mono tracking-ultra uppercase text-neutral-300 z-10 ml-auto">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            aria-label="Search collection"
          >
            <MagnifyingGlass size={16} weight="bold" />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            onClick={openCart}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200 relative group"
            aria-label={`Open shopping cart with ${totalCount} items`}
          >
            <ShoppingBag size={17} weight="bold" />
            <span>Cart ({totalCount})</span>
            {totalCount > 0 && (
              <span className="w-1.5 h-1.5 rounded-full bg-emotions-red inline-block animate-pulse" />
            )}
          </button>

          {/* Hamburger Menu toggle */}
          <button
            onClick={onOpenMobileMenu}
            className="p-1 hover:text-white transition-colors duration-200"
            aria-label="Open menu"
          >
            <List size={22} weight="bold" />
          </button>
        </div>
      </div>
    </header>
  );
}
