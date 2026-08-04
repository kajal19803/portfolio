import { GraduationCap } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <Section id="education" className="bg-surface/30">
      <SectionHeading
        label="Education"
        title="Academic background"
        description="Formal education in Computer Science and Engineering with a strong academic record."
      />

      <div className="grid gap-6">
        {education.map((item) => (
          <article
            key={item.institution}
            className="glass flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-start md:p-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
              <GraduationCap className="text-accent-purple" size={24} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">{item.location}</p>
                </div>
                <p className="text-sm text-secondary">{item.period}</p>
              </div>

              <p className="mt-3 text-sm font-medium text-accent-purple">
                {item.degree}
              </p>

              {item.cgpa && (
                <p className="mt-2 text-sm text-primary">
                  CGPA: <span className="font-semibold">{item.cgpa}</span>
                </p>
              )}

              <p className="mt-4 leading-relaxed text-secondary">
                {item.description}
              </p>

              {item.courses && (
                <div className="mt-5">
                  <p className="text-sm font-medium text-primary">
                    Relevant Coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-secondary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
