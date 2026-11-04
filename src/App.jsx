import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMission from './components/AboutMission';
import CardTiersSection from './components/CardTiersSection';
import EcosystemSection from './components/EcosystemSection';
import HowItWorks from './components/HowItWorks';
import EmergencyLinkSection from './components/EmergencyLinkSection';
import FieldDeploymentSection from './components/FieldDeploymentSection';
import SecuritySection from './components/SecuritySection';
import WhoBenefitsSection from './components/WhoBenefitsSection';
import BookDemoSection from './components/BookDemoSection';
import Footer from './components/Footer';

// Modals
import DoctorPortalModal from './components/DoctorPortalModal';
import EmergencyLinkModal from './components/EmergencyLinkModal';
import CompanionDeviceModal from './components/CompanionDeviceModal';
import BookDemoModal from './components/BookDemoModal';

import { Sparkles, HeartPulse, Hospital, Watch } from 'lucide-react';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoTier, setSelectedDemoTier] = useState('');
  const [isDoctorPortalOpen, setIsDoctorPortalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isCompanionModalOpen, setIsCompanionModalOpen] = useState(false);

  const handleOpenDemoModal = (tier = '') => {
    setSelectedDemoTier(tier);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-navy-950 font-sans">
      
      {/* 1. Global Navigation Bar */}
      <Navbar 
        onOpenDemoModal={() => handleOpenDemoModal()} 
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          onOpenDemoModal={() => handleOpenDemoModal()} 
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)} 
        />

        {/* 3. About Us & Mission / Vision */}
        <AboutMission />

        {/* 4. Smart Health ID Card Tiers Showcase */}
        <CardTiersSection 
          onSelectTierForDemo={(tier) => handleOpenDemoModal(tier)} 
        />

        {/* 4. Complete 10-Pillar Ecosystem Directory */}
        <EcosystemSection 
          onOpenDoctorPortal={() => setIsDoctorPortalOpen(true)}
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
          onOpenCompanionModal={() => setIsCompanionModalOpen(true)}
        />

        {/* 5. How It Works: Interactive 6-Stage Patient Workflow */}
        <HowItWorks />

        {/* Emergency Link Section */}
        <EmergencyLinkSection 
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)} 
        />

        {/* 6. Field Deployment Section */}
        <FieldDeploymentSection />

        {/* 7. Security, Privacy & Patient Consent Section */}
        <SecuritySection />

        {/* 8. Who Benefits Section */}
        <WhoBenefitsSection 
          onOpenDemoModal={() => handleOpenDemoModal()} 
        />

        {/* 9. Interactive Book a Demo Section */}
        <BookDemoSection 
          initialTier={selectedDemoTier} 
        />
      </main>

      {/* 10. Footer */}
      <Footer 
        onOpenDemoModal={() => handleOpenDemoModal()} 
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)} 
      />

      {/* Floating Interactive Quick Action Toolbar */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 bg-slate-900/90 border border-cyan-500/30 p-2 rounded-2xl shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => setIsEmergencyModalOpen(true)}
          className="p-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-400 border border-red-800/40 transition-colors"
          title="Emergency Link Simulator"
        >
          <HeartPulse className="w-4 h-4 animate-pulse" />
        </button>

        <button
          onClick={() => setIsDoctorPortalOpen(true)}
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors"
          title="Doctor Portal SaaS Simulator"
        >
          <Hospital className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsCompanionModalOpen(true)}
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 transition-colors"
          title="Companion Device & Voice AI"
        >
          <Watch className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleOpenDemoModal()}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-950 font-bold text-xs font-mono uppercase tracking-wider shadow-glow-cyan transition-all flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 fill-navy-950/20" />
          <span>Demo</span>
        </button>
      </div>

      {/* Modals */}
      <DoctorPortalModal 
        isOpen={isDoctorPortalOpen} 
        onClose={() => setIsDoctorPortalOpen(false)} 
      />

      <EmergencyLinkModal 
        isOpen={isEmergencyModalOpen} 
        onClose={() => setIsEmergencyModalOpen(false)} 
      />

      <CompanionDeviceModal 
        isOpen={isCompanionModalOpen} 
        onClose={() => setIsCompanionModalOpen(false)} 
      />

      <BookDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        selectedTier={selectedDemoTier} 
      />

    </div>
  );
}
