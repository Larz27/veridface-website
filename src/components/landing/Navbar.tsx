/**
 * COMPONENT: Navigation Bar
 * 
 * A sticky header with logo, navigation links, and CTA button.
 */

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import verifaceLogo from "@/assets/veridface-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const WHATSAPP_LINK = "https://wa.me/6737331298";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isEnterprise = location.pathname === "/enterprise";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src={verifaceLogo} 
              alt="Veridface Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Home/Enterprise Toggle */}
            <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/50">
              <button
                onClick={() => navigate("/")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isEnterprise 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigate("/enterprise")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isEnterprise 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Enterprise
              </button>
            </div>
            
            <Button 
              variant="nav" 
              size="lg"
              onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Mobile Toggle */}
              <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/50 w-fit">
                <button
                  onClick={() => {
                    navigate("/");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    !isEnterprise 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    navigate("/enterprise");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isEnterprise 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Enterprise
                </button>
              </div>
              
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="nav" 
                size="lg" 
                className="mt-2"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
