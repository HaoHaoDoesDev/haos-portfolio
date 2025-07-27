"use client";
import Image from "next/image";

export default function UniversalBanner() {
  return (
    <main>
      <div className="pl-3 grid grid-cols-3 items-center shadow-sm border-l-4 bg-white border-red-600">
        <div className="col-span-1">
          <Image
            src="/assets/logo/HSBC_logo.png"
            alt="Logo"
            width={150}
            height={40}
          />
        </div>
      </div>
    </main>
  );
}
