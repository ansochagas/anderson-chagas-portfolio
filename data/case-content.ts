export type CaseQuickFact = {
  label: string;
  value: string;
};

export type CaseNarrativeBlock = {
  body: string[];
  eyebrow: string;
  id: string;
  listTitle?: string;
  points?: string[];
  title: string;
};

export type CaseVisualPlaceholder = {
  ariaLabel: string;
  description: string;
  eyebrow: string;
  id: string;
  title: string;
  todoLabel: string;
  variant:
    | "dashboard"
    | "tools"
    | "alerts"
    | "diagram"
    | "ai"
    | "framework"
    | "comparison"
    | "workflow"
    | "stakeholders"
    | "sources"
    | "pipeline"
    | "semantic"
    | "decisions";
};

export type CaseVisualImage = {
  alt: string;
  description: string;
  eyebrow: string;
  height: number;
  id: string;
  kind: "image";
  mobileMinWidth?: number;
  mobileScrollable?: boolean;
  priority?: boolean;
  sizes?: string;
  src: string;
  title: string;
  width: number;
};

export type CaseDiagramStep = {
  description?: string;
  label: string;
};

export type CaseDiagramGroup = {
  items: string[];
  label: string;
};

type CaseVisualDiagramBase = {
  description: string;
  eyebrow: string;
  id: string;
  kind: "diagram";
  title: string;
};

export type CaseVisualDiscoveryDiagram = CaseVisualDiagramBase & {
  diagramType: "discovery";
  emphasisLabels?: string[];
  steps: CaseDiagramStep[];
};

export type CaseVisualComparisonDiagram = CaseVisualDiagramBase & {
  currentState: CaseDiagramGroup;
  diagramType: "comparison";
  futureState: CaseDiagramGroup;
};

export type CaseVisualDecisionFlowDiagram = CaseVisualDiagramBase & {
  diagramType: "decision-flow";
  note: string;
  steps: string[];
};

export type CaseVisualCollaborationDiagram = CaseVisualDiagramBase & {
  centerDescription?: string;
  centerEyebrow?: string;
  centerLabel: string;
  collaborators: CaseDiagramStep[];
  diagramType: "collaboration";
  mobileCenterPlacement?: "first" | "last";
};

export type CaseVisualDiagram =
  | CaseVisualDiscoveryDiagram
  | CaseVisualComparisonDiagram
  | CaseVisualDecisionFlowDiagram
  | CaseVisualCollaborationDiagram;

export type CaseVisual =
  | CaseVisualPlaceholder
  | CaseVisualImage
  | CaseVisualDiagram;

export type DetailedCaseStudy = {
  approach: CaseNarrativeBlock;
  approachFlow: string[];
  approachTags?: string[];
  challenge: CaseNarrativeBlock;
  contactCta: {
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    title: string;
  };
  galleryIntro: string;
  heroDescription: string;
  impact: CaseNarrativeBlock;
  impactPlaceholder: string;
  myRole: CaseNarrativeBlock;
  nextCaseSlug: string;
  projectFacts: CaseQuickFact[];
  slug: string;
  solution: CaseNarrativeBlock;
  subtitle: string;
  title: string;
  visuals: CaseVisual[];
};

