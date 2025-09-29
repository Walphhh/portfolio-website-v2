"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavList } from "./navlist";
import ThemeToggle from "../theme-toggle";

interface MobileNavbarProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  scrollTo: (sectionID: string) => void;
}

const MobileNavbar = ({
  currentIndex,
  setCurrentIndex,
  scrollTo,
}: MobileNavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      {/* Floating pill */}
      <div className="flex items-center space-x-4 bg-[var(--layer-1)] rounded-2xl px-4 py-2 shadow-lg">
        <button
          className="hover-pointer hover:bg-accent p-1.5 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        <ThemeToggle />
      </div>

      {/* Dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} // 👈 fade & slide down
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-56 bg-[var(--layer-1)] rounded-2xl shadow-xl flex flex-col p-4 space-y-2"
          >
            {NavList.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setMobileOpen(false);
                    if (item.linkTo) {
                      window.location.href = item.linkTo;
                    } else if (item.sectionID) {
                      scrollTo(item.sectionID);
                    }
                  }}
                  className={`hover-pointer py-2 px-3 rounded-lg hover:bg-accent text-center ${
                    isActive ? "bg-accent text-white" : ""
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
