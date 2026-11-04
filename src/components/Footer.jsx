import React from 'react';
import { 
  Shield, 
  Mail, 
  Phone, 
  Globe, 
  HeartPulse, 
  Lock, 
  AlertTriangle, 
  ArrowUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onOpenDemoModal, onOpenEmergencyModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#070B14] border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      
      {/* Top Disclaimer Banner - MANDATORY FROM SPEC */}
      <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            <strong className="text-amber-400 font-mono">MEDICAL & AI ADVISORY DISCLAIMER: </strong>
            AI-assisted information and support features are supportive and do not replace professional 
            medical diagnosis, treatment, or local emergency services. In case of an acute life-threatening medical emergency, 
            always contact your local emergency response service immediately or visit the nearest emergency facility.
          </p>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-sky-400 flex items-center justify-center shadow-glow-cyan">
                <Shield className="w-5 h-5 text-navy-950 fill-navy-950/20 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-tight text-white font-mono">MED</span>
                  <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">GUARDIAN</span>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1 font-mono">
                  GROUP
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              One Health ID. A Lifetime of Connected Care. Med Guardian Group unites health identity, 
              medical history, and authorized provider workflows through physical-digital secure technologies.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ABDM & Ayushman Bharat Aligned
              </span>
              <span>•</span>
              <span>HIPAA Compliant</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Our Ecosystem</a></li>
              <li><a href="#card-tiers" className="hover:text-cyan-400 transition-colors">Card Tiers Showcase</a></li>
              <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
              <li><a href="#field-deployment" className="hover:text-cyan-400 transition-colors">Field Deployment</a></li>
              <li><a href="#security" className="hover:text-cyan-400 transition-colors">Security & Consent</a></li>
              <li><a href="#who-benefits" className="hover:text-cyan-400 transition-colors">Who Benefits</a></li>
            </ul>
          </div>

          {/* Products & Pillars Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Ecosystem Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between">
                <a href="#card-tiers" className="hover:text-cyan-400 transition-colors">Smart Health ID Card</a>
                <span className="text-[9px] font-mono bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">PILOT</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Healthcare SaaS & Portal</a>
                <span className="text-[9px] font-mono bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">DEV</span>
              </li>
              <li className="flex items-center justify-between">
                <button onClick={onOpenEmergencyModal} className="hover:text-red-400 text-left transition-colors flex items-center gap-1 text-red-400">
                  <HeartPulse className="w-3 h-3" />
                  Emergency Link
                </button>
                <span className="text-[9px] font-mono bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">PILOT</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Personal Health Device</a>
                <span className="text-[9px] font-mono bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">DEV</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">AI-Assisted Support</a>
                <span className="text-[9px] font-mono bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">DEV</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Lab & Pharmacy Network</a>
                <span className="text-[9px] font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">PLANNED</span>
              </li>
            </ul>
          </div>

          {/* Contact Information Column - MANDATORY DETAILS FROM SPEC */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Contact Information
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:medguardian2026@gmail.com" className="hover:text-white transition-colors">
                  medguardian2026@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:18001234567" className="hover:text-white transition-colors font-mono font-bold text-slate-200">
                  1800 123 4567 (Toll Free)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="https://www.medguardian.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  www.medguardian.in
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-glow-cyan transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 fill-navy-950/20" />
                <span>BOOK A DEMO</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-400">
            © 2026 <strong className="text-white">Med Guardian Group's</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <a href="#security" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#security" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#security" className="hover:text-slate-300 transition-colors">Patient Consent Charter</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
