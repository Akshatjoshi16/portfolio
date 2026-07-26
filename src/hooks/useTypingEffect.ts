import { useEffect, useState } from "react";

export function useTypingEffect(words: string[], typingMs = 70, pauseMs = 1400, deletingMs = 40) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, deleting ? deletingMs : typingMs);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingMs, pauseMs, deletingMs]);

  return text;
}
