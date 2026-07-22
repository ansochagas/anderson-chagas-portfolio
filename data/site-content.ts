export type ProfileLink = {
  href: string;
  label: string;
};

export type AccentTone = "blue" | "purple" | "orange" | "green";

export type ResumeAsset = {
  downloadName: string;
  href: string;
  label: string;
};

export type CaseStatus = "published" | "draft";

export type CaseStudy = {
  category: string;
  featured?: boolean;
  focus: string[];
  linkLabel?: string;
  placeholderNote: string;
  preview: string[];
  slug: string;
  status: CaseStatus;
  summary: string;
  title: string;
};

export type WhatIBringItem = {
  description: string;
  title: string;
};

export type ExperienceSnapshotItem = {
  context: string;
  role: string;
};

export type ExpertiseGroup = {
  items: string[];
  summary: string;
  title: string;
};

export type HeroMetric = {
  label: string;
  tone: AccentTone;
  value: string;
};

export type ExperienceHighlight = {
  challenge: string;
  company: string;
  impact: string;
  location: string;
  period: string;
  role: string;
  tone: AccentTone;
};

export type SkillBlock = {
  items: string[];
  summary: string;
  title: string;
  tone: AccentTone;
};

export const navigationItems = [
  { label: "Work", href: "/#selected-work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const profileLinks: ProfileLink[] = [
  {
    label: "Email",
    href: "mailto:andersonchagas45@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anderson-chagas-868307b2/",
  },
  {
    label: "GitHub",
    href: "https://github.com/ansochagas",
  },
];

export const resumeAsset: ResumeAsset = {
  label: "Download Resume",
  href: "/resume/anderson-chagas-resume.pdf",
  downloadName: "Anderson-Chagas-Resume.pdf",
};

export const homeHero = {
  name: "Anderson Chagas",
  title: "Senior Technical Product Manager",
  subtitle: "SaaS, AI, Automation and Digital Transformation",
  statement:
    "I turn product strategy, AI and operational complexity into scalable digital products.",
  supportingText:
    "Executive product leadership with technical depth across SaaS, automation, digital transformation and AI-enabled delivery.",
};

export const heroMetrics: HeroMetric[] = [
  {
    value: "10+ years",
    label: "In technology",
    tone: "blue",
  },
  {
    value: "6+ years",
    label: "In product and governance",
    tone: "purple",
  },
  {
    value: "60K+",
    label: "Users reached",
    tone: "green",
  },
  {
    value: "R$3M+",
    label: "Cumulative revenue",
    tone: "orange",
  },
  {
    value: "12",
    label: "Professionals led",
    tone: "blue",
  },
];

export const operatingModel = [
  {
    step: "01",
    title: "Context",
    description:
      "Understand the business model, workflow friction and cross-team constraints before jumping to output.",
  },
  {
    step: "02",
    title: "Structure",
    description:
      "Translate ambiguity into discovery tracks, process views, decisions and a workable product path.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Collaborate closely with engineering, architecture and data teams on scope, tradeoffs and implementation details.",
  },
];

export const professionalSummary = [
  "I work at the intersection of business and engineering, leading discovery, shaping product direction and turning complex requirements into clear, buildable solutions.",
  "My software development background helps me evaluate technical trade-offs and collaborate closely with engineering teams.",
];

export const aboutSkillBlocks: SkillBlock[] = [
  {
    title: "Product",
    summary:
      "Discovery, prioritization and scope definition grounded in business value and delivery reality.",
    items: [
      "Product strategy",
      "Roadmaps",
      "Prioritization",
      "Requirements",
      "Acceptance criteria",
    ],
    tone: "blue",
  },
  {
    title: "Leadership",
    summary:
      "Cross-functional alignment connecting stakeholders, delivery teams and technical decision-making.",
    items: [
      "Stakeholder alignment",
      "Backlog ownership",
      "Delivery readiness",
      "Cross-functional leadership",
      "Team coordination",
    ],
    tone: "purple",
  },
  {
    title: "Process",
    summary:
      "Structured transformation work spanning AS-IS / TO-BE mapping, business rules and automation opportunities.",
    items: [
      "AS-IS / TO-BE",
      "Business rules",
      "Service design",
      "Workflow redesign",
      "Automation opportunities",
    ],
    tone: "orange",
  },
  {
    title: "Technical",
    summary:
      "Hands-on familiarity with APIs, integrations, data workflows and AI-enabled product architecture.",
    items: [
      "APIs",
      "Integrations",
      "Data products",
      "LLM workflows",
      "Architecture trade-offs",
    ],
    tone: "green",
  },
];

export const whatIBring: WhatIBringItem[] = [
  {
    title: "Product Discovery",
    description:
      "Turning business problems and operational realities into clear product direction.",
  },
  {
    title: "Technical Product Leadership",
    description:
      "Connecting stakeholders and engineering teams to create viable, buildable solutions.",
  },
  {
    title: "AI & Automation",
    description:
      "Identifying practical opportunities to improve products and operational workflows.",
  },
];

export const experienceSnapshot: ExperienceSnapshotItem[] = [
  {
    role: "Senior Product Owner",
    context: "Enterprise Digital Transformation / Healthcare",
  },
  {
    role: "Founder & Product Lead",
    context: "BCS Sports Analytics",
  },
  {
    role: "Software Developer & Consultant",
    context: "SaaS, APIs, integrations, data and AI products",
  },
];

export const experienceHighlights: ExperienceHighlight[] = [
  {
    company: "Hapvida NotreDame Intermedica",
    role: "Senior Product Owner | Digital Transformation",
    period: "Mar 2026 - Present",
    location: "Fortaleza, Brazil",
    challenge:
      "Turn complex shared-service workflows, rules and exceptions into implementation-ready digital requirements across enterprise systems.",
    impact:
      "Led discovery, AS-IS / TO-BE mapping and backlog refinement across business, operations, architecture and engineering.",
    tone: "blue",
  },
  {
    company: "BCS Sports Analytics",
    role: "Co-Founder & Product Lead | Technical Product Manager",
    period: "2019 - Present",
    location: "Fortaleza, Brazil",
    challenge:
      "Build and scale a sports analytics SaaS capable of translating live football data into practical decision support and monetizable product value.",
    impact:
      "Reached 60K+ users and R$3M+ in cumulative revenue while leading product vision, roadmap, monetization and continuous evolution.",
    tone: "green",
  },
  {
    company: "GR Business Solutions",
    role: "Systems Consultant | IT Process Analyst",
    period: "2015 - 2019",
    location: "Fortaleza, Brazil",
    challenge:
      "Translate operational requirements from B2B clients into workable system configurations, documentation and process improvements.",
    impact:
      "Supported implementations, user adoption and workflow standardization across client-facing operational environments.",
    tone: "orange",
  },
];

export const bcsKpis: HeroMetric[] = [
  {
    value: "60K+",
    label: "Users",
    tone: "green",
  },
  {
    value: "R$3M+",
    label: "Cumulative revenue",
    tone: "orange",
  },
  {
    value: "12",
    label: "Professionals led",
    tone: "blue",
  },
  {
    value: "7+ years",
    label: "Product evolution",
    tone: "purple",
  },
];

export const portfolioCases: CaseStudy[] = [
  {
    slug: "bcs-sports-analytics",
    category: "Sports Analytics SaaS",
    title: "Building and Scaling a Sports Analytics SaaS",
    summary:
      "Turning real-time football data into practical insights, live monitoring and automated alerts within a sports analytics SaaS.",
    focus: [
      "Real-time football data translated into fast, practical decision support.",
      "Analytical tools, live monitoring and alerts built around active usage patterns.",
      "Product leadership spanning strategy, SaaS evolution and technical execution.",
    ],
    preview: ["Product Strategy", "SaaS", "Sports Data", "Automation"],
    status: "published",
    placeholderNote:
      "Platform overview, live monitoring, Telegram alert and brand visuals are integrated with real product evidence.",
    featured: true,
    linkLabel: "Open case",
  },
  {
    slug: "enterprise-service-operations",
    category: "Enterprise Digital Transformation",
    title: "Modernizing Enterprise Service Operations",
    summary:
      "Transforming complex operational processes into clear digital service requirements through discovery, process design and technical alignment.",
    focus: [
      "Anonymized enterprise transformation work without exposing internal systems or sensitive operations.",
      "Discovery, process design and stakeholder alignment across business and technical teams.",
      "Clear path from operational complexity to implementation-ready requirements.",
    ],
    preview: [
      "Product Discovery",
      "Process Design",
      "Automation",
      "Digital Transformation",
    ],
    status: "published",
    placeholderNote:
      "Portfolio-safe diagrams represent discovery, process design and stakeholder alignment without exposing internal systems.",
    linkLabel: "Open case",
  },
  {
    slug: "ai-intelligence-pipeline",
    category: "AI and Data Product Prototype",
    title: "Designing an AI-Powered Intelligence Pipeline",
    summary:
      "Turning fragmented public data into structured intelligence through automated collection, semantic search and AI-assisted analysis.",
    focus: [
      "Product definition for a functional prototype involving data collection, enrichment and semantic retrieval.",
      "End-to-end thinking across user flow, processing architecture and AI-assisted analysis.",
      "Technical trade-offs evaluated with attention to traceability, scalability and processing cost.",
    ],
    preview: [
      "AI Product",
      "Data Pipelines",
      "Semantic Search",
      "Product Strategy",
    ],
    status: "published",
    placeholderNote:
      "Portfolio-safe diagrams explain the functional prototype, data flow, semantic retrieval and architecture trade-offs without inventing clients or results.",
    linkLabel: "Open case",
  },
  {
    slug: "ai-product-experiences",
    category: "AI Product Development",
    title: "Designing AI-Powered Product Experiences",
    summary:
      "A case built to demonstrate how AI opportunities become useful product experiences, instead of looking like a generic API integration exercise.",
    focus: [
      "Framing AI opportunities around user value, trust and workflow fit.",
      "Connecting prompts, interfaces and technical constraints into a product experience.",
      "Documenting practical tradeoffs rather than presenting AI as a buzzword layer.",
    ],
    preview: ["User value", "Prompt design", "Workflow fit", "Guardrails"],
    status: "draft",
    placeholderNote:
      "Placeholder: confirm which approved AI initiative will support this case.",
  },
];

export const contactPrompt = "Let's build something valuable.";
export const contactDescription =
  "Open to selected freelance projects and international product opportunities.";

export const casePageSections = [
  {
    title: "Context",
    note: "What was happening in the business or product landscape before the work started.",
  },
  {
    title: "Challenge",
    note: "What problem had to be solved, framed in business and operational terms.",
  },
  {
    title: "My Role",
    note: "What decisions, facilitation and ownership sat directly with you.",
  },
  {
    title: "Discovery",
    note: "How the problem was investigated and how insights were translated into direction.",
  },
  {
    title: "Constraints",
    note: "The real business, technical or organizational limits that shaped the solution.",
  },
  {
    title: "Decisions",
    note: "The tradeoffs, priorities and sequencing choices that moved the work forward.",
  },
  {
    title: "Solution",
    note: "What was designed, built or orchestrated at a product and systems level.",
  },
  {
    title: "Technical Collaboration",
    note: "How product work connected with engineering, architecture and data teams.",
  },
  {
    title: "Impact",
    note: "What changed after delivery, using only approved metrics and public-safe evidence.",
  },
  {
    title: "Lessons Learned",
    note: "The strategic or product learning that makes the case worth reading.",
  },
];

export const publishedPortfolioCases = portfolioCases.filter(
  (caseStudy) => caseStudy.status === "published",
);

export function getCaseBySlug(slug: string) {
  return portfolioCases.find((caseStudy) => caseStudy.slug === slug);
}

export function getPublishedCaseBySlug(slug: string) {
  return publishedPortfolioCases.find((caseStudy) => caseStudy.slug === slug);
}
