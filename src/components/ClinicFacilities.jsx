import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Maximize2, X, ChevronLeft, ChevronRight,
  ShieldCheck, Sparkles, BedDouble, Stethoscope, Users, Building2
} from 'lucide-react'

import clinicExteriorImg from '../assets/clinic/clinic_exterior.webp'
import operationRoomImg from '../assets/clinic/operation_room.webp'
import patientsRoomImg from '../assets/clinic/patients_room.webp'
import patientRoom2Img from '../assets/clinic/patient_room_2.webp'
import receptionImg from '../assets/clinic/reception.webp'
import waitingArea1Img from '../assets/clinic/waiting_area1.webp'
import audiometryImg from '../assets/clinic/audiometry.png'
import cssdImg from '../assets/clinic/CSSD.jpg'

const clinicImages = [
  {
    id: 'clinic_exterior',
    title: 'STEFFI CLINIC Building & Entrance',
    category: 'Exterior & Reception',
    subtitle: 'Purpose-built multi-storey ENT hospital located conveniently opposite Vijaya Theatre in Mayiladuthurai.',
    image: clinicExteriorImg,
    aspect: 'landscape',
    badge: 'Main Hospital',
    icon: Building2,
    features: ['Opposite Vijaya Theatre', 'Convenient Roadside Access', 'Dedicated Hospital Facility']
  },
  {
    id: 'reception',
    title: 'Main Reception & Welcome Desk',
    category: 'Exterior & Reception',
    subtitle: 'Warm, hospitable front desk for patient registration, scheduling, and clinical assistance.',
    image: receptionImg,
    aspect: 'landscape',
    badge: 'Front Office',
    icon: Building2,
    features: ['Patient Registration & Inquiries', 'Streamlined OPD Coordination', 'Warm & Welcoming Ambiance']
  },
  {
    id: 'waiting_area1',
    title: 'Comfortable Patient Waiting Lounge',
    category: 'Exterior & Reception',
    subtitle: 'Spacious, well-ventilated waiting area ensuring comfort for patients and accompanying families.',
    image: waitingArea1Img,
    aspect: 'landscape',
    badge: 'Patient Lounge',
    icon: Users,
    features: ['Clean Cushioned Seating', 'Calm & Sanitized Environment', 'Direct Consultation Room Access']
  },
  {
    id: 'operation_room',
    title: 'Laminar-Flow Operation Theatre',
    category: 'Operation Theatre',
    subtitle: 'Advanced surgical complex equipped with operating microscopes, endoscopic systems, and strict sterile air standards.',
    image: operationRoomImg,
    aspect: 'landscape',
    badge: 'Surgical Complex',
    icon: Stethoscope,
    features: ['Laminar-Flow Air Sterilization', 'Precision Operating Microscopes', 'Full Endoscopic OT Setup']
  },
  {
    id: 'patients_room',
    title: 'Private AC Inpatient Suite',
    category: 'Inpatient Suites',
    subtitle: 'Quiet, air-conditioned single patient room designed for peaceful recovery, privacy, and vital monitoring.',
    image: patientsRoomImg,
    aspect: 'portrait',
    badge: 'Single AC Room',
    icon: BedDouble,
    features: ['Motorized Adjustable Bed', 'Ventilator & Monitor Ready', 'En-Suite Bathroom & Complete Privacy']
  },
  {
    id: 'patient_room_2',
    title: 'Post-Operative Recovery Suite',
    category: 'Inpatient Suites',
    subtitle: 'Dedicated recovery facility with round-the-clock nursing supervision and patient comfort amenities.',
    image: patientRoom2Img,
    aspect: 'landscape',
    badge: 'Recovery Facility',
    icon: ShieldCheck,
    features: ['24/7 Nursing Supervision', 'Single AC Patient Privacy', 'Family Seating & Care Amenities']
  },
  {
    id: 'cssd_facility',
    title: 'Sterilization Facility (CSSD)',
    category: 'Operation Theatre',
    subtitle: 'Central Sterile Services Department following established sterilization and autoclave protocols for surgical instruments.',
    image: cssdImg,
    aspect: 'landscape',
    badge: 'CSSD Facility',
    icon: ShieldCheck,
    features: ['Central Sterilization Unit', 'High-Pressure Autoclave', 'Strict Infection Control']
  },
  {
    id: 'audiology_clinic',
    title: 'Audiology Clinic & Hearing Testing',
    category: 'Audiology & Diagnostics',
    subtitle: 'Soundproof audiometry testing booth with digital Pure Tone Audiometry and clinical hearing evaluation systems.',
    image: audiometryImg,
    aspect: 'landscape',
    badge: 'Audiology Suite',
    icon: Stethoscope,
    features: ['Soundproof Audiometry Booth', 'Pure Tone Audiometry (PTA)', 'Psychoacoustic Testing']
  }
]

