import React, { useState } from 'react';
import { MessageSquare, Phone, CheckCircle2, AlertCircle, Copy, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { GYM_CONTACT, validateEnquiry, buildWhatsAppEnquiry, EnquiryInput } from '../utils/gym';

export const MembershipEnquiry: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryInput>({
    name: '',
    phone: '',
    goal: 'Strength & Muscle Building',
    batchSlot: 'Morning (6:00 AM – 9:00 AM)',
    customMessage: '',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateEnquiry({ name: formData.name, phone: formData.phone });
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const { messageText, whatsappUrl } = buildWhatsAppEnquiry(formData);
    setLastGeneratedUrl(whatsappUrl);
    setSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    const { messageText } = buildWhatsAppEnquiry(formData);
    navigator.clipboard.writeText(messageText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="enquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1c202a] bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Transparency & Value */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-bold text-[#ccff00] uppercase tracking-widest mb-2">
                Membership & Access
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
                Start Your Journey At VK FITNESS
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#9ba3b4] leading-relaxed">
                We believe in full transparency. Membership plans at VK FITNESS are tailored to your commitment and schedule, quoted directly by gym management.
              </p>
            </div>

            {/* Zero Fabricated Pricing Policy Box */}
            <div className="p-6 rounded-xl bg-[#13161f] border border-[#262c3a] space-y-3">
              <div className="flex items-center gap-2 text-white font-heading font-bold text-base">
                <ShieldCheck size={20} className="text-[#ccff00]" />
                <span>Honest Pricing Policy</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9ba3b4] leading-relaxed">
                Rather than displaying fabricated or obsolete rates, all monthly, quarterly, semi-annual, and personal training fees are confirmed directly with VK FITNESS management to guarantee you receive the latest offers and student discounts.
              </p>
              <div className="pt-2 border-t border-[#1e2330] grid grid-cols-2 gap-3 text-xs text-[#cad1de]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ccff00]">✔</span>
                  <span>Monthly Passes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ccff00]">✔</span>
                  <span>Quarterly Packages</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ccff00]">✔</span>
                  <span>Annual Membership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ccff00]">✔</span>
                  <span>PT Guidance Slots</span>
                </div>
              </div>
            </div>

            {/* Direct Quick Assistance */}
            <div className="p-5 rounded-xl bg-[#12151d] border border-[#222735] flex items-center justify-between">
              <div>
                <div className="text-xs text-[#7d8697] uppercase font-bold tracking-wider">Prefer to call?</div>
                <div className="text-base font-bold text-white mt-0.5">{GYM_CONTACT.phoneDisplay}</div>
              </div>
              <a
                href={`tel:${GYM_CONTACT.phoneRaw}`}
                className="px-4 py-2 rounded-lg bg-[#1a1e28] border border-[#2b3242] text-[#ccff00] hover:border-[#ccff00] text-xs font-bold uppercase tracking-wider font-heading flex items-center gap-1.5 transition-colors"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13161f] border border-[#252b38] shadow-2xl relative">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                Direct Membership Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#8f98a9] mb-6">
                Fill in your fitness goals to generate a customized WhatsApp enquiry directly to VK FITNESS management.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 text-xs sm:text-sm text-[#ccff00] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle2 size={18} className="text-[#ccff00]" />
                    <span>Enquiry Generated Successfully!</span>
                  </div>
                  <p className="text-[#c6cfdd]">
                    WhatsApp has opened in a new tab with your pre-filled inquiry. If it didn't open automatically, use the buttons below:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={lastGeneratedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#25D366] text-white font-bold text-xs hover:bg-[#20be5b] transition-colors"
                    >
                      <MessageSquare size={13} />
                      Open WhatsApp Again
                    </a>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1a1e29] border border-[#2e3546] text-white text-xs hover:border-[#ccff00] transition-colors"
                    >
                      {copied ? <Check size={13} className="text-[#ccff00]" /> : <Copy size={13} />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Query Text'}</span>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-[#98a1b2] mb-1.5">
                    Full Name <span className="text-[#ccff00]">*</span>
                  </label>
                  <input
                    type="text"
                    id="enquiry-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0e1015] border text-white text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#242936] focus:border-[#ccff00]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#98a1b2] mb-1.5">
                    Phone / WhatsApp Number <span className="text-[#ccff00]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210 or +91 70171 06874"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0e1015] border text-white text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#242936] focus:border-[#ccff00]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Grid for Goal and Batch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enquiry-goal" className="block text-xs font-semibold uppercase tracking-wider text-[#98a1b2] mb-1.5">
                      Primary Fitness Goal
                    </label>
                    <select
                      id="enquiry-goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0e1015] border border-[#242936] text-white text-sm focus:outline-none focus:border-[#ccff00] transition-colors cursor-pointer"
                    >
                      <option value="Strength & Muscle Building">Strength & Muscle Building</option>
                      <option value="Weight Loss & Conditioning">Weight Loss & Conditioning</option>
                      <option value="Personal Coaching & Transformation">Personal Coaching</option>
                      <option value="General Health & Active Routine">General Fitness Routine</option>
                      <option value="Student Package Enquiry">Student Membership Pass</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="enquiry-slot" className="block text-xs font-semibold uppercase tracking-wider text-[#98a1b2] mb-1.5">
                      Preferred Batch Timing
                    </label>
                    <select
                      id="enquiry-slot"
                      name="batchSlot"
                      value={formData.batchSlot}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0e1015] border border-[#242936] text-white text-sm focus:outline-none focus:border-[#ccff00] transition-colors cursor-pointer"
                    >
                      <option value="Early Morning (5:00 AM – 7:30 AM)">Early Morning (5:00 AM – 7:30 AM)</option>
                      <option value="Morning (7:30 AM – 10:00 AM)">Morning (7:30 AM – 10:00 AM)</option>
                      <option value="Afternoon / Flexible">Afternoon / Flexible Hours</option>
                      <option value="Evening (4:30 PM – 7:30 PM)">Evening (4:30 PM – 7:30 PM)</option>
                      <option value="Night (7:30 PM – 10:00 PM)">Night (7:30 PM – 10:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="enquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-[#98a1b2] mb-1.5">
                    Any Questions for the Trainer? (Optional)
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="customMessage"
                    rows={3}
                    value={formData.customMessage}
                    onChange={handleChange}
                    placeholder="e.g. Can I take a trial workout before joining? Or do you have student discounts?"
                    className="w-full px-4 py-3 rounded-lg bg-[#0e1015] border border-[#242936] text-white text-sm focus:outline-none focus:border-[#ccff00] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-[#ccff00] text-black font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#b8e600] active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(204,255,0,0.25)]"
                  >
                    <MessageSquare size={18} />
                    <span>Send Enquiry to VK FITNESS (WhatsApp)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
