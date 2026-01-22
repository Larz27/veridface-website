/**
 * COMPONENT: Hero Section
 * 
 * The main attention-grabbing section with headline, subheadline, and CTAs.
 * 
 * CUSTOMIZATION:
 * - Update headline and subheadline text
 * - Replace hero image with your product photo
 * - Modify CTA button text and actions
 */

import { Button } from "@/components/ui/button";
import { Shield, Smartphone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-smartlock.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Shield size={16} />
              <span className="text-sm font-medium">Trusted by 500+ homes in Brunei</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
              Unlock the Future of{" "}
              <span className="text-accent">Home Security</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up stagger-2">
              Smart locks designed for Brunei homes and offices. Control access from anywhere,
              anytime — no keys required. Experience security that fits your modern lifestyle.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Button variant="hero" size="xl">
                Request a Demo
                <ArrowRight size={20} />
              </Button>
              <Button variant="hero-outline" size="xl">
                <Smartphone size={20} />
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start animate-fade-up stagger-4">
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Installations</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="SmartLock BN - Modern smart lock installed on a door"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
