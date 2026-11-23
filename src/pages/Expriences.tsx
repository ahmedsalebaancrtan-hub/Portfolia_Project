import { Link } from "react-router-dom";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Engineering" | "Instruction & Mentorship" | "Collaborative Builds";
  summary: string;
  responsibilities: string[];
  stack: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: "Full-Stack Software Developer",
    organization: "Independent & Product Engineering Builds",
    location: "Hargeisa / Remote",
    period: "2025 – Present",
    type: "Engineering",
    summary:
      "Designing, building, and deploying end-to-end web applications, RESTful APIs, and relational database architectures.",
    responsibilities: [
      "Architected backend REST APIs in Go (Gin + GORM) and Node.js backed by PostgreSQL with structured validation and role-based access control.",
      "Built responsive React and Tailwind CSS frontends featuring clean component separation, state management, and smooth API integration.",
      "Containerized services with Docker and deployed applications across Vercel, Render, and AWS on Ubuntu environments.",
    ],
    stack: ["Golang", "Gin", "GORM", "PostgreSQL", "React", "Docker", "AWS"],
  },
  {
    role: "Technical Instructor & Developer Mentor",
    organization: "Web Programming & Software Engineering Training",
    location: "Somaliland",
    period: "2026",
    type: "Instruction & Mentorship",
    summary:
      "Teaching web programming and software engineering fundamentals through hands-on lessons, practical checklists, and clear technical guides.",
    responsibilities: [
      "Created structured lessons, slide outlines, and terminal-based practical exercises covering core web and backend programming concepts.",
      "Guided learners through real coding workflows, debugging habits, and clean code structure.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "React.js", "Golang", "Git & GitHub"],
  },
  {
    role: "Full-Stack Team Collaborator",
    organization: "Entry-Level Engineering & Academic Teams",
    location: "Hargeisa",
    period: "2025 – 2026",
    type: "Collaborative Builds",
    summary:
      "Collaborated with fellow developers and peers to plan schemas, build features, review code, and ship multi-module applications.",
    responsibilities: [
      "Coordinated feature implementation, API contracts, and relational data models across multi-developer repositories.",
      "Managed Git branches, rebasing, and merge conflict resolution to keep team codebases clean and consistent.",
    ],
    stack: ["React.js", "Node.js", "PostgreSQL", "Git & GitHub", "ASP.NET"],
  },
];

const badgeStyles: Record<ExperienceEntry["type"], string> = {
  Engineering:
    "bg-sky-50 dark:bg-accent-sky/15 text-sky-700 dark:text-accent-sky border-sky-200 dark:border-accent-sky/30",
  "Instruction & Mentorship":
    "bg-amber-50 dark:bg-accent-amber/15 text-amber-700 dark:text-accent-amber border-amber-200 dark:border-accent-amber/30",
  "Collaborative Builds":
    "bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-[#F9FAFB] border-slate-200 dark:border-gray-700",
};

const Experiences = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
          // Experience &amp; Impact
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-4">
          Work &amp; Engineering Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
          Hands-on experience building full-stack systems, mentoring aspiring
          developers, and collaborating on practical software projects.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-gray-800 space-y-8 mb-12">
        {experiences.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="relative bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-2xl p-6 sm:p-8 transition-colors shadow-sm dark:shadow-lg"
          >
            {/* Timeline Node */}
            <span
              aria-hidden="true"
              className="w-3.5 h-3.5 rounded-full bg-sky-500 dark:bg-accent-sky ring-4 ring-slate-50 dark:ring-midnight-bg border border-white/60 dark:border-[#F9FAFB]/30 absolute -left-[31px] sm:-left-[39px] top-7"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span
                className={`font-mono text-xs font-medium px-3 py-1 rounded-full border ${badgeStyles[item.type]}`}
              >
                {item.type}
              </span>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-[#9CA3AF] font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-accent-sky" />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-accent-amber" />
                  {item.location}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 text-sky-600 dark:text-accent-sky shrink-0 mt-0.5">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
                  {item.role}
                </h2>
                <p className="text-sm font-medium text-sky-700 dark:text-accent-sky">
                  {item.organization}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-4">
              {item.summary}
            </p>

            <ul className="space-y-2 mb-5 border-t border-slate-200 dark:border-gray-800 pt-4">
              {item.responsibilities.map((point) => (
                <li
                  key={point}
                  className="text-sm text-slate-600 dark:text-[#9CA3AF] flex items-start gap-2.5"
                >
                  <span className="text-amber-600 dark:text-accent-amber font-bold mt-0.5">
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-midnight-bg text-slate-800 dark:text-[#F9FAFB] border border-slate-200 dark:border-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm dark:shadow-none">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
            Curious about my academic foundation?
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">
            Review my Software Engineering degree and technical coursework.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/education"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] border border-slate-300 dark:border-gray-700 text-sm font-semibold hover:border-sky-500 dark:hover:border-accent-sky hover:text-sky-600 dark:hover:text-accent-sky transition-colors"
          >
            View Education
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-sky text-midnight-bg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experiences;