import { useEffect, useRef } from 'react'

export default function MouseTrail() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const points = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })

    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1))

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.scale(DPR, DPR)
    }
    resize()

    let lastX = 0, lastY = 0
    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      const dx = x - lastX
      const dy = y - lastY
      const dist = Math.hypot(dx, dy)
      const segments = Math.max(1, Math.min(20, Math.floor(dist / 4)))
      for (let i = 0; i < segments; i++) {
        const t = i / segments
        points.current.push({
          x: lastX + dx * t,
          y: lastY + dy * t,
          life: 1,
          size: 10 + Math.random() * 14,
        })
      }
      lastX = x
      lastY = y
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Golden glow composite
      ctx.globalCompositeOperation = 'lighter'

      for (let i = points.current.length - 1; i >= 0; i--) {
        const p = points.current[i]
        p.life -= 0.02
        if (p.life <= 0) {
          points.current.splice(i, 1)
          continue
        }
        const alpha = Math.max(0, p.life)
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        // Warm gold to soft beige falloff
        grd.addColorStop(0, `rgba(212, 175, 55, ${0.35 * alpha})`) // #D4AF37
        grd.addColorStop(0.4, `rgba(212, 175, 55, ${0.18 * alpha})`)
        grd.addColorStop(1, `rgba(253, 246, 227, ${0.04 * alpha})`) // #FDF6E3
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5]"
    />
  )
}
