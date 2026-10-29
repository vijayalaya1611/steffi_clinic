import { motion } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink,
  ShieldCheck, Stethoscope, BedDouble, Sparkles, Building, Users
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { stagger, scaleIn } from '../utils/animations'

import clinicExteriorImg from '../assets/clinic/clinic_exterior.webp'
import receptionImg from '../assets/clinic/reception.webp'
import waitingArea1Img from '../assets/clinic/waiting_area1.webp'
import patientRoom2Img from '../assets/clinic/patient_room_2.webp'

const contactInfo = [
  {
    icon: Phone,
    title: 'Clinic Phone',
    value: '+91 6379051789',
    sub: 'Consultation & Inpatient Support',
    color: 'from-teal-500 to-cyan-500',
    link: 'tel:+916379051789'
  },
  {
    icon: Mail,
    title: 'Email Inquiries',
    value: 'info@stefficlinic.com',
    sub: 'Direct clinical assistance',
    color: 'from-sky-500 to-blue-600',
    link: 'mailto:info@stefficlinic.com'
  },
  {
    icon: MapPin,
    title: 'Clinic Location',
    value: 'Mayiladuthurai, Tamil Nadu',
    sub: '19, Avayambalpuram St, opp. Vijaya Theatre',
    color: 'from-primary to-teal-700',
    link: 'https://maps.app.goo.gl/WkQbREsCsr7ztYhn6'
  },
]

