import { motion } from 'framer-motion'

export default function Biography() {
  return (
    <section id="bio" className="relative w-full bg-[#0E0D0B]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="group aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#D4AF37]/10 to-[#8B4513]/10 border border-[#D4AF37]/10 relative">
            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop" alt="DJ DELUX performing" className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.06]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B]/60 to-transparent" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#FDF6E3] tracking-tight">A refined approach to electronic music</h2>
          <p className="mt-6 text-[#F5F5DC]/90 leading-relaxed">
            DJ DELUX crafts immersive journeys through meticulously layered techno, house, and experimental electronica. With a focus on texture, energy, and cinematic flow, sets blend precision with emotion — designed for both intimate rooms and grand festival stages.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Stat label="Notable Performances" value="Berlin, Ibiza, Tokyo" />
            <Stat label="Years Active" value="10+" />
            <Stat label="Genres" value="Techno, House, Ambient" />
            <Stat label="Highlights" value="Boiler Room, Sonar, Printworks" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="p-5 rounded-2xl border border-[#D4AF37]/10 bg-white/5">
      <div className="text-[#F5F5DC]/70 text-xs uppercase tracking-widest">{label}</div>
      <div className="mt-2 text-[#FDF6E3] text-lg">{value}</div>
    </div>
  )
}
