"use client";

import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function AnimatedLinkBorder({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  containerClassName,
  children,
  duration = 1,
  clockwise = true,
}: {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  duration?: number;
  clockwise?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];

  const rotateDirection = (current: Direction): Direction => {
    const i = dirs.indexOf(current);
    const next = clockwise
      ? (i - 1 + dirs.length) % dirs.length
      : (i + 1) % dirs.length;
    return dirs[next];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, transparent 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, transparent 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, transparent 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full overflow-hidden p-[2px] transition duration-500 cursor-pointer transform-none z-50",
        containerClassName,
      )}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] z-0"
        style={{ filter: "blur(2px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      {/* Inner dark background (non-blocking) */}
      <div className="absolute inset-[2px] bg-black bg-opacity-90 rounded-[inherit] pointer-events-none" />

      {/* Link content */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center text-white font-medium px-4 py-2",
          className,
        )}
      >
        {children}
      </div>
    </a>
  );
}
