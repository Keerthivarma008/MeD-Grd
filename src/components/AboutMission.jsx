import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Cpu, 
  Network, 
  Heart, 
  Target, 
  Compass, 
  CheckCircle2,
  Sparkles,
  Lock,
  Workflow,
  Layers
} from 'lucide-react';

export default function AboutMission() {
  const operatingPrinciples = [
    {
      title: 'Security by Design',
      desc: 'Architected with end-to-end cryptographic isolation, role-based keys, and tamper-evident audit logging from day zero.',
      icon: ShieldCheck,
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10'
    },
    {
      title: 'Patient Consent',
      desc: 'Patients maintain absolute sovereignty over their data. Every provider read request requires active authorized consent.',
      icon: UserCheck,
      color: 'from-teal-400 to-emerald-600',
      badgeColor: 'border-teal-500/40 text-teal-300 bg-teal-500/10'
    },
    {
      title: 'Responsible Technology',
      desc: 'AI support is strictly advisory and supportive—never replacing clinical discretion or licensed physician judgment.',
      icon: Cpu,
      color: 'from-sky-400 to-indigo-600',
      badgeColor: 'border-sky-500/40 text-sky-300 bg-sky-500/10'
    },
    {
      title: 'Interoperability',
      desc: 'Seamless data interchange conforming to HL7 FHIR, ABDM standards, and legacy Hospital Information Management Systems (HIMS).',
      icon: Network,
      color: 'from-indigo-400 to-purple-600',
      badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10'
    },
    {
      title: 'Human-Centred Care',
      desc: 'Designed around real clinician workflows, stressed emergency responders, vulnerable patients, and loving family caregivers.',
      icon: Heart,
      color: 'from-rose-400 to-pink-600',
      badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-500/10'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0A0F1D] via-[#0E172A] to-[#0A0F1D] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>About Med Guardian Group</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Building a More Connected{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Healthcare Experience
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Bridging disconnected silos between emergency responders, primary clinicians, labs, 
            pharmacies, and families through secure, physical-digital identity technology.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          
          {/* Mission Card */}
          <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-navy-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                Our Mission
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Make relevant health information easier to access through authorized and patient-centred digital workflows.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We remove the chaos of paper folders, forgotten prescription slips, and inaccessible emergency history. 
                With a single physical tap or verified QR scan, clinicians receive permitted clinical context in seconds.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-cyan-300/80 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Authorized Clinician Workflows • Instant Emergency Clarity</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-navy-900/90 border border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-colors"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
                Our Vision
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Build a connected healthcare ecosystem that supports continuity of care across participating healthcare providers.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether a patient steps into an urban superspeciality hospital, an outpatient diagnostics lab, 
                a community pharmacy, or a rural telemetry kiosk, their health story travels safely with them.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-teal-300/80 font-mono">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Zero Data Silos • Unified Across Participating Providers</span>
              </div>
            </div>
          </div>

        </div>

        {/* Operating Principles Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Core Architectural Pillars
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Five Guiding Operating Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {operatingPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                    </div>

                    <div className="inline-block">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${principle.badgeColor}`}>
                        ✓ {principle.title}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>Active Protocol</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
