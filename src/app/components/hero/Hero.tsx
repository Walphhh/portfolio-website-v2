"use client";

import Hello from "./Hello";
import Fullscreen from "@root-components/Fullscreen";
import { Separator } from "@shadcn-ui/separator";
import { Avatar, AvatarFallback } from "@shadcn-ui/avatar";
import { Button } from "@shadcn-ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="hero">
      <Fullscreen className="font-Figtree relative z-9 px-10 flex align-middle items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex space-x-5"
        >
          <div className="flex items-center">
            <div className="flex space-x-10 items-center">
              {/* text + buttons section */}
              <div className="space-y-10">
                <div>
                  <h1 className="text-2xl flex font-semibold drop-shadow-lg">
                    <div className="text-2xl min-w-40 ">
                      <Hello />
                    </div>
                    I&apos;m Ralph
                  </h1>
                  <h1
                    className="text-6xl font-bold drop-shadow-lg 
             bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 
             bg-[length:200%_200%] animate-gradient 
             bg-clip-text text-transparent relative"
                  >
                    <span
                      className="bg-gradient-to-r from-transparent via-white/70 to-transparent
               bg-[length:200%_100%] bg-clip-text text-transparent
               animate-shimmer"
                    >
                      I&apos;m a full-stack developer
                    </span>
                  </h1>
                </div>
                <div className="flex items-center space-x-10 drop-shadow-lg">
                  <a href={"/Resume.pdf"} download="Resume_Dagondon.pdf">
                    <Button className="hover:cursor-pointer bg-[var(--default-font)]">
                      Download CV
                    </Button>
                  </a>
                  <div className="flex items-center space-x-10 drop-shadow-lg">
                    <a
                      href="https://github.com/Walphhh"
                      title="Gihub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-[var(--default-font)] hover:opacity-80"
                    >
                      <FaGithub className="size-12" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ralphdagondon/"
                      title="Linkedin Link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-[var(--default-font)] hover:opacity-80"
                    >
                      <FaLinkedin className="size-12" />
                    </a>
                  </div>
                </div>
              </div>

              {/* vertical separator */}
              <Separator
                orientation="vertical"
                className="hidden md:bg-[var(--default-font)] md:flex md:min-h-60 md:min-w-1.5 md:rounded-4xl md:drop-shadow-lg"
              />

              {/* avatar */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className={`hidden md:block my-0 p-1.5 w-fit h-fit rounded-full drop-shadow-lg ${
                  hovered ? `bg-[var(--accent)]` : `bg-[var(--default-font)]`
                } `}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Avatar className="relative w-40 h-40">
                  <Image
                    src={
                      hovered
                        ? "/headshots/headshot_with_sunnies.png"
                        : "/headshots/headshot.png"
                    }
                    alt="headshot"
                    fill
                    className="headshot-photo object-cover rounded-full"
                    priority
                  />
                  <AvatarFallback>Headshot</AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Fullscreen>
    </section>
  );
};

export default Hero;
