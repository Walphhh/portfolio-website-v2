"use client";

import Fullscreen from "@/components/Fullscreen";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
export default function Contact() {
  return (
    <Fullscreen className="flex justify-center items-center">
      <section
        id="contact"
        className="py-16 px-4 sm:px-10 flex justify-center text-center"
      >
        <div className="max-w-4xl bg-[var(--layer-1)] p-10 rounded-2xl drop-shadow-md">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Let’s Work Together!
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Interested in working with me or learning more about my skills?
            Reach out — I’d love to chat!
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {/* Email */}
            <a
              href="mailto:dagsralph0730@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/Walphhh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--layer-1)] hover:bg-accent hover:text-white"
            >
              <SiGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ralphdagondon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--layer-1)] hover:bg-accent hover:text-white"
            >
              <SiLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </Fullscreen>
  );
}
