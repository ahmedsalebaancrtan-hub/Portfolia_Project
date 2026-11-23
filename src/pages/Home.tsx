import { Link } from "react-router-dom";
import { Download, Mail } from "lucide-react";
import profileImg from "../assets/profile.jpg";
import cvPdf from "../assets/cv pdf.pdf";
import { GITHUB_URL, GITHUB_LOGO_URL } from "../data/portfolioConfig";

const Home = () => {
  return (
    <section className="py-6 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left Column: Introduction, CTAs & Socials */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
            Software Engineer | Full-Stack Developer
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] leading-tight mb-5 sm:mb-6">
            Hi, I&apos;m{" "}
            <span className="text-sky-500 dark:text-accent-sky">Ahmed Saleban</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed max-w-2xl mb-7 sm:mb-8">
            I am a Software Engineering graduate and Full-Stack Developer
            interested in building modern, scalable, and user-focused digital
            solutions. I enjoy solving problems, developing backend systems,
            creating intuitive interfaces, and continuously learning new
            technologies.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-accent-sky text-midnight-bg font-semibold text-sm hover:opacity-90 transition-opacity shadow-xs"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white dark:bg-midnight-surface text-slate-900 dark:text-[#F9FAFB] border border-slate-300 dark:border-gray-700 font-semibold text-sm hover:border-sky-500 dark:hover:border-accent-sky hover:text-sky-600 dark:hover:text-accent-sky transition-colors shadow-xs"
            >
              Contact Me
            </Link>

            <a
              href={cvPdf}
              download="Ahmed_Saleban_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-slate-100 dark:bg-midnight-bg text-slate-700 dark:text-[#9CA3AF] border border-slate-200 dark:border-gray-800 font-semibold text-sm hover:border-amber-500 dark:hover:border-accent-amber hover:text-amber-600 dark:hover:text-accent-amber transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Direct Social & Contact Links */}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-200 dark:border-gray-800/80 max-w-md">
            <span className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF]">Connect:</span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 transition-colors"
            >
              <img
                src={GITHUB_LOGO_URL}
                alt="GitHub logo"
                className="w-4 h-4 object-contain dark:invert dark:brightness-200"
              />
            </a>
            <Link
              to="/contact"
              aria-label="Send an email"
              className="p-2 rounded-lg bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-[#9CA3AF] hover:text-amber-600 dark:hover:text-accent-amber hover:border-amber-500 dark:hover:border-accent-amber/60 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Circular Profile Card with Moving Ring */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-lg dark:shadow-xl transition-colors">
            <div className="relative group inline-flex items-center justify-center mb-5">
              {/* Moving Gradient Ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-accent-sky via-accent-sky/15 to-accent-amber animate-spin-slow opacity-90"
              />

              {/* Inner Frame & Circular Portrait */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white dark:bg-midnight-surface p-1 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Ahmed Saleban in a dark suit and tie"
                  className="w-full h-full rounded-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-900 dark:text-[#F9FAFB]">Ahmed Saleban</h2>
            <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">Full-Stack Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
