/*
 * Home — Moments by Hong
 * Assembles all page sections in order:
 * Navbar → Hero → Portfolio → About → Pricing → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F4]">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
