import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Microscope, BedDouble, Sparkles } from 'lucide-react'
import logo from '../assets/logo.jpeg'

export default function Hero3DLogo() {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  // Track mouse coordinates for tactile 3D tilt & specular reflection
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 to 0.5
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5 // -0.5 to 0.5

    // Tilt up to ±14 deg on Y (yaw) and ±12 deg on X (pitch)
    setTilt({
      x: +(xRatio * 26).toFixed(2),
      y: +(-yRatio * 22).toFixed(2)
    })

    // Dynamic glare center coordinates (0% to 100%)
    setGlare({
      x: +((xRatio + 0.5) * 100).toFixed(1),
      y: +((yRatio + 0.5) * 100).toFixed(1)
    })

    if (!isHovered) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50 })
  }

  return (
    <div
      className="relative w-full max-w-lg mx-auto flex items-center justify-center py-6 sm:py-8 select-none"
      style={{ perspective: 1200 }}
    >
      {/* ===== 1. AMBIENT ATMOSPHERIC LIGHTING & GLOW ===== */}
      {/* Primary Cyan/Sky Glow (Echoes logo stethoscope) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sky-400/30 via-teal-400/20 to-primary/25 blur-3xl pointer-events-none -z-10"
      />

      {/* Secondary Rose/Pink Glow (Echoes logo caring figure) */}
      <motion.div
        animate={{
          scale: [1.12, 0.94, 1.12],
          opacity: [0.25, 0.45, 0.25]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-pink-400/20 blur-2xl top-1/4 right-2 pointer-events-none -z-10"
      />

      {/* ===== 2. CONCENTRIC 3D DIAGNOSTIC ORBITAL RINGS ===== */}
      {/* Outer Rotating Dashed Ring with Orbiting Nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[300px] h-[300px] sm:w-[410px] sm:h-[410px] rounded-full border border-dashed border-sky-300/40 pointer-events-none -z-5 flex items-center justify-center"
      >
        <span className="absolute -top-1.5 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8] ring-2 ring-white" />
        <span className="absolute -bottom-1.5 w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] ring-2 ring-white" />
      </motion.div>

      {/* Inner Counter-Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] rounded-full border border-teal-200/35 pointer-events-none -z-5"
      />

      {/* ===== 3. ELEVATION WRAPPER (CONTINUOUS LEVITATION) ===== */}
      <motion.div
        animate={{
          y: isHovered ? -8 : [0, -12, 0]
        }}
        transition={
          isHovered
            ? { type: 'spring', stiffness: 300, damping: 25 }
            : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full flex items-center justify-center"
      >
        {/* ===== 4. THE 3D GLASS PEDESTAL CARD ===== */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={
            isHovered
              ? {
                  rotateX: tilt.y,
                  rotateY: tilt.x,
                  scale: 1.02
                }
              : {
                  rotateX: [2.5, -3, 2, 2.5],
                  rotateY: [-5, 5, -4, -5],
                  rotateZ: [-1, 1, -0.5, -1],
                  scale: 1
                }
          }
          transition={
            isHovered
              ? { type: 'spring', stiffness: 220, damping: 20 }
              : { duration: 7, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full max-w-[330px] sm:max-w-[390px] rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/95 via-white/90 to-sky-50/50 backdrop-blur-xl border-2 border-white/90 shadow-[0_25px_60px_-15px_rgba(2,132,199,0.2),0_12px_28px_-8px_rgba(15,23,42,0.08)] cursor-pointer"
        >
          {/* Subtle Outer Bevel Ring */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-slate-900/5 pointer-events-none" />

          {/* Interactive Specular Glare Reflection on Pedestal */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
            style={{
              background: isHovered
                ? `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)`
                : 'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)'
            }}
          />

          {/* ===== 5. 3D ELEVATED LOGO MEDALLION (High-Depth Layer) ===== */}
          <div
            className="relative mx-auto flex flex-col items-center justify-center"
            style={{ transform: 'translateZ(42px)', transformStyle: 'preserve-3d' }}
          >
            {/* Medallion Base Rim with Multi-Layer Shadow */}
            <div className="relative rounded-full p-2.5 sm:p-3.5 bg-gradient-to-br from-white via-white to-sky-50 border-4 border-white shadow-[0_22px_45px_rgba(2,132,199,0.24),0_6px_16px_rgba(15,23,42,0.08)] ring-2 ring-sky-100/90 transition-transform duration-300">
              
              {/* Pristine Circular Logo Mount */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-white flex items-center justify-center p-2.5">
                <img
                  src={logo}
                  alt="Steffi Clinic Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                  draggable={false}
                />

                {/* Animated Specular Light Beam Glare Sweep */}
                <motion.div
                  animate={{ x: ['-130%', '230%'] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-12 pointer-events-none"
                />

                {/* Glass Reflection Arc */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none opacity-45 mix-blend-overlay bg-gradient-to-b from-white via-transparent to-transparent"
                />
              </div>
            </div>

            {/* Clinic Brand Anchor Pill */}
            <div className="mt-4 flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-100/80 shadow-xs">
              <Sparkles size={13} className="text-sky-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 tracking-tight">STEFFI CLINIC</span>
              <span className="text-[10px] text-slate-300 font-medium">|</span>
              <span className="text-[11px] font-semibold text-primary">Specialised ENT Care</span>
            </div>
          </div>

          {/* ===== 6. FLOATING 3D BADGES (Parallax Planes) ===== */}
          {/* Floating Badge 1: Inpatient Rooms (Top Right) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transform: 'translateZ(55px)' }}
            className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 lg:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 sm:gap-3 z-30 pointer-events-auto"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 shadow-xs">
              <BedDouble size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-900">5 AC Single Rooms</span>
              </div>
              <p className="text-[11px] text-slate-500">Inpatient Recovery</p>
            </div>
          </motion.div>

          {/* Floating Badge 2: Operation Theatre (Bottom Left) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ transform: 'translateZ(55px)' }}
            className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 lg:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 sm:gap-3.5 z-30 pointer-events-auto"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
              <Microscope size={22} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-none mb-1">
                Laminar-Flow OT
              </div>
              <p className="text-xs font-semibold text-slate-600">Microsurgical & Endoscopy</p>
              <p className="text-[10px] text-emerald-600 font-medium">★ High CSSD Sterilization</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
