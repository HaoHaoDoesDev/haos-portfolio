"use client";
import Navbar from "../_components/navbar/layout";
import FadeContent from "@/components/fade-content";
import ContactHeader from "./_components/contact-header";
import ContactInformation from "./_components/contact-information";
import ContactIcons from "./_components/contact-icons";
import TestimonialContent from "./_components/testimonial-segment/page";

export default function ContactContent() {
  return (
    <main className="relative w-full">
      <section className="relative z-0">
        <div className="fixed w-full z-50 ">
          <Navbar />
        </div>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="space-x-8 pt-8">
            <ContactHeader />
          </div>
          <ContactInformation />
          <TestimonialContent />
          <ContactIcons />
        </FadeContent>
      </section>
    </main>
  );
}
