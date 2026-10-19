/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { MembershipEnquiry } from './components/MembershipEnquiry';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f4f5f7] flex flex-col font-sans selection:bg-[#ccff00] selection:text-black">
      {/* 1. Independent Concept Demo Notice */}
      <DemoBanner />

      {/* 2. Responsive Athletic Navigation Bar */}
      <Navbar />

      {/* 3. Main Gym Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About VK FITNESS */}
        <AboutSection />

        {/* Section 3: Training & Facilities */}
        <FacilitiesSection />

        {/* Section 4: Photo Gallery (Replaceable Image Slots) */}
        <GallerySection />

        {/* Section 5: Transparent Membership Enquiry */}
        <MembershipEnquiry />

        {/* Section 6: Location & Operating Timings */}
        <LocationSection />

        {/* Section 7: Contact & Direct Channels */}
        <ContactSection />
      </main>

      {/* 8. Footer with Address, Timings, & Legal Disclaimer */}
      <Footer />

      {/* 9. Mobile Sticky Action Bar for Android */}
      <MobileQuickBar />
    </div>
  );
}
