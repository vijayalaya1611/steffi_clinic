import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import {
  Stethoscope, Baby, Heart, TestTubes, Syringe, Ambulance,
  Activity, Bone, Sparkles, ArrowRight,
  CalendarCheck, Building, ClipboardCheck, Pill, CheckCircle,
  Clock, HelpCircle
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Prism from '../components/Prism'
import { useScrollReveal } from '../utils/scrollReveal'

const categories = ['All Services', 'Primary Care', 'Specialized Care', 'Diagnostic & Emergency']

const services = [
  {
    category: 'Primary Care',
    icon: Stethoscope,
    title: 'General Medicine',
    desc: 'Comprehensive preventive care, annual physicals, chronic condition management, and treatment for everyday illnesses.',
    features: ['Routine checkups & physicals', 'Chronic disease management', 'Prescription refills', 'Preventative health advice'],
    color: 'from-teal-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    duration: '30-45 mins'
  },
  {
    category: 'Primary Care',
    icon: Baby,
    title: 'Pediatrics',
    desc: 'Dedicated healthcare for infants, children, and teenagers, covering growth milestones, vaccines, and acute illness care.',
    features: ['Well-child visits', 'Immunization schedules', 'Developmental assessments', 'Adolescent health'],
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop',
    duration: '30 mins'
  },
  {
    category: 'Specialized Care',
    icon: Heart,
    title: "Women's Health",
    desc: 'Holistic reproductive healthcare, prenatal and postnatal support, fertility guidance, and routine screenings.',
    features: ['Annual well-woman exams', 'Prenatal & postnatal care', 'Family planning', 'Menopause management'],
    color: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
    duration: '45 mins'
  },
  {
    category: 'Specialized Care',
    icon: Activity,
    title: 'Cardiology',
    desc: 'Advanced cardiovascular diagnostics, ECG, echocardiography, hypertension care, and heart attack prevention.',
    features: ['Heart health screenings', 'ECG & Echocardiograms', 'Hypertension care', 'Lifestyle counseling'],
    color: 'from-red-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop',
    duration: '60 mins'
  },
  {
    category: 'Specialized Care',
    icon: Bone,
    title: 'Orthopedics',
    desc: 'Care for bone fractures, joint pain, sports injuries, arthritis management, and post-surgery rehabilitation.',
    features: ['Joint pain treatment', 'Sports injury care', 'Fracture management', 'Physical therapy referrals'],
    color: 'from-amber-500 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
    duration: '45 mins'
  },
  {
    category: 'Specialized Care',
    icon: Sparkles,
    title: 'Dermatology',
    desc: 'Expert skin examinations, acne treatments, eczema management, mole checks, and medical cosmetic therapies.',
    features: ['Acne & eczema care', 'Skin cancer screenings', 'Mole evaluations', 'Allergy diagnostics'],
    color: 'from-fuchsia-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1512290900672-1f48d08c5c7d?w=600&h=400&fit=crop',
    duration: '30 mins'
  },
  {
    category: 'Diagnostic & Emergency',
    icon: TestTubes,
    title: 'Laboratory Services',
    desc: 'Comprehensive diagnostic lab testing with same-day results for blood work, urinalysis, cultures, and panels.',
    features: ['Blood tests & panels', 'Rapid strep & flu testing', 'Lipid & glucose panels', 'Pathology services'],
    color: 'from-purple-500 to-violet-600',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    duration: '15 mins'
  },
  {
    category: 'Diagnostic & Emergency',
    icon: Syringe,
    title: 'Vaccinations & Immunizations',
    desc: 'Full spectrum of vaccines for seasonal influenza, childhood immunizations, travel vaccines, and booster shots.',
    features: ['Flu shots', 'Childhood vaccines', 'Travel immunizations', 'Tetanus & boosters'],
    color: 'from-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1632053002928-87e3cf4d88e6?w=600&h=400&fit=crop',
    duration: '15 mins'
  },
  {
    category: 'Diagnostic & Emergency',
    icon: Ambulance,
    title: 'Emergency & Urgent Care',
    desc: 'Immediate, walk-in medical attention for non-life-threatening urgent conditions, minor trauma, and acute illness.',
    features: ['Minor burn & cut treatment', 'Acute infection care', 'Sprains & strains', 'Rapid stabilization'],
    color: 'from-rose-600 to-red-700',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop',
    duration: 'Immediate'
  },
]

const steps = [
  { icon: CalendarCheck, title: '1. Book an Appointment', desc: 'Choose your specialist, date, and preferred time online or over the phone.' },
  { icon: Building, title: '2. Visit Our Center', desc: 'Check in smoothly at our modern reception desk with zero wait time.' },
  { icon: ClipboardCheck, title: '3. Expert Consultation', desc: 'Undergo a detailed examination and discussion with your physician.' },
  { icon: Pill, title: '4. Ongoing Wellness', desc: 'Receive your personalized treatment plan, medication, and follow-up support.' },
]

const insurances = [
  'Blue Cross Blue Shield', 'Aetna', 'Cigna', 'UnitedHealthcare',
  'Humana', 'Kaiser Permanente', 'Medicare', 'Medicaid'
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
        title="Our Clinical"
        highlight="Specialties"
        breadcrumb="Services"
        subtitle="Comprehensive medical care and advanced diagnostic procedures delivered by board-certified specialists"
        badge="Multi-Specialty Clinical Departments"
      />

      {/* ===== SERVICE CATEGORY TABS ===== */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Clinical Specializations
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              Specialized Care for <span className="text-gradient-primary">Every Life Stage</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of clinical departments led by board-certified physicians
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat)
                  toast.info(cat === 'All Services' ? 'Displaying all medical services' : `Browsing ${cat}`, { duration: 1500 })
                }}
                className={`px-8 py-4 rounded-full text-base font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === cat
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
                        to="/appointment"
                        className="w-full py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-bold text-center text-sm shadow-md shadow-primary/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Book Consultation</span>
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

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Seamless Experience
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              How Your <span className="text-gradient-primary">Visit Works</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We've redesigned the patient journey to be fast, stress-free, and centered around you
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

      {/* ===== INSURANCE PARTNERS ===== */}
      <section className="py-32 bg-bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Affordable Care
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              Insurance <span className="text-gradient-primary">Partners</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We work with major insurance providers to make sure you get the care you need with minimal out-of-pocket costs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {insurances.map((ins, i) => (
              <div
                key={i}
                className="reveal bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-premium transition-all duration-300 flex flex-col items-center justify-center cursor-pointer border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary font-black text-2xl">
                  {ins.charAt(0)}
                </div>
                <h4 className="font-bold text-text text-base">{ins}</h4>
                <span className="text-success text-xs font-semibold mt-2 inline-flex items-center gap-1">
                  <CheckCircle size={12} /> In-Network
                </span>
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
