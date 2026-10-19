import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { GYM_CONTACT } from '../utils/gym';

export const MobileQuickBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${GYM_CONTACT.phoneRaw}?text=${encodeURIComponent(
    'Hello VK FITNESS! I would like to enquire about membership plans and batch timings.'
  )}`;

  return (
    <aside
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0a0b0e]/95 backdrop-blur-lg border-t border-[#232836] p-3 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]"
      aria-label="Mobile quick actions"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${GYM_CONTACT.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#141720] border border-[#262c3b] active:bg-[#1a1f2b] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors min-h-[46px]"
        >
          <Phone size={15} className="text-[#ccff00]" />
          <span>Call Gym</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5b] active:scale-[0.98] text-white font-heading font-extrabold text-xs uppercase tracking-wider transition-all min-h-[46px] shadow-[0_0_15px_rgba(37,211,102,0.3)]"
        >
          <MessageSquare size={15} />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
