import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaChessKnight,
  FaGlobe,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import profileImage from "../../assets/kajal-photo.jpg";
import resumePdf from "../../assets/Resume.pdf";
import { hero, socialLinks } from "../../data/portfolio";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Portfolio: FaGlobe,
  LeetCode: SiLeetcode,
  HackerRank: FaHackerrank,
  "Chess.com": FaChessKnight,
};

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-20 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-accent-purple/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-accent-magenta/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-purple" />
            <span className="text-sm text-secondary">{hero.badge}</span>
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-primary">{hero.name}</span>
            <span className="text-gradient mt-1 block">{hero.role}</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-primary/90 md:text-xl">
            {hero.headline}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-r from-accent-blue via-accent-purple to-accent-magenta px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-110"
            >
              View Projects
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent-purple"
            >
              <HiOutlineDocumentArrowDown size={16} />
              Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition hover:border-accent-purple hover:text-primary"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-gradient text-2xl font-bold md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue via-accent-purple to-accent-magenta opacity-30 blur-2xl"
              aria-hidden="true"
            />
            <div className="glass relative overflow-hidden rounded-2xl p-3">
              <img
                src={profileImage}
                alt="Kajal Verma"
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
