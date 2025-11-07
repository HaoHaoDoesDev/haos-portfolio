"use client";
import TabsDemo from "./_components/tabs-component";
import DesignBentoGridLayout from "./_components/bento-grid/design-bento";
import AllProjectsBentoGridLayout from "./_components/bento-grid/all-projects-bento";
import ApplicationsBentoGridLayout from "./_components/bento-grid/applications-bento";
import FadeContent from "@/components/fade-content";
import Navbar from "../_components/navbar/layout";
import ProjectHeader from "./_components/project-header";
import ContactIcons from "../contact-segment/_components/contact-icons";

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
          <div className="space-x-8 pt-8">
            <div className="pt-20 pb-8">
              <div className="font-funnel text-center text-gray-400">
                MY MOST RECENT CREATION
              </div>
              <div className="font-sans text-center text-5xl text-white font-extrabold">
                Project
              </div>
            </div>
            <ProjectHeader />
            <div className="pb-8 pt-20">
              <div className="font-funnel text-center text-gray-400">
                MY COLLECTION OF PROJECTS
              </div>
              <div className="font-sans text-center text-5xl text-white font-extrabold">
                Others
              </div>
            </div>
            <div className="flex justify-center pb-20">
              <div className="max-w-6xl w-full flex justify-center">
                <TabsDemo tabs={tabs} />
              </div>
            </div>
          </div>
          <ContactIcons />
        </FadeContent>
      </section>
    </main>
  );
}
