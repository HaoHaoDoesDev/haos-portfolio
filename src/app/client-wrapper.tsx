"use client";

import React from "react";
import TargetCursor from "@/components/target-cursor";
import Prism from "@/components/prism-background";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Global Background */}
      <div className="w-full h-screen fixed inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.15}
          height={3.5}
          baseWidth={4.9}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* Global Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      {/* All pages */}
      <div className="relative z-10">{children}</div>
    </>
  );
}
