"use client";

const items = [
  {
    icon: "👨🏻‍💻",
    description:
      "I’m a passionate developer focused on creating clean, user-friendly, and visually engaging digital experiences.",
  },
  {
    icon: "🎨",
    description:
      "With a balance of technical expertise and creativity, I love refining UI interactions and making applications feel smooth and intuitive.",
  },
  {
    icon: "🛠️",
    description:
      "My experience spans both frontend and backend, working with React, TailwindCSS, Zustand, and Firebase to bring ideas to life.",
  },
  {
    icon: "🚀",
    description:
      "I enjoy solving complex problems, exploring new technologies, and turning concepts into polished real-world solutions.",
  },
  {
    icon: "💡",
    description:
      "Always eager to learn, I’m driven by curiosity and motivated by challenges.",
  },
];

export default function AboutDescription() {
  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start space-x-3">
          <span className="text-2xl">{item.icon}</span>
          <p className="text-white font-funnel text-xl">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
