"use client";
import { useState, useRef, useEffect } from "react";
import DesktopNavbar from "./desktop-navbbar";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  const [showing, setShowing] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevScrollY = useRef<number>(0);

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setShowing(false); // scrolling down
      } else if (currentScrollY < prevScrollY.current) {
        setShowing(true); // scrolling up
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (sectionID: string) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <DesktopNavbar
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        showing={showing}
        scrollTo={scrollTo}
      />
      <MobileNavbar
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        scrollTo={scrollTo}
      />
    </>

    // {/* Mobile Navbar (hamburger at bottom) */}
    // <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 z-[9999]">
    //   {/* Hamburger button */}
    //   <div className="flex items-center space-x-4 bg-[var(--layer-1)] rounded-2xl px-4 py-2 shadow-md">
    //     <button onClick={() => setMobileOpen(!mobileOpen)}>
    //       {mobileOpen ? (
    //         <X className="size-6" />
    //       ) : (
    //         <Menu className="size-6" />
    //       )}
    //     </button>
    //     <ThemeToggle />
    //   </div>

    //   {/* Dropdown menu */}
    //   {mobileOpen && (
    //     <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-56 bg-[var(--layer-1)] rounded-2xl shadow-lg flex flex-col p-4 space-y-2">
    //       {NavList.map((item, idx) => (
    //         <button
    //           key={item.name}
    //           onClick={() => {
    //             setCurrentIndex(idx);
    //             setMobileOpen(false);
    //             if (item.linkTo) {
    //               window.location.href = item.linkTo;
    //             } else if (item.sectionID) {
    //               scrollTo(item.sectionID);
    //             }
    //           }}
    //           className="py-2 px-3 rounded-lg hover:bg-accent text-center"
    //         >
    //           {item.name}
    //         </button>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default Navbar;
