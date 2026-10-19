import React, { useState } from 'react';
import { Info, X, ExternalLink } from 'lucide-react';
import { GYM_CONTACT } from '../utils/gym';

export const DemoBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <aside
        className="w-full bg-[#111319] border-b border-[#222733] text-xs text-[#a0a7b5] py-2 px-3 sm:px-4 relative z-30"
        aria-label="Concept Demo Notice"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden flex-1">
            <span className="shrink-0 px-2 py-0.5 rounded bg-[#ccff00]/15 text-[#ccff00] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
              Concept Demo
            </span>
            <p className="truncate text-[11px] sm:text-xs">
              <span className="hidden sm:inline">Independent website preview for </span>
              <strong className="text-white font-semibold">{GYM_CONTACT.name}</strong>
              <span className="hidden sm:inline"> (Mainpuri, UP).</span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowInfoModal(true)}
              className="text-[#ccff00] hover:underline font-medium text-[11px] sm:text-xs whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ccff00]"
            >
              Details
            </button>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="text-[#7c8496] hover:text-white p-1 rounded transition-colors focus:outline-none"
              aria-label="Dismiss banner"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Info Modal */}
      {showInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-[#141720] border border-[#262c38] rounded-xl max-w-lg w-full p-6 text-left shadow-2xl relative">
            <button
              type="button"
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 text-[#8890a0] hover:text-white p-1"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded bg-[#ccff00]/15 text-[#ccff00] text-xs font-bold uppercase tracking-wider">
                Demo Notice
              </span>
              <span className="text-xs text-[#7c8496]">VK FITNESS Demo</span>
            </div>

            <h3 id="modal-title" className="text-xl font-bold text-white mb-3 font-heading">
              About This Concept Website
            </h3>

            <div className="space-y-3 text-sm text-[#9da5b5] leading-relaxed">
              <p>
                This interactive demo was created as an unsolicited concept preview for <strong className="text-white">VK FITNESS</strong> in Mainpuri, Uttar Pradesh.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#b8bfcc]">
                <li><strong className="text-white">Verified Location:</strong> Radha Raman Rd, near Hansh Kuti Ashram, Narayanpur, Akundaiya, Mainpuri.</li>
                <li><strong className="text-white">Verified Hours:</strong> Mon - Sat 5:00 AM – 10:00 PM (Closed Sundays).</li>
                <li><strong className="text-white">Direct Contacts:</strong> Linked directly to +91 70171 06874 and Instagram @vk.fitness2024.</li>
                <li><strong className="text-white">Zero Fabrications:</strong> Membership fees and trainer credentials are reserved for direct owner quote and not fabricated.</li>
                <li><strong className="text-white">Replaceable Media:</strong> All photography is currently athletic placeholder photography ready to be swapped with genuine gym photos.</li>
              </ul>
              <p className="text-xs text-[#737c8e] pt-2 border-t border-[#222733]">
                This demo does not imply an official endorsement or legal partnership with VK FITNESS.
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowInfoModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded bg-[#ccff00] text-black hover:bg-[#b8e600] transition-colors"
              >
                Close & Explore Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
