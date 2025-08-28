import { CardSpotlight } from "@/components/ui/card-spotlight";
import TiltedSpotlightCard from "@/components/ui/tilted-spotlight-card";
import { Icon } from "@iconify/react";

export default function Certificates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto mb-12">
      <TiltedSpotlightCard
        className="max-w-sm w-full"
        captionText="Fancy interactive card"
        scaleOnHover={1.08}
        rotateAmplitude={18}
        radius={400}
        color="#1a1a1a"
      >
        {/* flex column ensures spacing between header/content and footer button */}
        <div className="flex flex-col h-full justify-between">
          {/* Top content */}
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl">
                <Icon
                  icon="devicon:linkedin"
                  className="text-3xl cursor-pointer"
                />
              </h1>
              <p className="text-white font-funnel font-semibold text-2xl pl-1">
                LinkedIn Learning
              </p>
            </div>

            <h3 className="font-funnel font-semibold text-white pt-8 text-left">
              Learning Full-Stack JavaScript Development: MongoDB, Node, and
              React
            </h3>
            <p className="text-sm mt-3 text-gray-400 text-left">
              Issued: October 11, 2024
            </p>
          </div>

          {/* Button locked at bottom */}
          <a
            href="https://www.linkedin.com/learning/certificates/40cc1ccc48386d2dc5538e3ca8cb76bf3b65f6e01532b9bcaf84f83d270b41a8?u=42538748"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-5 py-2 bg-blue-500 text-white font-funnel rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            View Certificate
          </a>
        </div>
      </TiltedSpotlightCard>
      <TiltedSpotlightCard
        className="max-w-sm w-full"
        captionText="Fancy interactive card"
        scaleOnHover={1.08}
        rotateAmplitude={18}
        radius={400}
        color="#1a1a1a"
      >
        <div className="flex flex-col h-full justify-between">
          {/* Top content */}
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl">
                <Icon
                  icon="devicon:linkedin"
                  className="text-3xl cursor-pointer"
                />
              </h1>
              <p className="text-white font-funnel font-semibold text-2xl pl-1">
                LinkedIn Learning
              </p>
            </div>

            <h3 className="font-funnel font-semibold text-white pt-8 text-left">
              What is Generative AI?
            </h3>
            <p className="text-sm mt-3 text-gray-400 text-left">
              This course is part of a Professional Certificate from Microsoft
            </p>
            <p className="text-sm mt-3 text-gray-400 text-left">
              Issued: August 31, 2024
            </p>
          </div>
          <a
            href="https://www.linkedin.com/learning/certificates/9e69d1b5b790a2cdac68b6d7f051722e18d2136fd935d4c30ad2beba843b0c6d?u=42538748"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-5 py-2 bg-blue-500 text-white font-funnel rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            View Certificate
          </a>
        </div>
      </TiltedSpotlightCard>
    </div>
  );
}
