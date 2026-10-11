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

/** Extra initiative shown on the CV only, not on the web page. */
export const initiatives = [
  {
    title: "Smart India Hackathon 2018, Grand Finale",
    detail: "Built a solution to calculate trade margins for businesses (Ministry of Statistics and Programme Implementation problem statement).",
  },
  {
    title: "Taught Android app development",
    detail: "To second-year MTech students, Symbiosis Institute of Technology (Mar-Apr 2017), as part of their IoT course.",
  },
] as const;
