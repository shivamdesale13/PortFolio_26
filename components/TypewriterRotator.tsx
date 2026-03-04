"use client";

import { useEffect, useState } from "react";

type TypewriterRotatorProps = {
  words: string[];
};

export default function TypewriterRotator({ words }: TypewriterRotatorProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

    const currentWord = words[wordIndex % words.length];
    const isWordComplete = displayText === currentWord;
    const isWordEmpty = displayText.length === 0;

    let timeout = 80;

    if (!isDeleting && !isWordComplete) {
      timeout = 70;
    } else if (!isDeleting && isWordComplete) {
      timeout = 1100;
    } else if (isDeleting) {
      timeout = 40;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isWordComplete) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        return;
      }

      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isWordEmpty) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        return;
      }

      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return <span>{displayText}</span>;
}
