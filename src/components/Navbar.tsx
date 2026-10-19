import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Clock, MapPin, ChevronRight } from 'lucide-react';
import { GYM_CONTACT, checkGymOpen, GymScheduleState } from '../utils/gym';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scheduleState, setScheduleState] = useState<GymScheduleState>(() => checkGymOpen());
  const [scrolled, setScrolled] = useState(false);

  // Update schedule status every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setScheduleState(checkGymOpen());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll position for header shadow / border emphasis
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Membership', href: '#enquiry' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0a0b0e]/95 backdrop-blur-md border-b border-[#222733] shadow-lg shadow-black/40'
          : 'bg-[#0a0b0e]/85 backdrop-blur-sm border-b border-[#1b1f28]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] rounded-lg p-1"
            aria-label="VK FITNESS Home"
          >
            <div className="w-10 h-10 rounded-md bg-[#00d2ff] text-black font-extrabold flex items-center justify-center font-heading text-xl shadow-[0_0_16px_rgba(0,210,255,0.35)] group-hover:scale-105 transition-transform">
              VK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                VK <span className="text-[#00d2ff]">FITNESS</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#858d9e] uppercase font-medium mt-0.5">
                Mainpuri · UP-73
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#9da5b4] hover:text-[#00d2ff] transition-colors relative py-1 focus:outline-none focus-visible:text-[#00d2ff]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Status indicator */}
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#141720] border border-[#232936] text-xs"
              title={scheduleState.statusText}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  scheduleState.isOpen ? 'bg-[#00d2ff] animate-pulse shadow-[0_0_8px_#00d2ff]' : 'bg-red-500'
                }`}
                aria-hidden="true"
              />
              <span className={scheduleState.isOpen ? 'text-[#e1e5ee] font-medium' : 'text-[#858e9f]'}>
                {scheduleState.isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>

            {/* Quick Enquire Button */}
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wide uppercase font-heading rounded-md bg-[#00d2ff] text-black hover:bg-[#00b4d8] active:scale-95 transition-all shadow-[0_0_18px_rgba(0,210,255,0.3)]"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${GYM_CONTACT.phoneRaw}`}
              className="p-2 text-[#00d2ff] bg-[#141720] border border-[#252a37] rounded-md hover:bg-[#1a1f2c] transition-colors"
              aria-label="Call gym directly"
            >
              <Phone size={18} />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-white bg-[#141720] border border-[#252a37] rounded-md hover:bg-[#1a1f2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Drawer Menu (Outside <header> to avoid backdrop-filter containing block trap) */}
    {isMobileMenuOpen && (
      <div
        id="mobile-navigation"
        className="md:hidden fixed inset-0 bg-[#0a0b0e] z-50 flex flex-col justify-between p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="space-y-6">
          {/* Drawer Header with Brand and Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1f2430]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#00d2ff] text-black font-extrabold flex items-center justify-center font-heading text-lg shadow-[0_0_12px_rgba(0,210,255,0.35)]">
                VK
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white leading-none">
                  VK <span className="text-[#00d2ff]">FITNESS</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#727a8c] uppercase font-semibold mt-0.5">
                  Mainpuri · UP-73
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#9da5b5] hover:text-white bg-[#141720] border border-[#252a37] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Live Timing Banner inside Drawer */}
          <div className="p-3.5 rounded-xl bg-[#13161f] border border-[#232835] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  scheduleState.isOpen ? 'bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]' : 'bg-red-500'
                }`}
              />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {scheduleState.isOpen ? 'Gym Open Now' : 'Gym Closed'}
                </div>
                <div className="text-[11px] text-[#868f9f]">{scheduleState.statusText}</div>
              </div>
            </div>
            <Clock size={16} className="text-[#868f9f]" />
          </div>

          {/* Nav links */}
          <nav className="flex flex-col space-y-1" aria-label="Mobile menu links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between py-3.5 px-3 rounded-lg text-lg font-heading font-bold text-white hover:text-[#00d2ff] hover:bg-[#141720] active:bg-[#1a1e2b] transition-colors border-b border-[#181c25]"
              >
                <span>{link.name}</span>
                <ChevronRight size={18} className="text-[#555d70]" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 pb-6 border-t border-[#1b1f29] space-y-3">
          <a
            href="#enquiry"
            onClick={handleLinkClick}
            className="w-full py-4 px-4 rounded-xl bg-[#00d2ff] text-black font-heading font-extrabold text-center block uppercase tracking-wider shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:bg-[#00b4d8] active:scale-[0.98] transition-all text-sm"
          >
            Join Now & Enquire
          </a>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <a
              href={`tel:${GYM_CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-[#141720] border border-[#242937] text-white font-medium hover:border-[#00d2ff] transition-colors"
            >
              <Phone size={14} className="text-[#00d2ff]" />
              <span>Call Gym</span>
            </a>
            <a
              href={GYM_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-[#141720] border border-[#242937] text-white font-medium hover:border-[#00d2ff] transition-colors"
            >
              <MapPin size={14} className="text-[#00d2ff]" />
              <span>Directions</span>
            </a>
          </div>

          <p className="text-center text-[11px] text-[#6b7385] pt-1">
            Radha Raman Rd, near Hansh Kuti Ashram, Mainpuri
          </p>
        </div>
      </div>
    )}
  </>
  );
};
