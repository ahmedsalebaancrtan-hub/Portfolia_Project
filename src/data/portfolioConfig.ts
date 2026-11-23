// ─── Centralized Portfolio Configuration ──────────────────────────────────────
// All shared constants, navigation definitions, and URL builders live here.
// Import from this file instead of re-declaring values across components.

// ── Theme ─────────────────────────────────────────────────────────────────────
export const THEME_STORAGE_KEY = "ahmed-portfolio-theme";

// ── External Links ────────────────────────────────────────────────────────────
export const GITHUB_URL = "https://github.com/ahmedsalebaancrtan-hub";
export const GITHUB_LOGO_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";

// ── Devicons CDN ──────────────────────────────────────────────────────────────
export const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// ── Contact ───────────────────────────────────────────────────────────────────
export const CONTACT_EMAIL = "ahmedsalebaancrtan@gmail.com";

// ── WhatsApp ──────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "252633306376";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Ahmed, I visited your portfolio and would love to connect.";

export const buildWhatsAppUrl = (
  number: string = WHATSAPP_NUMBER,
  message: string = WHATSAPP_DEFAULT_MESSAGE
): string =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavSection {
  label: string;
  sectionId: string;
  fallbackPath: string;
}

/** Full navigation items — used by Header and mobile drawer. */
export const NAV_SECTIONS: NavSection[] = [
  { label: "Home", sectionId: "home", fallbackPath: "/" },
  { label: "About", sectionId: "about", fallbackPath: "/about" },
  { label: "Skills", sectionId: "skills", fallbackPath: "/skills" },
  { label: "Projects", sectionId: "projects", fallbackPath: "/projects" },
  { label: "Experience", sectionId: "experience", fallbackPath: "/experience" },
  { label: "Education", sectionId: "education", fallbackPath: "/education" },
  { label: "Services", sectionId: "services", fallbackPath: "/services" },
  { label: "Contact", sectionId: "contact", fallbackPath: "/contact" },
];

/** Subset shown in the Footer. */
export const FOOTER_SECTIONS: NavSection[] = [
  { label: "Home", sectionId: "home", fallbackPath: "/" },
  { label: "About", sectionId: "about", fallbackPath: "/about" },
  { label: "Projects", sectionId: "projects", fallbackPath: "/projects" },
  { label: "Contact", sectionId: "contact", fallbackPath: "/contact" },
];
