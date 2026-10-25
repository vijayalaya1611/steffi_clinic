import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Target, Heart, Shield, Award as Trophy, HeartPulse, UserCheck,
  Sparkles, Building, BedDouble, Stethoscope
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import ClinicFacilities from '../components/ClinicFacilities'
import { useScrollReveal } from '../utils/scrollReveal'

import clinicExteriorImg from '../assets/clinic/clinic_exterior.webp'
import receptionImg from '../assets/clinic/reception.webp'
import patientsRoomImg from '../assets/clinic/patients_room.webp'
import operationRoomImg from '../assets/clinic/operation_room.webp'

const values = [
  {
    icon: Shield,
    title: 'Focused ENT Expertise',
    desc: 'Dedicated services covering a wide range of ear, nose and throat conditions with individualised clinical care.',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    icon: Target,
    title: 'Specialised Clinics',
    desc: 'Focused care for allergy, paediatric ENT, sleep & snoring, vertigo, and voice & swallowing disorders.',
    color: 'from-accent to-accent-light'
  },
  {
    icon: Trophy,
    title: 'Surgical & CSSD Standards',
    desc: 'Laminar-flow operation theatre and Central Sterile Services Department for patient safety.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Heart,
    title: 'Inpatient Privacy & Comfort',
    desc: 'Five air-conditioned single rooms, dedicated recovery room, and ventilator-supported monitoring.',
    color: 'from-emerald-500 to-teal-600'
  },
]

const leadership = [
  {
    name: 'Dr. R. S. Arivazhagan',
    role: 'Consultant ENT Specialist',
    specialty: 'M.B.B.S., D.L.O.',
    bio: 'Experienced in clinical otorhinolaryngology, allergy management, and paediatric ENT care with a compassionate approach.',
    initials: 'RSA',
    badge: 'ENT Specialist',
    gradient: 'from-slate-900 via-teal-950 to-slate-900',
    accent: 'from-teal-500 to-emerald-400'
  },
  {
    name: 'Dr. K. Pradeep',
    role: 'Consultant ENT Surgeon',
    specialty: 'M.B.B.S., M.S. (ENT)',
    bio: 'Specialist in microscopic ear surgery, sleep & snoring evaluation, and vertigo & balance disorder assessments.',
    initials: 'KP',
    badge: 'ENT Surgeon',
    gradient: 'from-slate-900 via-primary-dark/40 to-slate-900',
    accent: 'from-cyan-500 to-teal-400'
  },
  {
    name: 'Dr. A. Steffi',
    role: 'Consultant ENT Surgeon',
    specialty: 'M.B.B.S., M.S. (ENT)',
    bio: 'Dedicated ENT surgeon providing comprehensive evaluation, clinical diagnosis, and microsurgical treatments tailored to patient needs.',
    initials: 'AS',
    badge: 'Lead ENT Surgeon',
    gradient: 'from-slate-900 via-teal-900/40 to-slate-900',
    accent: 'from-emerald-500 to-teal-400'
  }
]

const storyPreviews = [
  {
    id: 'exterior',
    title: 'Steffi Clinic Hospital Building',
    badge: 'Hospital Building',
    desc: 'Conveniently located multi-storey ENT hospital opposite Vijaya Theatre in Mayiladuthurai.',
    image: clinicExteriorImg,
    icon: Building
  },
  {
    id: 'reception',
    title: 'Welcoming Reception & Lobby',
    badge: 'Front Office',
    desc: 'Thoughtful patient reception, OPD coordination, and clean clinical ambiance.',
    image: receptionImg,
    icon: Building
  },
  {
    id: 'patients_room',
    title: '5 AC Single Inpatient Rooms',
    badge: 'Private Rooms',
    desc: 'Dedicated single rooms offering peaceful recovery, privacy, and clinical monitoring.',
    image: patientsRoomImg,
    icon: BedDouble
  },
  {
    id: 'operation_room',
    title: 'Laminar-Flow Operation Theatre',
    badge: 'Surgical OT',
    desc: 'Advanced surgical infrastructure with operating microscopes and endoscopic systems.',
    image: operationRoomImg,
    icon: Stethoscope
  }
]

