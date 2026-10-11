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
      <div className={`${styles.art} relative h-32 overflow-hidden [&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full`} aria-hidden="true">
        <HexPattern seed={artSeed} />
        <span className="absolute bottom-5 left-5 rounded-sm bg-[rgb(13_17_23/0.74)] px-[0.8rem] py-[0.35rem] text-[1.05rem] font-semibold text-[#e6edf3] backdrop-blur-[6px]">{project.status ?? project.tags[0]}</span>
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
