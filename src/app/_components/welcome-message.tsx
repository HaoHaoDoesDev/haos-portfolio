"use client";
import BlurText from "@/components/blur-text";
import ScrambledText from "@/components/scrambled-text";
import GradientText from "@/components/gradient-text";
import RotatingText from "@/components/rotating-text";

export default function WelcomeMessage() {
  return (
    <main className="grid grid-cols-1 text-white text-4xl font-code">
      <div className="flex">
        I’m
        <BlurText
          text=" JunHao"
          delay={300}
          animateBy="words"
          direction="top"
          className=""
        />
        ,
      </div>
      <div className="flex">
        <div>and I bring</div>
        <div className="font-funnel">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="pl-3"
          >
            ideas
          </GradientText>
        </div>
      </div>
      <div className="">
        <div>to life with</div>
        <div className="font-semibold animate-colorCycle">
          <RotatingText
            texts={[
              "Good Quality Codes",
              "Thoughtful Designs",
              "User-First Mindset",
            ]}
            mainClassName="text-White overflow-hidden"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
        </div>
      </div>
    </main>
  );
}
