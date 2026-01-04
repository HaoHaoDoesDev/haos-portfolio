import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function EducationTimeline() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <h1 className="font-funnel md:text-xl text-white">
            Diploma in Information Technology (Specialization in Software
            Engineering)
          </h1>
          <p className="mb-4 font-funnel md:text-sm text-gray-400">
            INSTITUTE: NGEE ANN POLYTECHNIC
          </p>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white text-sm">Technologies Learnt:</span>
          </div>
          <div className="flex pb-4">
            <Icon
              icon="devicon:nextjs"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="simple-icons:shadcnui"
              height={16}
              width={16}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="vscode-icons:file-type-tailwind"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="logos:zod"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="skill-icons:mongodb"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="material-icon-theme:react"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon:typescript"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon:html5"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon:css3"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="logos:javascript"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="logos:firebase-icon"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="logos:python"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon:figma"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
          </div>
          <p className="mb-8 font-funnel md:text-sm text-white">
            [2025] Worked on a banking application to help users invest smarter
            and stay up to date with market trends along with a fitness
            application FlowState to allow users to track workout progress and
            set up structured workout routines with the help of Artificial
            Intelligence (AI).
          </p>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <Image
              src="/projects-image/CNAD_Assignment_Portfolio_Screenshot_ShakeShack.png"
              width={900}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
            <Image
              src="/projects-image/flowstate-project.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
            <Image
              src="/projects-image/project-hsbc.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
          </div>
          <p className="mb-8 font-funnel md:text-sm text-white">
            [2024] Worked on a Automated Testing Full Stack Project to enchance
            the redundancy of Manual Testing for Banking Applications, ensuring
            consistency on multiple browsers and plaforms. Designing user
            Experience educated me on the importance of the user interaction
            with an application and how T too can develop applciations that
            align with good User Experience Principles.
          </p>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <Image
              src="/projects-image/project-ocbc.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
            <Image
              src="/projects-image/project-delishdash-v2.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
            <Image
              src="/projects-image/project-linkverse-v3.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
            <Image
              src="/projects-image/project-cookbuddy-v2.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
          </div>
          <p className="mb-8 font-funnel md:text-sm text-white">
            [2023] Got the chance to have hands-on experience with fundemental
            programming languages like Python, HTML and CSS. This broadened my
            knowledge on Programming and introduced me to the world of Software
            Engineering.
          </p>
          <div className="grid grid-cols-2 gap-4 pb-8">
            <Image
              src="/projects-image/project-life-w-covid.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2022",
      content: (
        <div>
          <h1 className="font-funnel md:text-xl text-white">
            Higher Nitec in Games Programming and Development
          </h1>
          <p className="mb-4 font-funnel md:text-sm text-gray-400">
            INSTITUTE: ITE COLLEGE CENTRAL
          </p>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white text-sm">Technologies Learnt:</span>
          </div>
          <div className="flex pb-4">
            <Icon
              icon="mdi:unity"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon-plain:maya"
              height={16}
              width={16}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon:photoshop"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon:visualstudio"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="mdi:github"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
          </div>
          <p className="mb-8 font-funnel md:text-sm text-white">
            [2022] Stepped into the world of Augemented Reality and 3D Games.
            Created a Pokemon-Go replica that not only utilised ARCore, but also
            the devices latitude/longitude coordinates and converting it into
            Unity's Unity’s world space grid, a process called geo-referencing.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Image
              src="/projects-image/death-cure-project.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
          </div>
          <p className="mb-8 font-funnel md:text-sm text-white">
            [2021] Stepped into the world of Game Programming, from writing up
            Game Design Documents to the technical aspects of creating a full
            well rounded game. Worked with Unity3D and Maya to Develop Games
            suitable for all devices, from Mobile to Computer.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Image
              src="/projects-image/bumbum-project.png"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              alt="thumbnail"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017 - 2020",
      content: (
        <div>
          <h1 className="font-funnel md:text-xl text-white">
            GCSE O-LEVEL Certitication
          </h1>
          <p className="mb-4 font-funnel md:text-sm text-gray-400">
            INSTITUTE: ASSUMPTION ENGLISH SCHOOL
          </p>
          <p className="mb-8 font-funnel md:text-sm text-white">
            Held multiple leadership positions during this period, earning the
            Edusave Award for Achievement, Good Leadership and Service (EAGLES)
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative max-w-7xl overflow-clip mx-auto">
      <Timeline data={data} />
    </div>
  );
}
