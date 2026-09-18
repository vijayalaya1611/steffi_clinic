import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { toast } from 'sonner'
import {
  Stethoscope, Baby, Heart, Activity, Sparkles, Bone,
  CheckCircle2, ArrowRight, ArrowLeft, CalendarCheck,
  Clock, CheckCheck
} from 'lucide-react'
import PageBanner from '../components/PageBanner'

const departments = [
  {
    id: 1,
    name: 'General Medicine',
    sub: 'Primary & Chronic Care',
    icon: Stethoscope,
    badge: 'Popular',
    iconBg: 'bg-teal-50 text-teal-600 border-teal-200/80',
    hoverBg: 'group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 group-hover:shadow-teal-500/25',
    pillBg: 'bg-teal-50 text-teal-700'
  },
  {
    id: 2,
    name: 'Pediatrics',
    sub: 'Newborn & Child Health',
    icon: Baby,
    badge: 'Specialized',
    iconBg: 'bg-sky-50 text-sky-600 border-sky-200/80',
    hoverBg: 'group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 group-hover:shadow-sky-500/25',
    pillBg: 'bg-sky-50 text-sky-700'
  },
  {
    id: 3,
    name: "Women's Health",
    sub: 'Maternity & Gynecology',
    icon: Heart,
    badge: 'Comprehensive',
    iconBg: 'bg-rose-50 text-rose-600 border-rose-200/80',
    hoverBg: 'group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 group-hover:shadow-rose-500/25',
    pillBg: 'bg-rose-50 text-rose-700'
  },
  {
    id: 4,
    name: 'Cardiology',
    sub: 'Cardiac & Vascular Health',
    icon: Activity,
    badge: 'Advanced',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    hoverBg: 'group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-emerald-500/25',
    pillBg: 'bg-emerald-50 text-emerald-700'
  },
  {
    id: 5,
    name: 'Dermatology',
    sub: 'Skin & Aesthetic Medicine',
    icon: Sparkles,
    badge: 'Aesthetic',
    iconBg: 'bg-violet-50 text-violet-600 border-violet-200/80',
    hoverBg: 'group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 group-hover:shadow-violet-500/25',
    pillBg: 'bg-violet-50 text-violet-700'
  },
  {
    id: 6,
    name: 'Orthopedics',
    sub: 'Joints, Spine & Trauma',
    icon: Bone,
    badge: 'Surgical',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
    hoverBg: 'group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 group-hover:shadow-amber-500/25',
    pillBg: 'bg-amber-50 text-amber-700'
  },
]

