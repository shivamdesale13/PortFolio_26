export type NavItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
};

export type EducationItem = {
  level: string;
  degree: string;
  institution: string;
  gpa?: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  linkLabel: string;
  linkHref: string;
};

export type SkillGroupAccent = "violet" | "blue" | "green" | "orange" | "cyan" | "pink";

export type SkillGroup = {
  title: string;
  icon: string;
  accent: SkillGroupAccent;
  items: string[];
  featured?: boolean;
};

export type PortfolioContent = {
  navItems: NavItem[];
  highlights: string[];
  heroTags: string[];
  rotatingRoles: string[];
  hero: {
    name: string;
    intro: string;
    roleDescription: string;
    summary: string;
    portraitSrc: string;
    portraitAlt: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    email: string;
  };
  about: {
    title: string;
    description: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    journeyTitle: string;
    journeyParagraphs: string[];
    achievementsTitle: string;
    achievementsDescription: string;
    achievements: Array<{
      title: string;
      description: string;
      kind: "award" | "publication";
      badge: string;
      linkHref?: string;
      linkLabel?: string;
    }>;
    lookingForTitle: string;
    lookingForGroups: Array<{
      title: string;
      items: string[];
    }>;
  };
  education: {
    title: string;
    description: string;
    items: EducationItem[];
  };
  experience: {
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    description: string;
    items: Project[];
  };
  skillsSection: {
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  contact: {
    title: string;
    description: string;
    emailLabel: string;
    emailValue: string;
    emailHref: string;
    phoneLabel: string;
    phoneValue: string;
    phoneHref: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
};
