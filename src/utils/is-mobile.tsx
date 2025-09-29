"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create a media query matching max-width: breakpoint
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    // Set the initial value
    setIsMobile(mediaQuery.matches);

    // Update on change
    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}
