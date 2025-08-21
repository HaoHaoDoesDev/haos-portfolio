"use client";
import { Button } from "@/components/ui/button";
import TabsDemo from "./_components/tabs-component";
import DesignBentoGridLayout from "./_components/bento-grid/design-bento";
import AllProjectsBentoGridLayout from "./_components/bento-grid/all-projects-bento";
import ApplicationsBentoGridLayout from "./_components/bento-grid/applications-bento";

export default function ProjectContent() {
  const tabs = [
    {
      label: "All Projects",
      content: <AllProjectsBentoGridLayout />,
      value: "all-projects",
    },
    {
      label: "Applications",
      content: <ApplicationsBentoGridLayout />,
      value: "applications",
    },
    {
      label: "Design",
      content: <DesignBentoGridLayout />,
      value: "design",
    },
  ];

  return (
    <main className="relative w-full mb-8">
      <div className="flex text-white text-bold justify-center font-funnel max-w-xl mx-auto text-4xl p-4">
        My Projects
      </div>
      <div className="text-white font-funnel text-2xl pt-12 w-full">
        <div>
          <TabsDemo tabs={tabs} />
        </div>
      </div>
    </main>
  );
}
