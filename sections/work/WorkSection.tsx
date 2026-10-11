import Kicker from "@/components/ui/Kicker";
import Reveal, { STAGGER_MS } from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { SECTION, sectionKicker } from "@/content/sections";
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
    <Section
      id={SECTION.work}
      band
      tuck
      kicker={sectionKicker(SECTION.work, "Work")}
      title="Selected work"
      intro="Small, complete projects, each built test-first to show one idea."
    >
      <ProjectGrid projects={featuredProjects} firstArtSeed={0} />
      <Kicker as="h3" className="mt-14">
        Also
      </Kicker>
      <ProjectGrid className="mt-5" projects={alsoProjects} firstArtSeed={featuredProjects.length} />
    </Section>
  );
}