const hours = [
  { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
  { day: 'Sunday & Public Holidays', time: 'Inpatient Nursing Care Available' },
]

function Contact() {
  return (
    <div className="overflow-hidden">
      <PageBanner
        title="Contact"
        highlight="Steffi Clinic"
        breadcrumb="Contact"
        subtitle="Specialised ENT Care, Thoughtfully Delivered. Reach out to our clinical team for consultations, diagnostic investigations, and surgical inquiries."
        badge="Specialised ENT Care • Mayiladuthurai, Tamil Nadu"
      />

      {/* Quick Contact Cards */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noreferrer' : undefined}
              variants={scaleIn}
              className="bg-white rounded-2xl p-7 shadow-md shadow-slate-900/5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 h-full group block"
            >
              <div className="w-14 h-14 bg-teal-50/90 text-primary border border-teal-200/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xs group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <info.icon size={26} strokeWidth={2.2} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{info.title}</h3>
              <p className="text-primary font-bold text-base">{info.value}</p>
              <p className="text-slate-500 text-xs mt-1 font-medium">{info.sub}</p>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Clinic Location & Working Hours Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Live Interactive Google Maps Card (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col"
            >
              {/* Header with Exact Address & Direct GMap Link */}
              <div className="bg-gradient-to-r from-slate-900 via-primary-dark to-slate-900 text-white p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Steffi Clinic Location</h3>
                      <p className="text-xs text-teal-300 font-semibold">Specialised ENT & Surgical Facilities</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/WkQbREsCsr7ztYhn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-sm shrink-0 cursor-pointer"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <p className="text-teal-100/90 text-sm font-medium leading-relaxed mt-3">
                  19, Avayambalpuram Street, Opposite to Vijaya Theatre, Gandhi Nagar, Mayiladuthurai, Tamil Nadu 609001
                </p>

                <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs text-teal-200/90">
                  <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">Landmark: Opp. Vijaya Theatre</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">Near Cutcherry Road</span>
                </div>
              </div>

              {/* Embedded Interactive Google Maps Iframe */}
              <div className="relative h-96 sm:h-[420px] w-full bg-slate-100">
                <iframe
                  title="Steffi Clinic Google Map"
                  src="https://maps.google.com/maps?q=11.1043359,79.6493735&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Quick Directions Strip */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">GPS Coordinates: 11.1043° N, 79.6494° E</span>
                <a
                  href="https://maps.app.goo.gl/WkQbREsCsr7ztYhn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Get Driving Directions</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Working Hours & Clinical Inquiry Information (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Working Hours Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-text">Clinic Hours</h3>
                    <p className="text-xs text-text-light font-medium">Consultation & Outpatient Care</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
                      <span className="text-text font-medium text-sm">{h.day}</span>
                      <span className={`text-sm font-bold ${h.time.includes('Inpatient') ? 'text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full' : 'text-primary'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-teal-50 border border-teal-100 rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-teal-800 uppercase tracking-wide">Direct Helpline</p>
                      <a href="tel:+916379051789" className="text-slate-900 font-extrabold text-base hover:text-primary transition-colors">
                        +91 6379051789
                      </a>
                    </div>
                  </div>
                  <a
                    href="tel:+916379051789"
                    className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-colors shadow-xs shrink-0"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Clinical Services Information Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-gray-100 space-y-4">
                <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <Stethoscope size={18} className="text-primary" />
                  <span>Available at this Location</span>
                </h4>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>5 Specialty Clinics:</strong> Allergy, Paediatric ENT, Sleep & Snoring, Vertigo, Voice.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Diagnostic Facilities:</strong> Pure Tone Audiometry (PTA) & Clinical Pathology Lab.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BedDouble size={16} className="text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Inpatient &amp; OT:</strong> Laminar-flow Operation Theatre, CSSD, and AC, Non-AC &amp; General Ward inpatient rooms.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex gap-3">
                  <a
                    href="https://maps.app.goo.gl/WkQbREsCsr7ztYhn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-slate-50 hover:bg-primary text-slate-800 hover:text-white rounded-xl font-bold text-center text-xs transition-colors border border-slate-200/90 hover:border-transparent flex items-center justify-center gap-2 shadow-xs"
                  >
                    <ExternalLink size={14} />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHEN YOU VISIT STEFFI CLINIC (AUTHENTIC FACILITY TOUR) ===== */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-primary font-bold text-xs uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-teal-600" />
              <span>Welcoming Clinic Environment</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              When You Visit Steffi Clinic
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Designed for patient convenience, comfort, and clinical hygiene. Here is what awaits you at our Mayiladuthurai center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Exterior Building */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={clinicExteriorImg}
                  alt="Steffi Clinic Hospital Building & Main Entrance"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-xs flex items-center gap-1.5">
                  <Building size={12} />
                  <span>Hospital Building</span>
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                    Clinic Facade & Entrance
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Conveniently located multi-storey ENT hospital opposite Vijaya Theatre with accessible roadside entry.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>Landmark location in Mayiladuthurai</span>
                </div>
              </div>
            </div>

            {/* Card 2: Reception */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={receptionImg}
                  alt="Steffi Clinic Main Reception & Welcome Desk"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-xs flex items-center gap-1.5">
                  <Building size={12} />
                  <span>Front Office</span>
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                    Main Reception & Inquiries
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hospitable registration desk assisting with appointments, consultations, and doctor schedules.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>Prompt registration & friendly assistance</span>
                </div>
              </div>
            </div>

            {/* Card 3: Waiting Lounge */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={waitingArea1Img}
                  alt="Steffi Clinic Patient Waiting Lounge"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-xs flex items-center gap-1.5">
                  <Users size={12} />
                  <span>Waiting Lounge</span>
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                    Comfortable Patient Seating
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spacious, calm waiting area with cushioned seating, clean air circulation, and direct clinic access.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>Relaxing and hygienic patient space</span>
                </div>
              </div>
            </div>

            {/* Card 4: Inpatient Suite */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={patientRoom2Img}
                  alt="Steffi Clinic Inpatient Suite"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-xs flex items-center gap-1.5">
                  <BedDouble size={12} />
                  <span>Inpatient Rooms</span>
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                    Private Recovery Suites
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Air-conditioned single rooms equipped with patient amenities, privacy, and 24/7 nursing supervision.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>Post-operative comfort & monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
