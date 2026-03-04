import SectionHeading from "../portfolio/SectionHeading";
import type { PortfolioContent } from "../../types/portfolio";

type AboutSectionProps = {
  about: PortfolioContent["about"];
};

function renderHighlightedText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const value = part.slice(2, -2);
      return (
        <strong key={`${value}-${index}`} className="journey-highlight">
          {value}
        </strong>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function AboutIcon({ kind }: { kind: "journey" | "looking" | "opportunity" | "roles" | "work" }) {
  if (kind === "journey") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 5.5A1.75 1.75 0 0 1 6.5 3.75h11A1.75 1.75 0 0 1 19.25 5.5v13A1.75 1.75 0 0 1 17.5 20.25h-11A1.75 1.75 0 0 1 4.75 18.5zM7 6.25v11.5m0-10.25h10.5m-10.5 5.25h10.5" />
      </svg>
    );
  }

  if (kind === "looking") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.75 8.25A1.5 1.5 0 0 1 5.25 6.75h13.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5zm6-4.5h4.5A1.5 1.5 0 0 1 15.75 5.25v1.5h-7.5v-1.5a1.5 1.5 0 0 1 1.5-1.5Z" />
      </svg>
    );
  }

  if (kind === "opportunity") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7.5A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5v9A1.5 1.5 0 0 1 16.5 18h-9A1.5 1.5 0 0 1 6 16.5zm4.5-3h3a1.5 1.5 0 0 1 1.5 1.5V6h-6v-.0a1.5 1.5 0 0 1 1.5-1.5Z" />
      </svg>
    );
  }

  if (kind === "roles") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Zm0 3.75a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 4.75h9A1.75 1.75 0 0 1 18.25 6.5v11A1.75 1.75 0 0 1 16.5 19.25h-9A1.75 1.75 0 0 1 5.75 17.5v-11A1.75 1.75 0 0 1 7.5 4.75Zm2.5 3.5h4m-4 4h4m-4 4h2.5" />
    </svg>
  );
}

function AchievementIcon({ kind }: { kind: "award" | "publication" }) {
  if (kind === "award") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4.75h8v2.5A4 4 0 0 1 12 11.25a4 4 0 0 1-4-4zM6 6.5H4.75a2 2 0 0 0 2 2m10.5-2h1.25a2 2 0 0 1-2 2M10 14h4m-5.5 5.25h7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.75h9A1.75 1.75 0 0 1 17.75 6.5v11A1.75 1.75 0 0 1 16 19.25H7A1.75 1.75 0 0 1 5.25 17.5v-11A1.75 1.75 0 0 1 7 4.75Zm2.25 4h5.5m-5.5 3.5h5.5m-5.5 3.5h3.5" />
    </svg>
  );
}

function StatIcon({ label }: { label: string }) {
  if (label.toLowerCase().includes("experience")) {
    return <span className="about-stat-icon about-stat-icon-violet">&lt;/&gt;</span>;
  }
  if (label.toLowerCase().includes("gpa")) {
    return <span className="about-stat-icon about-stat-icon-green">↗</span>;
  }
  return <span className="about-stat-icon about-stat-icon-blue">▤</span>;
}

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="content-section">
      <SectionHeading eyebrow="About" title={about.title} description={about.description} />
      <div className="about-stats" aria-label="About stats">
        {about.stats.map((stat) => (
          <article key={stat.label} className="about-stat-card">
            <StatIcon label={stat.label} />
            <p className="about-stat-value">{stat.value}</p>
            <p className="about-stat-label">{stat.label}</p>
          </article>
        ))}
      </div>

      <div className="about-layout">
        <div className="about-left-stack">
          <article className="about-journey-card">
            <h3 className="about-card-title">
              <span className="about-title-icon about-title-icon-cyan">
                <AboutIcon kind="journey" />
              </span>
              {about.journeyTitle}
            </h3>
            {about.journeyParagraphs.map((paragraph) => (
              <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
            ))}
          </article>
        </div>

        <aside className="about-looking-card">
          <h3 className="about-card-title">
            <span className="about-title-icon about-title-icon-blue">
              <AboutIcon kind="looking" />
            </span>
            {about.lookingForTitle}
          </h3>
          <div className="about-looking-groups">
            {about.lookingForGroups.map((group) => (
              <section key={group.title} className="about-looking-group">
                <h4 className="about-group-title">
                  <span className="about-group-icon">
                    <AboutIcon
                      kind={
                        group.title === "Opportunities"
                          ? "opportunity"
                          : group.title === "Roles"
                            ? "roles"
                            : "work"
                      }
                    />
                  </span>
                  {group.title}
                </h4>
                <div className="about-looking-tags">
                  {group.items.map((item) => (
                    <span key={item} className="about-looking-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </aside>
      </div>

      <section className="about-achievements about-achievements-full">
        <div className="about-achievements-heading">
          <h3>{about.achievementsTitle}</h3>
          <p>{about.achievementsDescription}</p>
        </div>

        <div className="about-achievement-grid">
          {about.achievements.map((achievement) => (
            <article key={`${achievement.title}-${achievement.badge}`} className="about-achievement-card">
              <div className="about-achievement-top">
                <span className="about-achievement-icon" aria-hidden="true">
                  <AchievementIcon kind={achievement.kind} />
                </span>
                <span className="about-achievement-badge">{achievement.badge}</span>
              </div>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
              {achievement.linkHref && achievement.linkLabel ? (
                <a
                  className="about-achievement-link"
                  href={achievement.linkHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10.75 6h6.25v6.25m0-6.25-8.5 8.5M13 8H8A2 2 0 0 0 6 10v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5" />
                  </svg>
                  {achievement.linkLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
