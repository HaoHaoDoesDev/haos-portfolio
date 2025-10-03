"use client";

import React from "react";
import TargetCursor from "@/components/target-cursor";
import Prism from "@/components/prism-background";
import LightRays from "@/components/background";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Global Background */}
      <div className="w-full h-screen fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Global Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      {/* All pages */}
      <div className="relative z-10">{children}</div>
    </>
  );
}
