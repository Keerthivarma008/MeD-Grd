import React, { useState } from 'react';
import { 
  X, 
  Watch, 
  Bot, 
  Mic, 
  Volume2, 
  Clock, 
  CheckCircle2, 
  Bell, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Radio, 
  Send, 
  AlertCircle,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function CompanionDeviceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('device'); // 'device' or 'ai-workflow'
  const [medTaken, setMedTaken] = useState(false);
  const [currentAiStep, setCurrentAiStep] = useState(0);

  const aiWorkflowSteps = [
    {
      step: '01',
      title: 'Speak',
      actor: 'Patient Speaks',
      desc: 'Patient speaks naturally to the companion device in their native language.',
      sampleText: '"I took my morning Metformin with breakfast, but I felt a bit thirsty today."',
      icon: Mic,
      badgeColor: 'bg-cyan-500/20 text-cyan-300'
    },
    {
      step: '02',
      title: 'Device Listens',
      actor: 'On-Device Edge Audio DSP',
      desc: 'Device wakes on local trigger, captures encrypted audio stream, and filters background noise.',
      sampleText: 'Audio stream digitized (16kHz FLAC), signed with device private key.',
      icon: Volume2,
      badgeColor: 'bg-teal-500/20 text-teal-300'
    },
    {
      step: '03',
      title: 'Cloud AI',
      actor: 'Clinical Knowledge Engine',
      desc: 'Supportive AI processes speech with strict clinical safety guardrails (non-diagnostic).',
      sampleText: 'Identifies medication adherence confirmation + mild symptom flag. Evaluates against Dr. Rao care plan.',
      icon: Bot,
      badgeColor: 'bg-indigo-500/20 text-indigo-300'
    },
    {
      step: '04',
      title: 'Response',
      actor: 'Synthesized Advisory Speech',
      desc: 'Companion device gently responds with clear, supportive instructions.',
      sampleText: '"Great job taking your morning Metformin! Remember to stay hydrated. Would you like me to log your water intake and notify Dr. Rao if thirst persists?"',
      icon: Sparkles,
      badgeColor: 'bg-purple-500/20 text-purple-300'
    },
    {
      step: '05',
      title: 'User Confirms',
      actor: 'Patient Verification',
      desc: 'Patient verbally or with a single button tap confirms the proposed action.',
      sampleText: 'Patient says: "Yes, log my morning dose and alert my caregiver Anita."',
      icon: CheckCircle2,
      badgeColor: 'bg-amber-500/20 text-amber-300'
    },
    {
      step: '06',
      title: 'Supported Update',
      actor: 'Ecosystem Sync',
      desc: 'Med Guardian portal updates medication schedule adherence and pings caregiver.',
      sampleText: 'Caregiver Anita Patel receives WhatsApp/SMS ping: "Aarav took Metformin 500mg at 08:30 AM."',
      icon: Check,
      badgeColor: 'bg-emerald-500/20 text-emerald-300'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              {activeTab === 'device' ? <Watch className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {activeTab === 'device' ? 'Personal Health Device Simulator' : 'AI-Assisted Support Workflow'}
                </span>
                <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
                  IN DEVELOPMENT
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Companion Technology That Supports Human Care
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-3 border-b border-slate-800 flex gap-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab('device')}
            className={`pb-2.5 font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'device'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Watch className="w-3.5 h-3.5" />
            <span>Companion Hardware (08:30 Alert)</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-workflow')}
            className={`pb-2.5 font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'ai-workflow'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Voice Assistant (6-Step Loop)</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {activeTab === 'device' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Simulated Companion Hardware Display Frame */}
              <div className="max-w-md mx-auto p-6 rounded-3xl bg-slate-950 border-2 border-cyan-500/50 shadow-2xl space-y-4">
                
                {/* Device Screen Top Bar */}
                <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Radio className="w-3 h-3 animate-ping" />
                    <span>MED GUARDIAN COMPANION</span>
                  </div>
                  <span className="text-slate-400">SYNCED: 100%</span>
                </div>

                {/* Big Clock */}
                <div className="text-center py-2">
                  <div className="text-5xl font-black font-mono tracking-wider text-white">
                    08:30 <span className="text-xl text-cyan-400">AM</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1 block">
                    Tuesday, 04 November 2026
                  </span>
                </div>

                {/* Active Morning Medication Reminder Box */}
                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                      MORNING ROUTINE ALERT
                    </span>
                    <span className="text-slate-400 text-[10px]">SCHEDULED: 08:30</span>
                  </div>

                  <div className="text-sm font-bold text-white">
                    Metformin HCl — 500 mg
                  </div>
                  <p className="text-xs text-slate-300">
                    Take 1 tablet with or immediately following breakfast. Drink a full glass of water.
                  </p>

                  <div className="pt-2">
                    {medTaken ? (
                      <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Medication Confirmed at 08:30 AM!</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => setMedTaken(true)}
                        className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold text-xs font-mono transition-all shadow-glow-cyan flex items-center justify-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        <span>Tap to Confirm Medication Taken</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Caregiver Notification Confirmation */}
                {medTaken && (
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1 animate-fadeIn">
                    <span className="text-emerald-400 font-bold block flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Caregiver Notification Sent:
                    </span>
                    <p className="text-slate-400">
                      Primary Contact Anita Patel (+91 98200 12345) updated via automated push confirmation.
                    </p>
                  </div>
                )}

                {/* Next Upcoming Alert */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>NEXT EVENT:</span>
                  <span className="text-slate-200">10:00 AM — Telemedicine Follow-up</span>
                </div>
              </div>

              {medTaken && (
                <div className="text-center">
                  <button
                    onClick={() => setMedTaken(false)}
                    className="text-xs font-mono text-slate-500 hover:text-slate-300 underline"
                  >
                    Reset 08:30 AM simulation
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'ai-workflow' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="text-center max-w-lg mx-auto space-y-1">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Technology That Supports Human Care
                </span>
                <h4 className="text-lg font-bold text-white">
                  6-Stage Voice/Chat Clinical Support Workflow
                </h4>
                <p className="text-xs text-slate-400">
                  Strictly non-diagnostic. The AI acts as a helpful administrative companion that keeps clinicians and caregivers in the loop.
                </p>
              </div>

              {/* Step indicator bar */}
              <div className="grid grid-cols-6 gap-1 text-center font-mono text-[10px]">
                {aiWorkflowSteps.map((st, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentAiStep(i)}
                    className={`p-2 rounded-xl border transition-all ${
                      currentAiStep === i
                        ? 'bg-cyan-500 text-navy-950 font-bold border-cyan-400 shadow-glow-cyan'
                        : i < currentAiStep
                        ? 'bg-slate-800 text-cyan-400 border-slate-700'
                        : 'bg-slate-950 text-slate-500 border-slate-900'
                    }`}
                  >
                    <span className="block font-bold">0{i + 1}</span>
                    <span className="truncate block mt-0.5">{st.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Showcase */}
              {(() => {
                const s = aiWorkflowSteps[currentAiStep];
                const Icon = s.icon;
                return (
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                            STAGE {s.step} OF 06: {s.title.toUpperCase()}
                          </span>
                          <h5 className="text-base font-bold text-white">{s.actor}</h5>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold ${s.badgeColor}`}>
                        STEP {s.step} ACTIVE
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-mono">
                      {s.desc}
                    </p>

                    {/* Dialogue / Event Card */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase mb-1">
                        SIMULATED STAGE PAYLOAD:
                      </span>
                      <p className="italic text-cyan-300">
                        {s.sampleText}
                      </p>
                    </div>

                    {/* Next step controller */}
                    <div className="pt-2 flex justify-between items-center text-xs font-mono">
                      <button
                        disabled={currentAiStep === 0}
                        onClick={() => setCurrentAiStep(Math.max(0, currentAiStep - 1))}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white"
                      >
                        ← Back
                      </button>

                      <button
                        onClick={() => setCurrentAiStep((currentAiStep + 1) % aiWorkflowSteps.length)}
                        className="px-4 py-1.5 rounded-lg bg-cyan-500 text-navy-950 font-bold shadow-glow-cyan flex items-center gap-1"
                      >
                        <span>
                          {currentAiStep === aiWorkflowSteps.length - 1 ? 'Restart Workflow' : 'Next Stage →'}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })()}

              {/* Regulatory Guardrail Callout */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[10px] text-slate-400 font-mono flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  Clinical Guardrail: AI is strictly non-diagnostic. Life-threatening symptoms immediately route to 1800 123 4567 or local ambulance dispatch.
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors"
          >
            Close Simulator
          </button>
        </div>

      </div>
    </div>
  );
}
