/**
 * COMPONENT: Footer
 * 
 * Contains contact info, social links, and legal links.
 * 
 * CUSTOMIZATION:
 * - Update contact information
 * - Add your actual social media URLs
 * - Modify footer links as needed
 */

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Warranty Info", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">S</span>
              </div>
              <span className="font-heading font-bold text-xl">
                SmartLock<span className="text-accent">BN</span>
              </span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Brunei's trusted provider of smart home security solutions. 
              Making homes and offices safer, one lock at a time.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Unit 123, Gadong Commercial Centre,<br />
                  Bandar Seri Begawan, Brunei
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+673XXXXXXX" className="text-background/70 hover:text-accent transition-colors">
                  +673 XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:hello@smartlockbn.com" className="text-background/70 hover:text-accent transition-colors">
                  hello@smartlockbn.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} SmartLock BN. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Made with ❤️ in Brunei Darussalam
          </p>
        </div>
      </div>
    </footer>
  );
}
