import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SectionLabel from "./SectionLabel";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="// 03_projects" title="Selected Projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative flex h-40 items-center justify-center overflow-hidden bg-panel-hi">
              <div className="absolute inset-0 bg-gradient-to-br from-amber/10 via-teal/10 to-violet/10 transition-transform duration-500 group-hover:scale-110" />
              <span className="relative font-mono text-xs text-text-lo">[Project image placeholder]</span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-text-hi">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-lo">{p.description}</p>

              <p className="mt-3 text-xs leading-relaxed text-text-lo">
                <span className="font-mono text-teal">problem — </span>
                {p.problem}
              </p>

              <ul className="mt-3 space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-text-lo">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-text-lo"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center font-mono text-xs">
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-text-hi hover:text-teal">
                  <FaGithub size={13} /> View Architecture
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}