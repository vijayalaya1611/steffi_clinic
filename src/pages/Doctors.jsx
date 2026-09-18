import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import {
  CalendarCheck, Star, Award, GraduationCap, Languages,
  ArrowRight, UserCheck
} from 'lucide-react'
import { Linkedin, Twitter } from '../components/SocialIcons'
import PageBanner from '../components/PageBanner'
import Prism from '../components/Prism'
import { useScrollReveal } from '../utils/scrollReveal'

const specialties = [
  'All Specialists',
  'Primary Care',
  'Pediatrics',
  "Women's Health",
  'Cardiology',
  'Dermatology',
  'Orthopedics'
]

const doctors = [
  {
    name: 'Dr. Sarah Johnson, MD',
    category: 'Primary Care',
    specialty: 'Internal Medicine & Primary Care',
    experience: '15 Years Experience',
    rating: 4.9,
    reviews: 320,
    education: 'Harvard Medical School',
    languages: ['English', 'Spanish'],
    availability: 'Available Today',
    bio: 'Specializing in adult preventive medicine, chronic disease management, and patient-centered lifestyle wellness.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop'
  },
  {
    name: 'Dr. Michael Chen, MD',
    category: 'Pediatrics',
    specialty: 'Pediatric Specialist',
    experience: '12 Years Experience',
    rating: 4.8,
    reviews: 280,
    education: 'Johns Hopkins University',
    languages: ['English', 'Mandarin'],
    availability: 'Available Tomorrow',
    bio: 'Dedicated to compassionate pediatric care, adolescent wellness, childhood allergy treatment, and developmental health.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop'
  },
  {
    name: 'Dr. Emily Rodriguez, MD',
    category: "Women's Health",
    specialty: 'Obstetrics & Gynecology',
    experience: '10 Years Experience',
    rating: 4.9,
    reviews: 410,
    education: 'Stanford University School of Medicine',
    languages: ['English', 'Spanish', 'Portuguese'],
    availability: 'Available Today',
    bio: 'Expert in comprehensive maternal care, reproductive health, preventative screenings, and gentle gynecological wellness.',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&h=600&fit=crop'
  },
  {
    name: 'Dr. James Wilson, MD, FACC',
    category: 'Cardiology',
    specialty: 'Interventional Cardiology',
    experience: '18 Years Experience',
    rating: 5.0,
    reviews: 520,
    education: 'Columbia University Vagelos College',
    languages: ['English'],
    availability: 'Next: Thursday',
    bio: 'Leading cardiologist specializing in preventative heart health, diagnostic echocardiograms, and hypertension management.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=600&fit=crop'
  },
  {
    name: 'Dr. Priya Patel, MD, FAAD',
    category: 'Dermatology',
    specialty: 'Clinical & Cosmetic Dermatology',
    experience: '8 Years Experience',
    rating: 4.7,
    reviews: 190,
    education: 'Yale School of Medicine',
    languages: ['English', 'Hindi', 'Gujarati'],
    availability: 'Available Friday',
    bio: 'Passionate about dermatologic health, advanced eczema treatments, skin cancer prevention, and aesthetic skincare.',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&h=600&fit=crop'
  },
  {
    name: 'Dr. David Kim, MD',
    category: 'Orthopedics',
    specialty: 'Orthopedic Surgery & Sports Medicine',
    experience: '14 Years Experience',
    rating: 4.9,
    reviews: 340,
    education: 'UCLA David Geffen School of Medicine',
    languages: ['English', 'Korean'],
    availability: 'Available Monday',
    bio: 'Specialist in joint preservation, sports injury rehabilitation, fracture care, and minimally invasive treatments.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop'
  }
]

function Doctors() {
  const [activeFilter, setActiveFilter] = useState('All Specialists')
  useScrollReveal()

  const filteredDoctors = activeFilter === 'All Specialists'
    ? doctors
    : doctors.filter(d => d.category === activeFilter)

  return (
    <div className="overflow-hidden">
      <PageBanner
        title="Our Medical"
        highlight="Specialists"
        breadcrumb="Doctors"
        subtitle="Board-certified physicians and surgeons committed to providing exceptional, evidence-based care"
        badge="Accredited Medical Faculty"
      />

      {/* ===== FILTER SECTION ===== */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              World-Class Faculty
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              Meet Our <span className="text-gradient-primary">Physicians</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Every doctor at Steffi Clinic is board-certified, continually trained, and dedicated to your family's health
            </p>
          </div>

          {/* Specialty Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => {
                  setActiveFilter(spec)
                  toast.info(spec === 'All Specialists' ? 'Showing all doctors' : `Filtering: ${spec}`, { duration: 1500 })
                }}
                className={`px-8 py-4 rounded-full text-base font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === spec
                    ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105'
                    : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary border border-gray-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Doctor Cards Grid */}
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
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group border border-slate-200/80 h-full"
                >
                  {/* Photo & Badge Area */}
                  <div className="relative h-80 overflow-hidden bg-slate-100">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Availability Tag */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-700 border border-emerald-200/80 flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{doc.availability}</span>
                    </div>

                    {/* Social links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="bg-white/90 p-2 rounded-xl text-slate-700 hover:bg-primary hover:text-white transition-colors">
                        <Linkedin size={16} />
                      </a>
                      <a href="#" className="bg-white/90 p-2 rounded-xl text-slate-700 hover:bg-primary hover:text-white transition-colors">
                        <Twitter size={16} />
                      </a>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1 bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md text-xs font-black">
                          <Star size={12} className="fill-slate-950" />
                          <span>{doc.rating}</span>
                        </div>
                        <span className="text-xs text-white/90 font-medium">({doc.reviews} reviews)</span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight">{doc.name}</h3>
                      <p className="text-teal-300 text-xs font-semibold">{doc.specialty}</p>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {doc.bio}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
                        <div className="flex items-center gap-2.5">
                          <GraduationCap size={15} className="text-primary shrink-0" />
                          <span>{doc.education}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Award size={15} className="text-primary shrink-0" />
                          <span>{doc.experience}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Languages size={15} className="text-primary shrink-0" />
                          <span>Languages: {doc.languages.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        to="/appointment"
                        className="w-full py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-bold text-center text-sm shadow-md shadow-primary/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <CalendarCheck size={16} />
                        <span>Schedule Consultation</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ===== JOIN OUR MEDICAL TEAM BANNER WITH WEBGL PRISM ===== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        {/* Dynamic 3D WebGL Prism Motion Shader */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Prism
            animationType="3drotate"
            timeScale={0.45}
            height={3.3}
            baseWidth={5.3}
            scale={3.3}
            hueShift={3.8}
            colorFrequency={1.1}
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
            <UserCheck size={14} className="text-emerald-400" />
            <span>Careers at Steffi Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Join Our Team of Medical Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We are always seeking passionate board-certified physicians, nurses, and clinical staff to provide exceptional healthcare to our communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-2xl transition-all text-base cursor-pointer"
              >
                <span>Explore Career Opportunities</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doctors
