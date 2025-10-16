"use client";

import { Icon } from "@iconify/react";

const items = [
  {
    icon: "Project Title: F1 Through The Times",
    description: "",
  },
  {
    icon: "✎ Technologies Used ✎",
    description: "",
  },
];

const techItems = [
  { icon: "logos:react", description: "React.js" },
  { icon: "logos:nextjs-icon", description: "Next.js" },
  { icon: "logos:tailwindcss-icon", description: "TailwindCSS" },
  { icon: "ri:vercel-fill", description: "Vercel" },
  { icon: "skill-icons:threejs-light", description: "Three.js" },
];

export default function ProjectDescription() {
  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start space-x-3">
          <span className="text-xl font-funnel">{item.icon}</span>
          <p className="text-white font-funnel text-xl">{item.description}</p>
        </div>
      ))}
      <div className="flex flex-wrap space-x-3">
        {techItems.map((tech, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon icon={tech.icon} className="text-white text-sm" />
            <p className="text-white font-funnel text-md">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
