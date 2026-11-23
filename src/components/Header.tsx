import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_SECTIONS } from "../data/portfolioConfig";
import {
  scrollToSection,
  scrollToTop,
  getInitialDarkMode,
  applyTheme,
} from "../utils/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(getInitialDarkMode);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  const handleToggleTheme = () => setIsDark((prev) => !prev);

  const handleSectionNav = (item: (typeof NAV_SECTIONS)[number]) => {
    setMobileMenuOpen(false);
    scrollToSection(item, location.pathname, navigate);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-midnight-bg/95 backdrop-blur-md border-b border-slate-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          to="/"
          onClick={scrollToTop}
          className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] hover:text-sky-600 dark:hover:text-accent-sky transition-colors shrink-0"
        >
          Ahmed Saleban
          <span className="text-amber-500 dark:text-accent-amber">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
          {NAV_SECTIONS.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => handleSectionNav(item)}
              className="text-sm font-medium text-slate-600 dark:text-[#9CA3AF] hover:text-sky-600 dark:hover:text-accent-sky transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-midnight-surface text-slate-800 dark:text-[#F9FAFB] border border-slate-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-accent-sky text-xs font-semibold transition-colors cursor-pointer"
          >
            {isDark ? (
              <>
                <Moon className="w-4 h-4 text-accent-amber" />
                <span className="hidden xl:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-sky-600" />
                <span className="hidden xl:inline">Light</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-[#F9FAFB] hover:border-sky-500 dark:hover:border-accent-sky transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-midnight-surface border-b border-slate-200 dark:border-gray-800 px-4 py-4 space-y-2">
          {NAV_SECTIONS.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => handleSectionNav(item)}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-[#9CA3AF] hover:text-sky-600 dark:hover:text-accent-sky hover:bg-slate-100 dark:hover:bg-midnight-bg transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
