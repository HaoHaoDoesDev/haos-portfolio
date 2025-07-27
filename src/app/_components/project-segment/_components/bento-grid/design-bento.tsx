"use client";

import AnimatedContent from "@/components/animated-content";
import AnimatedPinDelishDash from "./_component/deslishdash-project";
import AnimatedPinLinkVerse from "./_component/linkverse-project";

export default function DesignBentoGridLayout() {
  return (
    <main>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="fade"
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0}
      >
        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            <AnimatedPinDelishDash />
            <AnimatedPinLinkVerse />
          </div>
        </div>
      </AnimatedContent>
    </main>
  );
}
