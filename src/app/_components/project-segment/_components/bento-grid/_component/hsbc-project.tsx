"use client";
import { PinContainer } from "@/components/3d-pin";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function AnimatedPinHSBC() {
  return (
    <div className="flex items-start justify-center pt-8">
      <PinContainer title="/hsbc.com" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            HSBC Financial Application
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 text-sm">
              🏆 PolyFinTech100 API Hackathon 2025 Institute Semi-Finalist |
              Modern FinTech Full-Stack Application
            </span>
          </div>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white text-sm">Technologies Used</span>
          </div>
          <div className="flex">
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
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <Image
              src="/projects-image/project-hsbc.png"
              width={1000}
              height={1000}
              className="h-90 w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
