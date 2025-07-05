"use client";
import { Button } from "@/components/ui/button";
import NavbarLinks from "./_components/links";

export default function Navbar() {
  return (
    <div className="flex justify-between p-8">
      <div className="text-white text-xl p-2 font-semibold">HaoHaoDoesDev</div>
      <div className="grid grid-cols-2 space-x-8">
        <div className="col-span-1">
          <NavbarLinks />
        </div>
        <div className="col-span-1 flex justify-between">
          <Button>Display Selection</Button>
          <Button>B/W Toggle</Button>
        </div>
      </div>
    </div>
  );
}
