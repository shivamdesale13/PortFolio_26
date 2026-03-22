import SectionHeading from "../portfolio/SectionHeading";
import type { PortfolioContent } from "../../types/portfolio";

type EducationSectionProps = {
  education: PortfolioContent["education"];
};

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="content-section">
      <SectionHeading
        eyebrow="Education"
        title={education.title}
        description={education.description}
        className="education-section-heading"
      />

      <div className="education-stack">
        {education.items.map((item) => (
          <article key={`${item.degree}-${item.period}`} className="education-card">
            <div className="education-level-badge">{item.level}</div>

            <h3 className="education-degree">{item.degree}</h3>

            <div className="education-meta-list">
              <div className="education-meta-row">
                <span className="education-meta-text">{item.institution}</span>
                {item.gpa ? <span className="education-gpa-pill">GPA: {item.gpa}</span> : null}
              </div>

              <div className="education-meta-row">
                <span className="education-meta-icon" aria-hidden="true">
                  □
                </span>
                <span className="education-meta-text">{item.period}</span>
              </div>

              <div className="education-meta-row">
                <span className="education-meta-icon" aria-hidden="true">
                  ◉
                </span>
                <span className="education-meta-text">{item.location}</span>
              </div>
            </div>

            <div className="education-highlights">
              <p className="education-highlights-title">Highlights</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
