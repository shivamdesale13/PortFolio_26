import SectionHeading from "../portfolio/SectionHeading";
import type { TimelineItem } from "../../types/portfolio";

type TimelineSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: TimelineItem[];
};

export default function TimelineSection({
  id,
  eyebrow,
  title,
  description,
  items
}: TimelineSectionProps) {
  return (
    <section id={id} className="content-section">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="timeline">
        {items.map((item) => (
          <article key={`${item.title}-${item.period}`} className="timeline-card">
            <div className="timeline-dot" aria-hidden="true" />
            <div>
              <div className="meta-row">
                <h3>{item.title}</h3>
                <span>{item.period}</span>
              </div>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
