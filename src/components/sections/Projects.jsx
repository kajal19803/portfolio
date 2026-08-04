import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Code2 } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Featured work"
        description="Production-ready applications with measurable impact across full-stack development and backend engineering."
      />

      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass group overflow-hidden rounded-2xl transition hover:border-accent-purple/40"
          >
            <div className="grid lg:grid-cols-2">
              <div className="overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full lg:min-h-[320px]"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-56 w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-magenta/10 lg:h-full lg:min-h-[320px]">
                    <Code2 size={40} className="text-accent-purple" />
                    <span className="text-sm text-secondary">
                      {project.subtitle}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-accent-purple">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-primary">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-secondary">
                  {project.description}
                </p>

                {project.impact && (
                  <p className="mt-3 text-sm leading-relaxed text-primary/80">
                    {project.impact}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue via-accent-purple to-accent-magenta px-5 py-2.5 text-sm font-medium text-primary transition hover:brightness-110"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-primary transition hover:border-accent-purple"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
