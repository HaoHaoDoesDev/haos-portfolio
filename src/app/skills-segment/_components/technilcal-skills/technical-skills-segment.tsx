"use client";

import SkillsCards from "@/components/ui/skill-cards";

const FeaturedSkills = [
  { id: 1, name: "React", icon: "logos:react" },
  { id: 2, name: "TypeScript", icon: "logos:typescript-icon" },
  { id: 3, name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { id: 4, name: "Vercel", icon: "logos:vercel-icon" },
  { id: 5, name: "Zod", icon: "logos:zod" },
  { id: 6, name: "Zustand", icon: "devicon:zustand" },
  { id: 7, name: "MongoDB", icon: "devicon:mongodb" },
];

const Languages = [
  { id: 1, name: "TypeScript", icon: "logos:typescript-icon" },
  { id: 2, name: "C#", icon: "fluent:code-cs-16-regular" },
  { id: 3, name: "Python", icon: "material-icon-theme:python" },
  { id: 4, name: "JavaScript", icon: "logos:javascript" },
  { id: 5, name: "HTML5", icon: "vscode-icons:file-type-html" },
  { id: 6, name: "CSS3", icon: "devicon:css3" },
];
const FrontEnd = [
  { id: 1, name: "React", icon: "logos:react" },
  { id: 2, name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { id: 3, name: "Framer Motion", icon: "devicon:framermotion" },
  { id: 4, name: "Vue.js", icon: "logos:vue" },
  { id: 5, name: "Zod", icon: "logos:zod" },
  { id: 6, name: "Zustand", icon: "devicon:zustand" },
  { id: 7, name: "Three.js", icon: "devicon:threejs" },
  { id: 8, name: "Next.js", icon: "devicon:nextjs" },
];
const BackEnd = [
  { id: 1, name: "Firebase", icon: "logos:firebase-icon" },
  { id: 2, name: "Node.js", icon: "vscode-icons:file-type-node" },
  { id: 3, name: "Docker", icon: "logos:docker-icon" },
  { id: 4, name: "Fastify", icon: "devicon:fastify" },
  { id: 5, name: "MongoDB", icon: "devicon:mongodb" },
  { id: 6, name: "PostgreSQL", icon: "lineicons:postgresql" },
];
const Others = [
  { id: 1, name: "Adobe Photoshop", icon: "devicon:photoshop" },
  { id: 2, name: "CapCut", icon: "hugeicons:capcut" },
  { id: 3, name: "Figma", icon: "devicon:figma" },
  { id: 4, name: "GitHub", icon: "fe:github" },
  { id: 5, name: "Microsoft Office 365", icon: "hugeicons:office-365" },
];

export default function TechnicalSkills() {
  return (
    <div>
      <div className="pt-20 pb-8">
        <div className="font-funnel text-center text-gray-400">
          WHAT I BRING TO THE TABLE
        </div>
        <div className="font-sans text-center text-5xl text-white font-extrabold">
          Technical
        </div>
      </div>
      <div className="text-xl font-funnel text-white text-center">FEATURED</div>
      <SkillsCards skills={FeaturedSkills} />
      <div className="text-xl font-funnel text-white text-center pt-8">
        LANGUAGES
      </div>
      <SkillsCards skills={Languages} />
      <div className="text-xl font-funnel text-white text-center pt-8">
        FRONT-END
      </div>
      <SkillsCards skills={FrontEnd} />
      <div className="text-xl font-funnel text-white text-center pt-8">
        BACK-END
      </div>
      <SkillsCards skills={BackEnd} />
      <div className="text-xl font-funnel text-white text-center pt-8">
        OTHERS
      </div>
      <SkillsCards skills={Others} />
    </div>
  );
}
