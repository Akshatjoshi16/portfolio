import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { aiJourney } from "../data/timeline";

export default function AIJourney() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="// 04_generative_ai" title="Generative AI Journey" />

      <div className="relative">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block" />
        <div className="grid gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {aiJourney.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel font-mono text-[11px] text-teal">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-mono text-[11px] leading-snug text-text-lo">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
