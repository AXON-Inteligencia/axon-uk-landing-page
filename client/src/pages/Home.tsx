import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { GapSection } from "@/components/sections/GapSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

/**
 * Home Page - AXON UK Landing Page
 * Staff Engineer Level: Modular architecture, composition-based design, performance optimized
 * 
 * Architecture:
 * - Header: Sticky navigation with scroll-aware styling
 * - HeroSection: Hero with data visualization and trust indicators
 * - GapSection: Problem/solution positioning
 * - ServicesSection: Three core services with interactive cards
 * - PricingSection: Pricing tiers with comparison
 * - CTASection: Final call-to-action
 * - Footer: Links and branding
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <GapSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactFormSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
