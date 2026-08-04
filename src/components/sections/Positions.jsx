import { Heart, Music, Users, Crown } from "lucide-react";
import { FaChessKnight } from "react-icons/fa";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { positions } from "../../data/portfolio";

const iconMap = {
  heart: Heart,
  music: Music,
  chess: FaChessKnight,
  users: Users,
};

export default function Positions() {
  return (
    <Section id="positions" className="bg-surface/30">
      <SectionHeading
        label="Leadership"
        title="Positions of responsibility"
        description="Volunteering, club leadership, and campus roles where I contributed beyond the classroom."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {positions.map((item) => {
          const Icon = iconMap[item.icon] ?? Crown;

          return (
            <article
              key={item.title}
              className="glass group rounded-2xl p-6 transition hover:border-accent-purple/40 md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background transition group-hover:border-accent-purple/50">
                <Icon size={22} className="text-accent-purple" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-purple">
                {item.organization}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
