/**
 * COMPONENT: Testimonials/Social Proof Section
 * 
 * Displays customer testimonials and trust indicators with auto-sliding carousel.
 */

import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Testiomonial from "@/assets/journey/testimonial.mp4";

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
  {
    name: "Azizah Hassan",
    role: "Shop Owner, Kuala Belait",
    content: "Running a retail store means different staff coming at different hours. Veridface's smart lock lets me set specific access times for each employee. Security has never been easier!",
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="feature-card relative h-full">
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
                  <div className="flex items-center gap-4 mt-auto">
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section >

        {/* {Video Testimonial} */}
  <div className="section-container">
    <div className="relative w-full h-screen overflow-hidden mb-8">
      <iframe
        video src={Testiomonial}
        title="Bazinga Store Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen;"
        allowfullscreen
        className="enterprise-video"
      ></iframe>
    </div>
  </div>
  );
}
