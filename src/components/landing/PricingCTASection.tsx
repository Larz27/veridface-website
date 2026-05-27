/**
 * COMPONENT: Pricing/CTA Section
 *
 * Clear call-to-action section to drive conversions.
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import { ProductCatalogue } from "./ProductCatalogue";

const ctaFeatures = [
  "Free on-site consultation",
  "Professional installation included",
  "1-year warranty on all products",
  "24/7 customer support",
];
const WHATSAPP_LINK = "https://wa.me/6737331298";

export function PricingCTASection() {
  return (
    <section id="pricing" className="section-wrapper bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Product Catalogue */}
          <ProductCatalogue />

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Upgrade Your Security?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join Brunei homeowners and businesses who have already made the switch to smart security.
              Get started with a free consultation today.
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {ctaFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground">
                <Check size={18} className="text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
              Request Free Demo
              <ArrowRight size={20} />
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
              <Phone size={20} />
              Call: +673 7331298
            </Button>
          </div>

          {/* Alternative Contact */}
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Mail size={16} />
            Or email us at{" "}
            <a href="mailto:yazid@veridface.com" className="text-primary hover:underline">
              yazid@veridface.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
