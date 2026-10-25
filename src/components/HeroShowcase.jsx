import { Microscope, ShieldCheck } from 'lucide-react'
import operationRoomImg from '../assets/clinic/operation_room.webp'

export default function HeroShowcase() {
  return (
    <div className="relative w-full max-w-[440px] sm:max-w-[470px] lg:max-w-[480px] mx-auto py-2 sm:py-4 select-none">
      {/* Soft Static Ambient Glow behind the card */}
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-teal-400/20 via-sky-400/15 to-emerald-400/15 rounded-[2rem] blur-2xl pointer-events-none -z-10" />

      {/* Stable, Clean Medical Card Frame */}
      <div className="relative w-full rounded-3xl p-2 bg-white/95 backdrop-blur-md border-2 border-white/90 shadow-[0_20px_45px_-12px_rgba(0,109,119,0.22),0_8px_20px_-6px_rgba(15,23,42,0.08)]">
        {/* Inner Image Container */}
        <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[440px] rounded-[1.35rem] overflow-hidden bg-slate-900 shadow-inner">
          {/* Steady, High-Definition Operation Room Image (Zero Rolling/Zooming) */}
          <img
            src={operationRoomImg}
            alt="Steffi Clinic Laminar-Flow Operation Theatre"
            className="w-full h-full object-cover object-center brightness-[1.05] contrast-[1.03]"
            loading="eager"
          />

          {/* ===== CRISP & SHORT TEXT: TOP-RIGHT CORNER ===== */}
          <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/20 text-white shadow-md">
              <div className="w-6 h-6 rounded-lg bg-teal-500/25 text-teal-300 flex items-center justify-center shrink-0">
                <ShieldCheck size={14} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white leading-tight">
                  Laminar-Flow OT
                </div>
                <div className="text-[9px] font-medium text-emerald-400 leading-tight">
                  100% Sterile Air
                </div>
              </div>
            </div>
          </div>

          {/* ===== CRISP & SHORT TEXT: BOTTOM-LEFT CORNER ===== */}
          <div className="absolute bottom-3.5 left-3.5 z-20 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/20 text-white shadow-md">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/25 text-cyan-300 flex items-center justify-center shrink-0">
                <Microscope size={14} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white leading-tight">
                  Surgical Suite
                </div>
                <div className="text-[9px] font-medium text-slate-300 leading-tight">
                  Microscopes & Endoscopy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
