import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden" style={{background:'linear-gradient(180deg,#0b0a09 0%, #14110f 100%)'}}>
      {/* Background video placeholder (replace with 4K performance video) */}
      <video className="absolute inset-0 w-full h-full object-cover opacity-60" src="" autoPlay muted loop playsInline />

      {/* Spline ambience as fallback layer */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0b0a09] pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-[12vw] md:text-[120px] leading-none font-semibold tracking-tight text-transparent bg-clip-text"
            style={{backgroundImage:'linear-gradient(180deg,#D4AF37 0%, #C89D2B 60%, #8B6F1A 100%)', textShadow:'0 0 24px rgba(212,175,55,0.25)'}}
          >
            DJ DELUX
          </motion.h1>
          <p className="mt-6 text-[#F5F5DC] max-w-xl text-lg">
            <Typewriter>Electronic Music Visionary</Typewriter>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#mixes"
              data-magnetic
              className="px-7 py-3 rounded-full bg-[#D4AF37] text-[#0b0a09] font-medium shadow-[0_0_28px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] transition-shadow"
            >
              LISTEN NOW
            </a>
            <a
              href="#contact"
              data-magnetic
              className="px-7 py-3 rounded-full border border-[#8B4513]/40 text-[#FDF6E3] bg-[#8B4513]/20 backdrop-blur-sm hover:bg-[#8B4513]/30 transition-colors"
            >
              BOOK NOW
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="w-[2px] h-10 rounded-full bg-gradient-to-b from-[#FDF6E3]/70 to-transparent" />
      </div>
    </section>
  )
}

function Typewriter({ children }) {
  return (
    <span className="inline-block overflow-hidden align-top">
      <span className="[animation:blink_1.1s_steps(1)_infinite] after:content-[''] after:inline-block after:w-[2px] after:h-[1.1em] after:align-middle after:bg-[#F5F5DC]" style={{
        WebkitMaskImage: 'linear-gradient(90deg, #000 70%, transparent 100%)'
      }}>
        {children}
      </span>
      <style>{`@keyframes blink{50%{opacity:.1}}`}</style>
    </span>
  )
}
