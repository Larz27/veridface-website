/**
 * COMPONENT: Enterprise Coming Soon
 * 
 * A teaser section for enterprise customers with lead capture via WhatsApp.
 */

import { Button } from "@/components/ui/button";
import { Building2, Users, Shield, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import verifaceLogo from "@/assets/veridface-logo.png";
import { Bazinga } from "@/assets/bazinga-store.mp4";

const WHATSAPP_LINK = "https://wa.me/6737331298?text=Hi%2C%20I'm%20interested%20in%20Veridface%20Enterprise%20solutions.";

const upcomingFeatures = [
  {
    icon: Building2,
    title: "Multi-Site Management",
    description: "Centralized control across all your office locations"
  },
  {
    icon: Users,
    title: "Bulk Access Control",
    description: "Manage hundreds of employees with ease"
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade encryption and audit logs"
  },
  {
    icon: Clock,
    title: "Time & Attendance",
    description: "Integrated workforce management solutions"
  }
];

export function EnterpriseComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-card border-b border-border/50">
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={verifaceLogo}
                alt="Veridface Logo"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="section-container">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Building2 size={18} />
              <span className="text-sm font-medium">Enterprise Solutions</span>
            </div>

            {/* Container Content */}
            <div class="grid grid-cols-[50px_1fr_50px] min-h-screen">
              {/* Left Side: Description */}
              <div className="mx-auto mb-6">
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  We're building powerful enterprise-grade access control solutions for businesses of all sizes.
                  Be the first to know when we launch.
                </p>
              </div>

              {/* Right Side: Video */}
              <div className="mb-8">
                <iframe
                  src={Bazinga}
                  title="Bazinga Store Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="enterprise-video"
                ></iframe>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Bazinga Store
                </h1>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get Early Access
            </h2>
            <p className="text-muted-foreground mb-8">
              Register your interest and we'll notify you as soon as our enterprise solutions are available.
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              className="gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact Us on WhatsApp
            </Button>
          </div>
        </div>
      </main >

      {/* Footer */}
      < footer className="py-8 border-t border-border/50" >
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Veridface. All rights reserved.
          </p>
        </div>
      </footer >
    </div >
  );
}
