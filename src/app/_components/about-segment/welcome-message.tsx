"use client";
import BlurText from "@/components/blur-text";
import ScrambledText from "@/components/scrambled-text";
import GradientText from "@/components/gradient-text";
import RotatingText from "@/components/rotating-text";
import { Icon } from "@iconify/react";
import { HoverBorderGradient } from "@/components/border-gradient";

export default function WelcomeMessage() {
  return (
    <main className="grid grid-cols-1 text-white text-4xl font-code">
      <div className="flex">
        Hello I’m
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
      <div className="pb-4">
        <div>to life with</div>
        <div className="font-code animate-colorCycle">
          <RotatingText
            texts={[
              "Good Quality Codes",
              "Thoughtful Designs",
              "User-First Mindset",
            ]}
            mainClassName="overflow-hidden"
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
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black bg-opacity-25 text-white flex items-center space-x-2  cursor-target"
      >
        <div className="flex text-sm">
          Download Resume
          <Icon
            icon="material-symbols:download-rounded"
            height={20}
            width={26}
            className="text-3xl cursor-pointer text-white text-center"
          />
        </div>
      </HoverBorderGradient>
    </main>
  );
}
