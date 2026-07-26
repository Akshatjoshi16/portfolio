import { motion } from "framer-motion";
import { Download, Mail, Code2, Swords } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { profile, socials } from "../data/profile";
import { useTypingEffect } from "../hooks/useTypingEffect";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  code: Code2,
  swords: Swords,
  mail: Mail,
  twitter: FaTwitter,
};

export default function Hero() {
  const typed = useTypingEffect(profile.typingWords);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-text-lo"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> open to backend & AI roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] text-text-hi sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-8 font-mono text-lg text-teal sm:text-xl"
          >
            {typed}
            <span className="animate-blink">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-text-lo sm:text-base"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Download size={15} /> Download Resume
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm text-text-hi transition-transform hover:-translate-y-0.5 hover:text-teal"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex items-center gap-4"
          >
            {socials.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-text-lo transition-colors hover:border-teal hover:text-teal"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-blob rounded-full bg-gradient-to-br from-amber/30 via-teal/25 to-violet/30 blur-2xl" />
          <div className="glass relative flex h-full w-full items-center justify-center rounded-full text-6xl font-display text-text-hi">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-2 top-6 rounded-lg px-3 py-1.5 font-mono text-[11px] text-teal"
          >
            {"{ }"} Java
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-4 bottom-10 rounded-lg px-3 py-1.5 font-mono text-[11px] text-violet"
          >
            RAG.retrieve()
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass absolute bottom-0 right-2 rounded-lg px-3 py-1.5 font-mono text-[11px] text-amber"
          >
            Spring Boot
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
