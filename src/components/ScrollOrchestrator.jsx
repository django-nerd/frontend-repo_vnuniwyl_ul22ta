import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollOrchestrator() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.9,
      smoothTouch: false,
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    raf(0)

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update)

    // Hero shrink on scroll
    const hero = document.querySelector('#home')
    if (hero) {
      gsap.to(hero, {
        height: '70vh',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=60%',
          scrub: true,
        },
      })

      // Text float up
      const title = hero.querySelector('h1')
      if (title) {
        gsap.fromTo(
          title,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 1.2,
            scrollTrigger: { trigger: hero, start: 'top 70%' },
          }
        )
      }
    }

    // Stagger reveals per section
    document.querySelectorAll('section').forEach((sec) => {
      const children = Array.from(sec.children)
      gsap.from(children, {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        ease: 'power2.out',
        duration: 0.6,
        scrollTrigger: { trigger: sec, start: 'top 75%' },
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
