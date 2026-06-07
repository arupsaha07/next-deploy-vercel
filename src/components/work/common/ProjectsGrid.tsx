import { projects } from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    {...project}
                />
            ))}
        </div>
    );
}