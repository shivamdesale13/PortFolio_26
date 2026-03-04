import SectionHeading from "../portfolio/SectionHeading";
import type { PortfolioContent } from "../../types/portfolio";

type ExperienceSectionProps = {
  experience: PortfolioContent["experience"];
};

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="content-section">
      <SectionHeading eyebrow="Experience" title={experience.title} description={experience.description} />

      <div className="experience-timeline">
        <div className="experience-line" aria-hidden="true" />

        {experience.items.map((item, index) => {
          const sideClass = index % 2 === 0 ? "left" : "right";

          return (
            <article key={`${item.role}-${item.period}`} className={`experience-card ${sideClass}`}>
              <div className="experience-card-inner">
                <h3 className="experience-role">{item.role}</h3>

                <div className="experience-meta">
                  <p>{item.company}</p>
                  <p>{item.period}</p>
                </div>

                <div className="experience-block">
                  <h4>Key Achievements</h4>
                  <ul>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-block">
                  <h4>Technologies</h4>
                  <div className="experience-tech-tags">
                    {item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="experience-node" aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
