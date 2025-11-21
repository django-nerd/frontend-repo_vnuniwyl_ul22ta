import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight text-white"
          >
            DJ DELUX — Electronic Music Performer & DJ
          </motion.h1>
          <p className="mt-6 text-slate-300 max-w-xl">
            Futuristic soundscapes, precision-crafted sets, and immersive experiences.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#mixes"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.55)] transition-shadow"
            >
              Listen Now
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/40 transition-colors"
            >
              Book / Collaborate
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="w-[2px] h-10 rounded-full bg-gradient-to-b from-white/70 to-white/0" />
      </div>
    </section>
  )
}
