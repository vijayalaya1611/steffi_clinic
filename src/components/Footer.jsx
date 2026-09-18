import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeartPulse, Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react'
import { Facebook, Twitter, Instagram, Linkedin } from './SocialIcons'

function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Newsletter Strip */}
      <div className="relative bg-gradient-to-r from-primary-dark via-primary to-primary-dark border-b border-white/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight mb-1">Subscribe to Our Healthcare Newsletter</h3>
            <p className="text-slate-300 text-sm">Get verified health advice, wellness tips, and clinic updates directly to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-xl bg-white/15 placeholder-white/60 text-white border border-white/20 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 flex-1 md:w-80 text-sm font-medium transition"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm whitespace-nowrap flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Send size={16} />
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-md shadow-primary/30">
                <HeartPulse className="text-white w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-white">Steffi</span>
                  <span className="text-xl font-extrabold text-primary-lighter">Clinic</span>
                </div>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Medical & Wellness Center</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing compassionate, comprehensive healthcare for your entire family since 2009. We combine modern medicine with personalized care.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="glass-light p-2.5 rounded-xl hover:bg-primary transition-colors border border-white/10"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Our Doctors', path: '/doctors' },
                { name: 'Book Appointment', path: '/appointment' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['General Medicine', 'Pediatrics', 'Women\'s Health', 'Cardiology', 'Dermatology', 'Emergency Care'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-primary-light transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-black mb-6">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="glass-light p-2 rounded-xl shrink-0 border border-white/10">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase mb-1">Phone</p>
                  <a href="tel:+15551234567" className="text-white/90 text-sm font-medium hover:text-primary-light transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="glass-light p-2 rounded-xl shrink-0 border border-white/10">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase mb-1">Email</p>
                  <a href="mailto:info@stefficlinic.com" className="text-white/90 text-sm font-medium hover:text-primary-light transition-colors">
                    info@stefficlinic.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="glass-light p-2 rounded-xl shrink-0 border border-white/10">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase mb-1">Address</p>
                  <p className="text-white/90 text-sm font-medium">123 Healthcare Ave, Medical District, NY 10001</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="glass-light p-2 rounded-xl shrink-0 border border-white/10">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase mb-1">Hours</p>
                  <p className="text-white/90 text-sm font-medium">Mon-Fri: 8AM - 8PM</p>
                  <p className="text-white/90 text-sm font-medium">Sat: 9AM - 5PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Steffi Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
    </footer>
  )
}

export default Footer
