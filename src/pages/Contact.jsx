import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { stagger, scaleIn } from '../utils/animations'

const contactInfo = [
  { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', sub: 'Mon-Sat, 8AM-8PM', color: 'from-teal-500 to-cyan-500' },
  { icon: Mail, title: 'Email', value: 'info@stefficlinic.com', sub: 'We reply within 24 hours', color: 'from-sky-500 to-blue-600' },
  { icon: MapPin, title: 'Address', value: '123 Healthcare Ave', sub: 'Medical District, NY 10001', color: 'from-primary to-teal-700' },
]

const hours = [
  { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
  { day: 'Sunday', time: 'Emergency Only' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      toast.error('Please fill in all required fields correctly')
      return
    }
    setErrors({})
    setSubmitted(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    toast.success('Thank you! Your message has been sent to our medical team.', {
      duration: 5000,
      position: 'top-center'
    })
  }

  return (
    <div className="overflow-hidden">
      <PageBanner
        title="Contact"
        highlight="Our Clinical Team"
        breadcrumb="Contact"
        subtitle="We're here to assist you. Reach out to schedule visits or speak with our care coordinators."
        badge="Patient Inquiries & Support"
      />

      {/* Contact Cards */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="bg-white rounded-2xl p-7 shadow-md shadow-slate-900/5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 h-full group"
            >
              <div className="w-14 h-14 bg-teal-50/90 text-primary border border-teal-200/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xs group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <info.icon size={26} strokeWidth={2.2} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{info.title}</h3>
              <p className="text-primary font-bold text-base">{info.value}</p>
              <p className="text-slate-500 text-xs mt-1 font-medium">{info.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
          >
            <h2 className="text-3xl font-black text-text mb-2">Send Us a Message</h2>
            <p className="text-text-light text-sm mb-8">Fill out the form below and we'll get back to you promptly.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-600 mb-6">Thank you for reaching out. We'll respond within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="text-primary font-bold text-sm cursor-pointer hover:underline"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-5 py-3.5 rounded-2xl border ${errors.name ? 'border-red-400 bg-red-50/30' : 'border-gray-200'} focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-sm`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text mb-2">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-5 py-3.5 rounded-2xl border ${errors.email ? 'border-red-400 bg-red-50/30' : 'border-gray-200'} focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-sm`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text mb-2">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-sm bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Appointment</option>
                      <option value="feedback">Feedback</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Message *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-5 py-3.5 rounded-2xl border ${errors.message ? 'border-red-400 bg-red-50/30' : 'border-gray-200'} focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition text-sm resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Map + Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-3xl h-80 relative overflow-hidden border border-primary/10 shadow-sm flex items-center justify-center">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto shadow-xl glow-primary">
                    <MapPin size={32} className="text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-black text-text mt-4">Steffi Clinic</h3>
                <p className="text-text-light text-sm mt-1">123 Healthcare Ave, Medical District, NY</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-4 hover:underline"
                >
                  View on Google Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <Clock size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-black text-text">Working Hours</h3>
              </div>
              <div className="space-y-4">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
                    <span className="text-text font-medium">{h.day}</span>
                    <span className={`text-sm font-bold ${h.time === 'Emergency Only' ? 'text-accent' : 'text-primary'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-accent/10 rounded-2xl p-4 flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-accent text-sm font-bold">Emergency services available 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
