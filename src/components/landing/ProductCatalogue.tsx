/**
 * COMPONENT: Product Catalogue
 * 
 * Displays the 5 smart lock products in a clean grid layout.
 */

import s1Flagship from "@/assets/products/s1-flagship.png";
import s2Slim from "@/assets/products/s2-slim.png";
import s3Flat from "@/assets/products/s3-flat.png";
import a1Glass from "@/assets/products/a1-glass.png";
import a2Slide from "@/assets/products/a2-slide.png";

const products = [
  {
    name: "S1 – Flagship",
    description: "Complete security with 3D face unlock and an internal viewing screen.",
    image: s1Flagship,
    badge: "Most Popular",
  },
  {
    name: "S2 – Slim",
    description: "A narrow, space-saving lock designed for thin-frame doors.",
    image: s2Slim,
  },
  {
    name: "S3 – Flat",
    description: "A smooth, flat-surface lock that includes every smart feature.",
    image: s3Flat,
  },
  {
    name: "A1 – Glass",
    description: "A specialized lock that clips onto glass doors without drilling.",
    image: a1Glass,
  },
  {
    name: "A2 – Slide",
    description: "A hook-bolt lock made specifically for sliding door tracks.",
    image: a2Slide,
    badge: "New",
  },
];

const WHATSAPP_LINK = "https://wa.me/6737331298";

export function ProductCatalogue() {
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            className="group bg-card rounded-xl border border-border/50 p-4 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
          >
            {product.badge && (
              <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 md:h-44 object-contain mb-3"
            />
            <h4 className="text-sm md:text-base font-heading font-bold text-foreground mb-1">
              {product.name}
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            <span className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Enquire →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
