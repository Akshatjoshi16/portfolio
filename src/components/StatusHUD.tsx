import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "$ health-check --service api      [200 OK]",
  "$ rag-index status                [ready]",
  "$ vector-store ping               [42ms]",
  "$ build: backend-portfolio        [passing]",
  "$ learning_mode --topic RAG       [active]",
  "$ deploy --env production         [done]",
];

export default function StatusHUD() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % LINES.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden select-none lg:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="glass w-72 rounded-xl px-4 py-3 font-mono text-[11px] text-text-lo shadow-lg shadow-black/30"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber/80" />
                <span className="h-2 w-2 rounded-full bg-teal/80" />
                <span className="h-2 w-2 rounded-full bg-violet/80" />
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Hide status console"
                className="text-text-lo/60 hover:text-text-hi"
              >
                ×
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 4 }}
                transition={{ duration: 0.25 }}
                className="whitespace-pre text-teal/90"
              >
                {LINES[index]}
                <span className="animate-blink text-text-lo">▍</span>
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
