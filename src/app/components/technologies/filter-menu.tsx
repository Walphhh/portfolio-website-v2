"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { TechnologyTag } from "./technologyList";

interface FilterMenuProps {
  filterTags: (TechnologyTag | "all")[];
  selectedTag: TechnologyTag | "all";
  setSelectedTag: (tag: TechnologyTag | "all") => void;
}

export default function FilterMenu({
  filterTags,
  selectedTag,
  setSelectedTag,
}: FilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 w-full flex flex-col items-center relative">
      {/* Desktop filter buttons */}
      <div className="hidden sm:flex flex-wrap justify-center gap-3">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`hover-pointer px-4 py-2 rounded-lg drop-shadow transition-colors ${
              selectedTag === tag
                ? "bg-accent text-white border-accent"
                : "bg-[var(--layer-1)] border-gray-300 hover:bg-accent hover:text-white"
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <div className="sm:hidden flex justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex space-x-3 hover-pointer rounded-md p-2 shadow-md bg-[var(--layer-1)]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          <h1>{selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)}</h1>
        </button>
      </div>

      {/* Absolute-positioned mobile dropdown */}
      {isOpen && (
        <div className="sm:hidden absolute top-14 z-50 flex flex-col items-center gap-3 bg-[var(--layer-1)] shadow-lg rounded-lg p-4">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setIsOpen(false); // close after selecting
              }}
              className={`w-40 px-4 py-2 rounded-lg drop-shadow transition-colors ${
                selectedTag === tag
                  ? "bg-accent text-white border-accent"
                  : "bg-[var(--layer-0)] border-gray-300 hover:bg-accent hover:text-white"
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
