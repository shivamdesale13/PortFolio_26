import SectionHeading from "../portfolio/SectionHeading";
import type { PortfolioContent } from "../../types/portfolio";

type ProjectsSectionProps = {
  projects: PortfolioContent["projects"];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="content-section">
      <SectionHeading eyebrow="Projects" title={projects.title} description={projects.description} />
      <div className="project-grid">
        {projects.items.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-glow" aria-hidden="true" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chip-row chip-row-muted">
              {project.tags.map((tag) => (
                <span key={tag} className="chip chip-outline">
                  {tag}
                </span>
              ))}
            </div>
            <a className="project-link" href={project.linkHref}>
              {project.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
