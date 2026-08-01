import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { certifications} from "../data/timeline";

export default function CertificationsAchievements() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="// 06_certifications" title="Certifications & Achievements" />

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.a
            key={c.name + i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass group rounded-2xl p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 text-amber">
              <Award size={18} />
            </div>
            <h4 className="font-display text-base font-semibold text-text-hi">{c.name}</h4>
            <p className="mt-1 text-sm text-text-lo">{c.issuedBy}</p>
            <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] text-text-lo group-hover:text-teal">
              View credential <ExternalLink size={11} />
            </span>
          </motion.a>
        ))}
      </div>

      
    </section>
  );
}