export const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    slug: "bcs-sports-analytics",
    title: "Building and Scaling a Sports Analytics SaaS",
    subtitle:
      "Turning real-time football data into practical analysis, live monitoring and automated decision support.",
    heroDescription:
      "BCS Sports Analytics helps users interpret live match data faster and identify relevant scenarios without monitoring multiple platforms at the same time.",
    projectFacts: [
      {
        label: "Role",
        value: "Founder, Product Lead & Technical Contributor",
      },
      {
        label: "Product",
        value: "Sports Analytics SaaS",
      },
      {
        label: "Focus",
        value: "Sports Data, Analytical Tools and Real-Time Monitoring",
      },
    ],
    challenge: {
      id: "challenge",
      eyebrow: "Challenge",
      title: "The Challenge",
      body: [
        "Football generates a large volume of real-time data, often fragmented across multiple platforms.",
        "The challenge was to make this information easier to interpret and help users identify relevant match scenarios quickly.",
      ],
    },
    myRole: {
      id: "my-role",
      eyebrow: "What I Did",
      title: "What I Did",
      body: [],
      points: [
        "Defined the product strategy and roadmap",
        "Translated user needs into analytical features",
        "Designed business rules and scoring models",
        "Led sports data and API integrations",
        "Developed automation and live monitoring initiatives",
        "Supported pricing, monetization and product evolution",
      ],
    },
    approach: {
      id: "approach",
      eyebrow: "Product Approach",
      title: "Product Approach",
      body: [
        "The product evolved through continuous user feedback, usage analysis and incremental releases.",
        "Every decision considered user relevance, data reliability and the ability to simplify complex information.",
      ],
    },
    approachFlow: [
      "User needs",
      "Product decisions",
      "Data and APIs",
      "Features",
      "Continuous improvement",
    ],
    approachTags: [
      "User relevance",
      "Data reliability",
      "Fast interpretation",
    ],
    solution: {
      id: "solution",
      eyebrow: "The Solution",
      title: "The Solution",
      body: [
        "BCS became a sports analytics platform combining practical analysis tools, live match monitoring and automated alert distribution.",
      ],
      points: [
        "Pre-match and live data",
        "Analytical tools for goals, corners, cards and shots",
        "Real-time live match monitoring",
        "Automated Telegram alerts",
        "Match scoring and opportunity identification",
        "SaaS product evolution and monetization",
      ],
    },
    impact: {
      id: "impact",
      eyebrow: "Impact",
      title: "Impact",
      body: [
        "BCS evolved as a recurring sports analytics product combining product strategy, automation and real-time decision support.",
        "The project demonstrates my ability to lead the full product lifecycle, from opportunity framing to SaaS evolution and technical execution.",
      ],
    },
    impactPlaceholder: "Reserved for approved metrics or operational proof points.",
    galleryIntro:
      "Real product screens are used where approved, while remaining evidence stays clearly labeled until additional assets are available.",
    visuals: [
      {
        kind: "image",
        id: "platform-overview",
        eyebrow: "Platform Overview",
        title: "Platform Overview",
        description:
          "A decision-support experience combining probability, confidence, fair odds and value analysis.",
        alt: "BCS BestAnalysis dashboard combining probability, confidence, fair odds and value analysis.",
        src: "/portfolio/bcs/platform-overview.webp",
        width: 1672,
        height: 941,
        priority: true,
        sizes:
          "(min-width: 1280px) 1120px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)",
      },
      {
        kind: "image",
        id: "live-match-monitoring",
        eyebrow: "Live Match Monitoring",
        title: "Live Match Monitoring",
        description:
          "Real-time monitoring brings live events, pressure data and performance indicators into a single view.",
        alt: "BCS real-time football monitoring interface showing live events, pressure data and match statistics.",
        src: "/portfolio/bcs/live-match-monitoring.webp",
        width: 1672,
        height: 941,
        mobileScrollable: true,
        mobileMinWidth: 960,
        sizes:
          "(min-width: 1280px) 1120px, (min-width: 768px) calc(100vw - 4rem), 960px",
      },
      {
        kind: "image",
        id: "telegram-alert",
        eyebrow: "Automation",
        title: "Telegram Alert",
        description:
          "Automated alerts transform live match signals into fast and actionable information.",
        alt: "Automated football analysis alert delivered through Telegram.",
        src: "/portfolio/bcs/telegram-alert.webp",
        width: 533,
        height: 390,
        sizes:
          "(min-width: 1280px) 420px, (min-width: 768px) 420px, calc(100vw - 2.5rem)",
      },
      {
        kind: "image",
        id: "brand-overview",
        eyebrow: "Brand Overview",
        title: "Brand Overview",
        description:
          "BCS evolved into a broader sports analytics ecosystem combining data, automation and real-time experiences.",
        alt: "BCS Sports Analytics commercial website presenting its sports analytics platform.",
        src: "/portfolio/bcs/bcs-brand-overview.webp",
        width: 1672,
        height: 941,
        sizes:
          "(min-width: 1280px) 1120px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)",
      },
    ],
    nextCaseSlug: "enterprise-service-operations",
    contactCta: {
      title:
        "Interested in product strategy for data-heavy, real-time or AI-enabled products?",
      description:
        "This case shows how I approach product evolution when business model, data reliability, user workflow and technical execution all matter at the same time.",
      primaryLabel: "Contact Me",
      secondaryLabel: "Back to Selected Work",
    },
  },
  {
    slug: "enterprise-service-operations",
    title: "Modernizing Enterprise Service Operations",
    subtitle:
      "Turning complex operational workflows into clearer digital services through discovery, process design and cross-functional alignment.",
    heroDescription:
      "An anonymized enterprise transformation case focused on turning operational complexity into implementation-ready digital service requirements.",
    projectFacts: [
      {
        label: "Role",
        value: "Senior Product Owner",
      },
      {
        label: "Context",
        value: "Enterprise Digital Transformation",
      },
      {
        label: "Industry",
        value: "Healthcare",
      },
      {
        label: "Focus",
        value: "Discovery, Process Design, Automation and Stakeholder Alignment",
      },
    ],
    challenge: {
      id: "challenge",
      eyebrow: "Challenge",
      title: "The Challenge",
      body: [
        "Operational services involved multiple stakeholders, manual activities, business rules and legacy systems.",
        "The challenge was to understand the real process, identify exceptions and translate business needs into requirements that development teams could execute with confidence.",
      ],
    },
    myRole: {
      id: "my-role",
      eyebrow: "What I Did",
      title: "What I Did",
      body: [],
      points: [
        "Led immersion, ideation and refinement sessions",
        "Mapped current processes and designed future workflows",
        "Documented business rules, exceptions and acceptance criteria",
        "Connected business, operations and technical teams",
        "Identified automation and integration opportunities",
        "Managed dependencies, open questions and approvals",
      ],
    },
    approach: {
      id: "approach",
      eyebrow: "Product Approach",
      title: "Product Approach",
      body: [
        "The work followed a structured path from operational reality to delivery readiness.",
        "Each step aimed to reduce ambiguity, align stakeholders and prepare development teams for confident execution.",
      ],
    },
    approachFlow: [
      "Operational reality",
      "Shared understanding",
      "Solution design",
      "Technical validation",
      "Delivery readiness",
    ],
    approachTags: [
      "Exceptions",
      "Business rules",
      "Approval path",
    ],
    solution: {
      id: "solution",
      eyebrow: "The Solution",
      title: "The Solution",
      body: [
        "A structured process for turning operational needs into implementation-ready digital service requirements.",
      ],
      points: [
        "Current-state process mapping",
        "Future-state service design",
        "Business rule definition",
        "Technical validation",
        "Requirements and acceptance criteria",
        "Formal stakeholder approval",
      ],
    },
    impact: {
      id: "impact",
      eyebrow: "Impact",
      title: "Impact",
      body: [
        "Created a clearer path from business problem to delivery, exposing risks earlier and improving alignment between operations, Product and Technology.",
      ],
    },
    impactPlaceholder:
      "Reserved for approved evidence such as public-safe outcomes, audit-ready artifacts or delivery quality signals.",
    galleryIntro:
      "Because internal systems cannot be shown, these visual spaces use portfolio-safe diagrams to represent discovery, process design and alignment work.",
    visuals: [
      {
        kind: "diagram",
        diagramType: "discovery",
        id: "platform-overview",
        eyebrow: "Discovery Diagram",
        title: "Discovery Framework",
        description:
          "A portfolio-safe sequence from immersion to opportunity framing and automation thinking.",
        steps: [
          {
            label: "Immersion",
            description: "Understand the operational reality.",
          },
          {
            label: "Process Understanding",
            description: "Map the current workflow.",
          },
          {
            label: "Pain Points",
            description: "Identify delays, errors and rework.",
          },
          {
            label: "Business Rules",
            description: "Capture decisions and exceptions.",
          },
          {
            label: "Opportunities",
            description: "Define areas for improvement and automation.",
          },
        ],
      },
      {
        kind: "diagram",
        diagramType: "comparison",
        id: "ecosystem-diagram",
        eyebrow: "Process Evolution",
        title: "From Current Process to Future Service",
        description:
          "A structured transition from the current workflow to a clearer future service model.",
        currentState: {
          label: "AS IS",
          items: [
            "Manual activities",
            "Fragmented information",
            "Multiple handoffs",
            "Limited visibility",
          ],
        },
        futureState: {
          label: "TO BE",
          items: [
            "Clear workflow",
            "Structured information",
            "Automation opportunities",
            "Better traceability",
          ],
        },
      },
      {
        kind: "diagram",
        diagramType: "decision-flow",
        id: "analysis-tools",
        eyebrow: "Decision Flow",
        title: "From Business Need to Delivery Readiness",
        description:
          "Requirements are shaped, validated and approved before implementation begins.",
        steps: [
          "Business need",
          "Process and rules",
          "Open questions",
          "Technical validation",
          "Requirements",
          "Acceptance criteria",
          "Approval",
        ],
        note: "Risks and unanswered questions are made visible before implementation.",
      },
      {
        kind: "diagram",
        diagramType: "collaboration",
        id: "telegram-alerts",
        eyebrow: "Collaboration Map",
        title: "Cross-Functional Collaboration",
        description:
          "The Product Owner connects business, operations and technical perspectives without centralizing every decision.",
        centerLabel: "Product Owner",
        centerDescription: "Facilitates alignment",
        collaborators: [
          {
            label: "Business",
            description: "Goals and priorities",
          },
          {
            label: "Operations",
            description: "Real workflows and exceptions",
          },
          {
            label: "Engineering",
            description: "Implementation and feasibility",
          },
          {
            label: "Architecture",
            description: "Integrations and constraints",
          },
          {
            label: "Continuous Improvement",
            description: "Process efficiency",
          },
        ],
      },
    ],
    nextCaseSlug: "ai-intelligence-pipeline",
    contactCta: {
      title:
        "Need structure for a complex transformation, workflow redesign or cross-functional delivery effort?",
      description:
        "This case shows how I translate operational complexity into shared understanding, validated requirements and delivery-ready scope.",
      primaryLabel: "Contact Me",
      secondaryLabel: "Back to Selected Work",
    },
  },
  {
    slug: "ai-intelligence-pipeline",
    title: "Designing an AI-Powered Intelligence Pipeline",
    subtitle:
      "Transforming fragmented public data into structured, searchable and decision-ready intelligence.",
    heroDescription:
      "A functional prototype and technical product case focused on turning public information into a reusable intelligence workflow through data pipelines, semantic search and AI-assisted analysis.",
    projectFacts: [
      {
        label: "Role",
        value: "Technical Product Lead",
      },
      {
        label: "Context",
        value: "AI and Data Product Prototype",
      },
      {
        label: "Focus",
        value: "Data Pipelines, Semantic Search, LLMs and Product Strategy",
      },
    ],
    challenge: {
      id: "challenge",
      eyebrow: "Challenge",
      title: "The Challenge",
      body: [
        "Relevant business information was distributed across multiple public sources, making research slow, repetitive and difficult to scale.",
        "The challenge was to design a product capable of collecting, structuring and enriching this information for faster analysis and decision-making.",
      ],
    },
    myRole: {
      id: "my-role",
      eyebrow: "What I Did",
      title: "What I Did",
      body: [],
      points: [
        "Defined the product scope and MVP",
        "Mapped data sources and processing stages",
        "Designed the end-to-end user and data flow",
        "Evaluated technical alternatives and trade-offs",
        "Structured requirements for enrichment and semantic search",
        "Estimated infrastructure and processing costs",
        "Built and documented a functional prototype",
      ],
    },
    approach: {
      id: "approach",
      eyebrow: "Product Approach",
      title: "Product Approach",
      body: [
        "The prototype was shaped around a simple product goal: reduce research friction while preserving source traceability and technical viability.",
        "Each design decision connected user needs, data quality, retrieval relevance and operational sustainability.",
      ],
    },
    approachFlow: [
      "Business question",
      "Data discovery",
      "Collection",
      "Enrichment",
      "Search",
      "Decision support",
    ],
    approachTags: ["Prototype scope", "Traceability", "Cost awareness"],
    solution: {
      id: "solution",
      eyebrow: "The Solution",
      title: "The Solution",
      body: [
        "A data intelligence pipeline designed to transform fragmented information into structured and searchable insights.",
      ],
      points: [
        "Automated data collection",
        "Information normalization and enrichment",
        "Structured storage",
        "Semantic search",
        "LLM-assisted analysis",
        "Traceable source references",
        "Scalable processing architecture",
      ],
    },
    impact: {
      id: "impact",
      eyebrow: "Impact",
      title: "Impact",
      body: [
        "The project demonstrated how fragmented information could be transformed into a reusable intelligence product.",
        "It also showed my ability to connect product definition, technical architecture, AI capabilities and operational cost analysis.",
      ],
    },
    impactPlaceholder:
      "Reserved for approved evidence such as prototype artifacts, architecture proof points or public-safe evaluation notes.",
    galleryIntro:
      "These diagram spaces are intentionally portfolio-safe and explain how the prototype connected public data, semantic retrieval and AI-assisted analysis without relying on fake screenshots.",
    visuals: [
      {
        kind: "diagram",
        diagramType: "collaboration",
        id: "data-sources-map",
        eyebrow: "Data Sources Map",
        title: "From Fragmented Sources to Structured Data",
        description:
          "Multiple public sources are transformed into a consistent data flow.",
        centerEyebrow: "Collection Layer",
        centerLabel: "Data Collection Layer",
        centerDescription: "Consistent data flow",
        mobileCenterPlacement: "last",
        collaborators: [
          {
            label: "Company websites",
          },
          {
            label: "Public databases",
          },
          {
            label: "Industry sources",
          },
          {
            label: "Documents",
          },
          {
            label: "External APIs",
          },
        ],
      },
      {
        kind: "diagram",
        diagramType: "discovery",
        id: "intelligence-pipeline",
        eyebrow: "Pipeline Diagram",
        title: "Intelligence Pipeline",
        description:
          "Each stage transforms fragmented inputs into more structured and usable information.",
        steps: [
          {
            label: "Sources",
            description: "Public and external data.",
          },
          {
            label: "Collection",
            description: "Automated data acquisition.",
          },
          {
            label: "Processing",
            description: "Cleaning and normalization.",
          },
          {
            label: "Enrichment",
            description: "AI-assisted classification and context.",
          },
          {
            label: "Structured Storage",
            description: "Organized and searchable records.",
          },
          {
            label: "Search and Analysis",
            description: "Relevant insights for decision-making.",
          },
        ],
      },
      {
        kind: "diagram",
        diagramType: "discovery",
        id: "semantic-search-experience",
        eyebrow: "Semantic Search",
        title: "From Question to Traceable Answer",
        description:
          "The experience connects natural-language questions with relevant and traceable information.",
        emphasisLabels: ["Relevant records", "Source references"],
        steps: [
          {
            label: "User question",
          },
          {
            label: "Semantic retrieval",
          },
          {
            label: "Relevant records",
            description: "Retrieved before response generation.",
          },
          {
            label: "AI-assisted response",
          },
          {
            label: "Source references",
          },
        ],
      },
      {
        kind: "diagram",
        diagramType: "collaboration",
        id: "architecture-cost-decisions",
        eyebrow: "Decision Criteria",
        title: "Product and Architecture Trade-offs",
        description:
          "The solution was designed by balancing product value, technical feasibility and operational cost.",
        centerEyebrow: "Decision Core",
        centerLabel: "Technical Product Decisions",
        collaborators: [
          {
            label: "Scalability",
          },
          {
            label: "Data quality",
          },
          {
            label: "Traceability",
          },
          {
            label: "Processing cost",
          },
          {
            label: "Maintainability",
          },
        ],
      },
    ],
    nextCaseSlug: "bcs-sports-analytics",
    contactCta: {
      title:
        "Need someone who can connect product thinking, data workflows and AI capabilities into a credible prototype?",
      description:
        "This case shows how I turn a research-heavy problem into a structured product concept with technical direction, traceability and realistic implementation trade-offs.",
      primaryLabel: "Contact Me",
      secondaryLabel: "Back to Selected Work",
    },
  },
];

export function getDetailedCaseBySlug(slug: string) {
  return detailedCaseStudies.find((caseStudy) => caseStudy.slug === slug);
}
