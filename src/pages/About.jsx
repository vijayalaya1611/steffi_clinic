import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUpNumber from '../components/CountUpNumber'
import { useInView } from 'react-intersection-observer'
import {
  Target, Heart, Building, MapPin, Wifi, FileText,
  ArrowRight, Shield, Award as Trophy, Activity, HeartPulse
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { useScrollReveal } from '../utils/scrollReveal'

const milestones = [
  { year: '2009', title: 'Clinic Founded', desc: 'Steffi Clinic opened its doors with a mission to provide accessible, high-quality family healthcare.', icon: Building },
  { year: '2012', title: 'Second Location', desc: 'Expanded to serve more families in the metropolitan area with state-of-the-art facilities.', icon: MapPin },
  { year: '2015', title: 'In-House Laboratory', desc: 'Added advanced diagnostic capabilities for faster, more accurate test results.', icon: FileText },
  { year: '2018', title: 'Digital Health Records', desc: 'Implemented comprehensive EHR system for seamless patient care coordination.', icon: Activity },
  { year: '2021', title: 'Telemedicine Platform', desc: 'Launched virtual consultation services, connecting patients with doctors anywhere.', icon: Wifi },
  { year: '2024', title: '10,000+ Families', desc: 'Proudly serving over 10,000 families with a 98% patient satisfaction rate.', icon: HeartPulse },
]

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    desc: 'We treat every patient like family, with empathy, respect, and personalized attention.',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    icon: Shield,
    title: 'Medical Excellence',
    desc: 'Our board-certified physicians maintain the highest standards of clinical practice.',
    color: 'from-accent to-accent-light'
  },
  {
    icon: Target,
    title: 'Patient-Centered',
    desc: 'Your health goals and preferences guide every diagnosis and treatment plan.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Trophy,
    title: 'Innovation',
    desc: 'We invest in advanced technology and modern medical practices for better outcomes.',
    color: 'from-emerald-500 to-teal-600'
  },
]

const leadership = [
  {
    name: 'Dr. Elizabeth Steffi',
    role: 'Founder & Chief Medical Officer',
    specialty: 'Internal Medicine',
    bio: '20+ years of clinical experience dedicated to transforming community healthcare.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Director of Pediatrics',
    specialty: 'Pediatric Medicine',
    bio: 'Renowned pediatrician passionate about early childhood development and preventative health.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
  },
  {
    name: 'Dr. Sarah Johnson',
    role: 'Head of Primary Care',
    specialty: 'Family Medicine',
    bio: 'Expert in chronic disease management and holistic wellness approaches.',
    image: 'https://images.unsplash.com/photo-1594824813583-149fd71b058c?w=400&h=400&fit=crop'
  },
]

function About() {
  useScrollReveal()
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div className="overflow-hidden">
      <PageBanner
        title="About"
        highlight="Steffi Clinic"
        breadcrumb="About Us"
        subtitle="Dedicated to excellence in family healthcare and compassionate clinical practice since 2009"
        badge="Established Healthcare Excellence"
      />

      {/* ===== STORY SECTION ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Our Story
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-8 leading-tight">
              A Legacy of <span className="text-gradient-primary">Compassionate</span> Care
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-light">
              <p>
                Founded in 2009 by Dr. Elizabeth Steffi, our clinic was built on a simple yet powerful belief:
                everyone deserves access to world-class, compassionate healthcare in a warm and welcoming environment.
              </p>
              <p>
                What started as a small family practice has grown into a comprehensive healthcare center with over
                50 board-certified specialists, state-of-the-art diagnostic facilities, and a dedicated support team
                serving more than 10,000 families.
              </p>
              <p>
                We blend modern medicine with a human touch, taking the time to listen, understand, and create
                personalized treatment plans that address the root causes of health issues, not just the symptoms.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100" ref={statsRef}>
              <div>
                <div className="text-4xl font-black text-primary">
                  {statsInView && <CountUpNumber end={15} duration={2.5} suffix="+" />}
                </div>
                <div className="text-text-tertiary text-sm">Years of Trust</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">
                  {statsInView && <CountUpNumber end={50} duration={2.5} suffix="+" />}
                </div>
                <div className="text-text-tertiary text-sm">Doctors</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">
                  {statsInView && <CountUpNumber end={10} duration={2.5} suffix="K+" />}
                </div>
                <div className="text-text-tertiary text-sm">Patients</div>
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=1000&fit=crop"
                alt="Clinic Facility"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="glass-light p-6 rounded-2xl">
                  <div className="text-2xl font-bold text-text mb-1">State-of-the-Art Facility</div>
                  <p className="text-text-secondary text-sm">Equipped with latest medical diagnostic technology</p>
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

      {/* ===== LEADERSHIP TEAM ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Medical Leadership
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-text mb-6 tracking-tight">
              Meet Our <span className="text-gradient-primary">Directors</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Experienced healthcare leaders dedicated to maintaining clinical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <div key={i} className="reveal bg-bg rounded-3xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500 group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                      {leader.specialty}
                    </span>
                    <h3 className="text-2xl font-bold">{leader.name}</h3>
                    <p className="text-white/80 text-sm">{leader.role}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-text-secondary leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-32 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-3 inline-block">
              Our Journey
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
              15 Years of <span className="text-gradient-accent">Milestones</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Key moments that shaped our commitment to community healthcare
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-accent hidden md:block" />

            {milestones.map((m, i) => (
              <div
                key={i}
                className={`reveal flex items-center mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-16`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                  <div className="glass-dark rounded-3xl p-8 inline-block hover:bg-white/10 transition-all duration-300">
                    <span className="text-accent font-black text-2xl mb-2 block">{m.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-white/70 leading-relaxed max-w-md">{m.desc}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-xl shrink-0 z-10 my-4 md:my-0 glow-primary">
                  <m.icon size={26} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-primary-dark to-slate-900 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200 mb-6">
            <HeartPulse size={14} className="text-emerald-400" />
            <span>Accepting New Patients & Comprehensive Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Become Part of Our Healthcare Family
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the difference that compassionate, evidence-based healthcare makes in your life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/appointment">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-2xl transition-all text-base cursor-pointer"
              >
                <span>Book Your First Appointment</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
