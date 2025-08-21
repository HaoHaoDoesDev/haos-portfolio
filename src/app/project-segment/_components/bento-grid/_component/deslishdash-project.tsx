"use client";
import { PinContainer } from "@/components/3d-pin";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function AnimatedPinDelishDash() {
  return (
    <div className="flex items-start justify-center ">
      <PinContainer
        title="/delishdash-design/figma.com"
        href="https://www.figma.com/proto/KjOBcUioJtDFpFSWsarYAu/Assignment01_DUX?node-id=3-3&starting-point-node-id=3%3A3&t=FrT3dsmXhEYuHCHD-1"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            DelishDash App Design
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 text-sm">
              Institute Designing User Experience [DUX] Assignment | Food
              Delivery App
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
              src="/projects-image/project-delishdash-v2.png"
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
