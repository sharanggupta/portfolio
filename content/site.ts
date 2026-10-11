// Single source of truth for everything the site and the CV PDF say.
// Change a fact here and both the web page and `npm run cv` pick it up.
// Plain data only (no JSX, no imports), so Node can also read it directly.

export const SITE_URL = "https://www.sharanggupta.dev";

// The repository name lives in one place: if the repo is renamed, change this line.
export const REPO_NAME = "portfolio";

export const PERSON = {
  name: "Sharang Gupta",
  jobTitle: "Software Engineer",
  tagline: "Java and Spring, built test-first.",
  intro:
    "I work mainly on backend systems in Java and Spring Boot, deployed on Kubernetes and Google Cloud Platform. Away from work I build small apps that each show one idea, and write about what I learn.",
  location: "Bournemouth, England",
  locality: "Bournemouth",
  country: "GB",
  email: "sharanggupta1996@gmail.com",
  phoneDisplay: "+44 7563 566755",
  phoneHref: "tel:+447563566755",
} as const;

export const LINKS = {
  github: "https://github.com/sharanggupta",
  linkedin: "https://www.linkedin.com/in/sharanggupta/",
  medium: "https://sharanggupta.medium.com",
  repo: `https://github.com/sharanggupta/${REPO_NAME}`,
  recommendations: "https://www.linkedin.com/in/sharanggupta/details/recommendations/",
  openPullRequests:
    "https://github.com/pulls?q=is%3Apr+author%3Asharanggupta+is%3Aopen+-user%3Asharanggupta",
} as const;

export type Project = {
  name: string;
  repo: string; // repository name under github.com/sharanggupta
  status?: string;
  description: string;
  liveUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Orderly",
    repo: "orderly",
    status: "Work in progress",
    description:
      "A learning project: moving from controller-service-repository habits to a hexagonal design, one failing test at a time. Each layer is a Maven module that lists only what it may depend on, so an inward import from the domain is a compile error, not a review comment. The domain is built and the application layer has started; the REST API, database and Spring Boot application are planned.",
  },
  {
    name: "Flight search",
    repo: "flight-search",
    description:
      "A Spring Boot REST API for searching flights, built test-first with hexagonal architecture. The domain and application code is plain Java; all framework code (Spring, JPA, REST) sits outside and depends inward, never the other way. Java 21, Spring Boot 3.4, with CI on GitHub Actions.",
  },
  {
    name: "EazyBank",
    repo: "eazybank",
    description:
      "A banking application split into four Spring Boot microservices: a gateway as the single entry point, and account, card and loan services, each with its own PostgreSQL database. Runs on Kubernetes, with GitHub Actions workflows to build and deploy each service, and an observability stack (Prometheus, Grafana, Loki and Tempo) for metrics, logs and traces.",
  },
  {
    name: "OAuth2 product",
    repo: "oauth2product",
    description:
      "An OAuth2 resource server and client with Spring Boot, built test-first and run end to end with Docker Compose. The article series below follows this code.",
  },
];

export const alsoProjects: Project[] = [
  {
    name: "Batch data migration",
    repo: "batch-data-migration",
    description: "Data migration from NoSQL to SQL using Spring Batch.",
  },
  {
    name: "Thiasil",
    repo: "thiasil",
    liveUrl: "https://www.thiasil.com/",
    description:
      "Website for Thia Glass Works: a Next.js application with a product catalogue, admin panel and PDF catalogue.",
  },
];

export type OpenSourceFix = { project: string; pullRequest: string; change: string };

// Exactly as in the README of github.com/sharanggupta/sharanggupta.
export const openSourceFixes: OpenSourceFix[] = [
  {
    project: "Spring Cloud Stream",
    pullRequest: "https://github.com/spring-cloud/spring-cloud-stream/pull/3296",
    change:
      "DefaultBinderFactory no longer starts plain lifecycle beans in binder contexts during a normal refresh (gh-3155). Backported to 5.0.x.",
  },
  {
    project: "Apache Commons Lang",
    pullRequest: "https://github.com/apache/commons-lang/pull/1812",
    change:
      "TypeUtils.containsTypeVariables and unrollVariables honour the owner type of a ParameterizedType (LANG-1836).",
  },
  {
    project: "Micronaut Core",
    pullRequest: "https://github.com/micronaut-projects/micronaut-core/pull/13801",
    change: "An Accept-Charset header is ignored when reading String request bodies.",
  },
  {
    project: "SpotBugs",
    pullRequest: "https://github.com/spotbugs/spotbugs/pull/4377",
    change:
      "RV_RETURN_VALUE_IGNORED_NO_SIDE_EFFECT now reports an ignored Arrays.copyOf result.",
  },
  {
    project: "ArchUnit",
    pullRequest: "https://github.com/TNG/ArchUnit/pull/1747",
    change:
      "New haveOnlyFinalNonSyntheticFields() condition that skips compiler-generated fields.",
  },
  {
    project: "OpenFeign",
    pullRequest: "https://github.com/OpenFeign/feign/pull/3605",
    change: "A null Request.Body is treated as a request with no body.",
  },
];

export type Article = { title: string; url: string };

