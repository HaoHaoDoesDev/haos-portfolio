"use client";
import { PinContainer } from "@/components/3d-pin";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function AnimatedPinLinkVerse() {
  return (
    <div className="flex items-start justify-center">
      <PinContainer
        title="/linkverse-design/figma.com"
        href="https://www.figma.com/proto/PDcvgXIL137o3NVEkpo9SS/Team-Six_DUX_Asg2_MobileApplication?node-id=55-68&t=oBLL6clVysum7yzz-1&scaling=scale-down&content-scaling=fixed&page-id=31%3A60&starting-point-node-id=55%3A68"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            LinkVerse App Design
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 text-sm">
              Institute Designing User Experience [DUX] Assignment |
              Institutional Social App
            </span>
          </div>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white text-sm">Technologies Used</span>
          </div>
          <div className="flex">
            <Icon
              icon="material-icon-theme:figma"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
            <Icon
              icon="devicon:photoshop"
              height={20}
              width={26}
              className="text-3xl cursor-pointer text-white text-center"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <Image
              src="/projects-image/project-linkverse-v3.png"
              width={1000}
              height={800}
              className="h-90 w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
