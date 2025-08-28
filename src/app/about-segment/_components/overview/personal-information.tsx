"use client";
import { FocusCards } from "@/components/ui/focus-text";

export default function PersonalInformation() {
  const texts = [
    {
      number: 21,
      text: "Age",
    },
    {
      number: 1,
      text: "Years of Experience",
    },
    {
      number: 3,
      text: "Projects Deployed",
    },
    {
      number: 7,
      text: "Projects Worked On",
    },
  ];
  return (
    <div>
      <FocusCards cards={texts} />
    </div>
  );
}
