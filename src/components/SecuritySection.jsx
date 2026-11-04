import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Eye, 
  EyeOff, 
  UserCheck, 
  Cpu, 
  History, 
  CheckCircle2, 
  Radio, 
  AlertCircle,
  FileKey,
  Shield,
  Smartphone,
  Sparkles
} from 'lucide-react';

export default function SecuritySection() {
  // Interactive Consent Simulator State
  const [allowVitals, setAllowVitals] = useState(true);
  const [allowLabs, setAllowLabs] = useState(true);
  const [allowMentalHealth, setAllowMentalHealth] = useState(false);
  const [allowEmergency, setAllowEmergency] = useState(true);
  const [continuousPresence, setContinuousPresence] = useState(true);
  const [simulatedCardPresent, setSimulatedCardPresent] = useState(true);

  const securityFeatures = [
    {
      title: 'Patient Consent Workflows',
      subtitle: 'Designed for Required Authorization',
      icon: UserCheck,
      description: 'Zero data exchange occurs without active cryptographic authorization. Patients grant time-bounded and doctor-specific consent artefacts.',
      techSpec: 'ABDM Electronic Consent Artefact with digital signature verification.',
      color: 'text-cyan-400'
    },
    {
      title: 'Secure Data Transmission',
      subtitle: 'Encrypted & Monitored in Real-Time',
      icon: Lock,
      description: 'All network transactions utilize TLS 1.3 with forward secrecy and ephemeral session keys. Raw patient data is never cached in transit.',
      techSpec: 'AES-GCM-256 with quantum-resistant key exchange algorithms.',
      color: 'text-teal-400'
    },
    {
      title: 'Controlled Record Sharing',
      subtitle: 'Granular Permissions Architecture',
      icon: EyeOff,
      description: 'Patients define exactly which categories are shared. An orthopedic surgeon sees musculoskeletal scans without viewing sensitive therapy notes.',
      techSpec: 'Attribute-Based Access Control (ABAC) and FHIR resource scoping.',
      color: 'text-sky-400'
    },
    {
      title: 'Session Management & Presence',
      subtitle: 'Continuous Presence Detection',
      icon: Cpu,
      description: 'The physical card must maintain continuous RF communication with the reader. The moment the card is picked up, the doctor view auto-locks.',
      techSpec: 'NFC continuous heartbeat probe with 2.5s timeout auto-termination.',
      color: 'text-emerald-400'
    },
    {
      title: 'Access Auditing & Privacy Design',
      subtitle: 'Tamper-Evident Immutable Logs',
      icon: History,
      description: 'Every tap, view, prescription, or order is permanently hashed and logged. Patients receive instant push notifications for every provider access.',
      techSpec: 'Cryptographic SHA-256 audit chaining with zero-knowledge verification.',
      color: 'text-indigo-400'
    }
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-b from-[#0A0F1D] via-[#091222] to-[#0A0F1D] relative overflow-hidden border-t border-slate-800">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Zero-Trust Security & Privacy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Your Data.{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Your Control.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Healthcare records are the most private property you own. 
            Med Guardian Group enforces patient-first cryptography where no facility or third party can access records without your explicit authority.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${feat.color}`} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>

                  <span className="text-xs font-mono text-cyan-400/90 font-medium block -mt-1">
                    {feat.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">STANDARD SPEC:</span>
                  <span className="text-[11px] font-mono text-slate-300 font-medium block mt-0.5">
                    {feat.techSpec}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Compliance & Certification Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/90 border border-cyan-500/30 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Regulatory Alignment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Architected from day one in compliance with national and international health data standards.
              </p>
              <div className="space-y-1.5 pt-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ABDM (Ayushman Bharat Digital Mission)</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>HIPAA Security & Privacy Rule</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ISO 27001 & SOC 2 Readiness</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-cyan-500/20 text-[11px] font-mono text-slate-400">
              Zero-Knowledge Architecture Verified
            </div>
          </div>
        </div>

        {/* Interactive Consent & Continuous Presence Simulator */}
        <div className="mt-16 bg-slate-900/90 border border-cyan-500/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Live Interactive Sandbox
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Patient Consent & Continuous Presence Simulator
              </h3>
            </div>
            <div className="text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
              Active Patient: <strong className="text-cyan-400">Aarav Patel (MG-IND-0482)</strong>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Granular Patient Permission Controls */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                1. Granular Data Category Permissions:
              </span>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <span className="text-sm font-semibold text-white block">Vital Signs & Clinical History</span>
                    <span className="text-xs text-slate-400">Heart rate, Blood pressure, recent diagnoses</span>
                  </div>
                  <button
                    onClick={() => setAllowVitals(!allowVitals)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      allowVitals ? 'bg-cyan-500 text-navy-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {allowVitals ? 'GRANTED' : 'DENIED'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <span className="text-sm font-semibold text-white block">Lab & Diagnostic Panels</span>
                    <span className="text-xs text-slate-400">Complete blood count, lipid profile, metabolic panel</span>
                  </div>
                  <button
                    onClick={() => setAllowLabs(!allowLabs)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      allowLabs ? 'bg-cyan-500 text-navy-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {allowLabs ? 'GRANTED' : 'DENIED'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <span className="text-sm font-semibold text-white block">Sensitive Mental Health Records</span>
                    <span className="text-xs text-slate-400">Psychiatric session notes and therapy logs</span>
                  </div>
                  <button
                    onClick={() => setAllowMentalHealth(!allowMentalHealth)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      allowMentalHealth ? 'bg-amber-500 text-navy-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {allowMentalHealth ? 'GRANTED' : 'RESTRICTED'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <span className="text-sm font-semibold text-white block">Emergency Contact & Blood Group Link</span>
                    <span className="text-xs text-slate-400">Critical allergies and responder contact routing</span>
                  </div>
                  <button
                    onClick={() => setAllowEmergency(!allowEmergency)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      allowEmergency ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {allowEmergency ? 'ACTIVE' : 'DISABLED'}
                  </button>
                </div>
              </div>

              {/* Presence Detector Toggle */}
              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  2. Continuous Presence Detection Test:
                </span>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-white block">Physical Card On Reader</span>
                    <span className="text-xs text-slate-300">
                      Toggle to simulate removing card from hospital desk
                    </span>
                  </div>
                  <button
                    onClick={() => setSimulatedCardPresent(!simulatedCardPresent)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                      simulatedCardPresent
                        ? 'bg-emerald-500 text-navy-950 shadow-glow-emerald'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {simulatedCardPresent ? 'CARD TAP CONNECTED' : 'CARD REMOVED (LOCKED)'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Real-time Terminal Token & Doctor Portal Status */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Dynamic Doctor Session Response:
              </span>

              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">DOCTOR TERMINAL</span>
                  <span className="text-white font-bold">Apollo Clinic • Dr. S. Rao</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">PHYSICAL CARD STATUS:</span>
                  <span className={`font-bold flex items-center gap-1.5 ${
                    simulatedCardPresent ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    <Radio className="w-3 h-3 animate-pulse" />
                    {simulatedCardPresent ? 'Continuous RF Link Verified' : 'SIGNAL LOST — SESSION AUTO-LOCKED'}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vitals & History:</span>
                    <span className={allowVitals && simulatedCardPresent ? 'text-emerald-400' : 'text-red-400'}>
                      {allowVitals && simulatedCardPresent ? 'DECRYPTED & VISIBLE' : 'BLOCKED'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Lab Reports (CBC/Lipid):</span>
                    <span className={allowLabs && simulatedCardPresent ? 'text-emerald-400' : 'text-red-400'}>
                      {allowLabs && simulatedCardPresent ? 'DECRYPTED & VISIBLE' : 'BLOCKED'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mental Health Therapy:</span>
                    <span className={allowMentalHealth && simulatedCardPresent ? 'text-emerald-400' : 'text-slate-500'}>
                      {allowMentalHealth && simulatedCardPresent ? 'ACCESSIBLE' : 'HIDDEN (PATIENT CHOICE)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Emergency Flag:</span>
                    <span className={allowEmergency ? 'text-red-400 font-bold' : 'text-slate-500'}>
                      {allowEmergency ? 'CODE-99 ALLERGIES BROADCAST' : 'OFFLINE'}
                    </span>
                  </div>
                </div>

                {/* Generated Token */}
                <div className="pt-2 border-t border-slate-800 text-[10px] space-y-1">
                  <span className="text-slate-500 block">DYNAMIC EPHEMERAL TOKEN:</span>
                  <p className="text-cyan-400 break-all bg-black/60 p-2 rounded border border-slate-800">
                    {simulatedCardPresent 
                      ? `token_0x9a7b.${allowVitals ? 'v1' : 'v0'}.${allowLabs ? 'l1' : 'l0'}.${allowMentalHealth ? 'm1' : 'm0'}.exp_45m_hash_3e89c2`
                      : 'NULL_TOKEN_REVOKED_INSTANTLY_PRESENCE_LOST'}
                  </p>
                </div>

                <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                  <span>Audit Trail Hashed: SHA-256</span>
                  <span className="text-emerald-400">Tamper Seal: VALID</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
