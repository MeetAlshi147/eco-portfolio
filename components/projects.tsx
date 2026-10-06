import { projects } from "@/data/projects";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-24 sm:py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects"
        description="Projects demonstrating my ability to design, build, and deploy real-world systems using AI and full-stack technologies."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
