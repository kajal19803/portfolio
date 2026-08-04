import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaChessKnight,
  FaGlobe,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { contact, socialLinks } from "../../data/portfolio";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Portfolio: FaGlobe,
  LeetCode: SiLeetcode,
  HackerRank: FaHackerrank,
  "Chess.com": FaChessKnight,
};

export default function Contact() {
  return (
    <Section id="contact" className="bg-surface/30">
      <SectionHeading
        label="Contact"
        title="Let's connect"
        description="Open to internships, collaborations, and conversations about software development and AI."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-primary">Get in touch</h3>

          <div className="mt-6 space-y-5">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 text-secondary transition hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background">
                <Mail size={18} className="text-accent-purple" />
              </span>
              <span>{contact.email}</span>
            </a>

            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 text-secondary transition hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background">
                <Phone size={18} className="text-accent-purple" />
              </span>
              <span>{contact.phone}</span>
            </a>

            <div className="flex items-center gap-4 text-secondary">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background">
                <MapPin size={18} className="text-accent-purple" />
              </span>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-primary">Find me online</h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-secondary transition hover:border-accent-purple hover:text-primary"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
