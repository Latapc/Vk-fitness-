import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: string;
  slotNumber: string;
  caption: string;
}

interface GalleryLightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (photo: GalleryPhoto) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        onNavigate(photos[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const nextIndex = (currentIndex + 1) % photos.length;
        onNavigate(photos[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photo, photos, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Gym Photo Lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#161922] text-[#c2c9d6] hover:text-white hover:bg-[#232836] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
        aria-label="Close photo preview"
      >
        <X size={22} />
      </button>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={() => {
          const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
          onNavigate(photos[prevIndex]);
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#161922]/80 text-white hover:bg-[#232836] hover:text-[#00d2ff] transition-colors focus:outline-none"
        aria-label="Previous photo"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={() => {
          const nextIndex = (currentIndex + 1) % photos.length;
          onNavigate(photos[nextIndex]);
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#161922]/80 text-white hover:bg-[#232836] hover:text-[#00d2ff] transition-colors focus:outline-none"
        aria-label="Next photo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Container */}
      <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative w-full overflow-hidden rounded-xl bg-[#11131a] border border-[#262c3a] shadow-2xl">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full max-h-[70vh] object-contain mx-auto"
          />

          <div className="p-4 sm:p-5 bg-[#12151d] border-t border-[#222735] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#00d2ff]/15 text-[#00d2ff]">
                  {photo.slotNumber}
                </span>
                <span className="text-xs text-[#7d8697]">Design Placeholder</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white">{photo.title}</h4>
              <p className="text-xs text-[#9aa3b4]">{photo.caption}</p>
            </div>

            <div className="text-right text-xs text-[#717a8c]">
              Photo {currentIndex + 1} of {photos.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
