import React, { useState } from 'react';
import { 
  CreditCard, 
  Sparkles, 
  ShieldCheck, 
  Radio, 
  QrCode, 
  Check, 
  Layers, 
  Zap, 
  RotateCw,
  Award,
  Crown,
  Gem,
  Palette
} from 'lucide-react';
import HealthCard3D from './HealthCard3D';

export default function CardTiersSection({ onSelectTierForDemo }) {
  const [selectedTier, setSelectedTier] = useState('emerald');
  const [emeraldVariant, setEmeraldVariant] = useState('sleek-blue'); // 'sleek-blue', 'gold-mandala', 'crystal-3d'

  const tiersData = {
    basic: {
      name: 'Basic',
      badge: 'PILOT STANDARD',
      status: 'PILOT',
      theme: 'basic-minimal',
      material: 'Recycled Medical-Grade PVC with Anti-Microbial Coating',
      chip: 'Standard NFC Type 4 Tag + Dynamic Laser-Etched QR',
      encryption: 'AES-128 Cloud Tokenized Session',
      emergencyLink: 'Active Emergency Profile (Blood Group + 1 Emergency Contact)',
      features: [
        'Single-tap Emergency Contact Link',
        'ABDM & Ayushman Bharat ID Mapping',
        'Standard HIMS Provider Check-in',
        'Offline QR Backup for Field Ambulances',
        'Free Digital Card Replacement on Loss'
      ],
      idealFor: 'Individuals and community health programs seeking clean, baseline digital health identification.'
    },
    premium: {
      name: 'Premium',
      badge: 'POPULAR PILOT',
      status: 'PILOT',
      theme: 'sleek-blue',
      material: 'Matte Dual-Layer Polymer with Reinforced Edges & Steel Core',
      chip: 'Dual-Frequency NFC + Contact EMV Interface',
      encryption: 'Hardware AES-256 with Dynamic Handshake Token',
      emergencyLink: 'Comprehensive Emergency Link (2 Contacts + Primary Care Coordinator)',
      features: [
        'All Basic Tier Capabilities',
        'Hospital SaaS Instant Doctor Portal Handshake',
        'Continuous Presence Detection in Consultation Room',
        'Lab & Diagnostic Reports Auto-Federation',
        'Priority Phone Support & Rapid Replacement'
      ],
      idealFor: 'Families, regular hospital outpatients, and individuals managing recurring prescriptions.'
    },
    vip: {
      name: 'VIP Titanium',
      badge: 'ENTERPRISE / EXECUTIVE',
      status: 'PILOT',
      theme: 'vip-titanium',
      material: 'Heavyweight Solid Titanium Core (18g) with Laser PVD Finish',
      chip: 'EAL6+ Cryptographic Secure Element + Multi-NFC',
      encryption: 'Zero-Knowledge Multi-Sig Key Derivation',
      emergencyLink: '24/7 Concierge Emergency Dispatch + 3 Linked Guardians',
      features: [
        'All Premium Tier Capabilities',
        'Dedicated Care Coordinator Assignment',
        'Multi-Hospital Telemedicine Priority Queuing',
        'Personal Health Companion Device Auto-Sync',
        'Zero-Latency Global Emergency Medical Translation'
      ],
      idealFor: 'Executive corporate wellness programs, frequent international travelers, and high-care patients.'
    },
    emerald: {
      name: 'Emerald Elite',
      badge: 'FLAGSHIP SHOWCASE',
      status: 'PILOT',
      theme: emeraldVariant,
      material: 'Architectural Ceramic-Alloy with Handcrafted Artistic Finish & 24K Micro-Inlays',
      chip: 'Quantum-Resistant Ready Secure Element + Biometric Matching Sensor Ready',
      encryption: 'Continuous Cryptographic Presence & Zero-Trust Session Logging',
      emergencyLink: 'Code-99 Ultra Fast Emergency Gateway with Real-Time Paramedic Stream',
      features: [
        'All VIP & Premium Features Included',
        'Choice of 3 Exclusive Artistic Finishes (Gold Mandala, Crystal 3D, Sleek Dark Blue)',
        'Full Personal Health Device & Voice AI Integration Bundle',
        'Automated Laboratory & Pharmacy Delivery Prioritization',
        'Lifetime Identity Guarantee & White-Glove Field Deployment'
      ],
      idealFor: 'Patients and discerning healthcare patrons seeking the highest tier of medical continuity and craftsmanship.'
    }
  };

  const currentTierData = tiersData[selectedTier];
  const activeTheme = selectedTier === 'emerald' ? emeraldVariant : currentTierData.theme;

  return (
    <section id="card-tiers" className="py-24 bg-[#0A0F1D] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <CreditCard className="w-4 h-4 text-cyan-400" />
            <span>Hardware Pillar • Pilot Status</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Smart Health ID Card:{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Physical Precision Tiers
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            One tap connects your health history, active emergency contacts, and permitted clinical workflows. 
            Select a tier below to explore interactive hardware specifications.
          </p>
        </div>

        {/* Tier Selector Navigation Bar */}
        <div className="mt-12 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap justify-center gap-1.5 shadow-xl max-w-2xl">
            <button
              onClick={() => setSelectedTier('basic')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedTier === 'basic'
                  ? 'bg-slate-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <CreditCard className="w-4 h-4 text-slate-300" />
              <span>Basic</span>
            </button>

            <button
              onClick={() => setSelectedTier('premium')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedTier === 'premium'
                  ? 'bg-cyan-600 text-white shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Zap className="w-4 h-4 text-cyan-300" />
              <span>Premium</span>
            </button>

            <button
              onClick={() => setSelectedTier('vip')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedTier === 'vip'
                  ? 'bg-slate-200 text-slate-900 shadow-lg font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Crown className="w-4 h-4 text-amber-500" />
              <span>VIP Titanium</span>
            </button>

            <button
              onClick={() => setSelectedTier('emerald')}
              className={`px-6 py-2.5 rounded-xl text-sm font-extrabold transition-all flex items-center gap-2 ${
                selectedTier === 'emerald'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-glow-emerald'
                  : 'text-emerald-400 hover:text-emerald-300 hover:bg-slate-800/50'
              }`}
            >
              <Gem className="w-4 h-4 text-emerald-300" />
              <span>Emerald Elite</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">Special Deck</span>
            </button>
          </div>
        </div>

        {/* Emerald Elite Artistic Variant Switcher */}
        {selectedTier === 'emerald' && (
          <div className="mt-6 flex flex-col items-center animate-fadeIn">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              Select Emerald Elite Artistic Variant:
            </span>
            <div className="flex flex-wrap justify-center gap-2.5 p-1.5 rounded-xl bg-slate-900/60 border border-emerald-500/30">
              <button
                onClick={() => setEmeraldVariant('sleek-blue')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  emeraldVariant === 'sleek-blue'
                    ? 'bg-cyan-500 text-navy-950 font-bold shadow-glow-cyan'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>Sleek Dark Blue</span>
                <span className="text-[10px] opacity-75 font-normal">(6073 7220... / R Keerthi Varma)</span>
              </button>

              <button
                onClick={() => setEmeraldVariant('gold-mandala')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  emeraldVariant === 'gold-mandala'
                    ? 'bg-amber-500 text-navy-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span>Gold Mandala Style</span>
              </button>

              <button
                onClick={() => setEmeraldVariant('crystal-3d')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  emeraldVariant === 'crystal-3d'
                    ? 'bg-sky-500 text-navy-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.5)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-sky-300"></span>
                <span>Crystal / Gemstone 3D</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Showcase Grid: 3D Interactive Card on Left + Specs & Features on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: 3D Card Interactive Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-2 px-2 text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Live 3D Hardware Render
              </span>
              <span className="text-cyan-400 font-bold">
                {selectedTier.toUpperCase()} PREVIEW
              </span>
            </div>

            <HealthCard3D
              theme={activeTheme}
              cardHolder={selectedTier === 'emerald' ? 'R Keerthi Varma' : 'Aarav Patel'}
              cardId={selectedTier === 'emerald' ? 'MG-IND-0001' : 'MG-IND-0482'}
              cardNumber="6073 7220 4775 8767"
              expiry="11/31"
              tier={currentTierData.name}
              interactive={true}
            />

            <p className="mt-4 text-xs text-slate-400 text-center font-mono max-w-sm">
              * Click the card to flip between front credentials and emergency clinical summary.
            </p>
          </div>

          {/* Right: Technical Specifications & Features */}
          <div className="lg:col-span-7 space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
                  {currentTierData.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                  Med Guardian {currentTierData.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  STATUS: {currentTierData.status}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentTierData.idealFor}
            </p>

            {/* Hardware Spec Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl">
                <span className="text-slate-500 block text-[10px]">MATERIAL COMPOSITION</span>
                <span className="text-slate-200 font-semibold">{currentTierData.material}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl">
                <span className="text-slate-500 block text-[10px]">CHIP ARCHITECTURE</span>
                <span className="text-cyan-300 font-semibold">{currentTierData.chip}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl">
                <span className="text-slate-500 block text-[10px]">ENCRYPTION STANDARD</span>
                <span className="text-teal-300 font-semibold">{currentTierData.encryption}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl">
                <span className="text-slate-500 block text-[10px]">EMERGENCY LINK</span>
                <span className="text-red-400 font-semibold">{currentTierData.emergencyLink}</span>
              </div>
            </div>

            {/* Tier Capability Checklist */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Included Ecosystem Features:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentTierData.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                Sample Card ID: <strong className="text-white">MG-IND-0001</strong> • Verified ISO 14443A
              </div>
              <button
                onClick={() => onSelectTierForDemo(currentTierData.name)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-glow-cyan transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 fill-navy-950/20" />
                <span>Request {currentTierData.name} Demo</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
