import HexPattern from "@/components/brand/HexPattern";
import ArrowLink from "@/components/ui/ArrowLink";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/Tag";
import { repoUrl, type Project } from "@/content/projects";
import styles from "./ProjectCard.module.css";

/** One project: generated art on top, then name, description, technologies and links. */
export default function ProjectCard({ project, artSeed }: { project: Project; artSeed: number }) {
  return (
    <Card>
      <div className={styles.art} aria-hidden="true">
        <HexPattern seed={artSeed} />
        <span className={styles.label}>{project.status ?? project.tags[0]}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-4">
        <h3 className="text-lg font-semibold">
          {project.name}
          {project.status && <span className="sr-only"> ({project.status})</span>}
        </h3>
        <p className="mt-2 flex-1 text-muted">{project.description}</p>
        <TagList className="mt-4" labels={project.tags} ariaLabel={`${project.name} technologies`} />
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
          <ArrowLink href={repoUrl(project)}>View {project.name} on GitHub</ArrowLink>
          {project.liveUrl && <ArrowLink href={project.liveUrl}>Live site</ArrowLink>}
        </p>
      </div>
    </Card>
  );
}
