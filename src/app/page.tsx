"use client";

import Navbar from "./_components/navbar/layout";
import WelcomeMessage from "./_components/about-segment/welcome-message";
import DarkVeil from "@/components/dark-veil";
import TargetCursor from "@/components/target-cursor";
import { ProfileCard } from "./_components/about-segment/profile-card";
import ProjectContent from "./_components/project-segment/layout";
import ContactContent from "./_components/contact-segment/layout";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-scroll mb-8">
      {/*Background*/}
      <div className="w-full h-screen fixed inset-0">
        <DarkVeil />
      </div>
      {/*Main Section*/}
      <section className="relative z-10">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        {/*Top Section*/}
        <div className="grid grid-cols-2 max-w-5xl mx-auto place-items-center h-screen pt-12">
          <div>
            <WelcomeMessage />
          </div>
          <div>
            <ProfileCard />
          </div>
        </div>
        <div className="max-w-5xl mx-auto pt-12">
          <ProjectContent />
          <div className="pt-12">
            <ContactContent />
          </div>
        </div>
      </section>
    </main>
  );
}
