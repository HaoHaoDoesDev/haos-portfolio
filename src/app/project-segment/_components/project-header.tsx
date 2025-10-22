"use client";
import ProjectDescription from "./recent-projext-description";
import TiltedCard from "@/components/ui/tilted-card";

export default function ProjectHeader() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto place-items-center pt-8 gap-y-4 md:gap-x-6 text-white space-x-8">
          <div className="grid grid-cols-1">
            <TiltedCard
              imageSrc="/projects-image/f1-proj.png"
              containerHeight="200px"
              containerWidth="350px"
              imageHeight="200px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            />
          </div>
          <div className="col-span-2">
            <ProjectDescription />
          </div>
        </div>
      </div>
    </div>
  );
}
