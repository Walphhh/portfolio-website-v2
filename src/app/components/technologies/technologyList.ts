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
} from "react-icons/si";
import { FaBootstrap, FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type TechnologyType =
  | "all"
  | "frontend"
  | "framework"
  | "backend"
  | "design"
  | "language";

export type ProficiencyType = 1 | 2 | 3 | 4;
export interface TechnologyCardProps {
  name: string;
  icon: IconType;
  proficiency: ProficiencyType;
  type: TechnologyType;
}

export const proficiencyBg = [
  {
    key: 1,
    bg: "bg-[#ffc4b6]",
  },
  {
    key: 2,
    bg: "bg-[#ffe0b6]",
  },
  {
    key: 3,
    bg: "bg-[#C5F5B9]",
  },
  {
    key: 4,
    bg: "bg-[#B6D3FF]",
  },
];

export const technologyList: TechnologyCardProps[] = [
  {
    name: "Typescript",
    icon: SiTypescript,
    proficiency: 4,
    type: "language",
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    proficiency: 1,
    type: "language",
  },
  {
    name: "Java",
    icon: FaJava,
    proficiency: 1,
    type: "language",
  },
  {
    name: "Python",
    icon: SiPython,
    proficiency: 1,
    type: "language",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    proficiency: 2,
    type: "language",
  },
  {
    name: "CSS",
    icon: SiCss3,
    proficiency: 2,
    type: "language",
  },
  {
    name: "React",
    icon: SiReact,
    proficiency: 3,
    type: "frontend",
  },
  {
    name: "NodeJS",
    icon: SiNodedotjs,
    proficiency: 2,
    type: "backend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    proficiency: 2,
    type: "framework",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    proficiency: 1,
    type: "framework",
  },
  {
    name: "Chakra",
    icon: SiChakraui,
    proficiency: 1,
    type: "framework",
  },
  {
    name: "Vite",
    icon: SiVite,
    proficiency: 2,
    type: "framework",
  },
  {
    name: "Canva",
    icon: SiCanva,
    proficiency: 2,
    type: "design",
  },
  {
    name: "Figma",
    icon: SiFigma,
    proficiency: 2,
    type: "design",
  },
];
