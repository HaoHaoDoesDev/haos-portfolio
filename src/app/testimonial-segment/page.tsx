"use client";
import { Button } from "@/components/ui/button";
import { AnimatedTestimonials } from "@/components/animated-testimonials";

export default function TestimonialContent() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "James Anderson",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "James Anderson",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <main className="relative w-full mb-8 pt-8 mt-8">
      <div className="flex text-white text-bold justify-center font-funnel max-w-xl mx-auto text-4xl ">
        Testimonials
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </main>
  );
}
