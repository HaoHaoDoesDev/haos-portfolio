"use client";
import Navbar from "../_components/navbar/layout";
import FadeContent from "@/components/fade-content";
import Image from "next/image";
import AboutDescription from "./_components/overview/description-segment";
import PersonalInformation from "./_components/overview/personal-information";
import OverviewHeader from "./_components/overview/header-overview";
import EducationHeader from "./_components/education/header-education";
import EducationTimeline from "./_components/education/_components/education-timeline";
import ExperienceHeader from "./_components/work-experience/header-work";
import WorkExperience from "./_components/work-experience/work-expereince";
import CertificationsHeader from "./_components/certifications/header-certifications";

export default function AboutContent() {
  return (
    <main className="relative w-full">
      <section className="relative z-0">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="pt-8">
            <OverviewHeader />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto place-items-center pt-8 gap-y-4 md:gap-x-6 text-white">
            <div className="grid grid-cols-1">
              <Image
                src="/assets/roundphotolol.png"
                width={200}
                height={200}
                className="object-cover rounded-xl"
                alt="thumbnail"
              />
            </div>
            <div className="col-span-2 space-y-4">
              <AboutDescription />
            </div>
          </div>
          <div className="pt-8 ">
            <PersonalInformation />
          </div>
          <EducationHeader />
          <EducationTimeline />
          <ExperienceHeader />
          <div className="max-w-6xl mx-auto pt-8 mb-20">
            <WorkExperience />
          </div>
          <CertificationsHeader />
        </FadeContent>
      </section>
    </main>
  );
}
