"use client";
import TabsDemo from "./_components/tabs-component";
import DesignBentoGridLayout from "./_components/bento-grid/design-bento";
import AllProjectsBentoGridLayout from "./_components/bento-grid/all-projects-bento";
import ApplicationsBentoGridLayout from "./_components/bento-grid/applications-bento";
import FadeContent from "@/components/fade-content";
import Navbar from "../_components/navbar/layout";
import ProjectHeader from "./_components/project-header";

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
    <main className="relative w-full">
      <section className="relative z-0">
        <div className="fixed w-full z-50 ">
          <Navbar />
        </div>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="space-x-8">
            <ProjectHeader />
            <div className="w-full flex justify-center pb-20">
              <div className="max-w-6xl w-full flex justify-center">
                <TabsDemo tabs={tabs} />
              </div>
            </div>
          </div>
        </FadeContent>
      </section>
    </main>
  );
}
