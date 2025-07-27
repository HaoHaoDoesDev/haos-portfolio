"use client";
import { Button } from "@/components/ui/button";
import NavbarLinks from "./_components/links";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Navbar() {
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
      </div>
    </div>
  );
}
