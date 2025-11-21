import { useEffect, useRef } from 'react'

// Vintage gold palette
const GOLD = '#D4AF37'

export default function Cursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const particlesRef = useRef([])
  const rafRef = useRef(0)
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current

    // create particle elements
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div')
      p.className = 'pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 rounded-full'
      p.style.background = GOLD
      p.style.opacity = '0.8'
      p.style.filter = 'blur(0.2px)'
      p.style.transition = 'transform 0.12s linear, opacity 0.3s ease-out'
      document.body.appendChild(p)
      particlesRef.current.push({ el: p, x: target.current.x, y: target.current.y, life: 0 })
    }

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const animate = () => {
      // lerp ring
      pos.current.x += (target.current.x - pos.current.x) * 0.18
      pos.current.y += (target.current.y - pos.current.y) * 0.18

      const x = pos.current.x
      const y = pos.current.y

      if (ring) ring.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`
      if (dot) dot.style.transform = `translate3d(${target.current.x - 2}px, ${target.current.y - 2}px, 0)`

      // particles trail
      particlesRef.current.forEach((p, i) => {
        const dx = target.current.x + Math.cos(i) * 6
        const dy = target.current.y + Math.sin(i) * 6
        p.x += (dx - p.x) * (0.08 + i * 0.005)
        p.y += (dy - p.y) * (0.08 + i * 0.005)
        p.life += 1
        p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`
        p.el.style.opacity = String(0.9 - Math.min(0.8, p.life * 0.02))
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    // Magnetic hover for elements with data-magnetic
    const handleEnter = (e) => {
      ring && (ring.style.transform += ' scale(1.25)')
    }
    const handleLeave = (e) => {
      if (!ring) return
      ring.style.transition = 'transform 0.25s ease-out'
      ring.style.transform = `translate3d(${pos.current.x - 16}px, ${pos.current.y - 16}px, 0) scale(1)`
      setTimeout(() => (ring.style.transition = 'none'), 260)
    }
    const handleMagnet = (e) => {
      const targetEl = e.currentTarget
      const rect = targetEl.getBoundingClientRect()
      const relX = e.clientX - rect.left
      const relY = e.clientY - rect.top
      const moveX = (relX - rect.width / 2) * 0.15
      const moveY = (relY - rect.height / 2) * 0.15
      targetEl.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
    }

    const magnetics = Array.from(document.querySelectorAll('[data-magnetic]'))
    magnetics.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', (e) => {
        handleLeave(e)
        el.style.transform = 'translate3d(0,0,0)'
      })
      el.addEventListener('mousemove', handleMagnet)
    })

    // hide native cursor
    document.body.classList.add('cursor-none')

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      particlesRef.current.forEach((p) => p.el.remove())
      magnetics.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
        el.removeEventListener('mousemove', handleMagnet)
      })
      document.body.classList.remove('cursor-none')
    }
  }, [])

  return (
    <>
      <div ref={ringRef} aria-hidden className="pointer-events-none fixed z-[100] w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(212,175,55,0.9)] shadow-[0_0_18px_rgba(212,175,55,0.35)] mix-blend-screen" />
      <div ref={dotRef} aria-hidden className="pointer-events-none fixed z-[100] w-1 h-1 rounded-full bg-[rgba(212,175,55,0.95)]" />
    </>
  )
}
