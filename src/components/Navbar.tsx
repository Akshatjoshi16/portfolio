import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-lg font-semibold text-text-hi">
          <span className="text-teal">&gt;_</span> {profile.name.split(" ")[0]}
        </a>

        <div className={`glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                active === item.id ? "text-ink" : "text-text-lo hover:text-text-hi"
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-teal"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="glass hidden items-center gap-2 rounded-full px-4 py-2 font-mono text-xs text-text-hi transition-colors hover:text-teal md:flex"
          >
            <Download size={13} /> Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-text-hi hover:text-teal"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-text-hi md:hidden"
          >
            <Menu size={16} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex justify-end px-6 py-5">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-text-hi"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 pt-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-2xl text-text-hi hover:text-teal"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
