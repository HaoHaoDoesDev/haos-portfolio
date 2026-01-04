"use client";

import { Icon } from "@iconify/react";

const items = [
  {
    icon: "Project Title: Digital Food Ordering System",
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
  { icon: "cib:mysql", description: "MySQL" },
  { icon: "material-icon-theme:docker", description: "Docker" },
  { icon: "vscode-icons:file-type-gemini", description: "Gemini AI API" },
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
      <div className="flex flex-wrap">
        {techItems.map((tech, index) => (
          <div key={index} className="flex items-center space-x-1">
            <Icon icon={tech.icon} className="text-white text-sm ml-2" />
            <p className="text-white font-funnel text-md">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
