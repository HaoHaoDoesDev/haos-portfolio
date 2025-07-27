"use client";

import AnimatedContent from "@/components/animated-content";
import AnimatedPinFED from "./_component/fed-2-project";
import AnimatedPinHSBC from "./_component/hsbc-project";
import AnimatedPinOCBC from "./_component/ocbc-project";
import AnimatedPinDelishDash from "./_component/deslishdash-project";
import AnimatedPinLinkVerse from "./_component/linkverse-project";
import AnimatedPinCookBuddy from "./_component/cookboddy-project";

export default function AllProjectsBentoGridLayout() {
  return (
    <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="fade"
      initialOpacity={0.2}
      animateOpacity
      scale={1}
      threshold={0.2}
      delay={0.3}
    >
      <div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-8">
          <AnimatedPinHSBC />
          <AnimatedPinFED />
          <AnimatedPinOCBC />
          <AnimatedPinDelishDash />
          <AnimatedPinLinkVerse />
          <AnimatedPinCookBuddy />
        </div>
      </div>
    </AnimatedContent>
  );
}
