import React from 'react';
import { ShieldCheck, Dumbbell, Clock, MapPin, Users, Award, Star } from 'lucide-react';
import { GYM_CONTACT } from '../utils/gym';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1c202a] bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00d2ff] uppercase tracking-widest mb-3">
            <span>Rooted in Mainpuri</span>
            <span className="text-[#3a4150]">·</span>
            <span className="text-[#8e96a7]">Concept Demo</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight">
            Built for Results.
            <br />
            <span className="text-[#00d2ff]">Driven by Discipline.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9da5b5] leading-relaxed">
            Situated on Radha Raman Road near Hansh Kuti Ashram, VK FITNESS serves fitness enthusiasts across Narayanpur, Akundaiya, and Greater Mainpuri.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#13161f] border border-[#222735] space-y-4">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                A Dedicated Strength & Wellness Facility
              </h3>
              <p className="text-sm sm:text-base text-[#9ba3b4] leading-relaxed">
                VK FITNESS was established with a singular focus: to offer Mainpuri a clean, modern, and serious training facility where anyone—from high school athletes to working professionals—can build physical strength, stamina, and discipline.
              </p>
              <p className="text-sm sm:text-base text-[#9ba3b4] leading-relaxed">
                The gym is equipped with heavy-gauge iron dumbbells, Olympic barbells, flat/incline benches, squat stations, and cardio machines, complemented by a dual air-conditioning setup to ensure rigorous training sessions remain comfortable throughout the peak summer months.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#7d8697]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#00d2ff]" />
                  <span>Verified Google Business Listing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-[#00d2ff]" />
                  <span>Open 17 Hours Daily (Mon-Sat)</span>
                </div>
              </div>
            </div>

            {/* Owner Placeholder Card (Honest placeholder for unverified trainer credentials) */}
            <div className="p-5 rounded-xl bg-[#11131a] border border-dashed border-[#2d3444] text-xs sm:text-sm text-[#8c94a5] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-white text-xs tracking-wider uppercase flex items-center gap-1.5">
                  <Award size={14} className="text-[#00d2ff]" />
                  Trainer & Founder Profile Slot
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#202533] text-[#a0a8b9]">
                  Owner Slot
                </span>
              </div>
              <p className="text-xs text-[#7e8798]">
                [This section is reserved for verified coach certifications, competitive bodybuilding accolades, and owner philosophy directly from the VK FITNESS team.]
              </p>
            </div>
          </div>

          {/* Quick Metrics & Pillars */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 sm:p-6 rounded-xl bg-[#13161f] border border-[#222735] flex flex-col justify-between">
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#00d2ff] mb-1 flex items-center gap-1">
                  <span>4.8</span>
                  <Star size={24} className="fill-[#00d2ff] text-[#00d2ff]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">Google Maps Rating</div>
              </div>
              <div className="text-[11px] text-[#788193] mt-3">Verified member feedback from Mainpuri community</div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#13161f] border border-[#222735] flex flex-col justify-between">
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#00d2ff] mb-1">
                  6 Days
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">5 AM – 10 PM</div>
              </div>
              <div className="text-[11px] text-[#788193] mt-3">Early bird & late evening batch flexibility</div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#13161f] border border-[#222735] flex flex-col justify-between">
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#00d2ff] mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">Iron Focus</div>
              </div>
              <div className="text-[11px] text-[#788193] mt-3">Free weights, progressive overload, & conditioning</div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#13161f] border border-[#222735] flex flex-col justify-between">
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#00d2ff] mb-1">
                  UP-73
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">Mainpuri, UP</div>
              </div>
              <div className="text-[11px] text-[#788193] mt-3">Near Hansh Kuti Ashram on Radha Raman Road</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
