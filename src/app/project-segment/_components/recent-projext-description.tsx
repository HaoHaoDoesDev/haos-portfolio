"use client";

const items = [
  {
    icon: "📚",
    description: "Project Title: FlowState",
  },
  {
    icon: "💪",
    description: "Log daily workouts with sets, reps, and duration",
  },
  {
    icon: "📅",
    description: "Create, save, and assign weekly workout routines",
  },
  {
    icon: "🧠",
    description: "AI Coach to get smart workout/meal suggestions using OpenAI",
  },
  {
    icon: "📊",
    description: "View trends and stay motivated",
  },
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
    </div>
  );
}
