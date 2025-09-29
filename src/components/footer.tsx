export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-300 dark:border-gray-700 bg-[var(--layer-1)] text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Ralph Dagondon. Built with{" "}
        <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">TailwindCSS</span>, and ❤️
      </p>
      <div className="flex justify-center gap-6 mt-3">
        <a
          href="mailto:dagsralph0730@gmail.com"
          className="hover:text-accent transition"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ralphdagondon/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Walphhh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
