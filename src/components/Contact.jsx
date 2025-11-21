import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Facebook, Music2 } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — your message has been sent. We will reply shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="w-full bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Contact & Collaboration</h3>
          <p className="mt-6 text-slate-300 max-w-xl">Bookings, events, residencies, and creative collaborations. Let’s craft a unique experience.</p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { icon: <Music2 size={18} />, title: 'Festivals', text: 'Sónar, ADE, Printworks' },
              { icon: <Music2 size={18} />, title: 'Clubs', text: 'Berlin, Ibiza, Tokyo' },
              { icon: <Music2 size={18} />, title: 'Productions', text: 'Studio collabs & remixes' },
              { icon: <Music2 size={18} />, title: 'Broadcast', text: 'Radio shows & live streams' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-white/90 text-sm flex items-center gap-2">{c.icon}{c.title}</div>
                <div className="text-slate-400 text-sm mt-1">{c.text}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="#" className="text-slate-300 hover:text-white transition-colors"><Instagram /></a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors"><Facebook /></a>
            <a href="mailto:hello@djdelux.com" className="text-slate-300 hover:text-white transition-colors"><Mail /></a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-300 text-sm">Name</label>
              <input required className="mt-2 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60" placeholder="Your name" />
            </div>
            <div>
              <label className="text-slate-300 text-sm">Email</label>
              <input type="email" required className="mt-2 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60" placeholder="name@email.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-slate-300 text-sm">Request Type</label>
            <select className="mt-2 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-blue-500/60">
              <option className="bg-slate-900">Collaboration</option>
              <option className="bg-slate-900">Event</option>
              <option className="bg-slate-900">Booking</option>
              <option className="bg-slate-900">Other</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-slate-300 text-sm">Message</label>
            <textarea required rows={6} className="mt-2 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60" placeholder="Tell me about your event or idea"></textarea>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.55)] transition-shadow">Send</button>
            <div className="text-sm text-slate-400">Response within 24h</div>
          </div>
          {status && <div className="mt-4 text-sm text-emerald-400">{status}</div>}
        </form>
      </div>
    </section>
  )
}
