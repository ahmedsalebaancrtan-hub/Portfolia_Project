// ─── Shared Navigation Utilities ──────────────────────────────────────────────
// Smooth-scroll helpers shared by Header, Footer, and ScrollToTopButton.

import type { NavSection } from "../data/portfolioConfig";
import { THEME_STORAGE_KEY } from "../data/portfolioConfig";

/**
 * Scroll the page to the given section by id if on the root path, otherwise
 * navigate to the section's fallback route.
 */
export const scrollToSection = (
  item: NavSection,
  currentPathname: string,
  navigateFn: (path: string) => void
): void => {
  if (currentPathname === "/") {
    const el = document.getElementById(item.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }
  navigateFn(item.fallbackPath);
};

/** Scroll the viewport smoothly back to the very top. */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ── Theme helpers ─────────────────────────────────────────────────────────────

/**
 * Read the persisted theme from localStorage and return whether dark mode
 * should be active. Defaults to `true` (dark) when no preference is stored.
 */
export const getInitialDarkMode = (): boolean => {
  if (typeof window === "undefined") return true;
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "light") return false;
  if (saved === "dark") return true;
  return true;
};

/**
 * Apply the dark-mode class to `document.documentElement` and persist the
 * preference to localStorage.
 */
export const applyTheme = (isDark: boolean): void => {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
  } else {
    root.classList.remove("dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, "light");
  }
};
