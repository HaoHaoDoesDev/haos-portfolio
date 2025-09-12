"use client";

import React, { useState } from "react";
import { cn } from "../../../lib/utils";

export const TextItem = React.memo(
  ({
    number,
    text,
    index,
    hovered,
    setHovered,
  }: {
    number: number;
    text: string;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm",
      )}
    >
      <div className=" flex items-center space-x-3">
        <div className="text-white text-4xl md:text-6xl font-bold">
          {number}
        </div>
        <div className="text-white font-funnel text-sm md:text-base">
          {text}
        </div>
      </div>
    </div>
  ),
);

TextItem.displayName = "TextItem";

type TextCard = {
  number: number;
  text: string;
};

export function FocusCards({ cards }: { cards: TextCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <TextItem
          key={`${card.number}-${card.text}`}
          number={card.number}
          text={card.text}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
