import HexCluster from "@/components/HexCluster";
import HexMark from "@/components/HexMark";
import ProjectArt from "@/components/ProjectArt";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import {
  LINKS,
  PERSON,
  alsoProjects,
  articles,
  education,
  experience,
  featuredProjects,
  openSourceFixes,
  recommendations,
  skills,
  type Project,
} from "@/content/site";

const repoUrl = (repo: string) => `${LINKS.github}/${repo}`;
const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

function ProjectCard({ project, seed }: { project: Project; seed: number }) {
  return (
    <article className="project">
      <div className="project-art" aria-hidden="true">
        <ProjectArt seed={seed} />
        <span className="project-label">{project.status ?? project.tags[0]}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-4">
        <h3 className="text-lg font-semibold">
          {project.name}
          {project.status && <span className="sr-only"> ({project.status})</span>}
        </h3>
        <p className="mt-2 flex-1 text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
          <a className="cta" href={repoUrl(project.repo)} rel="noopener">
            View {project.name} on GitHub <span aria-hidden="true">→</span>
          </a>
          {project.liveUrl && (
            <a className="cta" href={project.liveUrl} rel="noopener">
              Live site <span aria-hidden="true">→</span>
            </a>
          )}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top">
      {/* Hero: the only h1 on the page. */}
      <section aria-label="Introduction" className="hero">
        <HexCluster />
        <div className="mx-auto max-w-5xl px-6">
          <div className="hero-kicker flex items-center gap-3 text-accent">
            <HexMark size={40} />
            <p className="kicker">Java · Spring · TDD</p>
          </div>
          <h1 className="hero-title mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            {PERSON.name}
          </h1>
          <p className="hero-sub mt-3 text-xl text-accent sm:text-2xl">{PERSON.jobTitle}</p>
          <p className="hero-sub mt-6 max-w-xl text-3xl font-medium leading-tight sm:text-4xl">
            {PERSON.tagline}
          </p>
          {/* No entrance animation here: the first readable text must paint immediately. */}
          <p className="mt-6 max-w-xl text-lg text-muted">{PERSON.intro}</p>
          <p className="hero-sub mt-2 text-muted">{PERSON.location}.</p>
          <ul className="hero-sub mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a className="link" href={LINKS.github} rel="me noopener">
                GitHub
              </a>
            </li>
            <li>
              <a className="link" href={LINKS.linkedin} rel="me noopener">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="link" href={LINKS.medium} rel="me noopener">
                Medium
              </a>
            </li>
          </ul>
          <p className="hero-sub mt-8 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              className="rounded-md bg-accent px-5 py-3 font-semibold text-bg transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Download CV (PDF)
            </a>
            <a
              href={`mailto:${PERSON.email}`}
              className="rounded-md border border-border px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-accent"
            >
              Email me
            </a>
          </p>
        </div>
      </section>

      <Section
        id="work"
        band
        kicker="01 · Work"
        title="Selected work"
        intro="Small, complete projects, each built test-first to show one idea."
      >
        <ul className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <li key={project.repo}>
              <Reveal delay={(index % 2) * 90} className="h-full">
                <ProjectCard project={project} seed={index} />
              </Reveal>
            </li>
          ))}
        </ul>
        <h3 className="kicker mt-14">Also</h3>
        <ul className="mt-5 grid gap-6 md:grid-cols-2">
          {alsoProjects.map((project, index) => (
            <li key={project.repo}>
              <Reveal delay={(index % 2) * 90} className="h-full">
                <ProjectCard project={project} seed={index + 4} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="open-source"
        kicker="02 · Open source"
        title="Fixes that landed upstream"
        intro="Merged pull requests in libraries I use."
      >
        {/* A list, not a table: each row stacks on phones and becomes two columns from "sm" up. */}
        <ul className="border-t border-border">
          {openSourceFixes.map((fix, index) => (
            <li key={fix.pullRequest} className="border-b border-border">
              <Reveal delay={index * 40} className="py-4 sm:grid sm:grid-cols-[13rem_1fr] sm:gap-6">
                <a className="cta" href={fix.pullRequest} rel="noopener">
                  {fix.project} <span aria-hidden="true">→</span>
                </a>
                <p className="mt-1 text-sm text-muted sm:mt-0">{fix.change}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted">
          More are in review:{" "}
          <a className="link" href={LINKS.openPullRequests} rel="noopener">
            open pull requests on GitHub
          </a>
          .
        </p>
      </Section>

      <Section
        id="writing"
        kicker="03 · Writing"
        title="OAuth2 with Spring Boot"
        intro="A four-part series, each part with a working app."
      >
        <ol className="grid gap-4 sm:grid-cols-2">
          {articles.map((article, index) => (
            <li key={article.url}>
              <Reveal delay={(index % 2) * 90}>
                <a
                  className="project block p-6 no-underline"
                  href={article.url}
                  rel="noopener"
                  aria-label={`Part ${index + 1}: ${article.title}`}
                >
                  <span className="kicker">Part {index + 1}</span>
                  <span className="mt-2 block text-lg font-semibold">{article.title}</span>
                  <span className="cta mt-4">
                    Read on Medium <span aria-hidden="true">→</span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          <a className="link" href={LINKS.medium} rel="me noopener">
            All articles on Medium
          </a>
        </p>
      </Section>

      <Section id="experience" kicker="04 · Experience" title="Where I have worked">
        <ol className="timeline space-y-10">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal>
                <h3 className="text-xl font-semibold">
                  {job.title}, {job.company}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {job.period} · {job.location}
                </p>
                {job.highlights.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-6">
                    {job.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="recommendations"
        band
        kicker="05 · Recommendations"
        title="What colleagues say"
        intro="From LinkedIn recommendations; names and context as shown there."
      >
        <ul className="grid gap-6 lg:grid-cols-1">
          {recommendations.map((rec, index) => (
            <li key={rec.name}>
              <Reveal delay={index * 80}>
                <figure className="quote">
                  <div className="flex items-start gap-5">
                    <div className="hex-avatar" aria-hidden="true">
                      {initials(rec.name)}
                    </div>
                    <div>
                      <blockquote className="text-lg">
                        <p>“{rec.quote}”</p>
                      </blockquote>
                      <figcaption className="mt-4 text-sm text-muted">
                        <span className="font-semibold text-fg">{rec.name}</span>, {rec.year},{" "}
                        {rec.relationship}
                      </figcaption>
                    </div>
                  </div>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <a className="cta" href={LINKS.recommendations} rel="noopener">
            See all recommendations on LinkedIn <span aria-hidden="true">→</span>
          </a>
        </p>
      </Section>

      <Section id="education" kicker="06 · Background" title="Education and skills">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.qualification}>
                  <span className="font-medium">{item.qualification}</span>
                  <br />
                  <span className="text-muted">
                    {item.institution}, {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            <dl className="mt-4 space-y-4">
              {skills.map((group) => (
                <div key={group.group}>
                  <dt className="text-sm text-muted">{group.group}</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag text-fg">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        kicker="07 · Contact"
        title="Get in touch"
        intro="Open to hearing about interesting engineering roles."
      >
        <ul className="space-y-2 text-lg">
          <li>
            Email:{" "}
            <a className="link" href={`mailto:${PERSON.email}`}>
              {PERSON.email}
            </a>
          </li>
          <li>
            Phone:{" "}
            <a className="link" href={PERSON.phoneHref}>
              {PERSON.phoneDisplay}
            </a>
          </li>
          <li>Location: {PERSON.location}</li>
          <li>
            Elsewhere:{" "}
            <a className="link" href={LINKS.github} rel="me noopener">
              GitHub
            </a>
            ,{" "}
            <a className="link" href={LINKS.linkedin} rel="me noopener">
              LinkedIn
            </a>
            ,{" "}
            <a className="link" href={LINKS.medium} rel="me noopener">
              Medium
            </a>
          </li>
        </ul>
      </Section>
    </main>
  );
}
