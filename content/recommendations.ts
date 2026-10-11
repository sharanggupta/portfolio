// Verbatim from LinkedIn (only the recommendations shown on the profile). Never reword.

export type Recommendation = {
  name: string;
  relationship: string;
  year: string;
  quote: string;
};

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