function About() {
  useScrollReveal()
  const [activePreview, setActivePreview] = useState(0)

  return (
    <div className="overflow-hidden">
      <PageBanner
        title="About"
        highlight="Steffi Clinic"
        breadcrumb="About Us"
        subtitle="Expert ENT Care, Thoughtfully Delivered — Specialised Ear, Nose & Throat Services in a Comfortable Clinical Environment"
        badge="Specialised ENT Healthcare"
      />

      {/* ===== STORY SECTION ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Our Clinical Philosophy
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-8 leading-tight">
              Care That Begins With <span className="text-gradient-primary">Listening</span>
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-light">
              <p>
                Every patient is different. At Steffi Clinic, we provide specialised care for conditions affecting the ear, nose and throat, supported by dedicated specialty clinics, audiology services, diagnostic investigations and advanced surgical facilities.
              </p>
              <p>
                We begin by understanding your symptoms and concerns, followed by appropriate clinical examination and investigations. Where treatment is required, our team discusses the available options and develops a plan suited to the patient's condition.
              </p>
              <p>
                From consultation and diagnosis to treatment and recovery, Steffi Clinic brings essential ENT services together in one place.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Link to="/services">
                <button className="btn-primary text-base px-8 py-4 cursor-pointer">
                  Explore Specialty Clinics
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-outline text-base px-8 py-4 cursor-pointer">
                  Contact Clinic
                </button>
              </Link>
            </div>
          </div>

          {/* Interactive Authentic Clinic Showcase */}
          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 flex flex-col">
              {/* Photo Display */}
              <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={storyPreviews[activePreview].id}
                    src={storyPreviews[activePreview].image}
                    alt={storyPreviews[activePreview].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-primary shadow-sm">
                    <Sparkles size={13} className="text-teal-600" />
                    <span>Real Clinic Facilities</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/70 backdrop-blur-md text-teal-300 border border-white/20">
                    {storyPreviews[activePreview].badge}
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-slate-950/75 backdrop-blur-md border border-white/15 p-5 rounded-2xl shadow-xl">
                    <div className="text-xl font-bold text-white mb-1">
                      {storyPreviews[activePreview].title}
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {storyPreviews[activePreview].desc}
                    </p>

                    {/* Facility Switcher Tabs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/10">
                      {storyPreviews.map((p, idx) => (
                        <button
                          key={p.id}
                          onClick={() => setActivePreview(idx)}
                          className={`py-2 px-2 rounded-xl text-[11px] font-bold text-center transition-all cursor-pointer truncate ${
                            activePreview === idx
                              ? 'bg-primary text-white shadow-md'
                              : 'bg-white/10 text-slate-300 hover:bg-white/20'
                          }`}
                        >
                          {p.badge}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Our Core Values
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              What We <span className="text-gradient-primary">Stand For</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              These principles guide every patient interaction and medical decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-teal-50/90 text-primary border border-teal-200/80 rounded-2xl flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <v.icon size={26} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONSULTANTS SECTION (IMAGE-FREE MEDICAL CARDS) ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Our Consultants
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              Experienced ENT <span className="text-gradient-primary">Specialists</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our consultants provide evaluation and treatment across a broad range of ENT conditions, with individualised care based on each patient's clinical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <div key={i} className="reveal bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group border border-slate-200/80">
                <div className={`relative bg-gradient-to-br ${leader.gradient} text-white p-7 border-b border-slate-800`}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                      {leader.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                      {leader.specialty}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${leader.accent} text-white flex items-center justify-center font-black text-xl shadow-lg shadow-slate-950/40 shrink-0 border border-white/25 ring-4 ring-white/10`}>
                      {leader.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-tight text-white mb-0.5 group-hover:text-teal-200 transition-colors truncate">
                        {leader.name}
                      </h3>
                      <p className="text-teal-300 text-xs font-semibold">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="w-full py-3 bg-slate-50 hover:bg-primary text-slate-800 hover:text-white rounded-xl font-bold text-center text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200/80 hover:border-transparent"
                    >
                      <UserCheck size={14} />
                      <span>Consult with {leader.name}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLINIC FACILITIES TOUR ===== */}
      <ClinicFacilities />

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-primary-dark to-slate-900 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200 mb-6">
            <HeartPulse size={14} className="text-emerald-400" />
            <span>Specialised ENT Care • Advanced Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Specialised ENT Care. Trusted Expertise.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            From consultation and diagnosis to treatment and recovery, Steffi Clinic brings essential ENT services together in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-base px-8 py-4 cursor-pointer"
              >
                Contact Steffi Clinic
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline border-white text-white hover:bg-white hover:text-dark text-base px-8 py-4 cursor-pointer"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
