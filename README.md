# Med Guardian Group — Frontend Website

> **One Health ID. A Lifetime of Connected Care.**
> A modern, responsive healthcare-tech web application built with React, Vite, and Tailwind CSS.

---

## 🏥 Project Overview
**Med Guardian Group** is a connected healthcare technology ecosystem uniting health identity, medical records, and authorized clinical workflows under an immutable, zero-trust cryptographic umbrella.

This repository provides the pure frontend web experience with interactive simulators, 3D card visualizations, and real-time sandbox environments.

---

## 🎨 Design System & Aesthetics
- **Primary Backgrounds:** Deep Midnight Navy (`#0A0F1D`, `#111827`, `#1E293B`) and crisp contrast whites (`#F8FAFC`).
- **Accents & Glows:** Electric Cyan & Medical Teal (`#06B6D4`, `#38BDF8`, `#00F2FE`), Emerald Green (`#10B981`), and Emergency Crimson (`#EF4444`).
- **Typography:** Inter (primary sans-serif) + JetBrains Mono (monospace identifiers, card numbers, telemetry streams).
- **Aesthetic Vibe:** Ultra-secure, futuristic, clinical yet human-centered, and trustworthy.

---

## 📂 Architecture & Sections

1. **Global Navigation Bar (`Navbar.jsx`):**
   - Brand logo with shield emblem.
   - Live system health status badge (ABDM & HIPAA Aligned).
   - Links to all sections, ecosystem dropdown menu, emergency portal shortcut, and glowing `BOOK A DEMO` CTA.

2. **Hero Section (`Hero.jsx`):**
   - Main Headline: *"One Health ID. A Lifetime of Connected Care."*
   - Subheadline: *"Connecting health identity, medical information, and authorized healthcare workflows through one connected healthcare technology ecosystem."*
   - CTAs: `EXPLORE OUR ECOSYSTEM` and `BOOK A DEMO`.
   - **Interactive 3D Smart Health ID Card (`HealthCard3D.jsx`):** Metallic finish, EMV microchip, contactless NFC icon, verified QR code, sample ID `MG-IND-0001`, mouse tilt, and card flip to the back (emergency allergies, blood group O+ Rh+, and contact routing).

3. **About Us & Mission / Vision (`AboutMission.jsx`):**
   - Headline: *"Building a More Connected Healthcare Experience"*
   - Mission & Vision statement cards.
   - Five Operating Principles badges:
     - Security by design
     - Patient consent
     - Responsible technology
     - Interoperability
     - Human-centred care

4. **Card Tiers Showcase (`CardTiersSection.jsx`):**
   - **Basic** (Pilot standard, antimicrobial PVC)
   - **Premium** (Steel core polymer, dual-frequency NFC + EMV)
   - **VIP Titanium** (Heavyweight solid titanium, concierge support)
   - **Emerald Elite** (Ceramic alloy with 3 artistic finishes):
     - **Sleek Dark Blue** (Card number `6073 7220 4775 8767`, Name: `R Keerthi Varma`)
     - **Gold Mandala Style** (Handcrafted golden sacred geometry)
     - **Crystal / Gemstone 3D** (Refractive gemstone finish)

5. **Ecosystem & Product Directory Grid (`EcosystemSection.jsx`):**
   - Filterable tabs: `All Pillars (10)`, `Pilot (2)`, `In Development (5)`, `Planned Integration (3)`.
   - 10 Pillars:
     1. Smart Health ID Card (`PILOT`)
     2. Healthcare SaaS & Hospital Connectivity (`IN DEVELOPMENT`)
     3. Emergency Link (`PILOT`)
     4. Personal Health Device (`IN DEVELOPMENT`)
     5. AI-Assisted Support (`IN DEVELOPMENT`)
     6. Laboratory Connectivity (`PLANNED INTEGRATION`)
     7. Pharmacy Connectivity (`PLANNED INTEGRATION`)
     8. Telemedicine Integration (`PLANNED INTEGRATION`)
     9. Healthcare Analytics (`IN DEVELOPMENT`)
     10. Smart Health Kiosk (`IN DEVELOPMENT`)

6. **How It Works (`HowItWorks.jsx`):**
   - 6-stage patient workflow with interactive stepper, autoplay sequence, and live cryptographic telemetry terminal:
     - Step 01: Patient health identity (Card tap or QR scan)
     - Step 02: Identity & authorization (Mutual ECDSA handshake)
     - Step 03: Required patient consent (ABDM consent artefact)
     - Step 04: Permitted medical information (Decrypted clinical summary)
     - Step 05: Access event logging / session management (Continuous presence detection)
     - Step 06: Connected healthcare workflow completion (FHIR bundle federation)

7. **Emergency Link Section (`EmergencyLinkSection.jsx` & `EmergencyLinkModal.jsx`):**
   - *"When Every Second Matters"*
   - Interactive live ER triage view: Blood group O+ Rh+, critical penicillin anaphylaxis warning, primary contact (Anita Patel), and care coordinator (Dr. Rao).

8. **Field Deployment Section (`FieldDeploymentSection.jsx`):**
   - Headline: *"Organized Field Deployment. Accountable Delivery."*
   - 5-stage accountable delivery protocol: Central Coordination, Zone Team Allocation, Hospital Mapping, Patient Home Delivery, Verification and Reporting.
   - Interactive regional zone tracker (South, West, North, East).

9. **Security, Privacy & Patient Consent (`SecuritySection.jsx`):**
   - Headline: *"Your Data. Your Control."*
   - 5 core security cards + regulatory compliance badges.
   - **Interactive Consent & Presence Sandbox:** Toggle specific data categories and test continuous physical presence auto-lock.

10. **Who Benefits Section (`WhoBenefitsSection.jsx`):**
    - 4-column layout for **Patients**, **Doctors**, **Hospitals**, and **Caregivers**.

11. **Interactive Book a Demo Section & Modal (`BookDemoSection.jsx` & `BookDemoModal.jsx`):**
    - Responsive form with frontend validation: Full Name, Organization Name, Work Email, Phone Number, Organization Type dropdown, Area of Care, Preferred Date, Additional Requirements.
    - Mandatory helper text: *"Tell us about your workflow—please do not include sensitive medical information"*.
    - High-polish success confirmation state with booking reference ID.

12. **Footer (`Footer.jsx`):**
    - Company Name: Med Guardian Group's
    - Email: `medguardian2026@gmail.com`
    - Phone: `1800 123 4567`
    - Website: `www.medguardian.in`
    - Mandatory AI disclaimer: *"AI-assisted information and support features are supportive and do not replace professional medical diagnosis, treatment, or local emergency services."*

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
