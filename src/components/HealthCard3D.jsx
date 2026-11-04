import React, { useState, useRef } from 'react';
import { 
  Wifi, 
  ShieldCheck, 
  QrCode, 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  Fingerprint, 
  HeartPulse, 
  Zap, 
  Radio
} from 'lucide-react';

export default function HealthCard3D({ 
  theme = 'sleek-blue', 
  cardHolder = 'R Keerthi Varma', 
  cardId = 'MG-IND-0001', 
  cardNumber = '6073 7220 4775 8767',
  expiry = '11/31',
  tier = 'Emerald Elite',
  interactive = true
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [tapSuccess, setTapSuccess] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 14;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const simulateNfcTap = () => {
    setTapSuccess(true);
    setTimeout(() => setTapSuccess(false), 2400);
  };

  // Theme styling definitions
  const getThemeStyles = () => {
    switch (theme) {
      case 'gold-mandala':
        return {
          wrapper: 'bg-gradient-to-br from-[#1c0f06] via-[#3d1e08] to-[#0a0502] border-amber-500/40 text-amber-100 shadow-[0_0_35px_-5px_rgba(245,158,11,0.35)]',
          accent: 'text-amber-300',
          chip: 'emv-chip-gold',
          badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          mandalaOverlay: true,
          hologram: 'from-amber-400 via-yellow-200 to-amber-500'
        };
      case 'emerald-gemstone':
        return {
          wrapper: 'bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#021b15] border-emerald-400/40 text-emerald-100 shadow-[0_0_35px_-5px_rgba(16,185,129,0.35)]',
          accent: 'text-emerald-300',
          chip: 'emv-chip',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          gemstoneOverlay: true,
          hologram: 'from-emerald-300 via-teal-200 to-cyan-400'
        };
      case 'crystal-3d':
        return {
          wrapper: 'bg-gradient-to-br from-[#0c192c] via-[#16335a] to-[#07101e] border-sky-400/40 text-sky-100 shadow-[0_0_35px_-5px_rgba(56,189,248,0.35)]',
          accent: 'text-cyan-300',
          chip: 'emv-chip',
          badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          crystalOverlay: true,
          hologram: 'from-cyan-300 via-sky-200 to-indigo-400'
        };
      case 'vip-titanium':
        return {
          wrapper: 'bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] border-slate-400/40 text-slate-100 shadow-[0_0_35px_-5px_rgba(148,163,184,0.3)]',
          accent: 'text-slate-200',
          chip: 'emv-chip',
          badge: 'bg-slate-500/20 text-slate-200 border-slate-400/40',
          titaniumOverlay: true,
          hologram: 'from-slate-200 via-white to-slate-400'
        };
      case 'basic-minimal':
        return {
          wrapper: 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0b0f19] border-cyan-500/20 text-slate-100 shadow-[0_0_25px_-5px_rgba(6,182,212,0.2)]',
          accent: 'text-cyan-400',
          chip: 'emv-chip',
          badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
          hologram: 'from-cyan-400 to-teal-400'
        };
      case 'sleek-blue':
      default:
        return {
          wrapper: 'bg-gradient-to-br from-[#0a1426] via-[#0d2342] to-[#060c18] border-cyan-500/50 text-cyan-50 shadow-[0_0_40px_-5px_rgba(6,182,212,0.45)]',
          accent: 'text-cyan-300',
          chip: 'emv-chip',
          badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
          sleekGrid: true,
          hologram: 'from-cyan-400 via-sky-300 to-teal-400'
        };
    }
  };

  const themeStyle = getThemeStyles();

  return (
    <div className="flex flex-col items-center">
      {/* 3D Card Container */}
      <div 
        className="perspective-1000 w-full max-w-[420px] aspect-[1.586/1] select-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY + (isFlipped ? 180 : 0)}deg)`,
            transformStyle: 'preserve-3d',
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
          className={`relative w-full h-full rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${themeStyle.wrapper}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* FRONT OF CARD */}
          <div 
            className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Background Texture & Overlays */}
            {themeStyle.mandalaOverlay && (
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center overflow-hidden">
                <svg className="w-[140%] h-[140%] text-amber-400 animate-spin" style={{ animationDuration: '120s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="35" strokeWidth="0.7" />
                  <polygon points="50,10 62,35 90,38 68,57 75,85 50,70 25,85 32,57 10,38 38,35" strokeWidth="0.5" />
                  <polygon points="50,15 60,36 82,38 65,54 70,76 50,65 30,76 35,54 18,38 40,36" strokeWidth="0.5" transform="rotate(45 50 50)" />
                  <circle cx="50" cy="50" r="18" strokeWidth="0.8" />
                  <circle cx="50" cy="50" r="8" strokeWidth="0.5" />
                </svg>
              </div>
            )}

            {themeStyle.gemstoneOverlay && (
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/25 rounded-full blur-2xl"></div>
              </div>
            )}

            {themeStyle.crystalOverlay && (
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-tr from-transparent via-cyan-400/10 to-indigo-500/20"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/20 rounded-full blur-xl"></div>
              </div>
            )}

            {themeStyle.sleekGrid && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl"></div>
              </div>
            )}

            {/* Top row: Brand & NFC icon */}
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black tracking-widest uppercase font-mono">MED GUARDIAN</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block -mt-0.5">
                    Connected Health Ecosystem
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${themeStyle.badge}`}>
                  {tier}
                </span>
                <div className="flex items-center text-slate-300/80 hover:text-white" title="NFC Contactless Enabled">
                  <Radio className="w-4 h-4 rotate-90 text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Middle row: EMV Chip + Holographic Security Stamp */}
            <div className="flex items-center justify-between relative z-10 my-2">
              {/* EMV Microchip */}
              <div className={`w-11 h-8 rounded-md relative flex flex-col justify-around p-1 border border-black/30 ${themeStyle.chip}`}>
                <div className="w-full h-[1px] bg-black/20"></div>
                <div className="w-full h-[1px] bg-black/20"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/20 -translate-x-1/2"></div>
                <div className="w-3 h-2 mx-auto rounded-sm border border-black/20"></div>
              </div>

              {/* Holographic Security Emblem */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-200 to-indigo-400 p-[1px] opacity-80 shadow-inner">
                  <div className="w-full h-full rounded-full bg-navy-950/70 flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Number & ID */}
            <div className="relative z-10">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mb-0.5 flex justify-between">
                <span>HEALTH ID NUMBER</span>
                <span className="text-cyan-400 font-bold">{cardId}</span>
              </div>
              <div className="font-mono text-base sm:text-lg tracking-[0.2em] font-semibold text-white drop-shadow-md">
                {cardNumber}
              </div>
            </div>

            {/* Bottom row: Cardholder Name, Expiry, QR code */}
            <div className="flex items-end justify-between relative z-10 pt-1">
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 block font-mono">
                  AUTHORIZED PATIENT
                </span>
                <span className="text-sm font-bold tracking-wide text-white font-mono uppercase">
                  {cardHolder}
                </span>
                <div className="flex items-center gap-3 mt-0.5 text-[9px] text-slate-400 font-mono">
                  <span>EXP: <strong className="text-slate-200">{expiry}</strong></span>
                  <span>BLOOD: <strong className="text-red-400">O+ Rh+</strong></span>
                </div>
              </div>

              {/* Verified QR code icon */}
              <div className="p-1 rounded-md bg-white/95 border border-cyan-400/50 shadow-md">
                <QrCode className="w-7 h-7 text-slate-900" />
              </div>
            </div>
          </div>

          {/* BACK OF CARD */}
          <div 
            className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between backface-hidden rounded-2xl"
            style={{ 
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Magnetic Stripe */}
            <div className="-mx-5 sm:-mx-6 -mt-2 h-10 bg-gradient-to-r from-slate-900 via-black to-slate-900 border-y border-slate-700/60 shadow-inner"></div>

            {/* Signature & Security Code */}
            <div className="space-y-2 mt-1">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-7 bg-slate-200 rounded px-2 flex items-center justify-between text-slate-800 text-[10px] font-mono italic">
                  <span className="opacity-75">Authorized Signature - Not Valid Unless Signed</span>
                  <span className="font-bold font-mono tracking-widest not-italic">784</span>
                </div>
                <div className="px-2 py-1 rounded bg-slate-800/80 border border-slate-700 text-[10px] font-mono text-cyan-400">
                  CVV: 784
                </div>
              </div>

              {/* Emergency Contact & Clinical Summary */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 text-[10px] font-mono space-y-1">
                <div className="flex items-center justify-between text-red-400 font-bold border-b border-slate-800 pb-1">
                  <span className="flex items-center gap-1">
                    <HeartPulse className="w-3 h-3 text-red-400" />
                    EMERGENCY LINK CONFIGURED
                  </span>
                  <span>CODE 99 READY</span>
                </div>
                <div className="text-slate-300 flex justify-between">
                  <span className="text-slate-400">Primary Contact:</span>
                  <span>Anita Patel (+91 98200 12345)</span>
                </div>
                <div className="text-slate-300 flex justify-between">
                  <span className="text-slate-400">Critical Allergies:</span>
                  <span className="text-amber-400 font-semibold">Penicillin, Sulfa</span>
                </div>
                <div className="text-slate-300 flex justify-between">
                  <span className="text-slate-400">Care Coordinator:</span>
                  <span>Apollo Specialty (Dr. Rao)</span>
                </div>
              </div>
            </div>

            {/* Regulatory Disclaimer & Contact */}
            <div className="text-[7.5px] text-slate-400/90 leading-tight border-t border-slate-800/80 pt-1.5 font-mono">
              <p>
                Property of Med Guardian Network. If found, return to participating hospital or call 1800 123 4567. 
                Unauthorized read attempts are logged and encrypted under ABDM & HIPAA standards.
              </p>
              <div className="flex justify-between items-center mt-1 text-cyan-400">
                <span>www.medguardian.in</span>
                <span>medguardian2026@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Interactive Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors font-mono"
        >
          <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
          <span>Flip to {isFlipped ? 'Front' : 'Back (Emergency)'}</span>
        </button>

        <button
          onClick={simulateNfcTap}
          disabled={tapSuccess}
          className={`px-3 py-1.5 rounded-lg font-mono flex items-center gap-1.5 transition-all ${
            tapSuccess 
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-glow-emerald' 
              : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
          }`}
        >
          {tapSuccess ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              <span>NFC Scanned! (ID: {cardId})</span>
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Simulate NFC / QR Tap</span>
            </>
          )}
        </button>
      </div>

      {tapSuccess && (
        <div className="mt-2 text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-fadeIn">
          <Fingerprint className="w-3.5 h-3.5" />
          <span>Continuous presence handshake verified • 256-bit Token generated</span>
        </div>
      )}
    </div>
  );
}
