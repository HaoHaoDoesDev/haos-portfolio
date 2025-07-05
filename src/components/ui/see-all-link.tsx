"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

type Prop = {
  path: string;
};

export default function SeeAllLink({ path }: Prop) {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.push(path)}
        className="inline-flex items-center gap-2 px-4 py-2 text-whit hover:text-hsbc-red rounded-lg hover:bg-hsbc-darkred transition-colors"
      >
        <span>See All</span>
        <Icon icon="weui:arrow-filled" className="text-lg" />
      </button>
    </div>
  );
}
