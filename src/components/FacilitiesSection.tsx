import React, { useState } from 'react';
import { Dumbbell, Activity, Wind, UserCheck, ShieldAlert, Sparkles, Layers, Check } from 'lucide-react';

interface FacilityItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'amenity' | 'coaching';
  isVerified: boolean;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

export const FacilitiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'verified' | 'owner-slots'>('all');

  const facilities: FacilityItem[] = [
    {
      id: 'free-weights',
      title: 'Free Weights & Dumbbells',
      category: 'strength',
      isVerified: true,
      description: 'Extensive dumbbell racks ranging from light weights to heavy bodybuilding iron, Olympic standard barbells, and adjustable incline/flat benches.',
      details: ['Olympic Barbell Sets', 'Multi-Angle Benches', 'Plate-Loaded Stations', 'Squat & Press Area'],
      icon: <Dumbbell className="text-[#ccff00]" size={24} />,
    },
    {
      id: 'cardio-zone',
      title: 'Cardio & Conditioning Units',
      category: 'cardio',
      isVerified: true,
      description: 'Dedicated cardiovascular equipment including heavy-duty motorized treadmills and spin cycle units to boost stamina, fat loss, and heart health.',
      details: ['Commercial Treadmills', 'Indoor Spin Bikes', 'Warm-Up & Stretching Space', 'Aerobic Stamina Training'],
      icon: <Activity className="text-[#ccff00]" size={24} />,
    },
    {
      id: 'ac-floor',
      title: 'Air Conditioned Floor',
      category: 'amenity',
      isVerified: true,
      description: 'Fully AC equipped workout hall engineered to maintain steady airflow and comfortable temperature during hot and humid Uttar Pradesh seasons.',
      details: ['High-Capacity AC Units', 'Proper Ventilation Flow', 'Spacious Floor Layout', 'Clean & Sanitized Floor'],
      icon: <Wind className="text-[#ccff00]" size={24} />,
    },
    {
      id: 'personal-coaching',
      title: 'Personal Training & Form Guidance',
      category: 'coaching',
      isVerified: true,
      description: 'On-floor guidance for proper lifting mechanics, beginner routine onboarding, and injury-prevention coaching to optimize muscle building.',
      details: ['Beginner Form Correction', 'Progressive Overload Guidance', 'Targeted Split Planning', 'Direct Floor Assistance'],
      icon: <UserCheck className="text-[#ccff00]" size={24} />,
    },
    {
      id: 'functional-rig',
      title: 'Functional Cross-Training Rig',
      category: 'strength',
      isVerified: false,
      description: '[Owner Slot] Reserved for verified details regarding functional calisthenics rigs, battle ropes, plyometric boxes, and tire flips.',
      details: ['Awaiting owner verification', 'Custom equipment specs slot', 'Functional accessories slot'],
      icon: <Layers className="text-[#8890a2]" size={24} />,
    },
    {
      id: 'changing-lockers',
      title: 'Locker & Nutrition Counter',
      category: 'amenity',
      isVerified: false,
      description: '[Owner Slot] Reserved for verified details regarding personal day-lockers, changing cabin facilities, and authentic nutrition supplements.',
      details: ['Awaiting owner verification', 'Amenity specification slot', 'Supplement shelf slot'],
      icon: <Sparkles className="text-[#8890a2]" size={24} />,
    },
  ];

  const filtered = facilities.filter((f) => {
    if (activeFilter === 'verified') return f.isVerified;
    if (activeFilter === 'owner-slots') return !f.isVerified;
    return true;
  });

  return (
    <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1c202a] bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#ccff00] uppercase tracking-widest mb-2">
              Training & Facilities
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              Equipped For Peak Performance
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9ba3b4]">
              Core equipment and services at VK FITNESS. In keeping with our strict accuracy standard, all verified facilities are clearly noted below alongside customizable owner slots.
            </p>
          </div>

          {/* Interactive Filter Tabs (Anti-slop compliant segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#13161f] border border-[#232836] rounded-lg self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#ccff00] text-black shadow-sm'
                  : 'text-[#9aa2b2] hover:text-white'
              }`}
            >
              All Items ({facilities.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('verified')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeFilter === 'verified'
                  ? 'bg-[#ccff00] text-black shadow-sm'
                  : 'text-[#9aa2b2] hover:text-white'
              }`}
            >
              Verified (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('owner-slots')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeFilter === 'owner-slots'
                  ? 'bg-[#ccff00] text-black shadow-sm'
                  : 'text-[#9aa2b2] hover:text-white'
              }`}
            >
              Owner Slots (2)
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-xl transition-all duration-200 flex flex-col justify-between ${
                item.isVerified
                  ? 'bg-[#12151c] border border-[#222735] hover:border-[#ccff00]/40 hover:-translate-y-1'
                  : 'bg-[#101217] border border-dashed border-[#29303e] opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      item.isVerified
                        ? 'bg-[#ccff00]/10 border border-[#ccff00]/20'
                        : 'bg-[#1c202a] border border-[#272d3b]'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      item.isVerified
                        ? 'bg-[#ccff00]/15 text-[#ccff00]'
                        : 'bg-[#232836] text-[#8e97a8]'
                    }`}
                  >
                    {item.isVerified ? 'Verified Feature' : 'Owner Slot'}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9aa3b4] leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Sub-features list */}
              <div className="pt-4 border-t border-[#1a1f29] space-y-2">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#b0b8c7]">
                    <Check size={13} className={item.isVerified ? 'text-[#ccff00]' : 'text-[#6c7484]'} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
