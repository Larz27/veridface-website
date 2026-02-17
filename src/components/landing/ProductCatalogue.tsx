/**
 * COMPONENT: Product Catalogue
 * 
 * Displays the 5 smart lock products in a grid. Click to expand with details and WhatsApp CTA.
 */

import { useState } from "react";
import { X, MessageCircle, Shield, Fingerprint, Wifi, BatteryFull, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";

import s1Flagship from "@/assets/products/s1-flagship.png";
import s2Slim from "@/assets/products/s2-slim.png";
import s3Flat from "@/assets/products/s3-flat.png";
import a1Glass from "@/assets/products/a1-glass.png";
import a2Slide from "@/assets/products/a2-slide.png";

const products = [
  {
    name: "S1 – Flagship",
    price: "$450 BND",
    description: "Complete security with 3D face unlock and an internal viewing screen.",
    expandedDescription: "Our most advanced smart lock. The S1 features cutting-edge 3D facial recognition that works even in low light, a built-in internal viewing screen so you can see who's at the door, and multiple unlock methods including fingerprint, PIN code, app control, and physical key backup. Perfect for homeowners who want the ultimate in smart security.",
    image: s1Flagship,
    badge: "Most Popular",
    features: ["3D Face Recognition", "Internal Viewing Screen", "Fingerprint Unlock", "App Control", "PIN Code", "Physical Key Backup"],
  },
  {
    name: "S2 – Slim",
    price: "$450 BND",
    description: "A narrow, space-saving lock designed for thin-frame doors.",
    expandedDescription: "Engineered for doors with narrow frames where standard smart locks won't fit. The S2 Slim delivers the same powerful smart features — fingerprint, PIN, and app unlock — in a sleek, compact form factor. Ideal for apartments, condos, and modern homes with slim-profile door frames.",
    image: s2Slim,
    features: ["Slim Profile Design", "Fingerprint Unlock", "App Control", "PIN Code", "Physical Key Backup"],
  },
  {
    name: "S3 – Flat",
    price: "$450 BND",
    description: "A smooth, flat-surface lock that includes every smart feature.",
    expandedDescription: "The S3 combines a minimalist flat-surface design with a full suite of smart features. Its flush-mounted panel gives your door a clean, modern look while packing in facial recognition, fingerprint scanning, and remote app control. A great choice for those who want style and substance.",
    image: s3Flat,
    features: ["Flat-Surface Design", "Face Recognition", "Fingerprint Unlock", "App Control", "PIN Code", "Physical Key Backup"],
  },
  {
    name: "A1 – Glass",
    price: "$300 BND",
    description: "A specialized lock that clips onto glass doors without drilling.",
    expandedDescription: "Purpose-built for glass doors, the A1 uses a clip-on mounting system that requires zero drilling — keeping your glass intact and beautiful. It supports fingerprint, PIN code, and app control, making it the perfect solution for offices, storefronts, and homes with glass entryways.",
    image: a1Glass,
    features: ["No-Drill Installation", "Glass Door Compatible", "Fingerprint Unlock", "App Control", "PIN Code"],
  },
  {
    name: "A2 – Slide",
    price: "$250 BND",
    description: "A hook-bolt lock made specifically for sliding door tracks.",
    expandedDescription: "Brunei's first smart lock solution for sliding doors. The A2 features a specialized hook-bolt mechanism designed to work with sliding door tracks — a door type that traditional smart locks simply can't handle. Secure your patio, balcony, or sliding entryway with fingerprint, PIN, and app access.",
    image: a2Slide,
    badge: "New",
    features: ["Sliding Door Compatible", "Hook-Bolt Mechanism", "Fingerprint Unlock", "App Control", "PIN Code"],
  },
];

const WHATSAPP_LINK = "https://wa.me/6737331298";

export function ProductCatalogue() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedProduct = expandedIndex !== null ? products[expandedIndex] : null;

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
          Our <span className="text-accent">Product Range</span>
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          From standard doors to glass and sliding entries — we have a smart lock for every type of door.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => setExpandedIndex(index)}
            className="group bg-card rounded-3xl border border-border/30 p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300 cursor-pointer relative shadow-clay hover:shadow-clay-lg"
          >
            {product.badge && (
              <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-xl shadow-clay-sm">
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 md:h-56 object-contain mb-4"
            />
            <h4 className="text-base md:text-lg font-heading font-bold text-foreground mb-2">
              {product.name}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            <span className="mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View details →
            </span>
          </div>
        ))}
      </div>

      {/* Expanded Product Overlay */}
      {expandedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setExpandedIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] mt-20 mx-4 bg-card rounded-3xl overflow-hidden shadow-clay-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setExpandedIndex(null)}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-foreground/50 hover:bg-foreground/70 text-background px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            >
              <X size={18} />
              Close
            </button>

            <div className="overflow-y-auto max-h-[85vh]">
              {/* Product Image */}
              <div className="bg-muted/30 p-8 flex justify-center">
                <img
                  src={expandedProduct.image}
                  alt={expandedProduct.name}
                  className="max-h-[30vh] object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-8">
                {expandedProduct.badge && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-xl shadow-clay-sm mb-3">
                    {expandedProduct.badge}
                  </span>
                )}

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  {expandedProduct.name}
                </h3>
                <p className="text-xl font-heading font-bold text-accent mb-4">{expandedProduct.price}</p>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  {expandedProduct.expandedDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-heading font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expandedProduct.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-xl shadow-clay-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pb-4">
                  <Button
                    variant="hero"
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#1da851] text-white flex-1 min-h-[48px]"
                    onClick={() =>
                      window.open(
                        `${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi, I'm interested in the ${expandedProduct.name} smart lock. Can I get more details?`)}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle size={20} />
                    Enquire on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setExpandedIndex(null)}
                  >
                    Back to Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
