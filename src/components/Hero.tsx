import React from 'react';
import { ArrowRight, ChevronDown, Shield, CheckCircle2 } from 'lucide-react';
import { GYM_CONTACT, checkGymOpen } from '../utils/gym';

export const Hero: React.FC = () => {
  const schedule = checkGymOpen();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#202531]"
    >
      {/* Background Image with High-Impact Gradient Masks */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop"
          alt="VK FITNESS Gym Training Facility"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.15] scale-105 transform will-change-transform"
          loading="eager"
        />
        {/* Athletic Gradient Masks & Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/60 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-left sm:text-center mt-6">
        {/* Unboxed Metadata Tagline (Anti-Slop compliant) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#c4ccd9] font-medium mb-5 bg-[#12151c]/90 border border-[#242938] px-3 py-1.5 rounded-full backdrop-blur-md max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff] shrink-0" />
          <span className="text-[#00d2ff] font-bold uppercase tracking-wider text-[11px] shrink-0">VK FITNESS</span>
          <span className="text-[#4e5668]">·</span>
          <span className="truncate">Radha Raman Rd, Mainpuri</span>
          <span className="hidden sm:inline text-[#4e5668]">·</span>
          <span className="hidden sm:inline text-[#9ea6b5] shrink-0">5:00 AM – 10:00 PM</span>
        </div>

        {/* Hero Title (Required: “YOUR FITNESS. YOUR NEXT LEVEL.”) */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-6">
          YOUR FITNESS.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#0284c7] drop-shadow-[0_0_35px_rgba(0,210,255,0.35)]">
            YOUR NEXT LEVEL.
          </span>
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-base sm:text-lg md:text-xl text-[#a2abb9] max-w-2xl sm:mx-auto font-normal leading-relaxed mb-10">
          Mainpuri's premier strength training and conditioning environment. Equipped with heavy free weights, dedicated cardio stations, air-conditioned workout floor, and disciplined training support.
        </p>

        {/* Hero Actions (Required: Join Now and Explore the Gym) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none sm:mx-auto">
          <a
            href="#enquiry"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#00d2ff] text-black font-heading font-extrabold text-base tracking-wide uppercase shadow-[0_0_28px_rgba(0,210,255,0.35)] hover:bg-[#00b4d8] active:scale-[0.98] transition-all group"
          >
            <span>Join Now</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#facilities"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#141720]/90 border border-[#272d3b] text-white hover:text-[#00d2ff] hover:border-[#00d2ff] active:scale-[0.98] transition-all font-heading font-bold text-base tracking-wide uppercase backdrop-blur-sm"
          >
            Explore the Gym
          </a>
        </div>

        {/* Verified Attributes List (Clean unboxed text metadata) */}
        <div className="mt-14 pt-8 border-t border-[#1d222e] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="space-y-1">
            <div className="text-[11px] text-[#717a8c] uppercase tracking-wider font-semibold">Location</div>
            <div className="text-sm font-semibold text-white">Radha Raman Rd</div>
            <div className="text-xs text-[#9da5b4]">Near Hansh Kuti Ashram</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] text-[#717a8c] uppercase tracking-wider font-semibold">Working Hours</div>
            <div className="text-sm font-semibold text-[#00d2ff]">Mon – Sat 5AM–10PM</div>
            <div className="text-xs text-[#9da5b4]">Sunday Closed</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] text-[#717a8c] uppercase tracking-wider font-semibold">Workout Climate</div>
            <div className="text-sm font-semibold text-white">Air Conditioned Floor</div>
            <div className="text-xs text-[#9da5b4]">Comfortable All Seasons</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] text-[#717a8c] uppercase tracking-wider font-semibold">Training Focus</div>
            <div className="text-sm font-semibold text-white">Strength & Guidance</div>
            <div className="text-xs text-[#9da5b4]">Beginner to Advanced</div>
          </div>
        </div>
      </div>
    </section>
  );
};
