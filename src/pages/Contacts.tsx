import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";
import { GITHUB_URL, GITHUB_LOGO_URL, CONTACT_EMAIL } from "../data/portfolioConfig";

interface ContactFormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  topic: "Full-Stack Web / API Project",
  message: "",
};

const Contacts = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMsg("Please fill out your name, email address, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <p className="font-mono text-xs sm:text-sm text-sky-700 dark:text-accent-sky bg-sky-50 dark:bg-midnight-surface border border-sky-200 dark:border-gray-800 inline-block px-3.5 py-1.5 rounded-full mb-4 transition-colors">
          // Get in Touch
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-4">
          Contact Me
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
          Open to software engineering roles, full-stack &amp; backend project
          work, technical collaboration, and training inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-lg space-y-5 transition-colors">
            <h2 className="text-xl font-bold text-slate-900 dark:text-[#F9FAFB]">
              Direct Channels
            </h2>

            {/* Email Card with Copy Button */}
            <div className="bg-slate-50 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-sky-700 dark:text-accent-sky flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F9FAFB] cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-600 dark:text-accent-amber" />
                      <span className="text-amber-600 dark:text-accent-amber">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm font-semibold text-slate-900 dark:text-[#F9FAFB] hover:text-sky-600 dark:hover:text-accent-sky break-all transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* GitHub Card */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-50 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 hover:border-sky-500 dark:hover:border-accent-sky/60 rounded-xl p-4 flex items-center gap-3.5 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 flex items-center justify-center shrink-0">
                <img
                  src={GITHUB_LOGO_URL}
                  alt="GitHub logo"
                  className="w-5 h-5 object-contain dark:invert dark:brightness-200"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 dark:text-[#F9FAFB] group-hover:text-sky-600 dark:group-hover:text-accent-sky transition-colors">
                  GitHub
                </p>
                <p className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF] truncate">
                  github.com/ahmedsalebaancrtan-hub
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-slate-50 dark:bg-midnight-bg border border-slate-200 dark:border-gray-800 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 flex items-center justify-center text-amber-600 dark:text-accent-amber shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-[#F9FAFB]">Location</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF]">
                  Hargeisa / Somaliland • Remote Ready
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-midnight-surface border border-slate-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-lg transition-colors">
          <h2 className="text-xl font-bold text-slate-900 dark:text-[#F9FAFB] mb-2">
            Send a Message
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mb-6">
            Tell me a little about what you&apos;re building or how I can help.
          </p>

          {submitted && (
            <div
              role="status"
              className="mb-6 bg-sky-50 dark:bg-midnight-bg border border-sky-200 dark:border-accent-sky/40 rounded-xl p-4 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-accent-sky shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-slate-900 dark:text-[#F9FAFB]">
                  Message ready &amp; received!
                </p>
                <p className="text-slate-600 dark:text-[#9CA3AF] mt-0.5">
                  Thank you for reaching out. You can also email me directly at{" "}
                  <span className="text-sky-700 dark:text-accent-sky font-mono text-xs">
                    {CONTACT_EMAIL}
                  </span>{" "}
                  if needed.
                </p>
              </div>
            </div>
          )}

          {errorMsg && (
            <div
              role="alert"
              className="mb-6 bg-amber-50 dark:bg-midnight-bg border border-amber-300 dark:border-accent-amber/50 rounded-xl p-4 flex items-start gap-3 text-sm text-amber-800 dark:text-accent-amber"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-[#9CA3AF] mb-2"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Ahmed Saleban"
                  className="w-full rounded-xl bg-slate-50 dark:bg-midnight-bg border border-slate-300 dark:border-gray-800 focus:border-sky-500 dark:focus:border-accent-sky focus:outline-none px-4 py-3 text-sm text-slate-900 dark:text-[#F9FAFB] placeholder:text-slate-400 dark:placeholder:text-gray-600 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-[#9CA3AF] mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-slate-50 dark:bg-midnight-bg border border-slate-300 dark:border-gray-800 focus:border-sky-500 dark:focus:border-accent-sky focus:outline-none px-4 py-3 text-sm text-slate-900 dark:text-[#F9FAFB] placeholder:text-slate-400 dark:placeholder:text-gray-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-topic"
                className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-[#9CA3AF] mb-2"
              >
                Inquiry Type
              </label>
              <select
                id="contact-topic"
                name="topic"
                value={formData.topic}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, topic: e.target.value }))
                }
                className="w-full rounded-xl bg-slate-50 dark:bg-midnight-bg border border-slate-300 dark:border-gray-800 focus:border-sky-500 dark:focus:border-accent-sky focus:outline-none px-4 py-3 text-sm text-slate-900 dark:text-[#F9FAFB] transition-colors"
              >
                <option value="Full-Stack Web / API Project">Full-Stack Web / API Project</option>
                <option value="Software Engineering Opportunity">Software Engineering Opportunity</option>
                <option value="Mobile / Cross-Platform App">Mobile / Cross-Platform App</option>
                <option value="Technical Training / Mentorship">Technical Training / Mentorship</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-[#9CA3AF] mb-2"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Share your project scope, goals, or role details..."
                className="w-full rounded-xl bg-slate-50 dark:bg-midnight-bg border border-slate-300 dark:border-gray-800 focus:border-sky-500 dark:focus:border-accent-sky focus:outline-none px-4 py-3 text-sm text-slate-900 dark:text-[#F9FAFB] placeholder:text-slate-400 dark:placeholder:text-gray-600 transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-sky text-midnight-bg font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
