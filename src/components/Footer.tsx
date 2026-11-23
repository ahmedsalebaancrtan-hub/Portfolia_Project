import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import {
  FOOTER_SECTIONS,
  GITHUB_URL,
  GITHUB_LOGO_URL,
} from "../data/portfolioConfig";
import { scrollToSection, scrollToTop } from "../utils/navigation";

const CONTACT_SECTION = { label: "Contact", sectionId: "contact", fallbackPath: "/contact" };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (item: (typeof FOOTER_SECTIONS)[number]) =>
    scrollToSection(item, location.pathname, navigate);

  return (
    <footer className="border-t border-slate-200 dark:border-gray-800 bg-white dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-md">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-lg font-bold tracking-tight text-slate-900 dark:text-[#F9FAFB] hover:text-sky-600 dark:hover:text-accent-sky transition-colors"
            >
              Ahmed Saleban
              <span className="text-amber-500 dark:text-accent-amber">.</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-2 leading-relaxed">
              Full-Stack Software Engineer building scalable web applications and
              clean user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5 sm:gap-6">
              {FOOTER_SECTIONS.map((link) => (
                <button
                  key={link.sectionId}
                  type="button"
                  onClick={() => goToSection(link)}
                  className="text-sm font-medium text-slate-600 dark:text-[#9CA3AF] hover:text-sky-600 dark:hover:text-accent-sky transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-100 dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 transition-colors"
              >
                <img
                  src={GITHUB_LOGO_URL}
                  alt="GitHub logo"
                  className="w-4 h-4 object-contain dark:invert dark:brightness-200"
                />
              </a>
              <button
                type="button"
                onClick={() => goToSection(CONTACT_SECTION)}
                aria-label="Contact"
                className="p-2 rounded-lg bg-slate-100 dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-[#9CA3AF] hover:text-amber-600 dark:hover:text-accent-amber hover:border-amber-500 dark:hover:border-accent-amber/60 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-gray-800/80 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 dark:text-[#9CA3AF]">
          <p>© {currentYear} Ahmed Saleban. All rights reserved.</p>
          <p className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF]">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
