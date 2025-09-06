"use client";
import ScrambledText from "@/components/scrambled-text";

export default function ProjectHeader() {
  return (
    <div className="max-h-screen my-auto">
      <div className="text-3xl flex items-center justify-center h-screen text-center">
        <ScrambledText
          className="scrambled-text-demo"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars="!?%#"
        >
          The Future Belongs To Those Who Learn More Skills And Combine Them In
          Creative Ways <br /> ~ Robert Greene
        </ScrambledText>
      </div>
    </div>
  );
}
