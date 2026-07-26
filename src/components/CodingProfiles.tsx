import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { codingProfiles } from "../data/timeline";

export default function CodingProfiles() {
  return (
    <section id="profiles" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="// 08_profiles" title="Coding Profiles" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass group flex items-center justify-between rounded-xl px-5 py-4"
          >
            <span className="font-mono text-sm text-text-hi">{p.name}</span>
            <ArrowUpRight size={16} className="text-text-lo transition-colors group-hover:text-teal" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
