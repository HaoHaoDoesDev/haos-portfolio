"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import Image from "next/image";
import { Icon } from "@iconify/react";
import GradientText from "@/components/gradient-text";
import { HoverBorderGradient } from "@/components/border-gradient";

export function ProfileCard() {
  return (
    <CardContainer className="inter-var cursor-target">
      <CardBody className=" relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="flex text-xl font-bold text-white dark:text-white"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-xl font-bold"
          >
            Full Stack Developer
          </GradientText>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-white"
        >
          Do check out my socials linked below!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/assets/lolol.jpg"
            width={1000}
            height={1000}
            className="h-90 w-full object-cover rounded-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="flex space-x-4 items-center">
            <a
              href="https://www.instagram.com/junha_ohao"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target"
            >
              <Icon
                icon="mdi:instagram"
                className="text-3xl cursor-pointer text-white"
              />
            </a>
            <a
              href="https://github.com/HaoHaoDoesDev"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target"
            >
              <Icon
                icon="mdi:github"
                className="text-3xl cursor-pointer text-white"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/junhao-ong/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target"
            >
              <Icon
                icon="mdi:linkedin"
                className="text-3xl cursor-pointer text-white"
              />
            </a>
            <button
              onClick={() =>
                navigator.clipboard.writeText("yourDiscordUsername#1234")
              }
              className="cursor-target"
            >
              <Icon
                icon="ic:baseline-discord"
                className="text-3xl cursor-pointer text-white"
              />
            </button>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black bg-opacity-25 text-white flex cursor-target"
            >
              <div className="flex text-sm">
                Download Resume
                <Icon
                  icon="material-symbols:download-rounded"
                  height={20}
                  width={26}
                  className="text-3xl cursor-pointer text-white text-center"
                />
              </div>
            </HoverBorderGradient>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
