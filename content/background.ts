// Education and skills.

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
