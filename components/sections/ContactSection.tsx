import SectionHeading from "../portfolio/SectionHeading";
import type { PortfolioContent } from "../../types/portfolio";

type ContactSectionProps = {
  contact: PortfolioContent["contact"];
};

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="content-section contact-wrap">
      <SectionHeading eyebrow="Contact" title={contact.title} description={contact.description} />
      <div className="contact-grid">
        <a className="contact-card" href={contact.emailHref}>
          <span className="contact-card-icon contact-card-icon-email" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="M5.5 8L12 13L18.5 8" />
            </svg>
          </span>
          <h3>{contact.emailLabel}</h3>
          <p>{contact.emailValue}</p>
        </a>

        <a className="contact-card" href={contact.phoneHref}>
          <span className="contact-card-icon contact-card-icon-phone" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7.8 3.8L10.2 3.2C11 3 11.8 3.4 12.2 4.2L13.3 6.6C13.6 7.3 13.4 8.2 12.7 8.7L11.4 9.7C11.9 11.1 12.9 12.1 14.3 12.6L15.3 11.3C15.8 10.6 16.7 10.4 17.4 10.7L19.8 11.8C20.6 12.2 21 13 20.8 13.8L20.2 16.2C20 17.1 19.2 17.7 18.3 17.7C10.5 17.7 6.3 13.5 6.3 5.7C6.3 4.8 6.9 4 7.8 3.8Z" />
            </svg>
          </span>
          <h3>{contact.phoneLabel}</h3>
          <p>{contact.phoneValue}</p>
        </a>
      </div>
    </section>
  );
}
