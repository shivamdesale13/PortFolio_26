"use client";

import { useEffect, useState } from "react";

type TypewriterRotatorProps = {
  words: string[];
};

export default function TypewriterRotator({ words }: TypewriterRotatorProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [words]);

  return <span>{words[wordIndex] ?? ""}</span>;
}
