import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Activity, 
  Lock, 
  CreditCard, 
  HeartPulse, 
  PhoneCall, 
  Truck,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenDemoModal, onOpenEmergencyModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemDropdown, setEcosystemDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { 
      name: 'Our Ecosystem', 
      href: '#ecosystem', 
      hasDropdown: true,
      dropdownItems: [
        { title: 'Smart Health ID Card', desc: 'NFC & QR connected identity', href: '#card-tiers', badge: 'PILOT' },
        { title: 'Healthcare SaaS & Hospital', desc: 'Clinical workflow & doctor portal', href: '#ecosystem', badge: 'DEV' },
        { title: 'Emergency Link', desc: 'Instant authorized contact retrieval', href: '#emergency-link', badge: 'PILOT' },
        { title: 'Personal Health Device', desc: 'Daily routine & medication alerts', href: '#ecosystem', badge: 'DEV' },
        { title: 'AI-Assisted Support', desc: 'Voice/chat clinical helper workflow', href: '#ecosystem', badge: 'DEV' },
        { title: 'Lab & Pharmacy Network', desc: 'Integrated diagnostics & refills', href: '#ecosystem', badge: 'PLANNED' }
      ]
    },
    { name: 'Products', href: '#card-tiers' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Emergency Link', href: '#emergency-link', isEmergency: true },
    { name: 'Field Deployment', href: '#field-deployment' },
    { name: 'Security', href: '#security' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 border-b border-cyan-500/10 py-1.5 px-4 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium">Med Guardian Network Status:</span>
            <span className="text-cyan-400">Nodes Active • ABDM & HIPAA Aligned</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span>24/7 Helpline: <strong className="text-slate-200">1800 123 4567</strong></span>
            <span>•</span>
            <button 
              onClick={onOpenEmergencyModal}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <HeartPulse className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              Emergency Response Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A0F1D]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-black/40 py-3' 
            : 'bg-[#0A0F1D]/60 backdrop-blur-sm border-b border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-sky-400 flex items-center justify-center shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
                  <Shield className="w-5 h-5 text-navy-950 fill-navy-950/20 stroke-[2.5]" />
                </div>
                <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-sm -z-10 group-hover:bg-cyan-500/40 transition-colors"></div>
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
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.name} 
                      className="relative"
                      onMouseEnter={() => setEcosystemDropdown(true)}
                      onMouseLeave={() => setEcosystemDropdown(false)}
                    >
                      <a
                        href={link.href}
                        className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 flex items-center gap-1 transition-colors rounded-lg hover:bg-slate-800/40"
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </a>

                      {/* Dropdown Menu */}
                      {ecosystemDropdown && (
                        <div className="absolute top-full left-0 w-80 pt-2 z-50">
                          <div className="bg-[#0D1527] border border-cyan-500/30 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                            <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                Ecosystem Architecture
                              </span>
                            </div>
                            <div className="space-y-1">
                              {link.dropdownItems.map((item, idx) => (
                                <a
                                  key={idx}
                                  href={item.href}
                                  onClick={() => setEcosystemDropdown(false)}
                                  className="p-2.5 rounded-lg hover:bg-slate-800/60 block transition-colors group"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                                      {item.title}
                                    </span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                                      item.badge === 'PILOT' 
                                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                                        : item.badge === 'DEV'
                                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                        : 'bg-slate-700 text-slate-300'
                                    }`}>
                                      {item.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{item.desc}</p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-slate-800/40 ${
                      link.isEmergency
                        ? 'text-red-400 hover:text-red-300 flex items-center gap-1.5 font-semibold'
                        : 'text-slate-300 hover:text-cyan-400'
                    }`}
                  >
                    {link.isEmergency && <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-500 rounded-xl group-hover:opacity-100 transition-opacity animate-pulse-subtle"></span>
                <span className="relative block px-5 py-2.5 rounded-[11px] bg-[#0A0F1D] text-sm font-bold text-cyan-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-teal-500 group-hover:text-navy-950 transition-all duration-300 shadow-glow-cyan flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>BOOK A DEMO</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={onOpenDemoModal}
                className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-500 text-navy-950 shadow-glow-cyan"
              >
                DEMO
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0F1D] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  link.isEmergency 
                    ? 'text-red-400 bg-red-950/20 border border-red-800/40' 
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergencyModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 font-semibold flex items-center justify-center gap-2"
              >
                <HeartPulse className="w-4 h-4 text-red-400" />
                Emergency Access Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-navy-950 font-bold shadow-glow-cyan flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                BOOK A DEMO
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
