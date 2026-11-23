import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE, buildWhatsAppUrl } from "../data/portfolioConfig";
import { scrollToTop } from "../utils/navigation";

/** Official WhatsApp logo as an inline SVG to avoid any external asset dependency. */
const WhatsAppOfficialLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12.004 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.46 3.483 1.334 4.999L2 22l5.14-1.348a9.95 9.95 0 0 0 4.864 1.241h.004c5.516 0 9.992-4.476 9.992-9.993S17.52 2 12.004 2Zm5.823 14.23c-.244.687-1.416 1.312-1.976 1.396-.505.076-1.145.108-1.845-.115-.425-.135-.971-.315-1.668-.617-2.934-1.267-4.85-4.221-4.997-4.417-.147-.196-1.193-1.588-1.193-3.029 0-1.441.755-2.15 1.023-2.444.268-.294.585-.368.78-.368.195 0 .39.002.561.01.18.008.421-.068.658.502.244.586.83 2.028.903 2.175.073.147.122.318.024.514-.098.196-.147.318-.293.49-.147.171-.308.383-.44.514-.147.147-.3.306-.129.6.171.293.761 1.255 1.634 2.033 1.123 1.001 2.07 1.311 2.363 1.458.293.147.464.122.635-.073.171-.196.732-.854.927-1.147.196-.293.391-.244.659-.147.268.098 1.708.805 2.001.952.293.147.488.22.561.342.073.122.073.708-.171 1.395Z" />
  </svg>
);

const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp floating action button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="p-3.5 rounded-full bg-[#25D366] text-midnight-bg hover:brightness-110 hover:-translate-y-0.5 shadow-2xl transition-all flex items-center justify-center"
      >
        <WhatsAppOfficialLogo className="w-5 h-5" />
      </a>

      {/* Scroll-to-top button (visible after scrolling down) */}
      {visible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="p-3 rounded-full bg-midnight-surface text-accent-sky border border-gray-700 hover:border-accent-sky hover:bg-midnight-bg hover:-translate-y-0.5 shadow-2xl transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
