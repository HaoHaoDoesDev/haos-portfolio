"use client";

import { Icon } from "@iconify/react";

export default function ContactIcons() {
  const links = [
    {
      icon: "mdi:email",
      href: "mailto:ongjunhao2609@gmail.com",
      label: "Email",
    },
    {
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/in/junhao-ong/",
      label: "LinkedIn",
    },
    {
      icon: "mdi:github",
      href: "https://github.com/HaoHaoDoesDev",
      label: "GitHub",
    },
    {
      icon: "prime:twitter",
      href: "https://x.com/HaoHaoDoesDev",
      label: "Twitter",
    },
  ];

  return (
    <div className="flex space-x-12 justify-center items-center pt-10 pb-10">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-3xl text-white hover:text-blue-500 transition-colors cursor-target"
        >
          <Icon icon={link.icon} />
        </a>
      ))}
    </div>
  );
}
