import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Stethoscope, Baby, TestTubes, CheckCircle,
  Clock, HelpCircle, Phone, ArrowRight, ShieldCheck, HeartPulse,
  Volume2, Moon, Wind, Microscope, BedDouble, Award
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Prism from '../components/Prism'
import ClinicFacilities from '../components/ClinicFacilities'
import { useScrollReveal } from '../utils/scrollReveal'

import operationRoomImg from '../assets/clinic/operation_room.webp'
import patientRoom2Img from '../assets/clinic/patient_room_2.webp'
import audiologyClinicImg from '../assets/clinic/audiology_clinic.png'

const categories = [
  'All Services',
  'Specialty Clinics',
  'Audiology & Diagnostics',
  'Surgeries & Operation Theatre',
  'Inpatient & Sterilization'
]

const services = [
  {
    category: 'Specialty Clinics',
    icon: Wind,
    title: 'Allergy Clinic',
    desc: 'Assessment and management of allergic conditions affecting the nose, throat and upper respiratory tract.',
    features: ['Nasal allergy & rhinitis evaluation', 'Upper airway sensitivity management', 'Allergen symptom control', 'Customised medical management'],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop',
    duration: 'Consultation'
  },
  {
    category: 'Specialty Clinics',
    icon: Baby,
    title: 'Paediatric ENT Clinic',
    desc: 'ENT services specifically tailored to the unique clinical needs of infants, children and adolescents.',
    features: ['Childhood ear & throat conditions', 'Paediatric tonsil & adenoid care', 'Airway & breathing evaluation', 'Gentle, child-friendly examination'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    duration: 'Specialised Care'
  },
  {
    category: 'Specialty Clinics',
    icon: Moon,
    title: 'Sleep & Snoring Clinic',
    desc: 'Evaluation of snoring and sleep-related breathing problems to identify airway obstruction and underlying causes.',
    features: ['Snoring severity evaluation', 'Sleep-disordered breathing assessment', 'Upper airway clinical examination', 'Individualised management pathways'],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop',
    duration: 'Focused Clinic'
  },
  {
    category: 'Specialty Clinics',
    icon: Award,
    title: 'Vertigo & Balance Disorders Clinic',
    desc: 'Clinical assessment of dizziness, vertigo and balance disorders to help identify their underlying vestibular causes.',
    features: ['Inner ear balance evaluation', 'Vestibular disorder assessments', 'Dizziness diagnosis & grading', 'Therapeutic & rehabilitation guidance'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
    duration: 'Assessment'
  },
  {
    category: 'Specialty Clinics',
    icon: Stethoscope,
    title: 'Voice & Swallowing Clinic',
    desc: 'Evaluation and management of problems affecting the voice, vocal cords, and swallowing function.',
    features: ['Voice strain & hoarseness evaluation', 'Laryngeal & vocal cord examination', 'Swallowing difficulty assessment', 'Speech & vocal hygiene guidance'],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
    duration: 'Clinical Review'
  },
  {
    category: 'Audiology & Diagnostics',
    icon: Volume2,
    title: 'Audiology Clinic',
    desc: 'Assessment and management of hearing-related disorders assisting in diagnosis and guiding appropriate rehabilitation.',
    features: ['Pure Tone Audiometry (PTA)', 'Psychoacoustic testing', 'Comprehensive hearing assessments', 'Hearing rehabilitation advice'],
    image: audiologyClinicImg,
    duration: 'Diagnostic'
  },
  {
    category: 'Audiology & Diagnostics',
    icon: TestTubes,
    title: 'Laboratory Services',
    desc: 'Essential investigations at one location supporting clinical diagnosis and treatment monitoring across medical conditions.',
    features: ['Haematology, Biochemistry & Serology', 'Endocrinology & Microbiology', 'Culture & Sensitivity analysis', 'Liver & Kidney Function Tests (LFT/KFT)'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    duration: 'Same-Day Tests'
  },
  {
    category: 'Surgeries & Operation Theatre',
    icon: Microscope,
    title: 'Operation Theatre Complex',
    desc: 'Advanced facilities equipped to support a full spectrum of microsurgical and endoscopic ENT procedures.',
    features: ['State-of-the-art laminar-flow OT', 'High-precision operating microscopes', 'Advanced endoscopic camera systems', 'Specialised ENT surgical instrumentation'],
    image: operationRoomImg,
    duration: 'Surgical Facility'
  },
  {
    category: 'Surgeries & Operation Theatre',
    icon: Stethoscope,
    title: 'ENT Surgeries (FESS & Otology)',
    desc: 'Surgical services including procedures for selected ear, nose, throat and sinus conditions after clinical evaluation.',
    features: ['Adenotonsillectomy (tonsils & adenoids)', 'Functional Endoscopic Sinus Surgery (FESS)', 'Mastoid Exploration Surgery (middle ear)', 'Evidence-based surgical indications'],
    image: operationRoomImg,
    duration: 'Clinical Surgery'
  },
  {
    category: 'Inpatient & Sterilization',
    icon: ShieldCheck,
    title: 'Sterilization Facility (CSSD)',
    desc: 'Central Sterile Services Department following established sterilization protocols for medical instruments.',
    features: ['Established sterilization protocols', 'Advanced autoclave & processing units', 'Trained sterilization technicians', 'Uncompromising patient safety standards'],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
    duration: 'CSSD Facility'
  },
  {
    category: 'Inpatient & Sterilization',
    icon: BedDouble,
    title: 'Inpatient Facilities',
    desc: 'A comfortable space for recovery with five air-conditioned single rooms, providing privacy and comfort for patients.',
    features: ['Air-conditioned single rooms', 'Comfortable patient beds', 'Dedicated recovery room', 'Ventilator-supported recovery facility'],
    image: patientRoom2Img,
    duration: 'Inpatient Care'
  },
]

const steps = [
  { icon: Phone, title: '1. Clinical Inquiry', desc: 'Contact our clinic reception via phone, email or in person for consultation scheduling.' },
  { icon: Stethoscope, title: '2. Consultation & Exam', desc: 'Thorough examination and detailed symptom discussion by our experienced ENT consultants.' },
  { icon: TestTubes, title: '3. Diagnostic Evaluation', desc: 'Audiometry, endoscopic evaluation, or laboratory tests performed on site as indicated.' },
  { icon: HeartPulse, title: '4. Tailored Treatment', desc: 'Individualised medical therapy, precision surgical procedure, or inpatient recovery care.' },
]

function Services() {
  const [activeTab, setActiveTab] = useState('All Services')
  useScrollReveal()

  const filteredServices = activeTab === 'All Services'
    ? services
    : services.filter(s => s.category === activeTab)

  return (
    <div className="overflow-hidden">
      <PageBanner
        title="Our ENT"
        highlight="Services"
        breadcrumb="Services"
        subtitle="Dedicated specialty clinics, audiology assessment, diagnostic investigations, and advanced surgical facilities"
        badge="Specialised ENT Care"
      />

      {/* ===== SERVICE CATEGORY TABS ===== */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Ear, Nose & Throat Care
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              Comprehensive ENT Services & <span className="text-gradient-primary">Facilities</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Specialised ENT Care | Advanced Diagnostics | Surgical Expertise | Comfortable Inpatient Facilities
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-4 rounded-full text-base font-bold transition-all duration-300 cursor-pointer ${activeTab === cat
                  ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105'
                  : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary border border-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-xs">
                      <Clock size={12} className="text-primary" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="absolute bottom-4 left-6">
                      <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/60 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <service.icon size={22} strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {service.desc}
                      </p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-100">
                      <Link
                        to="/contact"
                        className="w-full py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-bold text-center text-sm shadow-md shadow-primary/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Inquire About Care</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ===== INPATIENT & SURGICAL INFRASTRUCTURE SHOWCASE ===== */}
      <ClinicFacilities />

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Clinical Pathway
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              From Consultation to <span className="text-gradient-primary">Recovery</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              From clinical examination and precise audiology/lab testing to surgery and recovery, essential ENT care is unified in one location
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="reveal text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl glow-primary group-hover:scale-110 transition-transform">
                  <step.icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA WITH WEBGL PRISM BACKGROUND ===== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        {/* Interactive WebGL Prism Shader */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Prism
            animationType="hover"
            hoverStrength={2.2}
            inertia={0.06}
            timeScale={0.4}
            height={3.4}
            baseWidth={5.4}
            scale={3.3}
            hueShift={1.5}
            colorFrequency={1.2}
            noise={0}
            glow={1.2}
            bloom={1}
            transparent={true}
            suspendWhenOffscreen={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/80" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200 mb-6">
            <HelpCircle size={14} className="text-emerald-400" />
            <span>Personalized Clinical Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Need Guidance Choosing a Specialty or Service?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our experienced clinical triage coordinators are available to answer your questions and match you with the right specialist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-2xl transition-all text-base cursor-pointer"
              >
                <HelpCircle size={18} />
                <span>Speak with Care Coordinator</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
