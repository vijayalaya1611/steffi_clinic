import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Clock, MapPin, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.jpeg'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Reassurance Bar */}
      <div className={`bg-slate-900 text-slate-300 text-xs transition-all duration-300 border-b border-slate-800/80 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+916379051789"
              className="flex items-center gap-2 text-white hover:text-primary-light transition-colors group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Phone size={13} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">24/7 Helpline:</span>
              <span className="font-bold text-white tracking-wide">+91 6379051789</span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin size={13} className="text-primary-light" />
              <span>Mayiladuthurai, Tamil Nadu</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-primary-light" />
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Doctor on Duty
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Medical Clinic Logo */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="relative shrink-0">
                <img
                  src={logo}
                  alt="STEFFI CLINIC Logo"
                  className="w-12 h-12 rounded-2xl object-cover shadow-md shadow-primary/20 border border-slate-200/80 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">STEFFI</span>
                  <span className="text-2xl font-extrabold text-primary tracking-tight">CLINIC</span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-0.5">
                  Specialised ENT & Surgical Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-50/80 px-3 py-1.5 rounded-full border border-slate-200/60">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${isActive
                        ? 'text-primary'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/60 -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span>{link.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
              >
                <Phone size={14} className="text-primary" />
                <span>+91 6379051789</span>
              </a>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={14} className="opacity-80" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1.5 max-w-7xl mx-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive
                        ? 'text-primary bg-primary/10 font-bold'
                        : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <ArrowRight size={16} className="text-primary" />}
                  </Link>
                )
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="tel:+916379051789"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Phone size={16} className="text-primary" />
                  <span>Call Us: +91 6379051789</span>
                </a>

                <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white py-3.5 rounded-xl text-sm font-bold shadow-md shadow-primary/20">
                    <span>Contact Us</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
