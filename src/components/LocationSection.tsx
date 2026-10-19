import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Calendar, Check, ExternalLink } from 'lucide-react';
import { GYM_CONTACT, checkGymOpen, GymScheduleState } from '../utils/gym';

export const LocationSection: React.FC = () => {
  const [schedule, setSchedule] = useState<GymScheduleState>(() => checkGymOpen());

  useEffect(() => {
    const timer = setInterval(() => {
      setSchedule(checkGymOpen());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const daysSchedule = [
    { day: 'Monday', hours: '5:00 AM – 10:00 PM', open: true },
    { day: 'Tuesday', hours: '5:00 AM – 10:00 PM', open: true },
    { day: 'Wednesday', hours: '5:00 AM – 10:00 PM', open: true },
    { day: 'Thursday', hours: '5:00 AM – 10:00 PM', open: true },
    { day: 'Friday', hours: '5:00 AM – 10:00 PM', open: true },
    { day: 'Saturday', hours: '5:00 AM – 10:00 PM', open: true },
    { day: 'Sunday', hours: 'Closed', open: false },
  ];

  const currentDayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon...
  // map JS day (0=Sun, 1=Mon... 6=Sat) to daysSchedule index (Mon=0... Sun=6)
  const mappedScheduleIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1c202a] bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#ccff00] uppercase tracking-widest mb-2">
            Visit In Person
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Location & Working Hours
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9ba3b4]">
            Conveniently situated in Narayanpur / Akundaiya on Radha Raman Road, easily accessible from all central parts of Mainpuri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address and Interactive Map Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#13161f] border border-[#242936] shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#1e2330]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">VK FITNESS Facility</h3>
                    <p className="text-xs text-[#828b9d]">Mainpuri, Uttar Pradesh 205001</p>
                  </div>
                </div>

                <a
                  href={GYM_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ccff00] text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#b8e600] transition-colors"
                >
                  <Navigation size={14} />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Exact Address Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#798294] mb-1">
                    Street Address & Landmark
                  </div>
                  <p className="text-base text-white font-medium leading-relaxed">
                    Radha Raman Rd, near Hansh Kuti Ashram,
                    <br />
                    Narayanpur, Akundaiya, Mainpuri,
                    <br />
                    Uttar Pradesh 205001
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9aa3b4] pt-2">
                  <div className="p-3 rounded-lg bg-[#0e1015] border border-[#212532]">
                    <span className="text-[#ccff00] font-bold block mb-0.5">Key Landmark</span>
                    <span>Directly near Hansh Kuti Ashram</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0e1015] border border-[#212532]">
                    <span className="text-[#ccff00] font-bold block mb-0.5">Transit & Parking</span>
                    <span>Roadside parking for bikes & scooters</span>
                  </div>
                </div>
              </div>

              {/* Interactive Stylized Dark Map Preview with Directions Trigger */}
              <div className="relative rounded-xl overflow-hidden border border-[#282e3d] bg-[#0c0e13] h-48 sm:h-56 flex flex-col items-center justify-center text-center p-6 group">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Visual Pin */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-heading font-extrabold text-base shadow-[0_0_24px_rgba(204,255,0,0.5)] mb-3 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>

                <div className="relative z-10 font-heading font-bold text-white text-base">
                  VK FITNESS on Google Maps
                </div>
                <div className="relative z-10 text-xs text-[#8f98a9] mt-0.5 mb-3">
                  Radha Raman Rd · Verified Business Location
                </div>

                <a
                  href={GYM_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#191d26] border border-[#313849] text-[#ccff00] hover:border-[#ccff00] hover:bg-[#1f2430] text-xs font-bold uppercase tracking-wider font-heading transition-all"
                >
                  <span>Launch Google Maps (External)</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2330] sm:hidden">
              <a
                href={GYM_CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#ccff00] text-black font-heading font-bold text-xs uppercase tracking-wider"
              >
                <Navigation size={15} />
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Weekly Schedule & Live Status */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#13161f] border border-[#242936] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#1e2330]">
                <div className="flex items-center gap-2.5">
                  <Clock size={20} className="text-[#ccff00]" />
                  <h3 className="font-heading font-bold text-lg text-white">Operating Schedule</h3>
                </div>

                {/* Live Open / Closed Tag */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    schedule.isOpen
                      ? 'bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30'
                      : 'bg-red-500/15 text-red-400 border border-red-500/30'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      schedule.isOpen ? 'bg-[#ccff00] animate-pulse' : 'bg-red-400'
                    }`}
                  />
                  <span>{schedule.isOpen ? 'Open Now' : 'Closed'}</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-3.5 rounded-lg bg-[#0e1015] border border-[#202532] text-xs text-[#a3abbb] mb-6">
                <span className="text-[#ccff00] font-semibold block mb-0.5">Current Status:</span>
                <span>{schedule.statusText}</span>
              </div>

              {/* Schedule Table */}
              <div className="divide-y divide-[#1c212b]">
                {daysSchedule.map((item, idx) => {
                  const isToday = idx === mappedScheduleIndex;
                  return (
                    <div
                      key={item.day}
                      className={`py-3 flex items-center justify-between text-xs sm:text-sm ${
                        isToday ? 'font-bold text-white bg-[#1a1e28]/50 px-2 rounded-md' : 'text-[#8c94a5]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />}
                        <span className={isToday ? 'text-white' : ''}>{item.day}</span>
                        {isToday && (
                          <span className="text-[10px] text-[#ccff00] uppercase font-bold tracking-wider">
                            (Today)
                          </span>
                        )}
                      </div>

                      <div className={item.open ? (isToday ? 'text-[#ccff00]' : 'text-[#c6cfdd]') : 'text-red-400'}>
                        {item.hours}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[11px] text-[#697282] mt-6 pt-4 border-t border-[#1c212b]">
              * Morning sessions starting at 5:00 AM accommodate school/college students and commuters before business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
