import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import CountUpNumber from '../components/CountUpNumber'
import { toast } from 'sonner'
import Prism from '../components/Prism'

import {
  HeartPulse, Stethoscope, Baby, Heart, FlaskConical, Syringe, Ambulance,
  Award, Clock, ShieldCheck, Users, Phone, ArrowRight, CheckCircle2,
  Star, Calendar, TrendingUp, UserCheck, Activity,
  ChevronRight, Search
} from 'lucide-react'

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence', icon: Award, sub: 'Serving communities since 2009' },
  { value: 50, suffix: '+', label: 'Medical Specialists', icon: Users, sub: 'Board-certified physicians' },
  { value: 25000, suffix: '+', label: 'Patients Treated', icon: HeartPulse, sub: 'Trusted by families' },
  { value: 99, suffix: '%', label: 'Positive Outcomes', icon: TrendingUp, sub: 'Verified satisfaction rate' }
]

const services = [
  {
    id: 'general-medicine',
    title: 'General & Family Medicine',
    category: 'Primary Care',
    desc: 'Comprehensive health assessments, preventive wellness plans, and chronic disease management for all ages.',
    icon: Stethoscope,
    badge: 'Popular',
    procedures: ['Annual Physicals', 'Preventive Screenings', 'Chronic Disease Care'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
  },
  {
    id: 'pediatrics',
    title: 'Pediatric Care',
    category: 'Child Health',
    desc: 'Gentle, expert healthcare for infants, children, and teenagers in a friendly, supportive environment.',
    icon: Baby,
    badge: 'Specialized',
    procedures: ['Newborn Care', 'Developmental Milestones', 'Child Immunizations'],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop'
  },
  {
    id: 'womens-health',
    title: "Women's Health & Maternity",
    category: 'Specialized',
    desc: 'Personalized gynecological care, prenatal care, fertility counseling, and postpartum support.',
    icon: Heart,
    badge: 'Dedicated',
    procedures: ['Prenatal Care', 'Routine Gynecologic Exams', 'Hormonal Wellness'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop'
  },
  {
    id: 'laboratory',
    title: 'Advanced Diagnostic Lab',
    category: 'Diagnostics',
    desc: 'State-of-the-art pathology, fast-turnaround blood tests, and high-precision diagnostic imaging.',
    icon: FlaskConical,
    badge: 'Fast Results',
    procedures: ['Comprehensive Blood Panels', 'Rapid Pathology', 'Same-Day Reports'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop'
  },
  {
    id: 'vaccinations',
    title: 'Immunizations & Vaccines',
    category: 'Preventive',
    desc: 'Full CDC-compliant adult, travel, and pediatric vaccination regimens administered with gentle care.',
    icon: Syringe,
    badge: 'All Ages',
    procedures: ['Seasonal Flu Shots', 'Travel Vaccinations', 'Booster Doses'],
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&h=400&fit=crop'
  },
  {
    id: 'emergency',
    title: '24/7 Urgent Medical Triage',
    category: 'Emergency',
    desc: 'Rapid medical response for acute conditions, minor trauma, injuries, and sudden illnesses.',
    icon: Ambulance,
    badge: 'Immediate Care',
    procedures: ['Minor Trauma & Sutures', 'Acute Infection Care', 'Rapid Stabilization'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop'
  }
]

const featuredDoctors = [
  {
    name: 'Dr. Sarah Johnson, MD',
    specialty: 'Internal Medicine & Primary Care',
    experience: '15 Years Experience',
    education: 'Harvard Medical School',
    rating: 4.9,
    reviews: 320,
    availability: 'Available Today',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop'
  },
  {
    name: 'Dr. Michael Chen, MD',
    specialty: 'Pediatrics & Adolescent Care',
    experience: '12 Years Experience',
    education: 'Johns Hopkins University',
    rating: 4.8,
    reviews: 280,
    availability: 'Available Tomorrow',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop'
  },
  {
    name: 'Dr. Emily Rodriguez, MD',
    specialty: 'Obstetrics & Gynecology',
    experience: '10 Years Experience',
    education: 'Stanford University',
    rating: 4.9,
    reviews: 410,
    availability: 'Available Today',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&h=600&fit=crop'
  }
]

const features = [
  {
    icon: ShieldCheck,
    title: 'Board-Certified Specialists',
    desc: 'Over 50 extensively trained doctors and surgeons maintaining the highest clinical standards.'
  },
  {
    icon: Clock,
    title: 'Zero-Wait Same-Day Care',
    desc: 'Convenient appointment scheduling with minimal waiting times and 24/7 urgent access.'
  },
  {
    icon: FlaskConical,
    title: 'Modern Diagnostic Center',
    desc: 'In-house diagnostic laboratory and imaging technology delivering same-day accurate results.'
  },
  {
    icon: UserCheck,
    title: 'Patient-First Experience',
    desc: 'Personalized treatment plans with a 99% patient satisfaction and recovery track record.'
  }
]

const testimonials = [
  {
    name: 'Senthil Nathan & Kavitha',
    role: 'Family Medicine & Diabetes Care • Chennai',
    text: 'Steffi Clinic has completely changed how our family approaches healthcare. The doctors listen patiently without any rush, thoroughly explain diagnoses and test reports, and provide compassionate treatment plans.',
    rating: 5,
    department: 'General Medicine',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
  },
  {
    name: 'Priya Natarajan',
    role: 'Pediatric Care Parent • Coimbatore',
    text: 'The pediatric team at Steffi Clinic is exceptional. My 4-year-old daughter used to be terrified of clinic visits, but their gentle, friendly approach and warm care made vaccination completely tear-free.',
    rating: 5,
    department: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop'
  },
  {
    name: 'Anandhakrishnan R.',
    role: 'Senior Cardiac & Preventive Health • Madurai',
    text: 'From master health checkups to cardiac monitoring, the doctors and nursing staff at Steffi Clinic provide first-class service. Clear explanations, prompt lab reports, and genuine respect for senior citizens.',
    rating: 5,
    department: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
  }
]

function Home() {
  const navigate = useNavigate()
  const [selectedDept, setSelectedDept] = useState('General Medicine')
  const [selectedDoctor, setSelectedDoctor] = useState('Any Available Specialist')
  const [selectedDate, setSelectedDate] = useState('Today')
  const [activeCategory, setActiveCategory] = useState('All')
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.25 })

  const handleQuickBook = (e) => {
    e.preventDefault()
    toast.success(`Booking consultation with ${selectedDept}...`, { duration: 2500 })
    navigate('/appointment')
  }

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
                <span>Top-Rated Healthcare & Medical Center 2026</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 flex items-center gap-1">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  4.9 (12k+ reviews)
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6"
              >
                Compassionate Care,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-600 to-accent">
                  Advanced Medicine
                </span>{' '}
                for Your Whole Family.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
              >
                Experience world-class healthcare with board-certified physicians, state-of-the-art diagnostic technology, and same-day consultations tailored to your comfort and wellbeing.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <Link to="/appointment">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all text-base cursor-pointer"
                  >
                    <Calendar size={18} />
                    <span>Book an Appointment</span>
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
                    <span>Meet Our Specialists</span>
                  </motion.button>
                </Link>

                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-primary transition-colors py-2 px-3"
                >
                  <Phone size={16} className="text-emerald-600" />
                  <span>Call: (555) 123-4567</span>
                </a>
              </motion.div>

              {/* Social Proof & Reassurance */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-6"
              >
                {/* Overlapping Doctor/Patient Avatars */}
                <div className="flex items-center">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
                      alt="Doctor"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop"
                      alt="Doctor"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                      src="https://images.unsplash.com/photo-1594824813583-149fd71b058c?w=100&h=100&fit=crop"
                      alt="Doctor"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                      alt="Patient"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-slate-800">
                      4.9/5 <span className="font-normal text-slate-500">(12,000+ happy patients)</span>
                    </p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    Same-Day Visits
                  </span>
                  <span className="flex items-center gap-1.5 text-primary-dark bg-primary-50 px-2.5 py-1 rounded-md">
                    <CheckCircle2 size={13} className="text-primary" />
                    50+ Specialists
                  </span>
                  <span className="flex items-center gap-1.5 text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md">
                    <CheckCircle2 size={13} className="text-sky-600" />
                    Insurance Accepted
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Composition Column */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                {/* Main Hero Doctor Photo Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=950&fit=crop"
                    alt="Doctor with patient at Steffi Clinic"
                    className="w-full h-[460px] sm:h-[500px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white mb-1.5 border border-white/30">
                      Lead Clinical Team
                    </span>
                    <h3 className="text-lg font-bold">Personalized Medical Attention</h3>
                    <p className="text-xs text-white/80">Every patient receives dedicated care and attentive listening.</p>
                  </div>
                </div>

                {/* Floating Badge 1: 24/7 Support (Top Right) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-xs font-bold text-slate-900">24/7 Available</span>
                    </div>
                    <p className="text-[11px] text-slate-500">Emergency & Urgent Care</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Recovery Outcome (Bottom Left) */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 z-20"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center shadow-md shadow-primary/20">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-slate-900 leading-none mb-1">
                      99.4%
                    </div>
                    <p className="text-xs font-semibold text-slate-600">Patient Recovery Rate</p>
                    <p className="text-[10px] text-emerald-600 font-medium">★ Top-Tier Clinical Care</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK APPOINTMENT & SPECIALTY FINDER BAR ===== */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/8 border border-slate-200/90 p-5 sm:p-6 lg:p-7">
          <div className="flex items-center gap-2.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary">
            <Search size={14} />
            <span>Fast Appointment Scheduler & Specialist Finder</span>
          </div>

          <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Medical Specialty
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              >
                <option value="General Medicine">General & Family Medicine</option>
                <option value="Pediatrics">Pediatrics & Child Care</option>
                <option value="Women's Health">Women's Health & Gynecology</option>
                <option value="Cardiology">Cardiology & Heart Health</option>
                <option value="Laboratory">Diagnostic Pathology & Lab</option>
                <option value="Urgent Care">Urgent Medical Triage</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Physician Preference
              </label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              >
                <option value="Any Available Specialist">Any Available Specialist</option>
                <option value="Dr. Sarah Johnson, MD">Dr. Sarah Johnson, MD (Primary)</option>
                <option value="Dr. Michael Chen, MD">Dr. Michael Chen, MD (Pediatrics)</option>
                <option value="Dr. Emily Rodriguez, MD">Dr. Emily Rodriguez, MD (OB/GYN)</option>
                <option value="Dr. David Kim, MD">Dr. David Kim, MD (Cardiology)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Preferred Day
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              >
                <option value="Today">Today (Same-Day Urgent Slot)</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This Week">Within This Week</option>
                <option value="Next Week">Next Week</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white py-3 px-5 rounded-xl font-bold shadow-md shadow-primary/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={18} />
                <span>Check Availability</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== STATS & CREDIBILITY STRIP ===== */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/60" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                  {statsInView && (
                    <CountUpNumber
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      separator=","
                    />
                  )}
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-0.5">{stat.label}</h4>
                <p className="text-xs text-slate-500 font-medium">{stat.sub}</p>
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
              Clinical Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Comprehensive Care Tailored to Your Family
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From routine wellness checkups to specialized acute treatments, our multi-disciplinary departments deliver evidence-based clinical excellence.
            </p>

            {/* Specialty Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {['All', 'Primary Care', 'Child Health', 'Specialized', 'Diagnostics', 'Emergency'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
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
                      to="/appointment"
                      className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    >
                      <span>Book Consultation</span>
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
                <span>View All 12 Medical Departments</span>
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
                Why Patients Trust Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                Setting the Standard in Modern Healthcare
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                At Steffi Clinic, medical quality is defined by accurate diagnostics, empathetic bedside manner, and modern facilities designed to reduce patient anxiety and deliver optimal health outcomes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Patient-First Atmosphere</h4>
                    <p className="text-xs text-slate-500">Unhurried consultations where doctors listen and address all questions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct Doctor Follow-Ups</h4>
                    <p className="text-xs text-slate-500">Secure digital messaging and rapid access to lab results and test reviews.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Insurance & Financial Transparency</h4>
                    <p className="text-xs text-slate-500">In-network with all major health insurance providers with clear billing.</p>
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

      {/* ===== FEATURED DOCTORS PREVIEW ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-primary font-bold text-xs uppercase tracking-wider mb-3">
                Expert Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Meet Our Lead Physicians
              </h2>
            </div>
            <Link
              to="/doctors"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark"
            >
              <span>View All 50+ Medical Staff</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDoctors.map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-3 py-1 rounded-full text-[11px] font-bold shadow-xs">
                    {doc.availability}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-teal-600">{doc.education}</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-slate-800">
                        <Star size={13} className="text-amber-400 fill-amber-400" />
                        {doc.rating} ({doc.reviews})
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                    <p className="text-xs font-medium text-slate-500 mb-4">{doc.specialty}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link to="/appointment">
                      <button className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-primary hover:text-white text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer">
                        <Calendar size={14} />
                        <span>Schedule with {doc.name.split(' ')[1]}</span>
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
              Trusted by Over 25,000 Families
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Real stories from individuals and parents who depend on Steffi Clinic for dependable healthcare.
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

      {/* ===== URGENT CARE & APPOINTMENT CALL TO ACTION WITH WEBGL PRISM ===== */}
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
            <span>Accepting New Patients & Same-Day Emergency Consultations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Your Health Is Our Priority. Schedule a Visit Today.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take proactive care of your wellbeing. Book online in 60 seconds or speak directly with our clinical triage nurse for urgent medical concerns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/appointment">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-2xl transition-all text-base cursor-pointer"
              >
                <Calendar size={20} />
                <span>Book an Appointment Online</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <a
              href="tel:+15551234567"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-xl font-bold border border-white/20 transition-all text-base backdrop-blur-md"
            >
              <Phone size={18} className="text-emerald-400" />
              <span>Emergency Call: +1 (555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

