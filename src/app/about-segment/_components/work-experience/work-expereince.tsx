"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Company {
  name: string;
  role: string;
  period: string;
  description: string;
}

const companies: Company[] = [
  {
    name: "Amber Creative PTE LTD",
    role: "Full-Stack Developer Intern",
    period: "2024 - 2025",
    description:
      "Focused on full-stack development for a client training management system project. The internship encompassed extensive frontend development using React, TailwindCSS, and modern JavaScript frameworks, alongside backend API development and database integration.  Built modular UI components and improved application performance by 30%.",
  },
  {
    name: "JAVIS PTE LTD",
    role: "Junior Games Programmer",
    period: "2022 - 2023",
    description:
      "Create an individual game, Write up of Games Design Document (GDD) from scratch. Experiment and work with Augmented Reality (AR) in the game that my team I were tasked to create. Implementing a Global Positioning System (GPS) into Unity via converting the Unity Grid Map to the World Map.",
  },
];

export default function WorkExperience() {
  const [selected, setSelected] = useState<Company>(companies[0]);

  return (
    <section className="relative z-0 mx-auto p-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Sidebar */}
        <div className="flex flex-col space-y-2 pr-4">
          {companies.map((company) => {
            const isSelected = selected.name === company.name;
            return (
              <button
                key={company.name}
                onClick={() => setSelected(company)}
                className={`text-left px-3 py-2 rounded-lg transition relative cursor-target
                  ${
                    isSelected
                      ? "bg-white text-black border-2 border-transparent"
                      : "text-white hover:text-black hover:bg-white"
                  }
                `}
              >
                <p className="font-semibold">{company.name}</p>
                <p className="text-sm uppercase">{company.role}</p>
              </button>
            );
          })}
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <h2 className="text-2xl text-white font-bold">{selected.role}</h2>
              <p className="text-gray-500">{selected.period}</p>
              <p className="mt-2 text-gray-400">{selected.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
