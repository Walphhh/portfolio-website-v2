import React from "react";
import { Briefcase, Hand } from "lucide-react";
import { experienceType } from "./experienceList";

interface ExperienceBadgeProps {
  experienceType: experienceType;
}

const ExperienceBadge = ({ experienceType }: ExperienceBadgeProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-8 w-8 p-1.5 rounded-full border border-[var(--default-font)] bg-[var(--default-font)] flex items-center justify-center">
        {experienceType === "work" ? (
          <Briefcase className="h-10 w-10 stroke-[var(--layer-0)] " />
        ) : (
          <Hand className="h-10 w-10 stroke-[var(--layer-0)] " />
        )}
      </div>
    </div>
  );
};

export default ExperienceBadge;
