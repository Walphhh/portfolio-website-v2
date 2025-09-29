"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ensure it only renders after client hydration
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme">
        <FaSun className="h-10 w-10 opacity-50" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover-pointer"
    >
      {/* Sun (light mode) */}
      <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all" />

      {/* Moon (dark mode) */}
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
    </Button>
  );
}
