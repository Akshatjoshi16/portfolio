import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { aboutStats, aboutText, profile } from "../data/profile";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-5 text-center"
    >
      <p className="font-display text-3xl font-semibold text-gradient">
        {animated}
        {suffix}
      </p>
      <p className="mt-1 font-mono text-[11px] text-text-lo">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="// 01_about" title="About Me" />

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-56 sm:w-64 md:mx-0"
        >
          <div className="glass relative aspect-square rounded-3xl p-2">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-panel-hi font-display text-5xl text-text-lo">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-text-lo">[Profile image placeholder]</p>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="whitespace-pre-line text-sm leading-relaxed text-text-lo sm:text-base"
          >
            {aboutText}
          </motion.p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {aboutStats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
