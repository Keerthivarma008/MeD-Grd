import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  KeyRound, 
  UserCheck, 
  FileText, 
  ShieldAlert, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  Lock,
  Radio,
  Fingerprint,
  Check,
  Clock,
  Eye
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      step: '01',
      title: 'Patient Health Identity',
      subtitle: 'Physical Card Tap or QR Scan',
      icon: CreditCard,
      description: 'The journey begins at any participating clinic, hospital triage desk, ambulance, or kiosk. The patient simply taps their Smart Health ID Card or presents their dynamic encrypted QR code.',
      technicalDetails: 'Dual-frequency NFC ISO 14443A antenna or time-based dynamic cryptographic QR payload read by provider terminal.',
      mockData: {
        badge: 'TRANSPONDER READ',
        id: 'MG-IND-0001',
        cardHolder: 'R Keerthi Varma',
        method: 'Dual-NFC (13.56 MHz)',
        status: 'Handshake Signal Detected'
      }
    },
    {
      step: '02',
      title: 'Identity & Authorization',
      subtitle: 'Mutual Cryptographic Handshake',
      icon: KeyRound,
      description: 'The provider terminal challenges the card secure element. A tamper-proof session token is generated without exposing raw keys or sensitive central database credentials.',
      technicalDetails: 'EAL6+ secure element computes ECDSA challenge-response token verified against decentralized registry.',
      mockData: {
        badge: 'AUTH HANDSHAKE',
        token: 'auth_tok_89f022a16d',
        encryption: 'ECDSA P-256 + AES-GCM-256',
        provider: 'Apollo Health - Terminal #4',
        status: 'Provider Credential Verified'
      }
    },
    {
      step: '03',
      title: 'Required Patient Consent',
      subtitle: 'Patient-Governed Permission Request',
      icon: UserCheck,
      description: 'Zero data is unlocked without active consent. The patient receives an instant confirmation prompt specifying exact clinician, requested duration, and granular record categories.',
      technicalDetails: 'ABDM Consent Artefact generated; patient specifies whether psychiatric or genetic notes are excluded.',
      mockData: {
        badge: 'CONSENT PROTOCOL',
        requestor: 'Dr. S. Rao (Cardiology)',
        purpose: 'Outpatient Clinical Consultation',
        validity: '45 Minutes Session',
        status: 'Patient Granted Consent'
      }
    },
    {
      step: '04',
      title: 'Permitted Medical Information',
      subtitle: 'Decrypted Clinical Context',
      icon: FileText,
      description: 'Only permitted clinical information is decrypted onto the doctor portal: critical allergies, active medications, recent lab summaries (CBC, Lipid profile), and emergency contacts.',
      technicalDetails: 'End-to-end ephemeral decryption keys injected into doctor session memory; zero local file storage on terminal.',
      mockData: {
        badge: 'RECORD DECRYPTED',
        bloodGroup: 'O+ Rh Positive',
        allergies: 'Penicillin, Sulfa drugs',
        medications: 'Metformin 500mg, Atorvastatin 10mg',
        status: 'Summary Rendered on Doctor SaaS'
      }
    },
    {
      step: '05',
      title: 'Access Event Logging & Session',
      subtitle: 'Continuous Presence Detection',
      icon: ShieldAlert,
      description: 'Throughout the encounter, the system monitors continuous physical presence. The moment the card is removed or the doctor ends the consultation, the session auto-locks.',
      technicalDetails: 'Tamper-evident access log entry created with SHA-256 hash. Real-time SMS / Push alert dispatched to patient.',
      mockData: {
        badge: 'IMMUTABLE AUDIT LOG',
        auditId: 'LOG-2026-9812-7B',
        presence: 'Continuous NFC Loop: Active',
        alertSent: 'SMS dispatched to +91 98200 12345',
        status: 'Audit Sealed & Timestamped'
      }
    },
    {
      step: '06',
      title: 'Connected Healthcare Workflow Completion',
      subtitle: 'Federated Care Continuity',
      icon: CheckCircle,
      description: 'The doctor updates the clinical notes, prescribes medications, and routes lab orders. New updates are signed and federated across the Med Guardian ecosystem for seamless follow-up.',
      technicalDetails: 'FHIR bundle synced to patient health repository; prescription sent to connected pharmacy network.',
      mockData: {
        badge: 'WORKFLOW COMPLETE',
        diagnosis: 'Routine Cardiovascular Follow-up',
        nextAppointment: '18 Nov 2026 (Telemed Follow-up)',
        rxSent: 'Partner Pharmacy #12 Dispatch',
        status: 'Session Safely Terminated'
      }
    }
  ];

  // Auto-play timer
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="how-it-works" className="py-24 bg-[#0A0F1D] relative overflow-hidden border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Fingerprint className="w-4 h-4 text-cyan-400" />
            <span>Interactive 6-Stage Patient Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            How It Works:{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              From Tap to Care Completion
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Follow the automated lifecycle of an authorized medical encounter. 
            Click any step below or run the automatic walkthrough.
          </p>

          {/* Autoplay Controls */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 border border-slate-700 flex items-center gap-2 transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pause Walkthrough</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>Auto-Play Sequence</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setActiveStep(0);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-400 border border-slate-800 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Step Progress Pills Bar */}
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isSelected = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStep(idx);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-400 shadow-glow-cyan'
                      : isPast
                      ? 'bg-slate-900/60 border-cyan-900/60 text-slate-300'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                      STEP {st.step}
                    </span>
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isSelected 
                        ? 'bg-cyan-500/20 text-cyan-300' 
                        : isPast 
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {isPast ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">
                    {st.title}
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5 font-mono">
                    {st.subtitle}
                  </div>

                  {/* Active highlight indicator */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Detail Interactive Viewport */}
        <div className="mt-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Narrative & Specifications */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono font-black text-lg flex items-center justify-center">
                  {current.step}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    STAGE {current.step} OF 06
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {current.description}
              </p>

              {/* Technical Blueprint callout */}
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-teal-400" />
                  Cryptographic Protocol Under The Hood:
                </span>
                <p className="text-xs text-slate-400 font-mono leading-normal">
                  {current.technicalDetails}
                </p>
              </div>

              {/* Navigation stepper buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  disabled={activeStep === 0}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStep(Math.max(0, activeStep - 1));
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-xs font-mono text-slate-200 transition-colors"
                >
                  ← Previous Step
                </button>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStep(Math.min(steps.length - 1, activeStep + 1));
                  }}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-navy-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shadow-glow-cyan"
                >
                  <span>Next Step ({steps[Math.min(steps.length - 1, activeStep + 1)].title})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Live Simulated Terminal Monitor */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-cyan-500/30 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-400 ml-2">medguardian_gateway.log</span>
                  </div>
                  <span className="text-cyan-400 font-bold flex items-center gap-1">
                    <Radio className="w-3 h-3 animate-ping" />
                    LIVE SESSION
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <span className="text-slate-500">EVENT TYPE</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40">
                      {current.mockData.badge}
                    </span>
                  </div>

                  {Object.entries(current.mockData)
                    .filter(([key]) => key !== 'badge' && key !== 'status')
                    .map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-500 uppercase text-[10px]">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-slate-200 text-right truncate max-w-[200px]">{val}</span>
                      </div>
                    ))}

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-500 text-[10px]">CURRENT STATE</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      {current.mockData.status}
                    </span>
                  </div>
                </div>

                {/* Real-time pulse indicator */}
                <div className="bg-slate-900/60 px-4 py-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Latency: 42ms</span>
                  <span className="text-cyan-400">Zero-Trust Guard: ACTIVE</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
