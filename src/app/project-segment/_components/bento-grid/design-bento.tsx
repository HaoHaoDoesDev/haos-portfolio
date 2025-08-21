"use client";

import AnimatedPinDelishDash from "./_component/deslishdash-project";
import AnimatedPinLinkVerse from "./_component/linkverse-project";
import FadeContent from "@/components/fade-content";

export default function DesignBentoGridLayout() {
  return (
    <main>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            <AnimatedPinDelishDash />
            <AnimatedPinLinkVerse />
          </div>
        </div>
      </FadeContent>
    </main>
  );
}
