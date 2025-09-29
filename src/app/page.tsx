"use client";

import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import ParallaxOverlay from "@/components/parallax-overlay";
import { useTheme } from "next-themes";
import Technologies from "./components/technologies/Technologies";
import Contact from "./Contact";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme =
    resolvedTheme === "dark" ? "bg-pattern-dark" : "bg-pattern-light";
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* background pattern - only render once mounted */}
      {mounted && <div className={`absolute inset-0 -z-20 ${theme}`} />}

      {/* parallax overlay */}
      {mounted && <ParallaxOverlay />}

      {/* page content */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
}
