"use client";
import ProjectDescription from "./recent-projext-description";
import TiltedCard from "@/components/ui/tilted-card";

export default function ProjectHeader() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto place-items-center pt-8 gap-y-4 md:gap-x-6 text-white">
          <div className="grid grid-cols-1">
            <TiltedCard
              imageSrc="/projects-image/flowstate-project.png"
              altText="Kendrick Lamar - GNX Album Cover"
              containerHeight="200px"
              containerWidth="350px"
              imageHeight="200px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div className="col-span-2 space-y-4">
            <ProjectDescription />
          </div>
        </div>
      </div>
    </div>
  );
}
