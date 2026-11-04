import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Building2, 
  PackageCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Navigation, 
  Users, 
  ArrowRight,
  Sparkles,
  BarChart,
  Radio
} from 'lucide-react';

export default function FieldDeploymentSection() {
  const [activeZone, setActiveZone] = useState('south');

  const deploymentSteps = [
    {
      step: '01',
      title: 'Central Coordination',
      subtitle: 'Inventory Visibility & Demand Planning',
      icon: Layers,
      desc: 'Coordinates incoming physical card requests from hospitals and corporate health programs. Real-time chip serialization and inventory allocation across national hubs.',
      deliverable: 'Cryptographic Serialization & Dispatch Manifest'
    },
    {
      step: '02',
      title: 'Zone Team Allocation',
      subtitle: 'Regional Logistics Routing',
      icon: Users,
      desc: 'Experienced field teams coordinate deployment zones. Each zone maintains secure climate-controlled micro-warehousing for emergency stock and replacement cards.',
      deliverable: 'Designated Field Officer Assignment'
    },
    {
      step: '03',
      title: 'Hospital Mapping',
      subtitle: 'Participating Facility Network Integration',
      icon: Building2,
      desc: 'Participating tertiary hospitals, diagnostics clinics, and local trauma centers mapped to the appropriate zone for rapid in-facility patient onboarding.',
      deliverable: 'Geo-fenced Provider Terminal Handshake'
    },
    {
      step: '04',
      title: 'Patient Home Delivery',
      subtitle: 'White-Glove Accountable Delivery',
      icon: Truck,
      desc: 'Assigned field team coordinates delivery directly to the patient designated home address or hospital discharge suite with tamper-evident security pouch.',
      deliverable: 'Tamper-Evident Security Seal Inspection'
    },
    {
      step: '05',
      title: 'Verification and Reporting',
      subtitle: 'Digital Signature & Handshake Recorded',
      icon: PackageCheck,
      desc: 'Delivery status, government ID photo verification, and the initial NFC activation tap are recorded onto the immutable central ledger. Full audit completed.',
      deliverable: 'Proof of Delivery & Initial NFC Handshake Sealed'
    }
  ];

  const zoneData = {
    south: {
      name: 'Zone South — Bengaluru / Chennai / Hyderabad',
      status: 'High Volume Operations',
      activeTeams: 48,
      mappedHospitals: 142,
      avgDeliveryHours: '18.4 hrs',
      complianceRate: '99.8%'
    },
    west: {
      name: 'Zone West — Mumbai / Pune / Ahmedabad',
      status: 'Active Expansion',
      activeTeams: 36,
      mappedHospitals: 98,
      avgDeliveryHours: '21.2 hrs',
      complianceRate: '99.6%'
    },
    north: {
      name: 'Zone North — Delhi NCR / Chandigarh / Jaipur',
      status: 'High Density Pilot',
      activeTeams: 42,
      mappedHospitals: 116,
      avgDeliveryHours: '19.5 hrs',
      complianceRate: '99.7%'
    },
    east: {
      name: 'Zone East — Kolkata / Bhubaneswar / Guwahati',
      status: 'Phase 2 Pilot',
      activeTeams: 22,
      mappedHospitals: 64,
      avgDeliveryHours: '26.8 hrs',
      complianceRate: '99.4%'
    }
  };

  const currentZone = zoneData[activeZone];

  return (
    <section id="field-deployment" className="py-24 bg-[#0A0F1D] relative overflow-hidden border-t border-slate-800">
      
      {/* Decorative halos */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Truck className="w-4 h-4 text-cyan-400" />
            <span>Field Logistics Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Organized Field Deployment.{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Accountable Delivery.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Physical health identity cards require accountable chain-of-custody. 
            Our structured 5-stage field delivery protocol ensures tamper-proof verification from factory floor to patient hands.
          </p>
        </div>

        {/* 5-Step Horizontal/Vertical Workflow Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {deploymentSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 rounded">
                      STEP {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <span className="text-[11px] font-mono text-teal-400 font-medium block -mt-1">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-mono">
                    CHAIN OF CUSTODY PROOF:
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{step.deliverable}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Regional Deployment Dashboard */}
        <div className="mt-14 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                Live Regional Zone Status Monitor
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Hospital Mapping & Field Team Dispatch
              </h3>
            </div>

            {/* Zone Selector Buttons */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['south', 'west', 'north', 'east'].map((zKey) => (
                <button
                  key={zKey}
                  onClick={() => setActiveZone(zKey)}
                  className={`px-3.5 py-1.5 rounded-lg uppercase font-bold transition-all ${
                    activeZone === zKey
                      ? 'bg-cyan-500 text-navy-950 shadow-glow-cyan'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Zone {zKey}
                </button>
              ))}
            </div>
          </div>

          {/* Current Zone Metrics Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block uppercase">DEPLOYED FIELD TEAMS</span>
              <span className="text-2xl font-black text-white font-mono">{currentZone.activeTeams} Teams</span>
              <span className="text-[10px] text-cyan-400 block mt-0.5">Active in field today</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block uppercase">MAPPED HOSPITALS</span>
              <span className="text-2xl font-black text-cyan-400 font-mono">{currentZone.mappedHospitals} Centers</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Participating in network</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block uppercase">AVG DISPATCH TO DOOR</span>
              <span className="text-2xl font-black text-teal-300 font-mono">{currentZone.avgDeliveryHours}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">From hospital discharge</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-500 block uppercase">VERIFICATION INTEGRITY</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">{currentZone.complianceRate}</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">NFC activation confirmed</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
            <div>
              Active Territory: <strong className="text-slate-200">{currentZone.name}</strong> ({currentZone.status})
            </div>
            <div className="text-cyan-400">
              Chain-of-Custody SHA-256 Ledger: ACTIVE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
