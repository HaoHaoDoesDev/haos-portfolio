"use client";
import { Button } from "@/components/ui/button";
import ScrambledText from "@/components/scrambled-text";

export default function NavbarLinks() {
  return (
    <div>
      <Button size={"default"} variant={"blank"} className="cursor-target">
        <ScrambledText
          className="scrambled-text-demo"
          duration={1.2}
          speed={0.5}
          scrambleChars="tasdcv"
        >
          ABOUT
        </ScrambledText>
      </Button>
      <Button size={"lg"} variant={"blank"} className="cursor-target">
        <ScrambledText
          className="scrambled-text-demo"
          duration={1.2}
          speed={0.5}
          scrambleChars="tawsdcv"
        >
          PROJECTS
        </ScrambledText>
      </Button>
      <Button size={"lg"} variant={"blank"} className="cursor-target">
        <ScrambledText
          className="scrambled-text-demo"
          duration={1.2}
          speed={0.5}
          scrambleChars="ddsdcv"
        >
          CONTACT
        </ScrambledText>
      </Button>
    </div>
  );
}
