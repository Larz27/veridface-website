/**
 * LANDING PAGE: SmartLock BN
 * 
 * A modular, conversion-optimized landing page for a smart lock startup in Brunei.
 * Each section is a separate component that can be independently edited.
 * 
 * STRUCTURE:
 * 1. Navbar - Sticky navigation with logo and CTA
 * 2. HeroSection - Main value proposition and CTAs
 * 3. ProblemSolutionSection - Traditional vs Smart comparison
 * 4. FeaturesSection - 6 key product features
 * 5. HowItWorksSection - 4-step onboarding process
 * 6. BenefitsSection - Benefits for homeowners and offices
 * 7. TestimonialsSection - Customer social proof
 * 8. PricingCTASection - Main conversion section
 * 9. FAQSection - Common questions answered
 * 10. Footer - Contact and legal info
 */

import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingCTASection } from "@/components/landing/PricingCTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* COMPONENT: Navigation Bar */}
      <Navbar />
      
      {/* COMPONENT: Hero Section */}
      <HeroSection />
      
      {/* COMPONENT: Problem/Solution Section */}
      <ProblemSolutionSection />
      
      {/* COMPONENT: Features Section */}
      <FeaturesSection />
      
      {/* COMPONENT: How It Works Section */}
      <HowItWorksSection />
      
      {/* COMPONENT: Benefits Section */}
      <BenefitsSection />
      
      {/* COMPONENT: Testimonials Section */}
      <TestimonialsSection />
      
      {/* COMPONENT: Pricing/CTA Section */}
      <PricingCTASection />
      
      {/* COMPONENT: FAQ Section */}
      <FAQSection />
      
      {/* COMPONENT: Footer */}
      <Footer />
    </div>
  );
};

export default Index;
