"use client";

import Navbar from "./_components/navbar/layout";
import VantaFogBackground from "@/components/background-effect";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <VantaFogBackground />

      <section className="relative z-10">
        <Navbar />
      </section>
    </main>
  );
}
