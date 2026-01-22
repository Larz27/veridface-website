/**
 * COMPONENT: Pricing/CTA Section
 * 
 * Clear call-to-action section to drive conversions.
 * 
 * CUSTOMIZATION:
 * - Update pricing information or remove if not applicable
 * - Modify CTA buttons and their actions
 * - Change the promotional messaging
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";

const ctaFeatures = [
  "Free on-site consultation",
  "Professional installation included",
  "1-year warranty on all products",
  "24/7 customer support",
  "30-day money-back guarantee",
];

export function PricingCTASection() {
  return (
    <section id="pricing" className="section-wrapper bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Upgrade Your Security?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join hundreds of Brunei homeowners and businesses who have already made the switch to smart security.
            Get started with a free consultation today.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {ctaFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                <Check size={18} className="text-accent" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="bg-accent text-accent-foreground">
              Request Free Demo
              <ArrowRight size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Phone size={20} />
              Call: +673 XXX XXXX
            </Button>
          </div>

          {/* Alternative Contact */}
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            <Mail size={16} />
            Or email us at{" "}
            <a href="mailto:hello@smartlockbn.com" className="text-accent hover:underline">
              hello@smartlockbn.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
