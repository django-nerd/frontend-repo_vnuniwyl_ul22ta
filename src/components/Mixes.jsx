import { motion } from 'framer-motion'

const mixes = [
  {
    title: 'DELUX Session 01',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13158665&color=%230a0a0a&inverse=false&auto_play=false&show_user=true',
  },
  {
    title: 'Warehouse Techno',
    embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX6J5NfMJS675?utm_source=generator&theme=0',
  },
  {
    title: 'Afterhours Set',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309699099&color=%230a0a0a&inverse=false&auto_play=false&show_user=true',
  },
]

export default function Mixes() {
  return (
    <section id="mixes" className="w-full bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex items-end justify-between mb-10">
          <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Mixes & Tracks</h3>
          <a href="#contact" className="hidden md:inline-block text-sm text-slate-300 hover:text-white transition-colors">Book / Collaborate ↗</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mixes.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white text-lg mb-4">{m.title}</div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  title={m.title}
                  className="w-full h-full"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  src={m.embed}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a href="#" className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm">Follow on Spotify</a>
          <a href="#" className="px-5 py-2 rounded-full border border-white/20 text-white text-sm">Follow on SoundCloud</a>
        </div>
      </div>
    </section>
  )
}
