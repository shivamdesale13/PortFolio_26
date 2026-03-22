import type { PortfolioContent } from "../types/portfolio";

export const portfolioContent: PortfolioContent = {
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ],
  highlights: ["Software Engineer @ Anchor", "MS CS @ SDSU"],
  heroTags: ["Python", "GraphQL", "AWS", "React", "LLMs"],
  rotatingRoles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "AI Product Builder"
  ],
  hero: {
    name: "Shivam Desale",
    intro: "Hi, I'm",
    roleDescription:
      "Building production software across backend systems, full-stack products, and AI-assisted user experiences.",
    summary:
      "Software Engineer currently building ticketing and booking systems at Anchor Operating System. My work spans Python, GraphQL, React, AWS, and LLM-powered workflows, with prior experience across platform engineering, microservices, and high-scale internal products.",
    portraitSrc: "/hero-portrait-ghibli-optimized.jpg",
    portraitAlt: "Shivam Desale portrait"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/shivam-desale-02/",
    github: "https://github.com/shivamdesale13",
    email: "mailto:sdesale9794@sdsu.edu"
  },
  about: {
    title: "Engineering reliable systems with measurable impact",
    description:
      "I focus on backend and full-stack systems that improve reliability, performance, and user experience in production environments.",
    stats: [
      { value: "4", label: "Roles Delivered" },
      { value: "3.8", label: "MS GPA" },
      { value: "1", label: "AWS Certification" }
    ],
    journeyTitle: "My Journey",
    journeyParagraphs: [
      "My path has centered on shipping software that solves operational problems at scale, from healthcare reporting and employee platforms to real-time ticketing and booking systems.",
      "I have worked across **Java, Python, React, GraphQL, FastAPI, and AWS**, moving between backend services, responsive user interfaces, event-driven pipelines, and cloud deployments depending on what the product needed.",
      "Alongside industry experience, I am completing a **Master's in Computer Science at San Diego State University**, where I have continued building depth in AI, machine learning, data science, and systems-oriented engineering."
    ],
    achievementsTitle: "Credentials & Highlights",
    achievementsDescription: "Resume-backed highlights that reinforce technical depth and delivery impact.",
    achievements: [
      {
        title: "AWS Certified Solutions Architect - Associate",
        description: "Validated AWS architecture knowledge with certification ID 0YPRVP1201Q4QT3.",
        kind: "award",
        badge: "Certified"
      },
      {
        title: "Team Leadership at KPIT Technologies",
        description: "Led 3 interns, improved onboarding time by 70%, and coordinated delivery across 1700+ JIRA tickets.",
        kind: "award",
        badge: "Leadership"
      }
    ],
    lookingForTitle: "Looking For",
    lookingForGroups: [
      {
        title: "Opportunities",
        items: ["Software Engineering", "Full-Stack", "Backend", "Applied AI"]
      },
      {
        title: "Focus Areas",
        items: ["Distributed Systems", "Cloud Platforms", "GraphQL APIs", "LLM Workflows"]
      }
    ]
  },
  education: {
    title: "Academic background",
    description:
      "Graduate and undergraduate training focused on computer science fundamentals, machine learning, and scalable software systems.",
    items: [
      {
        level: "Graduate",
        degree: "Master of Science in Computer Science",
        institution: "San Diego State University",
        gpa: "3.8/4.0",
        period: "Aug 2024 - May 2026",
        location: "San Diego, CA, USA",
        highlights: [
          "Coursework in AI, Data Structures and Algorithms, Machine Learning, Data Science, and Computer Networks.",
          "Expanding depth in intelligent systems while applying software engineering practices to production-grade products."
        ]
      },
      {
        level: "Undergraduate",
        degree: "Bachelor of Engineering in Information Technology",
        institution: "Savitribai Phule Pune University",
        gpa: "4.0/4.0",
        period: "Aug 2019 - May 2023",
        location: "Pune, Maharashtra, India",
        highlights: [
          "Coursework in SDLC, Operating Systems, Distributed Systems, Object-Oriented Programming, and Cloud Computing.",
          "Built a strong foundation across systems, software delivery, and application development."
        ]
      }
    ]
  },
  experience: {
    title: "Professional Experience",
    description:
      "Hands-on engineering across ticketing, internal platforms, healthcare systems, and full-stack product delivery.",
    items: [
      {
        role: "Software Engineer",
        company: "Anchor Operating System",
        period: "Feb 2026 - Present",
        achievements: [
          "Architected an end-to-end Ticket Availability API for Expedia using Python, GraphQL, and AWS Lambda, delivering real-time availability.",
          "Engineered an interactive Seat Map and Seat Hold checkout flow in React, Redux, and Tailwind CSS, reducing seat-selection drop-offs.",
          "Implemented GenAI-generated explanations for failed bookings using prompt-engineered LLM workflows."
        ],
        technologies: ["Python", "GraphQL", "React", "JavaScript", "AWS", "LLMs", "OpenAI API", "Datadog"]
      },
      {
        role: "Software Engineer Intern",
        company: "Hornblower Group",
        period: "Jun 2025 - Aug 2025",
        achievements: [
          "Built a membership dashboard for San Diego Zoo using React and Redux-Saga with table virtualization for 50K+ records.",
          "Integrated GraphQL queries and mutations with AWS DynamoDB to update ticketing data in real time for kiosk workflows.",
          "Supported containerization of microservices with Docker and Jenkins CI/CD pipelines."
        ],
        technologies: ["Node.js", "GraphQL", "React", "TypeScript", "Docker", "AWS", "Redux"]
      },
      {
        role: "Software Developer (Full-stack)",
        company: "KPIT Technologies",
        period: "Sep 2023 - Jun 2024",
        achievements: [
          "Optimized an event-driven pipeline using FastAPI, Python, and Kafka to automate course assignment and progress updates.",
          "Built RESTful APIs with FastAPI and Pydantic, integrating PostgreSQL and Elasticsearch.",
          "Validated scalability with PyTest, Jest, and JMeter across FastAPI and React workloads for 1000+ concurrent users.",
          //"Led 3 interns and improved onboarding time by 70% while coordinating delivery across 1700+ JIRA tickets in an Agile workflow."
        ],
        technologies: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Elasticsearch", "React", "PyTest", "Jest", "JMeter"]
      },
      {
        role: "Associate Software Engineer",
        company: "Avanzens",
        period: "May 2022 - Jul 2023",
        achievements: [
          "Automated a healthcare reporting microservice and background workflows using Java and Spring Boot.",
          "Designed a responsive UI for the Baioniq healthcare product with ReactJS and Material-UI, integrating Redis caching to improve performance.",
          "Assisted in deploying a patient data ingestion service on Linux using Kubernetes with MongoDB and MySQL persistence, reducing downtime.",
          "Collaborated with 4 cross-functional teams to deliver features through GitLab CI/CD pipelines using Agile practices."
        ],
        technologies: ["Java", "Spring Boot", "ReactJS", "Material-UI", "Redis", "MySQL", "MongoDB", "Kubernetes", "GitLab CI/CD"]
      }
    ]
  },
  projects: {
    title: "Selected Builds",
    description:
      "Projects that reflect interest in AI-assisted interfaces, real-time interaction, and production-oriented application design.",
    items: [
      {
        title: "ConvoVoice AI - Real-Time WebRTC Voice Assistant",
        description:
          "Developed a real-time voice AI assistant for inbound calls using OpenAI API, Twilio, Node.js, and Express. Applied NLP techniques for intent extraction and response generation, then delivered automated spoken replies through TTS.",
        tags: ["OpenAI API", "NLP", "JavaScript", "Node.js", "Express", "Twilio", "WebRTC", "Deepgram"],
        linkLabel: "View Code",
        linkHref: "https://github.com/shivamdesale13/WebRTC-Voice-AI-Bot--"
      },
      {
        title: "Garment Worker Productivity Analysis",
        description:
            "Performed EDA using Pandas, NumPy, and Matplotlib/Seaborn to analyze garment worker productivity trends. Preprocessed data, handling missing values, feature engineering, and outlier detection for dataset integrity.",
        tags: ["Python", "Pandas", "Numpy", "Claude AI", "Kaggle"],
        linkLabel: "View Code",
        linkHref: "https://github.com/shivamdesale13/Worker_productivity_prediction"
      },
      {
        title: "SMART TOLL BOOTH SYSTEM USING SMART CONTRACT",
        description:
            "Designed and implemented an admin panel website for efficient tracking and executed logic for smart contracts, ensuring secure and transparent toll transactions.",
        tags: ["Python", "Django", "React", "JavaScript", "Node.js", "Express"],
        linkLabel: "View Code",
        linkHref: "https://github.com/shivamdesale13"
      }

    ]
  },
  skillsSection: {
    title: "Technical Skills",
    description: "Tools and platforms I use across backend systems, cloud infrastructure, and full-stack application delivery.",
    groups: [
      {
        title: "Programming Languages",
        icon: "</>",
        accent: "violet",
        items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "C#", "SQL"]
      },
      {
        title: "Frameworks",
        icon: "◫",
        accent: "blue",
        items: ["FastAPI", "Flask", "Django", "ReactJS", "GraphQL", "Node.js", "Angular", "Spring", ".NET"]
      },
      {
        title: "Backend & Systems",
        icon: "▭",
        accent: "green",
        items: ["Kafka", "REST APIs", "AWS Lambda", "Microservices", "Redis", "Linux"]
      },
      {
        title: "Databases & Storage",
        icon: "◉",
        accent: "orange",
        items: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "ElastiCache", "S3", "Redis"]
      },
      {
        title: "Cloud & DevOps",
        icon: "☁",
        accent: "cyan",
        items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "GitLab", "Terraform", "Datadog", "GCP"]
      },
      {
        title: "AI & ML",
        icon: "✷",
        accent: "pink",
        items: ["LLMs", "OpenAI API", "TensorFlow", "Machine Learning", "NLP", "Prompt Engineering"]
      }
    ]
  },
  contact: {
    title: "Let's connect",
    description:
      "Open to software engineering conversations across backend, full-stack, cloud, and applied AI work.",
    emailLabel: "Email",
    emailValue: "sdesale9794@sdsu.edu",
    emailHref: "mailto:sdesale9794@sdsu.edu",
    phoneLabel: "Phone",
    phoneValue: "+1 (619) 534-7622",
    phoneHref: "tel:+16195347622"
  },
  footer: {
    copyright: "© 2026 Shivam Desale. All rights reserved.",
    builtWith: "Designed & built with Next.js, React, TypeScript, and CSS."
  }
};