const categories = ['All Facilities', 'Exterior & Reception', 'Operation Theatre', 'Inpatient Suites', 'Audiology & Diagnostics']

export default function ClinicFacilities() {
  const [activeCategory, setActiveCategory] = useState('All Facilities')
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const filteredImages = activeCategory === 'All Facilities'
    ? clinicImages
    : clinicImages.filter(item => item.category === activeCategory)

  // Handle ESC key and arrow keys for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return
      if (e.key === 'Escape') setSelectedImageIndex(null)
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % clinicImages.length)
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + clinicImages.length) % clinicImages.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex])

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white" id="clinic-facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-teal-600" />
            <span>Modern Clinical Infrastructure</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Clinic & Inpatient Facilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Step inside STEFFI CLINIC. Take a look at our building facade, welcoming reception, sterile laminar-flow surgical complex, patient waiting lounge, and comfortable air-conditioned single inpatient recovery suites.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/25 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ===== Symmetrical, Cleanly Balanced Grid Layout ===== */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((facility) => {
              const fullIndex = clinicImages.findIndex(img => img.id === facility.id)

              return (
                <motion.div
                  key={facility.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between h-[390px] sm:h-[410px]"
                  onClick={() => setSelectedImageIndex(fullIndex)}
                >
                  {/* Photo with natural object-cover & positioning */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Sophisticated gradient scrim for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20 opacity-85 group-hover:opacity-75 transition-opacity" />
                  </div>

                  {/* Top Badge & Zoom Indicator */}
                  <div className="relative z-10 p-5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-primary shadow-sm">
                      <facility.icon size={13} />
                      {facility.badge}
                    </span>
                    <button
                      type="button"
                      aria-label="View photo in full screen"
                      className="w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-md"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="relative z-10 p-5 sm:p-6 mt-auto">
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block mb-1">
                      {facility.category}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-teal-200 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {facility.subtitle}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {facility.features.map((feat, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-slate-200 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/10"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ===== HIGH-RESOLUTION LIGHTBOX MODAL ===== */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    {clinicImages[selectedImageIndex].category}
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="text-xs text-slate-400 font-medium">
                    {selectedImageIndex + 1} of {clinicImages.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedImageIndex(null)}
                    aria-label="Close photo preview"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Photo Display with Natural Fit */}
              <div className="relative flex-1 bg-black/80 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px] max-h-[62vh] p-4">
                <img
                  src={clinicImages[selectedImageIndex].image}
                  alt={clinicImages[selectedImageIndex].title}
                  className="max-h-[58vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
                />

                {/* Prev Button */}
                <button
                  onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + clinicImages.length) % clinicImages.length)}
                  aria-label="Previous facility photo"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-primary text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % clinicImages.length)}
                  aria-label="Next facility photo"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-primary text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Modal Details Footer */}
              <div className="p-6 bg-slate-950/90 border-t border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {clinicImages[selectedImageIndex].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                      {clinicImages[selectedImageIndex].subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {clinicImages[selectedImageIndex].features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-teal-200 bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-full"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
