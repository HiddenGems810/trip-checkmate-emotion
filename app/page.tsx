"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/navigation/Header";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { SearchModal } from "@/components/navigation/SearchModal";
import { ChooseYourStateHero } from "@/components/hero/ChooseYourStateHero";
import { StateController } from "@/components/state-filter/StateController";
import { DropOverview } from "@/components/drop/DropOverview";
import { LifestyleGallery } from "@/components/editorial/LifestyleGallery";
import { ProductShowcase } from "@/components/commerce/ProductShowcase";
import { BrandManifesto } from "@/components/editorial/BrandManifesto";
import { DualityCampaign } from "@/components/campaign/DualityCampaign";
import { Craftsmanship } from "@/components/campaign/Craftsmanship";
import { DropArchive } from "@/components/archive/DropArchive";
import { ArchitecturalFooter } from "@/components/footer/ArchitecturalFooter";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { QuickViewModal } from "@/components/commerce/QuickViewModal";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <main className="relative min-h-screen bg-void text-editorial-white selection:bg-emotions-red selection:text-white">
        {/* Film grain texture overlay */}
        <div className="fixed inset-0 film-grain pointer-events-none z-10 opacity-60" />

        {/* 1. Minimal Navigation Bar */}
        <Header
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* 2. Full-Screen Hero: CHOOSE YOUR STATE */}
        <ChooseYourStateHero />

        {/* 3. CHECKMATE vs EMOTIONS Collection Entry & State Filter */}
        <StateController />

        {/* 4. Latest Drop / Drop 001 */}
        <DropOverview />

        {/* 5. Large Editorial Lifestyle Photography */}
        <LifestyleGallery />

        {/* 6. Featured Product Section & Commerce Grid */}
        <ProductShowcase />

        {/* 7. Oversized Brand Manifesto Typography */}
        <BrandManifesto />

        {/* 8. Collection Campaign Section: The Two Philosophies */}
        <DualityCampaign />

        {/* 9. Product / Garment Craftsmanship Showcase */}
        <Craftsmanship />

        {/* 10. Brand Archive / Drop History */}
        <DropArchive />

        {/* 11. Large Minimal Footer */}
        <ArchitecturalFooter />

        {/* Commerce Slide-Over Cart Drawer */}
        <CartDrawer />

        {/* Garment Quick View Modal */}
        <QuickViewModal />

        {/* Full-Screen Mobile Navigation Overlay */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Instant Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </main>
    </CartProvider>
  );
}