// A new article is one more entry here.
export const articles: Article[] = [
  {
    title: "Demystifying OAuth2",
    url: "https://sharanggupta.medium.com/demystifying-oauth2-a-step-by-step-guide-to-building-a-resource-server-with-spring-boot-tdd-6da6912411a5",
  },
  {
    title: "Building an OAuth2 Resource Server",
    url: "https://sharanggupta.medium.com/building-an-oauth2-resource-server-in-spring-boot-tdd-621a34999410",
  },
  {
    title: "Building an OAuth2 Client",
    url: "https://sharanggupta.medium.com/part-3-building-an-oauth2-client-in-spring-boot-tdd-91b0ba8ee5ae",
  },
  {
    title: "Running the System End-to-End",
    url: "https://sharanggupta.medium.com/part-4-running-the-system-end-to-end-spring-multi-module-docker-86a41a128e46",
  },
];

export type Job = {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

// Copied from the live LinkedIn experience page (2026-10-11).
export const experience: Job[] = [
  {
    title: "Software Engineer",
    company: "THG",
    period: "Jan 2023 to present",
    location: "Bournemouth, England (remote)",
    highlights: [
      "Backend development in Java and Spring Boot, deployed on Kubernetes and Google Cloud Platform.",
      "Diagnose and fix production incidents.",
      "Test-first development and code review.",
    ],
  },
  {
    title: "Associate Software Developer",
    company: "JPMorgan Chase & Co.",
    period: "Sep 2022 to Feb 2023",
    location: "Bournemouth, England",
    highlights: [
      "Built more depth in Spring Boot while working on backend services in a banking environment.",
      "Hands-on exposure to Kubernetes and cloud deployment.",
      "Worked with production monitoring and observability.",
    ],
  },
  {
    title: "Graduate Software Developer",
    company: "THG",
    period: "Oct 2021 to Sep 2022",
    location: "Salford, England",
    highlights: [
      "First professional work in Java and Spring Boot, on a large production system.",
      "Learned clean-code practices, code review and team delivery workflows.",
    ],
  },
  {
    title: "Python Developer",
    company: "Karza Technologies",
    period: "Dec 2018 to Sep 2020",
    location: "Mumbai",
    highlights: [
      "Responsible for building data pipelines across multiple web sources like BSE, NSE and electoral rolls via web-scraping using python",
    ],
  },
  {
    title: "Web Developer",
    company: "Bombardier",
    period: "Aug 2018 to Dec 2018",
    location: "Vadodara, India",
    highlights: ["Responsible for developing web-hmi components for new metro trains"],
  },
  {
    title: "Python Developer (internship)",
    company: "Symantec",
    period: "Jan 2017 to Jun 2017",
    location: "Pune, India",
    highlights: [],
  },
];

export type Recommendation = {
  name: string;
  relationship: string;
  year: string;
  quote: string;
};

// Verbatim from LinkedIn (only recommendations shown on the profile). Never reword.
export const recommendations: Recommendation[] = [
  {
    name: "Ahmad Aussaili",
    relationship: "worked with me on a different team",
    year: "2024",
    quote:
      "Sharang has shown outstanding dedication as a Software Engineer. He has consistently gone above and beyond to understand the complexities of the Product platform, demonstrating a remarkable ability to quickly assess and address issues. Although being part of a different team, Sharang acted swiftly and effectively during critical incidents to reduce impact on our team's platform. I am confident he will continue to make a positive impact wherever he goes.",
  },
  {
    name: "Charlotte Cozens",
    relationship: "managed me directly",
    year: "2022",
    quote:
      "Sharang reported to me during his first year as a graduate software engineer. I have no doubt he will be a great success at whatever he sets his mind to. Sharang’s enthusiasm to learn and develop was consistent from day one. He took a proactive approach to his, and the team’s, development. He was a pleasure to mentor, and would be welcome back anytime.",
  },
  {
    name: "Steve Moss",
    relationship: "managed me directly",
    year: "2022",
    quote:
      "Sharang has been an absolute joy to work with, technically curious, willing to jump in and try new things whilst always pursuing his thirst for learning. I found Sharang to be extremely outcome and delivery focused.",
  },
];

export const education = [
  {
    qualification: "MSc Computer Science (Distinction)",
    institution: "University of Southampton",
    period: "2020 to 2021",
  },
  {
    qualification: "BTech Computer Science and Engineering",
    institution: "Symbiosis Institute of Technology, Pune",
    period: "2014 to 2018",
  },
] as const;

export const skills = [
  { group: "Languages and frameworks", items: ["Java", "Spring Boot", "Python"] },
  { group: "Platform", items: ["Kubernetes", "Google Cloud Platform"] },
  { group: "Data", items: ["MySQL", "Couchbase", "MongoDB"] },
  { group: "Practice", items: ["TDD", "JUnit", "Clean code", "SOLID", "Code review"] },
] as const;

// Used for the meta description, keywords and structured data.
export const SEO = {
  title: "Sharang Gupta | Software Engineer",
  titleTemplate: "%s | Sharang Gupta",
  description:
    "Software engineer in Bournemouth, England. Java and Spring, built test-first. Selected projects, open-source fixes, writing and experience.",
  // Google ignores the keywords tag (see decisions.md); kept short and truthful for other consumers.
  keywords: [
    "Sharang Gupta",
    "software engineer",
    "Java",
    "Spring Boot",
    "Kubernetes",
    "Google Cloud Platform",
    "test-driven development",
    "Bournemouth",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Kubernetes",
    "Google Cloud Platform",
    "Test-driven development",
  ],
} as const;
