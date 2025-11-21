import { useEffect, useState, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Biography', href: '#bio' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Mixes & Tracks', href: '#mixes' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Click bloom effect
  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const handleClick = (e) => {
      const bloom = document.createElement('span')
      const rect = el.getBoundingClientRect()
      bloom.className = 'pointer-events-none absolute rounded-full'
      const size = 20
      bloom.style.width = `${size}px`
      bloom.style.height = `${size}px`
      bloom.style.left = `${e.clientX - rect.left - size / 2}px`
      bloom.style.top = `${e.clientY - rect.top - size / 2}px`
      bloom.style.background = 'radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0.1) 40%, rgba(212,175,55,0) 70%)'
      bloom.style.transform = 'scale(0)'
      bloom.style.transition = 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease-out'
      el.appendChild(bloom)
      requestAnimationFrame(() => {
        bloom.style.transform = 'scale(12)'
        bloom.style.opacity = '0'
      })
      setTimeout(() => bloom.remove(), 650)
    }

    el.addEventListener('click', handleClick)
    return () => el.removeEventListener('click', handleClick)
  }, [])

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-[rgba(139,69,19,0.35)] border-b border-[rgba(253,246,227,0.08)]' : 'bg-transparent'} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide text-[#FDF6E3] text-lg select-none">
          <span className="text-[#FDF6E3]">DJ </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B4513]">DELUX</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#F5F5DC]/80 hover:text-[#FDF6E3] transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D4AF37] hover:after:w-full after:transition-all">
              {item.label}
            </a>
          ))}
          <a data-magnetic href="#contact" className="px-4 py-2 rounded-full bg-[#D4AF37] text-[#0b0a09] text-sm shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:shadow-[0_0_36px_rgba(212,175,55,0.55)] transition-shadow">
            Book / Collaborate
          </a>
        </nav>
        <button data-magnetic className="md:hidden text-[#FDF6E3]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[rgba(253,246,227,0.08)] bg-[rgba(139,69,19,0.85)] backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-[#FDF6E3] py-2">
                {item.label}
              </a>
            ))}
            <a data-magnetic href="#contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-full text-center bg-[#D4AF37] text-[#0b0a09]">
              Book / Collaborate
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
