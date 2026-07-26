import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

// EDIT ME: replace with your GitHub username.
const GITHUB_USERNAME = "yourusername";

export default function GithubStats() {
  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="// 07_github" title="GitHub Activity" />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass overflow-hidden rounded-2xl p-4"
        >
          <img
            loading="lazy"
            className="w-full"
            alt="GitHub stats"
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=4fd1c5&icon_color=f2b84b&text_color=8b92a8`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="glass overflow-hidden rounded-2xl p-4"
        >
          <img
            loading="lazy"
            className="w-full"
            alt="Top languages"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=4fd1c5&text_color=8b92a8`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="glass overflow-hidden rounded-2xl p-4 lg:col-span-2"
        >
          <img
            loading="lazy"
            className="w-full"
            alt="GitHub streak"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&stroke=232838&ring=4fd1c5&fire=f2b84b&currStreakLabel=4fd1c5`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="glass overflow-hidden rounded-2xl p-4 lg:col-span-2"
        >
          <img
            loading="lazy"
            className="w-full"
            alt="GitHub contribution graph"
            src={`https://ghchart.rshah.org/4fd1c5/${GITHUB_USERNAME}`}
          />
        </motion.div>
      </div>
    </section>
  );
}
