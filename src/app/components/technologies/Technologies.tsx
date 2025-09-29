"use client";

import { useState } from "react";
import { technologyList, Technology, TechnologyTag } from "./technologyList";
import ProficiencyBadge from "./proficiency-badge";
import Fullscreen from "@/components/Fullscreen";

const filterTags: (TechnologyTag | "all")[] = [
  "all",
  "language",
  "frontend",
  "backend",
  "framework",
  "library",
  "tool",
  "design",
];

export default function Technologies() {
  const [selectedTag, setSelectedTag] = useState<"all" | TechnologyTag>("all");

  // Filter logic
  const filtered =
    selectedTag === "all"
      ? technologyList
      : technologyList.filter((tech) => tech.tags.includes(selectedTag));

  return (
    <Fullscreen>
      <section id="technologies" className="py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Technologies</h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg drop-shadow transition-colors hover-pointer ${
                selectedTag === tag
                  ? "bg-accent text-white border-accent"
                  : "bg-[var(--layer-1)] border-gray-300 hover:bg-accent hover:text-white"
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Technology grid */}
        <div className="grid px-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
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
