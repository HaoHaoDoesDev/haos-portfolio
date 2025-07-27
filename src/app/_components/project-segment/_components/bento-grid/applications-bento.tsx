"use client";

import AnimatedContent from "@/components/animated-content";
import AnimatedPinFED from "./_component/fed-2-project";
import AnimatedPinHSBC from "./_component/hsbc-project";
import AnimatedPinOCBC from "./_component/ocbc-project";
import AnimatedPinDelishDash from "./_component/deslishdash-project";

export default function ApplicationsBentoGridLayout() {
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-8">
            <AnimatedPinHSBC />
            <AnimatedPinFED />
            <AnimatedPinOCBC />
            <AnimatedPinDelishDash />
          </div>
        </div>
      </AnimatedContent>
    </main>
  );
}
