import React from "react";
import { NavList } from "./navlist";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";

interface DesktopNavbarProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  showing: boolean;
  scrollTo: (sectionID: string) => void;
}

const DesktopNavbar = ({
  currentIndex,
  setCurrentIndex,
  showing,
  scrollTo,
}: DesktopNavbarProps) => {
  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={showing ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <ul className="hidden md:flex space-x-10 p-2 px-3 items-center justify-center bg-[var(--layer-1)] rounded-3xl shadow-md">
        {NavList.map((item, idx) => {
          const isActive = idx === currentIndex;

          // Wrap in a Link component if linkTo is provided
          if (item.linkTo) {
            return (
              <li key={item.name} className="relative">
                <Link href={item.linkTo}>
                  <button
                    onClick={() => setCurrentIndex(idx)}
                    className="relative py-2 px-4 rounded-xl  transition-colors hover:bg-accent hover:cursor-pointer"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-2xl bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                          mass: 0.6,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive && "text-[#fcfcfc]"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                </Link>
              </li>
            );
          }

          // Scroll to section if not
          return (
            <li key={item.name} className="relative">
              <button
                onClick={() => {
                  setCurrentIndex(idx);
                  if (item.sectionID) {
                    scrollTo(item.sectionID);
                  }
                }}
                className="relative py-2 px-4 rounded-xl transition-colors hover:bg-accent hover:cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-2xl bg-accent "
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                      mass: 0.6,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 ${isActive && "text-[#fcfcfc]"}`}
                >
                  {item.name}
                </span>
              </button>
            </li>
          );
        })}
        <ThemeToggle />
      </ul>
    </motion.nav>
  );
};

export default DesktopNavbar;
