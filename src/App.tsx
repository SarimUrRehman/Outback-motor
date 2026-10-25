/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  Menu,
  X,
  Calendar,
  Wrench,
  Cpu,
  ShieldCheck,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// =============================================================================
// BUSINESS CONFIGURATION
// Outback Motor Works - Winnellie, Darwin NT
// =============================================================================
export const BUSINESS_CONFIG = {
  name: 'Outback Motor Works',
  tagline: 'Keeping the Territory Moving.',
  phoneDisplay: '+61 482 069 219',
  phoneTel: 'tel:+61482069219',
  rawPhone: '0482 069 219',
  address: '4/5 Roni Court, Winnellie NT 0820, Australia',
  addressShort: '4/5 Roni Court, Winnellie NT 0820',
  serviceArea: 'Darwin and the Top End, NT',
  rating: '5.0',
  reviewCount: 18,
  googleMapsUrl: 'https://maps.google.com/?q=4%2F5+Roni+Court%2C+Winnellie+NT+0820%2C+Australia',
};

// =============================================================================
// HERO IMAGE CONFIGURATION
// Replace this URL easily with a high-resolution photo of your workshop or 4WD.
// =============================================================================
export const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80';

// =============================================================================
// WORKSHOP OPENING HOURS CONFIGURATION
// Note: Operating hours are not set. Do NOT invent hours.
// Show "Call to book your vehicle in" and edit the placeholder below when confirmed.
// =============================================================================
export const WORKSHOP_HOURS = {
  // Set to true once trading hours are officially provided:
  hasSpecificHours: false,
  callToBookNotice: 'Call to book your vehicle in',
  // EDITABLE PLACEHOLDER: Update these times when available
  placeholderSchedule: [
    { label: 'Monday – Friday', hours: 'Call to confirm / book' },
    { label: 'Saturday', hours: 'By appointment' },
    { label: 'Sunday & Public Holidays', hours: 'Closed' },
  ],
};

// =============================================================================
// SERVICES CONFIGURATION
// =============================================================================
export const SERVICES_LIST = [
  {
    id: 'logbook',
    title: 'Logbook Servicing',
    description: "Scheduled servicing to keep your vehicle's logbook up to date",
    icon: 'logbook',
  },
  {
    id: 'repairs',
    title: 'Repairs',
    description: 'Reliable mechanical repairs for everyday cars and work vehicles',
    icon: 'wrench',
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    description: 'Fault finding and computer diagnostics to find the problem fast',
    icon: 'diagnostics',
  },
  {
    id: '4wd',
    title: '4WD Servicing & Repairs',
    description: 'Servicing and repairs for vehicles built for the Top End',
    icon: '4wd',
  },
];

// Why choose points (strictly matching requirements, no exaggerated claims)
export const WHY_CHOOSE_ITEMS = [
  {
    title: '5.0 Star Rated',
    description: 'Consistently rated 5.0 stars by 18 satisfied local vehicle owners.',
  },
  {
    title: 'Honest & Straightforward Advice',
    description: 'Upfront mechanical advice without confusing jargon or hidden extras.',
  },
  {
    title: '4WD Know-How',
    description: 'Specialised understanding of 4x4 setups and rough Top End demands.',
  },
  {
    title: 'Local Winnellie Workshop',
    description: 'Conveniently situated in Roni Court, servicing Darwin and surrounding areas.',
  },
];

