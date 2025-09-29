import { TagTypes } from "@/utils/types";

export interface ProjectCard {
  title: string;
  description: string;
  imgSrc?: string;
  tags: TagTypes[];
  liveUrl?: string;
  githubUrl?: string;
  options?: string;
}

export const projects: ProjectCard[] = [
  {
    title: "Homelab",
    description:
      "Personal homelab using Proxmox to manage virtualised OS and containers. Experimented with containerised apps, service monitoring, and infrastructure automation.",
    tags: ["Proxmox", "Docker", "Linux", "DevOps"],
    imgSrc: "/project-snapshots/proxmox.png",
  },
  {
    title: "Organisation Website (FSS MQU)",
    description:
      "Fully responsive society website built with Next.js and Figma designs. Integrated backend handling for forms and reCAPTCHA for spam protection.",
    tags: ["Next.js", "Typescript", "Tailwind", "Node.js"],
    githubUrl: "https://github.com/Walphhh/fss-website",
  },
  {
    title: "Mobile Food Review App (Foodify)",
    description:
      "Flutter app for posting and browsing food reviews. Integrated Supabase backend for authentication, data handling, and media uploads.",
    imgSrc: "/project-snapshots/foodify.png",
    tags: ["Flutter", "Dart", "Supabase", "University"],
    githubUrl:
      "https://github.com/Walphhh/mobile-application-development-Walphhh-main",
    options: "zoomed-in",
  },
  {
    title: "Web Application Security Assessment",
    description:
      "Security assessment on a Flask app. Identified vulnerabilities (XSS, CSRF, RBAC flaws) and implemented mitigations to demonstrate secure coding practices.",
    tags: ["Flask", "Security", "Python", "University"],
  },
  {
    title: "Python Job Scheduler",
    description:
      "Custom job scheduler for a distributed system, optimised turnaround time using object-oriented design and efficient client-server communication.",
    tags: ["Python", "University"],
  },
  {
    title: "Blogging Website",
    description:
      "Basic full-stack blogging platform with React+ChakraUI frontend and Node.js+Express backend. MongoDB for persistence and JWT authentication.",
    imgSrc: "/project-snapshots/blogsite.png",
    tags: ["React", "ChakraUI", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://walphhh.github.io/personal-blog/",
    githubUrl: "https://github.com/Walphhh/personal-blog",
  },
  {
    title: "Genshin Character Viewer",
    description:
      "React-based web app that fetches and displays character data for Genshin Impact using an external API.",
    imgSrc: "/project-snapshots/genshinviewer.png",
    tags: ["React", "Bootstrap"],
    liveUrl: "https://walphhh.github.io/Genshin-Encylopedia/",
    githubUrl: "https://github.com/Walphhh/Genshin-Encylopedia",
  },
  {
    title: "Portfolio Website v1",
    description:
      "Responsive developer portfolio built with React and Tailwind. Designed in Figma and deployed online to showcase projects.",
    imgSrc: "/project-snapshots/portfolio.png",
    tags: ["React", "Typescript", "Tailwind"],
    githubUrl: "https://github.com/Walphhh/personal-portfolio",
  },
  {
    title: "Portfolio Website v2",
    description:
      "Responsive developer portfolio built with Next.js and Tailwind. Designed in Figma and deployed online with docker and a personal linux server to showcase projects.",
    imgSrc: "/project-snapshots/portfolio-v2.png",
    tags: ["React", "Typescript", "Tailwind", "Linux", "Docker"],
    githubUrl: "https://github.com/Walphhh/portfolio-website-v2",
  },
  {
    title: "Christmas Card",
    description: "Sharing the holiday spirit with an online card",
    imgSrc: "/project-snapshots/christmas_card.png",
    tags: ["React"],
    liveUrl: "https://walphhh.github.io/for-friends/",
    githubUrl: "https://github.com/Walphhh/for-friends",
  },
];
