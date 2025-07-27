"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import Image from "next/image";
import { Icon } from "@iconify/react";
import GradientText from "@/components/gradient-text";

export function ProfileCard() {
  return (
    <CardContainer className="inter-var cursor-target">
      <CardBody className=" relative group/card dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6">
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
          <div className="flex space-x-4">
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
            <a
              href="https://open.spotify.com/user/ongjunhao2609?si=3ffb4d9253b944a2"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target"
            >
              <Icon
                icon="mdi:spotify"
                className="text-3xl cursor-pointer text-white"
              />
            </a>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
