import React from 'react';
import { Phone, MessageSquare, Instagram, MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { GYM_CONTACT } from '../utils/gym';

export const ContactSection: React.FC = () => {
  const whatsappDirectUrl = `https://wa.me/${GYM_CONTACT.phoneRaw}?text=${encodeURIComponent(
    'Hello VK FITNESS! I found your website demo and would like to enquire about membership, gym timings, and admission.'
  )}`;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1c202a] bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold text-[#00d2ff] uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Speak Directly With VK FITNESS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9ba3b4]">
            Have questions about morning/evening batches, weight-loss programs, or membership joining? Reach out through verified contact channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Call Card */}
          <div className="p-7 rounded-2xl bg-[#13161f] border border-[#232836] flex flex-col justify-between hover:border-[#00d2ff]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00d2ff]/10 border border-[#00d2ff]/25 flex items-center justify-center text-[#00d2ff] mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-1">Direct Phone Call</h3>
              <p className="text-xs sm:text-sm text-[#8c95a6] mb-4">
                Call the gym on-desk phone for instant batch schedule confirmation, trial pass inquiries, or directions.
              </p>
              <div className="text-lg sm:text-xl font-bold font-heading text-white">
                {GYM_CONTACT.phoneDisplay}
              </div>
              <div className="text-xs text-[#717a8b] mt-1 flex items-center gap-1.5">
                <Clock size={12} />
                <span>Available Mon–Sat: 5:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1e2330]">
              <a
                href={`tel:${GYM_CONTACT.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#191d27] border border-[#2c3343] hover:border-[#00d2ff] text-white hover:text-[#00d2ff] font-heading font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Phone size={15} />
                <span>Call {GYM_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="p-7 rounded-2xl bg-[#13161f] border border-[#232836] flex flex-col justify-between hover:border-[#25D366]/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-1">WhatsApp Quick Chat</h3>
              <p className="text-xs sm:text-sm text-[#8c95a6] mb-4">
                Send a quick text message to get the latest monthly pricing, fee card photo, or ask about trainer guidance slots.
              </p>
              <div className="text-lg sm:text-xl font-bold font-heading text-white">
                Chat on WhatsApp
              </div>
              <div className="text-xs text-[#717a8b] mt-1">
                Verified Business Number: {GYM_CONTACT.phoneDisplay}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1e2330]">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20be5b] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)]"
              >
                <MessageSquare size={15} />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Verified Social Media Bar */}
        <div className="max-w-4xl mx-auto mt-6 p-5 rounded-2xl bg-[#12141c] border border-[#212634] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-lg bg-[#E1306C]/15 border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C]">
              <Instagram size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5 justify-center sm:justify-start">
                <span>Instagram Profile</span>
                <span className="text-[10px] text-[#00d2ff] font-normal uppercase tracking-wider bg-[#00d2ff]/10 px-1.5 py-0.2 rounded">
                  Verified
                </span>
              </div>
              <div className="text-xs text-[#828a9b]">
                Follow <strong className="text-white">{GYM_CONTACT.instagramHandle}</strong> for workout clips and gym announcements
              </div>
            </div>
          </div>

          <a
            href={GYM_CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#191d27] border border-[#2b3243] hover:border-[#E1306C] text-xs font-heading font-bold uppercase tracking-wider text-white hover:text-[#E1306C] transition-colors"
          >
            <span>Visit @vk.fitness2024</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
