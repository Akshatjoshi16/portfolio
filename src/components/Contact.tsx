import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { profile, socials } from "../data/profile";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // EDIT ME: wire this up to Formspree, EmailJS, or your own API endpoint.
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel tag="" title="Let's Build Something" />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <p className="max-w-sm text-sm leading-relaxed text-text-lo">
            Have a role, project, or idea in mind? I'd love to hear from you — reach out directly or use the form.
          </p>

          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-text-hi hover:text-teal">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line">
                <Mail size={14} />
              </span>
              {profile.email}
            </a>
            
            <div className="flex items-center gap-3 text-sm text-text-hi">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line">
                <MapPin size={14} />
              </span>
              {profile.location}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {socials.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-lo hover:border-teal hover:text-teal"
                aria-label={s.label}
              >
                <span className="font-mono text-[10px]">{s.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-text-lo">
                Name
              </label>
              <input
                id="name"
                required
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-line bg-panel-hi px-4 py-2.5 text-sm text-text-hi outline-none placeholder:text-text-lo/60 focus:border-teal"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-text-lo">
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="you@gmail.com"
                className="w-full rounded-lg border border-line bg-panel-hi px-4 py-2.5 text-sm text-text-hi outline-none placeholder:text-text-lo/60 focus:border-teal"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-text-lo">
                Subject
              </label>
              <input
                id="subject"
                required
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-lg border border-line bg-panel-hi px-4 py-2.5 text-sm text-text-hi outline-none placeholder:text-text-lo/60 focus:border-teal"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-text-lo">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me a bit about it..."
                className="w-full resize-none rounded-lg border border-line bg-panel-hi px-4 py-2.5 text-sm text-text-hi outline-none placeholder:text-text-lo/60 focus:border-teal"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {sent ? <Check size={15} /> : <Send size={15} />}
            {sent ? "Message sent" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
