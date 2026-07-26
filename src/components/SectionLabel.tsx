import { motion } from "framer-motion";

export default function SectionLabel({ tag, title }: { tag: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-14"
    >
      <p className="font-mono text-xs tracking-wider text-teal">{tag}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-text-hi md:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-line via-line to-transparent" />
    </motion.div>
  );
}
