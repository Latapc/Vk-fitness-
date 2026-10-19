import React, { useState } from 'react';
import { ZoomIn, Image as ImageIcon, Camera } from 'lucide-react';
import { GalleryLightbox, GalleryPhoto } from './GalleryLightbox';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const photos: GalleryPhoto[] = [
    {
      id: 'photo-1',
      url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      title: 'Dumbbell & Free Weights Deck',
      category: 'weights',
      slotNumber: 'Placeholder Slot 01',
      caption: 'Replaceable slot for VK FITNESS primary dumbbell rack and free weights section.',
    },
    {
      id: 'photo-2',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      title: 'Barbell & Olympic Power Station',
      category: 'weights',
      slotNumber: 'Placeholder Slot 02',
      caption: 'Replaceable slot for Olympic barbells, squat cages, and heavy deadlift area.',
    },
    {
      id: 'photo-3',
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
      title: 'Cardio & Stamina Zone',
      category: 'cardio',
      slotNumber: 'Placeholder Slot 03',
      caption: 'Replaceable slot for motorized treadmills, spin cycles, and warm-up floor.',
    },
    {
      id: 'photo-4',
      url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
      title: 'Cable Machines & Lat Pulldowns',
      category: 'machines',
      slotNumber: 'Placeholder Slot 04',
      caption: 'Replaceable slot for multi-angle pulley systems and isolation training units.',
    },
    {
      id: 'photo-5',
      url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
      title: 'Conditioning & Floor Work',
      category: 'cardio',
      slotNumber: 'Placeholder Slot 05',
      caption: 'Replaceable slot for bodyweight conditioning, abdominal work, and stretching.',
    },
    {
      id: 'photo-6',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      title: 'Main Workout Hall & AC Atmosphere',
      category: 'machines',
      slotNumber: 'Placeholder Slot 06',
      caption: 'Replaceable slot for full floor panorama showing ambient lighting and AC setup.',
    },
  ];

  const filteredPhotos = photos.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1c202a] bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#00d2ff] uppercase tracking-widest mb-2">
              Inside The Gym
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              Facility Gallery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9ba3b4]">
              High-definition design placeholders representing equipment layout. Real photos captured at the Radha Raman Road premises will be mounted directly into these designated slots.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#13161f] border border-[#232836] rounded-lg self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#00d2ff] text-black shadow-sm'
                  : 'text-[#9aa2b2] hover:text-white'
              }`}
            >
              All Views
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('weights')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'weights'
                  ? 'bg-[#00d2ff] text-black shadow-sm'
                  : 'text-[#9aa2b2] hover:text-white'
              }`}
            >
              Free Weights
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('cardio')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'cardio'
                  ? 'bg-[#00d2ff] text-black shadow-sm'
                  : 'text-[#9aa2b2] hover:text-white'
              }`}
            >
              Cardio Zone
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('machines')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'machines'
                  ? 'bg-[#00d2ff] text-black shadow-sm'
                  : 'text-[#9aa2b2] hover:text-white'
              }`}
            >
              Machines
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(item);
                }
              }}
              role="button"
              tabIndex={0}
              className="group relative rounded-xl overflow-hidden bg-[#12151c] border border-[#222735] aspect-[4/3] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
              aria-label={`View full image: ${item.title}`}
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
              />

              {/* Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Slot Indicator Tag */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-[#00d2ff] uppercase tracking-wider">
                <Camera size={11} />
                <span>{item.slotNumber}</span>
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                <ZoomIn size={15} />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                <h3 className="font-heading font-bold text-base text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a0a8b9] line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Replaceable Slot Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#13161f] border border-[#222735] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#8c94a5]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
            <span>
              <strong>Owner Photography Integration:</strong> Upload official high-resolution photos of VK FITNESS to instantly populate these display slots.
            </span>
          </div>
          <a
            href="#contact"
            className="text-[#00d2ff] hover:underline font-semibold whitespace-nowrap"
          >
            Provide Gym Photos →
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(p) => setSelectedPhoto(p)}
      />
    </section>
  );
};
