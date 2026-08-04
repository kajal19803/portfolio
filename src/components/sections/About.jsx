import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/portfolio";

export default function About() {
  return (
    <Section id="about" className="bg-surface/30">
      <SectionHeading
        label="About"
        title="Engineering with purpose"
        description={about.summary}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-primary">
            Career Objective
          </h3>
          <p className="mt-4 leading-relaxed text-secondary">
            {about.objective}
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-primary">
            Areas of Interest
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {about.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-secondary"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
