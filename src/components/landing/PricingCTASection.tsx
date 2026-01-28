/**
 * COMPONENT: Pricing/CTA Section
 * 
 * Clear call-to-action section to drive conversions.
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import promoMain from "@/assets/promo-main.png";
import promo400 from "@/assets/promo-400.png";
import promo400_2 from "@/assets/promo-400-2.png";
import promo250 from "@/assets/promo-250.png";
import promo200 from "@/assets/promo-200.png";

const promoImages = [
  { src: promoMain, alt: "Main Product - B$430 Smart Lock with Face Recognition" },
  { src: promo400, alt: "B$400 Smart Lock - Biometric Unlock" },
  { src: promo400_2, alt: "B$400 Smart Lock - Face Recognition Model" },
  { src: promo250, alt: "B$300 Glass Door Smart Lock" },
  { src: promo200, alt: "B$250 Smart Lock" },
];

const ctaFeatures = ["Free on-site consultation", "Professional installation included", "1-year warranty on all products", "24/7 customer support"];
const WHATSAPP_LINK = "https://wa.me/6737331298";
export function PricingCTASection() {
  return <section id="pricing" className="section-wrapper bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Upgrade Your Security?
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join Brunei homeowners and businesses who have already made the switch to smart security.
              Get started with a free consultation today.
            </p>
          </div>

          {/* Promo Images Carousel */}
          <div className="flex justify-center mb-10">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full max-w-lg"
            >
              <CarouselContent>
                {promoImages.map((image, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-w-md w-full rounded-2xl shadow-xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {ctaFeatures.map((feature, index) => <div key={index} className="flex items-center gap-2 text-foreground">
                <Check size={18} className="text-primary" />
                <span className="text-sm">{feature}</span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
              Request Free Demo
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="xl" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
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
    </section>;
}