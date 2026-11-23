import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Award,
  FileCheck2,
  Maximize2,
  X,
  ArrowRight,
} from "lucide-react";
import graduationImg from "../assets/gollis-graduation.jpeg";
import secondaryCertImg from "../assets/econdary-certificate.jpeg";
import primaryCertImg from "../assets/primary-certificate.jpeg";

interface CertificateItem {
  title: string;
  board: string;
  year: string;
  achievement: string;
  details: string;
  imageUrl: string;
  cropClass: string;
  alt: string;
}

const certificates: CertificateItem[] = [
  {
    title: "Certificate of Secondary Education Examination",
    board: "Somaliland National Examination & Certification Board (SLNECB)",
    year: "2022 / 2023",
    achievement: "Overall Grade: A+",
    details:
      "Abdi Hussein Matan Secondary School (Sanag) • Index No: D23S124/056 • Cert No: C-62101",
    imageUrl: secondaryCertImg,
    cropClass: "object-cover object-[center_45%] scale-[1.08]",
    alt: "Somaliland Certificate of Secondary Education Examination for Ahmed Suleiman Artan Mohamed with Overall Grade A+",
  },
  {
    title: "Certificate of Primary Education (Standard 8)",
    board: "Somaliland National Examination & Certification Board (SLNECB)",
    year: "2018 / 2019",
    achievement: "Grade: A (560 / 700)",
    details:
      "Safa School (Erigavo) • Roll No: D19543/026 • Cert No: C-27572",
    imageUrl: primaryCertImg,
    cropClass: "object-cover object-[center_52%] scale-[1.12]",
    alt: "Somaliland Certificate of Primary Education Standard 8 for Ahmed Saleban Artan Mohamed with Grade A and 560 out of 700 marks",
  },
];

const continuousLearning = [
  {
    title: "Backend Architecture & APIs",
    detail:
      "Deepening expertise in Go (Gin + GORM), Clean Architecture boundaries, authentication flows, and PostgreSQL performance.",
  },
  {
    title: "Modern Frontend & Mobile",
    detail:
      "Building responsive React + Tailwind CSS interfaces alongside cross-platform mobile apps with Flutter and React Native.",
  },
  {
    title: "Cloud & Container Workflows",
    detail:
      "Practicing Docker containerization, Linux (Ubuntu) server workflows, Git version control, and cloud deployments on Vercel and AWS.",
  },
];

const Education = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(
    null
  );

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
          // Academic Background
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-4">
          Education &amp; Official Records
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
          Software Engineering graduation milestone, official academic
          certificates, and continuous hands-on engineering practice.
        </p>
      </div>

      {/* University Graduation Feature Card */}
      <article className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-lg mb-12 transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cropped Graduation Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 shadow-md">
              <img
                src={graduationImg}
                alt="Ahmed Saleban at Gollis University graduation ceremony holding folder"
                className="w-full h-full object-cover object-[center_20%] scale-[1.15]"
              />
            </div>
            <p className="font-mono text-[11px] text-slate-500 dark:text-[#9CA3AF] mt-2.5 text-center">
              Gollis University Graduation Ceremony • Software Engineering
            </p>
          </div>

          {/* Degree Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 text-sky-600 dark:text-accent-sky">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F9FAFB]">
                    Bachelor&apos;s Degree in Software Engineering
                  </h2>
                  <p className="text-sm text-sky-700 dark:text-accent-sky font-medium">
                    Gollis University
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-sky-50 dark:bg-accent-sky/15 text-sky-700 dark:text-accent-sky border border-sky-200 dark:border-accent-sky/30">
                  Graduate
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-midnight-bg text-amber-700 dark:text-accent-amber border border-slate-200 dark:border-gray-800">
                  2026
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Completed Software Engineering studies with hands-on work in
              system analysis and design, relational databases, web and mobile
              application development, and structured software engineering
              practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-200 dark:border-gray-800">
              {[
                "System Analysis, Architecture & Design",
                "Relational Databases & Data Modeling",
                "Full-Stack Web & Mobile Development",
                "Software Quality & Problem Solving",
              ].map((area) => (
                <div
                  key={area}
                  className="text-xs sm:text-sm text-slate-700 dark:text-[#9CA3AF] bg-slate-50 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 rounded-xl px-3.5 py-2.5 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-sky-600 dark:text-accent-sky shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 rounded-xl p-4 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 dark:text-accent-amber shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-amber-700 dark:text-accent-amber mb-1">
                  Academic &amp; Engineering Capstone
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                  Designed and documented web and software engineering systems
                  with multi-tier architecture, clear workflows, and practical
                  user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Certificates Section */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <p className="font-mono text-xs text-amber-600 dark:text-accent-amber mb-1">
              // Verified Credentials
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F9FAFB] flex items-center gap-2.5">
              <FileCheck2 className="w-6 h-6 text-sky-600 dark:text-accent-sky" />
              Academic Certificates
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#9CA3AF]">
            Click any certificate to inspect the full uncropped document.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <article
              key={cert.title}
              className="group bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-lg transition-colors"
            >
              <div>
                {/* Edge-to-Edge Cropped Document Preview */}
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-midnight-bg border-b border-slate-200 dark:border-gray-800 overflow-hidden cursor-pointer block"
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.alt}
                    className={`w-full h-full transition-transform duration-300 group-hover:scale-[1.12] ${cert.cropClass}`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/50 dark:from-[#111827]/70 via-transparent to-transparent"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-midnight-bg/95 text-slate-900 dark:text-[#F9FAFB] border border-slate-200 dark:border-gray-700 text-xs font-semibold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-sky-600 dark:text-accent-sky" />
                    Inspect Full
                  </span>
                </button>

                <div className="p-6 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-amber-700 dark:text-accent-amber font-semibold">
                      {cert.achievement}
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF]">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-[#F9FAFB] mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-700 dark:text-accent-sky mb-2">
                    {cert.board}
                  </p>
                  <p className="font-mono text-[11px] text-slate-500 dark:text-[#9CA3AF] leading-relaxed">
                    {cert.details}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky hover:text-sky-600 dark:hover:text-accent-sky text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  View Full Certificate
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Continuous Self-Directed Growth */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 dark:text-[#F9FAFB] mb-4">
          Ongoing Technical Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {continuousLearning.map((track) => (
            <div
              key={track.title}
              className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-2xl p-5 transition-colors shadow-2xs dark:shadow-none"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F9FAFB] mb-2">
                {track.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                {track.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/75 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-700 rounded-2xl max-w-4xl w-full p-5 sm:p-6 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-amber-700 dark:text-accent-amber">
                  {selectedCert.achievement} • {selectedCert.year}
                </p>
                <h2
                  id="certificate-modal-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB]"
                >
                  {selectedCert.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF]">
                  {selectedCert.board}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close certificate preview"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F9FAFB] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-100 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 rounded-xl p-3 flex items-center justify-center">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.alt}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Bar */}
      <div className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm dark:shadow-none">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
            Ready to build something reliable together?
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">
            Check out the services I offer or send me a message directly.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] border border-slate-300 dark:border-gray-700 text-sm font-semibold hover:border-sky-500 dark:hover:border-accent-sky hover:text-sky-600 dark:hover:text-accent-sky transition-colors"
          >
            View Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-sky text-midnight-bg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;