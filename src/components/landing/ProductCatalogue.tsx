/**
 * COMPONENT: Product Catalogue
 *
 * Displays the front cover of the Veridface product catalogue PDF.
 * Clicking the cover opens the PDF in a new tab.
 */

import { Download } from "lucide-react";
import catalogueCover from "@/assets/catalogue-cover.jpg";

const CATALOGUE_PDF = "/catalogue.pdf";

export function ProductCatalogue() {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Our <span className="text-accent">Pricing & Product Range</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our full collection of smart locks. Tap the cover to view the catalogue.
        </p>
      </div>

      <div className="flex justify-center">
        <a
          href={CATALOGUE_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full max-w-sm rounded-3xl overflow-hidden shadow-clay-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-xl"
          aria-label="Open Veridface product catalogue PDF"
        >
          <img
            src={catalogueCover}
            alt="Veridface product catalogue front cover"
            loading="lazy"
            width={1024}
            height={1536}
            className="w-full h-auto block"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center justify-center gap-2 text-white font-heading font-semibold">
              <Download size={18} />
              <span>View Full Catalogue (PDF)</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
