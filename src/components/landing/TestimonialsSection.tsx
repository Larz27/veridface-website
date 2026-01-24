/**
 * COMPONENT: Testimonials/Social Proof Section
 * 
 * Displays customer testimonials and trust indicators.
 */

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Haji Ahmad",
    role: "Homeowner, Kiarong",
    content: "We installed Veridface's smart lock at our family home last month. My wife and I can monitor when our children come home from school. It's given us incredible peace of mind.",
    rating: 5,
  },
  {
    name: "Sarah Lim",
    role: "Office Manager, Bengkurong",
    content: "Managing keys for 30 employees was a nightmare. Veridface's smart lock simplified everything. Now I can add or remove access in seconds from my phone.",
    rating: 5,
  },
  {
    name: "Pg. Mohammad",
    role: "Property Investor, Salambigar",
    content: "I manage 5 rental properties. Veridface's smart lock lets me give temporary access to tenants and contractors without ever meeting them in person. Game changer!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-wrapper">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Trusted by <span className="text-accent">Bruneians</span>
          </h2>
          <p className="section-subheading mx-auto">
            See what our customers across Brunei are saying about Veridface.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="feature-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-accent/20" size={40} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-heading font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
