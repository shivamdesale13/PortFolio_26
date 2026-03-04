import Image from "next/image";
import TypewriterRotator from "../TypewriterRotator";
import LinkIcon from "../portfolio/LinkIcon";
import type { PortfolioContent } from "../../types/portfolio";

type HeroSectionProps = Pick<
  PortfolioContent,
  "hero" | "highlights" | "heroTags" | "rotatingRoles" | "socialLinks"
>;

export default function HeroSection({
  hero,
  highlights,
  heroTags,
  rotatingRoles,
  socialLinks
}: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="intro-line">{hero.intro}</p>
        <h1>{hero.name}</h1>
        <div className="typing-wrap" aria-label="Rotating role text">
          <p className="typing-line">
            <TypewriterRotator words={rotatingRoles} />
            <span className="caret" aria-hidden="true" />
          </p>
        </div>
        <p className="role-line">{hero.roleDescription}</p>

        <div className="chip-row">
          {highlights.map((item) => (
            <span key={item} className="chip chip-solid">
              {item}
            </span>
          ))}
        </div>

        <p className="hero-summary">{hero.summary}</p>

        <div className="chip-row chip-row-muted" aria-label="Skill tags">
          {heroTags.map((tag) => (
            <span key={tag} className="chip chip-outline">
              {tag}
            </span>
          ))}
        </div>

        <div className="cta-row">
          <a className="cta-btn" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <LinkIcon type="linkedin" />
            LinkedIn
          </a>
          <a className="cta-btn" href={socialLinks.github} target="_blank" rel="noreferrer">
            <LinkIcon type="github" />
            GitHub
          </a>
          <a className="cta-btn" href={socialLinks.email}>
            <LinkIcon type="mail" />
            Email
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hex-outline" aria-hidden="true" />
        <div className="visual-accent visual-accent-top" aria-hidden="true" />
        <div className="visual-accent visual-accent-bottom" aria-hidden="true" />
        <div className="float-shape float-square shape-1" aria-hidden="true" />
        <div className="float-shape float-square shape-2" aria-hidden="true" />
        <div className="float-shape float-ring shape-3" aria-hidden="true" />
        <div className="float-shape float-dot shape-4" aria-hidden="true" />
        <div className="float-shape float-pill shape-5" aria-hidden="true" />
        <div className="float-shape float-grid shape-6" aria-hidden="true" />

        <div className="portrait-card">
          <Image
            src={hero.portraitSrc}
            alt={hero.portraitAlt}
            width={460}
            height={560}
            priority
          />
        </div>
      </div>
    </section>
  );
}
