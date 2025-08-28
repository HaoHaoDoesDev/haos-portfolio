"use client";

import {
  useMotionValue,
  useSpring,
  useMotionTemplate,
  motion,
  type HTMLMotionProps,
} from "motion/react";
import type { SpringOptions } from "motion/react";
import type React from "react";
import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { cn } from "../../../lib/utils";

interface TiltedSpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  captionText?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  radius?: number;
  color?: string;
}
const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedSpotlightCard({
  children,
  captionText = "",
  scaleOnHover = 1.05,
  rotateAmplitude = 14,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: TiltedSpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // tilt values
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  // spotlight values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const rect = currentTarget.getBoundingClientRect();

    // tilt
    const offsetX = clientX - rect.left - rect.width / 2;
    const offsetY = clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationX);
    rotateY.set(rotationY);

    // spotlight
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    setIsHovering(true);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setIsHovering(false);
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-gray-800 bg-[#0f1120] shadow-lg p-10 [perspective:800px]",
        className,
      )}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          opacity: isHovering ? 1 : 0,
        }}
      >
        {isHovering && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        )}
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col">{children}</div>
    </motion.div>
  );
}
