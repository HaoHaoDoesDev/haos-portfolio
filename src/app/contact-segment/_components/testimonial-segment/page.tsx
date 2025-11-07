"use client";
import { Button } from "@/components/ui/button";
import { AnimatedTestimonials } from "@/components/animated-testimonials";

export default function TestimonialContent() {
  const testimonials = [
    {
      quote:
        "Supervising Junhao was a pleasure. He started with little experience but quickly became a confident developer through his determination and curiosity. He showed strong independence, professionalism, and teamwork throughout the internship. Any team would be fortunate to have him.",
      name: "Julien Heng",
      designation: "Software Engineer at Amber Creative",
      src: "/assets/testimonial-pic-1.jpg",
    },
  ];
  return (
    <main className="relative w-full mb-8 pt-8 mt-8">
      <div className="pt-20 pb-8">
        <div className="font-funnel text-center text-gray-400">
          WORDS FROM MY PAST COLLEAGUES
        </div>
        <div className="font-sans text-center text-5xl text-white font-extrabold">
          Testimonials
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </main>
  );
}
