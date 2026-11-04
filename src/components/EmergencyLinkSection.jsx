import React, { useState } from 'react';
import { 
  HeartPulse, 
  PhoneCall, 
  ShieldAlert, 
  AlertTriangle, 
  QrCode, 
  UserCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Radio,
  FileHeart,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function EmergencyLinkSection({ onOpenEmergencyModal }) {
  const [activeTab, setActiveTab] = useState('paramedic');

  return (
    <section id="emergency-link" className="py-24 bg-gradient-to-b from-[#0A0F1D] via-[#120c15] to-[#0A0F1D] relative overflow-hidden border-t border-red-950/40">
      
      {/* Background Red / Crimson Emergency Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-wider">
            <HeartPulse className="w-4 h-4 text-red-400 animate-pulse" />
            <span>Pilot Feature • Emergency Link Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            When Every Second Matters:{' '}
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
              Emergency Link
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            In trauma or unconscious triage, responders do not have time for passwords or app downloads. 
            A single tap of the Med Guardian card provides configured, critical emergency data instantly.
          </p>
        </div>

        {/* 3 Core Emergency Capabilities Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-red-900/40 hover:border-red-500/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Eligible Linked Contacts</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Instant one-touch dialing for Primary Emergency Contact (e.g. Spouse/Parent) and designated Hospital Care Coordinator.
            </p>
            <div className="pt-2 text-xs font-mono text-red-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Automated SMS Dispatch Trigger</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-red-900/40 hover:border-red-500/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Critical Allergen Warning</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Prevents fatal medication errors by instantly flagging severe anaphylactic allergies (e.g. Penicillin, NSAIDs, Sulfa, Latex).
            </p>
            <div className="pt-2 text-xs font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pre-intubation Alert Screen</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-red-900/40 hover:border-red-500/50 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <FileHeart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Controlled Field Visibility</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Only life-critical facts are shown without authentication. Deep psychiatric notes and financial data remain cryptographically locked.
            </p>
            <div className="pt-2 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Privacy By Design Isolation</span>
            </div>
          </div>

        </div>

        {/* Live Emergency Link Interactive Showcase Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-950/70 via-slate-900 to-slate-900 border border-red-500/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                Emergency Simulation Ready
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                See What Paramedics & ER Doctors See in 0.8 Seconds
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Test our interactive emergency simulation. Preview the exact life-saving card view rendered when an ambulance paramedic or ER triage nurse scans the Smart Health ID Card.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenEmergencyModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-red-950/60 transition-all flex items-center gap-2"
                >
                  <HeartPulse className="w-4 h-4" />
                  <span>Launch Live Emergency Triage Simulator</span>
                </button>
                
                <span className="text-xs text-slate-400 font-mono">
                  Sample Case: <strong className="text-slate-200">Aarav Patel (MG-IND-0482)</strong>
                </span>
              </div>
            </div>

            {/* Right Mini Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/90 border border-red-500/40 rounded-2xl p-4 sm:p-5 font-mono text-xs shadow-2xl space-y-3">
                <div className="flex items-center justify-between border-b border-red-900/40 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="font-bold text-white uppercase">EMERGENCY PROTOCOL</span>
                  </div>
                  <span className="text-[10px] text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/60 font-bold">
                    PRIORITY 1
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block text-[9px]">BLOOD GROUP</span>
                    <span className="text-red-400 font-bold text-sm">O+ Rh Positive</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block text-[9px]">ORGAN DONOR</span>
                    <span className="text-emerald-400 font-bold text-sm">YES (Registered)</span>
                  </div>
                </div>

                <div className="bg-red-950/30 border border-red-800/40 p-2.5 rounded text-[11px] space-y-1">
                  <span className="text-red-400 font-bold block text-[10px]">CRITICAL ALLERGIES:</span>
                  <p className="text-slate-200 font-semibold">Penicillin (Anaphylaxis risk), Sulfa</p>
                </div>

                <div className="bg-slate-900/80 p-2.5 rounded text-[11px] space-y-1">
                  <span className="text-slate-400 block text-[10px]">PRIMARY EMERGENCY CONTACT:</span>
                  <div className="flex items-center justify-between text-slate-200">
                    <span>Anita Patel (Spouse)</span>
                    <span className="text-cyan-400 font-bold">+91 98200 12345</span>
                  </div>
                </div>

                <div className="text-[9px] text-slate-500 text-center pt-1 border-t border-slate-900">
                  Secure field scan • Timestamp: 11:23:56 • Verified Med Guardian Node
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
