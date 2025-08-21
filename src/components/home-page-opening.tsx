"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false); // triggers exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence
        mode="wait"
        onExitComplete={onFinish} // call after fade-out finishes
      >
        {showAnimation && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            {/* Netflix-like animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[100px] md:w-[200px]"
            >
              <Image
                src="/logo/professional_logo-removebg-preview.png"
                width={100}
                height={100}
                className="w-full object-contain"
                alt="logo"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
