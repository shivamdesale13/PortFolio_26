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
  highlights: [
    "MS CS @ SDSU",
    "Graduating May 2027"
  ],
  heroTags:  [
  "Microservices",
  "React",
  "Cloud",
  "AI/ML",
  "Distributed Systems"
],
  rotatingRoles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Cloud-Native Backend",
    "AI/ML Enthusiast"
  ],
  hero: {
    name: "Mrudula Kulkarni",
    intro: "Hi, I'm",
    roleDescription:
        "Building scalable backend and cloud-native systems with clean architecture and production reliability.",
    summary:
        "MS Computer Science student at San Diego State University with experience engineering enterprise backend services and cloud integrations. Now focusing on ML, NLP, and Generative AI to design intelligent, data-driven systems at scale.",
    portraitSrc: "/hero-portrait-ghibli.jpg",
    portraitAlt: "Mrudula Kulkarni portrait"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mrudula-kulkarni-748893191/",
    github: "https://github.com/Mrudula-Kulkarni",
    email: "mailto:mkulkarni5479@sdsu.edu"
  },
  about: {
    title: "From curiosity to scalable systems",
    description:
      "I design scalable full-stack and AI-enabled systems that combine thoughtful architecture with real-world impact",
    stats: [
      { value: "2+", label: "Experience" },
      { value: "3.9", label: "GPA" },
      { value: "2+", label: "Publications" }
    ],
    journeyTitle: "My Journey",
    journeyParagraphs: [
      "From a young age, I was fascinated by how simple lines of code could automate everyday tasks and make life easier, whether through something as simple as QR-based payments or systems powering larger platforms. That early curiosity evolved into a deeper interest in building software that operates at scale and solves **meaningful, real-world problems**.",
      "During my undergraduate studies in Information Technology, I strengthened my core computer science foundations while building **full-stack applications** that connected intuitive frontend experiences with reliable backend systems. Alongside academics, I actively contributed to IEEE initiatives, volunteered and mentored in technical communities, and gained hands-on industry exposure through internships at **IEEE, Fiserv, and HP**.",
      "After graduation, I spent **over two years at HP** as a Software Engineer, building backend services and cloud-native microservices within enterprise-scale architectures, working on REST APIs, cloud integrations, CI/CD pipelines, and production systems at scale. Now, as a Master’s student in Computer Science at San Diego State University, I am expanding into **Machine Learning and Generative AI**, designing intelligent systems that combine scalable infrastructure with data-driven insights."
    ],
    achievementsTitle: "Achievements & Recognition",
    achievementsDescription: "Selected milestones from research, engineering, and competitive projects.",
    achievements: [
      {
        title: "Technology Infusion Grand Challenge (TIGC) – Grant Recipient",
        description: "Awarded a $500 AUD grant for building a blockchain-powered toll system.",
        kind: "award",
        badge: "Winner"
      },
      {
        title: "IEEE EUREKA 2020 – Stream 1 Winner",
        description: "National Rank 1 in a nationwide engineering competition.",
        kind: "award",
        badge: "Winner"
      },
      {
        title: "Speech Emotion Recognition Using Machine Learning",
        description: "Published research on ML-based speech emotion classification.",
        kind: "publication",
        badge: "Published",
        linkLabel: "View Publication",
        linkHref: "https://ijrar.org/viewfull.php?&p_id=IJRAR1CNP011ç"
      },
      {
        title: "Smart Toll Booth System Using Smart Contracts",
        description: "Co-authored IEEE paper on blockchain-based toll automation.",
        kind: "publication",
        badge: "Published",
        linkLabel: "View Publication",
        linkHref: "https://ieeexplore.ieee.org/document/10126123"
      }
    ],
    lookingForTitle: "Looking For",
    lookingForGroups: [
      {
        title: "Opportunities",
        items: ["Internship", "Co-op"]
      },
      {
        title: "Roles",
        items: ["Software Engineer", "Backend", "Frontend", "Full-Stack"]
      }
    ]
  },
  education: {
    title: "Academic background",
    description:
      "Academic foundation that shaped my engineering mindset and approach to scalable system design.",
    items: [
      {
        level: "Graduate",
        degree: "Master of Science in Computer Science",
        institution: "San Diego State University",
        gpa: "3.91/4.0",
        period: "2025 - 2027",
        location: "San Diego, CA, USA",
        highlights: [
          "Advanced coursework in Data Structures, Algorithms, Machine Learning, and Data Science focused on scalable and data-driven systems.",
          "Conducting research on ML-driven NLP and Generative AI systems for large-scale information processing."
        ]
      },
      {
        level: "Undergraduate",
        degree: "Bachelor of Engineering in Information Technology",
        institution: "Savitribai Phule Pune University",
        gpa: "4.0/4.0",
        period: "2019 - 2023",
        location: "Pune, Maharashtra, India",
        highlights: [
          "Strong foundation in Object-Oriented Programming, Operating Systems, DBMS, and Distributed Systems.",
          "Gained industry and leadership experience through internships at HP and Fiserv and IEEE technical initiatives, contributing to scalable backend and full-stack systems."
        ]
      }
    ]
  },
  experience: {
    title: "Professional Experience",
    description:"A journey spanning backend engineering, cloud systems, and AI-powered research innovation.",
    items: [
      {
        role: "Research Software Engineer",
        company: "San Diego State University",
        period: "Aug 2025 - Present",
        achievements: [
          "Designed and deployed RAG-based GenAI systems integrating embedding-driven retrieval with LangChain orchestration for context-aware LLM inference over large research corpora.",
          "Built agentic AI pipelines using LangGraph to enable multi-step reasoning and autonomous workflow execution for literature review and NASA proposal analysis.",
          "Developed LLM-powered summarization and structured information extraction workflows using prompt engineering and vector search.",
          "Implemented ML-based topic modeling pipelines using NLP preprocessing and NMF to extract structured themes from large academic datasets."
        ],
        technologies: [
          "Python",
          "LLMs",
          "GenAI",
          "RAG",
          "Agentic AI",
          "NLP",
        ]
      },
      {
        role: "Software Engineer",
        company: "HP Inc.",
        period: "Jul 2023 - Jul 2025",
        achievements: [
          "Designed and developed backend microservices using Java and Spring Boot within HP’s enterprise workforce platform.",
          "Built and maintained RESTful APIs integrated with MongoDB and AWS cloud services in a distributed architecture.",
          "Implemented event-driven workflows and containerized services to support scalable, production-grade deployments.",
          "Collaborated across product, frontend, and DevOps teams to deliver reliable features in an Agile environment."
        ],
        technologies: ["Java", "Spring Boot", "MongoDB", "AWS", "Docker", "Kubernetes", "Jenkins"]
      },
      {
        role: "Software Engineer Intern",
        company: "HP Inc.",
        period: "Jan 2023 - Jul 2023",
        achievements: [
          "Developed RESTful APIs for the HP TechPulse DaaS platform to retrieve and process device fleet data.",
          "Enhanced frontend modules using React and Material-UI, focusing on responsive design and performance optimization.",
          "Worked with CI/CD pipelines, monitoring tools, and containerized deployments to support scalable production systems."
        ],
        technologies: ["Java", "Spring Boot", "React", "AWS", "Kubernetes", "Git"]
      },
      {
        role: "Technology Summer Intern",
        company: "Fiserv",
        period: "Jul 2022 - Sep 2022",
        achievements: [
          "Worked on backend modules within the Fiserv Biller product using C# and ASP.NET to enhance payment processing workflows.",
          "Optimized SQL queries and implemented stored procedures to improve transaction handling and system reliability.",
          "Developed responsive payment information forms using Angular Reactive Forms with state management integration."
        ],
        technologies: ["C#", "ASP.NET", "Microsoft SQL Server", "Angular", "NgRx"]
      },
      {
        role: "Full-Stack Developer Intern",
        company: "IEEE Pune Section",
        period: "Aug 2021 - Mar 2022",
        achievements: [
          "Developed a full-stack membership and event management dashboard using Node.js, Express, MongoDB, and React.",
          "Built RESTful APIs for user authentication, registration workflows, and admin data management.",
          "Designed reusable frontend components and automated reporting scripts to support event coordination."
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "React", "Python", "REST APIs"]
      }
    ]
  },
  projects: {
    title: "Selected Builds",
    description:
        "A curated selection of full-stack systems, ML models, AI-driven solutions, and blockchain-powered applications.",
    items: [
      {
        title: "Retail Sales Demand Forecasting (Festive vs Normal)",
        description:
            "Built an end-to-end ML pipeline on 2023–2024 retail sales data with feature engineering and time-series analysis. Trained a Decision Tree model to predict demand shifts and evaluated performance using MAE, RMSE, and R².",
        tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Time-Series"],
        linkLabel: "View Project",
        linkHref: "https://github.com/Mrudula-Kulkarni/Retail-Sales-Demand-Forecasting-Festive-vs-Normal"
      },
      {
        title: "Speech Emotion Recognition System",
        description:
            "Developed a speech emotion recognition system using MFCC feature extraction and CNN, SVM, and MLP classifiers, achieving 92% accuracy. Deployed as a Flask-based web application for real-time emotion prediction.",
        tags: ["Python", "Flask", "Machine Learning", "MFCC", "CNN", "SVM"],
        linkLabel: "View Project",
        linkHref: "https://ijrar.org/viewfull.php?&p_id=IJRAR1CNP011"
      },
      {
        title: "Smart Toll Booth System using Smart Contracts",
        description:
            "Designed a blockchain-powered GPS-based toll collection system using smart contracts to enable secure, decentralized, and transparent automated toll payments.",
        tags: ["Blockchain", "Smart Contracts", "Solidity", "GPS Tracking", "Web3"],
        linkLabel: "View Project",
        linkHref: "https://ieeexplore.ieee.org/document/10126123"
      }
    ]
  },
  skillsSection: {
    title: "Technical Skills",
    description: "Technologies I use to design, build, and scale production systems and AI workflows.",
    groups: [
      {
        title: "Programming Languages",
        icon: "</>",
        accent: "violet",
        items: ["Java", "Python", "C++", "Go", "TypeScript","JavaScript", "SQL"]
      },
      {
        title: "Frontend Development",
        icon: "◫",
        accent: "blue",
        items: ["ReactJS", "Next.js", "TailwindCSS", "Angular", "Material-UI", "HTML/CSS"]
      },
      {
        title: "Backend Development",
        icon: "▭",
        accent: "green",
        items: [
          "Spring Boot",
          "Flask",
          "Node.js",
          "REST APIs",
          "Microservices",
          "Event-Driven Architecture"
        ]
      },
      {
        title: "Databases",
        icon: "◉",
        accent: "orange",
        items: ["MySQL", "MongoDB", "PostgreSQL", "Redshift", "SQL Server"]
      },
      {
        title: "Cloud & DevOps",
        icon: "☁",
        accent: "cyan",
        // featured: true,
        items: ["AWS", "Lambda", "SNS/SQS", "Docker", "Kubernetes", "Jenkins"]
      },
      {
        title: "AI & ML",
        icon: "✷",
        accent: "pink",
        items: ["LLMs", "RAG", "Agentic AI", "LangChain", "LangGraph", "scikit-learn"]
      }
    ]
  },
  contact: {
    title: "Let’s build together",
    description:
        "Open to discussing new opportunities, creative ideas, and potential collaborations.",
    emailLabel: "Email",
    emailValue: "mkulkarni5479@sdsu.edu",
    emailHref: "mailto:mkulkarni5479@sdsu.edu",
    phoneLabel: "Phone",
    phoneValue: "+1 (619) 430-5672",
    phoneHref: "tel:+16194305672"
  },
  footer: {
    copyright: "© 2026 Mrudula Kulkarni. All rights reserved.",
    builtWith: "Designed & built with Next.js, React, TypeScript, and Tailwind CSS."
  }
};
