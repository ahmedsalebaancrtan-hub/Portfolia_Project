import { useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Wrench,
  ArrowRight,
  Code2,
} from "lucide-react";
import { DEVICON_BASE } from "../data/portfolioConfig";

type SkillCategory =
  | "All"
  | "Frontend"
  | "Backend"
  | "Mobile & .NET"
  | "Database & DevOps";

interface SkillItem {
  name: string;
  level: "Core" | "Good At";
  focus: string;
  logoUrl: string;
  invertOnDark?: boolean;
}

interface SkillGroup {
  category: Exclude<SkillCategory, "All">;
  summary: string;
  accentClass: string;
  icon: ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const filterTabs: SkillCategory[] = [
  "All",
  "Frontend",
  "Backend",
  "Mobile & .NET",
  "Database & DevOps",
];

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    summary:
      "Modern, responsive web interfaces, utility-first styling, and component-driven applications.",
    accentClass: "text-sky-600 dark:text-accent-sky",
    icon: Layout,
    skills: [
      {
        name: "HTML5",
        level: "Core",
        focus: "Semantic page structure & accessible web markup",
        logoUrl: `${DEVICON_BASE}/html5/html5-original.svg`,
      },
      {
        name: "CSS3",
        level: "Core",
        focus: "Responsive layouts, Flexbox, Grid & animations",
        logoUrl: `${DEVICON_BASE}/css3/css3-original.svg`,
      },
      {
        name: "Tailwind CSS",
        level: "Core",
        focus: "Rapid utility-first styling & cohesive design systems",
        logoUrl: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
      },
      {
        name: "JavaScript",
        level: "Core",
        focus: "Modern ES6+, async workflows & DOM/API integration",
        logoUrl: `${DEVICON_BASE}/javascript/javascript-original.svg`,
      },
      {
        name: "React.js",
        level: "Core",
        focus: "Reusable components, hooks, state & client-side routing",
        logoUrl: `${DEVICON_BASE}/react/react-original.svg`,
      },
    ],
  },
  {
    category: "Backend",
    summary:
      "RESTful APIs, clean architecture, ORM data modeling, and scalable server-side logic.",
    accentClass: "text-amber-600 dark:text-accent-amber",
    icon: Server,
    skills: [
      {
        name: "Golang / Gin + GORM",
        level: "Core",
        focus: "High-performance REST APIs, Clean Architecture & GORM ORM",
        logoUrl: `${DEVICON_BASE}/go/go-original-wordmark.svg`,
      },
      {
        name: "Node.js",
        level: "Core",
        focus: "Server-side JavaScript runtime, middleware & REST endpoints",
        logoUrl: `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
      },
    ],
  },
  {
    category: "Mobile & .NET",
    summary: "Cross-platform mobile apps and enterprise backend services.",
    accentClass: "text-sky-600 dark:text-accent-sky",
    icon: Smartphone,
    skills: [
      {
        name: "ASP.NET",
        level: "Good At",
        focus: "Web APIs, C# backend services & data-driven systems",
        logoUrl: `${DEVICON_BASE}/dotnetcore/dotnetcore-original.svg`,
      },
      {
        name: "Flutter",
        level: "Good At",
        focus: "Cross-platform mobile interfaces & Dart app architecture",
        logoUrl: `${DEVICON_BASE}/flutter/flutter-original.svg`,
      },
      {
        name: "React Native",
        level: "Good At",
        focus: "Native mobile experiences powered by React & JavaScript",
        logoUrl: `${DEVICON_BASE}/react/react-original.svg`,
      },
    ],
  },
  {
    category: "Database & DevOps",
    summary:
      "Relational databases, containerization, Linux servers, cloud hosting, and version control.",
    accentClass: "text-amber-600 dark:text-accent-amber",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        level: "Core",
        focus: "Relational database design, SQL queries & migrations",
        logoUrl: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
      },
      {
        name: "Docker",
        level: "Core",
        focus: "Containerized applications & reproducible environments",
        logoUrl: `${DEVICON_BASE}/docker/docker-original.svg`,
      },
      {
        name: "Vercel",
        level: "Core",
        focus: "Instant frontend deployments & preview workflows",
        logoUrl: `${DEVICON_BASE}/vercel/vercel-original.svg`,
        invertOnDark: true,
      },
      {
        name: "AWS",
        level: "Core",
        focus: "Cloud infrastructure, hosting & production services",
        logoUrl: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
        invertOnDark: true,
      },
      {
        name: "Ubuntu",
        level: "Core",
        focus: "Linux CLI, server administration & WSL2 dev workflows",
        logoUrl: `${DEVICON_BASE}/ubuntu/ubuntu-original.svg`,
      },
      {
        name: "Git & GitHub",
        level: "Core",
        focus: "Version control, branching, rebasing & collaboration",
        logoUrl: `${DEVICON_BASE}/github/github-original.svg`,
        invertOnDark: true,
      },
    ],
  },
];

const levelBadgeStyles: Record<SkillItem["level"], string> = {
  Core: "bg-sky-50 dark:bg-accent-sky/15 text-sky-700 dark:text-accent-sky border-sky-200 dark:border-accent-sky/30",
  "Good At":
    "bg-amber-50 dark:bg-accent-amber/15 text-amber-700 dark:text-accent-amber border-amber-200 dark:border-accent-amber/30",
};

const TechLogo = ({
  name,
  logoUrl,
  invertOnDark,
}: {
  name: string;
  logoUrl: string;
  invertOnDark?: boolean;
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 group-hover:border-sky-500 dark:group-hover:border-accent-sky/40 flex items-center justify-center p-2 shrink-0 transition-colors">
      {hasError ? (
        <Code2 className="w-5 h-5 text-sky-600 dark:text-accent-sky" />
      ) : (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setHasError(true)}
          className={`w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
            invertOnDark ? "dark:invert dark:brightness-200" : ""
          }`}
        />
      )}
    </div>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory>("All");

  const visibleGroups =
    selectedCategory === "All"
      ? skillGroups
      : skillGroups.filter((group) => group.category === selectedCategory);

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-8">
        <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
          // Technical Stack
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
          My core frontend, backend, mobile, database, and cloud deployment
          stack for building production-ready software.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter skills by category"
        className="flex flex-wrap items-center gap-2.5 mb-10"
      >
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                isActive
                  ? "bg-accent-sky text-midnight-bg shadow-xs"
                  : "bg-white dark:bg-midnight-surface text-slate-700 dark:text-[#9CA3AF] border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 hover:text-slate-900 dark:hover:text-[#F9FAFB]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Skill Groups */}
      <div className="space-y-10 mb-12">
        {visibleGroups.map((group) => {
          const GroupIcon = group.icon;
          return (
            <div key={group.category} className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-slate-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 shadow-2xs">
                    <GroupIcon className={`w-5 h-5 ${group.accentClass}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
                      {group.category}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF]">
                      {group.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <article
                    key={skill.name}
                    className="group bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-2xl p-5 transition-all hover:-translate-y-0.5 shadow-sm dark:shadow-md"
                  >
                    <div className="flex items-start gap-3.5">
                      <TechLogo
                        name={skill.name}
                        logoUrl={skill.logoUrl}
                        invertOnDark={skill.invertOnDark}
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-base font-bold text-slate-900 dark:text-[#F9FAFB] truncate">
                            {skill.name}
                          </h3>
                          <span
                            className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${levelBadgeStyles[skill.level]}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                          {skill.focus}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm dark:shadow-none">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 text-amber-600 dark:text-accent-amber shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
              See these technologies in action
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-0.5">
              Explore full-stack projects built with Golang, React, PostgreSQL
              &amp; more.
            </p>
          </div>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent-sky text-midnight-bg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          View Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Skills;