import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react'
import Prism from './Prism'

const pagePrismConfigs = {
  'About Us': {
    animationType: 'rotate',
    timeScale: 0.45,
    height: 3.5,
    baseWidth: 5.5,
    scale: 3.6,
    hueShift: 0, // Pure crystalline cyan-teal
    colorFrequency: 1.0,
    glow: 1.25,
    bloom: 1.1
  },
  'Services': {
    animationType: 'hover', // Interactive cursor-following tilt!
    hoverStrength: 2.5,
    inertia: 0.08,
    timeScale: 0.4,
    height: 3.6,
    baseWidth: 5.6,
    scale: 3.8,
    hueShift: 1.5, // Radiant emerald & aqua tones
    colorFrequency: 1.3,
    glow: 1.35,
    bloom: 1.15
  },
  'Doctors': {
    animationType: '3drotate', // Multi-axis 3D dynamic tumble!
    timeScale: 0.5,
    height: 3.3,
    baseWidth: 5.2,
    scale: 3.5,
    hueShift: 3.8, // Regal sapphire blue & violet-teal
    colorFrequency: 1.2,
    glow: 1.25,
    bloom: 1.2
  },
  'Contact': {
    animationType: 'hover', // Gentle welcoming hover response
    hoverStrength: 1.8,
    inertia: 0.05,
    timeScale: 0.35,
    height: 3.4,
    baseWidth: 5.4,
    scale: 3.4,
    hueShift: 5.4, // Warm amethyst & caring amber-teal
    colorFrequency: 0.9,
    glow: 1.3,
    bloom: 1.1
  },
  'Appointment': {
    animationType: 'rotate', // High-precision rapid rotation
    timeScale: 0.65,
    height: 3.7,
    baseWidth: 5.5,
    scale: 3.7,
    hueShift: 0.85, // Electric cyan & mint green
    colorFrequency: 1.5,
    glow: 1.35,
    bloom: 1.2
  }
}

function PageBanner({ title, highlight, breadcrumb, subtitle, badge, prismConfig = {} }) {
  const activePrism = {
    ...(pagePrismConfigs[breadcrumb] || pagePrismConfigs['About Us']),
    ...prismConfig
  }

  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 bg-slate-950 text-white border-b border-slate-800/80 overflow-hidden">
      {/* ===== CLEAN WEBGL PRISM BACKGROUND (ZERO DISTURBING OVERLAYS) ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Slate Medical Background */}
        <div className="absolute inset-0 bg-slate-950" />

        {/* Pure WebGL Prism Shader (Crystal Clear with Zero Noise) */}
        <div className="absolute inset-0 z-0">
          <Prism
            animationType={activePrism.animationType}
            timeScale={activePrism.timeScale}
            height={activePrism.height}
            baseWidth={activePrism.baseWidth}
            scale={activePrism.scale}
            hueShift={activePrism.hueShift}
            colorFrequency={activePrism.colorFrequency}
            hoverStrength={activePrism.hoverStrength ?? 2}
            inertia={activePrism.inertia ?? 0.05}
            noise={0}
            glow={activePrism.glow}
            bloom={activePrism.bloom}
            transparent={true}
            suspendWhenOffscreen={true}
          />
        </div>

        {/* Subtle Edge Vignette for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40 pointer-events-none" />
      </div>

      {/* ===== BANNER CONTENT ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Category Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/35 text-teal-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-teal-950/40 mb-5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{badge || 'Center for Healthcare Excellence'}</span>
          <Sparkles size={13} className="text-teal-400" />
        </motion.div>

        {/* Main Heading with Motion */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md"
        >
          {title}{' '}
          {highlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-sky-300 drop-shadow-sm">
              {highlight}
            </span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Dark Glass Breadcrumb Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700/80 text-xs font-semibold text-slate-300 shadow-lg backdrop-blur-md hover:border-teal-500/50 transition-colors"
        >
          <Link to="/" className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors">
            <HomeIcon size={13} />
            <span>Home</span>
          </Link>
          <ChevronRight size={13} className="text-slate-500" />
          <span className="text-teal-300 font-bold">{breadcrumb}</span>
        </motion.div>

        {/* Reassurance Feature Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 mt-8 text-xs font-medium text-slate-400"
        >
          <span className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
            Board-Certified Physicians
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
            Same-Day Appointments
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
            Major Health Insurances Accepted
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default PageBanner


