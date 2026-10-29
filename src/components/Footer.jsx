import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react'
import logo from '../assets/logo.jpeg'
// import { Facebook, Twitter, Instagram, Linkedin } from './SocialIcons'

function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Newsletter Strip */}
      <div className="relative bg-gradient-to-r from-primary-dark via-primary to-primary-dark border-b border-white/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>

      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md shadow-primary/30 border border-white/20 shrink-0">
                <img
                  src={logo}
                  alt="STEFFI CLINIC Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-white">STEFFI</span>
                  <span className="text-xl font-extrabold text-primary-lighter">CLINIC</span>
                </div>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Specialised ENT & Surgical Center</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Expert ENT care, thoughtfully delivered. Dedicated specialty clinics, audiology assessment, diagnostic investigations, and advanced surgical facilities.
            </p>
            {/* Social media icons preserved for later use
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
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Our Consultants', path: '/doctors' },
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
            <h3 className="text-lg font-black mb-6">Our ENT Services</h3>
            <ul className="space-y-3">
              {[
                'Specialty ENT Clinics',
                'Audiology & Hearing Assessment',
                'Laboratory Investigations',
                'Operation Theatre & CSSD',
                'Advanced ENT Surgeries',
                'Inpatient Care & Recovery'
              ].map((service) => (
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
                  <a href="tel:+916379051789" className="text-white/90 text-sm font-medium hover:text-primary-light transition-colors">
                    +91 6379051789
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
                  <p className="text-white/90 text-sm font-medium">19, Avayambalpuram St, opp. Vijaya Theatre, Gandhi Nagar, Mayiladuthurai, Tamil Nadu 609001</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="glass-light p-2 rounded-xl shrink-0 border border-white/10">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase mb-1">Hours</p>
                  <p className="text-white/90 text-sm font-medium">Mon - Sat: 9:00 AM – 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} <a href="https://racs.info" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors font-medium">racs.info</a>. All rights reserved.</p>
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
