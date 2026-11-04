import React, { useState } from 'react';
import { 
  X, 
  Hospital, 
  UserCheck, 
  ShieldCheck, 
  HeartPulse, 
  FileText, 
  Pill, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FlaskConical, 
  Lock,
  ChevronRight,
  Sparkles,
  Printer
} from 'lucide-react';

export default function DoctorPortalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('summary');
  const [newNote, setNewNote] = useState('');
  const [notesList, setNotesList] = useState([
    'Patient presents for 3-month cardiovascular & metabolic follow-up. Blood pressure controlled at 122/78 mmHg.',
    'Continue Metformin 500mg BD. Advised lipid panel repeat in 90 days.'
  ]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotesList([newNote.trim(), ...notesList]);
    setNewNote('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Doctor Portal Header Bar */}
        <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <Hospital className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Welcome, Dr. S. Rao (MD, Cardiology)</span>
                <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded font-bold">
                  APOLLO CONNECTED TERMINAL #04
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Continuous Presence Handshake: <strong className="text-emerald-400">VERIFIED ACTIVE</strong>
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

        {/* Patient Identity Strip */}
        <div className="bg-gradient-to-r from-slate-900 via-navy-850 to-slate-900 border-b border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">PATIENT:</span>
              <span className="text-white font-bold text-sm">Aarav Patel</span>
              <span className="text-slate-400">(38 M)</span>
            </div>
            <div className="text-slate-400">
              ID: <span className="text-cyan-400 font-bold">MG-IND-0482</span>
            </div>
            <div className="text-slate-400">
              BLOOD: <span className="text-red-400 font-bold">O+ Rh+</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Consent: APPROVED (42m left)
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-slate-800 flex gap-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab('summary')}
            className={`pb-2.5 font-bold transition-colors border-b-2 ${
              activeTab === 'summary'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Clinical Overview
          </button>
          <button
            onClick={() => setActiveTab('labs')}
            className={`pb-2.5 font-bold transition-colors border-b-2 ${
              activeTab === 'labs'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Lab Reports (CBC / CMP / Lipids)
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-2.5 font-bold transition-colors border-b-2 ${
              activeTab === 'notes'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Prescriptions & Notes
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {activeTab === 'summary' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Critical Alert Warning */}
              <div className="p-4 rounded-2xl bg-red-950/30 border border-red-500/40 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 block uppercase">
                    CRITICAL CONTRAINDICATION ALERT:
                  </span>
                  <p className="text-sm text-slate-200 font-semibold mt-0.5">
                    Severe Anaphylactic Penicillin Allergy • Sulfa Compound Sensitivity
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Do not prescribe Beta-lactam antibiotics. Safe alternatives: Macrolides, Fluoroquinolones.
                  </p>
                </div>
              </div>

              {/* Vitals Grid */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                  Current Session Triage Vitals:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">BLOOD PRESSURE</span>
                    <span className="text-lg font-black text-white">122 / 78</span>
                    <span className="text-[10px] text-emerald-400 block">Optimal</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">PULSE RATE</span>
                    <span className="text-lg font-black text-cyan-400">72 bpm</span>
                    <span className="text-[10px] text-slate-400 block">Regular sinus</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">SPO2 (OXYGEN)</span>
                    <span className="text-lg font-black text-teal-300">99%</span>
                    <span className="text-[10px] text-emerald-400 block">Room air</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">FASTING GLUCOSE</span>
                    <span className="text-lg font-black text-amber-400">114 mg/dL</span>
                    <span className="text-[10px] text-amber-400 block">Borderline</span>
                  </div>
                </div>
              </div>

              {/* Active Prescriptions */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                  Federated Active Medications:
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white block">Metformin HCl — 500 mg</span>
                      <span className="text-slate-400">Oral Tablet • Twice daily with meals (08:30 / 20:30)</span>
                    </div>
                    <span className="text-cyan-400 font-mono font-bold bg-cyan-950/80 px-2 py-1 rounded">
                      Adherence: 96%
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white block">Atorvastatin — 10 mg</span>
                      <span className="text-slate-400">Oral Tablet • Once daily at bedtime</span>
                    </div>
                    <span className="text-cyan-400 font-mono font-bold bg-cyan-950/80 px-2 py-1 rounded">
                      Refill Due: 14 Days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'labs' && (
            <div className="space-y-4 animate-fadeIn font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold text-white text-sm">COMPLETE BLOOD COUNT (CBC) — 28 Oct 2026</span>
                  <span className="text-emerald-400">Apollo Diagnostics • Verified</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">Hemoglobin:</span>
                    <span className="text-white font-bold">14.8 g/dL</span>
                    <span className="text-slate-500 text-[9px]"> (Ref: 13.5-17.5)</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">WBC Count:</span>
                    <span className="text-white font-bold">6,800 /mcL</span>
                    <span className="text-slate-500 text-[9px]"> (Ref: 4,500-11,000)</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">Platelets:</span>
                    <span className="text-white font-bold">245,000 /mcL</span>
                    <span className="text-slate-500 text-[9px]"> (Ref: 150K-450K)</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">RBC Count:</span>
                    <span className="text-white font-bold">4.92 M/mcL</span>
                    <span className="text-slate-500 text-[9px]"> (Ref: 4.3-5.9)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold text-white text-sm">LIPID PROFILE PANEL — 28 Oct 2026</span>
                  <span className="text-cyan-400">Fasting Sample</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">Total Cholesterol:</span>
                    <span className="text-amber-400 font-bold">188 mg/dL</span>
                    <span className="text-slate-500 text-[9px]"> (Desirable &lt;200)</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">HDL (Good):</span>
                    <span className="text-emerald-400 font-bold">48 mg/dL</span>
                    <span className="text-slate-500 text-[9px]"> (Normal &gt;40)</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">LDL (Bad):</span>
                    <span className="text-amber-400 font-bold">112 mg/dL</span>
                    <span className="text-slate-500 text-[9px]"> (Borderline high)</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded">
                    <span className="text-slate-500 block">Triglycerides:</span>
                    <span className="text-white font-bold">140 mg/dL</span>
                    <span className="text-slate-500 text-[9px]"> (Normal &lt;150)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4 animate-fadeIn">
              <form onSubmit={handleAddNote} className="space-y-2">
                <label className="text-xs font-mono font-bold text-cyan-400 block">
                  Add Encrypted Consultation Note:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Enter clinical impression or prescription modification..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-cyan-500 text-navy-950 font-bold text-xs font-mono shadow-glow-cyan"
                  >
                    Append Note
                  </button>
                </div>
              </form>

              <div className="space-y-2 text-xs">
                {notesList.map((note, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                      <span>Recorded by Dr. S. Rao</span>
                      <span>Encrypted Signature: Valid</span>
                    </div>
                    <p>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Session Control */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Session Audit Logged: #AUD-2026-881</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                alert('Session safely terminated. Continuous presence token revoked and synced to patient audit trail.');
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30 font-bold transition-colors"
            >
              Sign & Lock Session
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
