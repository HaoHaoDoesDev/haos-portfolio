// components/VantaFogBackground.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaFogBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x7a7a7a, // lighter gray than 0x454545
          midtoneColor: 0x404040, // lighter than 0x1d1d1d
          lowlightColor: 0x555555, // lighter than 0x1f1f1f
          baseColor: 0x101010,
          blurFactor: 0.65,
          speed: 1,
          zoom: 1.4,
        }),
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute top-0 left-0 w-full h-full -z-10 bg-black"
    />
  );
}
