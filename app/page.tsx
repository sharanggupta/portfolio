import HexMark from "@/components/HexMark";
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-lg border border-border bg-surface p-5">
      <h3 className="text-lg font-semibold">
        {project.name}
        {project.status && (
          <span className="ml-2 text-sm font-normal text-muted">({project.status})</span>
        )}
      </h3>
      <p className="mt-2 text-muted">{project.description}</p>
      <p className="mt-3">
        <a className="link" href={repoUrl(project.repo)} rel="noopener">
          View {project.name} on GitHub
        </a>
        {project.liveUrl && (
          <>
            {" · "}
            <a className="link" href={project.liveUrl} rel="noopener">
              Live site
            </a>
          </>
        )}
      </p>
    </li>
  );
}

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-3xl px-4 pb-8 pt-12 sm:pt-16">
      {/* Hero: the only h1 on the page. */}
      <section aria-label="Introduction">
        <div className="flex items-center gap-3 text-accent">
          <HexMark size={44} />
          <p className="font-mono text-sm uppercase tracking-widest">Java · Spring · TDD</p>
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{PERSON.name}</h1>
        <p className="mt-2 text-xl text-accent">{PERSON.jobTitle}</p>
        <p className="mt-4 text-2xl font-medium">{PERSON.tagline}</p>
        <p className="mt-4 max-w-2xl text-muted">{PERSON.intro}</p>
        <p className="mt-2 text-muted">{PERSON.location}.</p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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
        <p className="mt-6 flex flex-wrap gap-3">
          <a
            href="/cv.pdf"
            className="rounded-md bg-accent px-4 py-2 font-semibold text-bg hover:opacity-90"
          >
            Download CV (PDF)
          </a>
          <a
            href={`mailto:${PERSON.email}`}
            className="rounded-md border border-border px-4 py-2 font-semibold hover:border-accent"
          >
            Email me
          </a>
        </p>
      </section>

      <Section
        id="work"
        title="Selected work"
        intro="Small, complete projects, each built test-first to show one idea."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.repo} project={project} />
          ))}
        </ul>
        <h3 className="mt-8 text-lg font-semibold">Also</h3>
        <ul className="mt-3 grid gap-4 sm:grid-cols-2">
          {alsoProjects.map((project) => (
            <ProjectCard key={project.repo} project={project} />
          ))}
        </ul>
      </Section>

      <Section
        id="open-source"
        title="Open source"
        intro="Fixes that landed upstream in libraries I use."
      >
        {/* A list, not a table: each row stacks on phones and becomes two columns from "sm" up. */}
        <ul className="border-t border-border">
          {openSourceFixes.map((fix) => (
            <li
              key={fix.pullRequest}
              className="border-b border-border py-3 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-4"
            >
              <a className="link font-medium" href={fix.pullRequest} rel="noopener">
                {fix.project}
              </a>
              <p className="mt-1 text-sm text-muted sm:mt-0">{fix.change}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-muted">
          More are in review:{" "}
          <a className="link" href={LINKS.openPullRequests} rel="noopener">
            open pull requests on GitHub
          </a>
          .
        </p>
      </Section>

      <Section
        id="writing"
        title="Writing"
        intro="A four-part series on OAuth2 with Spring Boot, each part with a working app."
      >
        <ol className="list-decimal space-y-2 pl-6">
          {articles.map((article) => (
            <li key={article.url}>
              <a className="link" href={article.url} rel="noopener">
                {article.title}
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-4">
          <a className="link" href={LINKS.medium} rel="me noopener">
            All articles on Medium
          </a>
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-7">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <h3 className="text-lg font-semibold">
                {job.title}, {job.company}
              </h3>
              <p className="text-sm text-muted">
                {job.period} · {job.location}
              </p>
              {job.highlights.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="recommendations"
        title="What colleagues say"
        intro="From LinkedIn recommendations; names and context as shown there."
      >
        <ul className="space-y-6">
          {recommendations.map((rec) => (
            <li key={rec.name}>
              <figure className="rounded-lg border border-border bg-surface p-5">
                <blockquote className="text-muted">
                  <p>“{rec.quote}”</p>
                </blockquote>
                <figcaption className="mt-3 text-sm">
                  <span className="font-semibold">{rec.name}</span>, {rec.year}, {rec.relationship}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <a className="link" href={LINKS.recommendations} rel="noopener">
            See all recommendations on LinkedIn
          </a>
        </p>
      </Section>

      <Section id="education" title="Education and skills">
        <h3 className="text-lg font-semibold">Education</h3>
        <ul className="mt-2 space-y-1">
          {education.map((item) => (
            <li key={item.qualification}>
              <span className="font-medium">{item.qualification}</span>, {item.institution},{" "}
              {item.period}
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Skills</h3>
        <dl className="mt-2 space-y-2">
          {skills.map((group) => (
            <div key={group.group} className="sm:flex sm:gap-3">
              <dt className="font-medium sm:w-56 sm:shrink-0">{group.group}</dt>
              <dd className="text-muted">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="contact" title="Get in touch" intro="Open to hearing about interesting engineering roles.">
        <ul className="space-y-1">
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
