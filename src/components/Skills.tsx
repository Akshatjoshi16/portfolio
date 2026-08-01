import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="// 02_skills" title="Skills & Stack" />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-5 flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold text-text-hi">{group.category}</h3>
              <span className="font-mono text-[11px] text-text-lo">{group.note}</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  whileHover={{ y: -3, borderColor: "var(--color-teal)" }}
                  className="rounded-full border border-line px-3.5 py-1.5 text-sm text-text-hi transition-colors hover:text-teal"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}