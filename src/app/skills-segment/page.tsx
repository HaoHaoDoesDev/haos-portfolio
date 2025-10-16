"use client";
import Navbar from "../_components/navbar/layout";
import FadeContent from "@/components/fade-content";
import SkillsHeader from "./_components/skills-header";
import SoftSkills from "./_components/soft-skills";
import TechnicalSkills from "./_components/technilcal-skills/technical-skills-segment";
import SkillBanner from "./_components/skills-banner";
import ContactIcons from "../contact-segment/_components/contact-icons";

export default function SkillSegment() {
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
          <div>
            <SkillsHeader />
            <div className="flex items-center justify-center mx-auto">
              <SkillBanner />
            </div>
            <TechnicalSkills />
            <SoftSkills />
            <ContactIcons />
          </div>
        </FadeContent>
      </section>
    </main>
  );
}
