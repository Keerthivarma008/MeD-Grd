import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  Stethoscope, 
  FileText, 
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function BookDemoSection({ initialTier = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    workEmail: '',
    phoneNumber: '',
    organizationType: 'Hospital',
    areaOfCare: 'Cardiology & Outpatient Triage',
    preferredDate: '',
    additionalRequirements: initialTier ? `Interested in ${initialTier} tier demonstration.` : ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const orgTypes = [
    'Hospital (Tertiary / Multi-Speciality)',
    'Outpatient Clinic / Day Care Center',
    'Diagnostic Laboratory Network',
    'Retail / Community Pharmacy Chain',
    'Corporate Wellness Program',
    'Emergency & Ambulance Service Provider',
    'Individual Medical Practitioner',
    'Government Healthcare Agency / NGO'
  ];

  const careAreas = [
    'Cardiology & Outpatient Triage',
    'Emergency Medicine & Trauma Care',
    'Chronic Care & Endocrinology (Diabetes/Hypertension)',
    'Oncology & Long-term Care Coordination',
    'Geriatric & Home Healthcare Management',
    'Primary Healthcare & Rural Wellness Kiosks',
    'Pathology & Diagnostic Tele-reporting'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.organizationName.trim()) errs.organizationName = 'Organization Name is required.';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid work email address.';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required.';
    } else if (formData.phoneNumber.trim().length < 8) {
      errs.phoneNumber = 'Please enter a valid phone number with area code.';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred demonstration date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConfirmationCode(`MG-DEMO-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      organizationName: '',
      workEmail: '',
      phoneNumber: '',
      organizationType: 'Hospital',
      areaOfCare: 'Cardiology & Outpatient Triage',
      preferredDate: '',
      additionalRequirements: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0A0F1D] via-[#0E172A] to-[#0A0F1D] relative overflow-hidden border-t border-slate-800">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Deployment Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Schedule an Interactive{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Ecosystem Demo
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Experience the Smart Health ID Card, Doctor Portal SaaS, and Emergency Link firsthand. 
            Our clinical solutions engineering team will tailor a 30-minute walkthrough for your facility.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            
            {/* Top Cyan Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-400"></div>

            {isSubmitted ? (
              /* Success Confirmation View */
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400 shadow-glow-emerald">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    Demo Request Successfully Registered
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-lg mx-auto">
                    We have reserved your briefing. A Med Guardian solutions architect will contact you within 
                    4 business hours with your calendar link and test credentials.
                  </p>
                </div>

                {/* Details Summary Card */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 max-w-lg mx-auto text-left font-mono text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-500">REFERENCE NUMBER:</span>
                    <span className="text-cyan-400 font-bold">{confirmationCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">ORGANIZATION:</span>
                    <span className="text-white">{formData.organizationName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">WORK EMAIL:</span>
                    <span className="text-white">{formData.workEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">REQUESTED DATE:</span>
                    <span className="text-teal-400 font-semibold">{formData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">AREA OF CARE:</span>
                    <span className="text-white">{formData.areaOfCare}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="mailto:medguardian2026@gmail.com"
                    className="px-6 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold transition-colors hover:bg-cyan-500/30"
                  >
                    Direct Email Support
                  </a>
                </div>
              </div>
            ) : (
              /* Request a Demo Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Organization Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Organization Name *</span>
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      placeholder="e.g. Apollo Hospitals / Care Health"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.organizationName ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.organizationName && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.organizationName}
                      </span>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Work Email *</span>
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="name@hospital.org"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.workEmail ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.workEmail && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.workEmail}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 98200 12345"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.phoneNumber ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phoneNumber}
                      </span>
                    )}
                  </div>

                  {/* Organization Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>Organization Type</span>
                    </label>
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all cursor-pointer"
                    >
                      {orgTypes.map((t, idx) => (
                        <option key={idx} value={t} className="bg-slate-900 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Area of Care */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                      <span>Area of Care</span>
                    </label>
                    <select
                      name="areaOfCare"
                      value={formData.areaOfCare}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all cursor-pointer"
                    >
                      {careAreas.map((area, idx) => (
                        <option key={idx} value={area} className="bg-slate-900 text-white">
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Demo Date */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Preferred Demo Date *</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.preferredDate ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.preferredDate && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.preferredDate}
                      </span>
                    )}
                  </div>

                </div>

                {/* Additional Requirements */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Additional Requirements</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">Optional</span>
                  </label>
                  <textarea
                    rows={3}
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    placeholder="Tell us about your facility or current HIMS workflow integration requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  ></textarea>
                  
                  {/* Specification Mandatory Helper Text */}
                  <p className="text-[11px] text-slate-400 font-mono italic">
                    * Tell us about your workflow—please do not include sensitive medical information.
                  </p>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-500 hover:from-cyan-400 hover:to-teal-300 text-navy-950 font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-glow-cyan flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>REGISTERING YOUR DEMO REQUEST...</span>
                      </div>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 fill-navy-950/20" />
                        <span>REQUEST A DEMO</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
