"use client";
import SoftSkillsCards from "@/components/ui/soft-skill-card";

const softSkills = [
  {
    id: 1,
    name: "Leadership",
    sub: "Ability to guide, inspire, and influence others towards achieving common goals",
    image: "/assets/leadership-image.png",
  },
  {
    id: 2,
    name: "Communication",
    sub: "Ability to convey information, ideas, and emotions to others",
    image: "/assets/communication-image.png",
  },
  {
    id: 3,
    name: "Teamwork",
    sub: "Ability to work effectively with others in a team",
    image: "/assets/teamwork-image.png",
  },
  {
    id: 4,
    name: "Time Management",
    sub: "Ability to Prioritize tasks, allocate time effectively, and meet deadlines",
    image: "/assets/time-management-image.png",
  },
  {
    id: 5,
    name: "Problem Solving",
    sub: "Ability to identify, analyze, and resolve challenges or difficulties",
    image: "/assets/problem-solving.png",
  },
  {
    id: 6,
    name: "Adaptability",
    sub: "Ability to change my actions, approach, or direction to manage any new situation",
    image: "/assets/adaptability-image.png",
  },
];

export default function SoftSkills() {
  return (
    <div className="pb-8">
      <div className="pt-20 pb-8">
        <div className="font-funnel text-center text-gray-400">
          MY PERSONAL QUALITIES
        </div>
        <div className="font-sans text-center text-5xl text-white font-extrabold">
          Generic
        </div>
      </div>
      <SoftSkillsCards skills={softSkills} />
    </div>
  );
}
