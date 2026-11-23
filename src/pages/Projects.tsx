import { useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Server,
  Smartphone,
  ArrowRight,
  Sparkles,
  Eye,
  X,
  CheckCircle2,
} from "lucide-react";
import { GITHUB_URL } from "../data/portfolioConfig";

type ProjectCategory =
  | "All"
  | "Full-Stack"
  | "Backend & APIs"
  | "Systems & Mobile";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  featured?: boolean;
  bannerGradient: string;
  architectureTag: string;
  imageUrl?: string;
  techStack: string[];
  highlights: string[];
  problem: string;
  architectureDetails: string;
  githubUrl: string;
  liveUrl?: string;
  icon: ComponentType<{ className?: string }>;
}

const filterTabs: ProjectCategory[] = [
  "All",
  "Full-Stack",
  "Backend & APIs",
  "Systems & Mobile",
];

const projects: ProjectItem[] = [
  {
    title: "ShopHub E-Commerce API",
    subtitle: "Scalable Go & Gin Commerce Backend",
    description:
      "Modular e-commerce backend infrastructure engineered with Clean Architecture, strict environment configuration, relational product/order schemas, and RESTful API endpoints.",
    category: "Backend & APIs",
    featured: true,
    bannerGradient:
      "from-sky-100 via-white to-amber-100 dark:from-accent-sky/25 dark:via-[#111827] dark:to-accent-amber/20",
    architectureTag: "Clean Architecture • REST API",
    techStack: ["Golang", "Gin", "GORM", "PostgreSQL", "Docker"],
    highlights: [
      "Clean Architecture separation (handlers, services, repositories)",
      "Environment validation & structured PostgreSQL migrations",
    ],
    problem:
      "E-commerce backends quickly become fragile when database queries, validation, and HTTP routing are tightly coupled inside single handler files.",
    architectureDetails:
      "Structured in Go using Gin and GORM with strict layer boundaries (Delivery -> Usecase -> Repository), validated startup configuration via godotenv, and containerized PostgreSQL workflows.",
    githubUrl: GITHUB_URL,
    icon: Server,
  },
  {
    title: "QuizGen AI",
    subtitle: "Multi-Tenant Academic Assessment Platform",
    description:
      "Full-stack assessment platform enabling schools to generate filtered, structured exam questions from uploaded PDF documents with a responsive modern UI.",
    category: "Full-Stack",
    featured: true,
    bannerGradient:
      "from-amber-100 via-white to-sky-100 dark:from-accent-amber/25 dark:via-[#111827] dark:to-accent-sky/25",
    architectureTag: "Multi-Tenant • AI Workflow",
    techStack: ["Golang", "Gin", "PostgreSQL", "React", "Tailwind CSS"],
    highlights: [
      "Multi-tenant school filtering & PDF content processing",
      "Responsive React + Tailwind dashboard interface",
    ],
    problem:
      "Educators spend hours manually drafting structured quizzes from course PDFs while keeping question banks isolated per institution.",
    architectureDetails:
      "Built a school-scoped backend in Go + PostgreSQL paired with a responsive React + Tailwind CSS interface for uploading study PDFs, generating structured questions, and filtering assessments by school.",
    githubUrl: GITHUB_URL,
    icon: Sparkles,
  },
  {
    title: "Event Management Platform",
    subtitle: "End-to-End Event & Ticketing System",
    description:
      "Full-stack event platform featuring role-based access control (RBAC), JWT token-refresh mechanics, server-side pagination, and organizer dashboards.",
    category: "Full-Stack",
    featured: true,
    bannerGradient:
      "from-sky-100 via-slate-50 to-slate-100 dark:from-accent-sky/30 dark:via-[#1F2937] dark:to-[#111827]",
    architectureTag: "RBAC • JWT Refresh • Full-Stack",
    techStack: ["Golang", "Gin", "GORM", "PostgreSQL", "React", "TypeScript"],
    highlights: [
      "Role-based access control & secure refresh-token auth flow",
      "Server-side search, filtering & pagination",
    ],
    problem:
      "Event organizers and attendees need distinct permissions, reliable session continuity, and fast browsing across large event listings.",
    architectureDetails:
      "Implemented JWT access/refresh token rotation, middleware-enforced RBAC for admins/organizers/attendees, and server-side paginated queries consumed by a typed React + TypeScript frontend.",
    githubUrl: GITHUB_URL,
    icon: Layers,
  },
  {
    title: "Multi-Role School Management System",
    subtitle: "Academic Administration & Attendance Backend",
    description:
      "Comprehensive backend service handling student enrollment, class scheduling, role permissions, and bulk attendance reporting APIs.",
    category: "Backend & APIs",
    bannerGradient:
      "from-sky-50 via-white to-sky-100 dark:from-accent-sky/20 dark:via-[#111827] dark:to-accent-sky/10",
    architectureTag: "Bulk Reporting • Relational Schema",
    techStack: ["Golang", "Gin", "PostgreSQL", "REST API"],
    highlights: [
      "Bulk attendance reporting & multi-role permission guards",
      "Normalized PostgreSQL relational schema design",
    ],
    problem:
      "Manual attendance sheets and fragmented student records slow down daily reporting for teachers and school administrators.",
    architectureDetails:
      "Designed normalized PostgreSQL tables for students, classes, and attendance logs with transactional bulk-insert endpoints in Go and Gin.",
    githubUrl: GITHUB_URL,
    icon: Server,
  },
  {
    title: "Inter-City Bus Tracking & Booking System",
    subtitle: "Live GPS Route Simulation & Multi-Currency Payments",
    description:
      "Transport management and live GPS route simulation system supporting multi-currency payment tracking and route mapping across regional cities.",
    category: "Systems & Mobile",
    bannerGradient:
      "from-amber-50 via-white to-sky-100 dark:from-accent-amber/20 dark:via-[#111827] dark:to-accent-sky/20",
    architectureTag: "GPS Simulation • Dual-Currency",
    techStack: ["ASP.NET", "C#", "PostgreSQL", "GPS Mapping"],
    highlights: [
      "Live route trajectory simulation & fleet registration",
      "Dual-currency fare & payment record tracking",
    ],
    problem:
      "Inter-city fleet operators need real-time visibility into route progress alongside accurate multi-currency ticket ledger tracking.",
    architectureDetails:
      "Engineered with ASP.NET, C#, and PostgreSQL to simulate live GPS coordinates along inter-city corridors while recording dual-currency passenger transactions.",
    githubUrl: GITHUB_URL,
    icon: Smartphone,
  },
  {
    title: "DukaanFlow CMS",
    subtitle: "API-Driven Inventory & Transaction Manager",
    description:
      "Structured category, product, and local transaction tracking API designed for small retail operations with clear database integrity rules.",
    category: "Backend & APIs",
    bannerGradient:
      "from-sky-100 via-white to-amber-50 dark:from-accent-sky/20 dark:via-[#1F2937] dark:to-accent-amber/15",
    architectureTag: "Inventory API • Data Integrity",
    techStack: ["Node.js", "PostgreSQL", "REST API", "Git"],
    highlights: [
      "Category & product catalog management endpoints",
      "Transactional ledger & stock validation rules",
    ],
    problem:
      "Small retail shops need lightweight, reliable inventory and transaction APIs that prevent negative stock and inconsistent records.",
    architectureDetails:
      "Built RESTful category, product, and transaction endpoints with Node.js and PostgreSQL backed by strict schema constraints and request validation.",
    githubUrl: GITHUB_URL,
    icon: Layers,
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-8">
        <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
          // Selected Work
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-4">
          Featured Projects
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
          Full-stack applications, backend APIs, and data-driven systems built
          with clean architecture and modern web technologies.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {visibleProjects.map((project) => {
          const ProjectIcon = project.icon;
          return (
            <article
              key={project.title}
              className="group bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1 shadow-sm dark:shadow-lg"
            >
              <div>
                {/* 16:9 Visual Preview Banner */}
                <div
                  className={`relative aspect-video w-full bg-gradient-to-br ${project.bannerGradient} border-b border-slate-200 dark:border-gray-800 p-5 flex flex-col justify-between overflow-hidden`}
                >
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  ) : (
                    <>
                      <div className="flex items-center justify-between gap-2">
                        <div className="p-2.5 rounded-xl bg-white/90 dark:bg-midnight-bg/90 border border-slate-200 dark:border-gray-800 text-sky-600 dark:text-accent-sky">
                          <ProjectIcon className="w-5 h-5" />
                        </div>

                        {project.featured && (
                          <span className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/90 dark:bg-midnight-bg/90 text-amber-700 dark:text-accent-amber border border-amber-300 dark:border-accent-amber/40">
                            Featured
                          </span>
                        )}
                      </div>

                      <div>
                        <p className="font-mono text-[11px] text-sky-700 dark:text-accent-sky mb-1">
                          {project.architectureTag}
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-[#F9FAFB]/90 line-clamp-1">
                          {project.title}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[11px] text-sky-700 dark:text-accent-sky">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB] group-hover:text-sky-600 dark:group-hover:text-accent-sky transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF] mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-1.5 border-t border-slate-200 dark:border-gray-800 pt-3.5">
                    {project.highlights.map((point) => (
                      <li
                        key={point}
                        className="text-xs text-slate-600 dark:text-[#9CA3AF] flex items-start gap-2"
                      >
                        <span className="text-amber-600 dark:text-accent-amber font-bold mt-0.5">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Badges + Actions */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-midnight-bg text-slate-800 dark:text-[#F9FAFB] border border-slate-200 dark:border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-gray-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-[#F9FAFB] hover:text-sky-600 dark:hover:text-accent-sky transition-colors"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    Code
                  </a>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-600 dark:text-accent-amber hover:opacity-85 transition-opacity cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      Case Study
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 dark:text-accent-sky hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case-Study Details Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/70 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-sky-700 dark:text-accent-sky mb-1">
                  {activeProject.category} • {activeProject.architectureTag}
                </p>
                <h2
                  id="project-modal-title"
                  className="text-2xl font-extrabold text-slate-900 dark:text-[#F9FAFB]"
                >
                  {activeProject.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-0.5">
                  {activeProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close case study modal"
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F9FAFB] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 border-t border-slate-200 dark:border-gray-800 pt-4">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-accent-amber mb-1.5">
                  Problem &amp; Goal
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                  {activeProject.problem}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-sky-700 dark:text-accent-sky mb-1.5">
                  System Architecture
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                  {activeProject.architectureDetails}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-[#F9FAFB] mb-2">
                  Key Engineering Highlights
                </h3>
                <ul className="space-y-2">
                  {activeProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-[#9CA3AF]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-accent-sky shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-midnight-bg text-slate-800 dark:text-[#F9FAFB] border border-slate-200 dark:border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 dark:border-gray-800 pt-4">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] border border-slate-300 dark:border-gray-700 text-sm font-semibold hover:border-sky-500 dark:hover:border-accent-sky hover:text-sky-600 dark:hover:text-accent-sky transition-colors"
              >
                <FolderGit2 className="w-4 h-4" />
                View Repository
              </a>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-sky text-midnight-bg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Bar */}
      <div className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm dark:shadow-none">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
            Interested in working together on a project?
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">
            Explore my experience or reach out directly to discuss your idea.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] border border-slate-300 dark:border-gray-700 text-sm font-semibold hover:border-sky-500 dark:hover:border-accent-sky hover:text-sky-600 dark:hover:text-accent-sky transition-colors"
          >
            View Experience
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-sky text-midnight-bg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;