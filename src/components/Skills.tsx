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

            <div className="space-y-4">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm text-text-hi">{skill.name}</span>
                    <span className="font-mono text-[11px] text-text-lo group-hover:text-teal">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.04 }}
                      className="h-full rounded-full bg-gradient-to-r from-amber via-teal to-violet"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
