"use client";

import Navbar from "./_components/navbar/layout";
import WelcomeMessage from "./_components/home-page-contents/welcome-message";
import { ProfileCard } from "./_components/home-page-contents/profile-card";
import ContactContent from "./contact-segment/page";
import SplashScreen from "@/components/home-page-opening";
import { useSplashStore } from "@/stores/splash-store";

export default function Home() {
  const { hasSeenSplash, setHasSeenSplash } = useSplashStore();

  return (
    <main className="relative w-full">
      {/* Always render content */}
      <section className="relative z-0">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        {/*Top Section*/}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto place-items-center h-screen pt-12">
          <div>
            <WelcomeMessage />
          </div>
          <div>
            <ProfileCard />
          </div>
        </div>
      </section>

      {/* Splash overlay (only shows if not seen yet) */}
      {!hasSeenSplash && (
        <SplashScreen onFinish={setHasSeenSplash} />
      )}
    </main>
  );
}