// Gear Badge SVG for Brand
const BrandLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; showTagline?: boolean }> = ({
  size = 'md',
  showTagline = false,
}) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';

  return (
    <div className="flex items-center gap-3">
      {/* Recreated Logo Badge: Dark charcoal gear with sunset orange sky & sun/4WD motif */}
      <div className={`relative flex-shrink-0 ${iconSize} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm select-none"
          aria-hidden="true"
        >
          {/* Gear outer teeth */}
          <path
            d="M50 8 
               L55 14 L63 12 L66 19 L74 20 L74 28 L82 32 L79 40 L86 46 L81 53 L86 60 L79 66 L82 74 L74 77 L74 85 L66 86 L63 93 L55 91 L50 97 
               L45 91 L37 93 L34 86 L26 85 L26 77 L18 74 L21 66 L14 60 L19 53 L14 46 L21 40 L18 32 L26 28 L26 20 L34 19 L37 12 L45 14 Z"
            fill="#1A1A1A"
            stroke="#E8661A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Inner circle with warm outback sunset gradient */}
          <defs>
            <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F2B134" />
              <stop offset="45%" stopColor="#E8661A" />
              <stop offset="90%" stopColor="#A8421E" />
              <stop offset="100%" stopColor="#1A1A1A" />
            </linearGradient>
            <linearGradient id="redDirt" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A8421E" />
              <stop offset="100%" stopColor="#6C280E" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="32" fill="url(#sunsetGrad)" />

          {/* Golden Sun Arc */}
          <circle cx="50" cy="40" r="10" fill="#FFE599" opacity="0.9" />

          {/* Acacia tree / Top End terrain silhouette */}
          <path
            d="M24 64 Q36 58 50 63 T76 64 L76 75 Q50 78 24 75 Z"
            fill="url(#redDirt)"
          />
          <path
            d="M27 63 C30 52 35 48 40 45 C42 42 49 42 51 46 C53 49 57 51 60 52 C63 53 66 56 68 62 Z"
            fill="#1A1A1A"
            opacity="0.85"
          />

          {/* Sturdy 4WD front outline silhouette */}
          <path
            d="M42 66 L44 58 L56 58 L58 66 Z 
               M41 66 L59 66 L59 72 L41 72 Z 
               M43 68 A1.5 1.5 0 1 0 43 71 A1.5 1.5 0 1 0 43 68 
               M57 68 A1.5 1.5 0 1 0 57 71 A1.5 1.5 0 1 0 57 68"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className="text-white font-extrabold tracking-wider leading-none text-lg md:text-xl font-heading uppercase"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          OUTBACK
        </span>
        <span
          className="text-[#E8661A] font-bold tracking-wide text-xs md:text-sm leading-none mt-0.5 flex items-center gap-1 font-heading uppercase"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          MOTOR WORKS
          <Wrench className="w-2.5 h-2.5 text-[#E8661A] inline-block" />
        </span>
        {showTagline && (
          <span className="text-stone-300 text-[10px] tracking-widest uppercase mt-1">
            {BUSINESS_CONFIG.tagline}
          </span>
        )}
      </div>
    </div>
  );
};

// Outback Ridge Line SVG Divider
const OutbackRidgeDivider: React.FC<{ className?: string; fillColour?: string }> = ({
  className = '',
  fillColour = '#F7F2EA',
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 84"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-14 block"
        aria-hidden="true"
      >
        {/* Subtle background red-earth ridge */}
        <polygon
          points="0,48 180,32 360,54 580,24 760,42 980,18 1160,38 1320,20 1440,36 1440,84 0,84"
          fill="#A8421E"
          opacity="0.3"
        />
        {/* Foreground main ridge */}
        <polygon
          points="0,58 140,46 320,64 510,38 690,52 890,30 1080,48 1260,34 1440,50 1440,84 0,84"
          fill={fillColour}
        />
      </svg>
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: 'Logbook Servicing',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a contact phone number';
    } else if (!/^[0-9+\s()-]{8,20}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number (e.g. 0482 069 219)';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.vehicle.trim()) {
      errors.vehicle = 'Please enter your vehicle make and model (e.g. Toyota Hilux 2018)';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 400);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicle: '',
      service: 'Logbook Servicing',
      message: '',
    });
    setFormSubmitted(false);
    setFormErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F1F1F] font-sans">
      {/* =====================================================================
          SECTION 1: STICKY HEADER (Dark Charcoal #1A1A1A)
          ===================================================================== */}
      <header className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-[#2A2A2A] shadow-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Wordmark on Left */}
          <a
            href="#"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8661A] rounded p-1"
            aria-label="Outback Motor Works Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Nav Links & Call Now Button */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              <a
                href="#services"
                className="text-stone-300 hover:text-white font-medium text-sm tracking-wide transition-colors focus:outline-none focus:text-[#E8661A]"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-stone-300 hover:text-white font-medium text-sm tracking-wide transition-colors focus:outline-none focus:text-[#E8661A]"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-stone-300 hover:text-white font-medium text-sm tracking-wide transition-colors focus:outline-none focus:text-[#E8661A]"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Call Button showing phone number */}
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 bg-[#E8661A] hover:bg-[#C4500F] active:bg-[#A8421E] text-white px-5 py-2.5 rounded-[6px] font-bold text-sm tracking-wide shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A] focus:ring-[#E8661A]"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Right: Call Button + Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="inline-flex items-center gap-1.5 bg-[#E8661A] hover:bg-[#C4500F] text-white px-3 py-1.5 rounded-[6px] font-bold text-xs tracking-wide shadow transition-colors"
              aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[6px] text-stone-300 hover:text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#E8661A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] border-t border-[#2A2A2A] px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded text-base font-medium text-stone-200 hover:bg-[#2A2A2A] hover:text-[#E8661A] transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded text-base font-medium text-stone-200 hover:bg-[#2A2A2A] hover:text-[#E8661A] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded text-base font-medium text-stone-200 hover:bg-[#2A2A2A] hover:text-[#E8661A] transition-colors"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-[#2A2A2A]">
              <a
                href={BUSINESS_CONFIG.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-[#E8661A] text-white py-3 rounded-[6px] font-bold text-sm tracking-wide shadow"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          SECTION 2: HERO WITH A REAL IMAGE
          - 85vh on desktop, 70vh on mobile
          - Real <img> with fetchpriority="high" and fallback sunset gradient
          - Charcoal gradient overlay (75% to 35% opacity)
          - Heavy uppercase headline, 5.0 star badge, 2 CTAs, ridge-line divider
          ===================================================================== */}
      <section className="relative w-full min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-between bg-[#1A1A1A] overflow-hidden">
        {/* Real Hero Photo with OnError Fallback */}
        <div className="absolute inset-0 z-0">
          {!heroImageError ? (
            <img
              src={HERO_IMAGE_URL}
              alt="Rugged 4WD vehicle traversing the Australian outback at golden hour"
              fetchPriority="high"
              onError={() => setHeroImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            // Robust outback sunset gradient fallback if the remote image cannot load
            <div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(135deg, #1A1A1A 0%, #6C280E 35%, #A8421E 65%, #E8661A 90%, #F2B134 100%)',
              }}
            />
          )}

          {/* Left-to-Right Charcoal Gradient Overlay: ~75% to 35% opacity for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/45 lg:from-[#1A1A1A]/90 lg:via-[#1A1A1A]/75 lg:to-[#1A1A1A]/35 pointer-events-none" />

          {/* Subtle bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 my-auto w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Trust Badge: ★★★★★ 5.0 · 18 reviews (Sunset Gold #F2B134) */}
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A]/85 backdrop-blur-sm border border-[#E8661A]/40 px-3.5 py-1.5 rounded-full text-white text-xs sm:text-sm font-medium mb-6 shadow-md">
              <span className="flex text-[#F2B134] tracking-tight">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F2B134] text-[#F2B134]" />
                ))}
              </span>
              <span className="font-bold text-white tracking-wide">5.0</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-300 font-medium">18 reviews</span>
            </div>

            {/* Headline: Exact wording required "Keeping the Territory Moving." */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] drop-shadow-md"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Keeping the Territory Moving.
            </h1>

            {/* Subheadline: Winnellie, Darwin, Logbook servicing, repairs, diagnostics & 4WD */}
            <p className="mt-5 text-lg sm:text-xl text-stone-200 font-normal leading-relaxed max-w-xl drop-shadow-sm">
              Logbook servicing, repairs, diagnostics, and 4WD specialists in Winnellie, Darwin. Call
              to book your vehicle in.
            </p>

            {/* Two Action Buttons: Call Now & Book a Service */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BUSINESS_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 bg-[#E8661A] hover:bg-[#C4500F] active:bg-[#A8421E] text-white px-7 py-3.5 rounded-[6px] font-bold text-base tracking-wide shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A] focus:ring-[#E8661A]"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:border-[#E8661A] hover:bg-white/10 active:bg-white/20 text-white px-7 py-3.5 rounded-[6px] font-bold text-base tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A] focus:ring-white"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro details bar */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-300 font-medium">
              <span className="flex items-center gap-1.5 text-stone-200">
                <MapPin className="w-4 h-4 text-[#E8661A]" />
                {BUSINESS_CONFIG.addressShort}
              </span>
              <span className="hidden sm:inline text-stone-500">•</span>
              <span className="text-stone-300">
                Serving {BUSINESS_CONFIG.serviceArea}
              </span>
            </div>
          </div>
        </div>

        {/* Outback Ridge-Line SVG Divider at Hero Bottom */}
        <OutbackRidgeDivider fillColour="#F7F2EA" />
      </section>

      {/* =====================================================================
          SECTION 3: SERVICES + ABOUT
          - Warm sand off-white background (#F7F2EA)
          - 4 sturdy cards with clean line icons and titles
          - "Why Choose Outback Motor Works" strip with 4 check points
          ===================================================================== */}
      <section id="services" className="relative bg-[#F7F2EA] py-16 md:py-24">
        {/* Subtle decorative gear outline SVG in background */}
        <div className="absolute right-0 top-12 opacity-5 pointer-events-none select-none overflow-hidden">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
            <path d="M50 8 L55 14 L63 12 L66 19 L74 20 L74 28 L82 32 L79 40 L86 46 L81 53 L86 60 L79 66 L82 74 L74 77 L74 85 L66 86 L63 93 L55 91 L50 97 L45 91 L37 93 L34 86 L26 85 L26 77 L18 74 L21 66 L14 60 L19 53 L14 46 L21 40 L18 32 L26 28 L26 20 L34 19 L37 12 L45 14 Z" />
            <circle cx="50" cy="50" r="28" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#A8421E] mb-2">
              <span className="w-6 h-0.5 bg-[#A8421E]" />
              Local Mechanical Services
              <span className="w-6 h-0.5 bg-[#A8421E]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Services Built for the Territory
            </h2>
            <p className="mt-3 text-stone-600 text-base md:text-lg">
              Dependable mechanical maintenance and repairs carried out right here in Winnellie.
            </p>
          </div>

          {/* 4 Sturdy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((svc) => (
              <div
                key={svc.id}
                className="bg-white border-2 border-stone-200/80 hover:border-[#E8661A] p-6 rounded-[6px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-[6px] bg-[#F7F2EA] border border-stone-200 flex items-center justify-center text-[#E8661A] group-hover:bg-[#E8661A] group-hover:text-white transition-colors mb-5">
                    {svc.icon === 'logbook' && <Calendar className="w-6 h-6 stroke-[2]" />}
                    {svc.icon === 'repairs' && <Wrench className="w-6 h-6 stroke-[2]" />}
                    {svc.icon === 'diagnostics' && <Cpu className="w-6 h-6 stroke-[2]" />}
                    {svc.icon === '4wd' && <ShieldCheck className="w-6 h-6 stroke-[2]" />}
                  </div>

                  <h3
                    className="text-2xl font-bold uppercase text-[#1A1A1A] group-hover:text-[#A8421E] transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {svc.title}
                  </h3>

                  <p className="mt-2.5 text-stone-600 text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-500">
                  <span className="text-[#A8421E] group-hover:text-[#E8661A] transition-colors font-medium">
                    Winnellie Workshop
                  </span>
                  <a
                    href="#contact"
                    className="text-[#1A1A1A] group-hover:text-[#E8661A] flex items-center gap-1 font-bold tracking-wide focus:outline-none"
                  >
                    Enquire <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Strip: "Why Choose Outback Motor Works" (About) */}
          <div id="about" className="mt-16 bg-white border border-stone-200 rounded-[6px] p-8 md:p-10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8661A] block mb-1">
                About Outback Motor Works
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase text-[#1A1A1A]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Why Choose Outback Motor Works
              </h3>
              <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
                Operating out of Roni Court in Winnellie, Outback Motor Works provides honest, reliable
                mechanical care designed for Darwin drivers and Top End terrain.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-stone-200">
              {WHY_CHOOSE_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#E8661A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm tracking-wide">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-stone-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: CONTACT + FOOTER
          - "Ready to Book Your Vehicle In?"
          - Two Columns:
              Left: Contact form (validation + success banner)
              Right: Address (Google Maps link), clickable phone,
                     "Call to book" hours note & clear code placeholder,
                     embedded Google Maps iframe for 4/5 Roni Court
          - Slim Charcoal Footer
          ===================================================================== */}
      <section id="contact" className="bg-white py-16 md:py-24 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E8661A] mb-2">
              <span className="w-6 h-0.5 bg-[#E8661A]" />
              Get In Touch
              <span className="w-6 h-0.5 bg-[#E8661A]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Ready to Book Your Vehicle In?
            </h2>
            <p className="mt-3 text-stone-600 text-base md:text-lg">
              Send us an enquiry below or give our Winnellie workshop a direct call.
            </p>
          </div>

          {/* Two-Column Grid: Form on Left, Workshop Details on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: Booking Enquiry Form (7 Cols) */}
            <div className="lg:col-span-7 bg-[#F7F2EA] border-2 border-stone-200/90 rounded-[6px] p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3
                  className="text-2xl font-bold uppercase text-[#1A1A1A]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Request a Booking
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  Fill in your vehicle details and service requirements. We will get in touch promptly to confirm.
                </p>
              </div>

              {formSubmitted ? (
                /* Success Message */
                <div className="bg-white border-2 border-[#E8661A] rounded-[6px] p-6 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-[#E8661A]/10 text-[#E8661A] rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4
                    className="text-2xl font-bold uppercase text-[#1A1A1A]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Booking Request Received
                  </h4>
                  <p className="mt-2 text-stone-700 text-sm leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-stone-900">{formData.name}</strong>. Your enquiry for your{' '}
                    <strong className="text-stone-900">{formData.vehicle}</strong> has been received. The team at
                    Outback Motor Works will call you on <strong className="text-stone-900">{formData.phone}</strong> shortly to confirm your booking time.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-stone-900 border border-stone-300 rounded-[6px] hover:bg-stone-50 transition-colors"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href={BUSINESS_CONFIG.phoneTel}
                      className="inline-flex items-center gap-1.5 bg-[#E8661A] hover:bg-[#C4500F] text-white px-5 py-2.5 rounded-[6px] text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Call Now ({BUSINESS_CONFIG.rawPhone})</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wide text-stone-800 mb-1">
                        Your Name <span className="text-[#A8421E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Miller"
                        className={`w-full px-3.5 py-2.5 bg-white border ${
                          formErrors.name ? 'border-[#A8421E] ring-1 ring-[#A8421E]' : 'border-stone-300'
                        } rounded-[6px] text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#E8661A] focus:ring-1 focus:ring-[#E8661A] transition-colors`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-[#A8421E] font-medium">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wide text-stone-800 mb-1">
                        Phone Number <span className="text-[#A8421E]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0482 069 219"
                        className={`w-full px-3.5 py-2.5 bg-white border ${
                          formErrors.phone ? 'border-[#A8421E] ring-1 ring-[#A8421E]' : 'border-stone-300'
                        } rounded-[6px] text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#E8661A] focus:ring-1 focus:ring-[#E8661A] transition-colors`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-[#A8421E] font-medium">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wide text-stone-800 mb-1">
                        Email Address <span className="text-[#A8421E]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com.au"
                        className={`w-full px-3.5 py-2.5 bg-white border ${
                          formErrors.email ? 'border-[#A8421E] ring-1 ring-[#A8421E]' : 'border-stone-300'
                        } rounded-[6px] text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#E8661A] focus:ring-1 focus:ring-[#E8661A] transition-colors`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-[#A8421E] font-medium">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Vehicle Make & Model */}
                    <div>
                      <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wide text-stone-800 mb-1">
                        Vehicle Make & Model <span className="text-[#A8421E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        placeholder="e.g. 2018 Toyota LandCruiser 200"
                        className={`w-full px-3.5 py-2.5 bg-white border ${
                          formErrors.vehicle ? 'border-[#A8421E] ring-1 ring-[#A8421E]' : 'border-stone-300'
                        } rounded-[6px] text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#E8661A] focus:ring-1 focus:ring-[#E8661A] transition-colors`}
                      />
                      {formErrors.vehicle && (
                        <p className="mt-1 text-xs text-[#A8421E] font-medium">{formErrors.vehicle}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wide text-stone-800 mb-1">
                      Service Required
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full appearance-none px-3.5 py-2.5 bg-white border border-stone-300 rounded-[6px] text-sm text-stone-900 focus:outline-none focus:border-[#E8661A] focus:ring-1 focus:ring-[#E8661A] transition-colors pr-10"
                      >
                        <option value="Logbook Servicing">Logbook Servicing</option>
                        <option value="Repairs">Repairs</option>
                        <option value="Diagnostics">Diagnostics</option>
                        <option value="4WD Servicing & Repairs">4WD Servicing & Repairs</option>
                        <option value="General Inspection / Other">Other / Unsure</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wide text-stone-800 mb-1">
                      Additional Notes or Symptoms (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe any specific issues, unusual noises, or requested booking dates..."
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-[6px] text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#E8661A] focus:ring-1 focus:ring-[#E8661A] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#E8661A] hover:bg-[#C4500F] active:bg-[#A8421E] text-white font-bold text-sm uppercase tracking-wider rounded-[6px] shadow-sm transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8661A] cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Request a Booking</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-stone-500 pt-1">
                    No payment required upfront. We will contact you to confirm a suitable service time.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Location, Phone, Hours & Embedded Map (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Workshop Contact Card */}
              <div className="bg-[#1A1A1A] text-white rounded-[6px] p-6 shadow-md border-t-4 border-[#E8661A]">
                <h3
                  className="text-2xl font-bold uppercase tracking-wide text-white mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Workshop Contact
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-[#2A2A2A] text-[#E8661A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                        Call or Enquire
                      </p>
                      <a
                        href={BUSINESS_CONFIG.phoneTel}
                        className="text-lg sm:text-xl font-bold text-white hover:text-[#E8661A] transition-colors block"
                      >
                        {BUSINESS_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-[#2A2A2A] text-[#E8661A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                        Workshop Address
                      </p>
                      <a
                        href={BUSINESS_CONFIG.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-stone-200 hover:text-white flex items-center gap-1 group"
                      >
                        <span>{BUSINESS_CONFIG.address}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#E8661A] opacity-80 group-hover:opacity-100" />
                      </a>
                      <p className="text-xs text-stone-400 mt-0.5">
                        Serving {BUSINESS_CONFIG.serviceArea}
                      </p>
                    </div>
                  </div>

                  {/* =========================================================
                      OPENING HOURS PLACEHOLDER & NOTICE
                      Notice: Opening hours are not officially provided.
                      Do NOT invent hours. Clearly display "Call to book your vehicle in".
                      ========================================================= */}
                  <div className="flex items-start gap-3 pt-3 border-t border-stone-800">
                    <div className="w-9 h-9 rounded-[6px] bg-[#2A2A2A] text-[#E8661A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                        Opening Hours
                      </p>
                      {/* Prominent "Call to book your vehicle in" message */}
                      <div className="mt-1 bg-[#2A2A2A] border border-[#E8661A]/40 rounded-[6px] p-2.5">
                        <span className="text-sm font-bold text-[#E8661A] block">
                          {WORKSHOP_HOURS.callToBookNotice}
                        </span>
                        <p className="text-xs text-stone-300 mt-0.5">
                          Please phone <a href={BUSINESS_CONFIG.phoneTel} className="underline text-white font-medium hover:text-[#E8661A]">{BUSINESS_CONFIG.phoneDisplay}</a> to schedule your service or drop-off time.
                        </p>
                      </div>

                      {/* Clearly commented placeholder schedule if hours are added later */}
                      {WORKSHOP_HOURS.hasSpecificHours && (
                        <div className="mt-3 space-y-1 text-xs text-stone-300">
                          {WORKSHOP_HOURS.placeholderSchedule.map((item, idx) => (
                            <div key={idx} className="flex justify-between py-0.5 border-b border-stone-800">
                              <span>{item.label}</span>
                              <span className="font-semibold text-white">{item.hours}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map iframe for "4/5 Roni Court, Winnellie NT" */}
              <div className="bg-[#F7F2EA] border-2 border-stone-200 rounded-[6px] p-2 shadow-sm overflow-hidden">
                <div className="relative w-full h-64 rounded-[4px] overflow-hidden bg-stone-200">
                  <iframe
                    title="Outback Motor Works location - 4/5 Roni Court, Winnellie NT 0820"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=4%2F5+Roni+Court,+Winnellie+NT+0820,+Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
                <div className="pt-2 px-1 flex items-center justify-between text-xs text-stone-600">
                  <span className="font-medium">4/5 Roni Court, Winnellie NT 0820</span>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A8421E] hover:text-[#E8661A] font-bold inline-flex items-center gap-1"
                  >
                    View in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            SLIM CHARCOAL FOOTER
            - Logo
            - Tagline: "Keeping the Territory Moving."
            - Address & Phone
            - Copyright & Australian English standards
            ===================================================================== */}
        <footer className="mt-20 bg-[#1A1A1A] border-t border-[#2A2A2A] text-stone-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2A2A2A]">
              {/* Footer Logo & Tagline */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <BrandLogo size="sm" />
                <div className="hidden sm:block h-8 w-px bg-stone-700" />
                <p
                  className="text-stone-300 text-sm font-bold tracking-wider uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  &ldquo;{BUSINESS_CONFIG.tagline}&rdquo;
                </p>
              </div>

              {/* Direct links in footer */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <a
                  href={BUSINESS_CONFIG.phoneTel}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E8661A] fill-current" />
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E8661A]" />
                  {BUSINESS_CONFIG.addressShort}
                </a>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
              <p>
                &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved. Darwin & Top End, Northern Territory.
              </p>
              <p className="text-stone-400">
                Auto Repair &bull; Logbook Servicing &bull; Diagnostics &bull; 4WD Repairs
              </p>
            </div>
          </div>
        </footer>
      </section>

      {/* =====================================================================
          FLOATING MOBILE CALL BUTTON
          - Fixed to bottom right on mobile devices
          - Direct phone call link with burnt orange styling
          ===================================================================== */}
      <div className="md:hidden fixed bottom-5 right-5 z-40">
        <a
          href={BUSINESS_CONFIG.phoneTel}
          aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
          className="flex items-center gap-2 bg-[#E8661A] active:bg-[#C4500F] text-white px-4 py-3 rounded-full font-bold text-sm shadow-xl border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#E8661A]/40 transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 fill-current animate-bounce" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
