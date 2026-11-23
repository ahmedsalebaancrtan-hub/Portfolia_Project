import { Link } from "react-router-dom";
import {
  Code2,
  Server,
  Layers,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Download,
} from "lucide-react";
import cvPdf from "../assets/cv pdf.pdf";

interface PillarCard {
  title: string;
  description: string;
  accent: "sky" | "amber";
  icon: typeof Code2;
}

const engineeringPillars: PillarCard[] = [
  {
    title: "Backend & API Engineering",
    description:
      "Designing clean, maintainable REST APIs in Go (Gin + GORM) and Node.js backed by normalized PostgreSQL schemas.",
    accent: "sky",
    icon: Server,
  },
  {
    title: "Modern Frontend Interfaces",
    description:
      "Building responsive, component-driven web applications with React, TypeScript, and Tailwind CSS focused on clarity and speed.",
    accent: "amber",
    icon: Code2,
  },
  {
    title: "Clean Architecture & Delivery",
    description:
      "Structuring modular codebases, role-based access flows, Docker containers, and reliable deployments on Vercel, Render, and AWS.",
    accent: "sky",
    icon: Layers,
  },
];

const quickHighlights = [
  "Software Engineering graduate (Gollis University, 2026)",
  "Full-stack development with Go, React, TypeScript & PostgreSQL",
  "Technical instructor & mentor for web and software engineering learners",
  "Hands-on experience shipping multi-role platforms, APIs & mobile apps",
];

const About = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
          // About Me
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-4">
          Building Reliable Software From Idea to Deployment
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
          I&apos;m a Software Engineering graduate and Full-Stack Developer
          passionate about turning complex requirements into clean, scalable,
          and user-friendly software systems.
        </p>
      </div>

      {/* Main Story + Snapshot Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* Left: Bio & Approach */}
        <article className="lg:col-span-7 bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-lg space-y-4 transition-colors">
          <h2 className="text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
            My Engineering Approach
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            My focus spans both sides of the stack: architecting structured
            backend services and relational databases on one end, and crafting
            fast, intuitive user interfaces on the other. Whether building a
            multi-tenant assessment platform, an e-commerce backend, or an
            inter-city tracking system, I prioritize clean separation of
            concerns, predictable data flows, and maintainable code.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            Alongside software development, I enjoy teaching web programming
            and software engineering fundamentals—breaking down practical
            concepts into clear, hands-on workflows that help other developers
            grow with confidence.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-sky text-midnight-bg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={cvPdf}
              download="Ahmed_Saleban_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] border border-slate-300 dark:border-gray-700 text-sm font-semibold hover:border-amber-500 dark:hover:border-accent-amber hover:text-amber-600 dark:hover:text-accent-amber transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </article>

        {/* Right: Quick Facts Card */}
        <aside className="lg:col-span-5 bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-lg flex flex-col justify-between space-y-6 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 text-amber-600 dark:text-accent-amber">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-[#F9FAFB]">
                  Quick Snapshot
                </h2>
                <p className="font-mono text-xs text-sky-700 dark:text-accent-sky">
                  Hargeisa • Remote Ready
                </p>
              </div>
            </div>

            <ul className="space-y-3 border-t border-slate-200 dark:border-gray-800 pt-4">
              {quickHighlights.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-600 dark:text-[#9CA3AF] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-accent-sky shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 rounded-xl p-4">
            <p className="font-mono text-xs text-amber-700 dark:text-accent-amber mb-1">
              // Core Philosophy
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Write clear, modular code that solves real user problems and stays
              easy for teams to maintain and scale.
            </p>
          </div>
        </aside>
      </div>

      {/* Three Engineering Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {engineeringPillars.map((pillar) => {
          const Icon = pillar.icon;
          const isAmber = pillar.accent === "amber";

          return (
            <article
              key={pillar.title}
              className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-2xl p-6 transition-colors shadow-2xs dark:shadow-none"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 flex items-center justify-center mb-4 ${
                  isAmber
                    ? "text-amber-600 dark:text-accent-amber"
                    : "text-sky-600 dark:text-accent-sky"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F9FAFB] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                {pillar.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
