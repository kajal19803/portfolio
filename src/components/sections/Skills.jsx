import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { skillCategories } from "../../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        label="Skills"
        title="Technologies I work with"
        description="Languages, frameworks, cloud tools, and AI technologies I use to build reliable, production-ready software."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass group rounded-2xl p-6 transition hover:border-accent-purple/50"
          >
            <h3 className="text-base font-semibold text-primary">
              {category.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-sm text-secondary transition group-hover:text-primary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
