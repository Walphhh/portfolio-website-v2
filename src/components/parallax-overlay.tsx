"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

export default function ParallaxOverlay() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 500]);

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // prevents mismatch

  const backgroundSrc =
    resolvedTheme === "light"
      ? "/background/waves_light.svg"
      : "/background/waves_dark.svg";

  return (
    <div className="absolute inset-0 w-full overflow-hidden min-h-[600px] sm:min-h-[800px] -z-10">
      <motion.div style={{ y }} className="w-full h-full">
        <Image
          src={backgroundSrc}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
