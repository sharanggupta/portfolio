import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal/Reveal";
import { STAGGER_MS } from "@/lib/motion";
import Section from "@/components/ui/Section/Section";
import { SECTION, sectionHeading } from "@/content/sections";
import { alsoProjects, featuredProjects, type Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects, firstArtSeed, className = "" }: { projects: Project[]; firstArtSeed: number; className?: string }) {
  return (
    <ul className={`grid gap-6 md:grid-cols-2 ${className}`}>
      {projects.map((project, index) => (
        <li key={project.repo}>
          <Reveal delay={(index % 2) * STAGGER_MS.twoColumns} className="h-full">
            <ProjectCard project={project} artSeed={firstArtSeed + index} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export default function WorkSection() {
  return (
    <Section {...sectionHeading(SECTION.work)} band tuck>
      <ProjectGrid projects={featuredProjects} firstArtSeed={0} />
      <Kicker as="h3" className="mt-14">
        Also
      </Kicker>
      <ProjectGrid className="mt-5" projects={alsoProjects} firstArtSeed={featuredProjects.length} />
    </Section>
  );
}
