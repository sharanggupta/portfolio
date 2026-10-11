// Work history, copied from the live LinkedIn experience page (2026-10-11).

export type Job = {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

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
    title: "Graduate Software Engineer",
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
      "Created over 300 web crawlers, harvesting millions of data points, thus creating end to end data pipelines for consumption",
      "Introduced in-memory download and re-upload of scraped PDFs reducing disk memory usage to a fraction of original",
    ],
  },
  {
    title: "Software Engineer",
    company: "Bombardier",
    period: "Aug 2018 to Dec 2018",
    location: "Vadodara, India",
    highlights: ["Responsible for developing web-hmi components for new metro trains"],
  },
  {
    title: "Software Engineer Intern",
    company: "Symantec",
    period: "Jan 2017 to Jun 2017",
    location: "Pune, India",
    highlights: [
      "Built a crawler to collect files and their hashes for the most popular cloud-based software; gathered 1 million files to whitelist, hitting the target within 3 months",
      "Delivered a second crawler in record time for a time-sensitive, high-priority project",
      "Stayed on after the project to work with the team on development, across all stages of production",
    ],
  },
];
