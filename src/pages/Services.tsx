// src/pages/Services.tsx
import { type ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Server,
  Smartphone,
  CloudCog,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ServiceCard {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stackTags: string[];
  accent: "sky" | "amber";
  icon: ComponentType<{ className?: string }>;
}

const services: ServiceCard[] = [
  {
    title: "Full-Stack Web Applications",
    tagline: "End-to-end products from UI to database",
    description:
      "Responsive web applications and dashboards engineered with React, JavaScript/Tailwind CSS, and structured backend APIs.",
    deliverables: [
      "Component-driven, mobile-friendly user interfaces",
      "RESTful API integration, authentication & state flows",
      "Clean, maintainable frontend & backend codebases",
    ],
    stackTags: ["React.js", "Tailwind CSS", "JavaScript", "PostgreSQL"],
    accent: "sky",
    icon: Globe,
  },
  {
    title: "Backend APIs & System Architecture",
    tagline: "Reliable services built for growth",
    description:
      "Scalable backend APIs and relational database schemas designed around clear architecture, validation, and data integrity.",
    deliverables: [
      "Go (Gin + GORM) and Node.js RESTful API development",
      "PostgreSQL schema design, migrations & query structure",
      "Role-based access control & clean service boundaries",
    ],
    stackTags: ["Golang", "Gin", "GORM", "Node.js", "PostgreSQL"],
    accent: "amber",
    icon: Server,
  },
  {
    title: "Mobile & Cross-Platform Apps",
    tagline: "Smooth experiences on iOS & Android",
    description:
      "Cross-platform mobile applications and backend-connected client experiences built with modern mobile frameworks.",
    deliverables: [
      "Flutter and React Native mobile UI & navigation",
      "API-backed data sync, forms & user workflows",
      "Consistent layouts across screen sizes",
    ],
    stackTags: ["Flutter", "React Native", "ASP.NET", "REST APIs"],
    accent: "sky",
    icon: Smartphone,
  },
  {
    title: "Deployment, Docker & Cloud Setup",
    tagline: "Smooth shipping to production",
    description:
      "Containerizing applications and configuring cloud or Linux hosting environments so builds are repeatable and dependable.",
    deliverables: [
      "Docker containerization & environment configuration",
      "Deployments on Vercel, AWS, and Ubuntu servers",
      "Git & GitHub branching and release workflows",
    ],
    stackTags: ["Docker", "Vercel", "AWS", "Ubuntu", "Git & GitHub"],
    accent: "amber",
    icon: CloudCog,
  },
  {
    title: "Technical Training & Code Guidance",
    tagline: "Clear foundations for teams & learners",
    description:
      "Practical training sessions, structured learning guides, and code walkthroughs focused on modern web and software engineering.",
    deliverables: [
      "Step-by-step web & programming curriculum materials",
      "Hands-on terminal & practical project exercises",
      "Code structure & debugging guidance",
    ],
    stackTags: ["Web Fundamentals", "React.js", "Golang", "Git"],
    accent: "sky",
    icon: GraduationCap,
  },
];

const Services = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
          // What I Offer
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-4">
          Services &amp; Capabilities
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
          Practical software engineering services covering full-stack web apps,
          backend APIs, mobile clients, cloud deployments, and technical
          training.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          const isAmber = service.accent === "amber";

          return (
            <article
              key={service.title}
              className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-0.5 shadow-sm dark:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 ${
                      isAmber
                        ? "text-amber-600 dark:text-accent-amber"
                        : "text-sky-600 dark:text-accent-sky"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-[#9CA3AF]">
                    {service.tagline}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-[#F9FAFB] mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 border-t border-slate-200 dark:border-gray-800 pt-4 mb-5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] flex items-start gap-2"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isAmber
                            ? "text-amber-600 dark:text-accent-amber"
                            : "text-sky-600 dark:text-accent-sky"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-gray-800">
                {service.stackTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-midnight-bg text-slate-800 dark:text-[#F9FAFB] border border-slate-200 dark:border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm dark:shadow-none">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
            Have a project or training need in mind?
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">
            Share your scope, timeline, or goals and let&apos;s map out the
            next steps.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent-sky text-midnight-bg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Services;