import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import resumePdf from "../assets/Resume.pdf";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:h-20 md:px-8 lg:px-12">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-primary md:text-xl"
          aria-label="Go to home"
        >
          Kajal Verma
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://github.com/kajal19803"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors hover:border-accent-purple hover:text-primary"
            aria-label="GitHub profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kajal-verma-09a344241/"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors hover:border-accent-purple hover:text-primary"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="ml-1 flex items-center gap-2 rounded-lg border border-accent-purple/40 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-magenta px-4 py-2.5 text-sm font-medium text-primary transition hover:brightness-110"
          >
            <HiOutlineDocumentArrowDown size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-primary lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-surface text-primary"
                        : "text-secondary hover:bg-surface hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-3 flex items-center gap-2 border-t border-border pt-4">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue via-accent-purple to-accent-magenta px-4 py-2.5 text-sm font-medium text-primary"
                >
                  <HiOutlineDocumentArrowDown size={16} />
                  Resume
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
