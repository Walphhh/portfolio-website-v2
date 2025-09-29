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
  );
};

export default Navbar;
