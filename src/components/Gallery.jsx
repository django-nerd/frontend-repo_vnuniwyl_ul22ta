import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1547072178-7a7b60bda2e0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="w-full bg-[#0E0D0B]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex items-end justify-between mb-10">
          <h3 className="text-3xl md:text-5xl font-semibold text-[#FDF6E3] tracking-tight">Photo & Video Gallery</h3>
          <p className="text-[#F5F5DC]/80 max-w-md hidden md:block">A curated selection of moments: stage craft, atmosphere, and energy. Subtle motion and light capture the essence of DELUX.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {images.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(src)}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-white/5"
            >
              <img src={src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["https://www.youtube.com/embed/5qap5aO4i9A", "https://www.youtube.com/embed/DWcJFNfaw9c", "https://player.vimeo.com/video/76979871"].map((src, i) => (
            <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37]/10 bg-white/5">
              <iframe className="w-full h-full" src={src} title={`Video ${i+1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.img src={active} alt="Full" className="max-h-[85vh] w-auto rounded-2xl border border-[#D4AF37]/10" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
