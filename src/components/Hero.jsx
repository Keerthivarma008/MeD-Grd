import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Lock, 
  Radio, 
  CheckCircle, 
  Building2, 
  HeartHandshake, 
  Zap,
  PhoneCall
} from 'lucide-react';
import HealthCard3D from './HealthCard3D';

export default function Hero({ onOpenDemoModal, onOpenEmergencyModal }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Connected Healthcare Technology Ecosystem</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-mono text-[11px] bg-slate-800/80 px-2 py-0.5 rounded">v2.4 Pilot Live</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              One Health ID.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                A Lifetime of Connected Care.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Connecting health identity, medical information, and authorized healthcare workflows 
              through one connected healthcare technology ecosystem.
            </p>

            {/* Operating Principles Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Security by Design</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Required Patient Consent</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <Radio className="w-4 h-4 text-sky-400 shrink-0" />
                <span>NFC & QR Tap Ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#ecosystem"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-white font-bold text-sm tracking-wide border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>EXPLORE OUR ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-navy-950 font-extrabold text-sm tracking-wider uppercase transition-all shadow-glow-cyan flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-navy-950/20" />
                <span>BOOK A DEMO</span>
              </button>
            </div>

            {/* Quick emergency access link */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-red-400">
                <HeartHandshake className="w-4 h-4 text-red-400 animate-pulse" />
                Emergency Link Ready:
              </span>
              <button 
                onClick={onOpenEmergencyModal}
                className="underline hover:text-cyan-400 transition-colors text-slate-300"
              >
                Simulate Emergency Response View →
              </button>
            </div>
          </div>

          {/* Right Column: High-End Showcase of Smart Health ID Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center">
              
              {/* Decorative radial halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-teal-500/20 rounded-3xl blur-2xl -z-10"></div>
              
              {/* Card Label */}
              <div className="mb-3 flex items-center justify-between w-full max-w-[420px] px-2 text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  Interactive Physical Health ID
                </span>
                <span className="text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 rounded font-bold">
                  Tap or Hover to Interact
                </span>
              </div>

              {/* 3D Smart Health ID Card */}
              <HealthCard3D
                theme="sleek-blue"
                cardHolder="R Keerthi Varma"
                cardId="MG-IND-0001"
                cardNumber="6073 7220 4775 8767"
                expiry="11/31"
                tier="Emerald Elite"
                interactive={true}
              />

              {/* Quick Card Features List */}
              <div className="mt-6 w-full max-w-[420px] grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                <div className="bg-slate-900/70 border border-slate-800/80 p-2 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">CHIP TECH</span>
                  <span className="text-white font-semibold">EMV & Dual-NFC</span>
                </div>
                <div className="bg-slate-900/70 border border-slate-800/80 p-2 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">SECURITY</span>
                  <span className="text-cyan-300 font-semibold">AES-256 Auth</span>
                </div>
                <div className="bg-slate-900/70 border border-slate-800/80 p-2 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">FALLBACK</span>
                  <span className="text-emerald-300 font-semibold">Dynamic QR</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Ecosystem Metric Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">99.99%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Handshake Reliability
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">High-availability node sync</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">&lt; 1.2s</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Authorized Tap-to-View
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Instant triage & care</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono">10 Pillars</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Connected Architecture
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Card, SaaS, Lab, Kiosk & AI</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">100% Consent</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
              Patient Governed
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Zero unauthorized access</div>
          </div>
        </div>

      </div>
    </section>
  );
}
