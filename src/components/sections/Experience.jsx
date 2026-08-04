import { Briefcase } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" className="bg-surface/30">
      <SectionHeading
        label="Experience"
        title="Professional journey"
        description="Internship experience across full-stack web development and AI, backed by AICTE industry programs."
      />

      <div className="relative">
        <div
          className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-6 md:block"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="relative md:pl-16"
            >
              <div
                className="absolute left-0 top-1 hidden h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface md:flex"
                aria-hidden="true"
              >
                <Briefcase size={20} className="text-accent-purple" />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent-purple">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-sm text-secondary">{item.period}</p>
                </div>

                <p className="mt-4 leading-relaxed text-secondary">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-secondary"
                    >
                      <span className="text-accent-purple" aria-hidden="true">
                        —
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {item.tech && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
