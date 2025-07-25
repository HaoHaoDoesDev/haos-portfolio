"use client";
import { Button } from "@/components/ui/button";
import RowsLayout from "./_components/rows/layout";
import TabsDemo from "./_components/tabs-component";
import BentoGridLayout from "./_components/bento-grid/layout";

const tabs = [
  {
    label: "All Projects",
    content: <BentoGridLayout />,
    value: "all-projects",
  },
  {
    label: "Web Applications",
    content: <RowsLayout />,
    value: "applications",
  },
  {
    label: "Design",
    content: <RowsLayout />,
    value: "design",
  },
];

export default function ProjectContent() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden mb-8">
      <div className="flex text-white text-bold justify-center font-funnel max-w-xl mx-auto pt-8 text-4xl ">
        My Projects
      </div>
      <div className="flex text-white text-bold justify-between items-center font-funnel text-2xl pt-12">
        <div className="">
          <TabsDemo tabs={tabs} />
        </div>
      </div>
    </main>
  );
}
