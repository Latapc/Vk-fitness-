import React from 'react';
import { Instagram, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import { GYM_CONTACT } from '../utils/gym';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090c] border-t border-[#1a1e28] text-[#8e96a8] text-xs pt-16 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#181c25]">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#ccff00] text-black font-extrabold flex items-center justify-center font-heading text-lg">
                VK
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white tracking-tight leading-none">
                  VK <span className="text-[#ccff00]">FITNESS</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#727a8c] uppercase font-semibold mt-0.5">
                  Mainpuri, Uttar Pradesh
                </span>
              </div>
            </div>

            <p className="text-[#8c94a5] text-xs leading-relaxed max-w-sm">
              Mainpuri's premier strength training and conditioning environment. Heavy iron, air-conditioned workout floor, and disciplined guidance to power your next level.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={GYM_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141720] border border-[#232836] flex items-center justify-center text-[#c5cddb] hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram size={15} />
              </a>
              <a
                href={`tel:${GYM_CONTACT.phoneRaw}`}
                className="w-8 h-8 rounded-lg bg-[#141720] border border-[#232836] flex items-center justify-center text-[#c5cddb] hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                aria-label="Call gym"
              >
                <Phone size={15} />
              </a>
              <a
                href={GYM_CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141720] border border-[#232836] flex items-center justify-center text-[#c5cddb] hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                aria-label="Google Maps directions"
              >
                <MapPin size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-heading font-bold uppercase tracking-wider text-xs">
              Quick Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#ccff00] transition-colors">
                  About VK FITNESS
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#ccff00] transition-colors">
                  Training & Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#ccff00] transition-colors">
                  Equipment Gallery
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-[#ccff00] transition-colors">
                  Membership Enquiries
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#ccff00] transition-colors">
                  Location & Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ccff00] transition-colors">
                  Contact & WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Operating Timings */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-white font-heading font-bold uppercase tracking-wider text-xs">
              Facility Location & Hours
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#ccff00] shrink-0 mt-0.5" />
                <span className="text-[#cad2df]">
                  Radha Raman Rd, near Hansh Kuti Ashram, Narayanpur, Akundaiya, Mainpuri, UP 205001
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#ccff00] shrink-0 mt-0.5" />
                <span className="text-[#cad2df]">
                  Mon – Sat: 5:00 AM – 10:00 PM <br />
                  <span className="text-red-400">Sunday: Closed</span>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-[#ccff00] shrink-0 mt-0.5" />
                <span className="text-[#cad2df]">{GYM_CONTACT.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#6d7688]">
          <div className="space-y-1 text-center md:text-left">
            <div>
              &copy; 2026 VK FITNESS (Independent Concept Preview). All rights reserved.
            </div>
            <div className="text-[#596272]">
              Disclaimer: This website is an unsolicited independent concept demonstration for VK FITNESS, Mainpuri. It does not represent an official endorsement or formal partnership.
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#13161f] border border-[#212634] text-[#a1a9b8] hover:text-[#ccff00] hover:border-[#ccff00] transition-colors self-center md:self-auto"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
