"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const selectors = [
      ".content-section",
      ".section-divider",
      "#about .about-stat-card",
      "#about .about-journey-card",
      "#about .about-looking-group",
      "#about .about-achievement-card",
      "#experience .experience-card",
      "#contact .contact-card"
    ];

    const unique = new Set<HTMLElement>();
    selectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((node) => {
        if (!node.closest(".no-reveal")) {
          unique.add(node);
        }
      });
    });

    const targets = Array.from(unique);

    if (targets.length === 0) {
      return;
    }

    targets.forEach((target, index) => {
      target.classList.add("reveal-section");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 50, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