const doctorsByDept = {
  1: [
    { id: 1, name: 'Dr. Sarah Johnson, MD', exp: '15 years experience', specialty: 'Family Medicine', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop' },
    { id: 2, name: 'Dr. Robert Lee, MD', exp: '10 years experience', specialty: 'Internal Medicine', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop' },
  ],
  2: [{ id: 3, name: 'Dr. Michael Chen, MD', exp: '12 years experience', specialty: 'Pediatric Care', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop' }],
  3: [{ id: 4, name: 'Dr. Emily Rodriguez, MD', exp: '10 years experience', specialty: "Obstetrics & Gynecology", image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop' }],
  4: [{ id: 5, name: 'Dr. James Wilson, MD', exp: '18 years experience', specialty: 'Cardiovascular Medicine', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop' }],
  5: [{ id: 6, name: 'Dr. Priya Patel, MD', exp: '8 years experience', specialty: 'Dermatology & Skin', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop' }],
  6: [{ id: 7, name: 'Dr. David Kim, MD', exp: '14 years experience', specialty: 'Orthopedic Surgery', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop' }],
}

const timeSlots = {
  morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
  afternoon: ['01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'],
  evening: ['05:00 PM', '06:00 PM', '07:00 PM'],
}

function Appointment() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    department: null,
    doctor: null,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    dob: '',
    reason: '',
    firstVisit: '',
  })

  const nextStep = () => setStep(s => Math.min(s + 1, 5))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const handleSubmit = () => {
    setStep(5)
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    })
    toast.success('Appointment booked successfully! Confirmation email sent.', {
      duration: 5000,
      position: 'top-center'
    })
  }

  const progress = (step / 5) * 100

  return (
    <div className="overflow-hidden min-h-screen bg-bg">
      <PageBanner
        title="Book An"
        highlight="Appointment"
        breadcrumb="Appointment"
        subtitle="Schedule your medical consultation with our board-certified clinical team in minutes"
        badge="Online Patient Scheduling"
      />

      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-24 z-30 shadow-xs backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-600">
            {['Department', 'Doctor', 'Date & Time', 'Details', 'Confirm'].map((label, i) => (
              <div key={i} className={`flex items-center gap-2 transition-colors ${step > i + 1 ? 'text-primary' : step === i + 1 ? 'text-primary font-extrabold' : 'text-slate-400'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step > i + 1 ? 'bg-primary text-white shadow-md shadow-primary/25' : step === i + 1 ? 'bg-primary text-white shadow-md shadow-primary/25' : 'bg-slate-100 text-slate-500'}`}>
                  {step > i + 1 ? <CheckCheck size={15} /> : i + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-primary via-primary-light to-accent rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          {/* Step 1: Department */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                  Step 1 of 5
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Select Medical Department</h2>
                <p className="text-slate-600 text-sm sm:text-base">Choose the specialized clinical division for your upcoming consultation</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept) => (
                  <motion.div
                    key={dept.id}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setFormData({ ...formData, department: dept })
                      nextStep()
                      toast.info(`Selected ${dept.name}`, { duration: 1500 })
                    }}
                    className={`bg-white rounded-2xl p-7 text-center cursor-pointer transition-all duration-300 border flex flex-col items-center justify-between group shadow-xs hover:shadow-xl ${
                      formData.department?.id === dept.id
                        ? 'border-primary ring-2 ring-primary/20 shadow-lg'
                        : 'border-slate-200/90 hover:border-primary/50'
                    }`}
                  >
                    <div className="w-full flex justify-end mb-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${dept.pillBg}`}>
                        {dept.badge}
                      </span>
                    </div>

                    <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-4 transition-all duration-300 shadow-xs ${dept.iconBg} ${dept.hoverBg} group-hover:scale-105 group-hover:shadow-md`}>
                      <dept.icon size={28} strokeWidth={2} />
                    </div>

                    <div className="mb-4">
                      <h3 className="font-extrabold text-slate-900 text-lg mb-1 group-hover:text-primary transition-colors">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{dept.sub}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform">
                      <span>Select Specialty</span>
                      <ArrowRight size={13} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Doctor */}
          {step === 2 && formData.department && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                  Step 2 of 5
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Choose Your Physician</h2>
                <p className="text-slate-600 text-sm sm:text-base">Specialists available in {formData.department.name}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {doctorsByDept[formData.department.id].map((doc) => (
                  <motion.div
                    key={doc.id}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setFormData({ ...formData, doctor: doc })
                      nextStep()
                      toast.info(`Selected ${doc.name}`, { duration: 1500 })
                    }}
                    className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border flex items-center gap-5 group shadow-xs hover:shadow-lg ${
                      formData.doctor?.id === doc.id
                        ? 'border-primary ring-2 ring-primary/20 shadow-md'
                        : 'border-slate-200/90 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-teal-100 shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-teal-600">{doc.specialty}</span>
                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Available Today
                        </span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-lg mb-0.5 group-hover:text-primary transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-slate-500">{doc.exp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={prevStep}
                className="px-6 py-3 border border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-2 text-sm"
              >
                <ArrowLeft size={16} /> Back to Departments
              </button>
            </motion.div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-black text-text mb-3">3. Pick Date & Time</h2>
              <p className="text-text-secondary text-lg mb-10">Select your preferred slot with {formData.doctor?.name}</p>

              <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-100 shadow-sm">
                <label className="block text-base font-black text-text mb-3">Select Appointment Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition font-bold text-lg"
                />
              </div>

              {formData.date && (
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-10">
                  <label className="block text-base font-black text-text mb-6">Select Available Time Slot</label>
                  {Object.entries(timeSlots).map(([period, slots]) => (
                    <div key={period} className="mb-6 last:mb-0">
                      <p className="text-xs font-black text-text-tertiary uppercase tracking-wider mb-3">{period}</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {slots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => {
                              setFormData({ ...formData, time: slot })
                              toast.success(`Selected time: ${slot}`, { duration: 1000 })
                            }}
                            className={`py-3.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${formData.time === slot ? 'bg-primary text-white shadow-md shadow-primary/25 scale-102' : 'bg-slate-50 text-slate-700 hover:bg-teal-50 hover:text-primary border border-slate-200'}`}
                          >
                            <Clock size={14} />
                            <span>{slot}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-4">
                <button onClick={prevStep} className="px-6 py-3 border border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-2 text-sm">
                  <ArrowLeft size={16} /> Back
                </button>
                {formData.date && formData.time && (
                  <button onClick={nextStep} className="flex-1 bg-gradient-to-r from-primary to-primary-light text-white py-3.5 px-6 rounded-xl font-bold hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base">
                    <span>Continue to Patient Details</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 4: Patient Details */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">4. Patient Information</h2>
              <p className="text-slate-600 text-sm sm:text-base mb-10">Please provide your contact details for booking confirmation</p>

              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs space-y-6 mb-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Legal Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition font-medium text-sm text-slate-800"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={e => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition font-medium text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition font-medium text-sm text-slate-800"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition font-medium text-sm text-slate-800"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Reason for Visit & Symptoms *</label>
                  <textarea
                    rows={4}
                    value={formData.reason}
                    onChange={e => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition resize-none font-medium text-sm text-slate-800"
                    placeholder="Briefly describe your symptoms or reason for visit..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Is this your first time visiting Steffi Clinic? *</label>
                  <div className="flex gap-6">
                    {['Yes, first visit', 'No, returning patient'].map((option) => (
                      <label key={option} className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="radio"
                          name="firstVisit"
                          value={option}
                          checked={formData.firstVisit === option}
                          onChange={e => setFormData({ ...formData, firstVisit: e.target.value })}
                          className="w-4 h-4 text-primary focus:ring-primary cursor-pointer"
                        />
                        <span className="text-sm font-semibold text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={prevStep} className="px-6 py-3 border border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-2 text-sm">
                  <ArrowLeft size={16} /> Back
                </button>
                {formData.name && formData.email && formData.phone && formData.reason && formData.firstVisit && (
                  <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-primary to-primary-light text-white py-3.5 px-6 rounded-xl font-bold hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 text-base shadow-lg shadow-primary/25">
                    <span>Confirm & Book Appointment</span>
                    <CalendarCheck size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 size={44} className="text-emerald-500" />
              </div>

              <h2 className="text-5xl font-black text-text mb-4">Appointment Confirmed!</h2>
              <p className="text-text-secondary text-lg mb-10">
                We've sent full details & digital pass to <span className="font-bold text-primary">{formData.email}</span>
              </p>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl text-left mb-10 space-y-4">
                <h3 className="font-black text-text text-center mb-6 text-2xl border-b pb-4">Appointment Summary</h3>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-text-secondary font-medium">Department:</span>
                  <span className="font-bold text-text">{formData.department?.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-text-secondary font-medium">Doctor:</span>
                  <span className="font-bold text-text">{formData.doctor?.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-text-secondary font-medium">Date:</span>
                  <span className="font-bold text-text">{formData.date}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-text-secondary font-medium">Time:</span>
                  <span className="font-bold text-text">{formData.time}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-text-secondary font-medium">Patient:</span>
                  <span className="font-bold text-text">{formData.name}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <button className="px-10 py-5 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl font-black hover:shadow-xl transition-all cursor-pointer text-base">
                    Return to Home
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setStep(1)
                    setFormData({ department: null, doctor: null, date: '', time: '', name: '', email: '', phone: '', dob: '', reason: '', firstVisit: '' })
                  }}
                  className="px-10 py-5 border-2 border-gray-300 rounded-2xl font-black text-text hover:bg-gray-50 transition-colors cursor-pointer text-base"
                >
                  Book Another Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Appointment
