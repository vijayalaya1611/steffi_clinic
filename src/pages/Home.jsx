import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import Prism from '../components/Prism'
import HeroShowcase from '../components/HeroShowcase'
import ClinicFacilities from '../components/ClinicFacilities'

import operationRoomImg from '../assets/clinic/operation_room.webp'
import patientRoom2Img from '../assets/clinic/patient_room_2.webp'
import audiologyClinicImg from '../assets/clinic/audiology_clinic.png'

import {
  Stethoscope, Baby, Award, ShieldCheck, Users, Phone,
  ArrowRight, CheckCircle2, Star, UserCheck, Activity,
  ChevronRight, Wind, Moon, Volume2, Microscope, BedDouble
} from 'lucide-react'

const stats = [
  { label: 'Specialty ENT Clinics', icon: Award, sub: 'Allergy, Paediatric, Snoring, Vertigo, Voice' },
  { label: 'Consultant Specialists', icon: Users, sub: 'Experienced M.S. (ENT)' },
  { label: 'Inpatient Rooms Available', icon: BedDouble, sub: 'AC, Non-AC & General Ward options' },
  { label: 'CSSD Sterilization', icon: ShieldCheck, sub: 'Established clinical instrument safety' }
]

const services = [
  {
    id: 'allergy-clinic',
    title: 'Allergy Clinic',
    category: 'Specialty Clinics',
    desc: 'Assessment and management of allergic conditions affecting the nose, throat and upper respiratory tract.',
    icon: Wind,
    badge: 'Focused Care',
    procedures: ['Allergic Rhinitis Evaluation', 'Upper Airway Sensitivity', 'Allergen Management'],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop'
  },
  {
    id: 'paediatric-ent',
    title: 'Paediatric ENT Clinic',
    category: 'Specialty Clinics',
    desc: 'ENT services tailored specifically to the unique clinical needs of infants, children and adolescents.',
    icon: Baby,
    badge: 'Paediatric',
    procedures: ['Childhood Ear Infections', 'Tonsils & Adenoids', 'Gentle Child Examination'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
  },
  {
    id: 'sleep-snoring',
    title: 'Sleep & Snoring Clinic',
    category: 'Specialty Clinics',
    desc: 'Evaluation of snoring and sleep-related breathing problems to identify airway obstruction and underlying causes.',
    icon: Moon,
    badge: 'Specialised',
    procedures: ['Snoring Pattern Analysis', 'Airway Obstruction Evaluation', 'Sleep Breathing Pathways'],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop'
  },
  {
    id: 'vertigo-balance',
    title: 'Vertigo & Balance Clinic',
    category: 'Diagnostics',
    desc: 'Assessment of dizziness, vertigo and balance disorders to help identify their underlying causes.',
    icon: Activity,
    badge: 'Vestibular',
    procedures: ['Dizziness Diagnosis', 'Vestibular Balance Testing', 'Rehabilitation Support'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop'
  },
  {
    id: 'voice-swallowing',
    title: 'Voice & Swallowing Clinic',
    category: 'Specialty Clinics',
    desc: 'Evaluation and management of problems affecting the voice, vocal cords and swallowing function.',
    icon: Stethoscope,
    badge: 'Clinical Review',
    procedures: ['Voice Strain & Hoarseness', 'Laryngeal Examination', 'Swallowing Dysfunction'],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop'
  },
  {
    id: 'audiology-clinic',
    title: 'Audiology & Hearing Assessment',
    category: 'Diagnostics',
    desc: 'Diagnostic audiological services including Pure Tone Audiometry and psychoacoustic testing.',
    icon: Volume2,
    badge: 'Audiology',
    procedures: ['Pure Tone Audiometry (PTA)', 'Psychoacoustic Testing', 'Hearing Assessment & Care'],
    image: audiologyClinicImg
  },
  {
    id: 'laboratory-services',
    title: 'Laboratory Services & Packages',
    category: 'Diagnostics',
    desc: 'Essential investigations at one location supporting clinical diagnosis and health monitoring.',
    icon: Microscope,
    badge: 'Diagnostic Lab',
    procedures: ['Haematology, Biochemistry, Serology', 'Endocrinology, Microbiology, Cultures', 'Cardiac & Diabetic Health Packages'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop'
  },
  {
    id: 'ent-surgeries',
    title: 'ENT Surgeries & Laminar-Flow OT',
    category: 'Surgical & Inpatient',
    desc: 'Advanced surgical complex with laminar-flow OT, operating microscopes and endoscopic systems.',
    icon: ShieldCheck,
    badge: 'Surgical Suite',
    procedures: ['Adenotonsillectomy', 'Functional Endoscopic Sinus Surgery (FESS)', 'Mastoid Exploration Surgery'],
    image: operationRoomImg
  },
  {
    id: 'inpatient-facilities',
    title: 'Inpatient Care & Recovery',
    category: 'Surgical & Inpatient',
    desc: 'Inpatient accommodation available across AC rooms, Non-AC rooms and general wards, with a dedicated recovery facility.',
    icon: BedDouble,
    badge: 'Inpatient Care',
    procedures: ['AC & Non-AC Single Rooms', 'General Ward Facility', 'Ventilator-Supported Recovery'],
    image: patientRoom2Img
  }
]

const featuredDoctors = [
  {
    name: 'Dr. R. S. Arivazhagan',
    degrees: 'M.B.B.S., D.L.O.',
    specialty: 'Consultant ENT Specialist',
    experience: 'Experienced ENT Specialist',
    education: 'M.B.B.S., D.L.O.',
    focus: 'Allergy Clinic, Upper Airway Assessment & Diagnostic Endoscopy',
    rating: 5.0,
    reviews: 240,
    availability: 'Available for Consultation',
    initials: 'RSA',
    badge: 'ENT Specialist',
    gradient: 'from-slate-900 via-teal-950 to-slate-900',
    accent: 'from-teal-500 to-emerald-400'
  },
  {
    name: 'Dr. K. Pradeep',
    degrees: 'M.B.B.S., M.S. (ENT)',
    specialty: 'Consultant ENT Surgeon',
    experience: 'Consultant ENT Surgeon',
    education: 'M.B.B.S., M.S. (ENT)',
    focus: 'Surgical Procedures, Sleep & Snoring, Vertigo Disorders',
    rating: 5.0,
    reviews: 195,
    availability: 'Available for Consultation',
    initials: 'KP',
    badge: 'ENT Surgeon',
    gradient: 'from-slate-900 via-primary-dark/40 to-slate-900',
    accent: 'from-cyan-500 to-teal-400'
  },
  {
    name: 'Dr. A. Steffi',
    degrees: 'M.B.B.S., M.S. (ENT)',
    specialty: 'Consultant ENT Surgeon',
    experience: 'Specialised ENT Surgeon',
    education: 'M.B.B.S., M.S. (ENT)',
    focus: 'General ENT, Endoscopic Sinus Evaluation & Inpatient Care',
    rating: 5.0,
    reviews: 180,
    availability: 'Consultant on Duty',
    initials: 'AS',
    badge: 'Lead ENT Surgeon',
    gradient: 'from-slate-900 via-teal-900/40 to-slate-900',
    accent: 'from-emerald-500 to-teal-400'
  }
]

const features = [
  {
    icon: Stethoscope,
    title: 'Focused ENT Expertise',
    desc: 'Dedicated services covering a wide range of ear, nose and throat conditions with accurate assessment.'
  },
  {
    icon: ShieldCheck,
    title: 'Specialised Clinics',
    desc: 'Focused care for allergy, paediatric ENT, sleep and snoring, vertigo, and voice and swallowing disorders.'
  },
  {
    icon: Volume2,
    title: 'Audiology & Diagnostics',
    desc: 'Hearing assessment (PTA, psychoacoustics) and laboratory investigations to support clinical evaluation.'
  },
  {
    icon: Microscope,
    title: 'Surgical Infrastructure',
    desc: 'State-of-the-art laminar-flow operation theatre, operating microscopes and endoscopic systems.'
  },
  {
    icon: BedDouble,
    title: 'Inpatient Care & Recovery',
    desc: 'Five air-conditioned single rooms providing privacy and comfort, with a dedicated recovery facility.'
  },
  {
    icon: CheckCircle2,
    title: 'Sterilization Standards (CSSD)',
    desc: 'A dedicated Central Sterile Services Department supporting the safe preparation of instruments for patient care.'
  }
]

const testimonials = [
  {
    name: 'Patient Review • Nasal & Sinus Care',
    role: 'FESS & Allergic Rhinitis Management',
    text: 'Steffi Clinic provided accurate assessment and relief for my chronic sinus issues. The doctors explained the findings thoroughly and the care was compassionate.',
    rating: 5,
    department: 'Sinus & Allergy Care',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
  },
  {
    name: 'Parent Review • Paediatric ENT',
    role: 'Paediatric Ear Care & Adenotonsillectomy',
    text: 'The paediatric ENT team made my child feel completely relaxed. From diagnosis to surgery and recovery in their AC single room, the staff was caring and attentive.',
    rating: 5,
    department: 'Paediatric ENT Clinic',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop'
  },
  {
    name: 'Patient Review • Vertigo & Balance',
    role: 'Vestibular Evaluation & Audiology',
    text: 'After months of recurrent dizziness, the vertigo assessment and audiological testing at Steffi Clinic accurately identified the root cause and helped me recover.',
    rating: 5,
    department: 'Vertigo & Balance Clinic',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
  }
]

function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.25 })

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()))

  return (
    <div className="bg-white overflow-hidden">
      {/* ===== HERO HEADER SECTION ===== */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-teal-50/60 via-slate-50/40 to-white overflow-hidden border-b border-slate-100">
        {/* Pure WebGL Prism Background (Zero Disturbing Overlays & Zero Noise) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Prism
              animationType="rotate"
              timeScale={0.45}
              height={3.5}
              baseWidth={5.5}
              scale={3.6}
              hueShift={0}
              colorFrequency={1}
              noise={0}
              glow={1.2}
              bloom={1}
              transparent={true}
              suspendWhenOffscreen={true}
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-teal-200/80 shadow-xs mb-6 text-xs font-semibold text-primary"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Specialised Ear, Nose & Throat Center</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-medium">
                  Advanced Diagnostics & Surgical Care
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6"
              >
                Expert ENT Care,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-600 to-accent">
                  Thoughtfully Delivered.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
              >
                Steffi Clinic provides specialised care for conditions affecting the ear, nose and throat, supported by dedicated specialty clinics, audiology services, diagnostic investigations and advanced surgical facilities.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all text-base cursor-pointer"
                  >
                    <span>Contact Our Clinic</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>

                <Link to="/doctors">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3.5 rounded-xl font-bold border border-slate-200 hover:border-primary/40 hover:bg-slate-50 shadow-xs transition-all text-base cursor-pointer"
                  >
                    <UserCheck size={18} className="text-primary" />
                    <span>Meet Our ENT Specialists</span>
                  </motion.button>
                </Link>

                <a
                  href="tel:+916379051789"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-primary transition-colors py-2 px-3"
                >
                  <Phone size={16} className="text-emerald-600" />
                  <span>Call: +91 6379051789</span>
                </a>
              </motion.div>

              {/* Pillars Pill Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600"
              >
                <span className="flex items-center gap-1.5 text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/60">
                  <CheckCircle2 size={13} className="text-teal-600" />
                  Specialised ENT Care
                </span>
                <span className="flex items-center gap-1.5 text-primary-dark bg-primary-50 px-3 py-1.5 rounded-lg border border-primary/20">
                  <CheckCircle2 size={13} className="text-primary" />
                  Advanced Diagnostics
                </span>
                <span className="flex items-center gap-1.5 text-sky-800 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200/60">
                  <CheckCircle2 size={13} className="text-sky-600" />
                  Surgical Expertise
                </span>
                <span className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  Comfortable Inpatient Facilities
                </span>
              </motion.div>
            </div>

            {/* Right Visual Authentic Hospital Showcase Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>



      {/* ===== HIGHLIGHTS & CREDIBILITY STRIP ===== */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/60" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all group flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEDICAL SERVICES & SPECIALTIES ===== */}
      <section className="py-24 bg-white" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-primary font-bold text-xs uppercase tracking-wider mb-3">
              Specialised ENT Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Comprehensive ENT & Clinical Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From focused specialty evaluations to advanced diagnostic audiology and microscopic surgical procedures, our clinic provides complete ear, nose and throat care.
            </p>

            {/* Specialty Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {['All', 'Specialty Clinics', 'Diagnostics', 'Surgical & Inpatient'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Service Photo */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-xs">
                    {service.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-white text-primary flex items-center justify-center shadow-md">
                    <service.icon size={22} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 uppercase tracking-wider mb-1 block">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    {/* Key Procedures */}
                    <ul className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                      {service.procedures.map((proc, j) => (
                        <li key={j} className="text-xs text-slate-700 flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-primary bg-primary-50 hover:bg-primary-100 transition-colors cursor-pointer">
                <span>View All ENT Services & Facilities</span>
                <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE STEFFI CLINIC (CLINICAL EXCELLENCE) ===== */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Header */}
            <div className="lg:col-span-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-teal-100/80 text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
                Why Steffi Clinic?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                Expert ENT Care, Thoughtfully Delivered
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Every patient is different. At Steffi Clinic, we begin by understanding your symptoms and concerns, followed by appropriate examination and investigations. From consultation and diagnosis to treatment and recovery, Steffi Clinic brings essential ENT services together in one place.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Care That Begins With Listening</h4>
                    <p className="text-xs text-slate-500">Thorough consultations where our team discusses available options suited to each patient's condition.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Integrated Audiology & Laboratory</h4>
                    <p className="text-xs text-slate-500">Pure tone audiometry and comprehensive clinical pathology tests under one roof for timely diagnosis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Advanced Surgical & Inpatient Facilities</h4>
                    <p className="text-xs text-slate-500">Laminar-flow OT, CSSD sterilization, and Air-conditioned single rooms with dedicated recovery.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-primary flex items-center justify-center mb-4">
                    <feat.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLINICAL FACILITIES & INFRASTRUCTURE TOUR ===== */}
      <ClinicFacilities />

      {/* ===== FEATURED DOCTORS PREVIEW ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-primary font-bold text-xs uppercase tracking-wider mb-3">
                Our Consultants
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Experienced ENT Specialists
              </h2>
            </div>
            <Link
              to="/doctors"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark"
            >
              <span>View All Consultants</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDoctors.map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Doctor Card Top Header with Monogram */}
                <div className={`relative bg-gradient-to-br ${doc.gradient} text-white p-7 overflow-hidden border-b border-slate-800`}>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/25">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {doc.availability}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                      {doc.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${doc.accent} text-white flex items-center justify-center font-black text-xl shadow-lg shadow-slate-950/40 shrink-0 border border-white/25 ring-4 ring-white/10`}>
                      {doc.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-tight text-white mb-0.5 group-hover:text-teal-200 transition-colors truncate">
                        {doc.name}
                      </h3>
                      <p className="text-teal-300 text-xs font-semibold mb-1">
                        {doc.specialty}
                      </p>
                      <span className="inline-block px-2 py-0.5 rounded bg-white/15 text-slate-200 text-[11px] font-bold border border-white/10">
                        {doc.degrees}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                        {doc.experience}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-slate-700">
                        <Star size={13} className="text-amber-400 fill-amber-400" />
                        {doc.rating} ({doc.reviews})
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      <strong className="text-slate-900 block mb-0.5">Clinical Focus:</strong>
                      {doc.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link to="/contact">
                      <button className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-primary hover:text-white text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200/80 hover:border-transparent">
                        <UserCheck size={14} />
                        <span>Consult with {doc.name}</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PATIENT TESTIMONIALS (AIRY, CLEAN & TRUSTWORTHY) ===== */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-teal-100/70 text-primary-dark font-bold text-xs uppercase tracking-wider mb-3">
              Patient Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Trusted ENT Care For Every Patient
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Real experiences from patients receiving specialized care across our ENT specialty clinics, diagnostics, and surgical facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={15} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary-50 px-2.5 py-0.5 rounded-full">
                      {t.department}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== URGENT CARE & CONTACT CALL TO ACTION WITH WEBGL PRISM ===== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        {/* WebGL Prism Motion Shader */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Prism
            animationType="3drotate"
            timeScale={0.4}
            height={3.2}
            baseWidth={5.2}
            scale={3.2}
            hueShift={3.5}
            colorFrequency={1.1}
            noise={0}
            glow={1.15}
            bloom={1}
            transparent={true}
            suspendWhenOffscreen={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/80" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200 mb-6">
            <Activity size={14} className="text-emerald-400" />
            <span>Specialised ENT Care • Advanced Diagnostics • Surgical Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Specialised ENT Care. Trusted Expertise.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            From consultation and diagnosis to treatment and recovery, Steffi Clinic brings essential ENT services together in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-2xl transition-all text-base cursor-pointer"
              >
                <span>Contact Steffi Clinic</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <a
              href="tel:+916379051789"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-xl font-bold border border-white/20 transition-all text-base backdrop-blur-md"
            >
              <Phone size={18} className="text-emerald-400" />
              <span>Reception: +91 6379051789</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

