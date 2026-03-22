"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type SectionNavProps = {
  items: NavItem[];
};

export default function SectionNav({ items }: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="top-nav">
      <a href="#home" className="brand">
        <span className="brand-mark">&lt;</span>
        Shivam
        <span className="brand-mark">/&gt;</span>
      </a>

      <button
        type="button"
        className={`nav-toggle${isMenuOpen ? " is-open" : ""}`}
        aria-expanded={isMenuOpen}
        aria-controls="primary-nav"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-nav"
        aria-label="Primary navigation"
        className={isMenuOpen ? "is-open" : undefined}
      >
        <ul>
          {items.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = sectionId === activeId;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={isActive ? "is-active" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
