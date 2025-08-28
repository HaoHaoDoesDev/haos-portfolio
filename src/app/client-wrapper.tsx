"use client";

import React from "react";
import DarkVeil from "@/components/dark-veil";
import TargetCursor from "@/components/target-cursor";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Global Background */}
      <div className="w-full h-screen fixed inset-0 z-0">
        <DarkVeil />
      </div>

      {/* Global Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      {/* All pages */}
      <div className="relative z-10">{children}</div>
    </>
  );
}
