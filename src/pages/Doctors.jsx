import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Award, GraduationCap, Languages, ArrowRight,
  Mail, Stethoscope, Phone
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Prism from '../components/Prism'
import { useScrollReveal } from '../utils/scrollReveal'

const specialties = [
  'All Consultants',
  'Ear, Nose & Throat (ENT)',
  'Microscopic & Sinus Surgery',
  'Pediatric & Allergy ENT'
]

const doctors = [
  {
    name: 'Dr. R. S. Arivazhagan',
    qualifications: 'M.B.B.S., D.L.O.',
    category: 'Pediatric & Allergy ENT',
    specialty: 'Consultant ENT Specialist',
    experience: 'Experienced ENT Specialist',
    focus: 'Allergy Clinic, Upper Airway Assessment & Diagnostic Endoscopy',
    languages: ['Tamil', 'English'],
    availability: 'Available for Consultation',
    bio: 'Dedicated ENT consultant focusing on allergy management, paediatric ear and throat conditions, and diagnostic investigations tailored to each patient.',
    initials: 'RSA',
    badge: 'ENT Specialist',
    gradient: 'from-slate-900 via-teal-950 to-slate-900',
    accent: 'from-teal-500 to-emerald-400'
  },
  {
    name: 'Dr. K. Pradeep',
    qualifications: 'M.B.B.S., M.S. (ENT)',
    category: 'Microscopic & Sinus Surgery',
    specialty: 'Consultant ENT Surgeon',
    experience: 'Consultant ENT Surgeon',
    focus: 'Surgical Procedures, Sleep & Snoring, Vertigo & Balance Disorders',
    languages: ['Tamil', 'English'],
    availability: 'Available for Consultation',
    bio: 'Specialises in microscopic and endoscopic ENT procedures, evaluation of snoring and sleep-related breathing problems, and vertigo disorders.',
    initials: 'KP',
    badge: 'ENT Surgeon',
    gradient: 'from-slate-900 via-primary-dark/40 to-slate-900',
    accent: 'from-cyan-500 to-teal-400'
  },
  {
    name: 'Dr. A. Steffi',
    qualifications: 'M.B.B.S., M.S. (ENT)',
    category: 'Ear, Nose & Throat (ENT)',
    specialty: 'Consultant ENT Surgeon',
    experience: 'Specialised ENT Surgeon',
    focus: 'General ENT, Endoscopic Sinus Evaluation & Inpatient Care',
    languages: ['Tamil', 'English'],
    availability: 'Consultant on Duty',
    bio: 'Provides comprehensive clinical assessment and individualised treatment for ear, nose and throat conditions, with a focus on patient comfort and clinical excellence.',
    initials: 'AS',
    badge: 'Consultant Surgeon',
    gradient: 'from-slate-900 via-teal-900/40 to-slate-900',
    accent: 'from-emerald-500 to-teal-400'
  }
]

function Doctors() {
  const [activeFilter, setActiveFilter] = useState('All Consultants')
  useScrollReveal()

  const filteredDoctors = activeFilter === 'All Consultants'
    ? doctors
    : doctors.filter(d => d.category === activeFilter)

  return (
    <div className="overflow-hidden">
      <PageBanner
        title="Our ENT"
        highlight="Consultants"
        breadcrumb="Doctors"
        subtitle="Experienced ENT specialists providing thorough evaluation and individualized treatment across all ear, nose and throat conditions"
        badge="Experienced ENT Specialists"
      />

      {/* ===== FILTER SECTION ===== */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Medical Faculty
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mb-6 tracking-tight">
              Experienced ENT <span className="text-gradient-primary">Specialists</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our consultants provide evaluation and treatment across a broad range of ENT conditions, with individualised care based on each patient's clinical needs.
            </p>
          </div>

          {/* Specialty Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveFilter(spec)}
                className={`px-7 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === spec
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary border border-gray-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Doctor Cards Grid (Image-Free Medical Specialist Cards) */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doc) => (
                <motion.div
                  key={doc.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group border border-slate-200/80 h-full relative"
                >
                  {/* Medical Header with Monogram Medallion */}
                  <div className={`relative bg-gradient-to-br ${doc.gradient} text-white p-7 overflow-hidden border-b border-slate-800`}>
                    {/* Decorative subtle ambient lights */}
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

                    {/* Status Pill & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-6 relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/25">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {doc.availability}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 backdrop-blur-sm">
                        {doc.badge}
                      </span>
                    </div>

                    {/* Monogram Medallion & Name */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-18 h-18 rounded-2xl bg-gradient-to-tr ${doc.accent} text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-slate-950/40 shrink-0 border border-white/25 ring-4 ring-white/10`}>
                        {doc.initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl font-black tracking-tight text-white mb-1 group-hover:text-teal-200 transition-colors truncate">
                          {doc.name}
                        </h3>
                        <p className="text-teal-300 text-xs sm:text-sm font-semibold mb-1.5">
                          {doc.specialty}
                        </p>
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/15 text-slate-200 text-xs font-bold border border-white/10">
                          {doc.qualifications}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Details Body */}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {doc.bio}
                      </p>

                      <div className="space-y-3 pt-5 border-t border-slate-100 text-xs text-slate-600">
                        <div className="flex items-start gap-3">
                          <GraduationCap size={16} className="text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900 block">Academic Degree</span>
                            <span className="text-slate-600">{doc.qualifications}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Award size={16} className="text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900 block">Clinical Focus</span>
                            <span className="text-slate-600 leading-normal">{doc.focus}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Languages size={16} className="text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900 block">Consultation Languages</span>
                            <span className="text-slate-600">{doc.languages.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-100">
                      <Link
                        to="/contact"
                        className="w-full py-3.5 bg-slate-50 hover:bg-primary text-slate-800 hover:text-white rounded-xl font-bold text-center text-sm border border-slate-200/90 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn"
                      >
                        <Mail size={16} className="group-hover/btn:scale-110 transition-transform" />
                        <span>Inquire Consultation</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ===== BOTTOM ENT CARE BANNER WITH WEBGL PRISM ===== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        {/* Dynamic 3D WebGL Prism Motion Shader */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/80" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200 mb-6">
            <Stethoscope size={14} className="text-emerald-400" />
            <span>Specialised ENT Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Specialised ENT Care. Trusted Expertise.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            From consultation and diagnosis to treatment and recovery, STEFFI CLINIC brings essential ENT services together in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-2xl transition-all text-base cursor-pointer"
              >
                <span>Contact Our Clinic</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <a
              href="tel:+916379051789"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-xl font-bold border border-white/20 transition-all text-base backdrop-blur-md"
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

export default Doctors
