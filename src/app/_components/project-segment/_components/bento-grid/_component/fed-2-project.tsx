"use client";
import { PinContainer } from "@/components/3d-pin";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function AnimatedPinFED() {
  return (
    <div className="flex items-start justify-center">
      <PinContainer
        title="/life-with-covid/html.com"
        href="https://github.com/HaoHaoDoesDev"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Life With COVID
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 text-sm">
              Institute Front-End Development Assignment | Information on
              COVID19 in 2023
            </span>
          </div>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white text-sm">Technologies Used</span>
          </div>
          <div className="flex">
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
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <Image
              src="/projects-image/project-life-w-covid.png"
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
