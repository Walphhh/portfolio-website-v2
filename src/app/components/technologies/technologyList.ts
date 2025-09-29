import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiChakraui,
  SiVite,
  SiCanva,
  SiFigma,
  SiShadcnui,
  SiFlutter,
  SiDart,
  SiDocker,
  SiLinux,
  SiGithubactions,
  SiProxmox,
  SiC,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiFlask,
  SiWireshark,
  SiGit,
} from "react-icons/si";
import { FaBootstrap, FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type TechnologyTag =
  | "language"
  | "framework"
  | "library"
  | "frontend"
  | "backend"
  | "tool"
  | "design"
  | "devops"
  | "database"
  | "cybersecurity";

export type ProficiencyLevel = "familiar" | "comfortable" | "proficient";

export interface Technology {
  name: string;
  icon: IconType;
  proficiency: ProficiencyLevel;
  tags: TechnologyTag[];
}

export const technologyList: Technology[] = [
  // Languages
  {
    name: "TypeScript",
    icon: SiTypescript,
    proficiency: "proficient",
    tags: ["language"],
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    proficiency: "familiar",
    tags: ["language"],
  },
  { name: "Java", icon: FaJava, proficiency: "familiar", tags: ["language"] },
  {
    name: "Python",
    icon: SiPython,
    proficiency: "familiar",
    tags: ["language"],
  },
  { name: "C", icon: SiC, proficiency: "familiar", tags: ["language"] },
  { name: "Dart", icon: SiDart, proficiency: "familiar", tags: ["language"] },
  {
    name: "HTML",
    icon: SiHtml5,
    proficiency: "comfortable",
    tags: ["language", "frontend"],
  },
  {
    name: "CSS",
    icon: SiCss3,
    proficiency: "comfortable",
    tags: ["language", "frontend"],
  },

  // Frontend
  {
    name: "React",
    icon: SiReact,
    proficiency: "proficient",
    tags: ["frontend", "library"],
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    proficiency: "comfortable",
    tags: ["frontend", "framework"],
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    proficiency: "familiar",
    tags: ["frontend", "framework"],
  },

  // Backend
  {
    name: "NodeJS",
    icon: SiNodedotjs,
    proficiency: "familiar",
    tags: ["backend", "framework"],
  },
  {
    name: "Express",
    icon: SiExpress,
    proficiency: "comfortable",
    tags: ["backend", "framework"],
  },
  {
    name: "Flask",
    icon: SiFlask,
    proficiency: "familiar",
    tags: ["backend", "framework"],
  },

  // Databases
  {
    name: "MongoDB",
    icon: SiMongodb,
    proficiency: "familiar",
    tags: ["database"],
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    proficiency: "comfortable",
    tags: ["backend", "tool", "database"],
  },

  // Frameworks / Styling
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    proficiency: "comfortable",
    tags: ["frontend", "framework"],
  },
  {
    name: "Shadcn",
    icon: SiShadcnui,
    proficiency: "proficient",
    tags: ["frontend", "library"],
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    proficiency: "familiar",
    tags: ["frontend", "library"],
  },
  {
    name: "Chakra",
    icon: SiChakraui,
    proficiency: "familiar",
    tags: ["frontend", "library"],
  },
  { name: "Vite", icon: SiVite, proficiency: "familiar", tags: ["tool"] },

  // Design
  {
    name: "Canva",
    icon: SiCanva,
    proficiency: "comfortable",
    tags: ["tool", "design"],
  },
  {
    name: "Figma",
    icon: SiFigma,
    proficiency: "comfortable",
    tags: ["tool", "design"],
  },

  // DevOps / Tools
  {
    name: "Git",
    icon: SiGit,
    proficiency: "comfortable",
    tags: ["tool", "devops"],
  },
  {
    name: "Docker",
    icon: SiDocker,
    proficiency: "comfortable",
    tags: ["tool", "devops"],
  },
  {
    name: "Linux",
    icon: SiLinux,
    proficiency: "comfortable",
    tags: ["tool", "devops"],
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    proficiency: "familiar",
    tags: ["tool", "devops"],
  },
  {
    name: "Proxmox",
    icon: SiProxmox,
    proficiency: "comfortable",
    tags: ["tool", "devops"],
  },

  // Cybersecurity
  {
    name: "Wireshark",
    icon: SiWireshark,
    proficiency: "familiar",
    tags: ["cybersecurity", "tool"],
  },
];
