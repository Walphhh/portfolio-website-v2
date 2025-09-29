import React from "react";
import { ProficiencyLevel } from "./technologyList";

const ProficiencyBadge = ({ level }: { level: ProficiencyLevel }) => {
  const styles =
    level === "familiar"
      ? "bg-gray-200 text-gray-800"
      : level === "comfortable"
      ? "bg-yellow-200 text-yellow-800"
      : "bg-green-300 text-green-800";
  return (
    <span className={`px-2 py-1 text-xs rounded-full ${styles}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

export default ProficiencyBadge;
