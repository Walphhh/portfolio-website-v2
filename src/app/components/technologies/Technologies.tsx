"use client";

import { useState } from "react";
import { technologyList, TechnologyTag } from "./technologyList";
import ProficiencyBadge from "./proficiency-badge";
import Fullscreen from "@/components/Fullscreen";
import FilterMenu from "./filter-menu";

const filterTags: (TechnologyTag | "all")[] = [
  "all",
  "language",
  "frontend",
  "backend",
  "framework",
  "library",
  "tool",
  "design",
  "database",
  "cybersecurity",
];

export default function Technologies() {
  const [selectedTag, setSelectedTag] = useState<"all" | TechnologyTag>("all");

  // Filter logic
  const filtered =
    selectedTag === "all"
      ? technologyList
      : technologyList.filter((tech) => tech.tags.includes(selectedTag));

  return (
    <Fullscreen className="">
      <section id="technologies" className="py-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 underline">Technologies</h2>

        {/* Extracted FilterMenu */}
        <FilterMenu
          filterTags={filterTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        {/* Technology grid */}
        <div className="grid px-5 grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filtered.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center py-5 px-2 space-y-2 rounded-xl shadow-sm bg-[var(--layer-1)]"
              >
                <Icon className="w-8 h-8 mb-2" />
                <span className="font-medium">{tech.name}</span>
                <ProficiencyBadge level={tech.proficiency} />
              </div>
            );
          })}
        </div>
      </section>
    </Fullscreen>
  );
}
