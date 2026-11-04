import React, { useState } from 'react';
import { 
  X, 
  HeartPulse, 
  PhoneCall, 
  AlertTriangle, 
  User, 
  Hospital, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Radio, 
  PhoneForwarded, 
  Activity,
  FileCheck,
  Shield
} from 'lucide-react';

export default function EmergencyLinkModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [callInitiated, setCallInitiated] = useState(false);
  const [ambulanceDispatched, setAmbulanceDispatched] = useState(false);

  const handleCall = () => {
    setCallInitiated(true);
    setTimeout(() => setCallInitiated(false), 3500);
  };

  const handleDispatch = () => {
    setAmbulanceDispatched(true);
    setTimeout(() => setAmbulanceDispatched(false), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#180a0c] via-slate-950 to-[#0e0608] border-2 border-red-500 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.35)] overflow-hidden flex flex-col">
        
        {/* Top Emergency Red Header Banner */}
        <div className="bg-red-600 px-6 py-3.5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-black/30 animate-pulse">
              <HeartPulse className="w-5 h-5 text-white" />
            </span>
            <div>
              <span className="text-sm font-black uppercase tracking-wider font-mono">
                MED GUARDIAN — EMERGENCY LINK GATEWAY
              </span>
              <span className="text-[10px] block font-mono opacity-90 -mt-0.5">
                NO LOGIN REQUIRED FOR VERIFIED FIRST RESPONDERS
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
          
          {/* Patient Banner */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-red-900/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 font-black text-xl font-mono">
                O+
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white">Aarav Patel</span>
                  <span className="text-xs font-mono text-slate-400">(Age: 38 • Male)</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">
                  Health ID: MG-IND-0482 • ABDM Linked
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono text-slate-400 uppercase">BLOOD TYPE:</span>
              <span className="text-base font-black text-red-400 font-mono">O+ Rh POSITIVE</span>
              <span className="text-[9px] text-emerald-400 font-mono">Organ Donor: Registered</span>
            </div>
          </div>

          {/* CRITICAL ALLERGY ALERT (Life Safety Block) */}
          <div className="p-4 rounded-2xl bg-red-950/40 border-2 border-red-500/80 space-y-2">
            <div className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="w-5 h-5 text-red-500 animate-bounce" />
              <span className="text-xs font-mono font-black uppercase tracking-wider">
                CRITICAL LIFE-SAFETY WARNING — ANAPHYLAXIS RISK:
              </span>
            </div>
            <div className="bg-black/50 p-3 rounded-xl border border-red-900 text-sm font-bold text-white font-mono">
              ALLERGIC TO: <span className="text-red-400 underline">PENICILLIN</span> & <span className="text-red-400 underline">SULFA COMPOUNDS</span>
            </div>
            <p className="text-xs text-slate-300">
              Administering Penicillin class antibiotics may induce immediate severe anaphylactic shock. Use alternative broad-spectrum options only.
            </p>
          </div>

          {/* Eligible Linked Emergency Contacts */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Configured Emergency Linked Contacts:
            </span>

            {/* Primary Contact */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Anita Patel</span>
                    <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                      PRIMARY CONTACT (Spouse)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">+91 98200 12345</span>
                </div>
              </div>

              <button
                onClick={handleCall}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-glow-emerald"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>One-Touch Call</span>
              </button>
            </div>

            {/* Care Coordinator */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                  <Hospital className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Apollo Specialty Hospital</span>
                    <span className="text-[10px] font-mono bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">
                      CARE COORDINATOR (Dr. S. Rao)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">+91 98111 22334 (Hospital Emergency Desk)</span>
                </div>
              </div>

              <button
                onClick={handleDispatch}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs font-bold transition-colors flex items-center gap-1.5 border border-slate-700"
              >
                <Hospital className="w-3.5 h-3.5" />
                <span>Alert Hospital</span>
              </button>
            </div>
          </div>

          {/* Interactive Simulation Status Messages */}
          {callInitiated && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
              <PhoneForwarded className="w-4 h-4 animate-bounce" />
              <span>[SIMULATOR] Outbound call connected to Anita Patel (+91 98200 12345)... Location SMS sent.</span>
            </div>
          )}

          {ambulanceDispatched && (
            <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500 text-cyan-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>[SIMULATOR] Emergency trauma pre-alert dispatched to Apollo Specialty Hospital Emergency Room!</span>
            </div>
          )}

          {/* Security & Access Logging Banner */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              Emergency Access Log: E-LOG-2026-789
            </span>
            <span className="text-slate-500">Auto-Reported to ABDM Registry</span>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="bg-slate-950 border-t border-slate-900 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors"
          >
            Exit Emergency View
          </button>
        </div>

      </div>
    </div>
  );
}
