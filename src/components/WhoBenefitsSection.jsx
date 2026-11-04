import React from 'react';
import { 
  User, 
  Stethoscope, 
  Building2, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Activity
} from 'lucide-react';

export default function WhoBenefitsSection({ onOpenDemoModal }) {
  const stakeholderGroups = [
    {
      role: 'Patients',
      badge: 'INDIVIDUAL & FAMILY',
      icon: User,
      headline: 'Dignity, Privacy & One Single Tap',
      desc: 'Health identity, organization of available records, configured reminders, and connected care workflows across every clinic they visit.',
      benefits: [
        'No carrying bulky files, scans, or paper prescriptions',
        'Lifesaving Emergency Link active even if unconscious',
        'Absolute ownership over who reads their health history',
        'Automatic dosage reminders and partner pharmacy sync'
      ],
      metric: '1 Single Card',
      metricLabel: 'for a lifetime of continuity',
      color: 'border-cyan-500/40 hover:border-cyan-400 group-hover:text-cyan-400'
    },
    {
      role: 'Doctors',
      badge: 'CLINICAL PRACTITIONERS',
      icon: Stethoscope,
      headline: 'Instant Clinical Context in <1.2s',
      desc: 'Authorized access to available information and supported record-sharing workflows without logging into ten different legacy portals.',
      benefits: [
        'Instant view of critical allergies & active drug interactions',
        'Comprehensive lab summary trends (CBC, CMP, Lipids)',
        'Zero administrative burden asking for missing paper slips',
        'Seamless teleconsultation follow-up scheduling'
      ],
      metric: '< 1.2s Triage',
      metricLabel: 'saves 8-12 mins per consultation',
      color: 'border-teal-500/40 hover:border-teal-400 group-hover:text-teal-400'
    },
    {
      role: 'Hospitals',
      badge: 'TERTIARY & CLINICS',
      icon: Building2,
      headline: 'Faster Turnaround & Verified Consent',
      desc: 'Integration-oriented workflows and improved visibility into supported digital processes with ABDM and HIMS compatibility.',
      benefits: [
        'Reduces outpatient registration queue bottleneck by 70%',
        'Automated proof of patient consent satisfies compliance audits',
        'Tamper-proof digital identity eliminates patient misidentification',
        'Interoperable with existing HIMS via FHIR REST APIs'
      ],
      metric: '70% Faster',
      metricLabel: 'outpatient registration desk flow',
      color: 'border-sky-500/40 hover:border-sky-400 group-hover:text-sky-400'
    },
    {
      role: 'Caregivers',
      badge: 'FAMILY & COORDINATORS',
      icon: HeartHandshake,
      headline: 'Peace of Mind for Loved Ones',
      desc: 'Configured reminders, linked-contact workflows, and support for daily care routines for elderly parents or chronic condition patients.',
      benefits: [
        'Instant notification when elderly parents check into a clinic',
        'Morning & evening medication adherence alerts (e.g. 08:30)',
        'Designated emergency call routing during critical incidents',
        'Companion health device sync for daily activity tracking'
      ],
      metric: '24/7 Guardian',
      metricLabel: 'caregiver alert loop active',
      color: 'border-emerald-500/40 hover:border-emerald-400 group-hover:text-emerald-400'
    }
  ];

  return (
    <section id="who-benefits" className="py-24 bg-[#0A0F1D] relative overflow-hidden border-t border-slate-800">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Human-Centred Value Proposition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Who Benefits From the{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Med Guardian Ecosystem?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A balanced healthcare ecosystem must create tangible relief for every human in the care loop. 
            Here is how each stakeholder experience transforms.
          </p>
        </div>

        {/* 4-Column Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholderGroups.map((stk, idx) => {
            const Icon = stk.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {stk.badge}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {stk.role}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 font-medium block mt-0.5">
                      {stk.headline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {stk.desc}
                  </p>

                  {/* Metric Highlight */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-xl font-black text-white font-mono block">
                      {stk.metric}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {stk.metricLabel}
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {stk.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Callout */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={onOpenDemoModal}
                    className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-navy-950 text-slate-300 hover:font-bold text-xs font-mono transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request {stk.role} Workflow Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
