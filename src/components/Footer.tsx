import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#hero" className="font-display text-sm font-semibold text-text-hi">
          <span className="text-teal">&gt;_</span> {profile.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-xs text-text-lo hover:text-teal">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-text-lo hover:text-teal">
            <FaGithub size={16} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-text-lo hover:text-teal">
            <FaLinkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-text-lo hover:text-teal">
            <Mail size={16} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-[11px] text-text-lo">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
      </p>
    </footer>
  );
}
