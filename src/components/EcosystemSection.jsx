import React, { useState } from 'react';
import { 
  CreditCard, 
  Hospital, 
  HeartPulse, 
  Watch, 
  Bot, 
  FlaskConical, 
  Pill, 
  Video, 
  BarChart3, 
  Monitor, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Filter,
  Sparkles,
  Shield,
  Activity,
  Layers
} from 'lucide-react';

export default function EcosystemSection({ 
  onOpenDoctorPortal, 
  onOpenEmergencyModal, 
  onOpenCompanionModal 
}) {
  const [filter, setFilter] = useState('ALL');

  const pillars = [
    {
      id: 'card',
      title: 'Smart Health ID Card',
      status: 'PILOT',
      statusType: 'pilot',
      icon: CreditCard,
      tagline: 'Physical-Digital Connected Identity',
      desc: 'A connected health identity for authorized medical access. Dual-frequency NFC and dynamic cryptographic QR identification that unlocks permitted records in under 1.2 seconds.',
      features: ['NFC & Dynamic QR Tap', 'Offline Emergency Token', 'Anti-cloning EMV chip', '4 Hardware Tiers available'],
      actionText: 'Explore Card Tiers',
      actionHref: '#card-tiers',
      highlightBadge: 'Sample ID: MG-IND-0001'
    },
    {
      id: 'saas',
      title: 'Healthcare SaaS & Hospital Connectivity',
      status: 'IN DEVELOPMENT',
      statusType: 'dev',
      icon: Hospital,
      tagline: 'Seamless Provider Workflows',
      desc: 'Workflow interfaces for participating healthcare facilities. Role-based doctor portals (e.g., "Welcome Dr. Rao", patient "Aarav Patel"), bed management, and continuous consent logging.',
      features: ['Doctor Portal (Dr. Rao view)', 'Patient Aarav Patel record sync', 'Instant Consent Verification', 'FHIR / ABDM compliant'],
      actionText: 'Launch Doctor Portal Preview',
      onAction: onOpenDoctorPortal,
      highlightBadge: 'Live Simulated Portal'
    },
    {
      id: 'emergency',
      title: 'Emergency Link',
      status: 'PILOT',
      statusType: 'pilot',
      icon: HeartPulse,
      tagline: 'When Every Second Matters',
      desc: 'Configured access to eligible linked emergency contacts (e.g., Primary Contact Anita Patel, Care Coordinator Dr. Rao), blood group O+ Rh+, severe penicillin allergy alert, and instant call routing.',
      features: ['One-touch Caregiver Dispatch', 'Instant Allergy & Blood Group view', 'No login needed for first responders', 'Code-99 hospital notification'],
      actionText: 'Test Emergency View',
      onAction: onOpenEmergencyModal,
      highlightBadge: 'Life-Critical Gateway'
    },
    {
      id: 'companion',
      title: 'Personal Health Device',
      status: 'IN DEVELOPMENT',
      statusType: 'dev',
      icon: Watch,
      tagline: 'Daily Routine Companion',
      desc: 'Small companion device supporting daily routines, morning medication reminders (e.g., 08:30 AM Metformin 500mg), upcoming appointment alerts, and caregiver push notifications.',
      features: ['Morning reminder at 08:30 AM', 'Vibrational & audio prompt', 'Caregiver confirmation ping', 'Subtle e-ink bedside display'],
      actionText: 'Simulate Companion Device',
      onAction: onOpenCompanionModal,
      highlightBadge: '08:30 Alert Active'
    },
    {
      id: 'ai-voice',
      title: 'AI-Assisted Support',
      status: 'IN DEVELOPMENT',
      statusType: 'dev',
      icon: Bot,
      tagline: 'Technology That Supports Human Care',
      desc: 'Voice/chat assistant workflow strictly designed as clinical supportive aide: 01 Speak -> 02 Device Listens -> 03 Cloud AI -> 04 Response -> 05 User Confirms -> 06 Supported Update.',
      features: ['6-Step Patient Workflow', 'Supportive clinical guidance', 'Strict non-diagnostic boundaries', 'Multilingual regional speech'],
      actionText: 'View AI Voice Workflow',
      onAction: onOpenCompanionModal,
      highlightBadge: '6-Stage Loop'
    },
    {
      id: 'lab',
      title: 'Laboratory Connectivity',
      status: 'PLANNED INTEGRATION',
      statusType: 'planned',
      icon: FlaskConical,
      tagline: 'Diagnostic Summary Federation',
      desc: 'Clinical summaries connected directly to the patient journey: Complete Blood Count (CBC), Comprehensive Metabolic Panel (CMP), and Lipid Profile trends charted over time.',
      features: ['Complete blood count (CBC)', 'Metabolic & kidney panels', 'Lipid profile tracking', 'Automated critical alert flags'],
      actionText: 'View Diagnostic Blueprint',
      actionHref: '#how-it-works',
      highlightBadge: 'CBC & Lipid Metrics'
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Connectivity',
      status: 'PLANNED INTEGRATION',
      statusType: 'planned',
      icon: Pill,
      tagline: 'Intelligent Medication Schedules',
      desc: 'Medication schedule support, morning/afternoon/evening routine trackers, pharmacy dispensing validation, and automated refill reminders before prescriptions run out.',
      features: ['Morning/Afternoon/Night dosage matrix', 'Refill alert threshold logic', 'Counterfeit drug seal check', 'Partner pharmacy fulfillment'],
      actionText: 'Explore Rx Workflow',
      actionHref: '#how-it-works',
      highlightBadge: 'Dosage Matrix'
    },
    {
      id: 'telemed',
      title: 'Telemedicine Integration',
      status: 'PLANNED INTEGRATION',
      statusType: 'planned',
      icon: Video,
      tagline: 'Virtual Care Beyond Hospital Walls',
      desc: 'Remote consultations, virtual follow-ups, and pre-visit appointment scheduling. Doctors review permitted historical trends during the secure video encounter.',
      features: ['Encrypted WebRTC consultation', 'Real-time card identity verification', 'Follow-up reminder dispatch', 'Post-call clinical summary'],
      actionText: 'Learn About Virtual Care',
      actionHref: '#who-benefits',
      highlightBadge: 'Remote Follow-ups'
    },
    {
      id: 'analytics',
      title: 'Healthcare Analytics',
      status: 'IN DEVELOPMENT',
      statusType: 'dev',
      icon: BarChart3,
      tagline: 'Operational Intelligence & Visibility',
      desc: 'Illustrative operational visibility dashboards, workflow completion charts, clinical turnaround times, and anonymized population health metrics.',
      features: ['Workflow completion rate trackers', 'Average doctor check-in <45s', 'Audit compliance heatmaps', 'Facility capacity projections'],
      actionText: 'Inspect System Metrics',
      actionHref: '#security',
      highlightBadge: 'Operational Dashboards'
    },
    {
      id: 'kiosk',
      title: 'Smart Health Kiosk',
      status: 'IN DEVELOPMENT',
      statusType: 'dev',
      icon: Monitor,
      tagline: 'Facility-Guided Self Access',
      desc: 'Guided digital healthcare access kiosks for participating outpatient clinics, government rural centers, and hospital entrance halls. Tap card to self-triage.',
      features: ['Touchscreen guided check-in', 'Thermal vital signs reader', 'Prescription print & sync', 'Multilingual accessibility'],
      actionText: 'Discover Kiosk Rollout',
      actionHref: '#field-deployment',
      highlightBadge: 'Facility Check-in'
    }
  ];

  const filteredPillars = pillars.filter(p => {
    if (filter === 'ALL') return true;
    if (filter === 'PILOT') return p.statusType === 'pilot';
    if (filter === 'DEV') return p.statusType === 'dev';
    if (filter === 'PLANNED') return p.statusType === 'planned';
    return true;
  });

  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-b from-[#0A0F1D] via-[#0E172A] to-[#0A0F1D] relative overflow-hidden border-t border-slate-800">
      
      {/* Decorative halos */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Complete Architecture • 10 Connected Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Ecosystem &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Product Directory
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A comprehensive, interoperable ecosystem connecting patients, healthcare facilities, 
            laboratories, pharmacies, and emergency services under one cryptographic umbrella.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="p-1 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap justify-center gap-1 shadow-lg text-xs font-mono">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded-xl transition-all ${
                filter === 'ALL'
                  ? 'bg-cyan-500 text-navy-950 font-bold shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Pillars (10)
            </button>

            <button
              onClick={() => setFilter('PILOT')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                filter === 'PILOT'
                  ? 'bg-cyan-500 text-navy-950 font-bold shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Pilot (2)
            </button>

            <button
              onClick={() => setFilter('DEV')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                filter === 'DEV'
                  ? 'bg-amber-500 text-navy-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              In Development (5)
            </button>

            <button
              onClick={() => setFilter('PLANNED')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                filter === 'PLANNED'
                  ? 'bg-slate-200 text-slate-900 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Planned Integration (3)
            </button>
          </div>
        </div>

        {/* 10-Pillar Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon;
            
            // Badge styles
            const getBadgeClass = (type) => {
              switch (type) {
                case 'pilot':
                  return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-glow-cyan';
                case 'dev':
                  return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
                case 'planned':
                default:
                  return 'bg-slate-700/50 text-slate-300 border-slate-600/50';
              }
            };

            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/40"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-colors pointer-events-none"></div>

                <div className="space-y-4 relative z-10">
                  {/* Top Bar: Icon + Status */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${getBadgeClass(pillar.statusType)}`}>
                        {pillar.status}
                      </span>
                      {pillar.highlightBadge && (
                        <span className="text-[9px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
                          {pillar.highlightBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400/90 font-medium block mt-0.5">
                      {pillar.tagline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>

                  {/* Features Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {pillar.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Trigger Button */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 relative z-10">
                  {pillar.onAction ? (
                    <button
                      onClick={pillar.onAction}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-navy-950 text-cyan-300 text-xs font-bold tracking-wide uppercase transition-all duration-200 border border-slate-700 hover:border-cyan-400 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{pillar.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={pillar.actionHref || '#contact'}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide uppercase transition-colors border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2"
                    >
                      <span>{pillar.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
