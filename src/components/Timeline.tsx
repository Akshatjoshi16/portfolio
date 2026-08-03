import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { education, experience } from "../data/timeline";

function TimelineTrack({
  items,
}: {
  items: { title: string; subtitle: string; duration: string; meta?: string; lines?: string[] }[];
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={item.title + i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-teal bg-ink" />
            <p className="font-mono text-[11px] text-text-lo">{item.duration}</p>
            <h4 className="mt-1 font-display text-base font-semibold text-text-hi">{item.title}</h4>
            <p className="text-sm text-text-lo">{item.subtitle}</p>
            {item.meta && <p className="mt-1 font-mono text-xs text-teal">{item.meta}</p>}
            {item.lines && (
              <ul className="mt-2 space-y-1">
                {item.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-xs text-text-lo">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet" />
                    {l}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="" title="Experience & Education" />

      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-text-lo">Training</h3>
          <TimelineTrack
            items={experience.map((e) => ({
              title: e.role,
              subtitle: e.company,
              duration: e.duration,
              lines: e.responsibilities,
            }))}
          />
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-text-lo">Education</h3>
          <TimelineTrack
            items={education.map((e) => ({
              title: e.degree,
              subtitle: e.institution,
              duration: e.duration,
              meta: `CGPA: ${e.cgpa}`,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
