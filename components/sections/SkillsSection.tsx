import SectionHeading from "../portfolio/SectionHeading";
import type { PortfolioContent } from "../../types/portfolio";
import type { ReactNode } from "react";

type SkillsSectionProps = {
  skillsSection: PortfolioContent["skillsSection"];
};

export default function SkillsSection({ skillsSection }: SkillsSectionProps) {
  const groupIcons: Record<string, ReactNode> = {
    "Programming Languages": (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 6L3 12L8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L21 12L16 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 4L10.5 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    "Frontend Development": (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 8H21" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7" cy="6" r="0.9" fill="currentColor" />
        <circle cx="10" cy="6" r="0.9" fill="currentColor" />
      </svg>
    ),
    "Backend Development": (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 7H8.01M8 17H8.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    Databases: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 6V12C5.5 13.55 8.41 14.8 12 14.8C15.59 14.8 18.5 13.55 18.5 12V6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 12V18C5.5 19.55 8.41 20.8 12 20.8C15.59 20.8 18.5 19.55 18.5 18V12" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    "Cloud & DevOps": (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 18H17C19.2 18 21 16.3 21 14.2C21 12.25 19.44 10.66 17.5 10.42C16.92 8.14 14.81 6.5 12.3 6.5C9.34 6.5 6.94 8.72 6.62 11.56C4.96 11.92 3.75 13.36 3.75 15.08C3.75 16.99 5.36 18 8 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "AI & ML": (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4V7M12 17V20M4 12H7M17 12H20M6.8 6.8L9 9M15 15L17.2 17.2M17.2 6.8L15 9M9 15L6.8 17.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  };

  return (
    <section id="skills" className="content-section">
      <SectionHeading
        eyebrow="Skills"
        title={skillsSection.title}
        description={skillsSection.description}
      />
      <div className="skills-grid">
        {skillsSection.groups.map((group) => (
          <article
            key={group.title}
            className={`skills-card ${group.featured ? "skills-card-featured" : ""}`}
          >
            <div className="skills-card-header">
              <div className={`skills-icon skills-icon-${group.accent}`} aria-hidden="true">
                {groupIcons[group.title] ?? group.icon}
              </div>
              <div>
                <h3>{group.title}</h3>
                <p>{group.items.length} skills</p>
              </div>
            </div>
            <div className="skills-rule" aria-hidden="true" />
            <div className="skills-tags">
              {group.items.map((item) => (
                <span key={item} className="skills-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
