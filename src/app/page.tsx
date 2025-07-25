"use client";

import Navbar from "./_components/navbar/layout";
import WelcomeMessage from "./_components/welcome-message";
import DarkVeil from "@/components/dark-veil";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/*Background*/}
      <div className="w-full h-screen fixed inset-0">
        <DarkVeil />
      </div>
      {/*Main Section*/}
      <section className="relative z-10">
        <Navbar />
        <div className="grid grid-cols-2 max-w-5xl mx-auto place-items-center h-[calc(100vh-4rem)]">
          <WelcomeMessage />
        </div>
      </section>
    </main>
  );
}
