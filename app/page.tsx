import SectionNav from "../components/SectionNav";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ScrollEffects from "../components/ScrollEffects";
import SectionDivider from "../components/sections/SectionDivider";
import SiteFooter from "../components/sections/SiteFooter";
import SkillsSection from "../components/sections/SkillsSection";
import { portfolioContent } from "../data/portfolio";

export default function HomePage() {
  const {
    navItems,
    hero,
    highlights,
    heroTags,
    rotatingRoles,
    socialLinks,
    about,
    education,
    experience,
    projects,
    skillsSection,
    contact,
    footer
  } = portfolioContent;

  return (
    <main className="portfolio-shell">
      <ScrollEffects />
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />
      <div className="grid-fade" aria-hidden="true" />

      <SectionNav items={navItems} />

      <HeroSection
        hero={hero}
        highlights={highlights}
        heroTags={heroTags}
        rotatingRoles={rotatingRoles}
        socialLinks={socialLinks}
      />

      <SectionDivider icon="✦" dots={4} />
      <AboutSection about={about} />

      <SectionDivider icon="◌" dots={3} />
      <EducationSection education={education} />

      <SectionDivider icon="☁" dots={3} />
      <ExperienceSection experience={experience} />

      <SectionDivider icon="{}" dots={3} />
      <ProjectsSection projects={projects} />

      <SectionDivider icon="✧" dots={2} />
      <SkillsSection skillsSection={skillsSection} />

      <SectionDivider icon="✦" dots={4} />
      <ContactSection contact={contact} />

      <SiteFooter footer={footer} />
    </main>
  );
}
