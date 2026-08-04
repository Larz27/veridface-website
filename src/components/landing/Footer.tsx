/**
 * COMPONENT: Footer
 * 
 * Contains contact info, social links, and legal links.
 */

import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import verifaceLogo from "@/assets/veridface-logo.png";
const quickLinks = [{
  name: "Features",
  href: "#features"
}, {
  name: "Pricing",
  href: "#pricing"
}, {
  name: "FAQ",
  href: "#faq"
}];
export function Footer() {
  return <footer id="contact" className="text-background py-16 bg-[#FFA500]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={verifaceLogo} alt="Veridface Logo" className="h-12 w-auto" />
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">

Brunei's trusted provider of smart home security solutions. Making homes and offices safer, one lock at a time.</p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://instagram.com/veridface.home" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  iCentre, Simpang 32-37,<br />
                  Kg Anggerek Desa, Jalan Berakas BB3713,<br />
                  Bandar Seri Begawan,<br />
                  Negara Brunei Darussalam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-white flex-shrink-0" />
                <a href="https://wa.me/6737331298" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                  +673 7331298
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-white flex-shrink-0" />
                <a href="mailto:yazid@veridface.com" className="text-background/70 hover:text-primary transition-colors">
                  yazid@veridface.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Veridface. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>;
}