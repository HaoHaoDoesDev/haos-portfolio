"use client";

import AnimatedContent from "@/components/animated-content";
import AnimatedPinFED from "./_component/fed-2-project";
import AnimatedPinHSBC from "./_component/hsbc-project";
import AnimatedPinOCBC from "./_component/ocbc-project";
import AnimatedPinDelishDash from "./_component/deslishdash-project";
import FadeContent from "@/components/fade-content";

export default function ApplicationsBentoGridLayout() {
  return (
    <main>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-8">
            <AnimatedPinHSBC />
            <AnimatedPinFED />
            <AnimatedPinOCBC />
            <AnimatedPinDelishDash />
          </div>
        </div>
      </FadeContent>
    </main>
  );
}
