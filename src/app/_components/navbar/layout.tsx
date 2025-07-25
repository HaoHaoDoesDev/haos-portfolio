"use client";
import { Button } from "@/components/ui/button";
import NavbarLinks from "./_components/links";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useLayoutStore } from "@/stores/content-state";

export default function Navbar() {
  const { isAltLayout, toggleLayout } = useLayoutStore();
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="p-2 col-span-1">
        <Image
          src="/logo/logo_v2-removebg-preview.png"
          alt="Remote Logo"
          className="cursor-target"
          width={100}
          height={100}
        />
      </div>
      <div className="col-span-1 text-white flex items-center justify-center gap-4 bg-black bg-opacity-25 rounded-xl">
        <NavbarLinks />
        <Button
          variant={"blank"}
          className="cursor-target hover:text-white"
          onClick={toggleLayout}
        >
          <Icon
            icon={
              isAltLayout ? "solar:hamburger-menu-outline" : "gravity-ui:dots-9"
            }
            className="transition-opacity duration-300 opacity-100"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </div>
  );
}
