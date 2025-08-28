"use client";
import NavbarLinks from "./_components/links";
export default function Navbar() {
  return (
    <div className="flex justify-center mt-4">
      <div
        className="flex lg:justify-center text-white 
        lg:max-w-6xl lg:bg-black lg:bg-opacity-15 lg:rounded-full"
      >
        <NavbarLinks />
      </div>
    </div>
  );
}
